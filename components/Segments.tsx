import { Zap, TrendingUp, Building2, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const SEGMENTS = [
  {
    icon: Zap,
    tag: 'Малый бизнес',
    tagColor: '#10B981',
    title: 'Быстро, чётко,\nпо делу',
    description:
      'Кофейня, салон, магазин, стартап — запустим за 5 дней с фиксированной ценой. Без размытых сроков, без непонятных доп. работ.',
    points: ['Лендинг с нуля за 5 дней', 'Фиксированная цена', 'Сразу к работе без долгих брифингов'],
    cta: 'Нужно быстро',
  },
  {
    icon: TrendingUp,
    tag: 'Средний бизнес',
    tagColor: '#2563EB',
    title: 'Система,\nкоторая растёт',
    description:
      'Компании 20–500 человек. Строим цифровую инфраструктуру: CRM, автоматизацию процессов, сайты, которые реально конвертируют.',
    points: ['CRM и воронка продаж', 'Автоматизация рутины', 'Корпоративные сервисы'],
    cta: 'Нужна система',
    featured: true,
  },
  {
    icon: Building2,
    tag: 'Крупный бизнес',
    tagColor: '#8B5CF6',
    title: 'Технический\nпартнёр',
    description:
      'Корпорации, холдинги, сложные структуры. Enterprise-решения, интеграции с ERP/1С, безопасность, поддержка 24/7.',
    points: ['Enterprise-архитектура', 'Интеграции любой сложности', 'Выделенная команда'],
    cta: 'Нужен партнёр',
  },
]

export default function Segments() {
  return (
    <section className="section bg-surface" id="segments">
      <div className="container">
        <SectionHeading badge="Для кого мы работаем" title="Найдите себя" />

        <div className="grid md:grid-cols-3 gap-6 md:gap-5 lg:gap-6">
          {SEGMENTS.map((seg, i) => {
            const Icon = seg.icon
            return (
              <Reveal
                key={seg.tag}
                delay={i * 0.08}
                className={`relative rounded-2xl p-6 md:p-8 flex flex-col gap-6 bg-card ${
                  seg.featured
                    ? 'border-2 border-accent shadow-[0_20px_60px_-20px_rgba(37,99,235,0.35)]'
                    : 'border border-line shadow-card'
                }`}
              >
                {seg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold bg-accent text-white whitespace-nowrap">
                    Основной фокус
                  </span>
                )}

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${seg.tagColor}1A`, color: seg.tagColor }}
                  >
                    <Icon size={20} />
                  </div>
                  <span className="text-sm font-semibold" style={{ color: seg.tagColor }}>
                    {seg.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-fg leading-tight whitespace-pre-line mb-3">{seg.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{seg.description}</p>
                </div>

                <ul className="flex flex-col gap-2">
                  {seg.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: seg.tagColor }} />
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-auto flex items-center gap-2 text-sm font-semibold group/link"
                  style={{ color: seg.tagColor }}
                >
                  {seg.cta}
                  <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
