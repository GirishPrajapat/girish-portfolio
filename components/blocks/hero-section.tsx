"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { useHeroScroll } from "@/hooks/useHeroScroll";

// ─── NAV ─────────────────────────────────────────────────────────────────────

const menuItems = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const tools = [
  "n8n",
  "GPT-4",
  "Python",
  "LangChain",
  "Supabase",
  "Vercel",
  "Anthropic",
  "Zapier",
  "FastAPI",
  "Claude Code",
];

function HeroNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[720px]">
      {/* Pill */}
      <nav
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "0.5px solid rgba(255,255,255,0.10)",
          borderRadius: "100px",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0.5" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "22px",
              color: "#F1EFE8",
              letterSpacing: "0.12em",
            }}
          >
            GP
          </span>
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "18px",
              background: "#00D4FF",
              marginLeft: "2px",
              animation: "cursorBlink 1.1s step-end infinite",
              borderRadius: "1px",
            }}
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex" style={{ gap: "32px" }}>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              style={{
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#888780",
                textDecoration: "none",
                transition: "color 0.2s",
                fontFamily: "var(--font-mono)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F1EFE8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888780")}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="hidden lg:block"
          style={{
            background: "#00D4FF",
            color: "#0E0E0D",
            fontSize: "15px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "8px 20px",
            borderRadius: "100px",
            textDecoration: "none",
            transition: "background 0.2s ease",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#F1EFE8")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#00D4FF")}
        >
          Hire Me
        </Link>

        {/* Mobile hamburger — sits inside the pill */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden relative p-1 text-[#F1EFE8]"
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <Menu
            className={cn(
              "size-5 transition-all duration-200",
              menuOpen && "opacity-0 scale-0"
            )}
          />
          <X
            className={cn(
              "size-5 absolute inset-0 m-auto transition-all duration-200 scale-0 opacity-0",
              menuOpen && "scale-100 opacity-100"
            )}
          />
        </button>
      </nav>

      {/* Mobile dropdown — floats below the pill with matching glass style */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          style={{
            marginTop: "8px",
            background: "rgba(14,14,13,0.92)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "0.5px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "20px 24px",
          }}
        >
          <ul className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#888780",
                    textDecoration: "none",
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "inline-block",
                  background: "#00D4FF",
                  color: "#0E0E0D",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "7px 18px",
                  borderRadius: "100px",
                  textDecoration: "none",
                  marginTop: "8px",
                }}
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

export function HeroSection() {
  // Text scroll-out animations (heading flies to nav, chips scatter, etc.)
  useHeroScroll();

  return (
    <>
      <HeroNav />

      <section
        id="hero-section"
        style={{ minHeight: "100vh", position: "relative" }}
      >
        <div
          style={{
            minHeight: "100vh",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* ── HERO CONTENT ── */}
          <div className="relative z-20 w-full max-w-[1440px] mx-auto px-3 lg:px-6 pt-36 lg:pt-44 h-full flex flex-col justify-center" style={{ minHeight: "100vh" }}>
            <p
              id="hero-label"
              className="flex items-center gap-2 mb-10"
              style={{
                fontSize: '12px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#888780',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#00D4FF',
                display: 'inline-block',
                boxShadow: '0 0 6px rgba(0,212,255,0.6)',
              }} />
              AI Agent Developer
            </p>

            <h1
              id="hero-heading"
              className="leading-tight text-[#F1EFE8]"
              style={{
                fontSize: 'clamp(52px, 7vw, 100px)',
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontWeight: 700,
                lineHeight: 1.0,
              }}
            >
              I Build AI<br />
              Systems That<br />
              <span style={{ WebkitTextStroke: '1.5px #F1EFE8', color: 'transparent', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 700, display: 'block', marginTop: '28px' }}>
                Run Your Business.
              </span>
            </h1>

            <p
              id="hero-subtext"
              className="mt-8 text-[#F1EFE8] text-base leading-relaxed max-w-md"
            >
              Not a single chatbot — networks of AI agents that handle your operations, cut errors, and free you up to focus on what actually grows the business.
            </p>

            <div id="hero-ctas" className="mt-10 flex flex-wrap gap-4">
              {/* Primary — cyan fill */}
              <Link
                href="#work"
                style={{
                  background: '#00D4FF',
                  color: '#0E0E0D',
                  padding: '14px 32px',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  borderRadius: '2px',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = '#F1EFE8'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = '#00D4FF'
                }}
              >
                See My Work →
              </Link>

              {/* Secondary — border only */}
              <Link
                href="#contact"
                style={{
                  background: 'transparent',
                  color: '#888780',
                  padding: '14px 32px',
                  fontSize: '12px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  display: 'inline-block',
                  border: '1px solid #2C2C2A',
                  transition: 'all 0.3s ease',
                  borderRadius: '2px',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#00D4FF'
                  el.style.color = '#00D4FF'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#2C2C2A'
                  el.style.color = '#888780'
                }}
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* ── RIGHT SIDE STAT COLUMN ── */}
          <div
            id="hero-stats"
            className="hidden lg:flex"
            style={{
              position: 'absolute',
              top: '50%',
              right: '5%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '32px',
            }}
          >
            {/* Availability badge */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(0,212,255,0.08)',
              border: '1px solid rgba(0,212,255,0.2)',
              borderRadius: '100px',
              padding: '8px 16px',
              backdropFilter: 'blur(8px)',
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#00D4FF',
                boxShadow: '0 0 8px rgba(0,212,255,0.8)',
                animation: 'availablePulse 2s ease-in-out infinite',
                flexShrink: 0,
              }} />
              <span style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#00D4FF',
                fontWeight: 500,
              }}>
                Available for work
              </span>
            </div>

            {/* Stat 1 — agents */}
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F1EFE8', margin: '0 0 4px' }}>
                Agents shipped
              </p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '52px', color: '#F1EFE8', lineHeight: 1, margin: 0 }}>
                10<span style={{ color: '#00D4FF' }}>+</span>
              </p>
            </div>

            <div style={{ width: '40px', height: '1px', background: '#2C2C2A', alignSelf: 'flex-end' }} />

            {/* Stat 2 — Ironman */}
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F1EFE8', margin: '0 0 4px' }}>
                Ironman target
              </p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '52px', color: '#F1EFE8', lineHeight: 1, margin: 0 }}>
                70<span style={{ color: '#00D4FF' }}>.3</span>
              </p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#444441]" style={{ fontFamily: 'var(--font-mono)' }}>
              Scroll
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-[#444441] to-transparent" />
          </div>
        </div>
      </section>

      {/* ── LOGO / TOOL STRIP ── */}
      <section className="bg-[#0E0E0D] border-t border-[#2C2C2A]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col items-center md:flex-row py-6 gap-6">
            <div className="md:max-w-44 md:border-r md:border-[#2C2C2A] md:pr-6">
              <p className="text-end text-[12px] tracking-[0.08em] uppercase text-[#F1EFE8]">
                Tools I build with
              </p>
            </div>

            <div className="relative md:flex-1 overflow-hidden">
              <InfiniteSlider speedOnHover={20} speed={40} gap={80}>
                {tools.map((tool) => (
                  <div key={tool} className="flex items-center">
                    <span className="text-[#F1EFE8] text-sm tracking-widest uppercase font-medium whitespace-nowrap">
                      {tool}
                    </span>
                  </div>
                ))}
              </InfiniteSlider>

              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-16"
                direction="left"
                blurIntensity={0.8}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-16"
                direction="right"
                blurIntensity={0.8}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── IDENTITY SECTION ── */}
      <section
        id="identity-section"
        className="bg-[#0E0E0D]"
        style={{ paddingTop: '100px', paddingBottom: '40px' }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          {/* Line 1 — "I Automate [AI image] Thinking." */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            marginBottom: '16px',
          }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4.5vw, 64px)',
              lineHeight: 0.9,
              color: '#F1EFE8',
              letterSpacing: '-0.01em',
              whiteSpace: 'nowrap',
            }}>
              I Automate
            </span>

            {/* AI Agents image chip */}
            <div style={{
              width: 'clamp(80px, 7vw, 130px)',
              height: 'clamp(48px, 4.2vw, 78px)',
              borderRadius: '12px',
              overflow: 'hidden',
              flexShrink: 0,
              border: '1px solid rgba(0,212,255,0.2)',
              transform: 'rotate(-4deg)',
            }}>
              <img
                src="/ai-agents.jpg"
                alt="AI Agents"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4.5vw, 64px)',
              lineHeight: 0.9,
              color: '#F1EFE8',
              letterSpacing: '-0.01em',
              whiteSpace: 'nowrap',
            }}>
              Thinking.
            </span>
          </div>

          {/* Line 2 — "Ironman 70.3 [ironman image] In Training." */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            marginBottom: '16px',
          }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4.5vw, 64px)',
              lineHeight: 0.9,
              color: '#444441',
              letterSpacing: '-0.01em',
              whiteSpace: 'nowrap',
              transition: 'color 0.4s ease',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#888780'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#444441'}
            >
              Ironman 70.3
            </span>

            {/* Ironman finish line image chip */}
            <div style={{
              width: 'clamp(80px, 7vw, 130px)',
              height: 'clamp(48px, 4.2vw, 78px)',
              borderRadius: '12px',
              overflow: 'hidden',
              flexShrink: 0,
              border: '1px solid rgba(44,44,42,0.6)',
              transform: 'rotate(3deg)',
            }}>
              <img
                src="/ironman.jpg"
                alt="Ironman 70.3"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4.5vw, 64px)',
              lineHeight: 0.9,
              color: '#444441',
              letterSpacing: '-0.01em',
              whiteSpace: 'nowrap',
              transition: 'color 0.4s ease',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#888780'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#444441'}
            >
              In Training.
            </span>
          </div>

          {/* Line 3 — BITS Pilani, most muted */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 4.5vw, 64px)',
            lineHeight: 0.9,
            color: '#2C2C2A',
            letterSpacing: '-0.01em',
            transition: 'color 0.4s ease',
            marginBottom: '0',
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#444441'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#2C2C2A'}
          >
            BITS Pilani Student.
          </div>

        </div>

      </section>

      {/* CSS animations */}
      <style>{`
        @keyframes orbDrift1 {
          0%   { transform: translate(0px, 0px) scale(1); }
          50%  { transform: translate(-30px, 20px) scale(1.05); }
          100% { transform: translate(20px, -30px) scale(0.97); }
        }
        @keyframes orbDrift2 {
          0%   { transform: translate(0px, 0px) scale(1); }
          50%  { transform: translate(25px, -15px) scale(1.03); }
          100% { transform: translate(-20px, 25px) scale(0.98); }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes availablePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </>
  );
}
