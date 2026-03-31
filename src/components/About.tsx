import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/hooks/useIsMobile'

const creds = [
  { strong: 'Army SME', rest: ' — Palantir AIP/Foundry, Health Domain' },
  { strong: 'Technical PM', rest: ' — Google Health (AUG 2026)' },
  { strong: 'Expertise', rest: ' — BATDOK, BATTAK, Class VIII / Blood Supply Data' },
  { strong: 'Mission', rest: ' — Building toward a post-Army business before the exit' },
]

export default function About() {
  const isMobile = useIsMobile()

  return (
    <section id="about" style={{
      position: 'relative', zIndex: 1,
      padding: isMobile ? '60px 20px' : '120px 48px',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '48px' : '100px',
      alignItems: 'center',
    }}>
      {/* Photo block */}
      <div style={{ position: 'relative', maxWidth: isMobile ? '280px' : '100%', margin: isMobile ? '0 auto' : '0' }}>
        <div style={{
          width: '100%', aspectRatio: '4/5',
          background: 'var(--bg3)', border: '1px solid var(--white-faint)',
          borderRadius: '2px', overflow: 'hidden', position: 'relative',
        }}>
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--red-glow), transparent 60%)', zIndex: 1 }} />
          {/* TODO: Replace placeholder text with: <img src="/tom-hansen.jpg" alt="Tom Hansen" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
          <img
            src="/tom-hansen.jpg"
            alt="Tom Hansen"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            onError={(e) => {
              const el = e.currentTarget
              el.style.display = 'none'
              const placeholder = el.nextElementSibling as HTMLElement
              if (placeholder) placeholder.style.display = 'flex'
            }}
          />
          <div style={{
            display: 'none', position: 'absolute', inset: 0,
            alignItems: 'center', justifyContent: 'center', zIndex: 2,
          }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.14em', color: 'var(--white-dim)', textTransform: 'uppercase' }}>
              [ Tom Hansen ]
            </span>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '-16px', right: '-16px', background: 'var(--red)', padding: '16px 20px', borderRadius: '2px' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', lineHeight: 1.5 }}>
            US ARMY<br />MOS 70D<br />ACTIVE DUTY
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div className="section-label">About</div>
        <h2 style={{ fontSize: 'clamp(36px, 4vw, 54px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.05 }}>
          I'm still<br />inside the<br /><em style={{ fontStyle: 'normal', color: 'var(--red)' }}>machine.</em>
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--white-dim)', lineHeight: 1.75, fontWeight: 300 }}>
          <strong style={{ color: 'var(--white)', fontWeight: 500 }}>Tom Hansen.</strong>{' '}
          Active-duty US Army officer. MOS 70D Health Services Informatician. The Army's Palantir SME in the medical domain. 20+ years at the intersection of military medicine, data architecture, and AI integration.
          <br /><br />
          I've watched institutions sit on data that could save lives. I've deployed the technology that works. The gap between "possible" and "done" is almost always a choice — not a limitation.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {creds.map(({ strong, rest }) => (
            <div key={strong} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 0', borderBottom: '1px solid var(--white-faint)' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--red)', flexShrink: 0 }} />
              <span style={{ fontSize: '14px', color: 'var(--white-dim)' }}>
                <strong style={{ color: 'var(--white)', fontWeight: 500 }}>{strong}</strong>{rest}
              </span>
            </div>
          ))}
        </div>
        <Button asChild variant="outline"><Link to="/about">Full Story →</Link></Button>
      </div>
    </section>
  )
}
