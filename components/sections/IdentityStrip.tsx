"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  {
    left: "AI Agents",
    right: "Built Fast",
    emoji: "⚡",
    color: "#00D4FF",
  },
  {
    left: "Training for",
    right: "Ironman 70.3",
    emoji: "🏊",
    color: "#AFA9EC",
  },
  {
    left: "First Year",
    right: "Full Send",
    emoji: "🎓",
    color: "#F1EFE8",
  },
];

export function IdentityStrip() {
  const [activeLines, setActiveLines] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = lineRefs.current.map((el, i) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveLines((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  return (
    <section id="identity-section" className="py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        {lines.map((line, i) => (
          <div
            key={i}
            ref={(el) => {
              lineRefs.current[i] = el;
            }}
            className="flex items-center gap-4 lg:gap-8 mb-4 overflow-hidden"
            style={{
              fontSize: "clamp(40px, 6vw, 80px)",
              fontFamily: "var(--font-bebas)",
              lineHeight: 1.1,
              color: activeLines[i] ? "#F1EFE8" : "#2C2C2A",
              transition: "color 0.6s ease",
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {line.left}
            </motion.span>

            {/* Decorative separator chip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.1 + 0.15 }}
              className="flex-shrink-0 w-16 h-10 lg:w-24 lg:h-14 rounded-xl border border-[#2C2C2A] flex items-center justify-center"
              style={{
                background: activeLines[i]
                  ? "rgba(0,212,255,0.06)"
                  : "transparent",
                borderColor: activeLines[i] ? "#2C2C2A" : "#2C2C2A",
                transition: "background 0.6s ease",
              }}
            >
              <span
                className="text-2xl lg:text-3xl"
                style={{ fontSize: "clamp(18px, 2.5vw, 28px)" }}
              >
                {line.emoji}
              </span>
            </motion.div>

            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.05 }}
            >
              {line.right}
            </motion.span>
          </div>
        ))}
      </div>
    </section>
  );
}
