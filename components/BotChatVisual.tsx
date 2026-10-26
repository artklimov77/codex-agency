// Stylized Telegram booking dialog — used where a bot case has no screenshot.
// Pure markup (no client hooks) so it renders inside server components.

function Bubble({ children, side = 'in' }: { children: React.ReactNode; side?: 'in' | 'out' }) {
  const out = side === 'out'
  return (
    <div className={`flex ${out ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] px-3 py-2 text-[13px] leading-snug shadow-sm ${
          out
            ? 'bg-[#EFFDDE] text-[#1A1A1A] rounded-2xl rounded-br-md'
            : 'bg-white text-[#1A1A1A] rounded-2xl rounded-bl-md'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default function BotChatVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2AABEE] to-[#1C8ADB] px-4">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(#fff 1.2px, transparent 1.2px)', backgroundSize: '18px 18px' }}
      />
      <div className="relative w-full max-w-[300px] rounded-[20px] bg-[#C8E3F3] shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white/90 border-b border-black/5">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2AABEE] to-[#1C8ADB] flex items-center justify-center text-white text-[13px] font-bold">
            Z
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[13px] font-semibold text-[#1A1A1A]">Запись к мастеру</span>
            <span className="text-[11px] text-[#229ED9]">бот · онлайн</span>
          </span>
        </div>

        <div className="flex flex-col gap-2 p-3">
          <Bubble>Здравствуйте! На какую услугу записать?</Bubble>
          <Bubble side="out">Стрижка и укладка</Bubble>
          <Bubble>
            Свободное время на четверг:
            <span className="mt-2 flex flex-wrap gap-1.5">
              {['10:00', '13:30', '16:00'].map((t) => (
                <span
                  key={t}
                  className={`px-2.5 py-1 rounded-lg text-[12px] font-semibold ${
                    t === '13:30' ? 'bg-[#229ED9] text-white' : 'bg-[#E8F3FB] text-[#229ED9]'
                  }`}
                >
                  {t}
                </span>
              ))}
            </span>
          </Bubble>
          <Bubble side="out">13:30</Bubble>
          <Bubble>Готово — записал на чт, 13:30. Напомню за час.</Bubble>
        </div>
      </div>
    </div>
  )
}
