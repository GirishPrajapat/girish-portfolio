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
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.setProperty('--mouse-x', `-999px`);
    card.style.setProperty('--mouse-y', `-999px`);
  };

  return { ref, handleMouseMove, handleMouseLeave };
};

export function Stats() {
  const s1 = useSpotlightBorder();
  const s2 = useSpotlightBorder();
  const s3 = useSpotlightBorder();
  const s4 = useSpotlightBorder();
  const s5 = useSpotlightBorder();

  return (
    <section id="stats-section" className="py-[120px]">
      <div className="max-w-[1440px] mx-auto px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section label */}
          <motion.div variants={fadeUp}>
            <p style={{
              fontSize: '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#F1EFE8',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '40px',
              fontFamily: 'var(--font-mono)',
            }}>
              <span style={{
                width: '5px', height: '5px', borderRadius: '50%',
                background: '#00D4FF',
                boxShadow: '0 0 6px rgba(0,212,255,0.4)',
                display: 'inline-block',
              }} />
              By the numbers
            </p>
          </motion.div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] md:grid-rows-2 gap-[10px]">

            {/* CARD 1 — Dominant: Hours saved per client — left, tall */}
            <motion.div
              ref={s1.ref}
              onMouseMove={s1.handleMouseMove}
              onMouseLeave={s1.handleMouseLeave}
              variants={fadeUp}
              className="md:col-span-1 md:row-span-2 spotlight-card"
              style={{
                borderRadius: '24px',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '420px',
                background: 'rgba(255, 255, 255, 0.04)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <p style={{
                fontSize: '11px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#00D4FF',
                margin: 0,
              }}>
                Hours saved per client / week
              </p>

              <div>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '110px',
                  color: '#F1EFE8',
                  lineHeight: 1,
                  margin: '0 0 12px',
                }}>
                  15<span style={{ fontSize: '56px', color: '#F1EFE8' }}>+</span>
                </p>
                <p style={{ fontSize: '14px', color: '#F1EFE8', margin: 0, lineHeight: 1.6, maxWidth: '280px' }}>
                  Built for lead gen, support, content, and invoicing. All running live.
                </p>
              </div>

              {/* 4 category pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Lead gen', 'Support', 'Content', 'Invoicing'].map(tag => (
                  <span key={tag} style={{
                    fontSize: '11px',
                    color: '#F1EFE8',
                    border: '1px solid rgba(255, 255, 255, 0.10)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)',
                    padding: '4px 10px',
                    borderRadius: '8px',
                    letterSpacing: '0.06em',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CARD 2 — Clients automated — top center */}
            <motion.div
              ref={s2.ref}
              onMouseMove={s2.handleMouseMove}
              onMouseLeave={s2.handleMouseLeave}
              variants={fadeUp}
              className="md:col-start-2 md:row-start-1 spotlight-card"
              style={{
                borderRadius: '20px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '200px',
              }}
            >
              <p style={{
                fontSize: '11px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#00D4FF',
                margin: 0,
              }}>
                Clients automated
              </p>
              <div>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '72px',
                  color: '#F1EFE8',
                  lineHeight: 1,
                  margin: '0 0 6px',
                }}>
                  3
                </p>
                <p style={{ fontSize: '12px', color: '#F1EFE8', margin: 0, letterSpacing: '0.04em' }}>
                  3 businesses fully automated. All referrals.
                </p>
              </div>
            </motion.div>

            {/* CARD 3 — Stack — top right */}
            <motion.div
              ref={s3.ref}
              onMouseMove={s3.handleMouseMove}
              onMouseLeave={s3.handleMouseLeave}
              variants={fadeUp}
              className="md:col-start-3 md:row-start-1 spotlight-card"
              style={{
                borderRadius: '20px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '200px',
              }}
            >
              <p style={{
                fontSize: '11px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#00D4FF',
                margin: 0,
              }}>
                Tools I use
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {['n8n', 'OpenAI / Anthropic', 'Python', 'LangChain', 'Supabase'].map(tool => (
                  <p key={tool} style={{
                    fontSize: '13px',
                    color: '#F1EFE8',
                    margin: 0,
                    letterSpacing: '0.04em',
                    borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
                    paddingBottom: '5px',
                  }}>
                    {tool}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* CARD 4 — Ironman — bottom center */}
            <motion.div
              ref={s4.ref}
              onMouseMove={s4.handleMouseMove}
              onMouseLeave={s4.handleMouseLeave}
              variants={fadeUp}
              className="md:col-start-2 md:row-start-2 spotlight-card"
              style={{
                borderRadius: '20px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '200px',
              }}
            >
              <p style={{
                fontSize: '11px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#F1EFE8',
                margin: 0,
              }}>
                Ironman 70.3
              </p>
              <div>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '64px',
                  color: '#F1EFE8',
                  lineHeight: 1,
                  margin: '0 0 6px',
                }}>
                  70.3
                </p>
                <p style={{ fontSize: '12px', color: '#F1EFE8', margin: 0, lineHeight: 1.5 }}>
                  Training for my first 70.3. Alongside everything else.
                </p>
              </div>
            </motion.div>

            {/* CARD 5 — Content / social proof — bottom right */}
            <motion.div
              ref={s5.ref}
              onMouseMove={s5.handleMouseMove}
              onMouseLeave={s5.handleMouseLeave}
              variants={fadeUp}
              className="md:col-start-3 md:row-start-2 spotlight-card"
              style={{
                borderRadius: '20px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '200px',
              }}
            >
              <p style={{
                fontSize: '11px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#F1EFE8',
                margin: 0,
              }}>
                Content published
              </p>
              <div>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '72px',
                  color: '#F1EFE8',
                  lineHeight: 1,
                  margin: '0 0 6px',
                }}>
                  40<span style={{ fontSize: '36px', color: '#F1EFE8' }}>+</span>
                </p>
                <p style={{ fontSize: '12px', color: '#F1EFE8', margin: 0 }}>
                  LinkedIn & YouTube. Building in public.
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
