import { Link } from 'react-router-dom'
import MatrixRain from '@/components/MatrixRain'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'

export default function NotFound() {
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
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '0 48px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '10px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--red)',
            marginBottom: '24px',
          }}
        >
          // 404 — Page Not Found
        </div>
        <h1
          style={{
            fontSize: 'clamp(80px, 14vw, 180px)',
            fontWeight: 700,
            lineHeight: 0.85,
            letterSpacing: '-0.04em',
            color: 'var(--white-faint)',
            marginBottom: '40px',
          }}
        >
          404
        </h1>
        <p
          style={{
            fontSize: '20px',
            fontWeight: 300,
            color: 'var(--white-dim)',
            lineHeight: 1.6,
            maxWidth: '420px',
            marginBottom: '48px',
          }}
        >
          You went looking for something that isn't here.
          <br />
          Even the red pill doesn't take you everywhere.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Button asChild variant="primary">
            <Link to="/">Back to Home</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/intel">Read the Intel Hub →</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  )
}
