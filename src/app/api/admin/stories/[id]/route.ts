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

export async function GET(req: NextRequest, { params }: Props) {
  const user = await getAdminUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  try {
    const story = await prisma.story.findUnique({ where: { id }, include: { category: true, tags: true } });
    if (!story) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(story);
  } catch { return NextResponse.json({ error: "Failed" }, { status: 500 }); }
}

export async function PATCH(req: NextRequest, { params }: Props) {
  const user = await getAdminUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  try {
    const body = await req.json();
    const { status, publishedAt, ...rest } = body;
    const story = await prisma.story.update({
      where: { id },
      data: {
        ...rest,
        status: status || undefined,
        publishedAt: status === "PUBLISHED" && !publishedAt ? new Date() : publishedAt ? new Date(publishedAt) : undefined,
      },
    });
    return NextResponse.json(story);
  } catch (e: any) {
    if (e?.code === "P2002") return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: Props) {
  const user = await getAdminUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  try {
    await prisma.story.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch { return NextResponse.json({ error: "Failed to delete" }, { status: 500 }); }
}