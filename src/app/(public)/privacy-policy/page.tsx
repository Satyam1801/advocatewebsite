import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Advocate Nikhil Shukla",
  description: "Privacy policy and data handling practices for Advocate Nikhil Shukla's legal services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ background: "var(--ivory)", minHeight: "100vh" }}>
      <section style={{ background: "var(--navy)", padding: "72px 0 48px" }}>
        <div className="container">
          <span className="section-label">Legal Information</span>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: "clamp(32px, 4vw, 48px)", color: "var(--ivory)", marginTop: 12, marginBottom: 16, lineHeight: 1.2 }}>
            Privacy Policy
          </h1>
          <div className="gold-divider" />
        </div>
      </section>
      
      <section style={{ padding: "64px 0 96px" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="prose" style={{ background: "#fff", padding: "48px 56px", border: "1px solid var(--cream-border)", borderRadius: 2 }}>
            <p><strong>Effective Date:</strong> January 1, 2026</p>
            <p>
              This Privacy Policy explains how Advocate Nikhil Shukla (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects your personal information when you use our website ({SITE_CONFIG.url}) or engage our legal services.
            </p>
            
            <h2>1. Attorney-Client Privilege and Confidentiality</h2>
            <p>
              As a legal practice, we are bound by strict professional rules regarding confidentiality and attorney-client privilege under the Advocates Act, 1961, and Bar Council of India Rules. Information you provide in the context of seeking legal advice is kept strictly confidential and is only disclosed as required by law or with your explicit consent.
            </p>
            <p>
              <em>Note: Contacting us through this website does not automatically create an attorney-client relationship. Please do not share highly sensitive case details through the website contact form.</em>
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, phone number, email address, and preferred contact method when you fill out our consultation form.</li>
              <li><strong>Case Information:</strong> Brief descriptions of your legal matter or the general area of law you need assistance with.</li>
              <li><strong>Technical Data:</strong> Standard server log information, including IP addresses, browser types, and usage data, to ensure website security and functionality.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>Your information is used strictly for professional purposes:</p>
            <ul>
              <li>To respond to your inquiries and consultation requests.</li>
              <li>To assess whether we can take on your matter and run conflict checks.</li>
              <li>To communicate with you regarding your ongoing case, if you become a client.</li>
              <li>To improve our website functionality and user experience.</li>
            </ul>

            <h2>4. Data Protection and Security</h2>
            <p>
              We implement appropriate technical and organizational measures to secure your personal data against unauthorized access, loss, or alteration. Website traffic is encrypted via HTTPS. Our consultation form uses secure endpoints, and administrative access is restricted to authorized personnel.
            </p>

            <h2>5. Sharing of Information</h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties. We may disclose information only when:
            </p>
            <ul>
              <li>Required by law, court order, or regulatory authority.</li>
              <li>Necessary to protect our legal rights or defend against legal claims.</li>
              <li>Sharing with trusted service providers (e.g., website hosting, IT support) who are bound by confidentiality obligations.</li>
            </ul>

            <h2>6. Third-Party Links</h2>
            <p>
              Our website may contain links to external sites (e.g., court websites, legal resources) that are not operated by us. We are not responsible for the privacy practices of these third parties.
            </p>

            <h2>7. Your Rights</h2>
            <p>
              Subject to applicable laws and professional obligations, you have the right to request access to, correction of, or deletion of your personal data held by us. To exercise these rights, please contact us using the details below.
            </p>

            <h2>8. Changes to this Policy</h2>
            <p>
              We may update this Privacy Policy periodically. The latest version will always be posted on this page with the revised Effective Date.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data handling practices, please <Link href="/contact" style={{ color: "var(--gold)", textDecoration: "underline" }}>contact us</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}