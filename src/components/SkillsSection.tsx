"use client";

const CATEGORIES = [
  {
    label: "Programming",
    accent: "var(--accent)",
    skills: [
      { name: "JavaScript", icon: "🟨" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Python", icon: "🐍" },
      { name: "HTML/CSS", icon: "🌐" },
      { name: "Embedded C", icon: "⚙️" },
    ],
  },
  {
    label: "Frameworks",
    accent: "var(--accent-green)",
    skills: [
      { name: "Next.js", icon: "▲" },
      { name: "React", icon: "⚛️" },
      { name: "Tailwind", icon: "🎨" },
      { name: "Vite", icon: "⚡" },
    ],
  },
  {
    label: "Embedded / IoT",
    accent: "#F59E0B",
    skills: [
      { name: "ESP32", icon: "📡" },
      { name: "IoT", icon: "🌐" },
      { name: "Bluetooth HID", icon: "🔵" },
      { name: "NFC", icon: "📲" },
      { name: "WiFi", icon: "📶" },
    ],
  },
  {
    label: "Mechanical",
    accent: "#E879F9",
    skills: [
      { name: "SolidWorks", icon: "🔧" },
      { name: "AutoCAD", icon: "📐" },
      { name: "Fusion 360", icon: "🛠️" },
    ],
  },
  {
    label: "Backend / Cloud",
    accent: "var(--highlight)",
    skills: [
      { name: "AWS", icon: "☁️" },
      { name: "Firebase", icon: "🔥" },
      { name: "Supabase", icon: "🟩" },
      { name: "Google APIs", icon: "🔍" },
    ],
  },
  {
    label: "Tools & Design",
    accent: "#CBD5E1",
    skills: [
      { name: "GitHub", icon: "🐙" },
      { name: "Vercel", icon: "▲" },
      { name: "Figma", icon: "🎯" },
      { name: "Canva", icon: "🖌️" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <div className="section-label">04 — Tech Stack</div>
        <h2 className="section-title">Tools & <span className="gradient-text">Technologies</span></h2>
        <p className="section-sub" style={{ marginBottom: "3.5rem" }}>
          From ESP32 firmware to production Next.js apps — spanning hardware, software, and everything in between.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {CATEGORIES.map((cat) => (
            <div key={cat.label} className="glass" style={{ padding: "1.5rem" }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: cat.accent, marginBottom: "1.2rem" }}>
                {cat.label}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))", gap: "0.75rem" }}>
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-icon" style={{ background: `${cat.accent}15` }}>{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
