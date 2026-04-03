import { Link } from 'react-router-dom'
import MatrixRain from '@/components/MatrixRain'
import Nav from '@/components/Nav'
import NewsletterCTA from '@/components/NewsletterCTA'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'

const timeline = [
  { year: '2026', event: 'Building taketheredpill.io — brand, audience, and MVP product' },
  { year: '2027', event: 'Google Health Technical Product Manager — enterprise AI/data exposure' },
  { year: '2028', event: 'MVP product live. Early revenue. Community growing.' },
  { year: '2030', event: 'Business fully operational. Multiple revenue streams. Freedom to choose.' },
]

const creds = [
  { strong: '16 Years', rest: ' — Technical operational health information systems' },
  { strong: 'Palantir SME', rest: ' — AIP/Foundry, Medical Domain' },
  { strong: 'Expertise', rest: ' — BATDOK, BATTAK, Class VIII / Blood Supply Data, C2 integration' },
  { strong: 'Domain', rest: ' — Operational medicine, data architecture, AI integration' },
  { strong: 'Target', rest: ' — Google Health TPM (AUG 2026), Palantir, Rune Technologies' },
]

export default function AboutPage() {
  return (
    <>
      <MatrixRain />
      <Nav />
      <main style={{ position: 'relative', zIndex: 1, paddingTop: '120px' }}>

        {/* Hero */}
        <section
          style={{
            padding: '80px 48px 100px',
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
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, var(--red-glow), transparent 60%)',
                }}
              />
              <img
                src="/tom-hansen.jpg"
                alt="Tom Hansen"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', position: 'relative', zIndex: 1 }}
              />
            </div>
            <div
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
16 YRS<br />OPMED<br />DATA
              </div>
            </div>
          </div>

          {/* Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="section-label">About Tom Hansen</div>
            <h1
              style={{
                fontSize: 'clamp(38px, 4vw, 56px)',
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
            </h1>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--white-dim)',
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              16 years of technical and operational experience with health information systems.
              Palantir SME in the medical domain. Working at the intersection of operational
              medicine, data architecture, and AI integration.
              <br /><br />
              I've watched institutions sit on data that could save lives. I've deployed
              the technology that works. And I've spent 16 years learning exactly why
              the gap between "possible" and "done" is almost always a choice — not a
              limitation.
              <br /><br />
              Building taketheredpill.io because the problems I've watched go unsolved
              long enough.
              <br /><br />
              <em style={{ fontStyle: 'normal', fontSize: '13px', color: 'rgba(245,245,240,0.45)', lineHeight: 1.7, display: 'block' }}>
                Views expressed are my own and do not represent any organization or government entity.
              </em>
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Button asChild variant="primary">
                <Link to="/subscribe">Subscribe to The Daily Red Pill Wake Up</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section
          style={{
            padding: '80px 48px',
            background: 'var(--bg2)',
            borderTop: '1px solid var(--white-faint)',
          }}
        >
          <div className="section-label" style={{ marginBottom: '48px' }}>
            Credentials
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1px',
              background: 'var(--white-faint)',
            }}
          >
            {creds.map(({ strong, rest }) => (
              <div
                key={strong}
                style={{
                  background: 'var(--bg2)',
                  padding: '28px 32px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--red)',
                    flexShrink: 0,
                    marginTop: '6px',
                  }}
                />
                <div style={{ fontSize: '15px', color: 'var(--white-dim)', lineHeight: 1.5 }}>
                  <strong style={{ color: 'var(--white)', fontWeight: 600 }}>{strong}</strong>
                  {rest}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section
          style={{
            padding: '80px 48px',
            borderTop: '1px solid var(--white-faint)',
          }}
        >
          <div className="section-label" style={{ marginBottom: '48px' }}>
            Education
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--white-faint)', maxWidth: '800px' }}>
            {[
              { degree: 'BS, Computer Science', school: 'United States Military Academy, West Point' },
              { degree: 'Dual MHA / MBA', school: 'Baylor University' },
              { degree: 'Chief Data Officer Certification', school: 'National Defense University — In Progress' },
              { degree: 'CompTIA Security+', school: 'Certified' },
            ].map(({ degree, school }) => (
              <div
                key={degree}
                style={{
                  background: 'var(--bg)',
                  padding: '24px 32px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                }}
              >
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--red)', flexShrink: 0, marginTop: '7px' }} />
                <div>
                  <div style={{ fontSize: '15px', color: 'var(--white)', fontWeight: 600, marginBottom: '4px' }}>{degree}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.08em', color: 'var(--white-dim)', textTransform: 'uppercase' }}>{school}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section style={{ padding: '100px 48px' }}>
          <div className="section-label" style={{ marginBottom: '48px' }}>
            The Plan
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
            {timeline.map(({ year, event }) => (
              <div
                key={year}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '32px',
                  alignItems: 'center',
                  padding: '24px 0',
                  borderBottom: '1px solid var(--white-faint)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '24px',
                    fontWeight: 700,
                    color: 'var(--red)',
                  }}
                >
                  {year}
                </span>
                <span style={{ fontSize: '16px', color: 'var(--white-dim)', lineHeight: 1.5 }}>
                  {event}
                </span>
              </div>
            ))}
          </div>
        </section>

      </main>

      <NewsletterCTA />
      <Footer />
    </>
  )
}
