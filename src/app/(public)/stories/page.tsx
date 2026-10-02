import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { prisma } from "@/lib/db/prisma";

export const metadata: Metadata = {
  title: "Legal Stories & Insights — Advocate Nikhil Shukla",
  description: "Legal awareness articles on criminal law, bail, cybercrime, matrimonial law, divorce, and more.",
};

export const dynamic = "force-dynamic";

async function getStories() {
  try {
    return await prisma.story.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { publishedAt: "desc" },
      select: {
        id: true, title: true, slug: true, excerpt: true,
        coverImage: true, publishedAt: true,
        category: { select: { name: true, slug: true } },
      },
    });
  } catch { return []; }
}

async function getCategories() {
  try {
    return await prisma.storyCategory.findMany({ orderBy: { name: "asc" }, select: { id: true, name: true, slug: true } });
  } catch { return []; }
}

export default async function StoriesPage() {
  const [stories, categories] = await Promise.all([getStories(), getCategories()]);

  return (
    <div style={{ background: "var(--ivory)" }}>
      <section style={{ background: "var(--navy)", padding: "72px 0" }}>
        <div className="container">
          <span className="section-label">Stories</span>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: "clamp(32px, 4vw, 48px)", color: "var(--ivory)", marginTop: 12, marginBottom: 16, lineHeight: 1.2 }}>
            Legal Insights & Awareness
          </h1>
          <div className="gold-divider" />
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "#B5BDC5", marginTop: 20, maxWidth: 560, lineHeight: 1.8 }}>
            Educational articles on criminal law, bail applications, cybercrime, matrimonial matters, and more.
          </p>
        </div>
      </section>

      {categories.length > 0 && (
        <section style={{ background: "var(--navy-dark)", padding: "20px 0", borderBottom: "1px solid var(--border-dark)" }}>
          <div className="container" style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5C6E7E" }}>Filter:</span>
            {categories.map((cat) => (
              <Link key={cat.id} href={"/stories?category=" + cat.slug} className="tag-badge">{cat.name}</Link>
            ))}
          </div>
        </section>
      )}

      <section style={{ padding: "64px 0" }}>
        <div className="container">
          {stories.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <BookOpen size={48} color="var(--muted)" style={{ margin: "0 auto 20px" }} />
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 24, color: "var(--ink)", marginBottom: 12 }}>No Stories Yet</h2>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "var(--body-grey)" }}>Stories will appear here once published via the admin panel.</p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 28 }}>
              {stories.map((story) => (
                <Link
                  key={story.id}
                  href={"/stories/" + story.slug}
                  className="story-card"
                  style={{ background: "#fff", border: "1px solid var(--cream-border)", borderRadius: 2, overflow: "hidden", display: "flex", flexDirection: "column", textDecoration: "none" }}
                >
                  {story.coverImage ? (
                    <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                      <Image src={story.coverImage} alt={story.title} fill style={{ objectFit: "cover" }} sizes="400px" />
                    </div>
                  ) : (
                    <div style={{ height: 80, background: "var(--navy)", display: "flex", alignItems: "center", padding: "0 24px" }}>
                      <BookOpen size={24} color="var(--gold)" />
                    </div>
                  )}
                  <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                    {story.category && <span className="tag-badge" style={{ alignSelf: "flex-start" }}>{story.category.name}</span>}
                    <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 20, color: "var(--ink)", lineHeight: 1.35 }}>{story.title}</h2>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--body-grey)", lineHeight: 1.7, flex: 1 }}>{story.excerpt}</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 16, borderTop: "1px solid var(--cream-border)", marginTop: "auto" }}>
                      {story.publishedAt && (
                        <time style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#8A99A6" }} dateTime={new Date(story.publishedAt).toISOString()}>
                          {new Date(story.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                        </time>
                      )}
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gold)", display: "flex", alignItems: "center", gap: 4 }}>
                        Read <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}