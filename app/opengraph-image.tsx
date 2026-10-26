import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { OTHALA_PATH } from '@/components/Logo'

export const alt = 'RuneWorks — Цифровые системы для бизнеса'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const FS = 150
// JetBrains Mono: ascender 1.02em, descender 0.3em → at line-height 1 the baseline sits 0.14em above the box bottom.
const DESCENT = 0.14
// Satori renders the svg smaller than browsers do; scale it up to match the x-height, keeping the 1-char advance.
const RUNE_SCALE = 1.12
// Same optical nudge as .rw-o in globals.css.
const OPTICAL_SHIFT = 0.04

export default async function Image() {
  const dir = join(process.cwd(), 'assets/fonts')
  const [bold, medium, runic] = await Promise.all([
    readFile(join(dir, 'JetBrainsMono-Bold.ttf')),
    readFile(join(dir, 'JetBrainsMono-Medium.ttf')),
    readFile(join(dir, 'NotoSansRunic-Regular.ttf')),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#050508',
          backgroundImage: 'radial-gradient(circle at 78% 18%, rgba(37,99,235,0.22), transparent 55%)',
          padding: '0 88px 64px',
          fontFamily: 'JetBrains Mono',
          color: '#F1F1F8',
        }}
      >
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {/* Satori doesn't put an svg's bottom on the text baseline, so align box bottoms
              and lift the rune and caret by the font's descent below baseline at line-height 1. */}
          <div style={{ display: 'flex', alignItems: 'flex-end', fontSize: FS, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}>
            <span>runew</span>
            <svg
              width={FS * 0.57 * RUNE_SCALE}
              height={FS * 0.58 * RUNE_SCALE}
              viewBox="-1 -2 26 27"
              style={{
                marginBottom: FS * DESCENT,
                marginLeft: (FS * 0.57 * (1 - RUNE_SCALE)) / 2 + FS * OPTICAL_SHIFT,
                marginRight: (FS * 0.57 * (1 - RUNE_SCALE)) / 2 - FS * OPTICAL_SHIFT,
              }}
            >
              <path d={OTHALA_PATH} fill="none" stroke="#60A5FA" strokeWidth="4.4" />
            </svg>
            <span>rks</span>
            <div style={{ width: FS * 0.52, height: FS * 0.11, marginLeft: FS * 0.06, marginBottom: FS * DESCENT, background: '#60A5FA' }} />
          </div>
          <div style={{ display: 'flex', marginTop: 34, fontFamily: 'Noto Sans Runic', fontSize: 34, letterSpacing: '0.38em', color: '#4A5378' }}>
            ᚱᚢᚾᛖ᛫ᚹᛟᚱᚲᛊ
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #1E1E32',
            paddingTop: 32,
            fontSize: 28,
            fontWeight: 500,
            color: '#8C8CAE',
          }}
        >
          <span>Цифровые системы для бизнеса</span>
          <span style={{ color: '#F1F1F8' }}>runeworks.ru</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'JetBrains Mono', data: bold, weight: 700, style: 'normal' },
        { name: 'JetBrains Mono', data: medium, weight: 500, style: 'normal' },
        { name: 'Noto Sans Runic', data: runic, weight: 400, style: 'normal' },
      ],
    }
  )
}
