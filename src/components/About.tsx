import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const creds = [
  { strong: 'Army SME', rest: ' — Palantir AIP/Foundry, Health Domain' },
  { strong: 'Technical PM', rest: ' — Google Health (AUG 2026)' },
  { strong: 'Expertise', rest: ' — BATDOK, BATTAK, Class VIII / Blood Supply Data' },
  { strong: 'Mission', rest: ' — Building toward a post-Army business before the exit' },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '120px 48px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '100px',
        alignItems: 'center',
      }}
    >
      {/* Photo block */}
      <div style={{ position: 'relative' }}>
        <div
          style={{
            width: '100%',
            aspectRatio: '4/5',
            background: 'var(--bg3)',
            border: '1px solid var(--white-faint)',
            borderRadius: '2px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Red glow overlay */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, var(--red-glow), transparent 60%)',
            }}
          />
          {/* TODO: Replace with actual headshot <img src="/assets/tom-hansen.jpg" alt="Tom Hansen" /> */}
          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              letterSpacing: '0.14em',
              color: 'var(--white-dim)',
              textTransform: 'uppercase',
              position: 'relative',
              zIndex: 1,
            }}
          >
            [ Tom Hansen ]
          </span>
        </div>

        {/* Badge */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '-16px',
            right: '-16px',
            background: 'var(--red)',
            padding: '16px 20px',
            borderRadius: '2px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '10px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#fff',
              lineHeight: 1.5,
            }}
          >
            US ARMY
            <br />
            MOS 70D
            <br />
            ACTIVE DUTY
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div className="section-label">About</div>
        <h2
          style={{
            fontSize: 'clamp(38px, 4vw, 54px)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            lineHeight: 1.05,
          }}
        >
          I'm still
          <br />
          inside the
          <br />
          <em style={{ fontStyle: 'normal', color: 'var(--red)' }}>machine.</em>
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: 'var(--white-dim)',
            lineHeight: 1.75,
            fontWeight: 300,
          }}
        >
          <strong style={{ color: 'var(--white)', fontWeight: 500 }}>Tom Hansen.</strong>{' '}
          Active-duty US Army officer. MOS 70D Health Services Informatician. The Army's
          Palantir SME in the medical domain. 20+ years of operational experience at the
          intersection of military medicine, data architecture, and AI integration.
          <br />
          <br />
          I've watched institutions sit on data that could save lives. I've deployed the
          technology that works. And I've spent two decades learning exactly why the gap
          between "possible" and "done" is almost always a choice — not a limitation.
        </p>

        {/* Credentials */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {creds.map(({ strong, rest }) => (
            <div
              key={strong}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '14px 0',
                borderBottom: '1px solid var(--white-faint)',
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--red)',
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: '14px', color: 'var(--white-dim)' }}>
                <strong style={{ color: 'var(--white)', fontWeight: 500 }}>{strong}</strong>
                {rest}
              </span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '8px' }}>
          <Button asChild variant="outline" size="default">
            <Link to="/about">Full Story →</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
