'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './not-found.module.css'

export default function NotFound() {
  const [currentLang, setCurrentLang] = useState<'ru' | 'en'>('ru')

  const translations = {
    ru: {
      error: '404',
      title: 'Страница не найдена',
      description: 'К сожалению, страница которую вы ищете не существует или была перемещена',
      homeButton: 'На главную',
      catalogButton: 'Каталог',
      contactButton: 'Контакты',
      suggestions: 'Возможно, вас заинтересует:',
      links: {
        wheels: 'Кованые диски',
        brakes: 'Тормозные системы',
        exhaust: 'Выхлопные системы',
        suspension: 'Подвеска',
        projects: 'Наши проекты',
        about: 'О компании'
      }
    },
    en: {
      error: '404',
      title: 'Page Not Found',
      description: 'Sorry, the page you are looking for does not exist or has been moved',
      homeButton: 'Home',
      catalogButton: 'Catalog',
      contactButton: 'Contacts',
      suggestions: 'You might be interested in:',
      links: {
        wheels: 'Forged Wheels',
        brakes: 'Brake Systems',
        exhaust: 'Exhaust Systems',
        suspension: 'Suspension',
        projects: 'Our Projects',
        about: 'About Us'
      }
    }
  }

  const t = translations[currentLang]

  return (
    <>
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />
      
      <div className={styles.notFoundPage}>
        <div className={styles.background}>
          <div className={styles.gridPattern}></div>
          <div className={styles.glowOrb1}></div>
          <div className={styles.glowOrb2}></div>
        </div>

        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.errorCode}>
              <span className={styles.errorNumber}>4</span>
              <span className={styles.errorCircle}>
                <svg viewBox="0 0 100 100" className={styles.circle}>
                  <circle cx="50" cy="50" r="45" />
                </svg>
              </span>
              <span className={styles.errorNumber}>4</span>
            </div>

            <h1 className={styles.title}>{t.title}</h1>
            <p className={styles.description}>{t.description}</p>

            <div className={styles.buttons}>
              <Link href="/" className={styles.primaryButton}>
                {t.homeButton}
              </Link>
              <Link href="/catalog" className={styles.secondaryButton}>
                {t.catalogButton}
              </Link>
              <Link href="/contacts" className={styles.tertiaryButton}>
                {t.contactButton}
              </Link>
            </div>

            <div className={styles.suggestions}>
              <div className={styles.suggestionsTitle}>{t.suggestions}</div>
              <div className={styles.linkGrid}>
                <Link href="/wheels" className={styles.linkCard}>
                  <div className={styles.linkIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2v20M2 12h20" />
                    </svg>
                  </div>
                  <span>{t.links.wheels}</span>
                </Link>

                <Link href="/brakes" className={styles.linkCard}>
                  <div className={styles.linkIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </div>
                  <span>{t.links.brakes}</span>
                </Link>

                <Link href="/exhaust" className={styles.linkCard}>
                  <div className={styles.linkIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                  <span>{t.links.exhaust}</span>
                </Link>

                <Link href="/suspension" className={styles.linkCard}>
                  <div className={styles.linkIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 12h16M4 6h16M4 18h16" />
                    </svg>
                  </div>
                  <span>{t.links.suspension}</span>
                </Link>

                <Link href="/projects" className={styles.linkCard}>
                  <div className={styles.linkIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                    </svg>
                  </div>
                  <span>{t.links.projects}</span>
                </Link>

                <Link href="/about" className={styles.linkCard}>
                  <div className={styles.linkIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4M12 8h.01" />
                    </svg>
                  </div>
                  <span>{t.links.about}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer currentLang={currentLang} />
    </>
  )
}
