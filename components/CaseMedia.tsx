import Image from 'next/image'
import BotChatVisual from './BotChatVisual'
import type { CaseStudy } from './portfolio-data'

type Props = {
  c: Pick<CaseStudy, 'image' | 'visual' | 'tagline'>
  sizes: string
  priority?: boolean
  /** Adds the hover zoom used on clickable cards. */
  zoom?: boolean
}

export default function CaseMedia({ c, sizes, priority, zoom }: Props) {
  if (c.visual === 'bot-booking') return <BotChatVisual />
  if (!c.image) return null
  return (
    <Image
      src={c.image}
      alt={c.tagline}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover object-top ${zoom ? 'transition-transform duration-700 group-hover:scale-[1.03]' : ''}`}
    />
  )
}
