"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import HeroCanvas from "./HeroCanvas";

const ROLES = [
  "Mechanical Engineer",
  "Full Stack Developer",
  "Embedded Systems Developer",
  "MedTech Startup Founder",
  "Research & Innovation Intern",
];

export default function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = ROLES[roleIdx];
    let timeout: NodeJS.Timeout;
    if (!deleting) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="home" className="hero-section">
      {/* Background canvas */}
      <HeroCanvas />

      {/* Glow orbs */}
      <div className="glow-orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(0,229,255,0.07), transparent 70%)", top: -100, left: -100, zIndex: 0 }} />
      <div className="glow-orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(0,255,136,0.05), transparent 70%)", bottom: 50, right: -80, zIndex: 0 }} />
      <div className="glow-orb" style={{ width: 300, height: 300, background: "radial-gradient(circle, rgba(59,130,246,0.06), transparent 70%)", top: "40%", left: "40%", zIndex: 0 }} />

      {/* CONTENT */}
      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 24px", maxWidth: 760, margin: "0 auto" }}>
        
        {/* Status badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.2)", borderRadius: 50, padding: "6px 16px", fontSize: "0.78rem", fontWeight: 600, color: "var(--accent)", marginBottom: "2rem", letterSpacing: "0.05em" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent-green)", display: "inline-block", boxShadow: "0 0 8px var(--accent-green)", animation: "pulse 2s infinite" }} />
          OPEN TO OPPORTUNITIES
        </div>

        {/* Profile photo */}
        <div style={{ marginBottom: "2rem" }}>
          <div className="profile-ring">
            <div className="profile-ring-inner">
              <Image
                src="/profile-photo.jpg"
                alt="Muhammed Ashik S"
                width={160}
                height={160}
                style={{ objectFit: "cover", objectPosition: "top" }}
                priority
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.display = "none";
                  (el.parentElement as HTMLElement).innerHTML = `<div style="width:160px;height:160px;display:flex;align-items:center;justify-content:center;font-size:4rem;background:var(--glass-bg)">👤</div>`;
                }}
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "1rem", color: "#fff" }}>
          Muhammed Ashik S
        </h1>

        {/* Animated Role */}
        <div style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", fontWeight: 600, color: "var(--accent)", marginBottom: "1.5rem", minHeight: "2rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {displayed}
          <span className="typewriter-cursor" />
        </div>

        {/* Tagline */}
        <p style={{ fontSize: "1rem", color: "var(--text-secondary)", maxWidth: 520, lineHeight: 1.75, marginBottom: "2.5rem" }}>
          Building at the intersection of <span style={{ color: "#fff" }}>hardware</span>, <span style={{ color: "#fff" }}>software</span>, and <span style={{ color: "#fff" }}>healthcare</span> — from ESP32 firmware to AI-powered web platforms.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "3.5rem" }}>
          <a href="#projects" className="btn-primary">View Projects →</a>
          <a href="/resume.pdf" download className="btn-ghost">Download Resume</a>
          <a href="https://github.com/ASHxOnAIR-MEH" target="_blank" className="btn-icon" title="GitHub" aria-label="GitHub">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
          <a href="https://linkedin.com/in/connentashik" target="_blank" className="btn-icon" title="LinkedIn" aria-label="LinkedIn">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "var(--text-secondary)", textTransform: "uppercase" }}>Scroll</span>
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  );
}
