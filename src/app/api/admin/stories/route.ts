import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || "fallback-secret-change-me");

async function getAdminUser(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin-token")?.value;
    if (!token) return null;
    const { payload } = await jwtVerify(token, SECRET);
    return payload;
  } catch { return null; }
}

export async function GET(req: NextRequest) {
  const user = await getAdminUser(req);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const stories = await prisma.story.findMany({
      orderBy: { createdAt: "desc" },
      include: { category: true, tags: true },
    });
    return NextResponse.json({ stories });
  } catch (e) {
    return NextResponse.json({ error: "Failed to fetch stories" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const user = await getAdminUser(req);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    const { title, slug, excerpt, content, status, seoTitle, seoDescription, coverImage, categoryId } = body;

    if (!title || !slug || !excerpt || !content) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    const story = await prisma.story.create({
      data: {
        title: title.trim(),
        slug: slug.trim().toLowerCase(),
        excerpt: excerpt.trim(),
        content: content.trim(),
        status: status || "DRAFT",
        publishedAt: status === "PUBLISHED" ? new Date() : null,
        seoTitle: seoTitle?.trim() || null,
        seoDescription: seoDescription?.trim() || null,
        coverImage: coverImage?.trim() || null,
        categoryId: categoryId || null,
        authorId: user.sub as string,
      },
    });
    return NextResponse.json(story, { status: 201 });
  } catch (e: any) {
    if (e?.code === "P2002") return NextResponse.json({ error: "A story with this slug already exists" }, { status: 409 });
    return NextResponse.json({ error: "Failed to create story" }, { status: 500 });
  }
}