export default function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-2 w-fit ${className}`} aria-label="Codex — на главную">
      <span className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center font-mono text-[11px] font-bold tracking-tight">
        &lt;/&gt;
      </span>
      <span className="text-xl font-bold tracking-tight text-fg">Codex</span>
    </a>
  )
}
