import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer — Advocate Nikhil Shukla",
  description: "Legal disclaimer in compliance with the Bar Council of India rules.",
};

export default function DisclaimerPage() {
  return (
    <div style={{ background: "var(--ivory)", minHeight: "100vh" }}>
      <section style={{ background: "var(--navy)", padding: "72px 0 48px" }}>
        <div className="container">
          <span className="section-label">Legal Information</span>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: "clamp(32px, 4vw, 48px)", color: "var(--ivory)", marginTop: 12, marginBottom: 16, lineHeight: 1.2 }}>
            Disclaimer
          </h1>
          <div className="gold-divider" />
        </div>
      </section>
      
      <section style={{ padding: "64px 0 96px" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="prose" style={{ background: "#fff", padding: "48px 56px", border: "1px solid var(--cream-border)", borderRadius: 2 }}>
            <p>
              Under the rules of the Bar Council of India, law firms and advocates are prohibited from soliciting work or advertising in any manner. By clicking on &quot;I Agree&quot; or continuing to access this website ({SITE_CONFIG.url}), you acknowledge and confirm that:
            </p>
            <ul>
              <li>There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from Advocate Nikhil Shukla or any of his members to solicit any work through this website.</li>
              <li>You wish to gain more information about Advocate Nikhil Shukla for your own information and use.</li>
              <li>The information about Advocate Nikhil Shukla is provided to you on your specific request and any information obtained or materials downloaded from this website is completely at your own volition.</li>
              <li>Any transmission, receipt, or use of this site does not create any lawyer-client relationship.</li>
            </ul>
            <p>
              The information provided under this website is solely available at your request for informational purposes only, should not be interpreted as soliciting or advertisement. We are not liable for any consequence of any action taken by the user relying on material / information provided under this website. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice.
            </p>
            <p>
              The content of this website is the intellectual property of Advocate Nikhil Shukla.
            </p>
            <p style={{ marginTop: 40 }}>
              <Link href="/" style={{ display: "inline-block", background: "var(--gold)", color: "var(--navy)", padding: "12px 24px", fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: 2 }}>
                Return to Homepage
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}