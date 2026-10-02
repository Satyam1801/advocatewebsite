import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { prisma } from "@/lib/db/prisma";
import { SITE_CONFIG } from "@/lib/site-config";
import ShareButtons from "@/components/ShareButtons";

interface Props { params: Promise<{ slug: string }>; }

export const dynamic = "force-dynamic";

async function getStory(slug: string) {
  try {
    return await prisma.story.findFirst({
      where: { slug, status: "PUBLISHED" },
      include: { category: true, tags: true, author: { select: { name: true } } },
    });
  } catch { return null; }
}

async function getRelated(storyId: string, categoryId: string | null) {
  try {
    return await prisma.story.findMany({
      where: { status: "PUBLISHED", id: { not: storyId }, ...(categoryId ? { categoryId } : {}) },
      orderBy: { publishedAt: "desc" }, take: 3,
      select: { id: true, title: true, slug: true, coverImage: true, category: { select: { name: true } } },
    });
  } catch { return []; }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = await getStory(slug);
  if (!story) return {};
  return {
    title: story.seoTitle || story.title,
    description: story.seoDescription || story.excerpt,
    openGraph: {
      title: story.seoTitle || story.title,
      description: story.seoDescription || story.excerpt,
      images: story.coverImage ? [{ url: story.coverImage }] : [],
      type: "article",
    },
  };
}

export default async function StoryDetailPage({ params }: Props) {
  const { slug } = await params;
  const story = await getStory(slug);
  if (!story) notFound();

  const related = await getRelated(story.id, story.categoryId);
  const shareUrl = SITE_CONFIG.url + "/stories/" + slug;

  return (
    <div style={{ background: "var(--ivory)" }}>
      <section style={{ background: "var(--navy)", padding: "64px 0 0" }}>
        <div className="container">
          <Link href="/stories" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "Inter, sans-serif", fontSize: 13, color: "var(--gold)", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600, marginBottom: 28 }}>
            <ArrowLeft size={14} /> Stories
          </Link>
          {story.category && <span className="tag-badge" style={{ display: "inline-block", marginBottom: 16 }}>{story.category.name}</span>}
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: "clamp(28px, 4vw, 48px)", color: "var(--ivory)", lineHeight: 1.2, maxWidth: 760, marginBottom: 24 }}>
            {story.title}
          </h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", paddingBottom: 32, borderBottom: "1px solid var(--border-dark)" }}>
            {story.publishedAt && (
              <span style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "Inter, sans-serif", fontSize: 13, color: "var(--muted)" }}>
                <Calendar size={14} color="var(--gold)" />
                <time dateTime={story.publishedAt.toISOString()}>
                  {new Date(story.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                </time>
              </span>
            )}
            {story.tags.length > 0 && (
              <span style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "Inter, sans-serif", fontSize: 13, color: "var(--muted)" }}>
                <Tag size={14} color="var(--gold)" />
                {story.tags.map((t) => t.name).join(", ")}
              </span>
            )}
          </div>
        </div>
      </section>

      {story.coverImage && (
        <div style={{ position: "relative", height: 420, overflow: "hidden" }}>
          <Image src={story.coverImage} alt={story.title} fill style={{ objectFit: "cover" }} sizes="100vw" priority />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(245,242,236,0.8))" }} />
        </div>
      )}

      <section style={{ padding: "56px 0 80px" }}>
        <div className="container">
          <div style={{ display: "flex", gap: 56, alignItems: "flex-start", flexWrap: "wrap" }}>
            <article style={{ flex: "1 1 580px", minWidth: 0 }}>
              <div className="prose" dangerouslySetInnerHTML={{ __html: story.content }} />
              <ShareButtons title={story.title} url={shareUrl} />
            </article>

            <aside style={{ flex: "0 0 280px", minWidth: 0 }}>
              <div style={{ background: "var(--navy)", border: "1px solid var(--border-dark)", borderRadius: 2, padding: "24px", position: "sticky", top: 100 }}>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 16, color: "var(--ivory)", marginBottom: 16 }}>Need Legal Advice?</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--muted)", lineHeight: 1.7, marginBottom: 20 }}>
                  Schedule a confidential consultation with Advocate Nikhil Shukla.
                </p>
                <Link href="/contact" className="btn btn-gold" style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                  Schedule Consultation
                </Link>
              </div>
              <div style={{ marginTop: 20, padding: "16px 20px", background: "rgba(201, 162, 39, 0.05)", border: "1px solid rgba(201, 162, 39, 0.2)", borderRadius: 2 }}>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "var(--body-grey)", lineHeight: 1.7 }}>
                  This article is for general legal awareness only and does not constitute legal advice.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section style={{ background: "var(--navy-dark)", padding: "64px 0", borderTop: "1px solid var(--border-dark)" }}>
          <div className="container">
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 28, color: "var(--ivory)", marginBottom: 32 }}>Related Stories</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
              {related.map((s) => (
                <Link key={s.id} href={"/stories/" + s.slug}
                  style={{ background: "var(--navy)", border: "1px solid var(--border-dark)", borderRadius: 2, overflow: "hidden", display: "flex", flexDirection: "column", textDecoration: "none" }}
                >
                  {s.coverImage && (
                    <div style={{ position: "relative", height: 160 }}>
                      <Image src={s.coverImage} alt={s.title} fill style={{ objectFit: "cover" }} sizes="350px" />
                    </div>
                  )}
                  <div style={{ padding: 20 }}>
                    {s.category && <span className="tag-badge" style={{ display: "inline-block", marginBottom: 10 }}>{s.category.name}</span>}
                    <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 17, color: "var(--ivory)", lineHeight: 1.35 }}>{s.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}