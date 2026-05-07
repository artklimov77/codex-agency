import { MessageCircle, Phone, ArrowUpRight } from 'lucide-react'

const NAV = [
  { label: 'Услуги', href: '#services' },
  { label: 'Кейсы', href: '#cases' },
  { label: 'Как работаем', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contact' },
]

const SERVICES = [
  'Лендинг и сайт-визитка',
  'Интернет-магазин',
  'CRM и автоматизация',
  'Корпоративный портал',
  'Telegram-боты',
  'Аудит и консультация',
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>

      {/* CTA-полоса */}
      <div
        className="relative overflow-hidden"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 100%, rgba(37,99,235,0.12) 0%, transparent 65%)',
          }}
        />
        <div className="container py-16 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-xs font-mono mb-3" style={{ color: 'var(--accent)', letterSpacing: 3 }}>
                ГОТОВЫ НАЧАТЬ?
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Обсудим ваш проект
              </h3>
              <p className="mt-2 text-base" style={{ color: 'var(--text-2)' }}>
                Отвечаем в течение 30 минут в рабочее время
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a
                href="https://t.me/codex_business"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={17} />
                Написать в Telegram
              </a>
              <a href="tel:+79600930054" className="btn-secondary">
                <Phone size={17} />
                +7 (960) 093-00-54
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Основной блок */}
      <div className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-5 w-fit">
              <span
                className="text-[13px] font-mono text-blue-400 opacity-70"
                style={{ letterSpacing: 2 }}
              >
                &lt;/&gt;
              </span>
              <span className="text-2xl font-bold text-white">Codex</span>
            </a>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-2)' }}>
              Цифровые системы для бизнеса.<br />
              Не сайты — инструменты роста.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://t.me/codex_business"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:text-white group"
                style={{ color: 'var(--text-2)' }}
              >
                <MessageCircle size={15} className="text-blue-400 flex-shrink-0" />
                @codex_business
                <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-60 transition-opacity" />
              </a>
              <a
                href="tel:+79600930054"
                className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                style={{ color: 'var(--text-2)' }}
              >
                <Phone size={15} className="text-blue-400 flex-shrink-0" />
                +7 (960) 093-00-54
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold text-white uppercase mb-5" style={{ letterSpacing: 2 }}>
              Навигация
            </p>
            <ul className="flex flex-col gap-3">
              {NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'var(--text-2)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold text-white uppercase mb-5" style={{ letterSpacing: 2 }}>
              Услуги
            </p>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'var(--text-2)' }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="text-xs font-semibold text-white uppercase mb-5" style={{ letterSpacing: 2 }}>
              О компании
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <span className="text-sm" style={{ color: 'var(--text-2)' }}>
                  Работаем по всей России
                </span>
              </li>
              <li>
                <span className="text-sm" style={{ color: 'var(--text-2)' }}>
                  Удалённо и на выезде
                </span>
              </li>
              <li>
                <span className="text-sm" style={{ color: 'var(--text-2)' }}>
                  Договор и закрывающие документы
                </span>
              </li>
              <li>
                <span className="text-sm" style={{ color: 'var(--text-2)' }}>
                  Гарантия на все проекты
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-sm" style={{ color: 'var(--text-3)' }}>
            © {new Date().getFullYear()} Codex. Все права защищены.
          </p>
          <p className="text-xs" style={{ color: 'var(--text-3)' }}>
            Работаем как самозанятый / ИП
          </p>
        </div>
      </div>
    </footer>
  )
}
