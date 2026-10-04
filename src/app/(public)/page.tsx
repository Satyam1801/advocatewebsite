import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Shield, Scale, Monitor, Heart, FileText, IndianRupee,
  Home, Users, Gavel, ArrowRight, Phone
} from "lucide-react";
import { SITE_CONFIG, PRACTICE_AREAS_DATA } from "@/lib/site-config";
import { prisma } from "@/lib/db/prisma";

export const metadata: Metadata = {
  title: "Advocate Nikhil Shukla — Criminal & Matrimonial Law | Delhi",
  description: SITE_CONFIG.description,
};

const iconMap: Record<string, React.ElementType> = {
  Shield, Scale, Monitor, Heart, FileText, IndianRupee, Home, Users, Gavel,
};

const WHY_CHOOSE = [
  { title: "Personal Attention", desc: "Every matter is handled with individual focus and care." },
  { title: "Professional Guidance", desc: "Clear, honest legal advice at every stage of your matter." },
  { title: "Clear Communication", desc: "You are kept informed throughout the proceedings." },
  { title: "Matter-Specific Strategy", desc: "Approach tailored to the specific facts of your case." },
  { title: "Confidential Consultation", desc: "Your matters are handled with complete confidentiality." },
  { title: "Dedicated Representation", desc: "Committed legal representation before the competent courts." },
];

