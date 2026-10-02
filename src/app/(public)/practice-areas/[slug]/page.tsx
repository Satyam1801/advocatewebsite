import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Scale } from "lucide-react";
import { PRACTICE_AREAS_DATA } from "@/lib/site-config";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return PRACTICE_AREAS_DATA.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = PRACTICE_AREAS_DATA.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: area.title + " — Advocate Nikhil Shukla",
    description: area.shortDescription,
  };
}

export default async function PracticeAreaDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = PRACTICE_AREAS_DATA.find((a) => a.slug === slug);
  if (!area) notFound();

  const currentIndex = PRACTICE_AREAS_DATA.findIndex((a) => a.slug === slug);
  const prev = currentIndex > 0 ? PRACTICE_AREAS_DATA[currentIndex - 1] : null;
  const next = currentIndex < PRACTICE_AREAS_DATA.length - 1 ? PRACTICE_AREAS_DATA[currentIndex + 1] : null;

  return (
    <div style={{ background: "var(--ivory)" }}>
      <section style={{ background: "var(--navy)", padding: "72px 0" }}>
        <div className="container">
          <Link href="/practice-areas" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "Inter, sans-serif", fontSize: 13, color: "var(--gold)", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600, marginBottom: 28 }}>
            <ArrowLeft size={14} /> Practice Areas
          </Link>
          <span className="section-label">Practice Area</span>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: "clamp(32px, 4vw, 48px)", color: "var(--ivory)", marginTop: 12, lineHeight: 1.15, maxWidth: 700 }}>
            {area.title}
          </h1>
          <div className="gold-divider" style={{ marginTop: 20 }} />
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 17, color: "#B5BDC5", marginTop: 20, maxWidth: 600, lineHeight: 1.8 }}>
            {area.shortDescription}
          </p>
        </div>
      </section>

      <section style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ display: "flex", gap: 56, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 480px" }}>
              <div style={{ background: "#fff", border: "1px solid var(--cream-border)", borderRadius: 2, padding: "40px", borderLeft: "3px solid var(--gold)" }}>
                <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 26, color: "var(--ink)", marginBottom: 20 }}>About This Practice Area</h2>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "var(--body-grey)", lineHeight: 1.85 }}>{area.shortDescription}</p>
                <br />
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "var(--body-grey)", lineHeight: 1.85 }}>
                  Advocate Nikhil Shukla provides legal advice and representation in this practice area before the Supreme Court of India, Court, and District Courts of Delhi. Each matter is handled with professional attention and a strategy tailored to its specific facts.
                </p>
                <br />
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "var(--body-grey)", lineHeight: 1.85 }}>
                  For a detailed discussion specific to your situation, please schedule a confidential consultation.
                </p>
              </div>
              <div style={{ marginTop: 24, padding: "16px 20px", background: "rgba(201, 162, 39, 0.05)", border: "1px solid rgba(201, 162, 39, 0.2)", borderRadius: 2, fontFamily: "Inter, sans-serif", fontSize: 13, color: "var(--body-grey)", lineHeight: 1.7 }}>
                <strong style={{ color: "var(--ink)" }}>Note:</strong> This information is for general awareness only and does not constitute legal advice.
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--cream-border)" }}>
                {prev ? (
                  <Link href={"/practice-areas/" + prev.slug} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "Inter, sans-serif", fontSize: 13, color: "var(--body-grey)" }}>
                    <ArrowLeft size={14} /> {prev.title}
                  </Link>
                ) : <div />}
                {next && (
                  <Link href={"/practice-areas/" + next.slug} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "Inter, sans-serif", fontSize: 13, color: "var(--body-grey)" }}>
                    {next.title} <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            </div>
            <aside style={{ flex: "0 0 300px", minWidth: 0 }}>
              <div style={{ background: "var(--navy)", border: "1px solid var(--border-dark)", borderRadius: 2, padding: "28px 24px", position: "sticky", top: 100 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <Scale size={20} color="var(--gold)" />
                  <span style={{ fontFamily: '"Playfair Display", serif', fontSize: 16, color: "var(--ivory)" }}>Schedule a Consultation</span>
                </div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--muted)", lineHeight: 1.7, marginBottom: 20 }}>
                  Discuss your matter with Advocate Nikhil Shukla.
                </p>
                <Link href="/contact" className="btn btn-gold" style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                  Get in Touch
                </Link>
              </div>
              <div style={{ marginTop: 24, background: "#fff", border: "1px solid var(--cream-border)", borderRadius: 2, padding: "24px" }}>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 16, color: "var(--ink)", marginBottom: 16 }}>Other Practice Areas</h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {PRACTICE_AREAS_DATA.filter((a) => a.slug !== slug).slice(0, 5).map((a) => (
                    <li key={a.slug}>
                      <Link href={"/practice-areas/" + a.slug} style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--body-grey)", display: "flex", alignItems: "center", gap: 6 }}>
                        <ArrowRight size={12} /> {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}