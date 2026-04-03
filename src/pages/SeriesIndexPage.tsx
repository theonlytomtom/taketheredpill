import { Link, useParams } from 'react-router-dom'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getSeriesBySlug } from '@/data/series'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function SeriesIndexPage() {
  const { seriesSlug } = useParams<{ seriesSlug: string }>()
  const isMobile = useIsMobile()
  const series = getSeriesBySlug(seriesSlug ?? '')

  if (!series) {
    return (
      <>
        <Nav />
        <main style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: 'var(--white-dim)', fontFamily: 'var(--mono)', fontSize: '13px' }}>Series not found.</p>
        </main>
        <Footer />
      </>
    )
  }

  const publishedCount = series.posts.filter((p) => p.published).length
  const totalCount = series.posts.length

  return (
    <>
      <Nav />
      <main style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--white)', paddingTop: '100px', paddingBottom: '96px' }}>

        {/* Header */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: isMobile ? '0 20px 64px' : '0 48px 80px' }}>

          {/* Breadcrumb */}
          <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link to="/intel" style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--white-dim)', textDecoration: 'none' }}>
              Intel
            </Link>
            <span style={{ color: 'var(--white-dim)', fontSize: '11px' }}>/</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--red)' }}>Series</span>
          </div>

          {/* Tag */}
          <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '16px' }}>
            {series.coverTag}
          </p>

          {/* Title */}
          <h1 style={{ fontFamily: 'var(--sans)', fontSize: isMobile ? '32px' : '52px', fontWeight: 700, lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-0.02em' }}>
            {series.title}
          </h1>

          {/* Tagline */}
          <p style={{ fontFamily: 'var(--mono)', fontSize: isMobile ? '14px' : '16px', color: 'var(--red)', marginBottom: '24px', letterSpacing: '0.02em' }}>
            {series.tagline}
          </p>

          {/* Description */}
          <p style={{ fontFamily: 'var(--sans)', fontSize: isMobile ? '16px' : '18px', lineHeight: 1.7, color: 'var(--white-dim)', maxWidth: '680px', marginBottom: '32px' }}>
            {series.description}
          </p>

          {/* Progress indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              {series.posts.map((post) => (
                <div key={post.slug} style={{
                  width: '32px', height: '4px', borderRadius: '2px',
                  background: post.published ? 'var(--red)' : 'rgba(255,255,255,0.15)',
                }} />
              ))}
            </div>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.1em', color: 'var(--white-dim)', textTransform: 'uppercase' }}>
              {publishedCount} of {totalCount} parts published
            </span>
          </div>
        </section>

        {/* Divider */}
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: isMobile ? '0 20px' : '0 48px' }}>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: '48px' }} />
        </div>

        {/* Posts list */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: isMobile ? '0 20px' : '0 48px', display: 'flex', flexDirection: 'column', gap: '0' }}>
          {series.posts.map((post, index) => (
            <div key={post.slug}>
              {post.published ? (
                <Link
                  to={`/intel/series/${series.slug}/${post.slug}`}
                  style={{ display: 'block', textDecoration: 'none' }}
                >
                  <div style={{
                    padding: isMobile ? '28px 0' : '36px 0',
                    borderBottom: index < series.posts.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                    transition: 'background 0.2s',
                  }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(208,2,27,0.04)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <PostCard post={post} seriesSlug={series.slug} isMobile={isMobile} />
                  </div>
                </Link>
              ) : (
                <div style={{
                  padding: isMobile ? '28px 0' : '36px 0',
                  borderBottom: index < series.posts.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  opacity: 0.45,
                  cursor: 'default',
                }}>
                  <PostCard post={post} seriesSlug={series.slug} isMobile={isMobile} />
                </div>
              )}
            </div>
          ))}
        </section>

        {/* CTA */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: isMobile ? '64px 20px 0' : '80px 48px 0' }}>
          <div style={{
            border: '1px solid rgba(208,2,27,0.3)',
            borderRadius: '4px',
            padding: isMobile ? '32px 24px' : '40px 48px',
            background: 'rgba(208,2,27,0.05)',
          }}>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '12px' }}>
              // Subscribe
            </p>
            <h2 style={{ fontFamily: 'var(--sans)', fontSize: isMobile ? '22px' : '28px', fontWeight: 700, marginBottom: '12px', lineHeight: 1.2 }}>
              Get each part as it drops.
            </h2>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '15px', color: 'var(--white-dim)', lineHeight: 1.6, marginBottom: '24px' }}>
              The truth doesn't care about your feelings. Here's your red pill. Subscribe to follow this series and get the full framework as it's built in public.
            </p>
            <Link to="/subscribe" style={{
              display: 'inline-block',
              fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--white)', background: 'var(--red)', padding: '12px 28px',
              textDecoration: 'none', borderRadius: '2px', transition: 'opacity 0.2s',
            }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Take the Red Pill →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

function PostCard({ post, seriesSlug: _seriesSlug, isMobile }: { post: ReturnType<typeof getSeriesBySlug>['posts'][0]; seriesSlug: string; isMobile: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: isMobile ? '16px' : '32px' }}>
      {/* Part number */}
      <div style={{ flexShrink: 0, width: isMobile ? '36px' : '48px' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: isMobile ? '28px' : '36px', fontWeight: 700, color: post.published ? 'var(--red)' : 'rgba(255,255,255,0.2)', lineHeight: 1 }}>
          {String(post.part).padStart(2, '0')}
        </span>
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <p style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: post.published ? 'var(--red)' : 'var(--white-dim)', marginBottom: '8px' }}>
          {post.tag}
        </p>
        <h2 style={{ fontFamily: 'var(--sans)', fontSize: isMobile ? '18px' : '22px', fontWeight: 700, lineHeight: 1.25, marginBottom: '8px', color: post.published ? 'var(--white)' : 'var(--white-dim)' }}>
          {post.title}
        </h2>
        <p style={{ fontFamily: 'var(--sans)', fontSize: '14px', color: 'var(--white-dim)', lineHeight: 1.6, marginBottom: '14px', maxWidth: '580px' }}>
          {post.subtitle}
        </p>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--white-dim)' }}>{post.date}</span>
          <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'var(--white-dim)' }} />
          <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--white-dim)' }}>{post.readTime}</span>
          {!post.published && (
            <>
              <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'var(--white-dim)' }} />
              <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Coming Soon</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
