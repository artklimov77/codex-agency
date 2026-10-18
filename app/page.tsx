import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Advantages from '@/components/Advantages'
import Services from '@/components/Services'
import Cases from '@/components/Cases'
import Comparison from '@/components/Comparison'
import Pricing from '@/components/Pricing'
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
        <Advantages />
        <Services />
        <Cases />
        <Comparison />
        <Pricing />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
