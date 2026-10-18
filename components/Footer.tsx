import { MessageCircle, Phone } from 'lucide-react'
import Logo from './Logo'
import { CONTACTS, NAV_LINKS } from './site'

const SERVICES = ['Лендинги', 'Сайты компаний', 'Интернет-магазины', 'Telegram-боты', 'CRM и интеграции']

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-x-6 gap-y-10">
          <div className="col-span-2 lg:col-span-1">
            <Logo className="mb-4" />
            <p className="text-sm leading-relaxed text-muted max-w-xs">
              Студия веб-разработки. Сайты, боты и автоматизация, которые приводят клиентов.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-subtle mb-4">Разделы</p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted hover:text-fg transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-subtle mb-4">Услуги</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-subtle mb-4">Контакты</p>
            <div className="flex flex-col gap-3">
              <a
                href={CONTACTS.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-fg hover:text-accent-fg transition-colors"
              >
                <MessageCircle size={16} className="text-accent-fg" />
                {CONTACTS.telegram}
              </a>
              <a
                href={CONTACTS.phoneHref}
                className="flex items-center gap-2.5 text-sm text-fg hover:text-accent-fg transition-colors"
              >
                <Phone size={16} className="text-accent-fg" />
                {CONTACTS.phone}
              </a>
              <p className="text-sm text-muted">Работаем по всей России, удалённо</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-8 mt-10 border-t border-line">
          <p className="text-sm text-subtle">© {new Date().getFullYear()} Codex</p>
          <p className="text-xs text-subtle">Работаем официально: самозанятый / ИП</p>
        </div>
      </div>
    </footer>
  )
}
