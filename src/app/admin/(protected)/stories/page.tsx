import Link from "next/link";
import { prisma } from "@/lib/db/prisma";
import { Plus, Pencil } from "lucide-react";

export const dynamic = "force-dynamic";


async function getStories() {
  try {
    return await prisma.story.findMany({
      orderBy: { createdAt: "desc" },
      select: { id: true, title: true, slug: true, status: true, publishedAt: true, category: { select: { name: true } }, createdAt: true },
    });
  } catch { return []; }
}

const STATUS_COLOR: Record<string, string> = {
  PUBLISHED: "#34D399", DRAFT: "#60A5FA", ARCHIVED: "#9CA3AF",
};

export default async function AdminStoriesPage() {
  const stories = await getStories();
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <div>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 28, color: "var(--ivory)", marginBottom: 4 }}>Stories</h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--muted)" }}>{stories.length} articles total</p>
        </div>
        <Link href="/admin/stories/new" className="btn btn-gold">
          <Plus size={15} /> New Story
        </Link>
      </div>

      <div style={{ background: "var(--navy)", border: "1px solid var(--border-dark)", borderRadius: 2, overflow: "hidden" }}>
        {stories.length === 0 ? (
          <div style={{ padding: "60px", textAlign: "center" }}>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--muted)", marginBottom: 20 }}>No stories yet.</p>
            <Link href="/admin/stories/new" className="btn btn-gold">Create First Story</Link>
          </div>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border-dark)" }}>
                {["Title", "Category", "Status", "Date", ""].map((h) => (
                  <th key={h} style={{ padding: "12px 20px", textAlign: "left", fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stories.map((s) => (
                <tr key={s.id} style={{ borderBottom: "1px solid var(--border-dark)" }}>
                  <td style={{ padding: "14px 20px" }}>
                    <Link href={"/admin/stories/" + s.id} style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--ivory)", fontWeight: 500, transition: "color 0.2s" }}>
                      {s.title}
                    </Link>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#5C6E7E", marginTop: 2 }}>/stories/{s.slug}</div>
                  </td>
                  <td style={{ padding: "14px 20px", fontFamily: "Inter, sans-serif", fontSize: 13, color: "var(--muted)" }}>
                    {s.category?.name || "—"}
                  </td>
                  <td style={{ padding: "14px 20px" }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: STATUS_COLOR[s.status] || "#9CA3AF" }}>
                      ● {s.status}
                    </span>
                  </td>
                  <td style={{ padding: "14px 20px", fontFamily: "Inter, sans-serif", fontSize: 13, color: "var(--muted)" }}>
                    {new Date(s.publishedAt || s.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </td>
                  <td style={{ padding: "14px 20px" }}>
                    <Link href={"/admin/stories/" + s.id} style={{ display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "Inter, sans-serif", fontSize: 12, color: "var(--gold)" }}>
                      <Pencil size={12} /> Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}