"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Eye } from "lucide-react";
import Link from "next/link";

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}

export default function NewStoryPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    title: "", slug: "", excerpt: "", content: "",
    status: "DRAFT", seoTitle: "", seoDescription: "", categoryId: "", coverImage: "",
  });

  const updateField = (field: string, val: string) =>
    setForm((p) => ({ ...p, [field]: val }));

  const handleTitleChange = (val: string) => {
    setForm((p) => ({ ...p, title: val, slug: slugify(val) }));
  };

  const handleSave = async () => {
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/admin/stories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) {
        router.push("/admin/stories/" + data.id);
      } else {
        setError(data.error || "Failed to save story");
      }
    } catch {
      setError("Network error");
    } finally {
      setSaving(false);
    }
  };

  const inputStyle = { width: "100%", padding: "10px 14px", background: "var(--navy-light)", border: "1px solid var(--border-dark)", borderRadius: 2, fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--ivory)", outline: "none" };
  const labelStyle = { fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600 as const, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--muted)", display: "block" as const, marginBottom: 8 };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Link href="/admin/stories" style={{ color: "var(--muted)" }}><ArrowLeft size={20} /></Link>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 24, color: "var(--ivory)" }}>New Story</h1>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <button onClick={() => updateField("status", "DRAFT")} className="btn btn-outline" style={{ borderColor: "var(--border-dark)", color: "var(--muted)" }}>
            Save Draft
          </button>
          <button onClick={handleSave} disabled={saving} className="btn btn-gold">
            <Save size={14} /> {saving ? "Saving..." : "Publish"}
          </button>
        </div>
      </div>

      {error && (
        <div style={{ marginBottom: 20, padding: "12px 16px", background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.3)", borderRadius: 2, fontFamily: "Inter, sans-serif", fontSize: 14, color: "#FCA5A5" }}>
          {error}
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 24, alignItems: "start" }}>
        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ background: "var(--navy)", border: "1px solid var(--border-dark)", borderRadius: 2, padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <label style={labelStyle}>Title *</label>
              <input type="text" value={form.title} onChange={(e) => handleTitleChange(e.target.value)} style={{ ...inputStyle, fontFamily: '"Playfair Display", serif', fontSize: 20 }} placeholder="Story title..." />
            </div>
            <div>
              <label style={labelStyle}>Slug *</label>
              <input type="text" value={form.slug} onChange={(e) => updateField("slug", e.target.value)} style={inputStyle} placeholder="story-slug" />
            </div>
            <div>
              <label style={labelStyle}>Excerpt *</label>
              <textarea rows={3} value={form.excerpt} onChange={(e) => updateField("excerpt", e.target.value)} style={{ ...inputStyle, resize: "vertical" }} placeholder="Brief summary shown in listings..." />
            </div>
            <div>
              <label style={labelStyle}>Content *</label>
              <textarea rows={20} value={form.content} onChange={(e) => updateField("content", e.target.value)} style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }} placeholder="Write your story content here (HTML supported)..." />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ background: "var(--navy)", border: "1px solid var(--border-dark)", borderRadius: 2, padding: 20 }}>
            <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 16, color: "var(--ivory)", marginBottom: 16 }}>Publishing</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <label style={labelStyle}>Status</label>
                <select value={form.status} onChange={(e) => updateField("status", e.target.value)} style={inputStyle}>
                  <option value="DRAFT">Draft</option>
                  <option value="PUBLISHED">Published</option>
                  <option value="ARCHIVED">Archived</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Cover Image URL</label>
                <input type="text" value={form.coverImage} onChange={(e) => updateField("coverImage", e.target.value)} style={inputStyle} placeholder="https://..." />
              </div>
            </div>
          </div>

          <div style={{ background: "var(--navy)", border: "1px solid var(--border-dark)", borderRadius: 2, padding: 20 }}>
            <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 16, color: "var(--ivory)", marginBottom: 16 }}>SEO</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <label style={labelStyle}>SEO Title</label>
                <input type="text" value={form.seoTitle} onChange={(e) => updateField("seoTitle", e.target.value)} style={inputStyle} placeholder="Max 70 chars" maxLength={70} />
              </div>
              <div>
                <label style={labelStyle}>SEO Description</label>
                <textarea rows={3} value={form.seoDescription} onChange={(e) => updateField("seoDescription", e.target.value)} style={{ ...inputStyle, resize: "none" }} placeholder="Max 160 chars" maxLength={160} />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}