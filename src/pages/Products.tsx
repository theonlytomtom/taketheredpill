import { useState } from 'react'
import { Link } from 'react-router-dom'
import MatrixRain from '@/components/MatrixRain'
import Nav from '@/components/Nav'
import NewsletterCTA from '@/components/NewsletterCTA'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/hooks/useIsMobile'

const comingSoon = [
  {
    tag: '// 02 — Logistics',
    name: 'BloodLine',
    tagline: 'Class VIII supply chain visibility across the theater.',
    desc: 'Real-time dashboard of blood product inventory, expiration, and resupply timelines across echelons. Forward surgical teams fly blind on blood supply. BloodLine fixes that.',
    status: 'Concept',
    statusColor: 'rgba(245,245,240,0.2)',
  },
  {
    tag: '// 03 — Planning',
    name: 'MASCAL Planner',
    tagline: 'AI-assisted mass casualty planning.',
    desc: 'Given unit size, AO, historical casualty rates, and available assets — generate, stress-test, and identify gaps in your MASCAL plan. Every battalion surgeon builds one manually. Not anymore.',
    status: 'Concept',
    statusColor: 'rgba(245,245,240,0.2)',
  },
  {
    tag: '// 04 — Readiness',
    name: 'MedReady',
    tagline: 'Predictive unit medical readiness tracking.',
    desc: 'Goes beyond green/amber/red. Flags readiness degradation trends before they become a deployment problem. Commander-level dashboards. Integrated data. No more spreadsheet hell.',
    status: 'Concept',
    statusColor: 'rgba(245,245,240,0.2)',
  },
]

const howItWorks = [
  { num: '01', title: 'Ingest', desc: 'Pulls from existing data sources — BATDOK patient data, facility capacity, aviation platform availability, and threat feeds. No new data collection required.' },
  { num: '02', title: 'Fuse', desc: 'AI layer correlates patient acuity, transport time, receiving facility capacity, and route risk into a single decision frame — in real time.' },
  { num: '03', title: 'Recommend', desc: 'Surfaces ranked evacuation options with supporting rationale. Commander makes the call. EVAC-IQ makes sure they\'re making it with all the data.' },
  { num: '04', title: 'Document', desc: 'Automatically logs the decision, data state, and outcome. Feeds the after-action loop. Gets smarter with every mission.' },
]

