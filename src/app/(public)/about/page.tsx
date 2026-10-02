import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Scale, BookOpen, Users, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Advocate Nikhil Shukla",
  description: "Learn about Advocate Nikhil Shukla, his practice areas, and his professional approach to criminal and matrimonial law in Delhi.",
};

const values = [
  { icon: Scale, title: "Professional Integrity", desc: "Honest, transparent legal guidance at every stage of your matter." },
  { icon: Shield, title: "Client-Centred Focus", desc: "Every matter receives personal attention tailored to its specific facts." },
  { icon: Users, title: "Clear Communication", desc: "You are kept informed throughout all proceedings in plain language." },
  { icon: BookOpen, title: "Thorough Preparation", desc: "Careful research and preparation for every matter, regardless of complexity." },
];

export default function AboutPage() {
  return (
    <div style={{ background: "var(--ivory)" }}>
      <section style={{ background: "var(--navy)", padding: "72px 0" }}>
        <div className="container">
          <span className="section-label">About</span>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: "clamp(32px, 4vw, 48px)", color: "var(--ivory)", marginTop: 12, marginBottom: 16, lineHeight: 1.2, maxWidth: 640 }}>
            Advocate Nikhil Shukla
          </h1>
          <div className="gold-divider" />
        </div>
      </section>

      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: "flex", gap: 64, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "0 0 300px", position: "relative" }}>
              <div style={{ position: "relative", width: "100%", height: 400, borderRadius: 2, overflow: "hidden", border: "1px solid var(--cream-border)" }}>
                <Image src="/advocate-portrait.jpg" alt="Advocate Nikhil Shukla" fill style={{ objectFit: "cover", objectPosition: "center top" }} sizes="300px" />
              </div>
              <div style={{ position: "absolute", top: 20, left: -4, width: 4, height: 80, background: "var(--gold)" }} />
            </div>

            <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: 24 }}>
              <span className="section-label">Professional Profile</span>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: "clamp(24px, 3vw, 34px)", color: "var(--ink)", lineHeight: 1.25 }}>
                A Practice Built on Dedicated Legal Service
              </h2>
              <div className="gold-divider" />
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, lineHeight: 1.85, color: "var(--body-grey)" }}>
                Advocate Nikhil Shukla regularly represents clients in criminal and matrimonial matters, including bail applications, criminal defense, cybercrime cases, divorce, maintenance, domestic violence, and child custody disputes.
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, lineHeight: 1.85, color: "var(--body-grey)" }}>
                He provides legal advice and representation before the Supreme Court of India, Court, and District Courts of Delhi, with a focus on protecting clients&apos; legal rights and interests.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 8 }}>
                {[
                  { label: "Courts of Practice", value: "Supreme Court of India · Court · District Courts of Delhi" },
                  { label: "Areas of Practice", value: "Criminal Law · Cybercrime · Matrimonial & Family Law" },
                  { label: "Approach", value: "Client-focused, confidential, and professionally dedicated" },
                ].map((item) => (
                  <div key={item.label} style={{ background: "#fff", border: "1px solid var(--cream-border)", borderRadius: 2, padding: "16px 20px", borderLeft: "3px solid var(--gold)" }}>
                    <strong style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 6 }}>{item.label}</strong>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--body-grey)" }}>{item.value}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn btn-gold" style={{ alignSelf: "flex-start", marginTop: 8 }}>
                Schedule a Consultation <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--navy)", padding: "72px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">Professional Values</span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: "clamp(26px, 3.5vw, 36px)", color: "var(--ivory)", marginTop: 12 }}>
              What You Can Expect
            </h2>
            <div className="gold-divider" style={{ margin: "16px auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {values.map((v) => (
              <div key={v.title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-dark)", borderRadius: 2, padding: "28px 24px" }}>
                <div style={{ width: 44, height: 44, borderRadius: 2, background: "rgba(201,162,39,0.1)", border: "1px solid rgba(201,162,39,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <v.icon size={20} color="var(--gold)" />
                </div>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 17, color: "var(--ivory)", marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "48px 0", borderTop: "1px solid var(--cream-border)" }}>
        <div className="container">
          <div style={{ maxWidth: 700, margin: "0 auto", padding: "24px 28px", background: "rgba(201,162,39,0.05)", border: "1px solid rgba(201,162,39,0.2)", borderRadius: 2 }}>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "var(--body-grey)", lineHeight: 1.8, textAlign: "center" }}>
              This website is for general informational purposes only. Nothing on this website constitutes legal advice or creates an attorney-client relationship. Please{" "}
              <Link href="/contact" style={{ color: "var(--gold)" }}>contact the office</Link>{" "}
              for a confidential consultation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}