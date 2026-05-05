'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

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
    <div
      className="rounded-xl overflow-hidden transition-all"
      style={{ border: `1px solid ${open ? 'var(--border-light)' : 'var(--border)'}` }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left gap-4 transition-colors"
        style={{ background: open ? 'var(--card-hover)' : 'var(--card)' }}
      >
        <span className="text-base md:text-lg font-semibold text-white">{q}</span>
        <span
          className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all"
          style={{
            background: open ? 'var(--accent)' : 'var(--bg-2)',
            color: open ? 'white' : 'var(--text-2)',
          }}
        >
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-6 pb-6 pt-2 text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
              {a}
            </div>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="badge mb-5">Частые вопросы</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Отвечаем честно
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-2)' }}>
            Если не нашли ответ — просто напишите.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto flex flex-col gap-3"
        >
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
