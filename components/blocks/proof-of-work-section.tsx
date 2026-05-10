'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ParticlesBg } from '@/components/ui/particles-bg'

// Keep your existing card data — just update the array:
const cards = [
  {
    category: 'AGENT BUILD',
    title: 'Agent Build #1',
    description: 'End-to-end lead qualification pipeline using GPT-4 and n8n.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
  },
  {
    category: 'TRIATHLON',
    title: 'Training Diary',
    description: 'Documenting the road to Ironman 70.3. Every session logged.',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80',
  },
  {
    category: 'CONTENT',
    title: 'AI Breakdown',
    description: 'Breaking down AI concepts for builders and founders.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
  },
  {
    category: 'STORY',
    title: 'College + Code',
    description: 'What it actually looks like building in your first year of college.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80',
  },
  {
    category: 'TUTORIAL',
    title: 'n8n Workflow',
    description: 'Step-by-step: building your first AI automation in n8n.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
]

// Scroll-reveal card component
function RevealCard({ card, index }: { card: typeof cards[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.08,
      }}
      style={{
        position: 'relative',
        borderRadius: '8px',
        overflow: 'hidden',
        cursor: 'pointer',
        background: '#111110',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', aspectRatio: index === 0 ? '16/9' : '4/3', overflow: 'hidden' }}>
        <img
          src={card.image}
          alt={card.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s ease',
            filter: 'brightness(0.75) saturate(0.8)',
          }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(14,14,13,0.9) 0%, transparent 60%)',
        }} />
        {/* Category + Title overlay */}
        <div style={{ position: 'absolute', bottom: '16px', left: '16px' }}>
          <p style={{
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#00D4FF',
            margin: '0 0 4px',
            fontWeight: 500,
          }}>
            {card.category}
          </p>
          <p style={{
            fontSize: '16px',
            color: '#F1EFE8',
            margin: 0,
            fontWeight: 500,
          }}>
            {card.title}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

// Main section
export function ProofOfWorkSection() {
  return (
    <section
      id="content"
      style={{
        position: 'relative',
        background: '#0E0E0D',
        padding: '100px 0 120px',
        overflow: 'hidden',
      }}
    >
      {/* Particle background */}
      <ParticlesBg />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1440px', margin: '0 auto', padding: '0 40px' }}>

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            fontSize: '11px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#888780',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '24px',
          }}
        >
          <span style={{
            width: '5px', height: '5px', borderRadius: '50%',
            background: '#00D4FF',
            boxShadow: '0 0 6px rgba(0,212,255,0.5)',
            display: 'inline-block',
          }} />
          Content & work
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(52px, 7vw, 96px)',
            lineHeight: 0.9,
            color: '#F1EFE8',
            margin: '0 0 64px',
            letterSpacing: '0.01em',
          }}
        >
          The proof of work.
        </motion.h2>

        {/* Card grid — first card full width, rest in 3 columns */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

          {/* Row 1 — first card large left, two cards stacked right */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '12px' }}>
            <RevealCard card={cards[0]} index={0} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <RevealCard card={cards[1]} index={1} />
              <RevealCard card={cards[2]} index={2} />
            </div>
          </div>

          {/* Row 2 — three equal cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
            <RevealCard card={cards[3]} index={3} />
            <RevealCard card={cards[4]} index={4} />
            {/* Empty card — "See all" CTA */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 5 * 0.08 }}
              viewport={{ once: true }}
              style={{
                borderRadius: '8px',
                border: '0.5px solid #2C2C2A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'border-color 0.3s ease',
                minHeight: '200px',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = '#00D4FF'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = '#2C2C2A'}
            >
              <div style={{ textAlign: 'center' }}>
                <p style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '32px',
                  color: '#444441',
                  margin: '0 0 8px',
                  letterSpacing: '0.05em',
                }}>
                  See all
                </p>
                <p style={{ fontSize: '24px', color: '#00D4FF', margin: 0 }}>↗</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
