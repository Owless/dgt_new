'use client'

import Link from 'next/link'
import styles from './Footer.module.css'

interface FooterProps {
  currentLang?: 'ru' | 'en'
}

export default function Footer({ currentLang = 'ru' }: FooterProps) {
  const translations = {
    ru: {
      logoSubtitle: 'EXHAUST SYSTEM',
      navExhaust: 'Выхлопные системы',
      navBrakes: 'Тормозные системы',
      navWheels: 'Кованые диски',
      navSuspension: 'Подвеска',
      footerDesc: 'Премиальные решения для вашего автомобиля. Выхлопные системы, тормоза, диски, подвеска — все для максимальной производительности.',
      footerServices: 'Услуги',
      footerProjects: 'Проекты под ключ',
      footerCompany: 'Компания',
      footerAbout: 'О нас',
      footerVideo: 'Видео',
      footerContacts: 'Контакты',
      footerContactsTitle: 'Контакты',
      footerAddress: 'Москва, ул. Примерная, 123',
      footerCopyright: '© 2025 DGT Exhaust System. Все права защищены.',
      footerPrivacy: 'Политика конфиденциальности',
      footerTerms: 'Условия использования'
    },
    en: {
      logoSubtitle: 'EXHAUST SYSTEM',
      navExhaust: 'Exhaust Systems',
      navBrakes: 'Brake Systems',
      navWheels: 'Forged Wheels',
      navSuspension: 'Suspension',
      footerDesc: 'Premium solutions for your car. Exhaust systems, brakes, wheels, suspension — everything for maximum performance.',
      footerServices: 'Services',
      footerProjects: 'Turnkey Projects',
      footerCompany: 'Company',
      footerAbout: 'About Us',
      footerVideo: 'Videos',
      footerContacts: 'Contacts',
      footerContactsTitle: 'Contacts',
      footerAddress: 'Moscow, Primernaya St., 123',
      footerCopyright: '© 2025 DGT Exhaust System. All rights reserved.',
      footerPrivacy: 'Privacy Policy',
      footerTerms: 'Terms of Use'
    }
  }

  const t = translations[currentLang]

  return (
    <footer className={styles.footer} id="contacts">
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <div className={styles.footerLogo}>
            DGT
            <span>{t.logoSubtitle}</span>
          </div>
          <p className={styles.footerDescription}>{t.footerDesc}</p>
          <div className={styles.footerSocial}>
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
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>{t.footerServices}</h3>
          <ul className={styles.footerLinks}>
            <li><Link href="/exhaust">{t.navExhaust}</Link></li>
            <li><Link href="/brakes">{t.navBrakes}</Link></li>
            <li><Link href="/wheels">{t.navWheels}</Link></li>
            <li><Link href="/suspension">{t.navSuspension}</Link></li>
            <li><Link href="/projects">{t.footerProjects}</Link></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>{t.footerCompany}</h3>
          <ul className={styles.footerLinks}>
            <li><Link href="/about">{t.footerAbout}</Link></li>
            <li><Link href="/video">{t.footerVideo}</Link></li>
            <li><Link href="/contacts">{t.footerContacts}</Link></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>{t.footerContactsTitle}</h3>
          <ul className={styles.footerContacts}>
            <li>
              <i className="fas fa-phone"></i>
              <a href="tel:+79001234567">+7 (900) 123-45-67</a>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:info@dgt-exhaust.com">info@dgt-exhaust.com</a>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>{t.footerAddress}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.footerCopyright}>{t.footerCopyright}</p>
        <div className={styles.footerBottomLinks}>
          <Link href="/privacy">{t.footerPrivacy}</Link>
          <Link href="/terms">{t.footerTerms}</Link>
        </div>
      </div>
    </footer>
  )
}
