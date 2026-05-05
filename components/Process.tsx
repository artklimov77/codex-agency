'use client'

import { motion } from 'framer-motion'

const STEPS = [
  {
    num: '01',
    title: 'Звонок — 30 минут',
    description:
      'Разбираем вашу задачу, задаём правильные вопросы. Без долгих брифов и заполнения таблиц — просто разговор о бизнесе.',
  },
  {
    num: '02',
    title: 'Анализ',
    description:
      'Изучаем нишу, конкурентов, целевую аудиторию. Понимаем, какой результат вам нужен, а не просто что сделать.',
  },
  {
    num: '03',
    title: 'Предложение',
    description:
      'Конкретный план: технологии, сроки, стоимость. Всё прозрачно — никаких "зависит от задачи" без объяснений.',
  },
  {
    num: '04',
    title: 'Разработка',
    description:
      'Работаем итерациями, показываем прогресс каждую неделю. Вы всегда видите, что происходит и куда движемся.',
  },
  {
    num: '05',
    title: 'Запуск и поддержка',
    description:
      'Выводим в продакшн, обучаем команду, передаём доступы. Остаёмся на связи — запущенный проект продолжает развиваться.',
  },
]

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-5">Как мы работаем</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Никакой магии — только процесс
          </h2>
          <p className="text-lg max-w-lg mx-auto" style={{ color: 'var(--text-2)' }}>
            Прозрачная работа на каждом этапе. Вы знаете, что происходит, и держите контроль.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-[28px] md:left-[36px] top-4 bottom-4 w-px"
            style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
          />

          <div className="flex flex-col gap-0">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-6 md:gap-8 pb-10 last:pb-0"
              >
                {/* Number bubble */}
                <div
                  className="relative z-10 flex-shrink-0 w-14 h-14 md:w-[72px] md:h-[72px] rounded-2xl flex items-center justify-center font-mono font-bold text-sm"
                  style={{
                    background: i === 0 ? 'var(--accent)' : 'var(--card)',
                    border: '1px solid var(--border)',
                    color: i === 0 ? 'white' : 'var(--text-2)',
                  }}
                >
                  {step.num}
                </div>

                {/* Content */}
                <div className="pt-3">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
