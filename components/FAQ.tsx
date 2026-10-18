'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const FAQS = [
  {
    q: 'Сколько стоит разработка?',
    a: 'Лендинг — от 30 000 ₽, сайт компании или интернет-магазин — от 120 000 ₽. Боты и интеграции считаем индивидуально. Точную цену назовём после созвона и зафиксируем в договоре.',
  },
  {
    q: 'Сколько времени займёт работа?',
    a: 'Лендинг — 5–7 дней, сайт компании или магазин — 3–4 недели. Сроки по ботам и автоматизации зависят от сценария — назовём их после созвона. Всё фиксируем в договоре.',
  },
  {
    q: 'Codex — это студия или фрилансер?',
    a: 'Небольшая студия. Вы общаетесь напрямую с разработчиком, который ведёт проект от первого звонка до запуска, — без менеджеров и посредников. Поэтому быстрее и дешевле агентства, но с договором и ответственностью.',
  },
  {
    q: 'Вы работаете с малым бизнесом?',
    a: 'Да, это наш основной клиент. Салон, кофейня, небольшой магазин, эксперт или стартап — запустим быстро, по фиксированной цене и без лишнего.',
  },
  {
    q: 'Что если результат меня не устроит?',
    a: 'Работаем по этапам и показываем результат на каждом — правки включены в стоимость. Если не договоримся, вы платите только за выполненные этапы.',
  },
  {
    q: 'Нужно ли мне разбираться в технологиях?',
    a: 'Нет. Вы рассказываете о бизнесе, мы переводим это в техническое решение и объясняем всё простым языком.',
  },
  {
    q: 'Работаете ли вы официально?',
    a: 'Да. Договор, понятное ТЗ, оплата по этапам и чек — никакой работы «на доверии» без документов.',
  },
]

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className={`card rounded-xl overflow-hidden ${open ? '!border-line-strong' : ''}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
      >
        <span className="text-[15px] md:text-lg font-semibold text-fg">{q}</span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
            open ? 'bg-accent text-white rotate-45' : 'bg-surface text-muted'
          }`}
        >
          <Plus size={16} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base leading-relaxed text-muted">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section" id="faq">
      <div className="container">
        <SectionHeading badge="FAQ" title="Отвечаем честно" subtitle="Не нашли свой вопрос — просто напишите." />

        <Reveal className="max-w-3xl mx-auto flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={faq.q}
              q={faq.q}
              a={faq.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
