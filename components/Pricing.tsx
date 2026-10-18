import { Check, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const PLANS = [
  {
    name: 'Лендинг',
    price: 'от 30 000 ₽',
    term: '5–7 дней',
    description: 'Для запуска рекламы, нового продукта или услуги.',
    features: [
      'Структура и продающие тексты',
      'Уникальный дизайн под нишу',
      'Адаптив под телефоны',
      'Заявки сразу в Telegram',
      'Яндекс.Метрика и цели',
      'Домен, хостинг, SSL под ключ',
    ],
    cta: 'Хочу лендинг',
  },
  {
    name: 'Сайт или магазин',
    price: 'от 120 000 ₽',
    term: '3–4 недели',
    description: 'Полноценный сайт компании или интернет-магазин.',
    features: [
      'Всё из пакета «Лендинг»',
      'До 10 страниц или каталог',
      'Корзина и онлайн-оплата',
      'Базовое SEO и скорость',
      'Интеграция с CRM',
      'Обучение работе с сайтом',
    ],
    cta: 'Обсудить сайт',
    featured: true,
  },
  {
    name: 'Боты и автоматизация',
    price: 'Индивидуально',
    term: 'после созвона',
    description: 'Telegram-боты, CRM, связка сервисов между собой.',
    features: [
      'Разбор текущих процессов',
      'Telegram-бот под сценарий',
      'Настройка amoCRM / Bitrix24',
      'Интеграции и вебхуки',
      'Уведомления и отчёты',
      'Поддержка после запуска',
    ],
    cta: 'Обсудить задачу',
  },
]

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <SectionHeading
          badge="Цены"
          title="Понятная стоимость"
          subtitle="Точную цену называем после короткого созвона и фиксируем в договоре — без доплат по ходу работы."
        />

        <div className="grid lg:grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch">
          {PLANS.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 0.07}
              className={`relative rounded-2xl p-6 md:p-8 flex flex-col ${
                plan.featured
                  ? 'bg-card border-2 border-accent shadow-[0_20px_60px_-20px_rgba(37,99,235,0.35)]'
                  : 'card'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold bg-accent text-white">
                  Оптимально для бизнеса
                </span>
              )}
              <h3 className="text-lg font-bold text-fg mb-1">{plan.name}</h3>
              <p className="text-sm text-muted mb-5">{plan.description}</p>
              <div className="mb-1 text-3xl font-bold tracking-tight text-fg">{plan.price}</div>
              <div className="text-sm text-subtle mb-6">Срок: {plan.term}</div>

              <ul className="flex flex-col gap-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-fg">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-accent-fg" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`mt-auto w-full ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}>
                {plan.cta}
                <ArrowRight size={16} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
