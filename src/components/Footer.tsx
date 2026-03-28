import { Link } from 'react-router-dom'

const navLinks = [
  { to: '/intel', label: 'Intel' },
  { to: '/#mission', label: 'The Mission' },
  { to: '/about', label: 'About' },
  { to: '/subscribe', label: 'Subscribe' },
  { to: '/privacy', label: 'Privacy' },
]

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '52px 48px 40px',
        background: 'var(--bg)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        gap: '32px',
      }}
    >
      {/* Left */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Link
          to="/"
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '13px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--white)',
            textDecoration: 'none',
          }}
        >
          TAKE<span style={{ color: 'var(--red)' }}>THE</span>REDPILL.IO
        </Link>
        <p
          style={{
            fontSize: '13px',
            color: 'var(--white-dim)',
            maxWidth: '280px',
            lineHeight: 1.55,
          }}
        >
          Unfiltered intelligence for the people who are done being told what to think.
        </p>
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '10px',
            letterSpacing: '0.1em',
            color: 'rgba(245,245,240,0.2)',
            textTransform: 'uppercase',
          }}
        >
          © {new Date().getFullYear()} Tom Hansen. All rights reserved.
        </div>
      </div>

      {/* Right — links */}
      <ul
        style={{
          display: 'flex',
          gap: '28px',
          listStyle: 'none',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '10px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--white-dim)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--white)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--white-dim)'
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}
