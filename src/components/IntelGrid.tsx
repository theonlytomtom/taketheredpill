import { useState } from 'react'
import { Link } from 'react-router-dom'
import { featuredPost, standardPosts } from '@/data/posts'
import { useIsMobile } from '@/hooks/useIsMobile'
import type { Post } from '@/data/posts'

function IntelCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  const [hovered, setHovered] = useState(false)
  const isMobile = useIsMobile()

  return (
    <Link to={`/intel/${post.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--bg3)' : 'var(--bg2)',
        padding: isMobile ? '24px' : '36px',
        display: 'flex', flexDirection: 'column', gap: '16px',
        transition: 'background 0.2s', textDecoration: 'none', color: 'inherit',
      }}
    >
      <div style={{ fontFamily: 'var(--mono)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)' }}>{post.tag}</div>
      <div style={{ fontSize: featured && !isMobile ? '28px' : '20px', fontWeight: 600, lineHeight: 1.3, letterSpacing: '-0.01em', color: 'var(--white)' }}>{post.title}</div>
      <div style={{ fontSize: '14px', color: 'var(--white-dim)', lineHeight: 1.6, fontWeight: 300 }}>{post.excerpt}</div>
      <div style={{ marginTop: 'auto', fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.1em', color: 'rgba(245,245,240,0.3)', display: 'flex', gap: '16px' }}>
        <span>{post.date}</span><span>// {post.readTime}</span>
      </div>
    </Link>
  )
}

export default function IntelGrid() {
  const isMobile = useIsMobile()

  return (
    <section id="intel" style={{
      position: 'relative', zIndex: 1,
      padding: isMobile ? '60px 20px' : '100px 48px',
      background: 'var(--bg2)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '52px' }}>
        <div>
          <div className="section-label" style={{ marginBottom: '12px' }}>The Daily Red Pill Wake Up</div>
          <h2 style={{ fontSize: isMobile ? '32px' : '42px', fontWeight: 700, letterSpacing: '-0.025em' }}>Latest Dispatches</h2>
        </div>
        <Link to="/intel" style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--red)', textDecoration: 'none', borderBottom: '1px solid var(--red-dim)', paddingBottom: '2px', whiteSpace: 'nowrap' }}>
          View all →
        </Link>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr 1fr',
        gap: '1px', background: 'var(--white-faint)',
      }}>
        <IntelCard post={featuredPost} featured />
        {standardPosts.map((post) => <IntelCard key={post.slug} post={post} />)}
      </div>
    </section>
  )
}
