"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

const MATTER_TYPES = [
  { value: "CRIMINAL_DEFENSE", label: "Criminal Defense" },
  { value: "BAIL", label: "Bail Application" },
  { value: "CYBERCRIME", label: "Cybercrime" },
  { value: "DIVORCE", label: "Divorce" },
  { value: "MAINTENANCE", label: "Maintenance" },
  { value: "DOMESTIC_VIOLENCE", label: "Domestic Violence" },
  { value: "CHILD_CUSTODY", label: "Child Custody" },
  { value: "OTHER", label: "Other" },
];

type FormState = { status: "idle" | "loading" | "success" | "error"; message?: string };

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>({ status: "idle" });
  const [formData, setFormData] = useState({
    fullName: "", phone: "", email: "", matterType: "OTHER",
    briefDescription: "", preferredContactMethod: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: "loading" });
    try {
      const res = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setFormState({ status: "success", message: data.message });
        setFormData({ fullName: "", phone: "", email: "", matterType: "OTHER", briefDescription: "", preferredContactMethod: "" });
      } else {
        setFormState({ status: "error", message: data.error || "Something went wrong. Please try again." });
      }
    } catch {
      setFormState({ status: "error", message: "Network error. Please try again." });
    }
  };

  return (
    <div style={{ background: "var(--ivory)" }}>
      {/* Hero */}
      <section style={{ background: "var(--navy)", padding: "72px 0" }}>
        <div className="container">
          <span className="section-label">Contact</span>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: "clamp(32px, 4vw, 48px)", color: "var(--ivory)", marginTop: 12, marginBottom: 16, lineHeight: 1.2 }}>
            Schedule a Consultation
          </h1>
          <div className="gold-divider" />
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "#B5BDC5", marginTop: 20, maxWidth: 560, lineHeight: 1.8 }}>
            Reach out to discuss your legal matter. All consultations are confidential.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ display: "flex", gap: 56, flexWrap: "wrap", alignItems: "flex-start" }}>

            {/* Form */}
            <div style={{ flex: "1 1 480px" }}>
              {formState.status === "success" ? (
                <div style={{ background: "#fff", border: "1px solid var(--cream-border)", borderRadius: 2, padding: "48px", textAlign: "center", borderLeft: "3px solid var(--gold)" }}>
                  <div style={{ fontSize: 48, marginBottom: 20 }}>✓</div>
                  <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 24, color: "var(--ink)", marginBottom: 12 }}>Request Received</h2>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "var(--body-grey)", lineHeight: 1.7 }}>
                    {formState.message || "Your consultation request has been received. Advocate Nikhil Shukla's office will get back to you shortly."}
                  </p>
                </div>
              ) : (
                <form id="consultation-form" onSubmit={handleSubmit} style={{ background: "#fff", border: "1px solid var(--cream-border)", borderRadius: 2, padding: "40px", display: "flex", flexDirection: "column", gap: 20 }}>
                  <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 24, color: "var(--ink)", marginBottom: 4 }}>
                    Consultation Request
                  </h2>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--body-grey)" }}>
                    Fields marked with * are required.
                  </p>

                  {formState.status === "error" && (
                    <div style={{ padding: "12px 16px", background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 2, fontFamily: "Inter, sans-serif", fontSize: 14, color: "#991B1B" }}>
                      {formState.message}
                    </div>
                  )}

                  {[
                    { name: "fullName", label: "Full Name *", type: "text", placeholder: "Your full name", required: true },
                    { name: "phone", label: "Phone Number *", type: "tel", placeholder: "+91 XXXXX XXXXX", required: true },
                    { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com", required: false },
                  ].map((field) => (
                    <div key={field.name}>
                      <label htmlFor={field.name} style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "var(--ink)", letterSpacing: "0.04em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={(e) => setFormData((p) => ({ ...p, [field.name]: e.target.value }))}
                        style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--cream-border)", borderRadius: 2, fontFamily: "Inter, sans-serif", fontSize: 15, color: "var(--ink)", background: "var(--ivory)", outline: "none", transition: "border-color 0.2s" }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--cream-border)")}
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="matterType" style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "var(--ink)", letterSpacing: "0.04em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                      Matter Type *
                    </label>
                    <select
                      id="matterType"
                      name="matterType"
                      required
                      value={formData.matterType}
                      onChange={(e) => setFormData((p) => ({ ...p, matterType: e.target.value }))}
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--cream-border)", borderRadius: 2, fontFamily: "Inter, sans-serif", fontSize: 15, color: "var(--ink)", background: "var(--ivory)", outline: "none" }}
                    >
                      {MATTER_TYPES.map((m) => (
                        <option key={m.value} value={m.value}>{m.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="briefDescription" style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "var(--ink)", letterSpacing: "0.04em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                      Brief Description *
                    </label>
                    <textarea
                      id="briefDescription"
                      name="briefDescription"
                      required
                      rows={5}
                      placeholder="Please briefly describe your legal matter..."
                      value={formData.briefDescription}
                      onChange={(e) => setFormData((p) => ({ ...p, briefDescription: e.target.value }))}
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--cream-border)", borderRadius: 2, fontFamily: "Inter, sans-serif", fontSize: 15, color: "var(--ink)", background: "var(--ivory)", outline: "none", resize: "vertical", transition: "border-color 0.2s" }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--cream-border)")}
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredContactMethod" style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "var(--ink)", letterSpacing: "0.04em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                      Preferred Contact Method
                    </label>
                    <select
                      id="preferredContactMethod"
                      name="preferredContactMethod"
                      value={formData.preferredContactMethod}
                      onChange={(e) => setFormData((p) => ({ ...p, preferredContactMethod: e.target.value }))}
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--cream-border)", borderRadius: 2, fontFamily: "Inter, sans-serif", fontSize: 15, color: "var(--ink)", background: "var(--ivory)", outline: "none" }}
                    >
                      <option value="">No preference</option>
                      <option value="phone">Phone Call</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="email">Email</option>
                    </select>
                  </div>

                  <button
                    id="form-submit"
                    type="submit"
                    disabled={formState.status === "loading"}
                    className="btn btn-gold"
                    style={{ alignSelf: "flex-start", opacity: formState.status === "loading" ? 0.7 : 1 }}
                  >
                    {formState.status === "loading" ? "Sending..." : <><Send size={15} /> Send Request</>}
                  </button>

                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#8A99A6", lineHeight: 1.6 }}>
                    By submitting this form, you understand that this does not create an attorney-client relationship. Your information will be kept confidential.
                  </p>
                </form>
              )}
            </div>

            {/* Contact info sidebar */}
            <aside style={{ flex: "0 0 280px", display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ background: "var(--navy)", border: "1px solid var(--border-dark)", borderRadius: 2, padding: "28px 24px" }}>
                <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 18, color: "var(--ivory)", marginBottom: 24 }}>Contact Information</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {[
                    { icon: Phone, label: "Phone", value: SITE_CONFIG.phone, href: "tel:" + SITE_CONFIG.phone },
                    { icon: MessageCircle, label: "WhatsApp", value: SITE_CONFIG.whatsapp, href: "https://wa.me/" + SITE_CONFIG.whatsapp.replace(/\D/g, "") },
                    { icon: Mail, label: "Email", value: SITE_CONFIG.email, href: "mailto:" + SITE_CONFIG.email },
                    { icon: MapPin, label: "Address", value: SITE_CONFIG.address, href: null },
                    { icon: Clock, label: "Office Hours", value: SITE_CONFIG.officeHours, href: null },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", gap: 12 }}>
                      <item.icon size={16} color="var(--gold)" style={{ marginTop: 2, flexShrink: 0 }} />
                      <div>
                        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 4 }}>{item.label}</div>
                        {item.href ? (
                          <a href={item.href} style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#B5BDC5" }}>{item.value}</a>
                        ) : (
                          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#B5BDC5" }}>{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: "#fff", border: "1px solid var(--cream-border)", borderRadius: 2, padding: "24px", borderLeft: "3px solid var(--gold)" }}>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 15, color: "var(--ink)", marginBottom: 12 }}>Confidentiality</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "var(--body-grey)", lineHeight: 1.7 }}>
                  All consultations and communications are handled with complete confidentiality.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}