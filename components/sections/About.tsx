"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const useSpotlightBorder = () => {
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };
  const handleMouseLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.setProperty("--mouse-x", "-999px");
    card.style.setProperty("--mouse-y", "-999px");
  };
  return { ref, handleMouseMove, handleMouseLeave };
};

const sideCards = [
  { label: "Endurance", title: "Ironman 70.3", sub: "In active training" },
  { label: "Education", title: "BITS Pilani", sub: "Goa campus · 2nd year" },
  { label: "Output", title: "10+ Agents", sub: "Shipped to live clients" },
];

export function About() {
  const s1 = useSpotlightBorder();
  const s2 = useSpotlightBorder();
  const s3 = useSpotlightBorder();
  const spotlights = [s1, s2, s3];

  return (
    <section id="about" className="py-16 lg:py-[120px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10">

        {/* Section label row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "56px" }}
        >
          <p style={{
            fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#F1EFE8", display: "flex", alignItems: "center", gap: "8px",
            fontFamily: "var(--font-mono)", margin: 0,
          }}>
            <span style={{
              width: "5px", height: "5px", borderRadius: "50%",
              background: "#00D4FF", boxShadow: "0 0 6px rgba(0,212,255,0.5)", display: "inline-block",
            }} />
            About
          </p>
          <div style={{ flex: 1, height: "0.5px", background: "linear-gradient(to right, rgba(255,255,255,0.08), transparent)" }} />
        </motion.div>

        {/* 3-col grid: photo | copy | cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_260px] gap-10 lg:gap-14 items-start">

          {/* ── Col 1: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ position: "relative" }}
          >
            <div style={{
              position: "absolute", top: -8, left: -8, width: "28px", height: "28px",
              borderTop: "1.5px solid #00D4FF", borderLeft: "1.5px solid #00D4FF",
              zIndex: 2, pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", bottom: -8, right: -8, width: "28px", height: "28px",
              borderBottom: "1.5px solid rgba(0,212,255,0.3)", borderRight: "1.5px solid rgba(0,212,255,0.3)",
              zIndex: 2, pointerEvents: "none",
            }} />
            <div style={{
              position: "relative", aspectRatio: "3/4", overflow: "hidden",
              borderRadius: "4px", border: "0.5px solid rgba(255,255,255,0.06)",
            }}>
              <img
                src="/girish.jpeg"
                alt="Girish Prajapat"
                style={{
                  width: "100%", height: "100%", objectFit: "cover",
                  objectPosition: "center top",
                  filter: "contrast(1.1) saturate(0.7) brightness(0.9)", display: "block",
                }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(160deg, rgba(0,212,255,0.04) 0%, transparent 50%)",
                pointerEvents: "none",
              }} />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "80px",
                background: "linear-gradient(to bottom, transparent, rgba(14,14,13,0.85))",
                pointerEvents: "none",
              }} />
              <div style={{
                position: "absolute", bottom: "12px", left: "12px", right: "12px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}>
                <span style={{ fontSize: "10px", letterSpacing: "0.1em", color: "rgba(241,239,232,0.55)", fontFamily: "var(--font-mono)" }}>
                  Girish Prajapat
                </span>
                <span style={{ fontSize: "10px", letterSpacing: "0.1em", color: "rgba(0,212,255,0.5)", fontFamily: "var(--font-mono)" }}>
                  BITS Goa · 2026
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── Col 2: Copy ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            style={{ paddingTop: "4px", textAlign: "center" }}
          >
            {/* Heading */}
            <motion.h2 variants={fadeUp} style={{ margin: "0 0 36px" }}>
              {/* "Not your" — Clash Display */}
              <span style={{
                display: "block",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(48px, 5.5vw, 80px)",
                lineHeight: 0.95,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#F1EFE8",
              }}>
                Not your
              </span>
              {/* "average" — Cormorant 300 italic: thin, flowing, genuinely cursive */}
              <span style={{
                display: "block",
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(72px, 9vw, 124px)",
                lineHeight: 0.85,
                letterSpacing: "-0.02em",
                color: "#F1EFE8",
              }}>
                average
              </span>
              {/* "first-year student." — smaller, solid, muted */}
              <span style={{
                display: "block",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3.2vw, 46px)",
                lineHeight: 1.15,
                fontWeight: 700,
                letterSpacing: "0.01em",
                color: "rgba(241,239,232,0.2)",
                marginTop: "8px",
              }}>
                second year student.
              </span>
            </motion.h2>

            {/* Cyan rule */}
            <motion.div variants={fadeUp} style={{
              width: "36px", height: "1px",
              background: "#00D4FF", marginBottom: "28px",
              boxShadow: "0 0 8px rgba(0,212,255,0.4)",
              margin: "0 auto 28px",
            }} />

            {/* Paragraph 1 */}
            <motion.p variants={fadeUp} style={{
              fontSize: "16px", fontFamily: "var(--font-body)", fontWeight: 300,
              color: "#F1EFE8", lineHeight: 1.85, margin: "0 0 24px",
              letterSpacing: "0.01em",
            }}>
              While most people my age are figuring things out, I&apos;m building AI
              agents that automate real business problems, creating content about
              the journey, and training for one of the hardest endurance races on
              the planet.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p variants={fadeUp} style={{
              fontSize: "16px", fontFamily: "var(--font-body)", fontWeight: 300,
              color: "rgba(241,239,232,0.6)", lineHeight: 1.85, margin: "0 0 44px",
              letterSpacing: "0.01em",
            }}>
              The 70.3 is the discipline. The agents are the craft.
              The content is the proof of work. Everything compounds.
            </motion.p>

            {/* CTA */}
            <motion.a variants={fadeUp} href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase",
              color: "#0E0E0D", background: "#00D4FF", textDecoration: "none",
              padding: "13px 28px", borderRadius: "2px",
              fontFamily: "var(--font-mono)", fontWeight: 500,
              transition: "background 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#F1EFE8";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#00D4FF";
              el.style.transform = "translateY(0)";
            }}
            >
              Work with me
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </motion.div>

          {/* ── Col 3: Spotlight cards ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "4px" }}
          >
            {sideCards.map((card, i) => {
              const s = spotlights[i];
              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  ref={s.ref}
                  onMouseMove={s.handleMouseMove}
                  onMouseLeave={s.handleMouseLeave}
                  className="spotlight-card"
                  style={{
                    borderRadius: "16px",
                    padding: "28px 24px",
                    minHeight: "110px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    cursor: "default",
                  }}
                >
                  <p style={{
                    fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase",
                    color: "#00D4FF", margin: "0 0 12px", fontFamily: "var(--font-mono)",
                  }}>
                    {card.label}
                  </p>
                  <div>
                    <p style={{
                      fontSize: "22px", fontFamily: "var(--font-display)", fontWeight: 700,
                      color: "#F1EFE8", margin: "0 0 6px", lineHeight: 1.1, letterSpacing: "-0.01em",
                    }}>
                      {card.title}
                    </p>
                    <p style={{
                      fontSize: "12px", color: "#F1EFE8", margin: 0,
                      fontFamily: "var(--font-mono)", letterSpacing: "0.06em", opacity: 0.5,
                    }}>
                      {card.sub}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
