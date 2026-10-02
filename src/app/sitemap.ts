import { MetadataRoute } from "next";
import { SITE_CONFIG, PRACTICE_AREAS_DATA } from "@/lib/site-config";
import { prisma } from "@/lib/db/prisma";

export const dynamic = "force-dynamic";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = SITE_CONFIG.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: base + "/practice-areas", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: base + "/stories", lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: base + "/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/privacy-policy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: base + "/disclaimer", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    ...PRACTICE_AREAS_DATA.map((a) => ({
      url: base + "/practice-areas/" + a.slug,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  let storyRoutes: MetadataRoute.Sitemap = [];
  try {
    const stories = await prisma.story.findMany({
      where: { status: "PUBLISHED" },
      select: { slug: true, updatedAt: true },
    });
    storyRoutes = stories.map((s) => ({
      url: base + "/stories/" + s.slug,
      lastModified: s.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch { }

  return [...staticRoutes, ...storyRoutes];
}