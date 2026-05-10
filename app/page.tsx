'use client'
import { useState, useEffect } from 'react'
import { IntroScreen } from '@/components/ui/intro-screen'
import { HeroSection } from '@/components/blocks/hero-section'
import { Projects } from '@/components/sections/Projects'
import { Stats } from '@/components/sections/Stats'
import { About } from '@/components/sections/About'
import { Ironman } from '@/components/sections/Ironman'
import StackingCards from '@/components/proof-of-work/StackingCards'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [showSite, setShowSite] = useState(false)

  // Only show intro once per session
  useEffect(() => {
    const seen = sessionStorage.getItem('intro-seen')
    if (seen) {
      setShowIntro(false)
      setShowSite(true)
    }
  }, [])

  const handleEnter = () => {
    sessionStorage.setItem('intro-seen', 'true')
    setShowIntro(false)
    setTimeout(() => setShowSite(true), 200)
  }

  return (
    <>
      {showIntro && <IntroScreen onEnter={handleEnter} />}

      <div
        style={{
          opacity: showSite ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      >
        <main className="relative z-10 w-full">
          <HeroSection />

          {/* Sections over the fixed ambient background — must be transparent */}
          <div className="relative z-10">
            <Projects />
            <About />
            <Stats />
            <StackingCards />
            <Ironman />
            <Contact />
            <Footer />
          </div>
        </main>
      </div>
    </>
  )
}
