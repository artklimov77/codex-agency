import { MousePointerClick, BarChart3, Workflow, Server, ShoppingBag, Search } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const SERVICES = [
  {
    icon: MousePointerClick,
    title: 'Сайт-машина продаж',
    description:
      'Не визитка в интернете, а инструмент привлечения клиентов. Лендинги, корпоративные сайты и интернет-магазины с конверсией в заявки.',
    tags: ['Лендинг', 'Корп. сайт', 'Интернет-магазин'],
  },
  {
    icon: BarChart3,
    title: 'CRM и воронка продаж',
    description:
      'Система учёта клиентов, которая не теряет ни одну заявку. Настройка Bitrix24, AmoCRM или разработка с нуля под вашу специфику.',
    tags: ['Bitrix24', 'AmoCRM', 'Custom CRM'],
  },
  {
    icon: Workflow,
    title: 'Автоматизация процессов',
    description:
      'Убираем рутину: боты, интеграции между сервисами, автоматические уведомления, синхронизация данных. Люди занимаются людьми, не таблицами.',
    tags: ['Боты', 'Интеграции', 'Уведомления'],
  },
  {
    icon: Server,
    title: 'Корпоративные системы',
    description:
      'Внутренние порталы, ERP, системы управления проектами и документооборотом. Для компаний, которым нужен серьёзный инструмент.',
    tags: ['ERP', 'Порталы', 'Документооборот'],
  },
  {
    icon: ShoppingBag,
    title: 'Онлайн-сервисы',
    description:
      'Системы доставки, онлайн-бронирования, личные кабинеты, маркетплейсы. Любой сценарий взаимодействия с вашим клиентом.',
    tags: ['Бронирование', 'Доставка', 'Маркетплейс'],
  },
  {
    icon: Search,
    title: 'Аудит и стратегия',
    description:
      'Разбираем текущую цифровую инфраструктуру, ищем точки роста и даём конкретную дорожную карту. Без воды, только действия.',
    tags: ['Аудит', 'Стратегия', 'Дорожная карта'],
  },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeading
          badge="Что мы делаем"
          title="Решаем задачи бизнеса"
          subtitle={
            <>
              Не «разработка сайтов», а конкретные инструменты,
              <br className="hidden sm:block" /> которые решают конкретные проблемы.
            </>
          }
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon
            return (
              <Reveal key={svc.title} delay={i * 0.05} className="card rounded-2xl p-6 md:p-7 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-accent-soft text-accent-fg">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-fg mb-3">{svc.title}</h3>
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
