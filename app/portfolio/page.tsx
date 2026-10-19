import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Reveal from '@/components/Reveal'
import { PORTFOLIO } from '@/components/portfolio-data'

export const metadata: Metadata = {
  title: 'Портфолио — RuneWorks',
  description: 'Реальные проекты RuneWorks: сайты, интернет-магазины, лендинги и автоматизация для бизнеса в разных нишах.',
}

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-10 md:pt-40 md:pb-14 bg-dot-grid">
          <div className="container text-center">
            <Reveal>
              <span className="badge mb-5">Портфолио</span>
              <h1 className="text-[36px] leading-[1.1] md:text-6xl font-bold tracking-tight text-fg mb-4">
                Проекты, которые работают
              </h1>
              <p className="text-base md:text-lg max-w-2xl mx-auto text-muted leading-relaxed">
                Сайты, магазины и автоматизация для разного бизнеса. Каждый проект — под конкретную нишу
                и задачу: привести заявку, принять заказ, снять рутину.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {PORTFOLIO.map((w, i) => (
                <Reveal key={w.slug} delay={(i % 2) * 0.05}>
                  <Link href={`/portfolio/${w.slug}`} className="group card rounded-2xl overflow-hidden block h-full">
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                      <Image
                        src={w.image}
                        alt={w.tagline}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-5 md:p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full" style={{ background: w.accent }} />
                        <span className="text-xs font-semibold uppercase tracking-wider text-subtle">
                          {w.name} · {w.niche}
                        </span>
                        <ArrowUpRight size={16} className="ml-auto text-subtle opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h2 className="text-lg md:text-xl font-bold text-fg mb-1.5">{w.tagline}</h2>
                      <p className="text-sm leading-relaxed text-muted mb-4">{w.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {w.services.map((s) => (
                          <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-surface border border-line text-muted">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  )
}
