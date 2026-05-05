'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { value: 50, suffix: '+', label: 'реализованных проектов' },
  { value: 5, suffix: '+', label: 'лет в разработке' },
  { value: 30, suffix: '+', label: 'технологий в стеке' },
  { value: 98, suffix: '%', label: 'клиентов возвращаются' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const steps = 40
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section id="stats" className="section" style={{ paddingTop: 0, paddingBottom: 80 }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 20 }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-10 px-6 text-center"
              style={{ background: 'var(--card)' , borderRadius: i === 0 ? '19px 0 0 19px' : i === 3 ? '0 19px 19px 0' : 0 }}
            >
              <span className="text-4xl md:text-5xl font-bold text-white mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm" style={{ color: 'var(--text-2)' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
