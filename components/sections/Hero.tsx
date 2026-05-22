"use client";

import { motion } from "framer-motion";
import { HeroBg } from "@/components/ui/hero-bg";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* Animated canvas background */}
      <HeroBg />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-16 pt-24 pb-32 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Section label */}
          <motion.div id="hero-label" variants={fadeUp}>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#888780] flex items-center gap-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] inline-block" />
              AI Agent Developer
            </p>
          </motion.div>

          {/* Giant heading — FIX 1: larger size, tighter leading, 1.5px stroke */}
          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            className="font-[var(--font-bebas)] leading-[0.88] text-[#F1EFE8] tracking-tight"
            style={{ fontSize: "clamp(80px, 13vw, 160px)" }}
          >
            Building
            <br />
            What&apos;s
            <br />
            <span
              style={{
                WebkitTextStroke: "1.5px #F1EFE8",
                color: "transparent",
              }}
            >
              Next.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            id="hero-subtext"
            variants={fadeUp}
            className="mt-8 text-[#888780] text-base max-w-md leading-relaxed"
          >
            I build AI agents that automate the complex. Training for Ironman
            70.3. Creating content about all of it — in my first year of
            college.
          </motion.p>

          {/* CTAs */}
          <motion.div
            id="hero-ctas"
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#proof-of-work"
              className="bg-[#F1EFE8] text-[#0E0E0D] px-8 py-3.5 text-sm font-medium tracking-wider hover:bg-[#00D4FF] transition-colors duration-300"
            >
              See My Work →
            </a>
            <a
              href="#contact"
              className="border border-[#2C2C2A] text-[#888780] px-8 py-3.5 text-sm tracking-wider hover:border-[#888780] hover:text-[#F1EFE8] transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* FIX 4: Individually positioned chips — each with unique style + ID for GSAP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {/* Chip 1 — amber fill, largest, topmost */}
        <div
          id="chip-1"
          className="absolute bg-[#00D4FF] text-[#0E0E0D] text-xs font-semibold tracking-wider px-5 py-2.5 rounded-full whitespace-nowrap"
          style={{ top: "180px", right: "8%" }}
        >
          10+ Agents Built
        </div>

        {/* Chip 2 — border only, medium, slightly indented */}
        <div
          id="chip-2"
          className="absolute border border-[#2C2C2A] text-[#888780] text-[11px] tracking-wider px-4 py-2 rounded-full whitespace-nowrap backdrop-blur-sm"
          style={{ top: "240px", right: "12%" }}
        >
          First Year College
        </div>

        {/* Chip 3 — surface fill, smaller, slightly rotated */}
        <div
          id="chip-3"
          className="absolute bg-[#1A1A18] border border-[#2C2C2A] text-[#5F5E5A] text-[10px] tracking-widest px-3 py-1.5 rounded-full whitespace-nowrap"
          style={{ top: "295px", right: "6%", transform: "rotate(2deg)" }}
        >
          Ironman 70.3 Trainee
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#444441]">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#444441] to-transparent" />
      </div>
    </section>
  );
}
