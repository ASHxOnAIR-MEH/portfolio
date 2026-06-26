"use client";
import Image from "next/image";

const PROJECTS = [
  {
    id: "rink",
    num: "01",
    name: "RINK Technology Transfer Portal",
    tagline: "Kerala Startup Mission's AI-powered national technology discovery platform",
    problem: "Bridging the gap between research institutions and industry through intelligent technology discovery and licensing.",
    tech: ["Next.js", "Gemini AI", "AWS", "TypeScript", "Supabase"],
    role: "Full Stack Developer & Academic Intern",
    link: "https://rink.startupmission.in",
    accent: "var(--accent)",
    icon: "🚀",
    org: "Kerala Startup Mission (KSUM)",
    year: "2026",
    img: "/rink-project.jpg",
  },
  {
    id: "oralink",
    num: "02",
    name: "ORALINK",
    tagline: "Tongue-controlled multi-assistive wheelchair system",
    problem: "Enabling mobility for people with paralysis using non-invasive tongue-based control via custom mouthpiece + BLE.",
    tech: ["ESP32", "Bluetooth HID", "IoT", "Embedded C", "3D Printing"],
    role: "Embedded Systems Lead & Hardware Designer",
    link: "#",
    accent: "var(--accent-green)",
    icon: "♿",
    org: "IEDC UKFCET",
    year: "2025",
    img: "/1774283137785.jpg",
  },
  {
    id: "duoscan",
    num: "03",
    name: "Arogya DuoScan",
    tagline: "Portable CKD early-screening biosensor device",
    problem: "Affordable, portable CKD detection combining NFC patient identity, multi-biosensor analysis, and AI diagnosis.",
    tech: ["ESP32-S3", "NFC", "Biosensors", "MedTech", "AWS IoT"],
    role: "Co-Founder & Chief Research Officer",
    link: "https://arogya-smart.vercel.app",
    accent: "#E879F9",
    icon: "🩺",
    org: "Arogya Smart Health Technologies",
    year: "2025",
    img: "",
  },
  {
    id: "stepvolt",
    num: "04",
    name: "StepVolt",
    tagline: "Piezoelectric energy-harvesting health-monitoring smart shoe",
    problem: "Generating power from footstep pressure to run embedded health sensors — zero battery, fully wearable.",
    tech: ["Embedded Systems", "Piezoelectric", "Wearables", "Energy Harvesting"],
    role: "Hardware Engineer & Project Lead",
    link: "#",
    accent: "#F59E0B",
    icon: "⚡",
    org: "Arogya Smart · Energy Festival Regional Winner",
    year: "2025",
    img: "/energy-festival.jpg",
  },
  {
    id: "aftermbbs",
    num: "05",
    name: "Career After MBBS",
    tagline: "Official IMA conclave website with premium glassmorphism UI",
    problem: "Building a high-impact, animated event website for IMA's national medical career conclave.",
    tech: ["Next.js", "Tailwind CSS", "Vercel", "Glassmorphism"],
    role: "Full Stack Developer & UI Designer",
    link: "https://aftermbbs.vercel.app",
    accent: "var(--highlight)",
    icon: "🏥",
    org: "IMA (Indian Medical Association)",
    year: "2025",
    img: "",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <div className="section-label">02 — Projects</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3.5rem", flexWrap: "wrap", gap: "1rem" }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>Things I've<br /><span className="gradient-text">Built</span></h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", maxWidth: 280 }}>Each project is a solution to a real-world problem.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.5rem" }}>
          {PROJECTS.map((p) => (
            <a
              key={p.id}
              href={p.link}
              target={p.link !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="project-card glass"
              style={{ textDecoration: "none", display: "flex", flexDirection: "column", overflow: "hidden" }}
            >
              {/* Image / Placeholder */}
              <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9", background: "var(--bg-secondary)" }}>
                {p.img ? (
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="project-img"
                    style={{ objectFit: "cover" }}
                    onError={(e) => {
                      const el = e.currentTarget as HTMLImageElement;
                      el.style.display = "none";
                    }}
                  />
                ) : null}
                <div className="project-img-placeholder" style={{ background: `radial-gradient(circle at 30% 40%, ${p.accent}14, transparent 70%)`, position: "absolute", inset: 0 }}>
                  <span style={{ fontSize: "3rem" }}>{p.icon}</span>
                </div>
                {/* Year badge */}
                <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(11,18,32,0.85)", backdropFilter: "blur(8px)", border: "1px solid var(--glass-border)", borderRadius: 50, padding: "3px 10px", fontSize: "0.72rem", fontWeight: 700, color: p.accent }}>
                  {p.year}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "1.4rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 800, color: p.accent, letterSpacing: "0.12em" }}>{p.num}</span>
                  <span style={{ flex: 1, height: 1, background: "var(--glass-border)" }} />
                  <span style={{ fontSize: "0.7rem", color: "var(--text-secondary)" }}>{p.org}</span>
                </div>

                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#fff", marginBottom: 8, letterSpacing: "-0.02em" }}>{p.name}</h3>
                <p style={{ fontSize: "0.83rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 8 }}>{p.tagline}</p>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1rem", opacity: 0.8 }}>{p.problem}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge" style={{ background: `${p.accent}12`, borderColor: `${p.accent}25`, color: p.accent }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div style={{ padding: "0.75rem 1.4rem", borderTop: "1px solid var(--glass-border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>{p.role}</span>
                <span style={{ fontSize: "0.82rem", color: p.accent, fontWeight: 600 }}>View →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
