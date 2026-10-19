'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-dot-grid">
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[700px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, var(--hero-glow) 0%, transparent 65%)' }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, var(--bg), transparent)' }}
      />

      <div className="container relative z-10 text-center pt-28 pb-16 md:pt-44 md:pb-32">
        <motion.div variants={FADE_UP} initial="hidden" animate="show" custom={0} className="flex justify-center mb-6 md:mb-8">
          <span className="badge">
            <span className="w-[7px] h-[7px] rounded-full bg-accent animate-pulse-dot" />
            IT-агентство полного цикла
          </span>
        </motion.div>

        <motion.h1
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="font-bold tracking-tight text-fg text-[40px] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[88px] lg:leading-[1.0] mb-6 md:mb-8"
        >
          Вашему бизнесу
          <br />
          не&nbsp;нужен сайт.
          <span className="block text-gradient mt-1 md:mt-2 leading-[1.12] pb-[0.1em]">Ему нужны клиенты.</span>
        </motion.h1>

        <motion.p
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="text-base md:text-xl max-w-[640px] mx-auto mb-8 md:mb-10 leading-relaxed text-muted"
        >
          RuneWorks создаёт цифровые системы — от лендинга до корпоративного портала.
          Результат: поток клиентов, автоматизация продаж, рост бизнеса.
        </motion.p>

        <motion.div
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-sm sm:max-w-none mx-auto"
        >
          <a href="#contact" className="btn-primary text-base">
            Обсудить проект
            <ArrowRight size={18} />
          </a>
          <a href="#cases" className="btn-secondary text-base">
            Посмотреть кейсы
          </a>
        </motion.div>

        <motion.p
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="text-sm mt-6 md:mt-8 text-subtle"
        >
          50+ реализованных проектов · Без предоплаты на&nbsp;старте · Ответим за&nbsp;30&nbsp;минут
        </motion.p>
      </div>

      <motion.a
        href="#stats"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-subtle"
      >
        <span className="text-xs tracking-widest uppercase">Листай</span>
        <ChevronDown size={18} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
