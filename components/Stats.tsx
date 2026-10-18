'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import Reveal from './Reveal'

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
    <section id="stats" className="pb-16 md:pb-20">
      <div className="container">
        <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line rounded-[20px] overflow-hidden shadow-card">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center py-8 md:py-10 px-4 text-center bg-card">
              <span className="text-4xl md:text-5xl font-bold text-fg mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm text-muted">{stat.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
