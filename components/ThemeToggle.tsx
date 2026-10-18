'use client'

import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark'
    if (next === 'dark') root.dataset.theme = 'dark'
    else delete root.dataset.theme
    try {
      localStorage.setItem('theme', next)
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Переключить тему"
      title="Светлая / тёмная тема"
      className="w-10 h-10 rounded-xl flex items-center justify-center border border-line bg-card text-muted hover:text-fg hover:border-line-strong transition-colors"
    >
      <Moon size={18} className="dark:hidden" />
      <Sun size={18} className="hidden dark:block" />
    </button>
  )
}
