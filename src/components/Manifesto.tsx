import { useState } from 'react'
import { useIsMobile } from '@/hooks/useIsMobile'

const points = [
  { num: '// 01', title: "The data already exists. Nobody's using it.", sub: 'BATDOK. BATTAK. Palantir AIP. Twenty years of operational medical data sitting locked in black-box systems while operators make life-and-death decisions blind.' },
  { num: '// 02', title: "AI doesn't belong in military medicine. It's already there.", sub: "The question isn't whether it's coming. It's whether your institution leads that change — or gets dragged into it." },
  { num: '// 03', title: 'The Blue Pill is comfortable. It\'s also killing people.', sub: "When systems fail, it's not an accident — it's a choice. We name the choices, track the outcomes, and refuse to pretend otherwise." },
  { num: '// 04', title: 'The truth is the only thing that actually helps.', sub: 'No advertising. No sponsors. No institutional affiliations. Just an insider with 20 years of access, a data background, and no patience left for bullshit.' },
]

export default function Manifesto() {
  const [hovered, setHovered] = useState<number | null>(null)
  const isMobile = useIsMobile()

  return (
    <section id="mission" style={{
      position: 'relative', zIndex: 1,
      padding: isMobile ? '60px 20px' : '120px 48px',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '40px' : '80px',
      alignItems: 'start',
    }}>
      {/* Left */}
      <div style={{ position: isMobile ? 'static' : 'sticky', top: '120px' }}>
        <div className="section-label" style={{ marginBottom: '20px' }}>The Mission</div>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.025em', marginBottom: '24px' }}>
          This isn't a<br /><em style={{ fontStyle: 'normal', color: 'var(--red)' }}>newsletter.</em><br />It's a wakeup call.
        </h2>
        <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--white-dim)', lineHeight: 1.7 }}>
          The institutions managing military medicine, defense technology, and national health have been running the same playbook for decades. The data exists. The tools exist. The only thing missing is the will to actually use them.
          <br /><br />
          Take the Red Pill is the intelligence brief for the people who are done waiting.
        </p>
      </div>

      {/* Right */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
        {points.map((point, i) => (
          <div key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === i ? 'var(--bg3)' : 'var(--bg2)',
              border: `1px solid ${hovered === i ? 'rgba(208,2,27,0.3)' : 'var(--white-faint)'}`,
              padding: isMobile ? '20px' : '28px 32px',
              borderRadius: '2px', marginBottom: '1px',
              transform: hovered === i ? 'translateX(4px)' : 'none',
              transition: 'all 0.25s ease', cursor: 'default',
            }}
          >
            <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.18em', color: 'var(--red)', marginBottom: '10px' }}>{point.num}</div>
            <div style={{ fontSize: '16px', fontWeight: 500, lineHeight: 1.5, color: 'var(--white)', marginBottom: '8px' }}>{point.title}</div>
            <div style={{ fontSize: '13px', color: 'var(--white-dim)', lineHeight: 1.6, fontWeight: 300 }}>{point.sub}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
