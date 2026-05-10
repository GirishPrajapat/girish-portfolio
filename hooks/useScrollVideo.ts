'use client'
import { useEffect, useRef } from 'react'

const FRAME_COUNT = 64
const FRAME_PATH = (n: number) =>
  `/hero-frames/frame${String(n).padStart(3, '0')}.jpg`

export function useScrollVideo(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  const framesRef = useRef<HTMLImageElement[]>([])
  const currentFrameRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Preload all frames
    let loaded = 0
    const frames: HTMLImageElement[] = []

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image()
      img.src = FRAME_PATH(i)
      img.onload = () => {
        loaded++
        // Draw first frame as soon as it's ready
        if (i === 1) drawFrame(0)
      }
      frames.push(img)
    }
    framesRef.current = frames

    function drawFrame(index: number) {
      const img = framesRef.current[index]
      if (!img?.complete || !img.naturalWidth) return
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      // Fill canvas, cover crop
      const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight)
      const x = (canvas.width - img.naturalWidth * scale) / 2
      const y = (canvas.height - img.naturalHeight * scale) / 2
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale)
    }

    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section')
      if (!heroSection) return

      const heroTop = heroSection.getBoundingClientRect().top + window.scrollY
      const heroHeight = heroSection.offsetHeight
      const windowH = window.innerHeight

      const scrollStart = heroTop
      const scrollEnd = heroTop + heroHeight - windowH
      const progress = Math.min(Math.max((window.scrollY - scrollStart) / (scrollEnd - scrollStart), 0), 1)

      const frameIndex = Math.min(Math.floor(progress * (FRAME_COUNT - 1)), FRAME_COUNT - 1)

      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
        rafRef.current = requestAnimationFrame(() => drawFrame(frameIndex))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [canvasRef])
}
