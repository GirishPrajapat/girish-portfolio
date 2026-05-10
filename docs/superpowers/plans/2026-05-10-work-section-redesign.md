# Work Section Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the placeholder Projects accordion in `components/sections/Projects.tsx` with a process-first services section that shows 4 numbered steps, 2 service cards, and a CTA.

**Architecture:** Single component rewrite — `Projects.tsx` is gutted and rebuilt in-place. No new files, no new dependencies. Framer Motion (already installed) used for subtle step fade-in on scroll. Follows existing token system (`--font-display`, `--font-serif`, `--font-mono`, `--font-body`, cyan `#00D4FF`, cream `#F1EFE8`).

**Tech Stack:** React, TypeScript, Framer Motion, Tailwind (utility classes for layout), inline styles for precise token usage.

---

### Task 1: Rewrite Projects.tsx — header + process steps

**Files:**
- Modify: `components/sections/Projects.tsx` (full rewrite)

- [ ] **Step 1: Replace the entire file content with the new component skeleton + header**

Replace `components/sections/Projects.tsx` with:

```tsx
"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery",
    description:
      "I get to know your business — the industry, your workflow, the problems you're facing, and what success looks like for you.",
  },
  {
    num: "02",
    title: "Diagnosis",
    description:
      "I map where AI fits into your operations — what to automate, what to assist, and what to build first.",
  },
  {
    num: "03",
    title: "Build",
    description:
      "Your custom AI system, built and integrated end-to-end. Timeline depends on complexity — typically 1 to 4 weeks.",
  },
  {
    num: "04",
    title: "Deliver & Onboard",
    description:
      "Fully working system handed off to you. I onboard your team and stay available for iterations after launch.",
  },
];

const services = [
  {
    title: "Custom AI Agents",
    description:
      "One agent, one job, done right. Lead qualification, outreach, research, reporting — scoped to your exact workflow.",
  },
  {
    title: "Multi-Agent Systems",
    description:
      "Multiple agents working as a coordinated team across your entire operation — end-to-end automation at scale.",
  },
];

export function Projects() {
  return (
    <section id="work" className="py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">

        {/* Header */}
        <div style={{ marginBottom: "72px" }}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#F1EFE8",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "20px",
              fontFamily: "var(--font-mono)",
            }}
          >
            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "#00D4FF",
                display: "inline-block",
              }}
            />
            How It Works
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(56px, 8vw, 110px)",
              lineHeight: 0.88,
              color: "#F1EFE8",
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            THE{" "}
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontWeight: 700,
              }}
            >
              Process.
            </span>
          </h2>
        </div>

        {/* Process Steps */}
        <div style={{ marginBottom: "80px" }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "clamp(24px, 4vw, 64px)",
                padding: "32px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Number */}
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(40px, 5vw, 72px)",
                  lineHeight: 1,
                  color: "#00D4FF",
                  flexShrink: 0,
                  letterSpacing: "-0.02em",
                  minWidth: "clamp(60px, 7vw, 100px)",
                }}
              >
                {step.num}
              </span>

              {/* Text */}
              <div style={{ paddingTop: "8px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(22px, 2.4vw, 36px)",
                    color: "#F1EFE8",
                    margin: "0 0 12px",
                    lineHeight: 1,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(13px, 1.1vw, 16px)",
                    color: "rgba(241,239,232,0.65)",
                    lineHeight: 1.75,
                    margin: 0,
                    maxWidth: "560px",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginBottom: "64px",
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
              style={{
                background: "#141412",
                border: "1px solid rgba(0,212,255,0.12)",
                borderRadius: "20px",
                padding: "32px 28px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#00D4FF",
                  margin: "0 0 16px",
                }}
              >
                Service
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(22px, 2vw, 30px)",
                  color: "#F1EFE8",
                  margin: "0 0 14px",
                  lineHeight: 1.05,
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  color: "rgba(241,239,232,0.6)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}

          {/* Websites — subtle pill, not a full card */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "32px 28px",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "20px",
              background: "transparent",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(241,239,232,0.3)",
                  margin: "0 0 10px",
                }}
              >
                Also
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(18px, 1.6vw, 24px)",
                  color: "rgba(241,239,232,0.4)",
                  margin: "0 0 8px",
                }}
              >
                Websites & Interfaces
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  color: "rgba(241,239,232,0.25)",
                  margin: 0,
                }}
              >
                Dashboards and sites to bring your AI work to life.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            paddingTop: "48px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(22px, 2.8vw, 40px)",
              color: "#F1EFE8",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Ready to automate your business?
          </p>
          <a
            href="#contact"
            style={{
              display: "inline-block",
              padding: "14px 32px",
              background: "#00D4FF",
              color: "#0A0A09",
              fontFamily: "var(--font-display)",
              fontSize: "15px",
              letterSpacing: "0.04em",
              borderRadius: "100px",
              textDecoration: "none",
              fontWeight: 700,
              transition: "background 0.2s ease, color 0.2s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#F1EFE8";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#00D4FF";
            }}
          >
            Book a Call →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify the dev server compiles without errors**

Open `http://localhost:3000` and check the browser console for TypeScript or import errors. The page should render with the new "HOW IT WORKS / THE Process." heading visible in the Work section.

- [ ] **Step 3: Scroll through and verify all 4 steps animate in on scroll**

Each step should fade up (opacity 0→1, y 24→0) as it enters the viewport. Cards below should also animate in with a slight stagger.

- [ ] **Step 4: Verify CTA button hover state**

Hover the "Book a Call →" button — background should switch from cyan `#00D4FF` to cream `#F1EFE8`.

- [ ] **Step 5: Verify "Book a Call →" scrolls to contact section**

Click the button — page should smooth-scroll to the `#contact` section.

- [ ] **Step 6: Commit**

```bash
git add components/sections/Projects.tsx docs/superpowers/plans/2026-05-10-work-section-redesign.md docs/superpowers/specs/2026-05-10-work-section-redesign.md
git commit -m "feat: redesign work section to process-first services layout"
```
