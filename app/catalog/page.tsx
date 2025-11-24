'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './catalog.module.css'

export default function CatalogPage() {
  const [currentLang, setCurrentLang] = useState<'ru' | 'en'>('ru')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

  // Particles animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
    }> = []

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.fillStyle = 'rgba(220, 38, 38, 0.3)'
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.strokeStyle = `rgba(220, 38, 38, ${0.2 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />
      
      <main className={styles.catalogPage}>
        <canvas ref={canvasRef} className={styles.particlesCanvas}></canvas>

        <div className={styles.catalogHeader}>
          <h1 
            className={styles.pageTitle}
            style={{
              transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
            }}
          >
            {t.pageTitle}
          </h1>
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
              style={{
                transform: activeCard === index 
                  ? `perspective(1000px) rotateX(${-mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg) scale(1.05)` 
                  : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
              }}
            >
              <div className={styles.cardGlow}></div>
              
              <div className={styles.cardImage}>
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  style={{ objectFit: 'contain' }}
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
