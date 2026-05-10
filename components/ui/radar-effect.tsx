"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface RadarEffectProps {
  className?: string;
}

export function RadarEffect({ className }: RadarEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let angle = 0;

    const W = 360;
    const H = 360;
    canvas.width = W;
    canvas.height = H;
    const cx = W / 2;
    const cy = H / 2;
    const maxR = W * 0.44;

    // Blip positions (random fixed points)
    const blips = [
      { r: maxR * 0.45, a: 0.8 },
      { r: maxR * 0.7, a: 2.1 },
      { r: maxR * 0.3, a: 3.8 },
      { r: maxR * 0.6, a: 4.9 },
      { r: maxR * 0.85, a: 1.4 },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Background
      ctx.fillStyle = "#111110";
      ctx.beginPath();
      ctx.arc(cx, cy, maxR, 0, Math.PI * 2);
      ctx.fill();

      // Concentric rings
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.arc(cx, cy, (maxR / 4) * i, 0, Math.PI * 2);
        ctx.strokeStyle = "#2C2C2A";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Cross hairs
      ctx.strokeStyle = "#2C2C2A";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx - maxR, cy);
      ctx.lineTo(cx + maxR, cy);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx, cy - maxR);
      ctx.lineTo(cx, cy + maxR);
      ctx.stroke();

      // Sweep gradient
      const sweepEnd = angle;
      const sweepStart = angle - Math.PI * 0.5;
      // Draw sweep as arc fill
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, maxR, sweepStart, sweepEnd);
      ctx.closePath();
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR);
      grad.addColorStop(0, "rgba(0,212,255,0.0)");
      grad.addColorStop(1, "rgba(0,212,255,0.08)");
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();

      // Sweep line
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      const destX = cx + maxR * Math.cos(angle);
      const destY = cy + maxR * Math.sin(angle);
      ctx.lineTo(destX, destY);
      
      const lineGrad = ctx.createLinearGradient(cx, cy, destX, destY);
      lineGrad.addColorStop(0, "rgba(0,212,255,0.0)");
      lineGrad.addColorStop(0.5, "rgba(0,212,255,0.25)");
      lineGrad.addColorStop(1, "rgba(0,212,255,0.0)");
      ctx.strokeStyle = lineGrad;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Blips
      blips.forEach((b) => {
        const bx = cx + b.r * Math.cos(b.a);
        const by = cy + b.r * Math.sin(b.a);
        // Fade based on angular distance from sweep
        let diff = angle - b.a;
        while (diff < 0) diff += Math.PI * 2;
        while (diff > Math.PI * 2) diff -= Math.PI * 2;
        const alpha = diff < Math.PI * 0.5 ? 1 - diff / (Math.PI * 0.5) : 0;
        if (alpha > 0) {
          ctx.beginPath();
          ctx.arc(bx, by, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0,212,255,${alpha})`;
          ctx.fill();
        }
      });

      // Center dot
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#00D4FF";
      ctx.fill();

      angle += 0.025;
      if (angle > Math.PI * 2) angle -= Math.PI * 2;
      animFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("rounded-full", className)}
      style={{ width: 360, height: 360 }}
    />
  );
}
