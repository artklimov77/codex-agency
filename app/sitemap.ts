import type { MetadataRoute } from 'next'
import { SERVICES } from '@/components/services-data'
import { PORTFOLIO } from '@/components/portfolio-data'

const BASE = 'https://www.runeworks.ru'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const stat = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority,
  })

  return [
    stat('', 1),
    stat('/uslugi', 0.8),
    stat('/ai', 0.8),
    stat('/portfolio', 0.8),
    stat('/privacy', 0.3),
    ...SERVICES.map((s) => stat(`/uslugi/${s.slug}`, 0.6)),
    ...PORTFOLIO.map((c) => stat(`/portfolio/${c.slug}`, 0.6)),
  ]
}
