import { useEffect, useRef } from 'react'

const CHARS = '01アイウエオカキクケコサシスセソタチツテトナニヌネノABCDEFGHIJKLMNOPQRSTUVWXYZ'
const FONT_SIZE = 13
const OPACITY = 0.07

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let drops: number[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const columns = Math.floor(canvas.width / FONT_SIZE)
      drops = Array(columns).fill(1)
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(6, 6, 8, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#D0021B'
      ctx.font = `${FONT_SIZE}px "Space Mono", monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        ctx.fillText(char, i * FONT_SIZE, drops[i] * FONT_SIZE)
        if (drops[i] * FONT_SIZE > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)

    // Run at ~20fps (not 60fps) — subtle effect, not a screensaver
    let lastTime = 0
    const throttledDraw = (timestamp: number) => {
      if (timestamp - lastTime > 50) {
        draw()
        lastTime = timestamp
      } else {
        animationId = requestAnimationFrame(throttledDraw)
      }
    }

    // Start immediately with simple setInterval for consistent frame rate
    const interval = setInterval(() => {
      if (ctx) draw()
    }, 50)

    return () => {
      clearInterval(interval)
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: OPACITY,
        pointerEvents: 'none',
      }}
    />
  )
}
