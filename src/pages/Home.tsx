import MatrixRain from '@/components/MatrixRain'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Manifesto from '@/components/Manifesto'
import IntelGrid from '@/components/IntelGrid'
import About from '@/components/About'
import NewsletterCTA from '@/components/NewsletterCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <MatrixRain />
      <Nav />
      <main>
        <Hero />
        <div className="section-divider" />
        <Manifesto />
        <div className="section-divider" />
        <IntelGrid />
        <About />
        <NewsletterCTA />
      </main>
      <Footer />
    </>
  )
}
