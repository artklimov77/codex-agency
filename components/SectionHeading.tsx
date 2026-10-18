import Reveal from './Reveal'

type Props = {
  badge: string
  title: React.ReactNode
  subtitle?: React.ReactNode
}

export default function SectionHeading({ badge, title, subtitle }: Props) {
  return (
    <Reveal className="text-center mb-12 md:mb-16">
      <span className="badge mb-5">{badge}</span>
      <h2 className="text-[32px] leading-[1.1] md:text-5xl font-bold tracking-tight text-fg mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg max-w-2xl mx-auto text-muted leading-relaxed">{subtitle}</p>
      )}
    </Reveal>
  )
}
