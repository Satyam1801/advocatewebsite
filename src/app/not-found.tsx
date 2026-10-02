import Link from "next/link";
import { Scale } from "lucide-react";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ textAlign: "center", maxWidth: 480 }}>
        <div style={{ width: 60, height: 60, borderRadius: "50%", border: "2px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
          <Scale size={26} color="var(--gold)" />
        </div>
        <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 80, fontWeight: 700, color: "var(--gold)", lineHeight: 1, marginBottom: 16 }}>404</div>
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 28, color: "var(--ivory)", marginBottom: 16 }}>Page Not Found</h1>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "var(--muted)", lineHeight: 1.7, marginBottom: 32 }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn btn-gold">Return to Homepage</Link>
      </div>
    </div>
  );
}