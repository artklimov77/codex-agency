'use client'

import { motion } from 'framer-motion'
import { Zap, TrendingUp, Building2, ArrowRight } from 'lucide-react'

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
    border: 'rgba(16, 185, 129, 0.15)',
    glow: 'rgba(16, 185, 129, 0.06)',
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
    border: 'rgba(37, 99, 235, 0.2)',
    glow: 'rgba(37, 99, 235, 0.08)',
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
    border: 'rgba(139, 92, 246, 0.15)',
    glow: 'rgba(139, 92, 246, 0.06)',
  },
]

export default function Segments() {
  return (
    <section className="section" id="segments">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-5">Для кого мы работаем</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Найдите себя
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {SEGMENTS.map((seg, i) => {
            const Icon = seg.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl p-8 flex flex-col gap-6 group cursor-default"
                style={{
                  background: seg.featured
                    ? `linear-gradient(135deg, rgba(37,99,235,0.08) 0%, var(--card) 100%)`
                    : 'var(--card)',
                  border: `1px solid ${seg.border}`,
                  boxShadow: seg.featured ? `0 0 60px ${seg.glow}` : 'none',
                }}
              >
                {seg.featured && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-blue-400"
                    style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)' }}
                  >
                    Основной фокус
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${seg.tagColor}18`, color: seg.tagColor }}
                  >
                    <Icon size={20} />
                  </div>
                  <span className="text-sm font-semibold" style={{ color: seg.tagColor }}>
                    {seg.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white leading-tight whitespace-pre-line mb-3">
                    {seg.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                    {seg.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-2">
                  {seg.points.map((point, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: seg.tagColor }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-auto flex items-center gap-2 text-sm font-semibold group/link transition-all"
                  style={{ color: seg.tagColor }}
                >
                  {seg.cta}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
