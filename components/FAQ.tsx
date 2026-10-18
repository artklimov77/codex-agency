'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const FAQS = [
  {
    q: 'Сколько стоит разработка?',
    a: 'Зависит от задачи. Простой лендинг — от 30 000 ₽, корпоративный сайт — от 120 000 ₽, CRM или сложная система — от 300 000 ₽. Точная цена — после звонка, когда поймём вашу конкретную задачу.',
  },
  {
    q: 'Сколько времени займёт разработка?',
    a: 'Лендинг — 5–7 дней. Корпоративный сайт — 3–4 недели. CRM или сложная система — от 2 месяцев. Сроки всегда фиксируем в договоре и не сдвигаем без согласования.',
  },
  {
    q: 'Вы работаете с малым бизнесом?',
    a: 'Да, без проблем. Салон красоты, кофейня, небольшой магазин — у нас есть готовые решения с фиксированной ценой для типовых задач. Запустим быстро и по делу.',
  },
  {
    q: 'Что если результат меня не устроит?',
    a: 'Работаем итеративно — показываем на каждом этапе, правки включены в стоимость. Если по какой-то причине не договоримся — вернём деньги за незавершённые этапы. Работаем по договору.',
  },
  {
    q: 'Нужно ли мне разбираться в технологиях?',
    a: 'Нет. Вы говорите о своей бизнес-задаче, мы переводим её на технический язык и предлагаем решение. Не нужно знать разницу между фронтендом и бэкендом — достаточно понимать свой бизнес.',
  },
  {
    q: 'Как вы гарантируете результат?',
    a: 'Честно: трафик и продажи зависят от многих факторов. Но мы создаём технические инструменты, которые работают корректно, загружаются быстро и решают поставленную задачу. Запускаем только то, за что не стыдно.',
  },
  {
    q: 'Работаете ли вы по договору?',
    a: 'Да, всегда. Договор, чёткое ТЗ, этапы сдачи, фиксированная стоимость или почасовая ставка — как удобнее. Никакой работы "на доверие" без документов.',
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
        <SectionHeading badge="Частые вопросы" title="Отвечаем честно" subtitle="Если не нашли ответ — просто напишите." />

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
