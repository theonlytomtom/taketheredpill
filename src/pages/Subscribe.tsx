import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import MatrixRain from '@/components/MatrixRain'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const benefits = [
  { num: '// 01', text: 'M/W/F/Sat posts — the intel that doesn\'t make it to mainstream feeds' },
  { num: '// 02', text: 'Weekly Monday deep-dive blog — 600–900 words, fully sourced, insider angle' },
  { num: '// 03', text: 'No ads. No sponsors. No affiliations. Just signal.' },
  { num: '// 04', text: 'Zero blue pills. Cancel anytime.' },
]

export default function SubscribePage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(email)) { setStatus('error'); return }
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <MatrixRain />
      <Nav />
      <main
        style={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '120px 48px 80px',
        }}
      >
        <div style={{ maxWidth: '640px', width: '100%' }}>
          <div className="section-label" style={{ marginBottom: '28px' }}>
            The Daily Red Pill Wake Up
          </div>
          <h1
            style={{
              fontSize: 'clamp(44px, 6vw, 72px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
              marginBottom: '28px',
            }}
          >
            Stop consuming
            <br />
            the narrative.
          </h1>
          <p
            style={{
              fontSize: '18px',
              fontWeight: 300,
              color: 'var(--white-dim)',
              lineHeight: 1.65,
              marginBottom: '52px',
              maxWidth: '500px',
            }}
          >
            Join the people who chose to see clearly. Unfiltered intelligence
            on military medicine, defense tech, and the systems that shape
            national health — from someone still inside the machine.
          </p>

          {/* Benefits */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1px',
              marginBottom: '52px',
            }}
          >
            {benefits.map(({ num, text }) => (
              <div
                key={num}
                style={{
                  display: 'flex',
                  gap: '20px',
                  padding: '20px 24px',
                  background: 'var(--bg2)',
                  border: '1px solid var(--white-faint)',
                  borderRadius: '2px',
                  marginBottom: '1px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '10px',
                    color: 'var(--red)',
                    letterSpacing: '0.1em',
                    flexShrink: 0,
                    paddingTop: '2px',
                  }}
                >
                  {num}
                </span>
                <span style={{ fontSize: '15px', color: 'var(--white-dim)', lineHeight: 1.5 }}>
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Form */}
          {status === 'success' ? (
            <div>
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '14px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--red)',
                  marginBottom: '16px',
                }}
              >
                // You're in. Welcome to the red side.
              </div>
              <Button asChild variant="ghost">
                <Link to="/intel">Read the latest dispatches →</Link>
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: 'flex', gap: 0, marginBottom: '12px' }}>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle') }}
                  required
                  aria-label="Email address"
                  style={{
                    flex: 1,
                    borderRight: 'none',
                    borderRadius: '2px 0 0 2px',
                    borderColor: status === 'error' ? 'var(--red)' : undefined,
                  }}
                />
                <Button
                  type="submit"
                  variant="primary"
                  disabled={status === 'loading'}
                  style={{ borderRadius: '0 2px 2px 0', whiteSpace: 'nowrap' }}
                >
                  {status === 'loading' ? '...' : 'Take the Red Pill →'}
                </Button>
              </div>
              {status === 'error' && (
                <div
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '10px',
                    letterSpacing: '0.1em',
                    color: 'var(--red)',
                    textTransform: 'uppercase',
                  }}
                >
                  // Enter a valid email address
                </div>
              )}
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  color: 'rgba(245,245,240,0.22)',
                  textTransform: 'uppercase',
                  marginTop: '12px',
                }}
              >
                No spam. Unsubscribe anytime. Zero blue pills guaranteed.
              </div>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
