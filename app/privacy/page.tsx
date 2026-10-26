import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CONTACTS } from '@/components/site'

export const metadata: Metadata = {
  title: 'Политика обработки персональных данных — RuneWorks',
  description: 'Как RuneWorks обрабатывает и защищает персональные данные, оставленные через формы на сайте.',
  robots: { index: true, follow: true },
}

const UPDATED = '25 октября 2026 г.'

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-lg md:text-xl font-bold text-fg">
        <span className="text-accent-fg font-mono mr-2">{n}</span>
        {title}
      </h2>
      <div className="flex flex-col gap-3 text-sm md:text-base leading-relaxed text-muted">{children}</div>
    </section>
  )
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-6 md:pt-36 md:pb-10">
          <div className="container max-w-3xl">
            <span className="badge mb-5">Правовая информация</span>
            <h1 className="text-[30px] leading-[1.12] md:text-5xl font-bold tracking-tight text-fg mb-3">
              Политика обработки персональных данных
            </h1>
            <p className="text-sm text-subtle">Обновлено: {UPDATED}</p>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container max-w-3xl flex flex-col gap-8">
            <Section n="1" title="Общие положения">
              <p>
                Настоящая Политика определяет порядок обработки и защиты персональных данных пользователей
                сайта runeworks.ru (далее — «Сайт»). Политика подготовлена в соответствии с Федеральным
                законом от 27.07.2006 № 152-ФЗ «О персональных данных».
              </p>
              <p>
                Оператор персональных данных: самозанятый{' '}
                <span className="text-fg font-medium">[укажите ФИО и ИНН]</span> (далее — «Оператор»).
                Используя формы на Сайте, вы подтверждаете согласие с условиями этой Политики.
              </p>
            </Section>

            <Section n="2" title="Какие данные мы собираем">
              <p>Через формы обратной связи на Сайте Оператор может получать:</p>
              <ul className="flex flex-col gap-1.5 list-disc pl-5">
                <li>имя, которое вы указываете;</li>
                <li>контакт для связи — номер телефона или имя пользователя в Telegram;</li>
                <li>текст сообщения или описание задачи, если вы его оставляете.</li>
              </ul>
              <p>
                Специальные категории персональных данных Оператор не собирает. Указывать данные третьих лиц
                без их согласия не нужно.
              </p>
            </Section>

            <Section n="3" title="Зачем мы обрабатываем данные">
              <p>Данные используются только для того, чтобы:</p>
              <ul className="flex flex-col gap-1.5 list-disc pl-5">
                <li>связаться с вами по оставленной заявке и ответить на вопрос;</li>
                <li>обсудить и выполнить проект, если вы этого захотите;</li>
                <li>подготовить документы по оказанию услуг.</li>
              </ul>
              <p>Данные не используются для рассылок и не передаются третьим лицам для их целей.</p>
            </Section>

            <Section n="4" title="Правовые основания и срок хранения">
              <p>
                Основание обработки — ваше согласие, которое вы даёте при отправке формы, а также исполнение
                договора, если он заключается. Данные хранятся не дольше, чем нужно для указанных целей, после
                чего удаляются. Отозвать согласие можно в любой момент, написав Оператору.
              </p>
            </Section>

            <Section n="5" title="Передача данных">
              <p>
                Данные из форм поступают Оператору по защищённым каналам (в том числе через Telegram) и
                обрабатываются им лично. Оператор не продаёт и не передаёт ваши данные третьим лицам, кроме
                случаев, прямо предусмотренных законом.
              </p>
            </Section>

            <Section n="6" title="Файлы cookie и аналитика">
              <p>
                Сайт может использовать файлы cookie и сервисы веб-аналитики для оценки посещаемости в
                обезличенном виде. Эти данные не позволяют идентифицировать вас лично. Вы можете отключить
                cookie в настройках браузера.
              </p>
            </Section>

            <Section n="7" title="Ваши права">
              <p>Вы вправе:</p>
              <ul className="flex flex-col gap-1.5 list-disc pl-5">
                <li>запросить, какие ваши данные обрабатываются;</li>
                <li>потребовать их уточнения, блокировки или удаления;</li>
                <li>отозвать согласие на обработку.</li>
              </ul>
              <p>Для этого напишите Оператору — запрос рассмотрим в срок, установленный законом.</p>
            </Section>

            <Section n="8" title="Контакты">
              <p>По вопросам обработки персональных данных свяжитесь с Оператором:</p>
              <ul className="flex flex-col gap-1.5">
                <li>
                  Telegram:{' '}
                  <a href={CONTACTS.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-accent-fg font-medium">
                    {CONTACTS.telegram}
                  </a>
                </li>
                <li>
                  Телефон:{' '}
                  <a href={CONTACTS.phoneHref} className="text-accent-fg font-medium">
                    {CONTACTS.phone}
                  </a>
                </li>
              </ul>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
