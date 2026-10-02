"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Save, Trash2, Eye } from "lucide-react";
import Link from "next/link";

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}

export default function EditStoryPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [form, setForm] = useState({
    title: "", slug: "", excerpt: "", content: "",
    status: "DRAFT", seoTitle: "", seoDescription: "", coverImage: "",
  });

  useEffect(() => {
    if (!id) return;
    fetch("/api/admin/stories/" + id, { credentials: "include" })
      .then((r) => r.json())
      .then((data) => {
        if (data.id) setForm({
          title: data.title || "", slug: data.slug || "",
          excerpt: data.excerpt || "", content: data.content || "",
          status: data.status || "DRAFT", seoTitle: data.seoTitle || "",
          seoDescription: data.seoDescription || "", coverImage: data.coverImage || "",
        });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const updateField = (field: string, val: string) => setForm((p) => ({ ...p, [field]: val }));

  const handleSave = async () => {
    setSaving(true); setError(""); setSuccess("");
    try {
      const res = await fetch("/api/admin/stories/" + id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        credentials: "include",
      });
      if (res.ok) setSuccess("Saved successfully.");
      else { const d = await res.json(); setError(d.error || "Save failed"); }
    } catch { setError("Network error"); }
    finally { setSaving(false); }
  };

  const handleDelete = async () => {
    if (!confirm("Delete this story? This cannot be undone.")) return;
    setDeleting(true);
    const res = await fetch("/api/admin/stories/" + id, { method: "DELETE", credentials: "include" });
    if (res.ok) router.push("/admin/stories");
    else setDeleting(false);
  };

  const inputStyle = { width: "100%", padding: "10px 14px", background: "var(--navy-light)", border: "1px solid var(--border-dark)", borderRadius: 2, fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--ivory)", outline: "none" };
  const labelStyle = { fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600 as const, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--muted)", display: "block" as const, marginBottom: 8 };

  if (loading) return <div style={{ color: "var(--muted)", fontFamily: "Inter, sans-serif" }}>Loading...</div>;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Link href="/admin/stories" style={{ color: "var(--muted)" }}><ArrowLeft size={20} /></Link>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 22, color: "var(--ivory)" }}>Edit Story</h1>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <Link href={"/stories/" + form.slug} target="_blank" className="btn btn-outline" style={{ borderColor: "var(--border-dark)", color: "var(--muted)", padding: "10px 18px" }}>
            <Eye size={14} /> Preview
          </Link>
          <button onClick={handleDelete} disabled={deleting} style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 18px", background: "none", border: "1px solid rgba(220,38,38,0.4)", borderRadius: 2, color: "#F87171", fontFamily: "Inter, sans-serif", fontSize: 13, cursor: "pointer" }}>
            <Trash2 size={14} /> Delete
          </button>
          <button onClick={handleSave} disabled={saving} className="btn btn-gold">
            <Save size={14} /> {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>

      {error && <div style={{ marginBottom: 16, padding: "12px 16px", background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.3)", borderRadius: 2, fontFamily: "Inter, sans-serif", fontSize: 14, color: "#FCA5A5" }}>{error}</div>}
      {success && <div style={{ marginBottom: 16, padding: "12px 16px", background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.3)", borderRadius: 2, fontFamily: "Inter, sans-serif", fontSize: 14, color: "#6EE7B7" }}>{success}</div>}

      <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 480px", display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ background: "var(--navy)", border: "1px solid var(--border-dark)", borderRadius: 2, padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
            <div><label style={labelStyle}>Title *</label><input type="text" value={form.title} onChange={(e) => updateField("title", e.target.value)} style={{ ...inputStyle, fontSize: 18 }} /></div>
            <div><label style={labelStyle}>Slug *</label><input type="text" value={form.slug} onChange={(e) => updateField("slug", e.target.value)} style={inputStyle} /></div>
            <div><label style={labelStyle}>Excerpt *</label><textarea rows={3} value={form.excerpt} onChange={(e) => updateField("excerpt", e.target.value)} style={{ ...inputStyle, resize: "vertical" }} /></div>
            <div><label style={labelStyle}>Content (HTML) *</label><textarea rows={22} value={form.content} onChange={(e) => updateField("content", e.target.value)} style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7, fontFamily: "monospace" }} /></div>
          </div>
        </div>
        <aside style={{ flex: "0 0 280px", display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ background: "var(--navy)", border: "1px solid var(--border-dark)", borderRadius: 2, padding: 20 }}>
            <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 16, color: "var(--ivory)", marginBottom: 16 }}>Publishing</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div><label style={labelStyle}>Status</label>
                <select value={form.status} onChange={(e) => updateField("status", e.target.value)} style={inputStyle}>
                  <option value="DRAFT">Draft</option>
                  <option value="PUBLISHED">Published</option>
                  <option value="ARCHIVED">Archived</option>
                </select>
              </div>
              <div><label style={labelStyle}>Cover Image URL</label><input type="text" value={form.coverImage} onChange={(e) => updateField("coverImage", e.target.value)} style={inputStyle} placeholder="https://..." /></div>
            </div>
          </div>
          <div style={{ background: "var(--navy)", border: "1px solid var(--border-dark)", borderRadius: 2, padding: 20 }}>
            <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 16, color: "var(--ivory)", marginBottom: 16 }}>SEO</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div><label style={labelStyle}>SEO Title</label><input type="text" value={form.seoTitle} onChange={(e) => updateField("seoTitle", e.target.value)} style={inputStyle} maxLength={70} /></div>
              <div><label style={labelStyle}>SEO Description</label><textarea rows={3} value={form.seoDescription} onChange={(e) => updateField("seoDescription", e.target.value)} style={{ ...inputStyle, resize: "none" }} maxLength={160} /></div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}