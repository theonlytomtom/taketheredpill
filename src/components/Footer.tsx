import { Link } from 'react-router-dom'
import { useIsMobile } from '@/hooks/useIsMobile'

const navLinks = [
  { to: '/intel', label: 'Intel' },
  { to: '/products', label: 'Products' },
  { to: '/#mission', label: 'The Mission' },
  { to: '/about', label: 'About' },
  { to: '/subscribe', label: 'Subscribe' },
  { to: '/privacy', label: 'Privacy' },
]

export default function Footer() {
  const isMobile = useIsMobile()

  return (
    <footer style={{
      position: 'relative', zIndex: 1,
      padding: isMobile ? '40px 20px' : '52px 48px 40px',
      background: 'var(--bg)',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: isMobile ? 'flex-start' : 'flex-end',
      gap: '32px',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Link to="/" style={{ fontFamily: 'var(--mono)', fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--white)', textDecoration: 'none' }}>
          TAKE<span style={{ color: 'var(--red)' }}>THE</span>REDPILL.IO
        </Link>
        <p style={{ fontSize: '13px', color: 'var(--white-dim)', maxWidth: '280px', lineHeight: 1.55 }}>
          Unfiltered intelligence for the people who are done being told what to think.
        </p>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.1em', color: 'rgba(245,245,240,0.2)', textTransform: 'uppercase' }}>
          © {new Date().getFullYear()} Tom Hansen. All rights reserved.
        </div>
      </div>

      <ul style={{ display: 'flex', gap: isMobile ? '20px' : '28px', listStyle: 'none', flexWrap: 'wrap' }}>
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <Link to={to} style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--white-dim)', textDecoration: 'none' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--white)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--white-dim)' }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}
