"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";
    };

    const onEnter = () => {
      ring.style.width = "40px";
      ring.style.height = "40px";
      ring.style.opacity = "0.5";
    };

    const onLeave = () => {
      ring.style.width = "20px";
      ring.style.height = "20px";
      ring.style.opacity = "1";
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";
      raf = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("mousemove", onMove);

    const hoverables = document.querySelectorAll(
      "a, button, [data-hover]"
    );
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    // Watch for new hoverables via observer
    const observer = new MutationObserver(() => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#00D4FF",
          transition: "width 0.2s, height 0.2s",
          mixBlendMode: "difference",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          border: "1px solid rgba(0,212,255,0.5)",
          transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease",
        }}
      />
    </>
  );
}
