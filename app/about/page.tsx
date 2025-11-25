'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './about.module.css'

export default function AboutPage() {
  const [currentLang, setCurrentLang] = useState<'ru' | 'en'>('ru')

  const translations = {
    ru: {
      hero: {
        title: 'DGT Studio',
        subtitle: 'Тюнинг-ателье',
        description: 'Высококачественные выхлопы, тормоза и колесные диски собственного производства'
      },
      intro: {
        text1: 'Тюнинг-ателье DGT - команда специалистов с огромным опытом в автотюнинге!',
        text2: 'Выхлопы, тормоза, диски и другие агрегаты тестируются нами ещё до начала продаж на собственных автомобилях в условиях российских дорог и климата!',
        highlight: 'Производство и установка любой сложности'
      },
      services: {
        title: 'Наши услуги',
        item1: {
          title: 'Тормозные системы',
          desc: 'Замер, производство и установка высокоэффективных тормозных систем'
        },
        item2: {
          title: 'Выхлопные системы',
          desc: 'Производство и установка выхлопных систем с управляемыми заслонками'
        },
        item3: {
          title: 'Кованые диски',
          desc: 'Производство кованых дисков под ваши параметры и задачи'
        },
        item4: {
          title: 'Проекты под ключ',
          desc: 'Комплексная модификация автомобиля от концепции до реализации'
        }
      },
      values: {
        title: 'Наши ценности',
        quality: {
          title: 'Качество',
          desc: 'Только проверенные материалы и технологии'
        },
        experience: {
          title: 'Опыт',
          desc: 'Годы работы с премиальными автомобилями'
        },
        innovation: {
          title: 'Инновации',
          desc: 'Современное оборудование и подходы'
        },
        individual: {
          title: 'Индивидуальность',
          desc: 'Уникальные решения для каждого клиента'
        }
      },
      stats: {
        projects: 'Проектов',
        years: 'Лет опыта',
        clients: 'Клиентов',
        countries: 'Стран'
      },
      cta: {
        title: 'Готовы начать проект?',
        subtitle: 'Свяжитесь с нами для консультации',
        button: 'Связаться с нами'
      }
    },
    en: {
      hero: {
        title: 'DGT Studio',
        subtitle: 'Tuning Atelier',
        description: 'High-quality exhausts, brakes and wheels of our own production'
      },
      intro: {
        text1: 'DGT Tuning Atelier - a team of specialists with extensive experience in auto tuning!',
        text2: 'Exhausts, brakes, wheels and other components are tested by us before sales on our own cars in Russian road and climate conditions!',
        highlight: 'Production and installation of any complexity'
      },
      services: {
        title: 'Our Services',
        item1: {
          title: 'Brake Systems',
          desc: 'Measurement, production and installation of high-performance brake systems'
        },
        item2: {
          title: 'Exhaust Systems',
          desc: 'Production and installation of exhaust systems with controlled valves'
        },
        item3: {
          title: 'Forged Wheels',
          desc: 'Production of forged wheels according to your parameters and tasks'
        },
        item4: {
          title: 'Turnkey Projects',
          desc: 'Comprehensive vehicle modification from concept to implementation'
        }
      },
      values: {
        title: 'Our Values',
        quality: {
          title: 'Quality',
          desc: 'Only proven materials and technologies'
        },
        experience: {
          title: 'Experience',
          desc: 'Years of working with premium cars'
        },
        innovation: {
          title: 'Innovation',
          desc: 'Modern equipment and approaches'
        },
        individual: {
          title: 'Individuality',
          desc: 'Unique solutions for each client'
        }
      },
      stats: {
        projects: 'Projects',
        years: 'Years',
        clients: 'Clients',
        countries: 'Countries'
      },
      cta: {
        title: 'Ready to start a project?',
        subtitle: 'Contact us for consultation',
        button: 'Contact Us'
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
          <div className={styles.heroLabel}>About Us</div>
          <h1 className={styles.heroTitle}>
            {t.hero.title}
            <span className={styles.heroSubtitle}>{t.hero.subtitle}</span>
          </h1>
          <p className={styles.heroDescription}>{t.hero.description}</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <p className={styles.introText}>{t.intro.text1}</p>
            <p className={styles.introText}>{t.intro.text2}</p>
            <div className={styles.introHighlight}>
              <div className={styles.highlightBar}></div>
              <p>{t.intro.highlight}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{t.services.title}</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceNumber}>01</div>
              <div className={styles.serviceIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <h3 className={styles.serviceCardTitle}>{t.services.item1.title}</h3>
              <p className={styles.serviceCardDesc}>{t.services.item1.desc}</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceNumber}>02</div>
              <div className={styles.serviceIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className={styles.serviceCardTitle}>{t.services.item2.title}</h3>
              <p className={styles.serviceCardDesc}>{t.services.item2.desc}</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceNumber}>03</div>
              <div className={styles.serviceIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2v20M2 12h20"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3 className={styles.serviceCardTitle}>{t.services.item3.title}</h3>
              <p className={styles.serviceCardDesc}>{t.services.item3.desc}</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceNumber}>04</div>
              <div className={styles.serviceIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
                </svg>
              </div>
              <h3 className={styles.serviceCardTitle}>{t.services.item4.title}</h3>
              <p className={styles.serviceCardDesc}>{t.services.item4.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>{t.stats.projects}</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>{t.stats.years}</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>300+</div>
              <div className={styles.statLabel}>{t.stats.clients}</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>{t.stats.countries}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{t.values.title}</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
                </svg>
              </div>
              <h3 className={styles.valueTitle}>{t.values.quality.title}</h3>
              <p className={styles.valueDesc}>{t.values.quality.desc}</p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
                </svg>
              </div>
              <h3 className={styles.valueTitle}>{t.values.experience.title}</h3>
              <p className={styles.valueDesc}>{t.values.experience.desc}</p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className={styles.valueTitle}>{t.values.innovation.title}</h3>
              <p className={styles.valueDesc}>{t.values.innovation.desc}</p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z"/>
                </svg>
              </div>
              <h3 className={styles.valueTitle}>{t.values.individual.title}</h3>
              <p className={styles.valueDesc}>{t.values.individual.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBackground}>
          <div className={styles.ctaGlow}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>{t.cta.title}</h2>
            <p className={styles.ctaSubtitle}>{t.cta.subtitle}</p>
            <Link href="/contact" className={styles.ctaButton}>
              <span>{t.cta.button}</span>
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                <path d="M1 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer currentLang={currentLang} />
    </>
  )
}
