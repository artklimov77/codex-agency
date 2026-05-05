import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Codex — Цифровые системы для бизнеса',
  description:
    'Codex разрабатывает сайты, CRM-системы, автоматизацию и корпоративные решения. Не просто сайт — система, которая приносит клиентов.',
  keywords: 'разработка сайтов, CRM, автоматизация бизнеса, веб-разработка, IT-агентство',
  openGraph: {
    title: 'Codex — Цифровые системы для бизнеса',
    description: 'Вашему бизнесу не нужен сайт. Ему нужны клиенты.',
    type: 'website',
    locale: 'ru_RU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
