'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'

interface HeaderProps {
  currentLang?: 'ru' | 'en'
  onLanguageChange?: (lang: 'ru' | 'en') => void
}

export default function Header({ currentLang = 'ru', onLanguageChange }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const translations = {
    ru: {
      navExhaust: 'Выхлопные системы',
      navBrakes: 'Тормозные системы',
      navWheels: 'Кованые диски',
      navSuspension: 'Подвеска',
      navProjects: 'Проекты',
      navAbout: 'О нас',
      phone: '+7 (900) 123-45-67',
      contact: 'Связаться'
    },
    en: {
      navExhaust: 'Exhaust Systems',
      navBrakes: 'Brake Systems',
      navWheels: 'Forged Wheels',
      navSuspension: 'Suspension',
      navProjects: 'Projects',
      navAbout: 'About Us',
      phone: '+7 (900) 123-45-67',
      contact: 'Contact'
    }
  }

  const t = translations[currentLang]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    const newLang = currentLang === 'ru' ? 'en' : 'ru'
    onLanguageChange?.(newLang)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image 
            src="/logo.png" 
            alt="DGT Exhaust System" 
            width={120} 
            height={60}
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.navMain}>
          <ul className={styles.navLinks}>
            <li><Link href="/exhaust">{t.navExhaust}</Link></li>
            <li><Link href="/brakes">{t.navBrakes}</Link></li>
            <li><Link href="/wheels">{t.navWheels}</Link></li>
            <li><Link href="/suspension">{t.navSuspension}</Link></li>
            <li><Link href="/projects">{t.navProjects}</Link></li>
            <li><Link href="/about">{t.navAbout}</Link></li>
          </ul>

          <div className={styles.headerContact}>
            <a href={`tel:${t.phone.replace(/\s/g, '')}`} className={styles.headerPhone}>
              <span className={styles.phoneIcon}>📞</span>
              <span>{t.phone}</span>
            </a>

            <div className={styles.langToggle} onClick={toggleLanguage}>
              <span className={`${styles.langOption} ${currentLang === 'ru' ? styles.active : ''}`}>
                RU
              </span>
              <span>|</span>
              <span className={`${styles.langOption} ${currentLang === 'en' ? styles.active : ''}`}>
                EN
              </span>
            </div>

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
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div 
          className={`${styles.mobileToggle} ${mobileMenuOpen ? styles.active : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.active : ''}`}>
        <ul className={styles.mobileNav}>
          <li><Link href="/exhaust" onClick={toggleMobileMenu}>{t.navExhaust}</Link></li>
          <li><Link href="/brakes" onClick={toggleMobileMenu}>{t.navBrakes}</Link></li>
          <li><Link href="/wheels" onClick={toggleMobileMenu}>{t.navWheels}</Link></li>
          <li><Link href="/suspension" onClick={toggleMobileMenu}>{t.navSuspension}</Link></li>
          <li><Link href="/projects" onClick={toggleMobileMenu}>{t.navProjects}</Link></li>
          <li><Link href="/about" onClick={toggleMobileMenu}>{t.navAbout}</Link></li>
        </ul>
        <div className={styles.mobileContact}>
          <a href={`tel:${t.phone.replace(/\s/g, '')}`} className={styles.headerPhone}>
            <span className={styles.phoneIcon}>📞</span>
            <span>{t.phone}</span>
          </a>
          <div className={styles.langToggle} onClick={toggleLanguage}>
            <span className={`${styles.langOption} ${currentLang === 'ru' ? styles.active : ''}`}>
              RU
            </span>
            <span>|</span>
            <span className={`${styles.langOption} ${currentLang === 'en' ? styles.active : ''}`}>
              EN
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
