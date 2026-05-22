"use client";

import { useRef, useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

/* ── Layout constants (ReplyIQ pattern) ── */
const HEADER_H = 160; // px: heading area inside sticky viewport
const PEEK     = 44;  // px: strip of buried card visible at top
const CARD_TOP = HEADER_H + 8;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

const projects = [
  {
    index: "01",
    category: "LEAD MANAGEMENT",
    title: "Lead Qualification Agent",
    subtitle: "Ingests raw inbound leads, scores them using LLM reasoning, and routes high-intent prospects to the pipeline — no human triage.",
    metric: "80%",
    metricLabel: "Manual Review Time Cut",
    stack: ["n8n", "Python", "OpenAI", "Vercel", "Supabase"],
  },
  {
    index: "02",
    category: "FINANCE",
    title: "Stock Analysis Agent",
    subtitle: "An n8n agent that pulls live prices, applies technical indicators, and writes a plain-English summary",
    metric: "3+ hrs",
    metricLabel: "Saved for you daily",
    stack: ["n8n", "Yahoo Finance", "Claude"],
  },
  {
    index: "03",
    category: "INTELLIGENCE",
    title: "News Analysis Agent",
    subtitle: "Multi-source aggregator with Claude sentiment scoring and category filtering. Send a report like it was written by an Expert",
    metric: "1 hour",
    metricLabel: "Saved for you daily",
    stack: ["n8n", "Claude", "Gmail", "Notion"],
  },
  {
    index: "04",
    category: "SOCIAL MEDIA",
    title: "LinkedIn Poster Agent",
    subtitle: "Topic input → research → draft → format → schedule. One trigger, zero manual steps.",
    metric: "6+ hrs",
    metricLabel: "Saved for Unlimited Content Creation",
    stack: ["python", "n8n", "Claude API", "Telegram", "Notion"],
  },
  {
    index: "05",
    category: "OUTREACH",
    title: "Outreach Agent",
    subtitle: "Extracts qualified leads from Apollo, researches them, and makes a personalized email for them, Continues to talk to them and do follow up until a call is booked.",
    metric: "12 calls",
    metricLabel: "Booked in 5 Days",
    stack: ["n8n", "Claude API", "Apollo", "Gmail", "Calendly"],
  },
];

function CardItem({
  project,
  i,
  translateY,
}: {
  project: (typeof projects)[0];
  i: number;
  translateY: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      role="article"
      aria-label={project.title}
      style={{
        position:   "absolute",
        top:        CARD_TOP,
        left:       12,
        right:      12,
        height:     `calc(100vh - ${CARD_TOP + 120}px)`,
        zIndex:     i + 1,
        transform:  `translateY(${translateY}px)`,
        willChange: "transform",
        pointerEvents: translateY <= PEEK + 4 ? "auto" : "none",
      }}
    >
      {/* Card inner — max-width centred, same visuals as before */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex flex-col sm:flex-row"
        style={{
          height: "100%",
          maxWidth: "984px",
          margin: "0 auto",
          background: "#141412",
          borderRadius: "20px",
          border: hovered ? "1px solid rgba(0,212,255,0.55)" : "1px solid rgba(0,212,255,0.1)",
          boxShadow: hovered ? "0 0 24px rgba(0,212,255,0.18), inset 0 0 10px rgba(0,212,255,0.04)" : "none",
          overflow: "hidden",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          position: "relative",
        }}
      >
        {/* LEFT: text content */}
        <div
          className="sm:flex-none sm:w-[55%]"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "clamp(18px, 2.8vh, 34px) clamp(18px, 2.8vw, 36px)",
            position: "relative",
          }}
        >
          {/* Ghost index */}
          <div aria-hidden="true" style={{
            position: "absolute", top: "12px", left: "36px",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(56px, 7vw, 91px)",
            lineHeight: 1,
            color: "rgba(255,255,255,0.025)",
            userSelect: "none", pointerEvents: "none",
          }}>
            {project.index}
          </div>

          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
            <p style={{
              fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase",
              color: "#00D4FF", marginBottom: "clamp(10px, 1.6vh, 16px)",
              fontFamily: "var(--font-body)",
            }}>
              {project.category}
            </p>

            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(20px, 2.1vw, 35px)",
              lineHeight: 0.92, color: "#F1EFE8",
              marginBottom: "clamp(8px, 1vh, 12px)",
            }}>
              {project.title}
            </h3>

            <p style={{
              fontSize: "clamp(12px, 0.9vw, 14px)", color: "#F1EFE8",
              lineHeight: 1.7, maxWidth: "380px",
              marginBottom: "clamp(12px, 1.6vh, 20px)",
              fontFamily: "var(--font-body)",
            }}>
              {project.subtitle}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "auto" }}>
              {project.stack.map((tag) => (
                <span key={tag} style={{
                  padding: "3px 10px", border: "1px solid #2C2C2A",
                  color: "#F1EFE8", fontSize: "9px", borderRadius: "100px",
                  fontFamily: "var(--font-body)", letterSpacing: "0.04em",
                }}>
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* RIGHT: metric */}
        <div
          className="sm:flex-none sm:w-[45%] border-t border-white/5 sm:border-t-0 sm:border-l"
          style={{
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            background: "rgba(255,255,255,0.015)",
            position: "relative", overflow: "hidden",
            minHeight: "120px",
          }}
        >
          {/* Orb 1 — large centre */}
          <div aria-hidden="true" style={{
            position: "absolute", width: "280px", height: "280px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,212,255,0.55) 0%, transparent 65%)",
            animation: "orb-drift-1 7s ease-in-out infinite",
            pointerEvents: "none",
          }} />
          {/* Orb 2 — smaller, offset top-right */}
          <div aria-hidden="true" style={{
            position: "absolute", width: "160px", height: "160px",
            borderRadius: "50%", top: "15%", right: "10%",
            background: "radial-gradient(circle, rgba(0,212,255,0.45) 0%, transparent 65%)",
            animation: "orb-drift-2 9s ease-in-out infinite",
            pointerEvents: "none",
          }} />
          {/* Orb 3 — small, bottom-left */}
          <div aria-hidden="true" style={{
            position: "absolute", width: "120px", height: "120px",
            borderRadius: "50%", bottom: "15%", left: "10%",
            background: "radial-gradient(circle, rgba(0,212,255,0.4) 0%, transparent 65%)",
            animation: "orb-drift-3 6s ease-in-out infinite",
            pointerEvents: "none",
          }} />
          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 5vw, 76px)",
            lineHeight: 1, color: "#F1EFE8",
            position: "relative", zIndex: 1, letterSpacing: "-0.01em",
          }}>
            {project.metric}
          </p>
          <p style={{
            fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#F1EFE8", marginTop: "10px", textAlign: "center",
            maxWidth: "140px", fontFamily: "var(--font-body)",
            lineHeight: 1.5, position: "relative", zIndex: 1,
          }}>
            {project.metricLabel}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function StackingCards() {
  const outerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [yValues, setYValues] = useState<number[]>(
    projects.map((_, i) => (i === 0 ? 0 : 9999))
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let winH = window.innerHeight;
    const onResize = () => { winH = window.innerHeight; };
    window.addEventListener("resize", onResize);

    const OFF = () => winH - CARD_TOP; // translateY that puts card just below viewport

    const handleScroll = () => {
      if (!outerRef.current) return;
      const rect      = outerRef.current.getBoundingClientRect();
      const totalH    = outerRef.current.offsetHeight;
      const scrollableH = totalH - winH;
      const scrolled  = -rect.top;

      if (scrolled < 0) {
        setYValues(projects.map((_, i) => (i === 0 ? 0 : OFF())));
        setActiveIndex(0);
        return;
      }
      if (scrolled > scrollableH) {
        setActiveIndex(projects.length - 1);
        return;
      }

      const progress = scrolled / scrollableH;
      const Nv = projects.length - 1;

      setActiveIndex(Math.min(Math.floor(progress * projects.length), projects.length - 1));

      setYValues(
        projects.map((_, i) => {
          if (i === 0) return 0;

          const segStart = (i - 1) / Nv;
          const segEnd   = i / Nv;

          if (progress <= segStart) return OFF();
          if (progress >= segEnd)   return i * PEEK;

          const t = easeOutCubic((progress - segStart) / (segEnd - segStart));
          return OFF() + (i * PEEK - OFF()) * t;
        })
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const sectionVh = projects.length * 100;

  /* ── Reduced motion: static list ── */
  if (prefersReducedMotion) {
    return (
      <section id="proof-of-work" className="px-6 md:px-12 py-24">
        <p className="text-[11px] tracking-widest text-[#F1EFE8] uppercase mb-3 flex items-center gap-2"
          style={{ fontFamily: "var(--font-mono)" }}>
          <span className="w-[5px] h-[5px] rounded-full bg-[#00D4FF] inline-block" />
          Proof of Work
        </p>
        <h2 className="text-[#F1EFE8] text-[64px] md:text-[96px] leading-none mb-16"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
          WHAT I{" "}
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 700 }}>Build.</span>
        </h2>
        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div key={project.index} className="rounded-[20px] border border-white/[0.06] p-10"
              style={{ background: "#141412" }}>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#00D4FF] mb-3"
                style={{ fontFamily: "var(--font-body)" }}>{project.category}</p>
              <h3 className="text-[#F1EFE8] font-display text-[40px] leading-tight mb-3">{project.title}</h3>
              <p className="text-[#F1EFE8] text-[14px] leading-[1.7] mb-4"
                style={{ fontFamily: "var(--font-body)" }}>{project.subtitle}</p>
              <p className="font-display text-[48px] text-[#F1EFE8]">{project.metric}</p>
              <p className="text-[10px] tracking-[0.18em] uppercase text-[#F1EFE8]"
                style={{ fontFamily: "var(--font-body)" }}>{project.metricLabel}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <div ref={outerRef} id="proof-of-work" style={{ height: `${sectionVh}vh`, position: "relative" }}>

      {/* Sticky viewport: header + cards locked together */}
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>

        {/* Section heading — stays fixed while cards animate below */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: HEADER_H,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "flex-end",
          paddingBottom: "24px",
          paddingTop: "24px",
          zIndex: 0,
        }}>
          <p className="text-[11px] tracking-widest text-[#F1EFE8] uppercase mb-3 flex items-center gap-2"
            style={{ fontFamily: "var(--font-mono)" }}>
            <span className="w-[5px] h-[5px] rounded-full bg-[#00D4FF] inline-block" />
            Proof of Work
          </p>
          <h2 className="text-[#F1EFE8] leading-none text-center"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px, 3.5vw, 45px)" }}>
            WHAT I{" "}
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 700 }}>Build.</span>
          </h2>
        </div>

        {/* Cards */}
        {projects.map((project, i) => (
          <CardItem key={project.index} project={project} i={i} translateY={yValues[i]} />
        ))}

        {/* Progress dots */}
        <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
          {projects.map((_, i) => (
            <div key={i} className={
              "w-[6px] h-[6px] rounded-full transition-all duration-300 " +
              (activeIndex === i
                ? "bg-[#00D4FF] scale-150 shadow-[0_0_8px_rgba(0,212,255,0.8)]"
                : "bg-[#2C2C2A]")
            } />
          ))}
        </div>
      </div>
    </div>
  );
}
