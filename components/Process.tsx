import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

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
    <section className="section bg-surface" id="process">
      <div className="container">
        <SectionHeading
          badge="Как мы работаем"
          title="Никакой магии — только процесс"
          subtitle="Прозрачная работа на каждом этапе. Вы знаете, что происходит, и держите контроль."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.07} className="card rounded-2xl p-6 flex flex-col">
              <span className="w-10 h-10 rounded-xl flex items-center justify-center font-mono text-sm font-bold bg-accent text-white mb-5">
                {step.num}
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
