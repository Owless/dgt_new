'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './about.module.css'

export default function AboutPage() {
  const [currentLang, setCurrentLang] = useState<'ru' | 'en'>('ru')

  const translations = {
    ru: {
      title: 'О нас',
      subtitle: 'История премиального сервиса',
      story: {
        title: 'Наша История',
        text1: 'DGT Exhaust System — это больше, чем просто автосервис. Это команда энтузиастов, влюбленных в автомобили и стремящихся к совершенству в каждой детали.',
        text2: 'Мы начали свой путь с простой идеи: каждый автомобиль заслуживает индивидуального подхода и премиального обслуживания. За годы работы мы превратились в ведущий центр по установке выхлопных систем, тормозов и подвески для премиум-автомобилей.',
        text3: 'Сегодня нам доверяют владельцы Porsche, BMW, Mercedes-AMG, Audi и других премиальных брендов. Наша репутация построена на качестве работы и индивидуальном подходе к каждому клиенту.'
      },
      values: {
        title: 'Наши Ценности',
        quality: { title: 'Качество', desc: 'Работаем только с проверенными брендами и оригинальными комплектующими' },
        expertise: { title: 'Экспертность', desc: 'Наши специалисты регулярно проходят обучение у производителей' },
        individual: { title: 'Индивидуальность', desc: 'Каждый проект уникален, учитываем все пожелания клиента' },
        warranty: { title: 'Гарантия', desc: 'Предоставляем расширенную гарантию на все виды работ' }
      },
      team: {
        title: 'Команда Профессионалов',
        desc: 'За каждым проектом стоят опытные мастера с многолетним стажем работы с премиальными автомобилями'
      },
      stats: { years: 'Лет опыта', projects: 'Реализованных проектов', clients: 'Довольных клиентов', brands: 'Партнерских брендов' },
      cta: { title: 'Готовы начать ваш проект?', desc: 'Свяжитесь с нами для консультации и расчета стоимости', button: 'Связаться с нами' },
      breadcrumb: { home: 'Главная', about: 'О нас' }
    },
    en: {
      title: 'About Us',
      subtitle: 'Premium service history',
      story: {
        title: 'Our Story',
        text1: 'DGT Exhaust System is more than just an auto service. It\'s a team of enthusiasts in love with cars and striving for perfection in every detail.',
        text2: 'We started our journey with a simple idea: every car deserves an individual approach and premium service. Over the years, we have become a leading center for installing exhaust systems, brakes and suspension for premium cars.',
        text3: 'Today we are trusted by owners of Porsche, BMW, Mercedes-AMG, Audi and other premium brands. Our reputation is built on quality of work and individual approach to each client.'
      },
      values: {
        title: 'Our Values',
        quality: { title: 'Quality', desc: 'We work only with proven brands and original components' },
        expertise: { title: 'Expertise', desc: 'Our specialists regularly undergo training from manufacturers' },
        individual: { title: 'Individuality', desc: 'Each project is unique, we take into account all customer wishes' },
        warranty: { title: 'Warranty', desc: 'We provide extended warranty for all types of work' }
      },
      team: {
        title: 'Team of Professionals',
        desc: 'Behind each project are experienced masters with many years of experience working with premium cars'
      },
      stats: { years: 'Years of experience', projects: 'Completed projects', clients: 'Satisfied clients', brands: 'Partner brands' },
      cta: { title: 'Ready to start your project?', desc: 'Contact us for consultation and cost calculation', button: 'Contact Us' },
      breadcrumb: { home: 'Home', about: 'About Us' }
    }
  }

  const t = translations[currentLang]

  return (
    <>
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <div className={styles.aboutPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroImage}>
            <Image 
              src="/descarga.png" 
              alt="About DGT" 
              fill 
              style={{ objectFit: 'cover' }} 
              priority
            />
          </div>
          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link href="/">{t.breadcrumb.home}</Link>
              <span>/</span>
              <span>{t.breadcrumb.about}</span>
            </div>
            <h1 className={styles.heroTitle}>{t.title}</h1>
            <p className={styles.heroSubtitle}>{t.subtitle}</p>
          </div>
        </section>

        {/* Story Section */}
        <section className={styles.storySection}>
          <div className={styles.container}>
            <div className={styles.storyGrid}>
              <div className={styles.storyImage}>
                <Image 
                  src="/descarga.png" 
                  alt="Workshop" 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
              <div className={styles.storyContent}>
                <h2 className={styles.sectionTitle}>{t.story.title}</h2>
                <div className={styles.storyText}>
                  <p>{t.story.text1}</p>
                  <p>{t.story.text2}</p>
                  <p>{t.story.text3}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>{t.stats.years}</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>{t.stats.projects}</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>1000+</div>
                <div className={styles.statLabel}>{t.stats.clients}</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>25+</div>
                <div className={styles.statLabel}>{t.stats.brands}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.valuesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>{t.values.title}</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <h3 className={styles.valueTitle}>{t.values.quality.title}</h3>
                <p className={styles.valueDesc}>{t.values.quality.desc}</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className={styles.valueTitle}>{t.values.expertise.title}</h3>
                <p className={styles.valueDesc}>{t.values.expertise.desc}</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className={styles.valueTitle}>{t.values.individual.title}</h3>
                <p className={styles.valueDesc}>{t.values.individual.desc}</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                </div>
                <h3 className={styles.valueTitle}>{t.values.warranty.title}</h3>
                <p className={styles.valueDesc}>{t.values.warranty.desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.teamSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>{t.team.title}</h2>
            <p className={styles.teamDesc}>{t.team.desc}</p>
            <div className={styles.teamImage}>
              <Image 
                src="/main_image.png" 
                alt="Team" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>{t.cta.title}</h2>
              <p className={styles.ctaDesc}>{t.cta.desc}</p>
              <Link href="/contacts" className={styles.ctaButton}>
                <span>{t.cta.button}</span>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                  <path d="M1 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer currentLang={currentLang} />
    </>
  )
}
