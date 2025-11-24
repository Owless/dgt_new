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
      navProjects: 'Проекты'
    },
    en: {
      navExhaust: 'Exhaust Systems',
      navBrakes: 'Brake Systems',
      navWheels: 'Forged Wheels',
      navSuspension: 'Suspension',
      navProjects: 'Projects'
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
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto'
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <>
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
              <span className={`${styles.langOption} ${currentLang === 'ru' ? styles.active : ''}`}>
                RU
              </span>
              <span className={styles.separator}>|</span>
              <span className={`${styles.langOption} ${currentLang === 'en' ? styles.active : ''}`}>
                EN
              </span>
            </div>
          </div>

          {/* Burger Menu */}
          <div 
            className={`${styles.burgerMenu} ${mobileMenuOpen ? styles.active : ''}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className={styles.mobileOverlay} onClick={closeMobileMenu}></div>
      )}

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.active : ''}`}>
        <nav className={styles.mobileNav}>
          <Link href="/exhaust" onClick={closeMobileMenu}>{t.navExhaust}</Link>
          <Link href="/brakes" onClick={closeMobileMenu}>{t.navBrakes}</Link>
          <Link href="/wheels" onClick={closeMobileMenu}>{t.navWheels}</Link>
          <Link href="/suspension" onClick={closeMobileMenu}>{t.navSuspension}</Link>
          <Link href="/projects" onClick={closeMobileMenu}>{t.navProjects}</Link>
        </nav>
        
        <div className={styles.mobileFooter}>
          <div className={styles.langToggle} onClick={toggleLanguage}>
            <span className={`${styles.langOption} ${currentLang === 'ru' ? styles.active : ''}`}>
              RU
            </span>
            <span className={styles.separator}>|</span>
            <span className={`${styles.langOption} ${currentLang === 'en' ? styles.active : ''}`}>
              EN
            </span>
          </div>
          
          <div className={styles.socialIcons}>
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>
              <i className="fab fa-vk"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
