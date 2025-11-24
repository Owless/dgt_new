'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import Tilt from 'react-parallax-tilt'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './catalog.module.css'

gsap.registerPlugin(ScrollTrigger)

// 3D Sphere Component
function AnimatedSphere() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#dc2626"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

export default function CatalogPage() {
  const [currentLang, setCurrentLang] = useState<'ru' | 'en'>('ru')
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })

  const translations = {
    ru: {
      pageTitle: 'КАТАЛОГ УСЛУГ',
      pageSubtitle: 'Премиальное обслуживание вашего автомобиля',
      centerTitle: 'ПРОЕКТЫ ПОД КЛЮЧ',
      centerDesc: 'Комплексные решения для вашего автомобиля',
      centerButton: 'СМОТРЕТЬ ПРОЕКТЫ',
      viewDetails: 'ПОДРОБНЕЕ',
      services: [
        {
          title: 'ВЫХЛОПНЫЕ СИСТЕМЫ',
          description: 'Премиальные титановые и стальные выхлопные системы от мировых производителей.',
          image: '/vyhlop.png',
          link: '/exhaust',
          stats: [
            { label: 'Мощность', value: '+15%', icon: '⚡' },
            { label: 'Вес', value: '-12 кг', icon: '⚖️' },
            { label: 'Звук', value: 'Premium', icon: '🔊' }
          ],
          color: '#dc2626'
        },
        {
          title: 'ТОРМОЗНЫЕ СИСТЕМЫ',
          description: 'Высокопроизводительные тормозные системы с карбон-керамическими дисками.',
          image: '/disk.png',
          link: '/brakes',
          stats: [
            { label: 'Остановка', value: '-30%', icon: '🎯' },
            { label: 'Надежность', value: '100%', icon: '✓' },
            { label: 'Температура', value: '1200°C', icon: '🔥' }
          ],
          color: '#ef4444'
        },
        {
          title: 'КОВАНЫЕ ДИСКИ',
          description: 'Эксклюзивные кованые диски ручной работы. Легкие, прочные и уникальные.',
          image: '/disks.png',
          link: '/wheels',
          stats: [
            { label: 'Вес', value: '-40%', icon: '💪' },
            { label: 'Прочность', value: '+200%', icon: '🛡️' },
            { label: 'Дизайн', value: 'Custom', icon: '✨' }
          ],
          color: '#f87171'
        },
        {
          title: 'ПОДВЕСКА',
          description: 'Профессиональные системы подвески: койловеры, пневмоподвеска, стабилизаторы.',
          image: '/podveska.png',
          link: '/suspension',
          stats: [
            { label: 'Управление', value: '+50%', icon: '🎮' },
            { label: 'Комфорт', value: 'Max', icon: '☁️' },
            { label: 'Клиренс', value: '±100мм', icon: '📏' }
          ],
          color: '#fca5a5'
        }
      ]
    },
    en: {
      pageTitle: 'SERVICE CATALOG',
      pageSubtitle: 'Premium service for your vehicle',
      centerTitle: 'TURNKEY PROJECTS',
      centerDesc: 'Comprehensive solutions for your car',
      centerButton: 'VIEW PROJECTS',
      viewDetails: 'VIEW DETAILS',
      services: [
        {
          title: 'EXHAUST SYSTEMS',
          description: 'Premium titanium and steel exhaust systems from world manufacturers.',
          image: '/vyhlop.png',
          link: '/exhaust',
          stats: [
            { label: 'Power', value: '+15%', icon: '⚡' },
            { label: 'Weight', value: '-12 kg', icon: '⚖️' },
            { label: 'Sound', value: 'Premium', icon: '🔊' }
          ],
          color: '#dc2626'
        },
        {
          title: 'BRAKE SYSTEMS',
          description: 'High-performance brake systems with carbon-ceramic discs.',
          image: '/disk.png',
          link: '/brakes',
          stats: [
            { label: 'Stopping', value: '-30%', icon: '🎯' },
            { label: 'Reliability', value: '100%', icon: '✓' },
            { label: 'Temperature', value: '1200°C', icon: '🔥' }
          ],
          color: '#ef4444'
        },
        {
          title: 'FORGED WHEELS',
          description: 'Exclusive handcrafted forged wheels. Lightweight, durable and unique.',
          image: '/disks.png',
          link: '/wheels',
          stats: [
            { label: 'Weight', value: '-40%', icon: '💪' },
            { label: 'Strength', value: '+200%', icon: '🛡️' },
            { label: 'Design', value: 'Custom', icon: '✨' }
          ],
          color: '#f87171'
        },
        {
          title: 'SUSPENSION',
          description: 'Professional suspension systems: coilovers, air suspension, stabilizers.',
          image: '/podveska.png',
          link: '/suspension',
          stats: [
            { label: 'Handling', value: '+50%', icon: '🎮' },
            { label: 'Comfort', value: 'Max', icon: '☁️' },
            { label: 'Clearance', value: '±100mm', icon: '📏' }
          ],
          color: '#fca5a5'
        }
      ]
    }
  }

  const t = translations[currentLang]

  // Particles initialization
  const particlesInit = async (engine: any) => {
    await loadSlim(engine)
  }

  // GSAP animations for center block
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.center-title', {
        scrollTrigger: {
          trigger: '.center-title',
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1
        },
        opacity: 0,
        scale: 0.5,
        duration: 1
      })
    })

    return () => ctx.revert()
  }, [])

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <>
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />
      
      <main className={styles.catalogPage}>
        {/* Particles Background */}
        <Particles
          id="tsparticles"
          className={styles.particles}
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: { color: { value: 'transparent' } },
            fpsLimit: 60,
            particles: {
              number: { 
                value: 50, 
                density: { 
                  enable: true
                } 
              },
              color: { value: '#dc2626' },
              shape: { type: 'circle' },
              opacity: {
                value: { min: 0.1, max: 0.3 },
                animation: { 
                  enable: true, 
                  speed: 1, 
                  sync: false 
                }
              },
              size: {
                value: { min: 1, max: 3 },
                animation: { 
                  enable: true, 
                  speed: 2, 
                  sync: false 
                }
              },
              links: {
                enable: true,
                distance: 150,
                color: '#dc2626',
                opacity: 0.2,
                width: 1
              },
              move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: false,
                straight: false,
                outModes: 'bounce'
              }
            },
            interactivity: {
              detectsOn: 'window',
              events: {
                onHover: { 
                  enable: true, 
                  mode: 'grab' 
                },
                onClick: { 
                  enable: true, 
                  mode: 'push' 
                },
                resize: {
                  enable: true
                }
              },
              modes: {
                grab: { 
                  distance: 140, 
                  links: { 
                    opacity: 0.5 
                  } 
                },
                push: { 
                  quantity: 4 
                }
              }
            },
            detectRetina: true
          }}
        />

        {/* Hero Section with Parallax */}
        <motion.div 
          ref={heroRef}
          className={styles.heroSection}
          style={{ y: smoothY, opacity, scale }}
        >
          <div className={styles.hero3D}>
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <AnimatedSphere />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </div>

          <motion.h1 
            className={styles.pageTitle}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {t.pageTitle}
          </motion.h1>
          
          <motion.p 
            className={styles.pageSubtitle}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {t.pageSubtitle}
          </motion.p>

          <motion.div
            className={styles.scrollIndicator}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { delay: 1, duration: 0.5 },
              y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
            }}
          >
            <div className={styles.mouse}>
              <div className={styles.wheel}></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Center Block - Projects */}
        <motion.div 
          className={styles.centerBlock}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="#dc2626"
            glareBorderRadius="24px"
          >
            <div className={styles.centerContent}>
              <div className={styles.centerGlow}></div>
              <div className={styles.centerInner}>
                <motion.h2 
                  className="center-title"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {t.centerTitle}
                </motion.h2>
                <motion.p 
                  className={styles.centerDesc}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {t.centerDesc}
                </motion.p>
                <Link href="/projects">
                  <motion.button
                    className={styles.centerButton}
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(220, 38, 38, 0.6)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{t.centerButton}</span>
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                      <path d="M1 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </motion.button>
                </Link>
              </div>
            </div>
          </Tilt>
        </motion.div>

        {/* Services Grid with Framer Motion */}
        <motion.div 
          ref={containerRef}
          className={styles.servicesGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {t.services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -15 }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor={service.color}
                glareBorderRadius="24px"
                scale={1.02}
              >
                <Link
                  href={service.link}
                  className={styles.serviceCard}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  style={{ '--card-color': service.color } as React.CSSProperties}
                >
                  <motion.div 
                    className={styles.cardGlow}
                    animate={activeCard === index ? { 
                      opacity: 1,
                      scale: [1, 1.2, 1],
                    } : { opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  
                  <motion.div 
                    className={styles.cardImage}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      style={{ objectFit: 'contain' }}
                      loading="lazy"
                    />
                    <div className={styles.cardImageOverlay}></div>
                  </motion.div>

                  <div className={styles.cardContent}>
                    <motion.h3 
                      className={styles.cardTitle}
                      style={{ fontFamily: 'Rajdhani, sans-serif' }}
                    >
                      {service.title}
                    </motion.h3>
                    <p className={styles.cardDescription}>{service.description}</p>

                    <div className={styles.cardStats}>
                      {service.stats.map((stat, idx) => (
                        <motion.div 
                          key={idx} 
                          className={styles.statItem}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className={styles.statIcon}>{stat.icon}</span>
                          <div className={styles.statInfo}>
                            <span className={styles.statValue}>{stat.value}</span>
                            <span className={styles.statLabel}>{stat.label}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div 
                      className={styles.cardButton}
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span>{t.viewDetails}</span>
                      <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                        <path d="M1 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </motion.div>
                  </div>

                  <div className={styles.cardBorder}></div>
                </Link>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer currentLang={currentLang} />
    </>
  )
}
