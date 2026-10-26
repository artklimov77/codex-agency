import { Target, Eye, FileCheck2, Sprout } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const PRINCIPLES = [
  {
    icon: Target,
    title: 'Идём от результата',
    text: 'Сначала разбираемся, зачем вам проект и какой результат считается успехом. Потом выбираем, что и как делать — а не наоборот.',
  },
  {
    icon: Eye,
    title: 'Всё видно на каждом шаге',
    text: 'Показываем прогресс по ходу работы. Вы в любой момент знаете, на каком этапе проект и что будет дальше.',
  },
  {
    icon: FileCheck2,
    title: 'Работаем по договору',
    text: 'Договор, чёткое ТЗ, этапы и закрывающие документы. Договорённости зафиксированы, сроки — тоже.',
  },
  {
    icon: Sprout,
    title: 'Остаёмся на связи',
    text: 'После запуска проект не бросаем: дорабатываем, добавляем функции и помогаем, когда бизнес растёт.',
  },
]

export default function Approach() {
  return (
    <section className="section" id="approach">
      <div className="container">
        <SectionHeading
          badge="Наш подход"
          title="Как мы думаем о проекте"
          subtitle="Короткая команда с большим опытом: дизайнер, разработка и автоматизация. Берёмся за задачу целиком и доводим до результата."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {PRINCIPLES.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal key={p.title} delay={i * 0.07} className="card rounded-2xl p-6 h-full flex flex-col">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-accent-soft text-accent-fg">
                  <Icon size={21} />
                </div>
                <h3 className="text-base font-bold text-fg mb-2">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{p.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
