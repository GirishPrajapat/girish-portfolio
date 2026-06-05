"use client";

import { useRef, useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

/* ── Layout constants ── */
const HEADER_H = 160; // px: heading area inside sticky viewport
const CARD_TOP = HEADER_H + 8;
const BURY_DRIFT = 64; // px an outgoing card drifts up as it fades into the background

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
    title: "LinkedIn Content Engine",
    subtitle: "A multi-agent pipeline: a writer drafts in your voice, a critic scores every post, and a devil's-advocate stress-tests it — you approve via Telegram before anything goes out. It learns from what actually performs.",
    metric: "20K+",
    metricLabel: "Impressions Per Post",
    stack: ["Python", "LangGraph", "Claude API", "Telegram", "Notion"],
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
  {
    index: "06",
    category: "SAAS PRODUCT",
    title: "ReplyIQ",
    subtitle: "A live SaaS that reads every reply to your cold-email campaigns — interested, objection, not now, referral — and surfaces the hot leads instantly so nothing slips through. In production with paying users.",
    metric: "Live",
    metricLabel: "Shipped SaaS · Paying Users",
    stack: ["Next.js", "AWS", "Groq", "Gmail API", "Supabase"],
  },
  {
    index: "07",
    category: "LEAD GENERATION",
    title: "Lead Scraper Agent",
    subtitle: "Finds and enriches qualified leads across the web — company, contact, verified email — and drops them straight into your pipeline, ready for outreach. No manual prospecting.",
    metric: "Mins",
    metricLabel: "Lead List Built — Was Hours",
    stack: ["Python", "Apollo", "SerpAPI", "Notion"],
  },
];

function CardItem({
  project,
  i,
  state,
}: {
  project: (typeof projects)[0];
  i: number;
  state: { y: number; opacity: number; scale: number };
}) {
  const [hovered, setHovered] = useState(false);
  const isInteractive = state.opacity > 0.85 && state.y <= 8;

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
        transform:  `translateY(${state.y}px) scale(${state.scale})`,
        transformOrigin: "center top",
        opacity:    state.opacity,
        willChange: "transform, opacity",
        pointerEvents: isInteractive ? "auto" : "none",
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  type CardState = { y: number; opacity: number; scale: number };
  const [cardStates, setCardStates] = useState<CardState[]>(
    projects.map((_, i) => ({ y: i === 0 ? 0 : 9999, opacity: 1, scale: 1 }))
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let winH = window.innerHeight;
    const onResize = () => { winH = window.innerHeight; };
    window.addEventListener("resize", onResize);

    const OFF = () => winH - CARD_TOP; // translateY that parks a card just below the viewport

    const handleScroll = () => {
      if (!outerRef.current) return;
      const rect        = outerRef.current.getBoundingClientRect();
      const totalH      = outerRef.current.offsetHeight;
      const scrollableH = totalH - winH;
      const scrolled    = -rect.top;

      const progress = scrollableH > 0
        ? Math.max(0, Math.min(scrolled / scrollableH, 1))
        : 0;
      const Nv   = projects.length - 1;
      const last = projects.length - 1;

      setActiveIndex(Math.min(Math.floor(progress * projects.length), last));

      setCardStates(
        projects.map((_, i) => {
          const segStart = (i - 1) / Nv; // card i begins rising
          const segEnd   = i / Nv;       // card i fully in frame
          const nextEnd  = (i + 1) / Nv; // card i fully buried by card i+1

          // 1) below the viewport, waiting its turn
          if (i !== 0 && progress <= segStart) {
            return { y: OFF(), opacity: 1, scale: 1 };
          }

          // 2) rising into the frame — fully opaque as it comes up
          if (i !== 0 && progress < segEnd) {
            const t = easeOutCubic((progress - segStart) / (segEnd - segStart));
            return { y: OFF() * (1 - t), opacity: 1, scale: 1 };
          }

          // 3) settled, then fading into the background as the next card rises over it
          if (i < last && progress > segEnd) {
            const b = easeOutCubic(Math.min(1, (progress - segEnd) / (nextEnd - segEnd)));
            return { y: -b * BURY_DRIFT, opacity: 1 - b, scale: 1 - b * 0.04 };
          }

          // 4) the active (or final) card, fully in frame
          return { y: 0, opacity: 1, scale: 1 };
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

  /* ── Mobile / reduced motion: static scrollable card list ── */
  if (prefersReducedMotion || isMobile) {
    return (
      <section id="proof-of-work" className="px-5 md:px-12 py-16 md:py-24">
        <p className="text-[11px] tracking-widest text-[#F1EFE8] uppercase mb-3 flex items-center gap-2"
          style={{ fontFamily: "var(--font-mono)" }}>
          <span className="w-[5px] h-[5px] rounded-full bg-[#00D4FF] inline-block" />
          Proof of Work
        </p>
        <h2 className="text-[#F1EFE8] text-[48px] md:text-[96px] leading-none mb-10 md:mb-16"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
          WHAT I{" "}
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 700 }}>Build.</span>
        </h2>
        <div className="flex flex-col gap-5 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div key={project.index} className="rounded-[20px] border border-white/[0.06] p-6 md:p-10"
              style={{ background: "#141412" }}>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#00D4FF] mb-3"
                style={{ fontFamily: "var(--font-body)" }}>{project.category}</p>
              <h3 className="text-[#F1EFE8] text-[24px] md:text-[40px] leading-tight mb-2"
                style={{ fontFamily: "var(--font-display)" }}>{project.title}</h3>
              <p className="text-[#F1EFE8]/70 text-[13px] md:text-[14px] leading-[1.7] mb-4"
                style={{ fontFamily: "var(--font-body)" }}>{project.subtitle}</p>
              <div className="flex items-baseline gap-2 mb-1">
                <p className="text-[#F1EFE8] text-[40px] md:text-[48px] leading-none"
                  style={{ fontFamily: "var(--font-display)" }}>{project.metric}</p>
              </div>
              <p className="text-[10px] tracking-[0.18em] uppercase text-[#00D4FF]"
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
          <CardItem key={project.index} project={project} i={i} state={cardStates[i]} />
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
