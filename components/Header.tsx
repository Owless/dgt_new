'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

interface HeaderProps {
  currentLang?: 'ru' | 'en'
  onLanguageChange?: (lang: 'ru' | 'en') => void
}

export default function Header({ currentLang = 'ru', onLanguageChange }: HeaderProps) {
  const [lang, setLang] = useState<'ru' | 'en'>(currentLang)

  const translations = {
    ru: {
      logoSubtitle: 'EXHAUST SYSTEM',
      navExhaust: 'Выхлопные системы',
      navBrakes: 'Тормозные системы',
      navWheels: 'Кованые диски',
      navSuspension: 'Подвеска',
      navProjects: 'Проекты',
    },
    en: {
      logoSubtitle: 'EXHAUST SYSTEM',
      navExhaust: 'Exhaust Systems',
      navBrakes: 'Brake Systems',
      navWheels: 'Forged Wheels',
      navSuspension: 'Suspension',
      navProjects: 'Projects',
    }
  }

  const t = translations[lang]

  const toggleLanguage = () => {
    const newLang = lang === 'ru' ? 'en' : 'ru'
    setLang(newLang)
    if (onLanguageChange) {
      onLanguageChange(newLang)
    }
  }

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        DGT
        <span>{t.logoSubtitle}</span>
      </Link>
      <nav className={styles.nav}>
        <Link href="/exhaust">{t.navExhaust}</Link>
        <Link href="/brakes">{t.navBrakes}</Link>
        <Link href="/wheels">{t.navWheels}</Link>
        <Link href="/suspension">{t.navSuspension}</Link>
        <Link href="/projects">{t.navProjects}</Link>
      </nav>
      <div className={styles.headerRight}>
        <div className={styles.socialIcons}>
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-vk"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <div className={styles.langToggle} onClick={toggleLanguage}>
          <span className={`${styles.langOption} ${lang === 'ru' ? styles.active : ''}`}>
            RU
          </span>
          <span>|</span>
          <span className={`${styles.langOption} ${lang === 'en' ? styles.active : ''}`}>
            EN
          </span>
        </div>
      </div>
    </header>
  )
}
