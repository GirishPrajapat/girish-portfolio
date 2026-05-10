'use client'
import { useEffect, useRef } from 'react'

export function NodeGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const W = canvas.offsetWidth
    const H = canvas.offsetHeight
    canvas.width = W * dpr
    canvas.height = H * dpr
    ctx.scale(dpr, dpr)

    // Node definition
    const NODE_COUNT = 18
    type Node = {
      x: number; y: number
      vx: number; vy: number
      r: number; pulse: number; pulseSpeed: number
    }

    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 3 + 2,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.02,
    }))

    // Connection threshold
    const MAX_DIST = 140

    let animId: number

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // Update positions
      nodes.forEach(n => {
        n.x += n.vx
        n.y += n.vy
        n.pulse += n.pulseSpeed
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1
      })

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.35
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      nodes.forEach(n => {
        const pulsedR = n.r + Math.sin(n.pulse) * 0.8

        // Outer glow
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, pulsedR * 4)
        grd.addColorStop(0, 'rgba(0, 212, 255, 0.15)')
        grd.addColorStop(1, 'rgba(0, 212, 255, 0)')
        ctx.beginPath()
        ctx.arc(n.x, n.y, pulsedR * 4, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()

        // Core node
        ctx.beginPath()
        ctx.arc(n.x, n.y, pulsedR, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 212, 255, ${0.7 + Math.sin(n.pulse) * 0.3})`
        ctx.fill()

        // Bright center
        ctx.beginPath()
        ctx.arc(n.x, n.y, pulsedR * 0.4, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(180, 240, 255, 0.9)'
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    />
  )
}
