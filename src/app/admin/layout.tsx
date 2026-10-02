import type { Metadata } from "next";
import "../../app/globals.css";

export const metadata: Metadata = {
  title: { default: "Admin — Nikhil Shukla", template: "%s | Admin" },
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--navy-dark)" }}>
      {children}
    </div>
  );
}