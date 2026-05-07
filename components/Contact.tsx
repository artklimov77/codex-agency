'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MessageCircle, Phone, CheckCircle2 } from 'lucide-react'

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
    <section className="section" id="contact">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.15) 0%, transparent 60%)',
            }}
          />
          <div
            className="absolute inset-0 bg-dot-grid pointer-events-none"
            style={{ opacity: 0.5 }}
          />

          <div
            className="relative"
            style={{ border: '1px solid var(--border)', borderRadius: 24, padding: '64px 32px' }}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="badge mb-6">Связаться с нами</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                  Расскажите
                  <br />
                  о задаче
                </h2>
                <p className="text-lg mb-10 leading-relaxed" style={{ color: 'var(--text-2)' }}>
                  Опишите, что хотите получить — ответим в течение 30 минут
                  и предложим конкретное решение. Без навязчивых продаж.
                </p>

                <div className="flex flex-col gap-4">
                  <a
                    href="https://t.me/codex_business"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-2xl group transition-all"
                    style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(37,99,235,0.12)', color: '#60A5FA' }}
                    >
                      <MessageCircle size={22} />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">Telegram</div>
                      <div className="text-sm" style={{ color: 'var(--text-2)' }}>
                        @codex_business
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+79600930054"
                    className="flex items-center gap-4 p-5 rounded-2xl group transition-all"
                    style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(37,99,235,0.12)', color: '#60A5FA' }}
                    >
                      <Phone size={22} />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">Телефон</div>
                      <div className="text-sm" style={{ color: 'var(--text-2)' }}>
                        +7 (960) 093-00-54
                      </div>
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* Right — form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {state === 'success' ? (
                  <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ background: 'rgba(16,185,129,0.12)', color: '#10B981' }}
                    >
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Отправлено!</h3>
                    <p style={{ color: 'var(--text-2)' }}>
                      Ответим в ближайшие 30 минут.
                    </p>
                    <button
                      onClick={() => setState('idle')}
                      className="btn-secondary mt-4"
                    >
                      Отправить ещё
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">
                        Ваше имя *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Иван Иванов"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-white placeholder:text-[var(--text-3)] outline-none transition-all text-sm"
                        style={{
                          background: 'var(--card)',
                          border: '1px solid var(--border)',
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">
                        Телефон или Telegram *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="+7 (900) 000-00-00 или @username"
                        value={form.contact}
                        onChange={(e) => setForm({ ...form, contact: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-white placeholder:text-[var(--text-3)] outline-none transition-all text-sm"
                        style={{
                          background: 'var(--card)',
                          border: '1px solid var(--border)',
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">
                        Опишите задачу
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Нужен сайт для ресторана, онлайн-запись, интеграция с меню..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-white placeholder:text-[var(--text-3)] outline-none transition-all text-sm resize-none"
                        style={{
                          background: 'var(--card)',
                          border: '1px solid var(--border)',
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                      />
                    </div>

                    {state === 'error' && (
                      <p className="text-sm text-red-400">
                        Что-то пошло не так. Напишите нам напрямую в Telegram.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={state === 'loading'}
                      className="btn-primary justify-center mt-2"
                    >
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

                    <p className="text-xs text-center" style={{ color: 'var(--text-3)' }}>
                      Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
