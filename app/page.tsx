import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Segments from '@/components/Segments'
import Services from '@/components/Services'
import Cases from '@/components/Cases'
import Process from '@/components/Process'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Segments />
        <Services />
        <Cases />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
