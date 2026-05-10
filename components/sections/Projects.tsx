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
        <div style={{ marginBottom: "72px", textAlign: "center" }}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#F1EFE8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
              fontWeight: 700,
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
        <div style={{ marginBottom: "80px", maxWidth: "720px", margin: "0 auto 80px" }}>
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
                gap: "clamp(24px, 4vw, 48px)",
                padding: "32px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
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

          {/* Websites — full card, same as others */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
            style={{
              background: "#141412",
              border: "1px solid rgba(0,212,255,0.12)",
              borderRadius: "20px",
              padding: "32px 28px",
            }}
          >
            <div>
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
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(22px, 2vw, 30px)",
                  color: "#F1EFE8",
                  margin: "0 0 14px",
                  lineHeight: 1.05,
                }}
              >
                Websites & Interfaces
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  color: "rgba(241,239,232,0.6)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Dashboards and sites to bring your AI work to life.
              </p>
            </div>
          </motion.div>
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
          <motion.a
            href="#contact"
            aria-label="Book a Call"
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
              flexShrink: 0,
            }}
            whileHover={{ background: "#F1EFE8" }}
          >
            Book a Call <span aria-hidden="true">→</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
