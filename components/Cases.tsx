import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const WORKS = [
  {
    image: '/portfolio-restaurant.jpg',
    name: 'Veranda',
    niche: 'Ресторан',
    title: 'Лендинг авторского ресторана',
    text: 'Премиальная подача, бронирование столов, меню и отзывы с Яндекс Карт.',
    accent: '#D4A64A',
  },
  {
    image: '/portfolio-b2b.jpg',
    name: 'Nexus',
    niche: 'B2B / SaaS',
    title: 'Сайт B2B-сервиса',
    text: 'Строгий корпоративный стиль, запрос демо, блок клиентов и метрик.',
    accent: '#3B82F6',
  },
  {
    image: '/portfolio-fitness.jpg',
    name: 'IronFit',
    niche: 'Фитнес',
    title: 'Сайт фитнес-клуба',
    text: 'Энергичный дизайн, расписание, тренеры и запись на пробную неделю.',
    accent: '#A3E635',
  },
  {
    image: '/portfolio-realty.jpg',
    name: 'Metropolitan',
    niche: 'Недвижимость',
    title: 'Агентство недвижимости',
    text: 'Поиск по объектам с фильтрами, ипотечный блок, подбор под запрос.',
    accent: '#C9A86A',
  },
  {
    image: '/portfolio-shop.jpg',
    name: 'Velour',
    niche: 'E-commerce',
    title: 'Интернет-магазин одежды',
    text: 'Каталог, акции, корзина и быстрая доставка — fashion-подача.',
    accent: '#EC4899',
  },
]

export default function Cases() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <SectionHeading
          badge="Портфолио"
          title="Дизайн под нишу, а не шаблон"
          subtitle="Концепты, которые мы разработали для разных отраслей. Каждый проект начинается с анализа ниши и конкурентов — поэтому сайт ресторана не похож на сайт B2B-сервиса."
        />

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {WORKS.map((w, i) => (
            <Reveal
              key={w.name}
              delay={i * 0.05}
              className={`group card rounded-2xl overflow-hidden ${i === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className={`relative overflow-hidden bg-black ${i === 0 ? 'aspect-[16/10] md:aspect-[16/8]' : 'aspect-[16/10]'}`}>
                <Image
                  src={w.image}
                  alt={`${w.title} — концепт Codex`}
                  fill
                  sizes={i === 0 ? '(min-width: 1200px) 1136px, 100vw' : '(min-width: 768px) 50vw, 100vw'}
                  className="object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: w.accent }} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-subtle">
                    {w.name} · {w.niche}
                  </span>
                  <span className="ml-auto text-[11px] font-medium px-2 py-0.5 rounded-full border border-line text-subtle">
                    концепт
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-fg mb-1.5">{w.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-10">
          <a href="#contact" className="btn-secondary">
            Хочу такой же уровень
            <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
