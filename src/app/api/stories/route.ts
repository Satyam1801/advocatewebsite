import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const limit = Math.min(parseInt(searchParams.get("limit") || "10"), 50);
    const page = Math.max(parseInt(searchParams.get("page") || "1"), 1);
    const skip = (page - 1) * limit;

    const where = {
      status: "PUBLISHED" as const,
      ...(category ? { category: { slug: category } } : {}),
    };

    const [stories, total] = await Promise.all([
      prisma.story.findMany({
        where,
        orderBy: { publishedAt: "desc" },
        skip,
        take: limit,
        select: {
          id: true, title: true, slug: true, excerpt: true,
          coverImage: true, publishedAt: true,
          category: { select: { name: true, slug: true } },
          tags: { select: { name: true } },
        },
      }),
      prisma.story.count({ where }),
    ]);

    return NextResponse.json({ stories, total, page, totalPages: Math.ceil(total / limit) });
  } catch (error) {
    console.error("Stories API error:", error);
    return NextResponse.json({ error: "Failed to fetch stories" }, { status: 500 });
  }
}