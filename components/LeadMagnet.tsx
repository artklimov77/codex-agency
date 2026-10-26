import { ArrowRight, Search, Clock, Gift } from 'lucide-react'
import Reveal from './Reveal'

const BULLETS = [
  { icon: Search, text: 'Смотрим сайт глазами клиента: где теряются заявки и что мешает купить' },
  { icon: Clock, text: 'Короткий разбор с конкретными пунктами — в течение 24 часов' },
  { icon: Gift, text: 'Бесплатно и без обязательств. Решите сами, делать с этим что-то или нет' },
]

export default function LeadMagnet() {
  return (
    <section className="section !pb-0" id="audit">
      <div className="container">
        <Reveal className="relative overflow-hidden rounded-3xl bg-accent text-white">
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{ background: 'radial-gradient(ellipse at 80% 120%, rgba(255,255,255,0.22) 0%, transparent 55%)' }}
          />
          <div className="relative p-6 sm:p-10 lg:p-14 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-14 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 mb-5">
                Бесплатно
              </span>
              <h2 className="text-[28px] leading-[1.12] md:text-[40px] font-bold tracking-tight mb-4">
                Разберём ваш сайт за&nbsp;24&nbsp;часа
              </h2>
              <p className="text-base md:text-lg text-white/85 leading-relaxed">
                Пришлите ссылку на свой сайт — вернёмся со списком, что улучшить, чтобы приходило больше
                заявок. Даже если делать будете не с нами.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <ul className="flex flex-col gap-3">
                {BULLETS.map((b) => {
                  const Icon = b.icon
                  return (
                    <li key={b.text} className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                        <Icon size={16} />
                      </span>
                      <span className="text-sm leading-relaxed text-white/90 pt-1.5">{b.text}</span>
                    </li>
                  )
                })}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-accent font-semibold rounded-xl px-6 py-3.5 mt-1 transition-transform hover:-translate-y-0.5"
              >
                Получить бесплатный разбор
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
