"use client";
import { Share2, ExternalLink } from "lucide-react";

interface ShareButtonsProps { title: string; url: string; }

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const shares = [
    { label: "WhatsApp", href: "https://wa.me/?text=" + encodeURIComponent(title + " " + url), color: "#25D366" },
    { label: "LinkedIn", href: "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(url), color: "#0A66C2" },
    { label: "X / Twitter", href: "https://twitter.com/intent/tweet?text=" + encodeURIComponent(title) + "&url=" + encodeURIComponent(url), color: "#000" },
  ];
  return (
    <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--cream-border)" }}>
      <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink)", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
        <Share2 size={15} /> Share This Article
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {shares.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", padding: "10px 18px", border: "1px solid var(--cream-border)", borderRadius: 2, color: "var(--body-grey)", transition: "all 0.2s" }}
          >
            <ExternalLink size={12} /> {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}