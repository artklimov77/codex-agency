import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.runeworks.ru'),
  title: 'RuneWorks — Цифровые системы для бизнеса',
  description:
    'RuneWorks разрабатывает сайты, CRM-системы, автоматизацию и корпоративные решения. Не просто сайт — система, которая приносит клиентов.',
  keywords: 'разработка сайтов, CRM, автоматизация бизнеса, веб-разработка, IT-агентство',
  openGraph: {
    title: 'RuneWorks — Цифровые системы для бизнеса',
    description: 'Вашему бизнесу не нужен сайт. Ему нужны клиенты.',
    url: 'https://www.runeworks.ru',
    siteName: 'RuneWorks',
    type: 'website',
    locale: 'ru_RU',
    images: [{ url: '/kwork-landing.jpg', width: 690, height: 518 }],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F6F7FB' },
    { media: '(prefers-color-scheme: dark)', color: '#050508' },
  ],
}

// Runs before paint so a saved dark theme doesn't flash light first.
const themeScript = `try{if(localStorage.getItem('theme')==='dark')document.documentElement.dataset.theme='dark'}catch(e){}`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
