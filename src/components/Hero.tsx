import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const stats = [
  { num: '20', suffix: '+', label: 'Years inside the machine' },
  { num: '100', suffix: '%', label: 'Unfiltered. No sponsors.' },
  { num: 'Daily', suffix: '', label: 'Post daily, blog every Monday' },
  { num: '0', suffix: '', label: 'Blue pills served here' },
]

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 48px',
        paddingTop: '120px',
      }}
    >
      {/* Eyebrow */}
      <div
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '11px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--red)',
          marginBottom: '28px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <span
          style={{
            display: 'block',
            width: '32px',
            height: '1px',
            background: 'var(--red)',
          }}
        />
        The Daily Red Pill Wake Up
      </div>

      {/* Headline */}
      <h1
        style={{
          fontSize: 'clamp(56px, 8vw, 108px)',
          fontWeight: 700,
          lineHeight: 0.92,
          letterSpacing: '-0.03em',
          maxWidth: '900px',
          marginBottom: '40px',
        }}
      >
        Most people
        <br />
        are still
        <br />
        <span
          style={{
            color: 'var(--blue-pill)',
            textShadow:
              '0 0 40px rgba(26,111,212,0.4), 0 0 80px rgba(26,111,212,0.15)',
          }}
        >
          asleep.
        </span>
      </h1>

      {/* Subtext */}
      <p
        style={{
          fontSize: '18px',
          fontWeight: 300,
          color: 'var(--white-dim)',
          maxWidth: '520px',
          lineHeight: 1.65,
          marginBottom: '52px',
        }}
      >
        <strong style={{ color: 'var(--white)', fontWeight: 500 }}>
          Unfiltered intelligence
        </strong>{' '}
        on military medicine, defense technology, and the systems that shape
        national health — from someone still inside the machine.
      </p>

      {/* CTAs */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <Button asChild variant="primary" size="default">
          <Link to="/subscribe">Subscribe to The Daily Red Pill Wake Up</Link>
        </Button>
        <Button asChild variant="ghost" size="default">
          <a href="#mission">Read the Manifesto</a>
        </Button>
      </div>

      {/* Stat row */}
      <div
        style={{
          position: 'absolute',
          bottom: '52px',
          left: '48px',
          right: '48px',
          display: 'flex',
          gap: '48px',
          borderTop: '1px solid var(--white-faint)',
          paddingTop: '28px',
        }}
      >
        {stats.map(({ num, suffix, label }) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '26px',
                fontWeight: 700,
                color: 'var(--white)',
              }}
            >
              {num}
              <span style={{ color: 'var(--red)' }}>{suffix}</span>
            </span>
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '10px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--white-dim)',
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
