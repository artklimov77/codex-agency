import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

const CASES = [
  {
    tag: 'Интернет-магазин',
    tagColor: '#10B981',
    title: 'Рост конверсии на 340%',
    description:
      'Переработали сайт оптовой компании: новый дизайн, удобный каталог, интеграция с 1С. Заявок стало в 4 раза больше за первый месяц.',
    metrics: [
      { label: 'Конверсия', value: '+340%' },
      { label: 'Время загрузки', value: '1.2с' },
    ],
  },
  {
    tag: 'CRM + Автоматизация',
    tagColor: '#2563EB',
    title: 'CRM для сети клиник',
    description:
      'Внедрили AmoCRM с кастомной воронкой, автоматические напоминания пациентам, интеграция с медицинской системой. Запись через сайт выросла в 2.5 раза.',
    metrics: [
      { label: 'Потерянных заявок', value: '−0' },
      { label: 'Запись онлайн', value: '+150%' },
    ],
  },
  {
    tag: 'Корпоративный портал',
    tagColor: '#8B5CF6',
    title: 'Внутренний портал холдинга',
    description:
      'Разработали корпоративный портал для 300+ сотрудников: документооборот, задачи, новости, база знаний. Заменил 5 разрозненных инструментов.',
    metrics: [
      { label: 'Сотрудников', value: '300+' },
      { label: 'Инструментов заменил', value: '5' },
    ],
  },
]

export default function Cases() {
  return (
    <section className="section bg-surface" id="cases">
      <div className="container">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-10 md:mb-14">
          <div>
            <span className="badge mb-5">Кейсы</span>
            <h2 className="text-[32px] leading-[1.1] md:text-5xl font-bold tracking-tight text-fg">Что мы уже сделали</h2>
          </div>
          <p className="text-base max-w-sm text-muted">
            Реальные задачи, реальные результаты. Не портфолио ради красоты — конкретные цифры.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className="card rounded-2xl p-6 md:p-7 flex flex-col gap-5 group hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: `${c.tagColor}1A`, color: c.tagColor, border: `1px solid ${c.tagColor}33` }}
                >
                  {c.tag}
                </span>
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-muted" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-fg mb-2">{c.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{c.description}</p>
              </div>

              <div className="flex gap-6 mt-auto pt-5 border-t border-line">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-xl font-bold" style={{ color: c.tagColor }}>
                      {m.value}
                    </div>
                    <div className="text-xs text-muted">{m.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-10">
          <a href="#contact" className="btn-secondary">
            Обсудить похожую задачу
            <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
