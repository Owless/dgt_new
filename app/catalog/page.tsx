'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './catalog.module.css'

export default function CatalogPage() {
  const [currentLang, setCurrentLang] = useState<'ru' | 'en'>('ru')
  const [activeOrbit, setActiveOrbit] = useState<number | null>(null)

  const translations = {
    ru: {
      pageTitle: 'Каталог услуг',
      pageSubtitle: 'Выберите категорию для детального просмотра',
      centerTitle: 'Проекты',
      centerSubtitle: 'под ключ',
      services: [
        {
          title: 'Выхлопные системы',
          shortTitle: 'Выхлоп',
          description: 'Премиальные титановые и стальные системы',
          icon: '🔥',
          link: '/exhaust',
          color: '#dc2626'
        },
        {
          title: 'Тормозные системы',
          shortTitle: 'Тормоза',
          description: 'Высокопроизводительные тормоза',
          icon: '🛑',
          link: '/brakes',
          color: '#ef4444'
        },
        {
          title: 'Кованые диски',
          shortTitle: 'Диски',
          description: 'Эксклюзивные кованые диски',
          icon: '⚙️',
          link: '/wheels',
          color: '#f87171'
        },
        {
          title: 'Подвеска',
          shortTitle: 'Подвеска',
          description: 'Профессиональные системы подвески',
          icon: '🔧',
          link: '/suspension',
          color: '#fca5a5'
        }
      ]
    },
    en: {
      pageTitle: 'Service Catalog',
      pageSubtitle: 'Choose a category for detailed view',
      centerTitle: 'Turnkey',
      centerSubtitle: 'Projects',
      services: [
        {
          title: 'Exhaust Systems',
          shortTitle: 'Exhaust',
          description: 'Premium titanium and steel systems',
          icon: '🔥',
          link: '/exhaust',
          color: '#dc2626'
        },
        {
          title: 'Brake Systems',
          shortTitle: 'Brakes',
          description: 'High-performance brakes',
          icon: '🛑',
          link: '/brakes',
          color: '#ef4444'
        },
        {
          title: 'Forged Wheels',
          shortTitle: 'Wheels',
          description: 'Exclusive forged wheels',
          icon: '⚙️',
          link: '/wheels',
          color: '#f87171'
        },
        {
          title: 'Suspension',
          shortTitle: 'Suspension',
          description: 'Professional suspension systems',
          icon: '🔧',
          link: '/suspension',
          color: '#fca5a5'
        }
      ]
    }
  }

  const t = translations[currentLang]

  return (
    <>
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />
      
      <main className={styles.catalogPage}>
        <div className={styles.catalogHeader}>
          <h1 className={styles.pageTitle}>{t.pageTitle}</h1>
          <p className={styles.pageSubtitle}>{t.pageSubtitle}</p>
        </div>

        <div className={styles.atomContainer}>
          {/* Орбиты */}
          <div className={styles.orbit1}></div>
          <div className={styles.orbit2}></div>
          <div className={styles.orbit3}></div>

          {/* Центральное ядро - Проекты */}
          <Link href="/projects" className={styles.nucleus}>
            <div className={styles.nucleusGlow}></div>
            <div className={styles.nucleusContent}>
              <span className={styles.nucleusTitle}>{t.centerTitle}</span>
              <span className={styles.nucleusSubtitle}>{t.centerSubtitle}</span>
            </div>
          </Link>

          {/* Электроны - Услуги */}
          {t.services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className={`${styles.electron} ${styles[`electron${index + 1}`]} ${
                activeOrbit === index ? styles.active : ''
              }`}
              onMouseEnter={() => setActiveOrbit(index)}
              onMouseLeave={() => setActiveOrbit(null)}
              style={{ '--orbit-color': service.color } as React.CSSProperties}
            >
              <div className={styles.electronInner}>
                <span className={styles.electronIcon}>{service.icon}</span>
                <span className={styles.electronTitle}>{service.shortTitle}</span>
              </div>
              <div className={styles.electronTooltip}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Легенда услуг */}
        <div className={styles.servicesLegend}>
          {t.services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className={styles.legendItem}
              style={{ '--legend-color': service.color } as React.CSSProperties}
            >
              <span className={styles.legendIcon}>{service.icon}</span>
              <div className={styles.legendText}>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer currentLang={currentLang} />
    </>
  )
}
