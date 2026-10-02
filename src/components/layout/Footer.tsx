"use client";
import Link from "next/link";
import { Scale, Phone, Mail, MapPin, Clock, ArrowRight, Globe } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

const practiceLinks = [
  { label: "Criminal Defense", href: "/practice-areas/criminal-defense" },
  { label: "Bail Applications", href: "/practice-areas/bail-applications" },
  { label: "Cybercrime", href: "/practice-areas/cybercrime-cyber-fraud" },
  { label: "Divorce", href: "/practice-areas/divorce" },
  { label: "Domestic Violence", href: "/practice-areas/domestic-violence" },
  { label: "Child Custody", href: "/practice-areas/child-custody" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy-dark)", color: "#C7CDD3" }}>
      {/* Main footer content */}
      <div className="container" style={{ padding: "64px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48 }}>

          {/* Brand column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 38, height: 38, borderRadius: "50%",
                border: "2px solid var(--gold)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Scale size={18} color="var(--gold)" aria-hidden="true" />
              </div>
              <div>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 17, fontWeight: 700, color: "var(--ivory)" }}>
                  Nikhil Shukla
                </div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)" }}>
                  Advocate
                </div>
              </div>
            </Link>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.8, color: "#8A99A6" }}>
              Professional legal representation in criminal and matrimonial matters before the Supreme Court of India, Court, and District Courts of Delhi.
            </p>
            <div style={{ height: 1, background: "var(--border-dark)" }} />
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#8A99A6", fontStyle: "italic" }}>
              This website does not constitute legal advice. Consultation with an advocate is recommended for specific legal matters.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 16, fontWeight: 600, color: "var(--ivory)", marginBottom: 20 }}>
              Practice Areas
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {practiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#8A99A6", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#8A99A6")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 16, fontWeight: 600, color: "var(--ivory)", marginBottom: 20 }}>
              Navigation
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/#about" },
                { label: "Stories", href: "/stories" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Disclaimer", href: "/disclaimer" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#8A99A6", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#8A99A6")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 16, fontWeight: 600, color: "var(--ivory)", marginBottom: 20 }}>
              Contact
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <Phone size={15} color="var(--gold)" style={{ marginTop: 2, flexShrink: 0 }} aria-hidden="true" />
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#8A99A6" }}>
                  {SITE_CONFIG.phone}
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <Mail size={15} color="var(--gold)" style={{ marginTop: 2, flexShrink: 0 }} aria-hidden="true" />
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#8A99A6" }}>
                  {SITE_CONFIG.email}
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <MapPin size={15} color="var(--gold)" style={{ marginTop: 2, flexShrink: 0 }} aria-hidden="true" />
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#8A99A6", lineHeight: 1.7 }}>
                  {SITE_CONFIG.address}
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <Clock size={15} color="var(--gold)" style={{ marginTop: 2, flexShrink: 0 }} aria-hidden="true" />
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#8A99A6" }}>
                  {SITE_CONFIG.officeHours}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid var(--border-dark)" }}>
        <div className="container" style={{ padding: "20px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#5C6E7E" }}>
            © {new Date().getFullYear()} Nikhil Shukla, Advocate. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <Link href="/privacy-policy" style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#5C6E7E", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#5C6E7E")}
            >Privacy Policy</Link>
            <Link href="/disclaimer" style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#5C6E7E", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#5C6E7E")}
            >Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
