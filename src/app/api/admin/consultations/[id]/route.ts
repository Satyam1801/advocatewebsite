import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || "fallback-secret-change-me");

async function getAdminUser() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin-token")?.value;
    if (!token) return null;
    const { payload } = await jwtVerify(token, SECRET);
    return payload;
  } catch { return null; }
}

interface Props { params: Promise<{ id: string }>; }

export async function PATCH(req: NextRequest, { params }: Props) {
  const user = await getAdminUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  try {
    const body = await req.json();
    const { status, adminNotes } = body;
    const updated = await prisma.consultationRequest.update({
      where: { id },
      data: { ...(status ? { status } : {}), ...(adminNotes !== undefined ? { adminNotes } : {}) },
    });
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}