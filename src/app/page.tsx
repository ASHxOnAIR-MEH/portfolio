import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <style>{`
        .footer-link { font-size: 0.82rem; color: var(--text-secondary); text-decoration: none; transition: color 0.2s; }
        .footer-link:hover { color: var(--accent); }
      `}</style>
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection />

        {/* Resume Section */}
        <section className="section" id="resume" style={{ background: "var(--bg-secondary)" }}>
          <div className="section-inner" style={{ textAlign: "center" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>07 — Resume</div>
            <h2 className="section-title" style={{ textAlign: "center" }}>Download My <span className="gradient-text">Resume</span></h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2.5rem", fontSize: "1rem" }}>
              A comprehensive overview of my engineering projects, startup experience, and skills.
            </p>
            <div style={{ maxWidth: 480, margin: "0 auto 2.5rem" }}>
              <div className="glass" style={{ padding: "2px", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(0,229,255,0.15)" }}>
                <iframe
                  src="/resume.pdf#toolbar=0&navpanes=0"
                  style={{ width: "100%", height: 520, border: "none", borderRadius: 14, display: "block", background: "#fff" }}
                  title="Resume Preview"
                />
              </div>
            </div>
            <a href="/resume.pdf" target="_blank" download className="btn-primary" style={{ display: "inline-flex" }}>
              Download Resume PDF ↓
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ background: "#070D18", borderTop: "1px solid var(--glass-border)", padding: "2rem 24px" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <span style={{ fontWeight: 800, fontSize: "0.95rem", letterSpacing: "-0.02em", color: "#fff" }}>
              {"<"}<span className="gradient-text">Ashik</span>{"/>"}
            </span>
            <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
              © 2026 Muhammed Ashik S · Kerala, India · All rights reserved.
            </span>
            <div style={{ display: "flex", gap: "1.25rem" }}>
              <a href="https://linkedin.com/in/connentashik" target="_blank" className="footer-link">LinkedIn</a>
              <a href="https://github.com/ASHxOnAIR-MEH" target="_blank" className="footer-link">GitHub</a>
              <a href="mailto:muhammedashik@proton.me" className="footer-link">Email</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
