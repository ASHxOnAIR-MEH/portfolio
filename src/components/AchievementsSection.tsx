"use client";
import Image from "next/image";

const AWARDS = [
  {
    award: "🥇 First Prize",
    event: "Prototype 2.0 — Franklin's Lectures",
    desc: "Won ₹20,000 prize for ORALINK — Tongue-Controlled Multi-Assistive Wheelchair System at College of Engineering Perumon.",
    year: "2025",
    accent: "#F59E0B",
    img: "/1774283137785.jpg",
  },
  {
    award: "🚀 ₹3 Crore Finalist",
    event: "LEAP 2025 — Gokulam Group EdTech",
    desc: "Selected as pitch finalist for ₹3 Crore investment at LEAP 2025. Competed among top student startups across Kerala.",
    year: "2025",
    accent: "var(--accent)",
    img: "/1767871869169.jpg",
  },
  {
    award: "⭐ Shortlisted",
    event: "IEDC Summit 2025 — 1-Tank Competition",
    desc: "Officially shortlisted at Kerala Startup Mission's flagship national student innovation conclave.",
    year: "2025",
    accent: "var(--accent-green)",
    img: "/iedc-summit.jpg",
  },
  {
    award: "🏆 Regional Winner",
    event: "International Energy Festival 2026",
    desc: "Regional Winners for StepVolt — Energy Harvesting Health Monitoring Shoe. Recognized on a national stage.",
    year: "2026",
    accent: "#E879F9",
    img: "/energy-festival.jpg",
  },
  {
    award: "📰 Press Feature",
    event: "Malayala Manorama — All Kerala",
    desc: "Featured across all-Kerala Malayala Manorama for StepVolt smart shoe innovation. Statewide press coverage.",
    year: "2026",
    accent: "#F97316",
    img: "/newspaper-feature.jpg",
  },
  {
    award: "✨ 10K+ Creator",
    event: "LinkedIn Organic Growth",
    desc: "Organically grew to 10,000+ LinkedIn followers. Now training students at colleges across Kerala.",
    year: "2025–26",
    accent: "#0A66C2",
    img: "/1760712977806.jpg",
  },
];

const PHOTOS = [
  { src: "/1767871869169.jpg", alt: "LEAP 2025 Pitch" },
  { src: "/energy-festival.jpg", alt: "Energy Festival Award" },
  { src: "/1760712977806.jpg", alt: "Startup Presentation" },
  { src: "/newspaper-feature.jpg", alt: "Manorama Feature" },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section" style={{ background: "var(--bg-secondary)" }}>
      <style>{`
        .achievement-card-hover { transition: border-color 0.3s, box-shadow 0.3s; }
        .achievement-card-hover:hover { border-color: rgba(255,255,255,0.15) !important; box-shadow: 0 8px 40px rgba(0,229,255,0.08); }
        .photo-zoom img { transition: transform 0.4s ease; }
        .photo-zoom:hover img { transform: scale(1.06); }
      `}</style>
      <div className="section-inner">
        <div className="section-label">05 — Recognition</div>
        <h2 className="section-title">Awards & <span className="gradient-text">Press</span></h2>

        {/* Award cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.25rem", marginBottom: "4rem" }}>
          {AWARDS.map((a, i) => (
            <div key={i} className="glass achievement-card achievement-card-hover" style={{ overflow: "hidden", borderRadius: 20 }}>
              <div style={{ position: "relative", aspectRatio: "4/3", background: "var(--bg-primary)", overflow: "hidden" }}>
                <Image src={a.img} alt={a.event} fill className="achievement-img" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 30% 60%, ${a.accent}18, transparent 70%)` }} />
                <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(11,18,32,0.9)", backdropFilter: "blur(8px)", borderRadius: 50, padding: "4px 12px", border: `1px solid ${a.accent}40`, color: a.accent, fontSize: "0.75rem", fontWeight: 800 }}>
                  {a.year}
                </div>
              </div>
              <div style={{ padding: "1.25rem" }}>
                <div style={{ fontSize: "0.78rem", fontWeight: 800, color: a.accent, letterSpacing: "0.04em", marginBottom: 4 }}>{a.award}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff", marginBottom: 8 }}>{a.event}</h3>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Strip */}
        <div>
          <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "1rem" }}>Photography</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem" }}>
            {PHOTOS.map((p, i) => (
              <div key={i} className="photo-zoom" style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", borderRadius: 12 }}>
                <Image src={p.src} alt={p.alt} fill style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
