import { prisma } from "@/lib/db/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";


const MATTER_LABELS: Record<string, string> = {
  CRIMINAL_DEFENSE: "Criminal Defense", BAIL: "Bail", CYBERCRIME: "Cybercrime",
  DIVORCE: "Divorce", MAINTENANCE: "Maintenance", DOMESTIC_VIOLENCE: "Domestic Violence",
  CHILD_CUSTODY: "Child Custody", OTHER: "Other",
};

const STATUS_STYLES: Record<string, { bg: string; color: string; border: string }> = {
  NEW: { bg: "rgba(248,113,113,0.15)", color: "#F87171", border: "rgba(248,113,113,0.3)" },
  CONTACTED: { bg: "rgba(96,165,250,0.15)", color: "#60A5FA", border: "rgba(96,165,250,0.3)" },
  IN_PROGRESS: { bg: "rgba(201,162,39,0.15)", color: "var(--gold)", border: "rgba(201,162,39,0.3)" },
  CLOSED: { bg: "rgba(75,85,99,0.3)", color: "#9CA3AF", border: "rgba(75,85,99,0.3)" },
};

async function getConsultations() {
  try {
    return await prisma.consultationRequest.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true, fullName: true, phone: true, email: true,
        matterType: true, briefDescription: true, status: true,
        preferredContactMethod: true, createdAt: true,
      },
    });
  } catch { return []; }
}

export default async function AdminConsultationsPage() {
  const consultations = await getConsultations();
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <div>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 28, color: "var(--ivory)", marginBottom: 4 }}>Consultation Requests</h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--muted)" }}>{consultations.length} total requests</p>
        </div>
      </div>

      <div style={{ background: "var(--navy)", border: "1px solid var(--border-dark)", borderRadius: 2, overflow: "hidden" }}>
        {consultations.length === 0 ? (
          <div style={{ padding: "60px", textAlign: "center", fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--muted)" }}>
            No consultation requests yet.
          </div>
        ) : (
          consultations.map((c) => {
            const statusStyle = STATUS_STYLES[c.status] || STATUS_STYLES.NEW;
            return (
              <div key={c.id} style={{ padding: "24px", borderBottom: "1px solid var(--border-dark)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 12 }}>
                  <div>
                    <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 17, color: "var(--ivory)", marginBottom: 4 }}>{c.fullName}</h3>
                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                      <a href={"tel:" + c.phone} style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "var(--gold)" }}>{c.phone}</a>
                      {c.email && <a href={"mailto:" + c.email} style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "var(--muted)" }}>{c.email}</a>}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                    <span className="tag-badge">{MATTER_LABELS[c.matterType] || c.matterType}</span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 2, background: statusStyle.bg, color: statusStyle.color, border: "1px solid " + statusStyle.border }}>
                      {c.status.replace("_", " ")}
                    </span>
                  </div>
                </div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--muted)", lineHeight: 1.7, marginBottom: 8 }}>{c.briefDescription}</p>
                <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                  {c.preferredContactMethod && (
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#5C6E7E" }}>Prefers: {c.preferredContactMethod}</span>
                  )}
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#5C6E7E" }}>
                    {new Date(c.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}