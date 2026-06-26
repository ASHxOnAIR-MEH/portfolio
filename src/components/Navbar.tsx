"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div style={{ maxWidth: 1180, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* LOGO */}
        <a href="#home" style={{ textDecoration: "none" }}>
          <span style={{ fontWeight: 800, fontSize: "1rem", letterSpacing: "-0.02em", color: "#fff" }}>
            {"<"}
            <span className="gradient-text">Ashik</span>
            {"/>"}
          </span>
        </a>

        {/* DESKTOP LINKS */}
        <style>{`
          .nav-item-link { color: var(--text-secondary); text-decoration: none; font-size: 0.88rem; font-weight: 500; transition: color 0.2s; }
          .nav-item-link:hover { color: var(--accent); }
        `}</style>
        <ul style={{ display: "flex", gap: "2rem", listStyle: "none", alignItems: "center" }} className="hidden md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-item-link">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="/resume.pdf" target="_blank" className="btn-primary" style={{ padding: "0.5rem 1.2rem", fontSize: "0.82rem" }}>
              Resume ↓
            </a>
          </li>
        </ul>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: 5, padding: 4 }}
          className="flex md:hidden"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block", width: 24, height: 2,
                background: open && i === 1 ? "transparent" : "white",
                borderRadius: 2,
                transform: open ? (i === 0 ? "rotate(45deg) translate(5px, 5px)" : i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "none") : "none",
                transition: "all 0.25s ease",
              }}
            />
          ))}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(11,18,32,0.97)", backdropFilter: "blur(20px)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2.5rem", zIndex: 999
        }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ color: "white", textDecoration: "none", fontSize: "1.8rem", fontWeight: 700 }}>
              {l.label}
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" className="btn-primary">Resume ↓</a>
        </div>
      )}
    </nav>
  );
}
