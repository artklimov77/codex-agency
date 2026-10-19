'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import { NAV_LINKS } from './site'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || menuOpen

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        solid ? 'border-line backdrop-blur-xl' : 'border-transparent'
      }`}
      style={{ background: solid ? 'var(--header-bg)' : 'transparent' }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-[72px] gap-4">
          <Logo />

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-fg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="/#contact" className="hidden lg:inline-flex btn-primary text-sm !py-2.5 !px-5">
              Обсудить проект
            </a>
            <button
              type="button"
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center border border-line bg-card text-fg"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-line"
          >
            <nav className="container py-4 flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between py-3.5 text-base font-medium text-fg border-b border-line last:border-b-0"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                  <ArrowRight size={16} className="text-subtle" />
                </a>
              ))}
              <a
                href="/#contact"
                className="btn-primary w-full mt-4 mb-2"
                onClick={() => setMenuOpen(false)}
              >
                Обсудить проект
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
