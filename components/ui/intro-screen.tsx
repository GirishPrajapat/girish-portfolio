'use client'
import { useState, useEffect } from 'react'
import { SpiralAnimation } from '@/components/ui/spiral-animation'

interface IntroScreenProps {
  onEnter: () => void
}

export function IntroScreen({ onEnter }: IntroScreenProps) {
  const [buttonVisible, setButtonVisible] = useState(false)
  const [nameVisible, setNameVisible] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setNameVisible(true), 1000)
    const t2 = setTimeout(() => setButtonVisible(true), 2500)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  const handleEnter = () => {
    if (exiting) return
    setExiting(true)
    setTimeout(onEnter, 900)
  }

  return (
    <div
      onClick={handleEnter}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        background: 'black',
        zIndex: 9999,
        overflow: 'hidden',
        opacity: exiting ? 0 : 1,
        transition: 'opacity 0.9s ease-in-out',
        cursor: buttonVisible ? 'pointer' : 'default',
      }}
    >
      {/* Canvas — pointer-events: none so clicks pass through to the outer div */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
      >
        <SpiralAnimation />
      </div>

      {/* Name top-left */}
      <div
        style={{
          position: 'absolute',
          top: '48px',
          left: '60px',
          zIndex: 10,
          pointerEvents: 'none',
          opacity: nameVisible ? 1 : 0,
          transform: nameVisible ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'opacity 1s ease, transform 1s ease',
        }}
      >
        <p style={{
          fontFamily: 'var(--font-display, "Bebas Neue", sans-serif)',
          fontSize: '28px',
          color: 'rgba(241,239,232,0.6)',
          letterSpacing: '0.15em',
          margin: 0,
        }}>
          GN
        </p>
      </div>

      {/* Descriptor bottom-left */}
      <div
        style={{
          position: 'absolute',
          bottom: '52px',
          left: '60px',
          zIndex: 10,
          pointerEvents: 'none',
          opacity: nameVisible ? 1 : 0,
          transition: 'opacity 1.4s ease 0.3s',
        }}
      >
        <p style={{
          fontFamily: 'var(--font-body, Inter, sans-serif)',
          fontSize: '11px',
          color: 'rgba(136,135,128,0.7)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          margin: 0,
        }}>
          AI Agent Developer · Ironman 70.3 · First Year
        </p>
      </div>

      {/* Enter — center */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
          pointerEvents: 'none',
          opacity: buttonVisible ? 1 : 0,
          transition: 'opacity 1.2s ease',
          textAlign: 'center',
        }}
      >
        <p style={{
          fontFamily: 'var(--font-body, Inter, sans-serif)',
          fontSize: '13px',
          color: 'white',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          fontWeight: 300,
          margin: 0,
          animation: buttonVisible ? 'enterPulse 2.5s ease-in-out infinite' : 'none',
        }}>
          Click anywhere to enter
        </p>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)',
          margin: '12px auto 0',
        }} />
      </div>

      <style>{`
        @keyframes enterPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
      `}</style>
    </div>
  )
}
