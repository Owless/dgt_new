'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './projects.module.css'

export default function ProjectsPage() {
  const [currentLang, setCurrentLang] = useState<'ru' | 'en'>('ru')
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
  const [selectedModel, setSelectedModel] = useState<string | null>(null)

  const translations = {
    ru: {
      hero: {
        label: 'Our Projects',
        title: 'Наши',
        titleAccent: 'проекты',
        description: 'Полный спектр работ DGT для вашего автомобиля. Выберите марку и модель, чтобы узнать что мы можем сделать'
      },
      brands: {
        title: 'Выберите марку автомобиля',
        subtitle: 'Мы работаем с премиальными брендами',
        noBrandTitle: 'Не нашли свою марку?',
        noBrandDesc: 'Свяжитесь с менеджером, мы работаем с любыми марками автомобилей',
        contactButton: 'Связаться с менеджером'
      },
      models: {
        title: 'Выберите модель',
        subtitle: 'Доступные модели для'
      },
      specs: {
        title: 'Полный спек-лист работ для',
        selectBrand: 'Выберите марку автомобиля выше',
        selectModel: 'Выберите модель автомобиля выше',
        category: 'Категория',
        work: 'Работа',
        price: 'Стоимость',
        total: 'Общая стоимость проекта',
        from: 'от',
        orderButton: 'Заказать проект'
      },
      categories: {
        exhaust: 'Выхлопная система',
        brakes: 'Тормозная система',
        wheels: 'Диски',
        suspension: 'Подвеска',
        exterior: 'Экстерьер',
        interior: 'Интерьер',
        tuning: 'Тюнинг двигателя',
        electronics: 'Электроника'
      }
    },
    en: {
      hero: {
        label: 'Our Projects',
        title: 'Our',
        titleAccent: 'Projects',
        description: 'Full range of DGT works for your car. Select brand and model to see what we can do'
      },
      brands: {
        title: 'Select your car brand',
        subtitle: 'We work with premium brands',
        noBrandTitle: 'Can\'t find your brand?',
        noBrandDesc: 'Contact our manager, we work with any car brands',
        contactButton: 'Contact Manager'
      },
      models: {
        title: 'Select model',
        subtitle: 'Available models for'
      },
      specs: {
        title: 'Full spec list for',
        selectBrand: 'Select car brand above',
        selectModel: 'Select car model above',
        category: 'Category',
        work: 'Work',
        price: 'Price',
        total: 'Total project cost',
        from: 'from',
        orderButton: 'Order project'
      },
      categories: {
        exhaust: 'Exhaust System',
        brakes: 'Brake System',
        wheels: 'Wheels',
        suspension: 'Suspension',
        exterior: 'Exterior',
        interior: 'Interior',
        tuning: 'Engine Tuning',
        electronics: 'Electronics'
      }
    }
  }

  const t = translations[currentLang]

  // Brands data
  const brands = [
    { id: 'porsche', name: 'PORSCHE' },
    { id: 'bmw', name: 'BMW' },
    { id: 'mercedes', name: 'MERCEDES-AMG' },
    { id: 'audi', name: 'AUDI' },
    { id: 'lamborghini', name: 'LAMBORGHINI' },
    { id: 'ferrari', name: 'FERRARI' }
  ]

  // Models by brand
  const modelsByBrand: Record<string, any[]> = {
    porsche: [
      { id: '911-992', name: '911 (992)' },
      { id: '911-gt3', name: '911 GT3' },
      { id: 'cayenne', name: 'Cayenne' },
      { id: 'panamera', name: 'Panamera' }
    ],
    bmw: [
      { id: 'm3-g80', name: 'M3 (G80)' },
      { id: 'm4', name: 'M4' },
      { id: 'm5', name: 'M5 Competition' },
      { id: 'x5m', name: 'X5M' }
    ],
    mercedes: [
      { id: 'c63', name: 'C63 AMG' },
      { id: 'e63', name: 'E63 AMG' },
      { id: 'gt63', name: 'GT 63 S' },
      { id: 'g63', name: 'G63 AMG' }
    ],
    audi: [
      { id: 'rs6', name: 'RS6 Avant' },
      { id: 'rs7', name: 'RS7' },
      { id: 'rsq8', name: 'RS Q8' },
      { id: 'r8', name: 'R8' }
    ],
    lamborghini: [
      { id: 'huracan', name: 'Huracán EVO' },
      { id: 'huracan-sto', name: 'Huracán STO' },
      { id: 'urus', name: 'Urus' }
    ],
    ferrari: [
      { id: 'f8', name: 'F8 Tributo' },
      { id: 'sf90', name: 'SF90 Stradale' },
      { id: 'roma', name: 'Roma' }
    ]
  }

  // Spec lists by brand and model
  type SpecItem = {
    category: keyof typeof translations.ru.categories
    work: string
    price: number
  }

  const specLists: Record<string, Record<string, SpecItem[]>> = {
    porsche: {
      '911-992': [
        { category: 'exhaust', work: 'DGT Titanium Pro - Титановая выхлопная система', price: 450000 },
        { category: 'brakes', work: 'DGT Carbon Pro - Карбон-керамические тормоза 380mm', price: 750000 },
        { category: 'wheels', work: 'DGT Forged Monoblock 20" - Кованые диски', price: 215000 },
        { category: 'suspension', work: 'DGT Air Pro - Пневмоподвеска', price: 680000 },
        { category: 'exterior', work: 'Карбоновый обвес GT3 Style', price: 850000 },
        { category: 'exterior', work: 'Керамическое покрытие кузова', price: 120000 },
        { category: 'interior', work: 'Перетяжка салона Alcantara', price: 450000 },
        { category: 'tuning', work: 'Stage 2 - Прошивка + downpipe', price: 280000 },
        { category: 'electronics', work: 'Мультимедиа система + камеры 360°', price: 320000 }
      ],
      '911-gt3': [
        { category: 'exhaust', work: 'DGT Titanium Race - Гоночная титановая система', price: 520000 },
        { category: 'brakes', work: 'DGT Carbon Elite - Карбон-керамика 410mm', price: 820000 },
        { category: 'wheels', work: 'DGT Forged Monoblock 21" - Центральная гайка', price: 235000 },
        { category: 'suspension', work: 'DGT Coilover Race - Регулируемые стойки', price: 580000 },
        { category: 'exterior', work: 'Карбоновый аэропакет GT3 RS', price: 1200000 },
        { category: 'interior', work: 'Спортивные сиденья Carbon', price: 680000 },
        { category: 'tuning', work: 'Stage 3 - Турбины + интеркулер', price: 850000 },
        { category: 'electronics', work: 'Телеметрия + dash-камера', price: 280000 }
      ],
      cayenne: [
        { category: 'exhaust', work: 'DGT Steel Performance - Спортивный выхлоп', price: 320000 },
        { category: 'brakes', work: 'DGT Steel Performance - Тормоза 360mm', price: 420000 },
        { category: 'wheels', work: 'DGT Forged Two-Piece 22" - Двухсоставные', price: 318000 },
        { category: 'suspension', work: 'DGT Air Elite - Пневмоподвеска', price: 720000 },
        { category: 'exterior', work: 'Обвес Techart Style', price: 680000 },
        { category: 'interior', work: 'Перетяжка салона кожа + Alcantara', price: 520000 },
        { category: 'tuning', work: 'Stage 1 - Прошивка ECU', price: 180000 },
        { category: 'electronics', work: 'Android Auto + Apple CarPlay', price: 150000 }
      ],
      panamera: [
        { category: 'exhaust', work: 'DGT Titanium Elite - Клапанный выхлоп', price: 480000 },
        { category: 'brakes', work: 'DGT Carbon Pro - Карбон-керамика 395mm', price: 780000 },
        { category: 'wheels', work: 'DGT Forged Monoblock 21" - Кованые', price: 235000 },
        { category: 'suspension', work: 'DGT Coilover Pro - Койловеры', price: 480000 },
        { category: 'exterior', work: 'Обвес + спойлер карбон', price: 720000 },
        { category: 'interior', work: 'Перетяжка потолка Alcantara', price: 280000 },
        { category: 'tuning', work: 'Stage 2 - Прошивка + выхлоп', price: 320000 },
        { category: 'electronics', work: 'Система Night Vision', price: 420000 }
      ]
    },
    bmw: {
      'm3-g80': [
        { category: 'exhaust', work: 'DGT Titanium Sport - Титановый выхлоп', price: 380000 },
        { category: 'brakes', work: 'DGT Carbon Sport - Карбон-керамика 380mm', price: 680000 },
        { category: 'wheels', work: 'DGT Forged Monoblock 19" - Легкие диски', price: 179000 },
        { category: 'suspension', work: 'DGT Air Sport - Пневмоподвеска', price: 650000 },
        { category: 'exterior', work: 'Карбоновый капот + крыша', price: 520000 },
        { category: 'exterior', work: 'Диффузор + спойлер карбон', price: 380000 },
        { category: 'interior', work: 'M Performance интерьер', price: 450000 },
        { category: 'tuning', work: 'Stage 2 - Прошивка + downpipe', price: 320000 },
        { category: 'electronics', work: 'BMW Live Cockpit Professional', price: 280000 }
      ],
      'm4': [
        { category: 'exhaust', work: 'DGT Titanium Pro - Титан с заслонками', price: 420000 },
        { category: 'brakes', work: 'DGT Carbon Pro - Карбон-керамика 395mm', price: 720000 },
        { category: 'wheels', work: 'DGT Forged Monoblock 20" - Конкейв', price: 215000 },
        { category: 'suspension', work: 'DGT Coilover Sport - Спортивные койловеры', price: 420000 },
        { category: 'exterior', work: 'Обвес M Performance карбон', price: 680000 },
        { category: 'interior', work: 'Спортивные сиденья + руль', price: 520000 },
        { category: 'tuning', work: 'Stage 3 - Турбины + интеркулер', price: 850000 },
        { category: 'electronics', work: 'Harman Kardon + камеры', price: 320000 }
      ],
      'm5': [
        { category: 'exhaust', work: 'DGT Titanium Elite - Titan Grade 5', price: 480000 },
        { category: 'brakes', work: 'DGT Carbon Pro - Карбон-керамика 400mm', price: 780000 },
        { category: 'wheels', work: 'DGT Forged Two-Piece 21" - Двухсоставные', price: 284000 },
        { category: 'suspension', work: 'DGT Air Pro - Пневмо с приложением', price: 690000 },
        { category: 'exterior', work: 'Карбоновый обвес M Performance', price: 920000 },
        { category: 'interior', work: 'Индивидуальная перетяжка салона', price: 680000 },
        { category: 'tuning', work: 'Stage 2+ Turbo upgrade', price: 720000 },
        { category: 'electronics', work: 'Bowers & Wilkins + лазерный свет', price: 580000 }
      ],
      'x5m': [
        { category: 'exhaust', work: 'DGT Steel Performance - Выхлоп с клапанами', price: 360000 },
        { category: 'brakes', work: 'DGT Carbon Elite - Карбон 400mm', price: 780000 },
        { category: 'wheels', work: 'DGT Forged Monoblock 22" - Большие диски', price: 245000 },
        { category: 'suspension', work: 'DGT Air Elite - Пневмо SUV', price: 720000 },
        { category: 'exterior', work: 'Обвес Lumma Style', price: 850000 },
        { category: 'interior', work: 'VIP перетяжка 7 мест', price: 780000 },
        { category: 'tuning', work: 'Stage 1 - Прошивка', price: 220000 },
        { category: 'electronics', work: 'Rear Entertainment System', price: 420000 }
      ]
    },
    mercedes: {
      'c63': [
        { category: 'exhaust', work: 'DGT Titanium AMG - Титановый V8 звук', price: 420000 },
        { category: 'brakes', work: 'DGT Carbon Sport - Карбон-керамика 360mm', price: 650000 },
        { category: 'wheels', work: 'DGT Forged Monoblock 19" - AMG Style', price: 179000 },
        { category: 'suspension', work: 'DGT Air AMG - Пневмоподвеска', price: 670000 },
        { category: 'exterior', work: 'Карбоновый обвес Black Series', price: 780000 },
        { category: 'interior', work: 'AMG Performance интерьер', price: 520000 },
        { category: 'tuning', work: 'Stage 2 - ECU + TCU tune', price: 380000 },
        { category: 'electronics', work: 'MBUX + Burmester звук', price: 420000 }
      ],
      'e63': [
        { category: 'exhaust', work: 'DGT Titanium Pro - Титан с клапанами', price: 480000 },
        { category: 'brakes', work: 'DGT Carbon Pro - Карбон-керамика 390mm', price: 720000 },
        { category: 'wheels', work: 'DGT Forged Monoblock 20" - Легкие', price: 215000 },
        { category: 'suspension', work: 'DGT Coilover Pro - Койловеры', price: 490000 },
        { category: 'exterior', work: 'Обвес AMG Performance', price: 680000 },
        { category: 'interior', work: 'Nappa кожа + карбон', price: 620000 },
        { category: 'tuning', work: 'Stage 2+ Hybrid турбины', price: 780000 },
        { category: 'electronics', work: 'Digital Light + камеры', price: 480000 }
      ],
      'gt63': [
        { category: 'exhaust', work: 'DGT Titanium Elite - Titanium Grade 5', price: 520000 },
        { category: 'brakes', work: 'DGT Carbon Elite - Карбон 390mm', price: 850000 },
        { category: 'wheels', work: 'DGT Forged Two-Piece 21" - Модульные', price: 284000 },
        { category: 'suspension', work: 'DGT Air Elite - Пневмо премиум', price: 750000 },
        { category: 'exterior', work: 'Карбоновый аэропакет GT', price: 1200000 },
        { category: 'interior', work: 'Designo эксклюзив', price: 850000 },
        { category: 'tuning', work: 'Stage 3 - Full turbo setup', price: 1200000 },
        { category: 'electronics', work: 'MBUX Hyperscreen', price: 680000 }
      ],
      'g63': [
        { category: 'exhaust', work: 'DGT Steel AMG - V8 Biturbo звук', price: 380000 },
        { category: 'brakes', work: 'DGT Carbon Elite - Карбон 400mm', price: 920000 },
        { category: 'wheels', work: 'DGT Forged Two-Piece 22" - Brabus Style', price: 318000 },
        { category: 'suspension', work: 'DGT Air Elite - Пневмо G-Class', price: 780000 },
        { category: 'exterior', work: 'Widebody Brabus Style', price: 1500000 },
        { category: 'interior', work: 'VIP салон с массажем', price: 980000 },
        { category: 'tuning', work: 'Stage 2 - 700hp setup', price: 680000 },
        { category: 'electronics', work: 'Premium аудио + lighting', price: 580000 }
      ]
    },
    audi: {
      'rs6': [
        { category: 'exhaust', work: 'DGT Titanium Sport - Титановый V8', price: 450000 },
        { category: 'brakes', work: 'DGT Carbon Sport - Карбон-керамика 390mm', price: 720000 },
        { category: 'wheels', work: 'DGT Forged Monoblock 21" - Легкие', price: 235000 },
        { category: 'suspension', work: 'DGT Air Sport - Пневмоподвеска', price: 680000 },
        { category: 'exterior', work: 'Карбоновый обвес ABT Style', price: 850000 },
        { category: 'interior', work: 'RS интерьер + карбон', price: 580000 },
        { category: 'tuning', work: 'Stage 2 - 700hp tune', price: 420000 },
        { category: 'electronics', work: 'Virtual Cockpit Plus + B&O', price: 380000 }
      ],
      'rs7': [
        { category: 'exhaust', work: 'DGT Titanium Pro - Titanium с клапанами', price: 480000 },
        { category: 'brakes', work: 'DGT Carbon Pro - Карбон 400mm', price: 780000 },
        { category: 'wheels', work: 'DGT Forged Two-Piece 21" - Модульные', price: 284000 },
        { category: 'suspension', work: 'DGT Coilover Sport - Койловеры', price: 460000 },
        { category: 'exterior', work: 'Обвес Performance + спойлер', price: 720000 },
        { category: 'interior', work: 'Valcona кожа эксклюзив', price: 680000 },
        { category: 'tuning', work: 'Stage 2+ Hybrid Turbo', price: 850000 },
        { category: 'electronics', work: 'Bang & Olufsen 3D + HUD', price: 520000 }
      ],
      'rsq8': [
        { category: 'exhaust', work: 'DGT Steel Performance - Спорт выхлоп', price: 390000 },
        { category: 'brakes', work: 'DGT Carbon Pro - Карбон 400mm', price: 780000 },
        { category: 'wheels', work: 'DGT Forged Monoblock 23" - Большие', price: 300000 },
        { category: 'suspension', work: 'DGT Air Pro - Пневмо SUV', price: 720000 },
        { category: 'exterior', work: 'Widebody Mansory Style', price: 1200000 },
        { category: 'interior', work: 'VIP салон 5 мест', price: 850000 },
        { category: 'tuning', work: 'Stage 2 - 750hp', price: 620000 },
        { category: 'electronics', work: 'Rear Entertainment + камеры', price: 480000 }
      ],
      'r8': [
        { category: 'exhaust', work: 'DGT Titanium Race - Гоночный титан', price: 580000 },
        { category: 'brakes', work: 'DGT Carbon Elite - Карбон 380mm', price: 850000 },
        { category: 'wheels', work: 'DGT Forged Monoblock 20" - Центр гайка', price: 246000 },
        { category: 'suspension', work: 'DGT Coilover Race - Трековые', price: 520000 },
        { category: 'exterior', work: 'Карбоновый аэропакет GT', price: 1100000 },
        { category: 'interior', work: 'Alcantara + карбон салон', price: 680000 },
        { category: 'tuning', work: 'Stage 3 - Supercharger kit', price: 1500000 },
        { category: 'electronics', work: 'Трековая телеметрия', price: 380000 }
      ]
    },
    lamborghini: {
      huracan: [
        { category: 'exhaust', work: 'DGT Titanium Supercar - Титан V10', price: 650000 },
        { category: 'brakes', work: 'DGT Carbon Pro - Карбон 380mm', price: 950000 },
        { category: 'wheels', work: 'DGT Forged Monoblock 20" - Суперкар', price: 246000 },
        { category: 'suspension', work: 'DGT Air Supercar - Пневмо', price: 820000 },
        { category: 'exterior', work: 'Карбоновый обвес Novitec', price: 1800000 },
        { category: 'interior', work: 'Alcantara + кожа салон', price: 780000 },
        { category: 'tuning', work: 'Stage 2 - ECU + выхлоп 700hp', price: 680000 },
        { category: 'electronics', work: 'Telemetry + камеры 360°', price: 520000 }
      ],
      'huracan-sto': [
        { category: 'exhaust', work: 'DGT Titanium Race - Гоночный V10', price: 780000 },
        { category: 'brakes', work: 'DGT Carbon Elite - Карбон 398mm', price: 1150000 },
        { category: 'wheels', work: 'DGT Forged Monoblock 20" - Ultralight', price: 246000 },
        { category: 'suspension', work: 'DGT Coilover Race - Гоночные', price: 580000 },
        { category: 'exterior', work: 'Карбоновый аэропакет GT3', price: 2500000 },
        { category: 'interior', work: 'Full carbon интерьер', price: 1200000 },
        { category: 'tuning', work: 'Stage 3 - 750hp track setup', price: 1200000 },
        { category: 'electronics', work: 'Race telemetry system', price: 680000 }
      ],
      urus: [
        { category: 'exhaust', work: 'DGT Titanium SUV - Titanium V8', price: 520000 },
        { category: 'brakes', work: 'DGT Carbon Pro - Карбон 440mm', price: 1200000 },
        { category: 'wheels', work: 'DGT Forged Two-Piece 23" - Модульные', price: 378000 },
        { category: 'suspension', work: 'DGT Coilover Pro - Койловеры SUV', price: 620000 },
        { category: 'exterior', work: 'Widebody Mansory Style', price: 2200000 },
        { category: 'interior', work: 'VIP салон эксклюзив', price: 1500000 },
        { category: 'tuning', work: 'Stage 2 - 800hp setup', price: 880000 },
        { category: 'electronics', work: 'Premium Entertainment', price: 780000 }
      ]
    },
    ferrari: {
      f8: [
        { category: 'exhaust', work: 'DGT Titanium Supercar - Titanium V8', price: 720000 },
        { category: 'brakes', work: 'DGT Carbon Elite - Карбон 398mm', price: 1180000 },
        { category: 'wheels', work: 'DGT Forged Monoblock 20" - Центр гайка', price: 246000 },
        { category: 'suspension', work: 'DGT Air Supercar - Пневмо Ferrari', price: 850000 },
        { category: 'exterior', work: 'Карбоновый обвес Novitec', price: 2000000 },
        { category: 'interior', work: 'Full Alcantara + carbon', price: 980000 },
        { category: 'tuning', work: 'Stage 2 - 800hp tune', price: 880000 },
        { category: 'electronics', work: 'Track telemetry Ferrari', price: 680000 }
      ],
      sf90: [
        { category: 'exhaust', work: 'DGT Titanium Ultimate - Titan Grade 5', price: 850000 },
        { category: 'brakes', work: 'DGT Carbon Ultimate - Карбон 420mm', price: 1450000 },
        { category: 'wheels', work: 'DGT Forged Monoblock 21" - Hybrid spec', price: 284000 },
        { category: 'suspension', work: 'DGT Coilover Elite - Гибрид', price: 680000 },
        { category: 'exterior', work: 'Карбоновый аэропакет Assetto', price: 3000000 },
        { category: 'interior', work: 'Exclusive Atelier interior', price: 1800000 },
        { category: 'tuning', work: 'Hybrid Stage 2 - 1100hp', price: 1500000 },
        { category: 'electronics', work: 'Advanced telemetry + HUD', price: 980000 }
      ],
      roma: [
        { category: 'exhaust', work: 'DGT Titanium Pro - Titanium GT', price: 620000 },
        { category: 'brakes', work: 'DGT Carbon Pro - Карбон 390mm', price: 980000 },
        { category: 'wheels', work: 'DGT Forged Two-Piece 21" - GT Style', price: 284000 },
        { category: 'suspension', work: 'DGT Air Supercar - Comfort+Sport', price: 780000 },
        { category: 'exterior', work: 'Карбоновый обвес GT', price: 1200000 },
        { category: 'interior', work: 'Luxury кожа эксклюзив', price: 1200000 },
        { category: 'tuning', work: 'Stage 1 - ECU optimization', price: 420000 },
        { category: 'electronics', work: 'Premium audio + navigation', price: 580000 }
      ]
    }
  }

  const handleBrandSelect = (brandId: string) => {
    setSelectedBrand(brandId)
    setSelectedModel(null) // Reset model when brand changes
    
    setTimeout(() => {
      const modelSection = document.querySelector('#model-section')
      if (modelSection) {
        modelSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const handleModelSelect = (modelId: string) => {
    setSelectedModel(modelId)
    
    setTimeout(() => {
      const specsSection = document.querySelector('#specs-section')
      if (specsSection) {
        specsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const selectedSpecs = selectedBrand && selectedModel 
    ? (specLists[selectedBrand]?.[selectedModel] || [])
    : []

  const totalPrice = selectedSpecs.reduce((sum, spec) => sum + spec.price, 0)

  const getBrandName = () => brands.find(b => b.id === selectedBrand)?.name || ''
  const getModelName = () => {
    if (!selectedBrand || !selectedModel) return ''
    return modelsByBrand[selectedBrand]?.find(m => m.id === selectedModel)?.name || ''
  }

  // Group specs by category
  const groupedSpecs = selectedSpecs.reduce((acc, spec) => {
    if (!acc[spec.category]) {
      acc[spec.category] = []
    }
    acc[spec.category].push(spec)
    return acc
  }, {} as Record<string, SpecItem[]>)

  return (
    <>
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gridPattern}></div>
          <div className={styles.glowOrb1}></div>
          <div className={styles.glowOrb2}></div>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>{t.hero.label}</div>
          <h1 className={styles.heroTitle}>
            {t.hero.title}
            <span className={styles.heroTitleAccent}> {t.hero.titleAccent}</span>
          </h1>
          <p className={styles.heroDescription}>{t.hero.description}</p>
        </div>
      </section>

      {/* Brands Selector */}
      <section className={styles.brandsSection}>
        <div className={styles.container}>
          <div className={styles.brandsHeader}>
            <h2 className={styles.brandsTitle}>{t.brands.title}</h2>
            <p className={styles.brandsSubtitle}>{t.brands.subtitle}</p>
          </div>

          <div className={styles.brandsGrid}>
            {brands.map((brand) => (
              <button
                key={brand.id}
                className={`${styles.brandCard} ${selectedBrand === brand.id ? styles.brandCardActive : ''}`}
                onClick={() => handleBrandSelect(brand.id)}
              >
                <div className={styles.brandImagePlaceholder}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 17h14v-6l-2-2h-3l-1-2H9L8 9H6L4 11v6z"/>
                    <circle cx="9" cy="17" r="2"/>
                    <circle cx="15" cy="17" r="2"/>
                  </svg>
                  <span>{brand.name}</span>
                </div>
                <div className={styles.brandLogo}>
                  <span className={styles.brandName}>{brand.name}</span>
                </div>
                {selectedBrand === brand.id && (
                  <div className={styles.brandCheck}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* No Brand CTA */}
          {!selectedBrand && (
            <div className={styles.noBrandSection}>
              <div className={styles.noBrandCard}>
                <h3 className={styles.noBrandTitle}>{t.brands.noBrandTitle}</h3>
                <p className={styles.noBrandDesc}>{t.brands.noBrandDesc}</p>
                <a 
                  href="https://t.me/dgt_manager" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.contactButton}
                >
                  <span>{t.brands.contactButton}</span>
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                    <path d="M1 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Model Selector - Shows only when brand is selected */}
      {selectedBrand && (
        <section className={styles.modelSection} id="model-section">
          <div className={styles.container}>
            <div className={styles.modelHeader}>
              <h2 className={styles.modelTitle}>{t.models.title}</h2>
              <p className={styles.modelSubtitle}>{t.models.subtitle} {getBrandName()}</p>
            </div>

            <div className={styles.modelGrid}>
              {modelsByBrand[selectedBrand]?.map((model) => (
                <button
                  key={model.id}
                  className={`${styles.modelCard} ${selectedModel === model.id ? styles.modelCardActive : ''}`}
                  onClick={() => handleModelSelect(model.id)}
                >
                  <div className={styles.modelIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 17h14v-6l-2-2h-3l-1-2H9L8 9H6L4 11v6z"/>
                      <circle cx="9" cy="17" r="2"/>
                      <circle cx="15" cy="17" r="2"/>
                      <path d="M12 3v4"/>
                    </svg>
                  </div>
                  <div className={styles.modelName}>{model.name}</div>
                  {selectedModel === model.id && (
                    <div className={styles.modelCheck}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Specs Section */}
      <section className={styles.specsSection} id="specs-section">
        <div className={styles.container}>
          {selectedBrand && selectedModel ? (
            selectedSpecs.length > 0 ? (
              <>
                <div className={styles.specsHeader}>
                  <h2 className={styles.specsTitle}>
                    {t.specs.title} {getBrandName()} {getModelName()}
                  </h2>
                </div>

                <div className={styles.specsList}>
                  {Object.entries(groupedSpecs).map(([category, items]) => (
                    <div key={category} className={styles.specCategory}>
                      <h3 className={styles.categoryTitle}>
                        {t.categories[category as keyof typeof t.categories]}
                      </h3>
                      <div className={styles.categoryItems}>
                        {items.map((item, index) => (
                          <div key={index} className={styles.specItem}>
                            <div className={styles.specWork}>{item.work}</div>
                            <div className={styles.specPrice}>
                              {item.price.toLocaleString('ru-RU')} ₽
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total Section */}
                <div className={styles.totalSection}>
                  <div className={styles.totalCard}>
                    <div className={styles.totalLabel}>{t.specs.total}:</div>
                    <div className={styles.totalPrice}>
                      {totalPrice.toLocaleString('ru-RU')} ₽
                    </div>
                    <a 
                      href="https://t.me/dgt_manager"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.orderButton}
                    >
                      <span>{t.specs.orderButton}</span>
                      <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                        <path d="M1 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </>
            ) : null
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
              </div>
              <p className={styles.emptyText}>
                {!selectedBrand ? t.specs.selectBrand : t.specs.selectModel}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer currentLang={currentLang} />
    </>
  )
}
