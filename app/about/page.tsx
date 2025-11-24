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
        {/* Ваш контент страницы About здесь... */}
        {/* (все секции hero, story, stats, values, team, cta) */}
      </div>

      <Footer currentLang={currentLang} />
    </>
  )
}
