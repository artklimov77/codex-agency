import { MousePointerClick, LayoutTemplate, ShoppingBag, Bot, Workflow, Wrench } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const SERVICES = [
  {
    icon: MousePointerClick,
    title: 'Лендинги',
    description:
      'Одностраничный сайт под рекламу или запуск продукта: структура, тексты, дизайн и форма заявок прямо в Telegram.',
    tags: ['Квиз', 'Заявки в Telegram', 'Метрика'],
  },
  {
    icon: LayoutTemplate,
    title: 'Сайты компаний',
    description:
      'Многостраничный сайт с услугами, портфолио и контактами. Быстро грузится, хорошо индексируется, легко дополнять.',
    tags: ['SEO', 'Адаптив', 'Блог'],
  },
  {
    icon: ShoppingBag,
    title: 'Интернет-магазины',
    description:
      'Каталог, корзина, онлайн-оплата и уведомления о заказах. Для небольших и средних каталогов.',
    tags: ['Каталог', 'Оплата', 'Доставка'],
  },
  {
    icon: Bot,
    title: 'Telegram-боты',
    description:
      'Запись клиентов, приём заявок, ответы на частые вопросы, рассылки. Работают 24/7 вместо администратора.',
    tags: ['Запись', 'Оплата', 'Рассылки'],
  },
  {
    icon: Workflow,
    title: 'CRM и интеграции',
    description:
      'Связываем сайт, CRM, таблицы и мессенджеры — заявки не теряются и не переносятся руками.',
    tags: ['amoCRM', 'Bitrix24', 'Google Sheets'],
  },
  {
    icon: Wrench,
    title: 'Поддержка и доработка',
    description:
      'Берём на поддержку существующие сайты: исправим ошибки, ускорим загрузку, добавим новые функции.',
    tags: ['Ускорение', 'Правки', 'Хостинг'],
  },
]

export default function Services() {
  return (
    <section className="section bg-surface" id="services">
      <div className="container">
        <SectionHeading
          badge="Услуги"
          title="Что мы делаем"
          subtitle="Не «сайт ради сайта», а инструменты, которые решают конкретную задачу: привести заявку, принять заказ, снять рутину."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon
            return (
              <Reveal key={svc.title} delay={i * 0.05} className="card rounded-2xl p-6 md:p-7 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-accent-soft text-accent-fg">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-fg mb-2">{svc.title}</h3>
                <p className="text-sm leading-relaxed mb-5 text-muted">{svc.description}</p>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-surface border border-line text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
