'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const FADE_UP = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dot-grid">
      {/* Glow orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 700,
          height: 700,
          background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.18) 0%, transparent 65%)',
        }}
      />
      {/* Top gradient fade */}
      <div
        className="absolute inset-x-0 top-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, var(--bg), transparent)' }}
      />
      {/* Bottom gradient fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, var(--bg), transparent)' }}
      />

      <div className="container relative z-10 text-center pt-28 pb-20">
        {/* Badge */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          custom={0}
          className="flex justify-center mb-8"
        >
          <span className="badge">
            <span
              className="w-[7px] h-[7px] rounded-full bg-blue-500 animate-pulse-dot"
            />
            IT-агентство полного цикла
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="text-[52px] md:text-[80px] lg:text-[96px] font-bold leading-[1.0] tracking-tight text-white mb-4"
        >
          Вашему бизнесу
          <br />
          не&nbsp;нужен сайт.
        </motion.h1>

        <motion.h2
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="text-[40px] md:text-[64px] lg:text-[80px] font-bold leading-[1.0] tracking-tight mb-10"
        >
          <span className="text-gradient">Ему нужны клиенты.</span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="text-lg md:text-xl max-w-[640px] mx-auto mb-12 leading-relaxed"
          style={{ color: 'var(--text-2)' }}
        >
          Codex создаёт цифровые системы — от лендинга до корпоративного портала.
          Результат: поток клиентов, автоматизация продаж, рост бизнеса.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="btn-primary text-base">
            Обсудить проект
            <ArrowRight size={18} />
          </a>
          <a href="#cases" className="btn-secondary text-base">
            Посмотреть кейсы
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          custom={0.5}
          className="text-sm mt-8"
          style={{ color: 'var(--text-3)' }}
        >
          50+ реализованных проектов · Без предоплаты на старте · Ответим за 30 минут
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#stats"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        style={{ color: 'var(--text-3)' }}
      >
        <span className="text-xs tracking-widest uppercase">Листай</span>
        <ChevronDown size={18} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
