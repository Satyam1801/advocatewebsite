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

export async function GET(req: NextRequest) {
  const user = await getAdminUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const consultations = await prisma.consultationRequest.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ consultations });
  } catch {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}