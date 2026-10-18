import { UserRound, Timer, FileCheck2, LifeBuoy } from 'lucide-react'
import Reveal from './Reveal'

const ITEMS = [
  {
    icon: UserRound,
    title: 'Напрямую с разработчиком',
    text: 'Без менеджеров и испорченного телефона — вы говорите с тем, кто пишет код.',
  },
  {
    icon: Timer,
    title: 'Лендинг за 5–7 дней',
    text: 'Небольшие проекты запускаем быстро. Сроки фиксируем в договоре.',
  },
  {
    icon: FileCheck2,
    title: 'Оплата по этапам',
    text: 'Платите за готовый результат каждого этапа, а не всю сумму вперёд.',
  },
  {
    icon: LifeBuoy,
    title: 'На связи после запуска',
    text: 'Правки, доработки, новые функции — не исчезаем после сдачи проекта.',
  },
]

export default function Advantages() {
  return (
    <section className="pb-16 md:pb-24">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ITEMS.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={i * 0.06} className="card rounded-2xl p-5 md:p-6 flex gap-4 sm:block">
                <div className="w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center sm:mb-4 bg-accent-soft text-accent-fg">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-fg mb-1">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
