'use client'

import { useEffect, useRef } from 'react'

type Node = { x: number; y: number; vx: number; vy: number; r: number; hub: boolean }

const LINK_DISTANCE = 150

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let nodes: Node[] = []
    let width = 0
    let height = 0
    let frame = 0
    const pointer = { x: -9999, y: -9999 }

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.round(Math.min(90, Math.max(32, (width * height) / 14000)))
      nodes = Array.from({ length: count }, () => {
        const hub = Math.random() < 0.12
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: hub ? 2.6 : 1.4,
          hub,
        }
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * 0.28
            ctx.strokeStyle = `rgba(22, 120, 128, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        const near = Math.hypot(n.x - pointer.x, n.y - pointer.y) < 120
        ctx.fillStyle = n.hub || near ? 'rgba(22, 120, 128, 0.85)' : 'rgba(40, 55, 80, 0.45)'
        ctx.beginPath()
        ctx.arc(n.x, n.y, near ? n.r + 1 : n.r, 0, Math.PI * 2)
        ctx.fill()
        if (n.hub) {
          ctx.strokeStyle = 'rgba(22, 120, 128, 0.18)'
          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r + 5, 0, Math.PI * 2)
          ctx.stroke()
        }
      }
    }

    const step = () => {
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }
      draw()
      frame = requestAnimationFrame(step)
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = e.clientX - rect.left
      pointer.y = e.clientY - rect.top
    }
    const onLeave = () => {
      pointer.x = -9999
      pointer.y = -9999
    }

    setup()
    if (reducedMotion) {
      draw()
    } else {
      frame = requestAnimationFrame(step)
    }

    const resizeObserver = new ResizeObserver(() => {
      setup()
      if (reducedMotion) draw()
    })
    resizeObserver.observe(canvas)
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerleave', onLeave)

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 size-full" />
}
