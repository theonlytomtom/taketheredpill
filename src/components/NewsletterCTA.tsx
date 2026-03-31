import { useState, type FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function NewsletterCTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const isMobile = useIsMobile()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(email)) { setStatus('error'); return }
    setStatus('loading')
    // TODO: Connect to Beehiiv API
    setTimeout(() => { setStatus('success'); setEmail('') }, 800)
  }

  return (
    <section style={{
      position: 'relative', zIndex: 1,
      padding: isMobile ? '60px 20px' : '100px 48px',
      background: 'var(--bg)',
      borderTop: '1px solid var(--white-faint)', borderBottom: '1px solid var(--white-faint)',
      textAlign: 'center',
    }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '20px' }}>
        // The Daily Red Pill Wake Up — Daily Post + Weekly Blog
      </div>
      <h2 style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05, maxWidth: '700px', margin: '0 auto 20px' }}>
        Stop consuming the narrative.<br />Start seeing clearly.
      </h2>
      <p style={{ fontSize: '16px', color: 'var(--white-dim)', fontWeight: 300, maxWidth: '480px', margin: '0 auto 48px', lineHeight: 1.65 }}>
        One dispatch per week. No fluff. No sponsors. Unfiltered intelligence on military medicine, defense tech, and the systems that shape national health.
      </p>

      {status === 'success' ? (
        <div style={{ fontFamily: 'var(--mono)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--red)' }}>
          // You're in. The red pill is on its way.
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} noValidate style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '12px' : '0',
            maxWidth: '480px', margin: '0 auto',
          }}>
            <Input
              type="email" placeholder="your@email.com" value={email}
              onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle') }}
              required aria-label="Email address"
              style={{
                flex: 1,
                borderRight: isMobile ? '1px solid var(--white-faint)' : 'none',
                borderRadius: isMobile ? '2px' : '2px 0 0 2px',
                borderColor: status === 'error' ? 'var(--red)' : undefined,
              }}
            />
            <Button type="submit" variant="primary" disabled={status === 'loading'}
              style={{ borderRadius: isMobile ? '2px' : '0 2px 2px 0', whiteSpace: 'nowrap' }}>
              {status === 'loading' ? '...' : 'Take the Red Pill'}
            </Button>
          </form>
          {status === 'error' && (
            <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.1em', color: 'var(--red)', marginTop: '8px', textTransform: 'uppercase' }}>
              // Enter a valid email address
            </div>
          )}
          <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.1em', color: 'rgba(245,245,240,0.22)', marginTop: '16px', textTransform: 'uppercase' }}>
            No spam. Unsubscribe anytime. Zero blue pills guaranteed.
          </div>
        </>
      )}
    </section>
  )
}
