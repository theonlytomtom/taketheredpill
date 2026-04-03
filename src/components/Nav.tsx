import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/hooks/useIsMobile'

const PillIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="3" y="12" width="26" height="8" rx="4" fill="none" stroke="#D0021B" strokeWidth="1.5" />
    <rect x="3" y="12" width="13" height="8" rx="4" fill="#D0021B" />
    <line x1="16" y1="12" x2="16" y2="20" stroke="#060608" strokeWidth="1.5" />
  </svg>
)

const navItems = [
  { to: '/intel', label: 'Intel' },
  { to: '/intel/series/joint-opmed-ontology', label: 'Series' },
  { to: '/products', label: 'Products' },
  { to: '/#mission', label: 'The Mission' },
  { to: '/about', label: 'About' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isMobile ? '16px 20px' : '20px 48px',
          background: scrolled || menuOpen
            ? 'rgba(6,6,8,0.98)'
            : 'linear-gradient(to bottom, rgba(6,6,8,0.98), rgba(6,6,8,0))',
          backdropFilter: 'blur(2px)',
          transition: 'background 0.3s ease',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
          aria-label="TAKETHEREDPILL.IO — Home"
        >
          <PillIcon />
          {!isMobile && (
            <span style={{ fontFamily: 'var(--mono)', fontSize: '13px', letterSpacing: '0.12em', color: 'var(--white)', textTransform: 'uppercase' }}>
              TAKE<span style={{ color: 'var(--red)' }}>THE</span>REDPILL.IO
            </span>
          )}
        </Link>

        {/* Desktop nav */}
        {!isMobile && (
          <ul style={{ display: 'flex', alignItems: 'center', gap: '36px', listStyle: 'none' }}>
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} style={({ isActive }) => ({
                  fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: isActive ? 'var(--white)' : 'var(--white-dim)',
                  textDecoration: 'none', transition: 'color 0.2s',
                })}>
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <Button asChild variant="outline" size="nav">
                <Link to="/subscribe">Take the Red Pill →</Link>
              </Button>
            </li>
          </ul>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: 'block', width: '22px', height: '2px',
                background: menuOpen && i === 1 ? 'transparent' : 'var(--white)',
                transform: menuOpen
                  ? i === 0 ? 'translateY(7px) rotate(45deg)' : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'none'
                  : 'none',
                transition: 'all 0.2s ease',
              }} />
            ))}
          </button>
        )}
      </nav>

      {/* Mobile menu overlay */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'rgba(13,13,18,0.98)',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center', gap: '40px',
          paddingTop: '80px',
        }}>
          {navItems.map(({ to, label }) => (
            <Link key={to} to={to} onClick={() => setMenuOpen(false)} style={{
              fontFamily: 'var(--mono)', fontSize: '20px', letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--white)', textDecoration: 'none',
            }}>
              {label}
            </Link>
          ))}
          <Button asChild variant="primary" size="default">
            <Link to="/subscribe" onClick={() => setMenuOpen(false)}>Take the Red Pill →</Link>
          </Button>
        </div>
      )}
    </>
  )
}
