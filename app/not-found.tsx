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
            </div>
          </div>
        </div>
      </div>

      <Footer currentLang={currentLang} />
    </>
  )
}
