"use client";

const TIMELINE = [
  {
    period: "2026 — Present",
    role: "Academic Intern — RINK",
    org: "Kerala Startup Mission (KSUM)",
    desc: "Building RINK — Kerala's AI-powered national technology transfer platform connecting research labs to industry. Working on tech commercialization, IP scouting, and full-stack development.",
    tech: ["Next.js", "Gemini AI", "AWS", "TypeScript"],
    accent: "var(--accent)",
    icon: "🚀",
  },
  {
    period: "2025 — Present",
    role: "Co-Founder & Chief Research Officer",
    org: "Arogya Smart Health Technologies",
    desc: "Leading research, embedded hardware development, and product strategy at MSME-registered MedTech startup. Products include DuoScan (CKD screening) and StepVolt (energy harvesting wearable). ₹3Cr pitch finalist at LEAP 2025.",
    tech: ["ESP32", "MedTech", "IoT", "Biosensors", "NFC"],
    accent: "var(--accent-green)",
    icon: "💚",
  },
  {
    period: "2025 — Present",
    role: "IPR & Research Lead",
    org: "IEDC UKFCET",
    desc: "Leading intellectual property rights initiatives, patent documentation, and innovation programs. Organizing hackathons, ideathons, and inter-college competitions. Shortlisted at IEDC Summit 2025 national 1-Tank Competition.",
    tech: ["IPR", "Innovation", "Research", "Mentoring"],
    accent: "#F59E0B",
    icon: "💡",
  },
  {
    period: "2025 — Present",
    role: "LinkedIn Trainer · Startup Bootcamp Speaker",
    org: "Bishop Jerome College & LBS Women's College",
    desc: "Conducting LinkedIn mastery workshops and startup entrepreneurship sessions. Organically grown to 10,000+ followers by sharing engineering journey and startup insights.",
    tech: ["LinkedIn", "Training", "Entrepreneurship", "10K+"],
    accent: "#0A66C2",
    icon: "🔗",
  },
  {
    period: "2024 — Present",
    role: "B.Tech Mechanical Engineering",
    org: "UKF College of Engineering & Technology, KTU",
    desc: "Pursuing Mechanical Engineering with CGPA 8.4. Specializing in embedded systems, IoT hardware design, and mechatronics. Active in IEDC, innovation clubs, and startup ecosystem.",
    tech: ["Mechanical Engg", "CGPA 8.4", "KTU", "Innovation"],
    accent: "var(--highlight)",
    icon: "🎓",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-inner">
        <div className="section-label">03 — Experience</div>
        <h2 className="section-title">My <span className="gradient-text">Journey</span></h2>

        <div style={{ position: "relative", paddingLeft: 48, marginTop: "3rem" }}>
          {/* Vertical line */}
          <div style={{ position: "absolute", left: 19, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, var(--accent), var(--accent-green), var(--highlight), transparent)" }} />

          {TIMELINE.map((item, i) => (
            <div key={i} style={{ position: "relative", marginBottom: i < TIMELINE.length - 1 ? "3rem" : 0 }}>
              {/* Dot */}
              <div style={{
                position: "absolute",
                left: -48,
                top: 8,
                width: 40, height: 40,
                borderRadius: "50%",
                background: `${item.accent}18`,
                border: `2px solid ${item.accent}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1rem",
                zIndex: 1,
              }}>
                {item.icon}
              </div>

              {/* Card */}
              <div className="glass" style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: 8 }}>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 4 }}>{item.role}</h3>
                    <div style={{ fontSize: "0.82rem", fontWeight: 700, color: item.accent }}>{item.org}</div>
                  </div>
                  <div className="mono" style={{ color: "var(--text-secondary)", fontSize: "0.75rem", whiteSpace: "nowrap", fontFamily: "monospace" }}>{item.period}</div>
                </div>

                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1rem" }}>{item.desc}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {item.tech.map((t) => (
                    <span key={t} className="tech-badge" style={{ background: `${item.accent}10`, borderColor: `${item.accent}20`, color: item.accent }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
