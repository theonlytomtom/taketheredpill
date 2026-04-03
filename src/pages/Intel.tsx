import { useState } from 'react'
import { Link } from 'react-router-dom'
import MatrixRain from '@/components/MatrixRain'
import Nav from '@/components/Nav'
import NewsletterCTA from '@/components/NewsletterCTA'
import Footer from '@/components/Footer'
import { posts } from '@/data/posts'
import { allSeries } from '@/data/series'

const pillars = ['All', 'The Broken System', "Operator's Edge", 'Red Pill Philosophy', 'Transition Blueprint']

export default function IntelPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? posts
    : posts.filter((p) => p.tag.toLowerCase().includes(activeFilter.toLowerCase()))

  return (
    <>
      <MatrixRain />
      <Nav />
      <main style={{ position: 'relative', zIndex: 1, paddingTop: '120px' }}>
        {/* Header */}
        <section style={{ padding: '80px 48px 60px' }}>
          <div className="section-label" style={{ marginBottom: '20px' }}>
            The Daily Red Pill Wake Up
          </div>
          <h1
            style={{
              fontSize: 'clamp(48px, 6vw, 80px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
              marginBottom: '24px',
            }}
          >
            Intel Hub
          </h1>
          <p
            style={{
              fontSize: '18px',
              fontWeight: 300,
              color: 'var(--white-dim)',
              maxWidth: '520px',
              lineHeight: 1.65,
            }}
          >
            All dispatches. No filter on the truth — just on the category.
          </p>
        </section>

        {/* Filter bar */}
        <div
          style={{
            padding: '0 48px 52px',
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
          }}
        >
          {pillars.map((pillar) => (
            <button
              key={pillar}
              onClick={() => setActiveFilter(pillar)}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '10px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '8px 16px',
                borderRadius: '2px',
                border: `1px solid ${activeFilter === pillar ? 'var(--red)' : 'var(--white-faint)'}`,
                background: activeFilter === pillar ? 'var(--red-glow)' : 'transparent',
                color: activeFilter === pillar ? 'var(--white)' : 'var(--white-dim)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {pillar}
            </button>
          ))}
        </div>

        {/* Series spotlight */}
        {(activeFilter === 'All' || activeFilter === 'The Broken System') && allSeries.length > 0 && (
          <div style={{ padding: '0 48px 40px' }}>
            <div style={{
              border: '1px solid rgba(208,2,27,0.35)',
              borderRadius: '4px',
              overflow: 'hidden',
              background: 'rgba(208,2,27,0.04)',
            }}>
              <div style={{ padding: '6px 20px', background: 'rgba(208,2,27,0.18)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--white)' }}>// Active Series</span>
              </div>
              {allSeries.map((series) => {
                const publishedCount = series.posts.filter((p) => p.published).length
                const latestPost = series.posts.filter((p) => p.published).at(-1)
                return (
                  <Link key={series.slug} to={`/intel/series/${series.slug}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ padding: '28px 32px', display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', alignItems: 'center', transition: 'background 0.2s' }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(208,2,27,0.06)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                    >
                      <div>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '8px' }}>
                          {series.coverTag}
                        </div>
                        <div style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.2, marginBottom: '8px' }}>
                          {series.title}
                        </div>
                        <div style={{ fontSize: '14px', color: 'var(--white-dim)', lineHeight: 1.6, maxWidth: '640px', marginBottom: '14px' }}>
                          {series.description}
                        </div>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                          {series.posts.map((post) => (
                            <div key={post.slug} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <div style={{ width: '24px', height: '3px', borderRadius: '2px', background: post.published ? 'var(--red)' : 'rgba(255,255,255,0.15)' }} />
                              <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: post.published ? 'var(--white-dim)' : 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                Pt {post.part}
                              </span>
                            </div>
                          ))}
                          <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--white-dim)', letterSpacing: '0.08em' }}>
                            {publishedCount}/{series.posts.length} published
                          </span>
                          {latestPost && (
                            <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--white-dim)' }}>
                              Latest: {latestPost.date}
                            </span>
                          )}
                        </div>
                      </div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.1em', color: 'var(--red)', whiteSpace: 'nowrap', textTransform: 'uppercase' }}>
                        Read Series →
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {/* Post list */}
        <div
          style={{
            padding: '0 48px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1px',
            background: 'var(--white-faint)',
            marginBottom: '0',
          }}
        >
          {filtered.map((post) => (
            <Link
              key={post.slug}
              to={`/intel/${post.slug}`}
              style={{
                background: 'var(--bg2)',
                padding: '32px 36px',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '24px',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'var(--bg3)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'var(--bg2)'
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '9px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--red)',
                    marginBottom: '10px',
                  }}
                >
                  {post.tag}
                </div>
                <div
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.3,
                    marginBottom: '10px',
                  }}
                >
                  {post.title}
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    color: 'var(--white-dim)',
                    lineHeight: 1.6,
                    fontWeight: 300,
                    maxWidth: '680px',
                  }}
                >
                  {post.excerpt}
                </div>
              </div>
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  color: 'rgba(245,245,240,0.3)',
                  textAlign: 'right',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}
              >
                <span>{post.date}</span>
                <span>// {post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <NewsletterCTA />
      <Footer />
    </>
  )
}
