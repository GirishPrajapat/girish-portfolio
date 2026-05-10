"use client";

import { useEffect, useRef } from "react";

export function HeroBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let t = 0;

    // Particle system
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    // Two slow-drifting orbs
    const orbs = [
      {
        x: width * 0.7,
        y: height * 0.3,
        r: 320,
        color: "0,212,255",
        speedX: 0.12,
        speedY: 0.08,
      },
      {
        x: width * 0.2,
        y: height * 0.7,
        r: 260,
        color: "175,169,236",
        speedX: -0.09,
        speedY: 0.11,
      },
    ];

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep background
      ctx.fillStyle = "#0E0E0D";
      ctx.fillRect(0, 0, width, height);

      // Drifting orbs
      orbs.forEach((orb) => {
        orb.x += Math.sin(t * orb.speedX) * 0.6;
        orb.y += Math.cos(t * orb.speedY) * 0.6;

        const grad = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.r
        );
        grad.addColorStop(0, `rgba(${orb.color}, 0.07)`);
        grad.addColorStop(1, `rgba(${orb.color}, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(241, 239, 232, ${p.alpha})`;
        ctx.fill();
      });

      // Subtle grid lines
      ctx.strokeStyle = "rgba(44, 44, 42, 0.4)";
      ctx.lineWidth = 0.5;
      const gridSize = 80;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      t += 0.01;
      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
