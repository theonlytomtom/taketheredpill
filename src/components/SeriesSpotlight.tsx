import { Link } from 'react-router-dom'
import { allSeries } from '@/data/series'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function SeriesSpotlight() {
  const isMobile = useIsMobile()
  const series = allSeries[0]
  if (!series) return null

  const publishedCount = series.posts.filter((p) => p.published).length
  const latestPost = series.posts.filter((p) => p.published).at(-1)

  return (
    <section style={{
      position: 'relative', zIndex: 1,
      padding: isMobile ? '60px 20px' : '100px 48px',
      background: 'var(--bg)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      {/* Section header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div className="section-label" style={{ marginBottom: '12px' }}>// In-Depth Coverage</div>
          <h2 style={{ fontSize: isMobile ? '28px' : '38px', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
            Deep Dive Series
          </h2>
        </div>
        <Link to="/intel" style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--red)', textDecoration: 'none', borderBottom: '1px solid var(--red-dim)', paddingBottom: '2px', whiteSpace: 'nowrap' }}>
          All Intel →
        </Link>
      </div>

      {/* Series card */}
      <Link to={`/intel/series/${series.slug}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
        <div style={{
          border: '1px solid rgba(208,2,27,0.35)',
          borderRadius: '4px',
          overflow: 'hidden',
          background: 'rgba(208,2,27,0.04)',
          transition: 'border-color 0.25s, background 0.25s',
        }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(208,2,27,0.65)'
            ;(e.currentTarget as HTMLElement).style.background = 'rgba(208,2,27,0.08)'
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(208,2,27,0.35)'
            ;(e.currentTarget as HTMLElement).style.background = 'rgba(208,2,27,0.04)'
          }}
        >
          {/* Top banner */}
          <div style={{ padding: '8px 24px', background: 'rgba(208,2,27,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--white)' }}>
              Active Series — {publishedCount} of {series.posts.length} parts live
            </span>
            {latestPost && (
              <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em' }}>
                Latest: {latestPost.date}
              </span>
            )}
          </div>

          {/* Body */}
          <div style={{ padding: isMobile ? '28px 24px' : '40px 48px', display: isMobile ? 'block' : 'grid', gridTemplateColumns: '1fr auto', gap: '48px', alignItems: 'center' }}>
            <div>
              {/* Tag */}
              <p style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '14px' }}>
                {series.coverTag}
              </p>

              {/* Title */}
              <h3 style={{ fontFamily: 'var(--sans)', fontSize: isMobile ? '24px' : '34px', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '12px' }}>
                {series.title}
              </h3>

              {/* Tagline */}
              <p style={{ fontFamily: 'var(--mono)', fontSize: isMobile ? '13px' : '14px', color: 'var(--red)', marginBottom: '16px', letterSpacing: '0.02em' }}>
                {series.tagline}
              </p>

              {/* Description */}
              <p style={{ fontFamily: 'var(--sans)', fontSize: '15px', color: 'var(--white-dim)', lineHeight: 1.7, maxWidth: '600px', marginBottom: '28px' }}>
                {series.description}
              </p>

              {/* Part progress */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                {series.posts.map((post) => (
                  <div key={post.slug} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '36px', height: '4px', borderRadius: '2px', background: post.published ? 'var(--red)' : 'rgba(255,255,255,0.12)' }} />
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: post.published ? 'var(--white-dim)' : 'rgba(255,255,255,0.25)' }}>
                      Part {post.part}{post.published ? '' : ' — Soon'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA arrow — desktop only */}
            {!isMobile && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  border: '1px solid rgba(208,2,27,0.5)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '22px', color: 'var(--red)',
                }}>
                  →
                </div>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--red)' }}>
                  Read Series
                </span>
              </div>
            )}
          </div>

          {/* Parts list preview */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {series.posts.map((post, index) => (
              <div key={post.slug} style={{
                padding: isMobile ? '14px 24px' : '16px 48px',
                display: 'flex', alignItems: 'center', gap: '16px',
                borderBottom: index < series.posts.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                opacity: post.published ? 1 : 0.4,
              }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: 700, color: post.published ? 'var(--red)' : 'var(--white-dim)', flexShrink: 0 }}>
                  {String(post.part).padStart(2, '0')}
                </span>
                <span style={{ fontFamily: 'var(--sans)', fontSize: '14px', color: 'var(--white-dim)', lineHeight: 1.4, flex: 1 }}>
                  {post.title}
                  {!post.published && <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'rgba(255,255,255,0.3)', marginLeft: '10px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Coming Soon</span>}
                </span>
                {post.published && (
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--red)', whiteSpace: 'nowrap' }}>{post.readTime}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Link>
    </section>
  )
}
