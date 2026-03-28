import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const PillIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="3" y="12" width="26" height="8" rx="4" fill="none" stroke="#D0021B" strokeWidth="1.5" />
    <rect x="3" y="12" width="13" height="8" rx="4" fill="#D0021B" />
    <line x1="16" y1="12" x2="16" y2="20" stroke="#060608" strokeWidth="1.5" />
  </svg>
)

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 48px',
        background: scrolled
          ? 'rgba(6,6,8,0.95)'
          : 'linear-gradient(to bottom, rgba(6,6,8,0.98), rgba(6,6,8,0))',
        backdropFilter: 'blur(2px)',
        transition: 'background 0.3s ease',
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          textDecoration: 'none',
        }}
        aria-label="TAKETHEREDPILL.IO — Home"
      >
        <PillIcon />
        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '13px',
            letterSpacing: '0.12em',
            color: 'var(--white)',
            textTransform: 'uppercase',
          }}
        >
          TAKE<span style={{ color: 'var(--red)' }}>THE</span>REDPILL.IO
        </span>
      </Link>

      {/* Nav links */}
      <ul
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '36px',
          listStyle: 'none',
        }}
      >
        {[
          { to: '/intel', label: 'Intel' },
          { to: '/#mission', label: 'The Mission' },
          { to: '/about', label: 'About' },
        ].map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              style={({ isActive }) => ({
                fontFamily: 'var(--mono)',
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: isActive ? 'var(--white)' : 'var(--white-dim)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              })}
            >
              {label}
            </NavLink>
          </li>
        ))}
        <li>
          <Button
            asChild
            variant="outline"
            size="nav"
          >
            <Link to="/subscribe">Take the Red Pill →</Link>
          </Button>
        </li>
      </ul>
    </nav>
  )
}
