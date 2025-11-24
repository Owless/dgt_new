'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './catalog.module.css'

export default function CatalogPage() {
  const [currentLang, setCurrentLang] = useState<'ru' | 'en'>('ru')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const translations = {
    ru: {
      pageTitle: 'Каталог услуг',
      pageSubtitle: 'Премиальное обслуживание вашего автомобиля',
      centerTitle: 'Проекты под ключ',
      centerDesc: 'Комплексные решения для вашего автомобиля',
      centerButton: 'Смотреть проекты',
      services: [
        {
          title: 'Выхлопные системы',
          description: 'Премиальные титановые и стальные выхлопные системы. Улучшение звука и производительности.',
          image: '/vyhlop.png',
          link: '/exhaust',
          stats: [
            { label: 'Мощность', value: '+15%' },
            { label: 'Вес', value: '-12 кг' },
            { label: 'Звук', value: 'Premium' }
          ]
        },
        {
          title: 'Тормозные системы',
          description: 'Высокопроизводительные тормозные системы с карбон-керамическими дисками.',
          image: '/disk.png',
          link: '/brakes',
          stats: [
            { label: 'Остановка', value: '-30%' },
            { label: 'Надежность', value: '100%' },
            { label: 'Температура', value: '1200°C' }
          ]
        },
        {
          title: 'Кованые диски',
          description: 'Эксклюзивные кованые диски ручной работы. Легкие, прочные и уникальные.',
          image: '/disks.png',
          link: '/wheels',
          stats: [
            { label: 'Вес', value: '-40%' },
            { label: 'Прочность', value: '+200%' },
            { label: 'Дизайн', value: 'Custom' }
          ]
        },
        {
          title: 'Подвеска',
          description: 'Профессиональные системы подвески: койловеры, пневмоподвеска, стабилизаторы.',
          image: '/podveska.png',
          link: '/suspension',
          stats: [
            { label: 'Управление', value: '+50%' },
            { label: 'Комфорт', value: 'Max' },
            { label: 'Клиренс', value: '±100мм' }
          ]
        }
      ]
    },
    en: {
      pageTitle: 'Service Catalog',
      pageSubtitle: 'Premium service for your vehicle',
      centerTitle: 'Turnkey Projects',
      centerDesc: 'Comprehensive solutions for your car',
      centerButton: 'View Projects',
      services: [
        {
          title: 'Exhaust Systems',
          description: 'Premium titanium and steel exhaust systems. Improved sound and performance.',
          image: '/vyhlop.png',
          link: '/exhaust',
          stats: [
            { label: 'Power', value: '+15%' },
            { label: 'Weight', value: '-12 kg' },
            { label: 'Sound', value: 'Premium' }
          ]
        },
        {
          title: 'Brake Systems',
          description: 'High-performance brake systems with carbon-ceramic discs.',
          image: '/disk.png',
          link: '/brakes',
          stats: [
            { label: 'Stopping', value: '-30%' },
            { label: 'Reliability', value: '100%' },
            { label: 'Temperature', value: '1200°C' }
          ]
        },
        {
          title: 'Forged Wheels',
          description: 'Exclusive handcrafted forged wheels. Lightweight, durable and unique.',
          image: '/disks.png',
          link: '/wheels',
          stats: [
            { label: 'Weight', value: '-40%' },
            { label: 'Strength', value: '+200%' },
            { label: 'Design', value: 'Custom' }
          ]
        },
        {
          title: 'Suspension',
          description: 'Professional suspension systems: coilovers, air suspension, stabilizers.',
          image: '/podveska.png',
          link: '/suspension',
          stats: [
            { label: 'Handling', value: '+50%' },
            { label: 'Comfort', value: 'Max' },
            { label: 'Clearance', value: '±100mm' }
          ]
        }
      ]
    }
  }

  const t = translations[currentLang]

  // Mouse tracking (throttled)
  useEffect(() => {
    let rafId: number
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return
      
      rafId = requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: (e.clientY / window.innerHeight) * 2 - 1
        })
        rafId = 0
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />
      
      <main className={styles.catalogPage}>
        {/* Animated Background */}
        <div className={styles.bgAnimation}>
          <div className={styles.bgGradient1}></div>
          <div className={styles.bgGradient2}></div>
          <div className={styles.bgGradient3}></div>
        </div>

        <div className={styles.catalogHeader}>
          <h1 className={styles.pageTitle}>{t.pageTitle}</h1>
          <p className={styles.pageSubtitle}>{t.pageSubtitle}</p>
        </div>

        {/* Центральный блок - Проекты */}
        <div className={styles.centerBlock}>
          <div className={styles.centerContent}>
            <div className={styles.centerGlow}></div>
            <div className={styles.centerInner}>
              <h2 className={styles.centerTitle}>{t.centerTitle}</h2>
              <p className={styles.centerDesc}>{t.centerDesc}</p>
              <Link href="/projects" className={styles.centerButton}>
                <span>{t.centerButton}</span>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                  <path d="M1 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Сетка услуг 2x2 */}
        <div className={styles.servicesGrid}>
          {t.services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className={`${styles.serviceCard} ${activeCard === index ? styles.active : ''}`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={styles.cardGlow}></div>
              
              <div className={styles.cardImage}>
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  style={{ objectFit: 'contain' }}
                  loading="lazy"
                />
                <div className={styles.cardImageOverlay}></div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>

                <div className={styles.cardStats}>
                  {service.stats.map((stat, idx) => (
                    <div key={idx} className={styles.statItem}>
                      <span className={styles.statValue}>{stat.value}</span>
                      <span className={styles.statLabel}>{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.cardButton}>
                  <span>Подробнее</span>
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                    <path d="M1 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>

              <div className={styles.cardBorder}></div>
            </Link>
          ))}
        </div>
      </main>

      <Footer currentLang={currentLang} />
    </>
  )
}
