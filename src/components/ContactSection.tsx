"use client";
import { useState } from "react";

const SOCIALS = [
  { label: "LinkedIn", url: "https://linkedin.com/in/connentashik", color: "#0A66C2" },
  { label: "GitHub", url: "https://github.com/ASHxOnAIR-MEH", color: "#ffffff" },
  { label: "Portfolio", url: "https://muhammed-ashik.vercel.app", color: "var(--accent)" },
  { label: "Startup", url: "https://arogya-smart.vercel.app", color: "var(--accent-green)" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="section">
      <style>{`
        .contact-link { color: var(--text-secondary); text-decoration: none; transition: color 0.2s; }
        .contact-link:hover { color: var(--accent); }
        .social-row { display: flex; align-items: center; justify-content: space-between; padding: 0.65rem 0.85rem; border-radius: 10px; background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); text-decoration: none; transition: all 0.2s ease; }
        .social-row:hover { border-color: rgba(0,229,255,0.3); background: rgba(0,229,255,0.06); }
        .social-label { font-weight: 600; font-size: 0.88rem; color: #fff; }
        .social-arrow { color: var(--accent); font-size: 0.85rem; font-weight: 700; }
        .nav-foot-link { font-size: 0.82rem; color: var(--text-secondary); text-decoration: none; transition: color 0.2s; }
        .nav-foot-link:hover { color: var(--accent); }
      `}</style>
      <div className="section-inner">
        <div className="section-label">06 — Contact</div>
        <h2 className="section-title">Let&apos;s <span className="gradient-text">Connect</span></h2>
        <p className="section-sub" style={{ marginBottom: "4rem" }}>
          Open to collaborations, research, internships, and startup partnerships.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
          {/* LEFT */}
          <div>
            <div className="glass" style={{ padding: "2rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Contact</h3>
              {[
                { label: "Email", value: "muhammedashik@proton.me", href: "mailto:muhammedashik@proton.me", icon: "📧" },
                { label: "Phone", value: "+91 75609 01337", href: "tel:+917560901337", icon: "📱" },
                { label: "Location", value: "Kerala, India", href: "#", icon: "📍" },
              ].map((item) => (
                <a key={item.label} href={item.href} className="contact-link" style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.75rem 0", borderBottom: "1px solid var(--glass-border)" }}>
                  <span style={{ fontSize: "1.2rem", width: 28 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "var(--text-secondary)", marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#fff" }}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="glass" style={{ padding: "1.5rem" }}>
              <h3 style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "1.25rem" }}>Find Me Online</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="social-row">
                    <span className="social-label">{s.label}</span>
                    <span className="social-arrow">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="glass" style={{ padding: "2rem" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "1.5rem", color: "#fff" }}>Send a Message</h3>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label>Name</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" required />
              </div>
              <div>
                <label>Email</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" required />
              </div>
              <div>
                <label>Message</label>
                <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Let's build something great together..." required />
              </div>
              <button type="submit" className="btn-primary" style={{ justifyContent: "center", opacity: status === "loading" ? 0.7 : 1 }} disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : status === "success" ? "✓ Message Sent!" : "Send Message →"}
              </button>
              {status === "success" && (
                <p style={{ textAlign: "center", fontSize: "0.85rem", color: "var(--accent-green)" }}>
                  Thanks! I&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
