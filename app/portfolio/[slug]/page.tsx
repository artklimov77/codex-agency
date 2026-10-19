import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Reveal from '@/components/Reveal'
import { PORTFOLIO, getCase } from '@/components/portfolio-data'

export function generateStaticParams() {
  return PORTFOLIO.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const c = getCase(slug)
  if (!c) return { title: 'Кейс — RuneWorks' }
  return {
    title: `${c.name} — кейс RuneWorks`,
    description: c.summary,
    openGraph: { title: `${c.name} — ${c.tagline}`, description: c.summary, images: [{ url: c.image }] },
  }
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const c = getCase(slug)
  if (!c) notFound()

  const others = PORTFOLIO.filter((x) => x.slug !== c.slug).slice(0, 3)

  return (
    <>
      <Header />
      <main>
        <section className="pt-28 md:pt-36">
          <div className="container max-w-4xl">
            <Reveal>
              <Link href="/portfolio" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg transition-colors mb-6">
                <ArrowLeft size={15} />
                Все работы
              </Link>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: c.accent }} />
                <span className="text-sm font-semibold uppercase tracking-wider text-subtle">{c.niche}</span>
              </div>
              <h1 className="text-[32px] leading-[1.1] md:text-5xl font-bold tracking-tight text-fg mb-3">{c.tagline}</h1>
              <p className="text-base md:text-lg text-muted leading-relaxed">{c.summary}</p>
            </Reveal>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container max-w-5xl">
            <Reveal className="rounded-2xl overflow-hidden border border-line shadow-card bg-black">
              <div className="relative aspect-[16/10]">
                <Image src={c.image} alt={c.tagline} fill sizes="(min-width: 1200px) 1024px, 100vw" className="object-cover object-top" priority />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="pb-6">
          <div className="container max-w-4xl grid md:grid-cols-[1.6fr_1fr] gap-8 md:gap-12">
            <div className="flex flex-col gap-8">
              <Reveal>
                <h2 className="text-xl font-bold text-fg mb-3">Задача</h2>
                <p className="text-base leading-relaxed text-muted">{c.task}</p>
              </Reveal>
              <Reveal>
                <h2 className="text-xl font-bold text-fg mb-3">Что сделали</h2>
                <ul className="flex flex-col gap-2.5">
                  {c.solution.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-base text-fg">
                      <Check size={18} className="mt-0.5 flex-shrink-0" style={{ color: c.accent }} strokeWidth={2.5} />
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="card rounded-2xl p-6 md:sticky md:top-24">
                <p className="text-xs font-semibold uppercase tracking-wider text-subtle mb-3">Услуги</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {c.services.map((s) => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-surface border border-line text-muted">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-subtle mb-3">Технологии</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {c.stack.map((s) => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-surface border border-line text-muted">
                      {s}
                    </span>
                  ))}
                </div>
                <a href="/#contact" className="btn-primary w-full text-sm">
                  Хочу похожий проект
                  <ArrowRight size={15} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="text-2xl font-bold text-fg mb-6">Ключевые решения</h2>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-4">
              {c.features.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.07} className="card rounded-2xl p-5">
                  <h3 className="text-base font-bold text-fg mb-2">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{f.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container">
            <div className="flex items-end justify-between gap-4 mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-fg">Другие работы</h2>
              <Link href="/portfolio" className="text-sm font-semibold inline-flex items-center gap-1 text-accent-fg">
                Все
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-4 md:gap-5">
              {others.map((w) => (
                <Link key={w.slug} href={`/portfolio/${w.slug}`} className="group card rounded-2xl overflow-hidden block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <Image src={w.image} alt={w.tagline} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-subtle mb-1">{w.niche}</p>
                    <h3 className="text-base font-bold text-fg">{w.tagline}</h3>
                  </div>
                </Link>
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
