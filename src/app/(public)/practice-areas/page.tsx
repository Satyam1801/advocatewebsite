import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Scale, Monitor, Heart, FileText, IndianRupee, Home, Users, Gavel } from "lucide-react";
import { PRACTICE_AREAS_DATA } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Practice Areas — Criminal, Matrimonial & Cybercrime Law",
  description: "Advocate Nikhil Shukla handles criminal defense, bail applications, cybercrime, divorce, maintenance, domestic violence, and child custody matters.",
};

const iconMap: Record<string, React.ElementType> = {
  Shield, Scale, Monitor, Heart, FileText, IndianRupee, Home, Users, Gavel,
};

export default function PracticeAreasPage() {
  return (
    <div style={{ background: "var(--ivory)" }}>
      <section style={{ background: "var(--navy)", padding: "72px 0" }}>
        <div className="container">
          <span className="section-label">Practice Areas</span>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: "clamp(32px, 4vw, 48px)", color: "var(--ivory)", marginTop: 12, marginBottom: 16, lineHeight: 1.2 }}>
            How the Firm Can Help
          </h1>
          <div className="gold-divider" />
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "#B5BDC5", marginTop: 20, maxWidth: 600, lineHeight: 1.8 }}>
            Legal representation and advice in criminal, matrimonial, and cybercrime matters before the Supreme Court of India, Court, and District Courts of Delhi.
          </p>
        </div>
      </section>

      <section style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
            {PRACTICE_AREAS_DATA.map((area) => {
              const Icon = iconMap[area.icon] || Gavel;
              return (
                <Link
                  key={area.slug}
                  href={"/practice-areas/" + area.slug}
                  className="practice-card"
                  style={{ background: "#fff", border: "1px solid var(--cream-border)", borderRadius: 2, padding: "32px 28px", display: "flex", flexDirection: "column", gap: 16, textDecoration: "none", borderLeft: "3px solid transparent", transition: "all 0.25s ease" }}
                >
                  <div style={{ width: 48, height: 48, borderRadius: 2, background: "rgba(201, 162, 39, 0.08)", border: "1px solid rgba(201, 162, 39, 0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={22} color="var(--gold)" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 20, color: "var(--ink)", marginBottom: 10 }}>
                      {area.title}
                    </h2>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--body-grey)", lineHeight: 1.7 }}>
                      {area.shortDescription}
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--gold)", fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "auto" }}>
                    Learn More <ArrowRight size={13} aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--navy-dark)", padding: "64px 0", borderTop: "1px solid var(--border-dark)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 32, color: "var(--ivory)", marginBottom: 16 }}>
            Not sure which area applies to your matter?
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "#8A99A6", marginBottom: 32 }}>
            Schedule a consultation and Advocate Nikhil Shukla will guide you.
          </p>
          <Link href="/contact" className="btn btn-gold">
            Schedule a Consultation <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}