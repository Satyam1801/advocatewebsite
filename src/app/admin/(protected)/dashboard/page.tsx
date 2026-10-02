import { prisma } from "@/lib/db/prisma";
import { BookOpen, Scale, Users, FileText } from "lucide-react";

export const dynamic = "force-dynamic";


async function getStats() {
  try {
    const [published, drafts, areas, consultations, recent] = await Promise.all([
      prisma.story.count({ where: { status: "PUBLISHED" } }),
      prisma.story.count({ where: { status: "DRAFT" } }),
      prisma.practiceArea.count({ where: { isPublished: true } }),
      prisma.consultationRequest.count({ where: { status: "NEW" } }),
      prisma.consultationRequest.findMany({
        orderBy: { createdAt: "desc" }, take: 5,
        select: { id: true, fullName: true, matterType: true, status: true, createdAt: true, phone: true },
      }),
    ]);
    return { published, drafts, areas, consultations, recent };
  } catch { return { published: 0, drafts: 0, areas: 0, consultations: 0, recent: [] }; }
}

const statCard = (label: string, value: number, icon: React.ElementType, color: string) => {
  const Icon = icon;
  return (
    <div style={{ background: "var(--navy)", border: "1px solid var(--border-dark)", borderRadius: 2, padding: "24px", display: "flex", alignItems: "center", gap: 20 }}>
      <div style={{ width: 48, height: 48, borderRadius: 2, background: color + "15", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon size={22} color={color} />
      </div>
      <div>
        <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 30, fontWeight: 700, color: "var(--ivory)" }}>{value}</div>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "var(--muted)" }}>{label}</div>
      </div>
    </div>
  );
};

const MATTER_LABELS: Record<string, string> = {
  CRIMINAL_DEFENSE: "Criminal Defense", BAIL: "Bail", CYBERCRIME: "Cybercrime",
  DIVORCE: "Divorce", MAINTENANCE: "Maintenance", DOMESTIC_VIOLENCE: "Domestic Violence",
  CHILD_CUSTODY: "Child Custody", OTHER: "Other",
};

export default async function AdminDashboardPage() {
  const stats = await getStats();
  return (
    <div>
      <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 28, color: "var(--ivory)", marginBottom: 8 }}>Dashboard</h1>
      <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--muted)", marginBottom: 32 }}>
        Welcome back. Here is an overview of your website.
      </p>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginBottom: 40 }}>
        {statCard("Published Stories", stats.published, BookOpen, "var(--gold)")}
        {statCard("Draft Stories", stats.drafts, FileText, "#60A5FA")}
        {statCard("Practice Areas", stats.areas, Scale, "#34D399")}
        {statCard("New Consultations", stats.consultations, Users, "#F87171")}
      </div>

      {/* Recent consultations */}
      <div style={{ background: "var(--navy)", border: "1px solid var(--border-dark)", borderRadius: 2, overflow: "hidden" }}>
        <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--border-dark)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 18, color: "var(--ivory)" }}>Recent Consultation Requests</h2>
          <a href="/admin/consultations" style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "var(--gold)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            View All
          </a>
        </div>
        {stats.recent.length === 0 ? (
          <div style={{ padding: "40px", textAlign: "center", fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--muted)" }}>
            No consultation requests yet.
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-dark)" }}>
                  {["Name", "Phone", "Matter", "Status", "Date"].map((h) => (
                    <th key={h} style={{ padding: "12px 24px", textAlign: "left", fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stats.recent.map((r) => (
                  <tr key={r.id} style={{ borderBottom: "1px solid var(--border-dark)" }}>
                    <td style={{ padding: "14px 24px", fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--ivory)" }}>{r.fullName}</td>
                    <td style={{ padding: "14px 24px", fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--muted)" }}>{r.phone}</td>
                    <td style={{ padding: "14px 24px", fontFamily: "Inter, sans-serif", fontSize: 13, color: "var(--muted)" }}>{MATTER_LABELS[r.matterType] || r.matterType}</td>
                    <td style={{ padding: "14px 24px" }}>
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 2, background: r.status === "NEW" ? "rgba(248,113,113,0.15)" : "rgba(201,162,39,0.15)", color: r.status === "NEW" ? "#F87171" : "var(--gold)", border: "1px solid " + (r.status === "NEW" ? "rgba(248,113,113,0.3)" : "rgba(201,162,39,0.3)") }}>
                        {r.status}
                      </span>
                    </td>
                    <td style={{ padding: "14px 24px", fontFamily: "Inter, sans-serif", fontSize: 13, color: "var(--muted)" }}>
                      {new Date(r.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}