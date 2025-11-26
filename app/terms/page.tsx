'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './terms.module.css'

export default function TermsPage() {
  const [currentLang, setCurrentLang] = useState<'ru' | 'en'>('ru')

  const translations = {
    ru: {
      hero: {
        label: 'Terms of Service',
        title: 'УСЛОВИЯ',
        titleAccent: 'ИСПОЛЬЗОВАНИЯ',
        description: 'Правила и условия использования сайта DGT',
        lastUpdated: 'Последнее обновление: 26 ноября 2024'
      },
      sections: {
        intro: {
          title: 'Общие положения',
          content: [
            'Настоящие Условия использования регулируют доступ и использование сайта DGT.',
            'Используя наш сайт, вы соглашаетесь с данными условиями в полном объёме.',
            'Если вы не согласны с какими-либо положениями, пожалуйста, не используйте сайт.'
          ]
        },
        services: {
          title: 'Описание услуг',
          content: [
            'DGT предоставляет информационный сайт о наших услугах по тюнингу премиальных автомобилей:',
          ],
          list: [
            'Выхлопные системы (титановые, стальные)',
            'Тормозные системы (карбон-керамические)',
            'Кованые диски (собственное производство)',
            'Системы подвески (пневматические, койловеры)',
            'Полный спектр работ по тюнингу'
          ]
        },
        presentation: {
          title: 'Информационный характер',
          content: [
            'Данный сайт является презентационным и не является интернет-магазином.',
            'Мы не принимаем заказы и не осуществляем продажу товаров напрямую через сайт.',
            'Все цены указаны для ознакомления и могут меняться.',
            'Для заказа услуг свяжитесь с нами через Telegram: @dgt_manager'
          ]
        },
        use: {
          title: 'Правила использования',
          content: [
            'При использовании сайта вы обязуетесь:',
          ],
          list: [
            'Не нарушать законодательство РФ',
            'Не пытаться получить несанкционированный доступ к системе',
            'Не использовать автоматизированные средства для сбора информации',
            'Не распространять вредоносное ПО',
            'Не выдавать себя за других лиц или организации',
            'Использовать сайт только в законных целях'
          ]
        },
        intellectual: {
          title: 'Интеллектуальная собственность',
          content: [
            'Весь контент сайта защищён авторским правом:',
          ],
          list: [
            'Тексты, изображения, логотипы принадлежат DGT',
            'Дизайн и структура сайта являются интеллектуальной собственностью',
            'Копирование и распространение контента без письменного разрешения запрещено',
            'Вы можете просматривать и сохранять материалы для личного использования'
          ]
        },
        prices: {
          title: 'Цены и услуги',
          content: [
            'Важная информация о ценах:',
          ],
          list: [
            'Все цены указаны в рублях РФ',
            'Цены являются ориентировочными',
            'Окончательная стоимость определяется после консультации',
            'Мы оставляем за собой право изменять цены без предварительного уведомления',
            'Актуальные цены уточняйте у менеджера'
          ]
        },
        liability: {
          title: 'Ограничение ответственности',
          content: [
            'DGT не несёт ответственности за:',
          ],
          list: [
            'Временную недоступность сайта',
            'Технические ошибки или сбои',
            'Неточности в информации на сайте',
            'Действия третьих лиц',
            'Убытки, возникшие в результате использования сайта'
          ],
          note: 'Сайт предоставляется "как есть" без каких-либо гарантий.'
        },
        links: {
          title: 'Внешние ссылки',
          content: [
            'Наш сайт может содержать ссылки на внешние ресурсы (Telegram и др.).',
            'Мы не несём ответственности за содержание внешних сайтов.',
            'Переход по внешним ссылкам осуществляется на ваш риск.',
            'Политика конфиденциальности внешних ресурсов регулируется их собственными правилами.'
          ]
        },
        age: {
          title: 'Возрастные ограничения',
          content: [
            'Сайт предназначен для лиц старше 18 лет.',
            'Услуги тюнинга доступны только совершеннолетним.',
            'Использование сайта несовершеннолетними возможно только с разрешения родителей.'
          ]
        },
        changes: {
          title: 'Изменения условий',
          content: [
            'Мы оставляем за собой право изменять данные Условия использования в любое время.',
            'Изменения вступают в силу с момента публикации на сайте.',
            'Дата последнего обновления указана в начале документа.',
            'Продолжая использовать сайт после изменений, вы соглашаетесь с новыми условиями.'
          ]
        },
        termination: {
          title: 'Прекращение доступа',
          content: [
            'Мы оставляем за собой право ограничить или прекратить ваш доступ к сайту в случае нарушения данных условий.',
            'При прекращении доступа вы обязаны немедленно прекратить использование сайта.'
          ]
        },
        law: {
          title: 'Применимое право',
          content: [
            'Данные Условия регулируются законодательством Российской Федерации.',
            'Все споры решаются путём переговоров.',
            'При невозможности урегулирования споры передаются в суд по месту нахождения DGT.'
          ]
        },
        contact: {
          title: 'Контакты',
          content: [
            'По вопросам условий использования свяжитесь с нами:'
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
        label: 'Terms of Service',
        title: 'TERMS',
        titleAccent: 'OF SERVICE',
        description: 'Rules and conditions for using DGT website',
        lastUpdated: 'Last updated: November 26, 2024'
      },
      sections: {
        intro: {
          title: 'General provisions',
          content: [
            'These Terms of Service govern access to and use of the DGT website.',
            'By using our website, you agree to these terms in full.',
            'If you do not agree with any provisions, please do not use the website.'
          ]
        },
        services: {
          title: 'Description of services',
          content: [
            'DGT provides an informational website about our premium car tuning services:',
          ],
          list: [
            'Exhaust systems (titanium, steel)',
            'Brake systems (carbon-ceramic)',
            'Forged wheels (own production)',
            'Suspension systems (air, coilovers)',
            'Full range of tuning works'
          ]
        },
        presentation: {
          title: 'Informational nature',
          content: [
            'This website is presentational and is not an online store.',
            'We do not accept orders or sell products directly through the website.',
            'All prices are for reference and may change.',
            'To order services, contact us via Telegram: @dgt_manager'
          ]
        },
        use: {
          title: 'Usage rules',
          content: [
            'When using the website, you agree to:',
          ],
          list: [
            'Not violate Russian Federation legislation',
            'Not attempt unauthorized access to the system',
            'Not use automated means to collect information',
            'Not distribute malware',
            'Not impersonate other persons or organizations',
            'Use the site only for lawful purposes'
          ]
        },
        intellectual: {
          title: 'Intellectual property',
          content: [
            'All website content is protected by copyright:',
          ],
          list: [
            'Texts, images, logos belong to DGT',
            'Site design and structure are intellectual property',
            'Copying and distributing content without written permission is prohibited',
            'You may view and save materials for personal use'
          ]
        },
        prices: {
          title: 'Prices and services',
          content: [
            'Important information about prices:',
          ],
          list: [
            'All prices are in Russian rubles',
            'Prices are indicative',
            'Final cost is determined after consultation',
            'We reserve the right to change prices without notice',
            'Check current prices with the manager'
          ]
        },
        liability: {
          title: 'Limitation of liability',
          content: [
            'DGT is not responsible for:',
          ],
          list: [
            'Temporary unavailability of the site',
            'Technical errors or failures',
            'Inaccuracies in information on the site',
            'Actions of third parties',
            'Losses resulting from use of the site'
          ],
          note: 'The site is provided "as is" without any warranties.'
        },
        links: {
          title: 'External links',
          content: [
            'Our site may contain links to external resources (Telegram, etc.).',
            'We are not responsible for the content of external sites.',
            'Following external links is at your own risk.',
            'Privacy policy of external resources is governed by their own rules.'
          ]
        },
        age: {
          title: 'Age restrictions',
          content: [
            'The site is intended for persons over 18 years of age.',
            'Tuning services are available only to adults.',
            'Use of the site by minors is possible only with parental permission.'
          ]
        },
        changes: {
          title: 'Changes to terms',
          content: [
            'We reserve the right to change these Terms of Service at any time.',
            'Changes take effect from the moment of publication on the site.',
            'The last update date is indicated at the beginning of the document.',
            'By continuing to use the site after changes, you agree to the new terms.'
          ]
        },
        termination: {
          title: 'Termination of access',
          content: [
            'We reserve the right to restrict or terminate your access to the site in case of violation of these terms.',
            'Upon termination of access, you must immediately stop using the site.'
          ]
        },
        law: {
          title: 'Applicable law',
          content: [
            'These Terms are governed by the legislation of the Russian Federation.',
            'All disputes are resolved through negotiations.',
            'If disputes cannot be resolved, they are referred to the court at the location of DGT.'
          ]
        },
        contact: {
          title: 'Contacts',
          content: [
            'For questions about terms of service, contact us:'
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

            {/* Services */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>{t.sections.services.title}</h2>
              {t.sections.services.content.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>{paragraph}</p>
              ))}
              <ul className={styles.list}>
                {t.sections.services.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Presentation */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>{t.sections.presentation.title}</h2>
              {t.sections.presentation.content.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* Usage Rules */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>{t.sections.use.title}</h2>
              {t.sections.use.content.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>{paragraph}</p>
              ))}
              <ul className={styles.list}>
                {t.sections.use.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>{t.sections.intellectual.title}</h2>
              {t.sections.intellectual.content.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>{paragraph}</p>
              ))}
              <ul className={styles.list}>
                {t.sections.intellectual.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Prices */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>{t.sections.prices.title}</h2>
              {t.sections.prices.content.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>{paragraph}</p>
              ))}
              <ul className={styles.list}>
                {t.sections.prices.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Liability */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>{t.sections.liability.title}</h2>
              {t.sections.liability.content.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>{paragraph}</p>
              ))}
              <ul className={styles.list}>
                {t.sections.liability.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className={styles.note}>{t.sections.liability.note}</p>
            </div>

            {/* External Links */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>{t.sections.links.title}</h2>
              {t.sections.links.content.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* Age */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>{t.sections.age.title}</h2>
              {t.sections.age.content.map((paragraph, index) => (
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

            {/* Termination */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>{t.sections.termination.title}</h2>
              {t.sections.termination.content.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* Law */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>{t.sections.law.title}</h2>
              {t.sections.law.content.map((paragraph, index) => (
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
            <h3 className={styles.ctaTitle}>Готовы начать?</h3>
            <p className={styles.ctaDesc}>Свяжитесь с нами для консультации и заказа услуг</p>
            <a 
              href="https://t.me/dgt_manager"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              <span>Связаться с менеджером</span>
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
