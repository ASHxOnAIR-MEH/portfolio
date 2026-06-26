"use client";
import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W: number, H: number;
    const particles: Particle[] = [];
    const PARTICLE_COUNT = 90;

    class Particle {
      x: number; y: number; vx: number; vy: number; size: number; opacity: number; hue: number;
      constructor() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 1.5 + 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.hue = Math.random() > 0.5 ? 185 : 160;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > W) this.vx *= -1;
        if (this.y < 0 || this.y > H) this.vy *= -1;
      }
      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 100%, 65%, ${this.opacity})`;
        ctx.fill();
      }
    }

    function drawBlueprintGrid(ctx: CanvasRenderingContext2D) {
      const spacing = 60;
      ctx.strokeStyle = "rgba(0,229,255,0.03)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x < W; x += spacing) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += spacing) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }
      // larger grid
      ctx.strokeStyle = "rgba(0,229,255,0.055)";
      const lg = spacing * 4;
      for (let x = 0; x < W; x += lg) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += lg) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }
    }

    function connectParticles(ctx: CanvasRenderingContext2D) {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const alpha = (1 - dist / 100) * 0.12;
            ctx.strokeStyle = `rgba(0,229,255,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    // Draw ECG/heartbeat wave
    let waveOffset = 0;
    function drawHeartbeat(ctx: CanvasRenderingContext2D) {
      ctx.save();
      ctx.strokeStyle = "rgba(0,255,136,0.08)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      const y0 = H * 0.78;
      const step = 8;
      for (let x = 0; x < W; x += step) {
        const phase = (x + waveOffset) % 200;
        let dy = 0;
        if (phase < 60) dy = 0;
        else if (phase < 70) dy = -(phase - 60) * 6;
        else if (phase < 80) dy = (phase - 70) * 14;
        else if (phase < 90) dy = -(phase - 80) * 12;
        else if (phase < 100) dy = (phase - 90) * 8;
        else if (phase < 110) dy = -(phase - 100) * 3;
        else dy = 0;
        if (x === 0) ctx.moveTo(x, y0 + dy);
        else ctx.lineTo(x, y0 + dy);
      }
      ctx.stroke();
      ctx.restore();
      waveOffset = (waveOffset + 0.8) % 200;
    }

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function init() {
      resize();
      for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, W, H);
      drawBlueprintGrid(ctx);
      drawHeartbeat(ctx);
      particles.forEach(p => { p.update(); p.draw(ctx); });
      connectParticles(ctx);
      animId = requestAnimationFrame(animate);
    }

    init();
    animate();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="hero-canvas" />;
}
