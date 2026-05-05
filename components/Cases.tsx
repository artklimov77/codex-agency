'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

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
    <section className="section" id="cases">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="badge mb-5">Кейсы</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Что мы уже сделали
            </h2>
          </div>
          <p className="text-base max-w-sm" style={{ color: 'var(--text-2)' }}>
            Реальные задачи, реальные результаты.
            Не портфолио ради красоты — конкретные цифры.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {CASES.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card rounded-2xl p-7 flex flex-col gap-5 group hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: `${c.tagColor}18`,
                    color: c.tagColor,
                    border: `1px solid ${c.tagColor}30`,
                  }}
                >
                  {c.tag}
                </span>
                <ArrowUpRight
                  size={18}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--text-2)' }}
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                  {c.description}
                </p>
              </div>

              <div
                className="flex gap-4 mt-auto pt-5"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                {c.metrics.map((m, j) => (
                  <div key={j}>
                    <div className="text-xl font-bold" style={{ color: c.tagColor }}>
                      {m.value}
                    </div>
                    <div className="text-xs" style={{ color: 'var(--text-2)' }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a href="#contact" className="btn-secondary inline-flex">
            Обсудить похожую задачу
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
