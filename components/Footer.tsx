import { MessageCircle, Phone } from 'lucide-react'
import Logo from './Logo'
import { CONTACTS, NAV_LINKS } from './site'

const SERVICES = [
  'Лендинг и сайт-визитка',
  'Интернет-магазин',
  'CRM и автоматизация',
  'Корпоративный портал',
  'Telegram-боты',
  'Аудит и консультация',
]

const ABOUT = [
  'Работаем по всей России',
  'Удалённо и на выезде',
  'Договор и закрывающие документы',
  'Гарантия на все проекты',
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container py-12 md:py-14">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
          <div>
            <p className="text-xs font-mono font-semibold mb-3 text-accent-fg tracking-[0.2em]">ГОТОВЫ НАЧАТЬ?</p>
            <h3 className="text-[28px] md:text-4xl font-bold tracking-tight text-fg leading-tight">Обсудим ваш проект</h3>
            <p className="mt-2 text-base text-muted">Отвечаем в течение 30 минут в рабочее время</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a href={CONTACTS.telegramUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle size={17} />
              Написать в Telegram
            </a>
            <a href={CONTACTS.phoneHref} className="btn-secondary">
              <Phone size={17} />
              {CONTACTS.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            <div className="col-span-2 lg:col-span-1">
              <Logo className="mb-5" runes />
              <p className="text-sm leading-relaxed text-muted mb-5">
                Цифровые системы для бизнеса:
                <br />
                сайты, магазины, боты и автоматизация.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={CONTACTS.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-muted hover:text-fg transition-colors"
                >
                  <MessageCircle size={15} className="text-accent-fg flex-shrink-0" />
                  {CONTACTS.telegram}
                </a>
                <a href={CONTACTS.phoneHref} className="flex items-center gap-2.5 text-sm text-muted hover:text-fg transition-colors">
                  <Phone size={15} className="text-accent-fg flex-shrink-0" />
                  {CONTACTS.phone}
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-fg mb-4">Навигация</p>
              <ul className="flex flex-col gap-2.5">
                {[...NAV_LINKS, { label: 'Контакты', href: '#contact' }].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-muted hover:text-fg transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-fg mb-4">Услуги</p>
              <ul className="flex flex-col gap-2.5">
                {SERVICES.map((s) => (
                  <li key={s}>
                    <a href="#services" className="text-sm text-muted hover:text-fg transition-colors">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-fg mb-4">О компании</p>
              <ul className="flex flex-col gap-2.5">
                {ABOUT.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-8 mt-10 border-t border-line">
            <p className="text-sm text-subtle">© {new Date().getFullYear()} RuneWorks. Все права защищены.</p>
            <div className="flex items-center gap-4">
              <a href="/privacy" className="text-xs text-subtle hover:text-fg transition-colors">
                Политика данных
              </a>
              <span className="text-xs text-subtle">Работаем как самозанятый</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