async function getLatestStories() {
  try {
    return await prisma.story.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { publishedAt: "desc" },
      take: 3,
      select: {
        id: true, title: true, slug: true, excerpt: true,
        coverImage: true, publishedAt: true,
        category: { select: { name: true, slug: true } },
      },
    });
  } catch { return []; }
}

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const stories = await getLatestStories();

  return (
    <>
      {/* HERO */}
      <section id="hero" style={{ background: "var(--navy)", padding: "80px 0" }} aria-label="Hero section">
        <div className="container">
          <div style={{ display: "flex", gap: 64, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: 24 }}>
              <span className="section-label">Criminal · Matrimonial · Cybercrime Law</span>
              <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: "clamp(36px, 5vw, 54px)", color: "var(--ivory)", lineHeight: 1.15, fontWeight: 700 }}>
                Protecting Your Rights, Defending Your Interests, Delivering Justice.
              </h1>
              <div className="gold-divider" />
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, lineHeight: 1.85, color: "#B5BDC5", maxWidth: 520 }}>
                Advocate Nikhil Shukla represents individuals in criminal and matrimonial matters before the Supreme Court of India, Court, and District Courts of Delhi, with a commitment to protecting clients&apos; legal rights.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-gold" id="hero-cta-primary">Schedule a Consultation</Link>
                <Link href="/practice-areas" className="btn btn-outline" id="hero-cta-secondary">View Practice Areas</Link>
              </div>
            </div>

            <div style={{ flex: "0 0 320px", position: "relative", alignSelf: "stretch", minHeight: 400 }}>
              <div style={{ position: "relative", width: "100%", height: "100%", minHeight: 400, borderRadius: 2, overflow: "hidden", border: "1px solid var(--border-dark)" }}>
                <Image src="/advocate-portrait.jpg" alt="Advocate Nikhil Shukla — Portrait" fill sizes="(max-width: 768px) 100vw, 320px" style={{ objectFit: "contain", objectPosition: "center bottom" }} priority />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,23,32,0.7) 0%, transparent 60%)" }} />
              </div>
              <div style={{ position: "absolute", top: 20, left: -4, width: 4, height: 80, background: "var(--gold)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE HIGHLIGHTS BAR */}
      <section style={{ background: "var(--navy-dark)", borderBottom: "1px solid var(--border-dark)", padding: "28px 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
            {["Criminal Matters", "Bail Applications", "Cybercrime", "Matrimonial Matters", "Divorce & Maintenance", "Child Custody"].map((item) => (
              <span key={item} className="tag-badge">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section id="about" style={{ padding: "88px 0", background: "var(--ivory)" }}>
        <div className="container">
          <div style={{ display: "flex", gap: 64, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: 20 }}>
              <span className="section-label">About</span>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: "clamp(28px, 3.5vw, 38px)", color: "var(--ink)", lineHeight: 1.25 }}>A Practice Built on Professional Dedication</h2>
              <div className="gold-divider" />
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, lineHeight: 1.85, color: "var(--body-grey)" }}>
                Advocate Nikhil Shukla regularly represents clients in criminal and matrimonial matters, including bail applications, criminal defense, cybercrime cases, divorce, maintenance, domestic violence, and child custody disputes before the Supreme Court of India, Court, and District Courts of Delhi.
              </p>
              <Link href="/about" className="btn btn-ghost">Read More <ArrowRight size={15} aria-hidden="true" /></Link>
            </div>
            <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { title: "Courts of Practice", desc: "Supreme Court of India, Court, and District Courts of Delhi" },
                { title: "Areas of Practice", desc: "Criminal Law · Bail Applications · Cybercrime · Matrimonial & Family Law" },
                { title: "Professional Approach", desc: "Client-focused, confidential, and dedicated representation" },
              ].map((card) => (
                <div key={card.title} style={{ background: "#fff", border: "1px solid var(--cream-border)", borderRadius: 2, padding: "20px 24px", borderLeft: "3px solid var(--gold)" }}>
                  <strong style={{ fontFamily: '"Playfair Display", serif', fontSize: 16, color: "var(--ink)", display: "block", marginBottom: 6 }}>{card.title}</strong>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#5A6875", lineHeight: 1.6 }}>{card.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section id="practice-areas" style={{ background: "var(--navy)", padding: "88px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label">Practice Areas</span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: "clamp(28px, 3.5vw, 38px)", color: "var(--ivory)", marginTop: 12, lineHeight: 1.2 }}>How the Firm Can Help</h2>
            <div className="gold-divider" style={{ margin: "16px auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {PRACTICE_AREAS_DATA.map((area) => {
              const Icon = iconMap[area.icon] || Gavel;
              return (
                <Link key={area.slug} href={`/practice-areas/${area.slug}`} className="practice-card-dark" style={{ background: "var(--navy-light)", border: "1px solid var(--border-dark)", borderRadius: 2, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 14, textDecoration: "none" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 2, background: "rgba(201,162,39,0.1)", border: "1px solid rgba(201,162,39,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={20} color="var(--gold)" aria-hidden="true" />
                  </div>
                  <div>
                    <strong style={{ fontFamily: '"Playfair Display", serif', fontSize: 17, color: "var(--ivory)", display: "block", marginBottom: 8 }}>{area.title}</strong>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--muted)", lineHeight: 1.65 }}>{area.shortDescription}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--gold)", fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "auto" }}>
                    Learn More <ArrowRight size={13} aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/practice-areas" className="btn btn-ghost">View All Practice Areas <ArrowRight size={15} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section id="why-us" style={{ padding: "88px 0", background: "var(--ivory)" }}>
        <div className="container">
          <div style={{ display: "flex", gap: 64, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: 20, position: "sticky", top: 100 }}>
              <span className="section-label">Why Choose</span>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: "clamp(28px, 3vw, 36px)", color: "var(--ink)", lineHeight: 1.25 }}>Dedicated Legal Representation</h2>
              <div className="gold-divider" />
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, lineHeight: 1.8, color: "var(--body-grey)" }}>Every matter receives personal attention and a strategy tailored to its unique facts — with honest guidance at every stage.</p>
              <Link href="/contact" className="btn btn-gold" style={{ alignSelf: "flex-start" }}>Schedule Consultation <ArrowRight size={15} aria-hidden="true" /></Link>
            </div>
            <div style={{ flex: "1 1 380px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {WHY_CHOOSE.map((item) => (
                <div key={item.title} style={{ background: "#fff", border: "1px solid var(--cream-border)", borderRadius: 2, padding: "24px" }}>
                  <strong style={{ fontFamily: '"Playfair Display", serif', fontSize: 15, color: "var(--ink)", display: "block", marginBottom: 8 }}>{item.title}</strong>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#5A6875", lineHeight: 1.7 }}>{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STORIES PREVIEW */}
      {stories.length > 0 && (
        <section id="stories" style={{ background: "var(--navy-dark)", padding: "88px 0" }}>
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 48 }}>
              <div>
                <span className="section-label">Stories</span>
                <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: "clamp(28px, 3.5vw, 38px)", color: "var(--ivory)", marginTop: 12 }}>Latest Legal Insights</h2>
              </div>
              <Link href="/stories" className="btn btn-outline">View All Stories <ArrowRight size={15} aria-hidden="true" /></Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
              {stories.map((story) => (
                <Link key={story.id} href={`/stories/${story.slug}`} className="story-card" style={{ background: "var(--navy-light)", border: "1px solid var(--border-dark)", borderRadius: 2, overflow: "hidden", display: "flex", flexDirection: "column", textDecoration: "none" }}>
                  {story.coverImage && (
                    <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                      <Image src={story.coverImage} alt={story.title} fill style={{ objectFit: "cover" }} sizes="400px" />
                    </div>
                  )}
                  <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                    {story.category && <span className="tag-badge" style={{ alignSelf: "flex-start" }}>{story.category.name}</span>}
                    <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 19, color: "var(--ivory)", lineHeight: 1.35 }}>{story.title}</h3>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--muted)", lineHeight: 1.7, flex: 1 }}>{story.excerpt}</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: 12, borderTop: "1px solid var(--border-dark)" }}>
                      {story.publishedAt && (
                        <time style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#5C6E7E" }} dateTime={story.publishedAt.toISOString()}>
                          {new Date(story.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                        </time>
                      )}
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gold)", display: "flex", alignItems: "center", gap: 4 }}>Read <ArrowRight size={12} aria-hidden="true" /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA BANNER */}
      <section style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)", padding: "80px 0", borderTop: "1px solid var(--border-dark)", borderBottom: "1px solid var(--border-dark)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="gold-divider" style={{ margin: "0 auto 24px" }} />
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: "clamp(26px, 3.5vw, 42px)", color: "var(--ivory)", marginBottom: 20, lineHeight: 1.25 }}>
            Have a legal matter that requires<br />professional attention?
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 17, color: "#8A99A6", marginBottom: 36, maxWidth: 500, margin: "0 auto 36px" }}>
            Schedule a consultation with Advocate Nikhil Shukla.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-gold" id="cta-schedule">Schedule a Consultation <ArrowRight size={15} aria-hidden="true" /></Link>
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn btn-outline" id="cta-phone"><Phone size={15} aria-hidden="true" /> Call Now</a>
          </div>
        </div>
      </section>
    </>
  );
}