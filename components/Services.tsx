'use client'

import { motion } from 'framer-motion'
import {
  MousePointerClick,
  BarChart3,
  Workflow,
  Server,
  ShoppingBag,
  Search,
} from 'lucide-react'

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-5">Что мы делаем</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Решаем задачи бизнеса
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-2)' }}>
            Не «разработка сайтов», а конкретные инструменты,
            которые решают конкретные проблемы.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card rounded-2xl p-7 group hover:-translate-y-1"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors"
                  style={{ background: 'var(--accent-soft)', color: '#60A5FA' }}
                >
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{svc.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-2)' }}>
                  {svc.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        background: 'var(--bg-2)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-2)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
