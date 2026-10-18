'use client'

import { useState } from 'react'
import { Send, MessageCircle, Phone, CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal'
import { CONTACTS } from './site'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', contact: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.contact) return
    setState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setState('success')
        setForm({ name: '', contact: '', message: '' })
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  return (
    <section className="section !pt-0 md:!pt-0" id="contact">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden border border-line bg-card shadow-card">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 0% 0%, var(--hero-glow) 0%, transparent 55%)' }}
          />

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 p-6 sm:p-10 lg:p-14">
            <Reveal>
              <span className="badge mb-5">Связаться с нами</span>
              <h2 className="text-[32px] leading-[1.1] md:text-5xl font-bold tracking-tight text-fg mb-4">
                Расскажите
                <br />
                о задаче
              </h2>
              <p className="text-base md:text-lg mb-8 leading-relaxed text-muted">
                Опишите, что хотите получить — ответим в течение 30 минут и предложим конкретное решение.
                Без навязчивых продаж.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={CONTACTS.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-line bg-page hover:border-line-strong transition-colors"
                >
                  <span className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-accent-soft text-accent-fg">
                    <MessageCircle size={22} />
                  </span>
                  <span>
                    <span className="block font-semibold text-fg text-sm">Telegram</span>
                    <span className="block text-sm text-muted">{CONTACTS.telegram}</span>
                  </span>
                </a>
                <a
                  href={CONTACTS.phoneHref}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-line bg-page hover:border-line-strong transition-colors"
                >
                  <span className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-accent-soft text-accent-fg">
                    <Phone size={22} />
                  </span>
                  <span>
                    <span className="block font-semibold text-fg text-sm">Телефон</span>
                    <span className="block text-sm text-muted">{CONTACTS.phone}</span>
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              {state === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-emerald-500/15 text-emerald-500">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-fg">Отправлено!</h3>
                  <p className="text-muted">Ответим в ближайшие 30 минут.</p>
                  <button type="button" onClick={() => setState('idle')} className="btn-secondary mt-4">
                    Отправить ещё
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-fg">
                      Ваше имя *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Иван Иванов"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="field"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-field" className="block text-sm font-medium mb-2 text-fg">
                      Телефон или Telegram *
                    </label>
                    <input
                      id="contact-field"
                      type="text"
                      required
                      placeholder="+7 (900) 000-00-00 или @username"
                      value={form.contact}
                      onChange={(e) => setForm({ ...form, contact: e.target.value })}
                      className="field"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-fg">
                      Опишите задачу
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Нужен сайт для ресторана, онлайн-запись, интеграция с меню..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="field resize-none"
                    />
                  </div>

                  {state === 'error' && (
                    <p className="text-sm text-red-500">
                      Что-то пошло не так. Напишите нам напрямую в Telegram.
                    </p>
                  )}

                  <button type="submit" disabled={state === 'loading'} className="btn-primary w-full mt-1">
                    {state === 'loading' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Отправляем...
                      </>
                    ) : (
                      <>
                        Отправить заявку
                        <Send size={16} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-subtle">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                  </p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
