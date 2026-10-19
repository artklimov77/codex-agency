export default function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="/" className={`flex items-center gap-2.5 w-fit ${className}`} aria-label="RuneWorks — на главную">
      <span className="w-9 h-9 rounded-[11px] bg-accent-soft text-accent-fg flex items-center justify-center flex-shrink-0">
        <svg width="22" height="22" viewBox="0 0 44 44" fill="none" aria-hidden="true">
          <path
            d="M22 10 L32 16 L32 28 L22 34 L12 28 L12 16 Z"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <circle cx="22" cy="22" r="3.4" fill="currentColor" />
        </svg>
      </span>
      <span className="text-xl font-bold tracking-tight">
        <span className="text-fg">Rune</span>
        <span className="text-accent-fg">Works</span>
      </span>
    </a>
  )
}
