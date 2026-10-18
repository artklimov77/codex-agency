import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const STEPS = [
  {
    title: 'Созвон — 30 минут',
    description: 'Разбираем задачу и цели. Без долгих брифов и таблиц — просто разговор о вашем бизнесе.',
  },
  {
    title: 'Анализ ниши',
    description: 'Смотрим конкурентов и аудиторию, чтобы понять, какой результат вам нужен, а не просто «что сделать».',
  },
  {
    title: 'Предложение и договор',
    description: 'Конкретный план: что делаем, сроки, стоимость. Фиксируем в договоре, делим оплату на этапы.',
  },
  {
    title: 'Дизайн и разработка',
    description: 'Показываем прогресс каждые несколько дней. Правки на каждом этапе включены в стоимость.',
  },
  {
    title: 'Запуск и поддержка',
    description: 'Публикуем, подключаем аналитику, передаём доступы. Остаёмся на связи для доработок.',
  },
]

export default function Process() {
  return (
    <section className="section bg-surface" id="process">
      <div className="container">
        <SectionHeading
          badge="Как работаем"
          title="Никакой магии — только процесс"
          subtitle="Прозрачно на каждом этапе. Вы всегда знаете, что происходит и сколько осталось."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.07} className="card rounded-2xl p-6 flex flex-col">
              <span className="w-10 h-10 rounded-xl flex items-center justify-center font-mono text-sm font-bold bg-accent text-white mb-5">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-base font-bold text-fg mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
