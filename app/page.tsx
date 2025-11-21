'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const [currentLang, setCurrentLang] = useState<'ru' | 'en'>('ru')

  const translations = {
    ru: {
      logoSubtitle: 'EXHAUST SYSTEM',
      navExhaust: 'Выхлопные системы',
      navBrakes: 'Тормозные системы',
      navWheels: 'Кованые диски',
      navSuspension: 'Подвеска',
      navProjects: 'Проекты',
      heroTitle1: 'СЕРВИСНЫЕ УСЛУГИ',
      heroTitle2: 'ДЛЯ АВТОМОБИЛЕЙ',
      heroSubtitle: 'Премиальное обслуживание вашего автомобиля',
      heroCTA: 'Каталог услуг',
      aboutTitle: 'О нас',
      aboutText1: 'Ночь, пустые улицы, звенящая тишина и твой автомобиль.',
      aboutText2: 'Что выберешь ты — громкий качественный звук или бесшумную езду?',
      aboutText3: 'С выхлопными системами DGT ты почувствуешь себя королём дороги. Ты сам создаешь звук своего настроения.',
      aboutButton: 'ПОДРОБНЕЕ',
      exhaustTitle: 'Выхлопные системы',
      exhaustDesc: 'Премиальные титановые и стальные выхлопные системы от мировых производителей. Улучшение звука, производительности и снижение веса вашего автомобиля на 8-15 кг.',
      exhaustButton: 'ВЫБРАТЬ СИСТЕМУ',
      brakesTitle: 'Тормозные системы',
      brakesDesc: 'Высокопроизводительные тормозные системы с многопоршневыми суппортами и карбон-керамическими дисками. Максимальный контроль и безопасность на любой скорости.',
      brakesButton: 'ПОДОБРАТЬ СИСТЕМУ',
      wheelsTitle: 'Кованые диски',
      wheelsDesc: 'Эксклюзивные кованые диски ручной работы. Индивидуальный дизайн, любые размеры и цвета. Легкие, прочные и уникальные — созданы специально для вашего автомобиля.',
      wheelsButton: 'РАССЧИТАТЬ СТОИМОСТЬ',
      suspensionTitle: 'Подвеска',
      suspensionDesc: 'Профессиональные системы подвески: койловеры, пневмоподвеска, стабилизаторы. Улучшение управляемости, регулировка жесткости и клиренса под любые задачи.',
      suspensionButton: 'СМОТРЕТЬ КАТАЛОГ',
      projectsTitle1: 'Проекты',
      projectsTitle2: 'под ключ',
      projectsSubtitle: 'Комплексные решения для популярных моделей. Готовые спек-листы модификаций: от выхлопной системы до полной трансформации автомобиля.',
      projectsButton: 'СМОТРЕТЬ ВСЕ ПРОЕКТЫ',
      hp: 'л.с.',
      kg: 'кг',
      mods: 'модификаций',
      videoTitle: 'Видеоматериалы',
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
      navProjects: 'Projects',
      heroTitle1: 'AUTOMOTIVE SERVICES',
      heroTitle2: 'FOR YOUR CAR',
      heroSubtitle: 'Premium service for your vehicle',
      heroCTA: 'Service Catalog',
      aboutTitle: 'About Us',
      aboutText1: 'Night, empty streets, ringing silence and your car.',
      aboutText2: 'What will you choose — loud quality sound or silent ride?',
      aboutText3: 'With DGT exhaust systems you will feel like the king of the road. You create the sound of your mood.',
      aboutButton: 'LEARN MORE',
      exhaustTitle: 'Exhaust Systems',
      exhaustDesc: 'Premium titanium and steel exhaust systems from world manufacturers. Improved sound, performance and weight reduction of your car by 8-15 kg.',
      exhaustButton: 'CHOOSE SYSTEM',
      brakesTitle: 'Brake Systems',
      brakesDesc: 'High-performance brake systems with multi-piston calipers and carbon-ceramic discs. Maximum control and safety at any speed.',
      brakesButton: 'SELECT SYSTEM',
      wheelsTitle: 'Forged Wheels',
      wheelsDesc: 'Exclusive handcrafted forged wheels. Individual design, any sizes and colors. Lightweight, durable and unique — created specially for your car.',
      wheelsButton: 'CALCULATE COST',
      suspensionTitle: 'Suspension',
      suspensionDesc: 'Professional suspension systems: coilovers, air suspension, stabilizers. Improved handling, adjustable stiffness and clearance for any task.',
      suspensionButton: 'VIEW CATALOG',
      projectsTitle1: 'Turnkey',
      projectsTitle2: 'Projects',
      projectsSubtitle: 'Comprehensive solutions for popular models. Ready spec lists of modifications: from exhaust system to complete car transformation.',
      projectsButton: 'VIEW ALL PROJECTS',
      hp: 'hp',
      kg: 'kg',
      mods: 'modifications',
      videoTitle: 'Video Materials',
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

  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'ru' ? 'en' : 'ru')
  }

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget
    element.classList.add(styles.clicked)
    setTimeout(() => {
      element.classList.remove(styles.clicked)
    }, 600)
  }

  return (
    <>
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
            <span className={`${styles.langOption} ${currentLang === 'ru' ? styles.active : ''}`}>
              RU
            </span>
            <span>|</span>
            <span className={`${styles.langOption} ${currentLang === 'en' ? styles.active : ''}`}>
              EN
            </span>
          </div>
        </div>
      </header>

      <div className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroImage}>
          <Image src="/main_image.png" alt="Luxury Sports Car" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.content}>
          <div className={styles.contentBox}>
            <h1>
              <span>{t.heroTitle1}</span>
              <span className={styles.highlight}>{t.heroTitle2}</span>
            </h1>
            <p className={styles.subtitle}>{t.heroSubtitle}</p>
            <Link href="/catalog" className={styles.ctaButton}>
              {t.heroCTA}
            </Link>
          </div>
        </div>
      </div>

      <section className={styles.aboutSection} id="about">
        <div className={styles.aboutBgImage}>
          <Image src="/descarga.png" alt="Ferrari" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.aboutBgOverlay}></div>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutText}>
            <h2 className={styles.aboutTitle}>{t.aboutTitle}</h2>
            <div className={styles.aboutDescription}>
              <p>{t.aboutText1}</p>
              <p>{t.aboutText2}</p>
              <p>{t.aboutText3}</p>
            </div>
            <Link href="/about" className={styles.aboutButton}>
              <span>{t.aboutButton}</span>
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                <path d="M1 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.serviceSection} id="exhaust">
        <div className={styles.serviceBgImage} onClick={handleImageClick}>
          <Image src="/vyhlop.png" alt="Exhaust System" fill style={{ objectFit: 'contain' }} />
        </div>
        <div className={styles.serviceOverlay}></div>
        <div className={styles.serviceContainer}>
          <div className={styles.serviceContent}>
            <div className={styles.serviceText}>
              <h2 className={styles.serviceTitle}>{t.exhaustTitle}</h2>
              <p className={styles.serviceDescription}>{t.exhaustDesc}</p>
              <div className={styles.serviceBrands}>
                <div className={styles.brandTag}>Akrapovic</div>
                <div className={styles.brandTag}>iPE</div>
                <div className={styles.brandTag}>Capristo</div>
                <div className={styles.brandTag}>Remus</div>
              </div>
              <Link href="/exhaust" className={styles.serviceButton}>
                <span>{t.exhaustButton}</span>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                  <path d="M1 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.serviceSection} ${styles.brakeSection}`} id="brakes">
        <div className={styles.serviceBgImage} onClick={handleImageClick}>
          <Image src="/disk.png" alt="Brake System" fill style={{ objectFit: 'contain' }} />
        </div>
        <div className={styles.serviceOverlay}></div>
        <div className={styles.serviceContainer}>
          <div className={styles.serviceContent}>
            <div className={styles.serviceText}>
              <h2 className={styles.serviceTitle}>{t.brakesTitle}</h2>
              <p className={styles.serviceDescription}>{t.brakesDesc}</p>
              <div className={styles.serviceBrands}>
                <div className={styles.brandTag}>Brembo</div>
                <div className={styles.brandTag}>AP Racing</div>
                <div className={styles.brandTag}>Endless</div>
              </div>
              <Link href="/brakes" className={styles.serviceButton}>
                <span>{t.brakesButton}</span>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                  <path d="M1 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.serviceSection} id="wheels">
        <div className={styles.serviceBgImage} onClick={handleImageClick}>
          <Image src="/disks.png" alt="Forged Wheels" fill style={{ objectFit: 'contain' }} />
        </div>
        <div className={styles.serviceOverlay}></div>
        <div className={styles.serviceContainer}>
          <div className={styles.serviceContent}>
            <div className={styles.serviceText}>
              <h2 className={styles.serviceTitle}>{t.wheelsTitle}</h2>
              <p className={styles.serviceDescription}>{t.wheelsDesc}</p>
              <div className={styles.serviceBrands}>
                <div className={styles.brandTag}>HRE</div>
                <div className={styles.brandTag}>Vossen</div>
                <div className={styles.brandTag}>BBS</div>
                <div className={styles.brandTag}>ADV.1</div>
              </div>
              <Link href="/wheels" className={styles.serviceButton}>
                <span>{t.wheelsButton}</span>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                  <path d="M1 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.serviceSection} ${styles.suspensionSection}`} id="suspension">
        <div className={styles.serviceBgImage} onClick={handleImageClick}>
          <Image src="/podveska.png" alt="Suspension" fill style={{ objectFit: 'contain' }} />
        </div>
        <div className={styles.serviceOverlay}></div>
        <div className={styles.serviceContainer}>
          <div className={styles.serviceContent}>
            <div className={styles.serviceText}>
              <h2 className={styles.serviceTitle}>{t.suspensionTitle}</h2>
              <p className={styles.serviceDescription}>{t.suspensionDesc}</p>
              <div className={styles.serviceBrands}>
                <div className={styles.brandTag}>KW</div>
                <div className={styles.brandTag}>Öhlins</div>
                <div className={styles.brandTag}>Air Lift</div>
              </div>
              <Link href="/suspension" className={styles.serviceButton}>
                <span>{t.suspensionButton}</span>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                  <path d="M1 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.projectsSection} id="projects">
        <div className={styles.projectsHeader}>
          <h2 className={styles.projectsTitle}>
            {t.projectsTitle1} <span className={styles.highlightText}>{t.projectsTitle2}</span>
          </h2>
          <p className={styles.projectsSubtitle}>{t.projectsSubtitle}</p>
        </div>
        <div className={styles.projectsGrid}>
          {[
            { brand: 'PORSCHE', name: '911 GT3 (992)', img: '/Bild_15-1024x576.jpg', hp: '+35', kg: '-25', mods: '6' },
            { brand: 'BMW', name: 'M3 Competition', img: '/bmw.jpg', hp: '+50', kg: '-18', mods: '7' },
            { brand: 'MERCEDES-AMG', name: 'GT 63 S 4MATIC+', img: '/4QHL3OSVP1kmJToP.jpg', hp: '+45', kg: '-22', mods: '8' },
            { brand: 'AUDI', name: 'RS6 Avant (C8)', img: '/Audi-RS6-C8-Riviera-RF108-Gloss-Black-29-1350x900.jpg', hp: '+70', kg: '-20', mods: '9' },
            { brand: 'PORSCHE', name: 'Cayenne Turbo GT', img: '/images (4).jpeg', hp: '+40', kg: '-15', mods: '6' },
            { brand: 'BMW', name: 'M5 Competition', img: '/5ee9d286b50c320001032d99.jpeg', hp: '+60', kg: '-20', mods: '8' },
          ].map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image src={project.img} alt={project.name} fill style={{ objectFit: 'cover' }} />
                <div className={styles.projectOverlay}></div>
              </div>
              <div className={styles.projectInfo}>
                <div className={styles.projectBrand}>{project.brand}</div>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectSpecs}>
                  {project.hp} {t.hp} • {project.kg} {t.kg} • {project.mods} {t.mods}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.projectsButtonWrapper}>
          <Link href="/projects" className={styles.projectsViewAll}>
            <span>{t.projectsButton}</span>
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
              <path d="M1 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </Link>
        </div>
      </section>

      <section className={styles.videoSection} id="video">
        <h2 className={styles.videoTitle}>{t.videoTitle}</h2>
        <div className={styles.videoGrid}>
          {['/bmw.jpg', '/Bild_15-1024x576.jpg', '/4QHL3OSVP1kmJToP.jpg'].map((img, index) => (
            <div key={index} className={styles.videoCard}>
              <div className={styles.videoThumbnail}>
                <Image src={img} alt={`Video ${index + 1}`} fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.playButton}>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <circle cx="25" cy="25" r="25" fill="rgba(255,255,255,0.9)"/>
                  <path d="M20 15L35 25L20 35V15Z" fill="#000"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

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
    </>
  )
}
