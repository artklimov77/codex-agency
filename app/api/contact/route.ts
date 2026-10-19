import { NextResponse } from 'next/server'

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '')

export async function POST(req: Request) {
  const body = await req.json().catch(() => null)
  const name = clean(body?.name, 100)
  const contact = clean(body?.contact, 100)
  const message = clean(body?.message, 2000)

  if (!name || !contact) {
    return NextResponse.json({ error: 'Name and contact are required' }, { status: 400 })
  }

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    return NextResponse.json({ error: 'Telegram not configured' }, { status: 500 })
  }

  const text = [
    '🔔 <b>Новая заявка с сайта RuneWorks</b>',
    '',
    `👤 <b>Имя:</b> ${escapeHtml(name)}`,
    `📱 <b>Контакт:</b> ${escapeHtml(contact)}`,
    message ? `💬 <b>Задача:</b> ${escapeHtml(message)}` : null,
    '',
    `🕐 ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}`,
  ]
    .filter((line) => line !== null)
    .join('\n')

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Telegram send failed' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
