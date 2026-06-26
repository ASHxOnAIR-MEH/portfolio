"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const STATS = [
  { num: 5, suffix: "+", label: "Engineering Projects" },
  { num: 3, suffix: "+", label: "Production Websites" },
  { num: 10, suffix: "K+", label: "LinkedIn Followers" },
  { num: 3, suffix: "+", label: "National Awards" },
  { num: 1, suffix: "", label: "MSME Startup" },
];

const SKILLS = ["ESP32 · Next.js · TypeScript · SolidWorks · IoT · React · Python · AutoCAD · AWS · Figma · Embedded C · Bluetooth HID · NFC · Firebase"];

export default function AboutSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          STATS.forEach((stat, i) => {
            const el = countersRef.current[i];
            if (!el) return;
            const start = Date.now();
            const duration = 1800;
            const tick = () => {
              const elapsed = Date.now() - start;
              const progress = Math.min(elapsed / duration, 1);
              const ease = 1 - Math.pow(1 - progress, 4);
              const val = Math.floor(ease * stat.num);
              el.textContent = val + (progress === 1 ? stat.suffix : "");
              if (progress < 1) requestAnimationFrame(tick);
            };
            tick();
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-inner">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "5rem", alignItems: "start" }} className="md:grid-cols-2 grid-cols-1">
          
          {/* LEFT — photo */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", border: "1px solid var(--glass-border)" }}>
              <Image
                src="/1760712977806.jpg"
                alt="Muhammed Ashik S — presenting"
                width={480}
                height={600}
                style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
              />
              {/* Status card overlay */}
              <div className="glass" style={{ position: "absolute", bottom: 16, left: 16, right: 16, padding: "0.75rem 1rem", display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent-green)", boxShadow: "0 0 10px var(--accent-green)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#fff" }}>UKFCET · KTU · CGPA 8.4</span>
              </div>
            </div>
            {/* Floating accent */}
            <div style={{ position: "absolute", top: -12, right: -12, width: 120, height: 120, border: "1px solid rgba(0,229,255,0.15)", borderRadius: 20, zIndex: -1 }} />
          </div>

          {/* RIGHT — content */}
          <div>
            <div className="section-label">01 — About</div>
            <h2 className="section-title">Engineer. Builder. <span className="gradient-text">Founder.</span></h2>
            
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "1rem" }}>
              I started as a Biology student with a dream to study medicine. Life pivoted me into Mechanical Engineering at <strong style={{ color: "#fff" }}>UKF College of Engineering & Technology (KTU)</strong> — and that pivot became my superpower.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "1rem" }}>
              I co-founded <strong style={{ color: "var(--accent)" }}>Arogya Smart Health Technologies</strong>, an MSME-registered MedTech startup building India's first family-centric AI-powered home diagnostic devices. I'm also an Academic Intern at <strong style={{ color: "#fff" }}>Kerala Startup Mission</strong>, building RINK — a national technology transfer platform.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2.5rem", fontSize: "1rem" }}>
              On LinkedIn, I've organically grown to <strong style={{ color: "var(--accent-green)" }}>10,000+ followers</strong> sharing my engineering journey — and now train students at colleges across Kerala.
            </p>

            {/* Stats */}
            <div ref={statsRef} style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginBottom: "2.5rem" }}>
              {STATS.map((stat, i) => (
                <div key={stat.label} style={{ textAlign: "center", minWidth: 80 }}>
                  <div className="stat-num gradient-text" style={{ fontSize: "2rem", fontWeight: 900 }}>
                    <span ref={(el) => { if (el) countersRef.current[i] = el; }}>0</span>
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)", fontWeight: 500, marginTop: 2 }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="glass" style={{ padding: "1rem 1.25rem" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 8 }}>Tech Stack</div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                ESP32 · Next.js · TypeScript · SolidWorks · IoT · React · Python · AutoCAD · AWS · Figma · Embedded C · Bluetooth HID · NFC
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
