import { MessageCircle, Phone } from 'lucide-react'

const NAV = [
  { label: 'Услуги', href: '#services' },
  { label: 'Кейсы', href: '#cases' },
  { label: 'Как работаем', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contact' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-2)' }}>
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4 w-fit">
              <span className="text-[11px] font-mono text-blue-400 opacity-70" style={{ letterSpacing: 2 }}>
                &lt;/&gt;
              </span>
              <span className="text-xl font-bold text-white">Codex</span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--text-2)' }}>
              Цифровые системы для бизнеса. Не сайты — инструменты роста.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-sm font-semibold text-white mb-4">Навигация</p>
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

          {/* Contacts */}
          <div>
            <p className="text-sm font-semibold text-white mb-4">Контакты</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://t.me/YOUR_TELEGRAM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors hover:text-white"
                style={{ color: 'var(--text-2)' }}
              >
                <MessageCircle size={16} className="text-blue-400" />
                @codex_agency
              </a>
              <a
                href="tel:+7XXXXXXXXXX"
                className="flex items-center gap-3 text-sm transition-colors hover:text-white"
                style={{ color: 'var(--text-2)' }}
              >
                <Phone size={16} className="text-blue-400" />
                +7 (XXX) XXX-XX-XX
              </a>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-sm" style={{ color: 'var(--text-3)' }}>
            © {new Date().getFullYear()} Codex. Все права защищены.
          </p>
          <p className="text-xs" style={{ color: 'var(--text-3)' }}>
            ИП / ООО · ИНН ХXXXXXXXXX
          </p>
        </div>
      </div>
    </footer>
  )
}
