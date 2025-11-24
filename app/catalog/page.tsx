'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
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
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#dc2626"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  )
}

export default function CatalogPage() {
  const [currentLang, setCurrentLang] = useState<'ru' | 'en'>('ru')
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })

  const translations = {
    ru: {
      pageTitle: 'КАТАЛОГ',
      pageSubtitle: 'ПРЕМИАЛЬНЫХ УСЛУГ',
      centerTitle: 'КОМПЛЕКСНЫЕ ПРОЕКТЫ',
      centerDesc: 'Индивидуальные решения для вашего автомобиля. От концепции до реализации.',
      centerButton: 'КОНСУЛЬТАЦИЯ',
      viewDetails: 'УЗНАТЬ БОЛЬШЕ',
      services: [
        {
          title: 'ВЫХЛОПНЫЕ СИСТЕМЫ',
          subtitle: 'EXHAUST SYSTEMS',
          description: 'Титановые и стальные системы от ведущих мировых производителей. Инженерное совершенство для максимальной производительности.',
          image: '/vyhlop.png',
          link: '/exhaust',
          specs: [
            { label: 'Увеличение мощности', value: '15-25%' },
            { label: 'Снижение веса', value: '8-15 кг' },
            { label: 'Материал', value: 'Ti Grade 2' }
          ],
          color: '#dc2626',
          gradient: 'linear-gradient(135deg, #dc2626, #991b1b)'
        },
        {
          title: 'ТОРМОЗНЫЕ СИСТЕМЫ',
          subtitle: 'BRAKE SYSTEMS',
          description: 'Высокопроизводительные системы с карбон-керамическими дисками и многопоршневыми суппортами. Абсолютный контроль.',
          image: '/disk.png',
          link: '/brakes',
          specs: [
            { label: 'Эффективность торможения', value: '+40%' },
            { label: 'Рабочая температура', value: '1200°C' },
            { label: 'Надежность', value: '100K км' }
          ],
          color: '#ef4444',
          gradient: 'linear-gradient(135deg, #ef4444, #dc2626)'
        },
        {
          title: 'КОВАНЫЕ ДИСКИ',
          subtitle: 'FORGED WHEELS',
          description: 'Эксклюзивные кованые диски ручной работы. Индивидуальный дизайн, невероятная прочность, минимальный вес.',
          image: '/disks.png',
          link: '/wheels',
          specs: [
            { label: 'Снижение веса', value: 'до 40%' },
            { label: 'Прочность', value: '+200%' },
            { label: 'Производство', value: 'Custom' }
          ],
          color: '#f87171',
          gradient: 'linear-gradient(135deg, #f87171, #ef4444)'
        },
        {
          title: 'ПОДВЕСКА',
          subtitle: 'SUSPENSION',
          description: 'Профессиональные системы подвески премиум-класса. Койловеры, пневмоподвеска, активная стабилизация.',
          image: '/podveska.png',
          link: '/suspension',
          specs: [
            { label: 'Улучшение управляемости', value: '+50%' },
            { label: 'Диапазон клиренса', value: '±100 мм' },
            { label: 'Регулировка жесткости', value: '32 уровня' }
          ],
          color: '#fca5a5',
          gradient: 'linear-gradient(135deg, #fca5a5, #f87171)'
        }
      ]
    },
    en: {
      pageTitle: 'CATALOG',
      pageSubtitle: 'PREMIUM SERVICES',
      centerTitle: 'COMPREHENSIVE PROJECTS',
      centerDesc: 'Individual solutions for your car. From concept to implementation.',
      centerButton: 'CONSULTATION',
      viewDetails: 'LEARN MORE',
      services: [
        {
          title: 'EXHAUST SYSTEMS',
          subtitle: 'EXHAUST SYSTEMS',
          description: 'Titanium and steel systems from leading world manufacturers. Engineering perfection for maximum performance.',
          image: '/vyhlop.png',
          link: '/exhaust',
          specs: [
            { label: 'Power increase', value: '15-25%' },
            { label: 'Weight reduction', value: '8-15 kg' },
            { label: 'Material', value: 'Ti Grade 2' }
          ],
          color: '#dc2626',
          gradient: 'linear-gradient(135deg, #dc2626, #991b1b)'
        },
        {
          title: 'BRAKE SYSTEMS',
          subtitle: 'BRAKE SYSTEMS',
          description: 'High-performance systems with carbon-ceramic discs and multi-piston calipers. Absolute control.',
          image: '/disk.png',
          link: '/brakes',
          specs: [
            { label: 'Braking efficiency', value: '+40%' },
            { label: 'Working temperature', value: '1200°C' },
            { label: 'Reliability', value: '100K km' }
          ],
          color: '#ef4444',
          gradient: 'linear-gradient(135deg, #ef4444, #dc2626)'
        },
        {
          title: 'FORGED WHEELS',
          subtitle: 'FORGED WHEELS',
          description: 'Exclusive handcrafted forged wheels. Individual design, incredible strength, minimum weight.',
          image: '/disks.png',
          link: '/wheels',
          specs: [
            { label: 'Weight reduction', value: 'up to 40%' },
            { label: 'Strength', value: '+200%' },
            { label: 'Production', value: 'Custom' }
          ],
          color: '#f87171',
          gradient: 'linear-gradient(135deg, #f87171, #ef4444)'
        },
        {
          title: 'SUSPENSION',
          subtitle: 'SUSPENSION',
          description: 'Premium professional suspension systems. Coilovers, air suspension, active stabilization.',
          image: '/podveska.png',
          link: '/suspension',
          specs: [
            { label: 'Handling improvement', value: '+50%' },
            { label: 'Clearance range', value: '±100 mm' },
            { label: 'Stiffness adjustment', value: '32 levels' }
          ],
          color: '#fca5a5',
          gradient: 'linear-gradient(135deg, #fca5a5, #f87171)'
        }
      ]
    }
  }

  const t = translations[currentLang]

  // Cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate numbers
      gsap.utils.toArray('.stat-number').forEach((elem: any) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
          },
          textContent: 0,
          duration: 2,
          snap: { textContent: 1 },
          stagger: 0.1
        })
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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <>
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />
      
      {/* Custom Cursor */}
      <motion.div
        className={styles.customCursor}
        animate={{
          x: cursorPosition.x - 10,
          y: cursorPosition.y - 10,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      <main className={styles.catalogPage}>
        {/* Animated Background Grid */}
        <div className={styles.bgGrid}>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.gridLine}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.03 }}
              transition={{ delay: i * 0.05, duration: 1 }}
            />
          ))}
        </div>

        {/* Animated Background Gradients */}
        <div className={styles.bgAnimation}>
          <div className={styles.bgGradient1}></div>
          <div className={styles.bgGradient2}></div>
        </div>

        {/* Hero Section with Parallax */}
        <motion.div 
          ref={heroRef}
          className={styles.heroSection}
          style={{ y: smoothY, opacity }}
        >
          <div className={styles.hero3D}>
            <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
              <ambientLight intensity={0.3} />
              <directionalLight position={[5, 5, 5]} intensity={0.8} />
              <pointLight position={[-5, -5, -5]} intensity={0.5} color="#dc2626" />
              <AnimatedSphere />
              <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
              />
            </Canvas>
          </div>

          <motion.div className={styles.heroContent}>
            <motion.div
              className={styles.heroLabel}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className={styles.labelLine}></span>
              <span>DGT EXHAUST SYSTEM</span>
              <span className={styles.labelLine}></span>
            </motion.div>

            <motion.h1 
              className={styles.pageTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {t.pageTitle}
            </motion.h1>
            
            <motion.p 
              className={styles.pageSubtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {t.pageSubtitle}
            </motion.p>

            <motion.div
              className={styles.heroStats}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className={styles.statBox}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Проектов</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Лет опыта</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>Довольных клиентов</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.scrollIndicator}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { delay: 1.2, duration: 0.5 },
              y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
            }}
          >
            <span>SCROLL</span>
            <div className={styles.scrollLine}></div>
          </motion.div>
        </motion.div>

        {/* Center Block - Projects */}
        <motion.div 
          className={styles.centerBlock}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Tilt
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            glareEnable={true}
            glareMaxOpacity={0.15}
            glareColor="#dc2626"
            glareBorderRadius="16px"
          >
            <div className={styles.centerContent}>
              <div className={styles.centerPattern}></div>
              <div className={styles.centerGlow}></div>
              <div className={styles.centerInner}>
                <motion.div
                  className={styles.centerLabel}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className={styles.labelLine}></span>
                  <span>PREMIUM PROJECTS</span>
                  <span className={styles.labelLine}></span>
                </motion.div>

                <motion.h2 
                  className={styles.centerTitle}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {t.centerTitle}
                </motion.h2>

                <motion.p 
                  className={styles.centerDesc}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {t.centerDesc}
                </motion.p>

                <Link href="/projects">
                  <motion.button
                    className={styles.centerButton}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span>{t.centerButton}</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                </Link>
              </div>
            </div>
          </Tilt>
        </motion.div>

        {/* Services Grid */}
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
            >
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor={service.color}
                glareBorderRadius="16px"
                scale={1.01}
              >
                <Link
                  href={service.link}
                  className={styles.serviceCard}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  style={{ 
                    '--card-color': service.color,
                    '--card-gradient': service.gradient
                  } as React.CSSProperties}
                >
                  <motion.div 
                    className={styles.cardGlow}
                    animate={activeCard === index ? { 
                      opacity: [0.3, 0.6, 0.3],
                    } : { opacity: 0 }}
                    transition={{ duration: 3, repeat: Infinity }}
                  ></motion.div>

                  <div className={styles.cardPattern}></div>
                  
                  <motion.div 
                    className={styles.cardImage}
                    animate={activeCard === index ? { scale: 1.08 } : { scale: 1 }}
                    transition={{ duration: 0.6 }}
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
                    <div className={styles.cardHeader}>
                      <div className={styles.cardNumber}>0{index + 1}</div>
                      <div className={styles.cardSubtitle}>{service.subtitle}</div>
                    </div>

                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardDescription}>{service.description}</p>

                    <div className={styles.cardSpecs}>
                      {service.specs.map((spec, idx) => (
                        <motion.div 
                          key={idx} 
                          className={styles.specItem}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx }}
                          viewport={{ once: true }}
                        >
                          <span className={styles.specLabel}>{spec.label}</span>
                          <div className={styles.specDivider}></div>
                          <span className={styles.specValue}>{spec.value}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div 
                      className={styles.cardButton}
                      animate={activeCard === index ? { x: 5 } : { x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>{t.viewDetails}</span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </motion.div>
                  </div>

                  <div className={styles.cardBorderTop}></div>
                  <div className={styles.cardBorderBottom}></div>
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
