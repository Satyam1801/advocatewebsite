"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Scale, Eye, EyeOff } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) {
        router.push("/admin/dashboard");
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--navy-dark)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 400 }}>
        {/* Brand */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", border: "2px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
            <Scale size={24} color="var(--gold)" />
          </div>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 24, color: "var(--ivory)", marginBottom: 4 }}>Admin Panel</h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "var(--muted)" }}>Advocate Nikhil Shukla — CMS</p>
        </div>

        <form id="admin-login-form" onSubmit={handleLogin} style={{ background: "var(--navy)", border: "1px solid var(--border-dark)", borderRadius: 2, padding: 32, display: "flex", flexDirection: "column", gap: 20 }}>
          {error && (
            <div style={{ padding: "12px 16px", background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.3)", borderRadius: 2, fontFamily: "Inter, sans-serif", fontSize: 14, color: "#FCA5A5" }}>
              {error}
            </div>
          )}

          <div>
            <label htmlFor="admin-email" style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: 8 }}>Email</label>
            <input
              id="admin-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "12px 16px", background: "var(--navy-light)", border: "1px solid var(--border-dark)", borderRadius: 2, fontFamily: "Inter, sans-serif", fontSize: 15, color: "var(--ivory)", outline: "none" }}
              onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border-dark)")}
            />
          </div>

          <div>
            <label htmlFor="admin-password" style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: 8 }}>Password</label>
            <div style={{ position: "relative" }}>
              <input
                id="admin-password"
                type={showPw ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: "100%", padding: "12px 48px 12px 16px", background: "var(--navy-light)", border: "1px solid var(--border-dark)", borderRadius: 2, fontFamily: "Inter, sans-serif", fontSize: 15, color: "var(--ivory)", outline: "none" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border-dark)")}
              />
              <button type="button" onClick={() => setShowPw(!showPw)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--muted)", padding: 4 }}>
                {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button id="login-submit" type="submit" disabled={loading} className="btn btn-gold" style={{ justifyContent: "center", opacity: loading ? 0.7 : 1 }}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: 20, fontFamily: "Inter, sans-serif", fontSize: 12, color: "#4A5A68" }}>
          Secure admin access only. This page is not publicly linked.
        </p>
      </div>
    </div>
  );
}