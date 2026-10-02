"use client";
import { useState } from "react";
import { Save } from "lucide-react";

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);

  return (
    <div>
      <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 28, color: "var(--ivory)", marginBottom: 8 }}>Website Settings</h1>
      <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--muted)", marginBottom: 32 }}>
        Configure website-wide settings. Contact information is set via environment variables.
      </p>

      <div style={{ background: "var(--navy)", border: "1px solid var(--border-dark)", borderRadius: 2, padding: 28, maxWidth: 640 }}>
        <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 18, color: "var(--ivory)", marginBottom: 20 }}>Contact Information</h2>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--muted)", lineHeight: 1.7, marginBottom: 20 }}>
          Update these in your environment variables (.env.local for development, Vercel dashboard for production):
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { key: "NEXT_PUBLIC_PHONE", desc: "Phone number displayed on website" },
            { key: "NEXT_PUBLIC_WHATSAPP", desc: "WhatsApp number (digits only)" },
            { key: "NEXT_PUBLIC_EMAIL", desc: "Contact email address" },
            { key: "NEXT_PUBLIC_ADDRESS", desc: "Office address" },
            { key: "NEXT_PUBLIC_OFFICE_HOURS", desc: "Office hours text" },
          ].map((item) => (
            <div key={item.key} style={{ background: "var(--navy-light)", border: "1px solid var(--border-dark)", borderRadius: 2, padding: "14px 18px" }}>
              <code style={{ fontFamily: "monospace", fontSize: 13, color: "var(--gold)" }}>{item.key}</code>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "var(--muted)", marginTop: 4 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}