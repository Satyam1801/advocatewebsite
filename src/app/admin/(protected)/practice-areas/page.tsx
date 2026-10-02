import Link from "next/link";
import { prisma } from "@/lib/db/prisma";
import { PRACTICE_AREAS_DATA } from "@/lib/site-config";

export const dynamic = "force-dynamic";


async function getDbAreas() {
  try {
    return await prisma.practiceArea.findMany({ orderBy: { displayOrder: "asc" } });
  } catch { return []; }
}

export default async function AdminPracticeAreasPage() {
  const areas = await getDbAreas();
  const displayAreas = areas.length > 0 ? areas : PRACTICE_AREAS_DATA;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <div>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 28, color: "var(--ivory)", marginBottom: 4 }}>Practice Areas</h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--muted)" }}>
            {displayAreas.length} practice areas. Run db:seed to populate from database.
          </p>
        </div>
      </div>

      <div style={{ background: "var(--navy)", border: "1px solid var(--border-dark)", borderRadius: 2, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border-dark)" }}>
              {["#", "Title", "Slug", "Status"].map((h) => (
                <th key={h} style={{ padding: "12px 20px", textAlign: "left", fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayAreas.map((a, i) => (
              <tr key={"slug" in a ? a.slug : (a as any).slug} style={{ borderBottom: "1px solid var(--border-dark)" }}>
                <td style={{ padding: "14px 20px", fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--muted)" }}>{("displayOrder" in a ? a.displayOrder : i + 1)}</td>
                <td style={{ padding: "14px 20px" }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--ivory)" }}>{"title" in a ? a.title : ""}</span>
                </td>
                <td style={{ padding: "14px 20px", fontFamily: "Inter, sans-serif", fontSize: 13, color: "var(--muted)" }}>{"slug" in a ? a.slug : ""}</td>
                <td style={{ padding: "14px 20px" }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#34D399" }}>
                    ● {("isPublished" in a ? a.isPublished : true) ? "Published" : "Hidden"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}