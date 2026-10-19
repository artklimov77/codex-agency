import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Reveal from '@/components/Reveal'
import { SERVICES, getService } from '@/components/services-data'

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const s = getService(slug)
  if (!s) return { title: 'Услуга — RuneWorks' }
  return { title: `${s.title} — RuneWorks`, description: s.intro }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = getService(slug)
  if (!s) notFound()

  const Icon = s.icon
  const others = SERVICES.filter((x) => x.slug !== s.slug)

  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-10 md:pt-40 md:pb-14 bg-dot-grid">
          <div className="container max-w-4xl">
            <Reveal>
              <Link href="/uslugi" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg transition-colors mb-6">
                <ArrowLeft size={15} />
                Все услуги
              </Link>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-accent-soft text-accent-fg">
                <Icon size={24} />
              </div>
              <h1 className="text-[32px] leading-[1.1] md:text-5xl font-bold tracking-tight text-fg mb-4">{s.tagline}</h1>
              <p className="text-base md:text-lg text-muted leading-relaxed mb-6">{s.intro}</p>
              <div className="flex flex-wrap items-center gap-3">
                <a href="/#contact" className="btn-primary">
                  Обсудить проект
                  <ArrowRight size={16} />
                </a>
                <span className="text-sm text-subtle">
                  {s.price} · срок {s.term}
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container max-w-4xl grid md:grid-cols-2 gap-8 md:gap-12">
            <Reveal>
              <h2 className="text-xl font-bold text-fg mb-5">Что входит</h2>
              <ul className="flex flex-col gap-3">
                {s.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-base text-fg">
                    <Check size={18} className="mt-0.5 flex-shrink-0 text-accent-fg" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-xl font-bold text-fg mb-5">Кому подходит</h2>
              <ul className="flex flex-col gap-3 mb-8">
                {s.forWhom.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-base text-muted">
                    <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="card rounded-2xl p-6">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-sm text-muted">Стоимость</span>
                  <span className="text-2xl font-bold text-fg">{s.price}</span>
                </div>
                <div className="flex items-baseline justify-between mb-5">
                  <span className="text-sm text-muted">Срок</span>
                  <span className="text-sm font-semibold text-fg">{s.term}</span>
                </div>
                <a href="/#contact" className="btn-primary w-full text-sm">
                  Рассчитать стоимость
                  <ArrowRight size={15} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section bg-surface">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="text-2xl font-bold text-fg mb-8 text-center">Что вы получаете</h2>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-4">
              {s.benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.07} className="card rounded-2xl p-6">
                  <h3 className="text-base font-bold text-fg mb-2">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{b.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container max-w-3xl">
            <Reveal>
              <h2 className="text-2xl font-bold text-fg mb-8 text-center">Частые вопросы</h2>
            </Reveal>
            <div className="flex flex-col gap-3">
              {s.faq.map((f, i) => (
                <Reveal key={f.q} delay={i * 0.06} className="card rounded-xl p-5 md:p-6">
                  <h3 className="text-base md:text-lg font-semibold text-fg mb-2">{f.q}</h3>
                  <p className="text-sm md:text-base leading-relaxed text-muted">{f.a}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container">
            <div className="flex items-end justify-between gap-4 mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-fg">Другие услуги</h2>
              <Link href="/uslugi" className="text-sm font-semibold inline-flex items-center gap-1 text-accent-fg">
                Все
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {others.map((o) => {
                const OIcon = o.icon
                return (
                  <Link key={o.slug} href={`/uslugi/${o.slug}`} className="group card rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-0.5">
                    <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-accent-soft text-accent-fg">
                      <OIcon size={20} />
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-bold text-fg">{o.title}</span>
                      <span className="block text-xs text-subtle">{o.price}</span>
                    </span>
                    <ArrowRight size={16} className="text-subtle group-hover:translate-x-1 transition-transform" />
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  )
}
