import { Link, useParams } from 'react-router-dom'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getSeriesBySlug, getPostBySlug } from '@/data/series'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function BlogPostPage() {
  const { seriesSlug, postSlug } = useParams<{ seriesSlug: string; postSlug: string }>()
  const isMobile = useIsMobile()

  const series = getSeriesBySlug(seriesSlug ?? '')
  const post = getPostBySlug(seriesSlug ?? '', postSlug ?? '')

  if (!series || !post || !post.published) {
    return (
      <>
        <Nav />
        <main style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: 'var(--white-dim)', fontFamily: 'var(--mono)', fontSize: '13px' }}>Post not found.</p>
        </main>
        <Footer />
      </>
    )
  }

  const nextPost = series.posts.find((p) => p.part === post.part + 1)

  return (
    <>
      <Nav />
      <main style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--white)', paddingTop: '100px', paddingBottom: '96px' }}>

        {/* Article header */}
        <header style={{ maxWidth: '740px', margin: '0 auto', padding: isMobile ? '0 20px 48px' : '0 48px 64px' }}>

          {/* Breadcrumb */}
          <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <Link to="/intel" style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--white-dim)', textDecoration: 'none' }}>
              Intel
            </Link>
            <span style={{ color: 'var(--white-dim)', fontSize: '11px' }}>/</span>
            <Link to={`/intel/series/${series.slug}`} style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--white-dim)', textDecoration: 'none' }}>
              {series.title}
            </Link>
            <span style={{ color: 'var(--white-dim)', fontSize: '11px' }}>/</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--red)' }}>
              Part {post.part}
            </span>
          </div>

          {/* Tag */}
          <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '16px' }}>
            {post.tag}
          </p>

          {/* Title */}
          <h1 style={{ fontFamily: 'var(--sans)', fontSize: isMobile ? '28px' : '44px', fontWeight: 700, lineHeight: 1.1, marginBottom: '16px', letterSpacing: '-0.02em' }}>
            {series.title}
          </h1>
          <h2 style={{ fontFamily: 'var(--sans)', fontSize: isMobile ? '18px' : '22px', fontWeight: 400, lineHeight: 1.3, color: 'var(--red)', marginBottom: '28px' }}>
            Part {post.part}: {post.title}
          </h2>

          {/* Subtitle */}
          <p style={{ fontFamily: 'var(--sans)', fontSize: isMobile ? '16px' : '18px', lineHeight: 1.7, color: 'var(--white-dim)', marginBottom: '28px' }}>
            {post.subtitle}
          </p>

          {/* Meta */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--white-dim)' }}>{post.date}</span>
            <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'var(--white-dim)' }} />
            <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--white-dim)' }}>{post.readTime}</span>
            <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'var(--white-dim)' }} />
            <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--white-dim)' }}>Tom Hansen</span>
          </div>
        </header>

        {/* Divider */}
        <div style={{ maxWidth: '740px', margin: '0 auto', padding: isMobile ? '0 20px' : '0 48px' }}>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: '48px' }} />
        </div>

        {/* Article body */}
        <article style={{ maxWidth: '740px', margin: '0 auto', padding: isMobile ? '0 20px' : '0 48px' }}>
          {post.content.map((block, index) => {
            if (block.startsWith('// ')) {
              return (
                <p key={index} style={{
                  fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: 'var(--red)',
                  marginTop: '48px', marginBottom: '20px',
                }}>
                  {block}
                </p>
              )
            }
            return (
              <p key={index} style={{
                fontFamily: 'var(--sans)', fontSize: isMobile ? '16px' : '18px',
                lineHeight: 1.8, color: 'var(--white)', marginBottom: '24px',
              }}>
                {block}
              </p>
            )
          })}
        </article>

        {/* Author bio */}
        <div style={{ maxWidth: '740px', margin: '0 auto', padding: isMobile ? '48px 20px 0' : '64px 48px 0' }}>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '36px' }}>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--white-dim)', lineHeight: 1.7, fontStyle: 'italic' }}>
              Tom Hansen has 16 years of technical and operational experience with health information systems and is a Palantir SME in the medical domain. Views expressed are his own and do not represent any organization or government entity. He writes at taketheredpill.io.
            </p>
          </div>
        </div>

        {/* Series navigation */}
        <div style={{ maxWidth: '740px', margin: '0 auto', padding: isMobile ? '40px 20px 0' : '56px 48px 0' }}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '16px', justifyContent: 'space-between', alignItems: isMobile ? 'stretch' : 'center' }}>

            <Link to={`/intel/series/${series.slug}`} style={{
              fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--white-dim)', textDecoration: 'none', padding: '12px 20px',
              border: '1px solid rgba(255,255,255,0.15)', borderRadius: '2px',
              textAlign: 'center', transition: 'border-color 0.2s, color 0.2s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.color = 'var(--white)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'var(--white-dim)' }}
            >
              ← View Full Series
            </Link>

            {nextPost ? (
              nextPost.published ? (
                <Link to={`/intel/series/${series.slug}/${nextPost.slug}`} style={{
                  fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--white)', textDecoration: 'none', padding: '12px 20px',
                  background: 'var(--red)', borderRadius: '2px',
                  textAlign: 'center', transition: 'opacity 0.2s',
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  Part {nextPost.part}: {nextPost.title} →
                </Link>
              ) : (
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)', padding: '12px 20px',
                  border: '1px solid rgba(255,255,255,0.08)', borderRadius: '2px',
                  textAlign: 'center',
                }}>
                  Part {nextPost.part} Coming Soon
                </div>
              )
            ) : null}
          </div>
        </div>

        {/* Subscribe CTA */}
        <section style={{ maxWidth: '740px', margin: '0 auto', padding: isMobile ? '48px 20px 0' : '64px 48px 0' }}>
          <div style={{
            border: '1px solid rgba(208,2,27,0.3)', borderRadius: '4px',
            padding: isMobile ? '32px 24px' : '40px 48px',
            background: 'rgba(208,2,27,0.05)',
          }}>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '12px' }}>
              // Don't Miss Part {post.part + 1}
            </p>
            <h3 style={{ fontFamily: 'var(--sans)', fontSize: isMobile ? '20px' : '24px', fontWeight: 700, marginBottom: '12px', lineHeight: 1.2 }}>
              The truth doesn't care about your feelings.
            </h3>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '15px', color: 'var(--white-dim)', lineHeight: 1.6, marginBottom: '24px' }}>
              Subscribe and get each part of this series delivered as it drops. No noise. No ads. Just the data the institution doesn't want you connecting.
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
