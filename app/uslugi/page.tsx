import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Reveal from '@/components/Reveal'
import { SERVICES } from '@/components/services-data'

export const metadata: Metadata = {
  title: 'Услуги — RuneWorks',
  description: 'Услуги RuneWorks: лендинги, сайты компаний, интернет-магазины, Telegram-боты, CRM и автоматизация, поддержка сайтов.',
}

export default function UslugiPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-10 md:pt-40 md:pb-14 bg-dot-grid">
          <div className="container text-center">
            <Reveal>
              <span className="badge mb-5">Услуги</span>
              <h1 className="text-[36px] leading-[1.1] md:text-6xl font-bold tracking-tight text-fg mb-4">
                Что мы делаем
              </h1>
              <p className="text-base md:text-lg max-w-2xl mx-auto text-muted leading-relaxed">
                Не «разработка сайтов», а конкретные инструменты под задачу бизнеса: привести заявку,
                принять заказ, снять рутину. Выберите, что вам нужно.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {SERVICES.map((svc, i) => {
                const Icon = svc.icon
                return (
                  <Reveal key={svc.slug} delay={(i % 3) * 0.05}>
                    <Link href={`/uslugi/${svc.slug}`} className="group card rounded-2xl p-6 md:p-7 flex flex-col h-full hover:-translate-y-1">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-accent-soft text-accent-fg">
                        <Icon size={22} />
                      </div>
                      <h2 className="text-lg font-bold text-fg mb-2">{svc.title}</h2>
                      <p className="text-sm leading-relaxed mb-5 text-muted">{svc.short}</p>
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-sm font-semibold text-fg">{svc.price}</span>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-fg">
                          Подробнее
                          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
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
