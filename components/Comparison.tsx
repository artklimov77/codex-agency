import { Check, Minus, X } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

type Mark = 'yes' | 'no' | 'partial'

const ROWS: { label: string; codex: Mark; agency: Mark; freelancer: Mark }[] = [
  { label: 'Общение напрямую с разработчиком', codex: 'yes', agency: 'no', freelancer: 'yes' },
  { label: 'Договор и закрывающие документы', codex: 'yes', agency: 'yes', freelancer: 'partial' },
  { label: 'Цена и сроки фиксируются заранее', codex: 'yes', agency: 'yes', freelancer: 'no' },
  { label: 'Дизайн под нишу, а не шаблон', codex: 'yes', agency: 'yes', freelancer: 'partial' },
  { label: 'Без наценки на офис и отдел продаж', codex: 'yes', agency: 'no', freelancer: 'yes' },
  { label: 'Поддержка после запуска', codex: 'yes', agency: 'yes', freelancer: 'partial' },
]

function MarkIcon({ mark }: { mark: Mark }) {
  if (mark === 'yes')
    return (
      <span className="inline-flex w-7 h-7 rounded-full items-center justify-center bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
        <Check size={16} strokeWidth={2.5} />
      </span>
    )
  if (mark === 'partial')
    return (
      <span className="inline-flex w-7 h-7 rounded-full items-center justify-center bg-amber-500/15 text-amber-600 dark:text-amber-400">
        <Minus size={16} strokeWidth={2.5} />
      </span>
    )
  return (
    <span className="inline-flex w-7 h-7 rounded-full items-center justify-center bg-surface text-subtle">
      <X size={15} strokeWidth={2.5} />
    </span>
  )
}

export default function Comparison() {
  return (
    <section className="section bg-surface" id="why">
      <div className="container">
        <SectionHeading
          badge="Почему Codex"
          title="Лучшее от студии и фрилансера"
          subtitle="Ответственность и процессы как в агентстве, скорость и цена — как у частного разработчика."
        />

        <Reveal className="max-w-4xl mx-auto card rounded-2xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-line">
                <th className="p-3 md:p-5 w-[40%] md:w-[46%]" />
                <th className="px-1 py-3 md:p-5 text-center bg-accent-soft">
                  <span className="text-[13px] md:text-base font-bold text-accent-fg">Codex</span>
                </th>
                <th className="px-1 py-3 md:p-5 text-center text-[11px] md:text-sm font-semibold text-muted">
                  Агент&shy;ство
                </th>
                <th className="px-1 py-3 md:p-5 text-center text-[11px] md:text-sm font-semibold text-muted">
                  Фри&shy;лансер<span className="hidden sm:inline"> с биржи</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label} className="border-b border-line last:border-b-0">
                  <td className="p-3 md:p-5 text-[13px] md:text-[15px] leading-snug text-fg">{row.label}</td>
                  <td className="px-1 py-3 md:p-5 text-center bg-accent-soft">
                    <MarkIcon mark={row.codex} />
                  </td>
                  <td className="px-1 py-3 md:p-5 text-center">
                    <MarkIcon mark={row.agency} />
                  </td>
                  <td className="px-1 py-3 md:p-5 text-center">
                    <MarkIcon mark={row.freelancer} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  )
}
