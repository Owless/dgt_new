'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './privacy.module.css'

export default function PrivacyPage() {
  const [currentLang, setCurrentLang] = useState<'ru' | 'en'>('ru')

  const translations = {
    ru: {
      hero: {
        label: 'Privacy Policy',
        title: 'ПОЛИТИКА',
        titleAccent: 'КОНФИДЕНЦИАЛЬНОСТИ',
        description: 'Защита персональных данных и правила использования сайта',
        lastUpdated: 'Последнее обновление: 26 ноября 2024'
      },
      sections: {
        intro: {
          title: 'О нашем сайте',
          content: [
            'DGT — это презентационный сайт наших услуг по тюнингу премиальных автомобилей.',
            'Мы не собираем и не храним персональные данные посетителей на нашем сайте.',
            'Вся коммуникация происходит через внешние мессенджеры по вашему выбору.'
          ]
        },
        collection: {
          title: 'Сбор данных',
          content: [
            'Наш сайт не содержит форм обратной связи и не собирает персональные данные.',
            'Мы не запрашиваем и не храним:',
          ],
          list: [
            'Имена и контактные данные',
            'Адреса электронной почты',
            'Номера телефонов',
            'Платёжную информацию',
            'Геолокацию',
            'Любые другие персональные данные'
          ]
        },
        usage: {
          title: 'Коммуникация',
          content: [
            'Для связи с нами используйте внешние мессенджеры:',
          ],
          list: [
            'Telegram — @dgt_manager',
            'Вся переписка происходит в мессенджере по вашему выбору',
            'Мы не храним историю переписки на нашем сайте',
            'Правила конфиденциальности регулируются политикой используемого мессенджера'
          ]
        },
        technical: {
          title: 'Технические данные',
          content: [
            'Наш сайт может использовать стандартные технические данные для обеспечения работы:',
          ],
          list: [
            'IP-адрес (для базовой аналитики)',
            'Тип браузера и устройства',
            'Время посещения страниц',
            'Referrer (источник перехода)'
          ],
          note: 'Эти данные являются анонимными и не позволяют идентифицировать конкретного пользователя.'
        },
        cookies: {
          title: 'Cookies',
          content: [
            'Наш сайт может использовать минимальное количество cookies:',
          ],
          list: [
            'Технические cookies (для работы сайта)',
            'Аналитические cookies (анонимная статистика посещений)'
          ],
          note: 'Cookies не содержат персональных данных. Вы можете отключить cookies в настройках браузера.'
        },
        external: {
          title: 'Внешние ссылки',
          content: [
            'Наш сайт содержит ссылки на внешние сервисы:',
          ],
          list: [
            'Telegram — для связи с менеджером',
            'Другие мессенджеры (по запросу)'
          ],
          note: 'Политика конфиденциальности этих сервисов регулируется их собственными правилами.'
        },
        children: {
          title: 'Возрастные ограничения',
          content: [
            'Наш сайт предназначен для лиц старше 18 лет.',
            'Мы не собираем данные несовершеннолетних.',
            'Использование сайта лицами младше 18 лет возможно только с разрешения родителей или опекунов.'
          ]
        },
        changes: {
          title: 'Изменения политики',
          content: [
            'Мы можем обновлять данную Политику конфиденциальности.',
            'Дата последнего обновления указана в начале документа.',
            'Изменения вступают в силу с момента публикации на сайте.'
          ]
        },
        contact: {
          title: 'Контакты',
          content: [
            'По вопросам конфиденциальности свяжитесь с нами:'
          ],
          details: [
            { label: 'Telegram', value: '@dgt_manager' }
          ]
        }
      },
      nav: {
        backToHome: 'На главную'
      }
    },
    en: {
      hero: {
        label: 'Privacy Policy',
        title: 'PRIVACY',
        titleAccent: 'POLICY',
        description: 'Personal data protection and website usage rules',
        lastUpdated: 'Last updated: November 26, 2024'
      },
      sections: {
        intro: {
          title: 'About our website',
          content: [
            'DGT is a presentation website for our premium car tuning services.',
            'We do not collect or store personal data of visitors on our website.',
            'All communication occurs through external messengers of your choice.'
          ]
        },
        collection: {
          title: 'Data collection',
          content: [
            'Our website does not contain feedback forms and does not collect personal data.',
            'We do not request or store:',
          ],
          list: [
            'Names and contact details',
            'Email addresses',
            'Phone numbers',
            'Payment information',
            'Geolocation',
            'Any other personal data'
          ]
        },
        usage: {
          title: 'Communication',
          content: [
            'To contact us, use external messengers:',
          ],
          list: [
            'Telegram — @dgt_manager',
            'All correspondence occurs in the messenger of your choice',
            'We do not store correspondence history on our website',
            'Privacy rules are governed by the policy of the messenger used'
          ]
        },
        technical: {
          title: 'Technical data',
          content: [
            'Our website may use standard technical data to ensure operation:',
          ],
          list: [
            'IP address (for basic analytics)',
            'Browser and device type',
            'Page visit time',
            'Referrer (traffic source)'
          ],
          note: 'This data is anonymous and does not allow identification of specific users.'
        },
        cookies: {
          title: 'Cookies',
          content: [
            'Our website may use a minimum number of cookies:',
          ],
          list: [
            'Technical cookies (for website operation)',
            'Analytical cookies (anonymous visit statistics)'
          ],
          note: 'Cookies do not contain personal data. You can disable cookies in your browser settings.'
        },
        external: {
          title: 'External links',
          content: [
            'Our website contains links to external services:',
          ],
          list: [
            'Telegram — to contact the manager',
            'Other messengers (upon request)'
          ],
          note: 'The privacy policy of these services is governed by their own rules.'
        },
        children: {
          title: 'Age restrictions',
          content: [
            'Our website is intended for persons over 18 years of age.',
            'We do not collect data from minors.',
            'Use of the site by persons under 18 is possible only with parental or guardian permission.'
          ]
        },
        changes: {
          title: 'Policy changes',
          content: [
            'We may update this Privacy Policy.',
            'The last update date is indicated at the beginning of the document.',
            'Changes take effect from the moment of publication on the site.'
          ]
        },
        contact: {
          title: 'Contacts',
          content: [
            'For privacy questions, contact us:'
          ],
          details: [
            { label: 'Telegram', value: '@dgt_manager' }
          ]
        }
      },
      nav: {
        backToHome: 'Back to Home'
      }
    }
  }

  const t = translations[currentLang]

  return (
    <>
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gridPattern}></div>
          <div className={styles.glowOrb1}></div>
          <div className={styles.glowOrb2}></div>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>{t.hero.label}</div>
          <h1 className={styles.heroTitle}>
            {t.hero.title}
            <span className={styles.heroTitleAccent}>{t.hero.titleAccent}</span>
          </h1>
          <p className={styles.heroDescription}>{t.hero.description}</p>
          <p className={styles.lastUpdated}>{t.hero.lastUpdated}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          
          {/* Navigation */}
          <div className={styles.navigation}>
            <Link href="/" className={styles.backButton}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M5 12l7 7M5 12l7-7"/>
              </svg>
              <span>{t.nav.backToHome}</span>
            </Link>
          </div>

          {/* Main Content */}
          <div className={styles.content}>
            
            {/* Introduction */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>{t.sections.intro.title}</h2>
              {t.sections.intro.content.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* Data Collection */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>{t.sections.collection.title}</h2>
              {t.sections.collection.content.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>{paragraph}</p>
              ))}
              <ul className={styles.list}>
                {t.sections.collection.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Data Usage / Communication */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>{t.sections.usage.title}</h2>
              {t.sections.usage.content.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>{paragraph}</p>
              ))}
              <ul className={styles.list}>
                {t.sections.usage.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Technical Data */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>{t.sections.technical.title}</h2>
              {t.sections.technical.content.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>{paragraph}</p>
              ))}
              <ul className={styles.list}>
                {t.sections.technical.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className={styles.note}>{t.sections.technical.note}</p>
            </div>

            {/* Cookies */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>{t.sections.cookies.title}</h2>
              {t.sections.cookies.content.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>{paragraph}</p>
              ))}
              <ul className={styles.list}>
                {t.sections.cookies.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className={styles.note}>{t.sections.cookies.note}</p>
            </div>

            {/* External Links */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>{t.sections.external.title}</h2>
              {t.sections.external.content.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>{paragraph}</p>
              ))}
              <ul className={styles.list}>
                {t.sections.external.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className={styles.note}>{t.sections.external.note}</p>
            </div>

            {/* Children */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>{t.sections.children.title}</h2>
              {t.sections.children.content.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* Changes */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>{t.sections.changes.title}</h2>
              {t.sections.changes.content.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* Contact */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>{t.sections.contact.title}</h2>
              {t.sections.contact.content.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>{paragraph}</p>
              ))}
              <div className={styles.contactDetails}>
                {t.sections.contact.details.map((detail, index) => (
                  <div key={index} className={styles.contactItem}>
                    <span className={styles.contactLabel}>{detail.label}:</span>
                    <span className={styles.contactValue}>{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className={styles.bottomCta}>
            <h3 className={styles.ctaTitle}>Остались вопросы?</h3>
            <p className={styles.ctaDesc}>Свяжитесь с нами для получения дополнительной информации</p>
            <a 
              href="https://t.me/dgt_manager"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              <span>Связаться с нами</span>
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                <path d="M1 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </a>
          </div>

        </div>
      </section>

      <Footer currentLang={currentLang} />
    </>
  )
}
