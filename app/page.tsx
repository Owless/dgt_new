'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function Home() {
  const [currentLang, setCurrentLang] = useState<'ru' | 'en'>('ru')

  const translations = {
    ru: {
      heroTitle1: 'СЕРВИСНЫЕ УСЛУГИ',
      heroTitle2: 'ДЛЯ АВТОМОБИЛЕЙ',
      heroSubtitle: 'Премиальное обслуживание вашего автомобиля',
      heroCTA: 'Наши услуги',
      aboutTitle: 'О нас',
      aboutText1: 'Ночь, пустые улицы, звенящая тишина и твой автомобиль.',
      aboutText2: 'Что выберешь ты — громкий качественный звук или бесшумную езду?',
      aboutText3: 'С выхлопными системами DGT ты почувствуешь себя королём дороги. Ты сам создаешь звук своего настроения.',
      aboutButton: 'ПОДРОБНЕЕ',
      servicesTitle: 'Наши услуги',
      exhaustTitle: 'Выхлопные системы',
      exhaustDesc: 'Премиальные титановые и стальные выхлопные системы от мировых производителей. Улучшение звука, производительности и снижение веса вашего автомобиля на 8-15 кг.',
      exhaustButton: 'ВЫБРАТЬ СИСТЕМУ',
      exhaustFeature1: 'Снижение веса до 15 кг',
      exhaustFeature2: 'Улучшенный звук',
      exhaustFeature3: '+10-20 л.с.',
      brakesTitle: 'Тормозные системы',
      brakesDesc: 'Высокопроизводительные тормозные системы с многопоршневыми суппортами и карбон-керамическими дисками. Максимальный контроль и безопасность на любой скорости.',
      brakesButton: 'ПОДОБРАТЬ СИСТЕМУ',
      brakesFeature1: 'Торможение 100-0 за 30м',
      brakesFeature2: 'Карбон-керамика',
      brakesFeature3: 'До 8 поршней',
      wheelsTitle: 'Кованые диски',
      wheelsDesc: 'Эксклюзивные кованые диски ручной работы. Индивидуальный дизайн, любые размеры и цвета. Легкие, прочные и уникальные — созданы специально для вашего автомобиля.',
      wheelsButton: 'РАССЧИТАТЬ СТОИМОСТЬ',
      wheelsFeature1: 'На 30% легче литых',
      wheelsFeature2: 'Любой дизайн',
      wheelsFeature3: '3 года гарантия',
      suspensionTitle: 'Подвеска',
      suspensionDesc: 'Профессиональные системы подвески: койловеры, пневмоподвеска, стабилизаторы. Улучшение управляемости, регулировка жесткости и клиренса под любые задачи.',
      suspensionButton: 'СМОТРЕТЬ КАТАЛОГ',
      suspensionFeature1: 'Регулировка высоты',
      suspensionFeature2: 'Койловеры/Пневмо',
      suspensionFeature3: 'Улучшенная управляемость',
      projectsTitle1: 'Проекты',
      projectsTitle2: 'под ключ',
      projectsSubtitle: 'Комплексные решения для популярных моделей. Готовые спек-листы модификаций: от выхлопной системы до полной трансформации автомобиля.',
      projectsButton: 'СМОТРЕТЬ ВСЕ ПРОЕКТЫ',
      hp: 'л.с.',
      kg: 'кг',
      mods: 'модификаций',
      videoTitle: 'Видеоматериалы'
    },
    en: {
      heroTitle1: 'AUTOMOTIVE SERVICES',
      heroTitle2: 'FOR YOUR CAR',
      heroSubtitle: 'Premium service for your vehicle',
      heroCTA: 'Our Services',
      aboutTitle: 'About Us',
      aboutText1: 'Night, empty streets, ringing silence and your car.',
      aboutText2: 'What will you choose — loud quality sound or silent ride?',
      aboutText3: 'With DGT exhaust systems you will feel like the king of the road. You create the sound of your mood.',
      aboutButton: 'LEARN MORE',
      servicesTitle: 'Our Services',
      exhaustTitle: 'Exhaust Systems',
      exhaustDesc: 'Premium titanium and steel exhaust systems from world manufacturers. Improved sound, performance and weight reduction of your car by 8-15 kg.',
      exhaustButton: 'CHOOSE SYSTEM',
      exhaustFeature1: 'Weight reduction up to 15kg',
      exhaustFeature2: 'Enhanced sound',
      exhaustFeature3: '+10-20 hp',
      brakesTitle: 'Brake Systems',
      brakesDesc: 'High-performance brake systems with multi-piston calipers and carbon-ceramic discs. Maximum control and safety at any speed.',
      brakesButton: 'SELECT SYSTEM',
      brakesFeature1: 'Braking 100-0 in 30m',
      brakesFeature2: 'Carbon-ceramic',
      brakesFeature3: 'Up to 8 pistons',
      wheelsTitle: 'Forged Wheels',
      wheelsDesc: 'Exclusive handcrafted forged wheels. Individual design, any sizes and colors. Lightweight, durable and unique — created specially for your car.',
      wheelsButton: 'CALCULATE COST',
      wheelsFeature1: '30% lighter than cast',
      wheelsFeature2: 'Any design',
      wheelsFeature3: '3 year warranty',
      suspensionTitle: 'Suspension',
      suspensionDesc: 'Professional suspension systems: coilovers, air suspension, stabilizers. Improved handling, adjustable stiffness and clearance for any task.',
      suspensionButton: 'VIEW CATALOG',
      suspensionFeature1: 'Height adjustment',
      suspensionFeature2: 'Coilovers/Air',
      suspensionFeature3: 'Better handling',
      projectsTitle1: 'Turnkey',
      projectsTitle2: 'Projects',
      projectsSubtitle: 'Comprehensive solutions for popular models. Ready spec lists of modifications: from exhaust system to complete car transformation.',
      projectsButton: 'VIEW ALL PROJECTS',
      hp: 'hp',
      kg: 'kg',
      mods: 'modifications',
      videoTitle: 'Video Materials'
    }
  }

  const t = translations[currentLang]

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget
    element.classList.add(styles.clicked)
    setTimeout(() => {
      element.classList.remove(styles.clicked)
    }, 600)
  }

  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services')
    servicesSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

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
            <button onClick={scrollToServices} className={styles.ctaButton}>
              {t.heroCTA}
            </button>
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

      {/* Services Header */}
      <section className={styles.servicesHeader} id="services">
        <h2 className={styles.servicesHeaderTitle}>{t.servicesTitle}</h2>
      </section>

      <section className={styles.serviceSection} id="exhaust">
        <div className={styles.serviceBgImage} onClick={handleImageClick}>
          <Image src="/vyhlop.png" alt="Exhaust System" fill style={{ objectFit: 'contain' }} />
        </div>
        <div className={styles.serviceOverlay}></div>
        <div className={styles.smokeEffect}></div>
        <div className={styles.serviceContainer}>
          <div className={styles.serviceContent}>
            <div className={styles.serviceText}>
              <div className={styles.serviceNumber}>01</div>
              <h2 className={styles.serviceTitle}>{t.exhaustTitle}</h2>
              <p className={styles.serviceDescription}>{t.exhaustDesc}</p>
              <div className={styles.serviceFeatures}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>⚡</div>
                  <span>{t.exhaustFeature1}</span>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>🔊</div>
                  <span>{t.exhaustFeature2}</span>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>💪</div>
                  <span>{t.exhaustFeature3}</span>
                </div>
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
              <div className={styles.serviceNumber}>02</div>
              <h2 className={styles.serviceTitle}>{t.brakesTitle}</h2>
              <p className={styles.serviceDescription}>{t.brakesDesc}</p>
              <div className={styles.serviceFeatures}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>🎯</div>
                  <span>{t.brakesFeature1}</span>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>💎</div>
                  <span>{t.brakesFeature2}</span>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>🔧</div>
                  <span>{t.brakesFeature3}</span>
                </div>
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
              <div className={styles.serviceNumber}>03</div>
              <h2 className={styles.serviceTitle}>{t.wheelsTitle}</h2>
              <p className={styles.serviceDescription}>{t.wheelsDesc}</p>
              <div className={styles.serviceFeatures}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>⚖️</div>
                  <span>{t.wheelsFeature1}</span>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>🎨</div>
                  <span>{t.wheelsFeature2}</span>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>✅</div>
                  <span>{t.wheelsFeature3}</span>
                </div>
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
              <div className={styles.serviceNumber}>04</div>
              <h2 className={styles.serviceTitle}>{t.suspensionTitle}</h2>
              <p className={styles.serviceDescription}>{t.suspensionDesc}</p>
              <div className={styles.serviceFeatures}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>📏</div>
                  <span>{t.suspensionFeature1}</span>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>🔩</div>
                  <span>{t.suspensionFeature2}</span>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>🏎️</div>
                  <span>{t.suspensionFeature3}</span>
                </div>
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

      <Footer currentLang={currentLang} />
    </>
  )
}