export default function ProductsPage() {
  const [hovered, setHovered] = useState<number | null>(null)
  const isMobile = useIsMobile()
  const pad = isMobile ? '20px' : '48px'

  return (
    <>
      <MatrixRain />
      <Nav />
      <main style={{ position: 'relative', zIndex: 1, paddingTop: '120px' }}>

        {/* ── PAGE HEADER ── */}
        <section style={{ padding: `60px ${pad} 80px` }}>
          <div className="section-label" style={{ marginBottom: '20px' }}>Products</div>
          <h1 style={{ fontSize: 'clamp(48px, 7vw, 88px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 0.92, marginBottom: '24px' }}>
            The problems<br />
            <em style={{ fontStyle: 'normal', color: 'var(--red)' }}>are known.</em><br />
            The tools aren't.
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--white-dim)', maxWidth: '560px', lineHeight: 1.65 }}>
            Twenty years inside military medicine, data architecture, and AI integration. These are the products I wish existed. So I'm building them.
          </p>
        </section>

        {/* ── EVAC-IQ HERO PRODUCT ── */}
        <section style={{ padding: `0 ${pad} 100px` }}>
          <div style={{
            border: '1px solid var(--red-dim)',
            background: 'linear-gradient(135deg, rgba(208,2,27,0.06), var(--bg2))',
            borderRadius: '2px', overflow: 'hidden',
          }}>
            {/* Header bar */}
            <div style={{
              background: 'var(--red)', padding: isMobile ? '12px 24px' : '14px 36px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px',
            }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff' }}>
                // 01 — Decision Support
              </span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.3)', padding: '4px 12px', borderRadius: '2px' }}>
                In Development
              </span>
            </div>

            <div style={{ padding: isMobile ? '32px 24px' : '52px 52px 60px' }}>
              {/* Product name + tagline */}
              <h2 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 0.92, marginBottom: '20px' }}>
                EVAC-IQ
              </h2>
              <p style={{ fontSize: isMobile ? '18px' : '22px', fontWeight: 300, color: 'var(--white-dim)', lineHeight: 1.5, maxWidth: '640px', marginBottom: '40px' }}>
                Automated MEDEVAC decision support that fuses patient status, facility capacity, platform availability, and threat environment — and surfaces the optimal evacuation route in real time.
              </p>

              {/* Problem / Solution */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: isMobile ? '24px' : '48px', marginBottom: '52px',
              }}>
                {[
                  {
                    label: '// The Problem',
                    text: 'Right now, MEDEVAC decisions happen on a phone and a whiteboard. The commander has BATDOK open on one screen, a facility roster on another, and an aviation asset tracker somewhere else. The data exists. Nobody\'s fusing it. Operators make life-or-death calls in 60 seconds — with fractured information.',
                  },
                  {
                    label: '// The Solution',
                    text: 'EVAC-IQ ingests from existing systems — no new infrastructure required. It correlates patient acuity, transport time windows, receiving facility capacity, and route threat in one decision frame. Ranked recommendations. Supporting rationale. Commander makes the call. EVAC-IQ makes sure they\'re making it with everything.',
                  },
                ].map(({ label, text }) => (
                  <div key={label}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '12px' }}>{label}</div>
                    <p style={{ fontSize: '15px', color: 'var(--white-dim)', lineHeight: 1.7, fontWeight: 300 }}>{text}</p>
                  </div>
                ))}
              </div>

              {/* Who it's for */}
              <div style={{ marginBottom: '52px' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '20px' }}>// Who It's For</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {['Battalion Surgeons', 'MEDEVAC Planners', 'S3 / G3 Medical Staff', 'Role 2 / 3 Commanders', 'JTAC & SOF Medics', 'DHA Program Offices'].map((who) => (
                    <span key={who} style={{
                      fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.1em',
                      textTransform: 'uppercase', color: 'var(--white-dim)',
                      border: '1px solid var(--white-faint)', padding: '8px 16px', borderRadius: '2px',
                    }}>
                      {who}
                    </span>
                  ))}
                </div>
              </div>

              {/* How it works */}
              <div style={{ marginBottom: '52px' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '20px' }}>// How It Works</div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
                  gap: '1px', background: 'var(--white-faint)',
                }}>
                  {howItWorks.map(({ num, title, desc }) => (
                    <div key={num} style={{ background: 'var(--bg)', padding: isMobile ? '20px 16px' : '28px 24px' }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: '22px', fontWeight: 700, color: 'var(--red)', marginBottom: '10px' }}>{num}</div>
                      <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--white)', marginBottom: '8px' }}>{title}</div>
                      <div style={{ fontSize: '13px', color: 'var(--white-dim)', lineHeight: 1.6, fontWeight: 300 }}>{desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                <Button asChild variant="primary">
                  <Link to="/subscribe">Join the Early Access List</Link>
                </Button>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.1em', color: 'var(--white-dim)', textTransform: 'uppercase' }}>
                  // Be first when it ships
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMING SOON PRODUCTS ── */}
        <section style={{ padding: `0 ${pad} 100px` }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--white-dim)', marginBottom: '32px' }}>
            // Also in the pipeline
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '1px', background: 'var(--white-faint)',
          }}>
            {comingSoon.map((product, i) => (
              <div key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: hovered === i ? 'var(--bg3)' : 'var(--bg2)',
                  padding: isMobile ? '28px 24px' : '36px',
                  transition: 'background 0.2s', cursor: 'default',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', gap: '12px' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)' }}>{product.tag}</div>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--white-dim)', border: '1px solid var(--white-faint)', padding: '3px 8px', borderRadius: '2px', whiteSpace: 'nowrap' }}>
                    {product.status}
                  </span>
                </div>
                <h3 style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--white)', marginBottom: '12px' }}>{product.name}</h3>
                <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--white-dim)', marginBottom: '12px', lineHeight: 1.4 }}>{product.tagline}</p>
                <p style={{ fontSize: '13px', color: 'var(--white-dim)', lineHeight: 1.65, fontWeight: 300 }}>{product.desc}</p>
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
