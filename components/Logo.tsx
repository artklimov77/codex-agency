type LogoProps = {
  className?: string
  /** Runic transliteration line under the wordmark. */
  runes?: boolean
  /** Endless terminal loop: types, waits, backspaces, repeats. */
  typing?: boolean
}

export const OTHALA_PATH = 'M12 1.5L20 9.5L5.5 24M12 1.5L4 9.5L18.5 24'

export function Othala({ className = '' }: { className?: string }) {
  return (
    <svg className={`rw-o ${className}`} viewBox="-1 -2 26 27" aria-hidden="true">
      <path d={OTHALA_PATH} fill="none" stroke="currentColor" strokeWidth="4.4" />
    </svg>
  )
}

export default function Logo({ className = '', runes = false, typing = false }: LogoProps) {
  return (
    <a
      href="/"
      aria-label="RuneWorks — на главную"
      className={`rw-logo inline-flex flex-col w-fit ${typing ? 'rw-logo--typing' : ''} ${className}`}
    >
      <span className="rw-word font-logo font-bold text-[21px] leading-none text-fg">
        <span className="rw-letters">
          runew
          <Othala />
          rks
        </span>
        <span className="rw-caret" aria-hidden="true" />
      </span>
      {runes && (
        <span className="font-runic mt-2.5 text-[11px] leading-none tracking-[0.38em] text-subtle" aria-hidden="true">
          ᚱᚢᚾᛖ᛫ᚹᛟᚱᚲᛊ
        </span>
      )}
    </a>
  )
}
