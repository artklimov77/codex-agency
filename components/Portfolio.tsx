import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { PORTFOLIO } from './portfolio-data'

export default function Portfolio() {
  const items = PORTFOLIO.slice(0, 4)
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <SectionHeading
          badge="Портфолио"
          title="Наши работы"
          subtitle="Реальные проекты для реального бизнеса. Каждый — под конкретную нишу и задачу, а не по шаблону."
        />

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {items.map((w, i) => (
            <Reveal key={w.slug} delay={i * 0.05}>
              <Link
                href={`/portfolio/${w.slug}`}
                className={`group card rounded-2xl overflow-hidden block ${i === 0 ? 'md:col-span-2' : ''}`}
              >
                <div className={`relative overflow-hidden bg-black ${i === 0 ? 'aspect-[16/9] md:aspect-[16/7]' : 'aspect-[16/10]'}`}>
                  <Image
                    src={w.image}
                    alt={w.tagline}
                    fill
                    sizes={i === 0 ? '(min-width: 1200px) 1136px, 100vw' : '(min-width: 768px) 50vw, 100vw'}
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
                  <h3 className="text-lg md:text-xl font-bold text-fg mb-1.5">{w.tagline}</h3>
                  <p className="text-sm leading-relaxed text-muted">{w.summary}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-10">
          <Link href="/portfolio" className="btn-secondary">
            Все работы
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
