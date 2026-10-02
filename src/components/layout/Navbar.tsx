"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Scale } from "lucide-react";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Stories", href: "/stories" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        background: "var(--navy)",
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: scrolled ? "1px solid var(--border-dark)" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.4)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 0", gap: 24 }}>
          {/* Brand */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }} aria-label="Nikhil Shukla Advocate — Home">
            <div style={{
              width: 38, height: 38, borderRadius: "50%",
              border: "2px solid var(--gold)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <Scale size={18} color="var(--gold)" aria-hidden="true" />
            </div>
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 18, fontWeight: 700, color: "var(--ivory)", letterSpacing: "0.02em" }}>
                Nikhil Shukla
              </div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)" }}>
                Advocate
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden-mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#C7CDD3",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#C7CDD3")}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-gold" style={{ padding: "11px 22px" }}>
              Schedule Consultation
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="show-mobile"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "var(--ivory)", padding: 8,
            }}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          style={{
            background: "var(--navy-dark)",
            borderTop: "1px solid var(--border-dark)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
          role="navigation"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#C7CDD3",
                padding: "14px 0",
                borderBottom: "1px solid var(--border-dark)",
                display: "block",
                transition: "color 0.2s",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn btn-gold"
            onClick={() => setIsOpen(false)}
            style={{ marginTop: 16, textAlign: "center", justifyContent: "center" }}
          >
            Schedule Consultation
          </Link>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } }
      `}</style>
    </header>
  );
}
