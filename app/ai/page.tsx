import type { Metadata } from 'next'
import Link from 'next/link'
import { Bot, Workflow, Gauge, MessagesSquare, ArrowRight, ArrowUpRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'AI и боты — RuneWorks',
  description:
    'Telegram-боты с ИИ, автоматизация рутины и ускорение разработки нейросетями. RuneWorks внедряет AI там, где он экономит ваше время и деньги.',
}

const CAPABILITIES = [
  {
    icon: Bot,
    title: 'Боты с ИИ',
    text: 'Telegram-боты, которые понимают живые сообщения клиента: отвечают на вопросы, записывают, подбирают товар или услугу, а сложное передают человеку.',
  },
  {
    icon: Workflow,
    title: 'Автоматизация рутины',
    text: 'Соединяем сайт, CRM, почту и мессенджеры. Заявки, уведомления и перенос данных идут сами, без ручного копирования между сервисами.',
  },
  {
    icon: MessagesSquare,
    title: 'Контент и поддержка',
    text: 'ИИ помогает готовить тексты, описания товаров и первичные ответы клиентам. Быстрее запуск и меньше нагрузки на вас и команду.',
  },
  {
    icon: Gauge,
    title: 'Быстрее к результату',
    text: 'Нейросети встроены в саму разработку. Поэтому проекты выходят быстрее, а бюджет идёт на задачу, а не на лишние часы.',
  },
]

const EXAMPLES = [
  {
    tag: 'Telegram-бот',
    title: 'Запись клиентов без звонков',
    text: 'Бот принимает брони по свободным слотам, подтверждает запись и ведёт учёт — круглосуточно.',
    href: '/portfolio/booking-bot',
    linkLabel: 'Смотреть кейс',
  },
  {
    tag: 'Интеграции',
    title: 'Заявки в одном месте',
    text: 'Обращения с сайта, почты и мессенджеров падают в одну систему с уведомлениями — ни одна не теряется.',
  },
  {
    tag: 'Квалификация',
    title: 'Первичный разбор заявок',
    text: 'Бот уточняет задачу и контакт до того, как подключится человек. Вы получаете уже тёплый, понятный запрос.',
  },
]

export default function AiPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-10 md:pt-40 md:pb-16 bg-dot-grid">
          <div className="container max-w-3xl text-center">
            <Reveal>
              <span className="badge mb-5">
                <span className="w-[7px] h-[7px] rounded-full bg-accent animate-pulse-dot" />
                AI внутри
              </span>
              <h1 className="text-[34px] leading-[1.08] md:text-6xl font-bold tracking-tight text-fg mb-5">
                Нейросети там, где они реально ускоряют
              </h1>
              <p className="text-base md:text-lg max-w-2xl mx-auto text-muted leading-relaxed">
                Мы не продаём «ИИ» как модное слово. Используем его в работе и внутри продуктов, когда он
                экономит ваше время и деньги: умные боты, автоматизация и быстрый запуск.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="pb-6">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {CAPABILITIES.map((c, i) => {
                const Icon = c.icon
                return (
                  <Reveal key={c.title} delay={i * 0.07} className="card rounded-2xl p-6 h-full flex flex-col">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-accent-soft text-accent-fg">
                      <Icon size={21} />
                    </div>
                    <h2 className="text-base font-bold text-fg mb-2">{c.title}</h2>
                    <p className="text-sm leading-relaxed text-muted">{c.text}</p>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal className="mb-10 md:mb-12">
              <span className="badge mb-5">Как это выглядит</span>
              <h2 className="text-[28px] leading-[1.12] md:text-4xl font-bold tracking-tight text-fg">
                Примеры на практике
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-4 md:gap-5">
              {EXAMPLES.map((e, i) => (
                <Reveal key={e.title} delay={i * 0.08} className="card rounded-2xl p-6 h-full flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-fg mb-3">{e.tag}</span>
                  <h3 className="text-lg font-bold text-fg mb-2">{e.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{e.text}</p>
                  {e.href && (
                    <Link
                      href={e.href}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-fg"
                    >
                      {e.linkLabel}
                      <ArrowUpRight size={15} />
                    </Link>
                  )}
                </Reveal>
              ))}
            </div>

            <Reveal className="text-center mt-10">
              <a href="/#contact" className="btn-primary">
                Обсудить бота или автоматизацию
                <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  )
}
