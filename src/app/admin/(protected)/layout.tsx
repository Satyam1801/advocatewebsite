"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, FileText, Scale, Users, Image, Settings, LogOut, BookOpen } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/stories", label: "Stories", icon: BookOpen },
  { href: "/admin/practice-areas", label: "Practice Areas", icon: Scale },
  { href: "/admin/consultations", label: "Consultations", icon: Users },
  { href: "/admin/media", label: "Media", icon: Image },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminProtectedLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    await fetch("/api/admin/auth/logout", { method: "POST", credentials: "include" });
    router.push("/admin/login");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--navy-dark)" }}>
      {/* Sidebar */}
      <aside style={{ width: 240, background: "var(--navy)", borderRight: "1px solid var(--border-dark)", display: "flex", flexDirection: "column", position: "fixed", top: 0, left: 0, height: "100vh", zIndex: 40 }}>
        {/* Logo */}
        <div style={{ padding: "24px 20px", borderBottom: "1px solid var(--border-dark)" }}>
          <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 16, fontWeight: 700, color: "var(--ivory)", marginBottom: 2 }}>Nikhil Shukla</div>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)" }}>Admin Panel</div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "16px 0", overflow: "auto" }}>
          {navItems.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "12px 20px",
                  fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: active ? 600 : 400,
                  color: active ? "var(--gold)" : "#8A99A6",
                  background: active ? "rgba(201,162,39,0.08)" : "transparent",
                  borderRight: active ? "2px solid var(--gold)" : "2px solid transparent",
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
              >
                <item.icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div style={{ padding: "16px 20px", borderTop: "1px solid var(--border-dark)" }}>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer", fontFamily: "Inter, sans-serif", fontSize: 13, color: "#8A99A6", width: "100%", padding: "8px 0", transition: "color 0.2s" }}
          >
            <LogOut size={15} /> {loggingOut ? "Logging out..." : "Log Out"}
          </button>
          <Link href="/" target="_blank" style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "Inter, sans-serif", fontSize: 13, color: "#8A99A6", marginTop: 8, transition: "color 0.2s" }}>
            <Scale size={15} /> View Website
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, marginLeft: 240, padding: "32px", minHeight: "100vh" }}>
        {children}
      </main>
    </div>
  );
}