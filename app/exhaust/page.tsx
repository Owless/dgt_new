'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './exhaust.module.css'

export default function ExhaustPage() {
  const [currentLang, setCurrentLang] = useState<'ru' | 'en'>('ru')
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)

  const translations = {
    ru: {
      hero: {
        label: 'Exhaust Systems',
        title: 'Выхлопные',
        titleAccent: 'системы',
        description: 'Премиальные титановые и стальные выхлопные системы от мировых производителей'
      },
      brands: {
        title: 'Выберите марку автомобиля',
        subtitle: 'Мы работаем с премиальными брендами',
        noCarTitle: 'Не нашли свою марку?',
        noCarDesc: 'Свяжитесь с менеджером для индивидуального подбора',
        contactButton: 'Написать в Telegram'
      },
      products: {
        title: 'Выхлопные системы для',
        viewAll: 'Смотреть все',
        from: 'от',
        selectBrand: 'Выберите марку автомобиля выше для просмотра доступных систем'
      },
      specs: {
        material: 'Материал',
        weight: 'Вес',
        power: 'Мощность',
        sound: 'Звук',
        valve: 'Заслонки'
      },
      features: {
        title: 'Преимущества наших систем',
        item1: {
          title: 'Снижение веса',
          desc: 'До 15 кг легче стандартной системы'
        },
        item2: {
          title: 'Прирост мощности',
          desc: '+10-20 л.с. за счет улучшенного газоотвода'
        },
        item3: {
          title: 'Премиум звук',
          desc: 'Глубокий спортивный звук с управляемыми заслонками'
        },
        item4: {
          title: 'Гарантия качества',
          desc: '2 года гарантии на все системы'
        }
      }
    },
    en: {
      hero: {
        label: 'Exhaust Systems',
        title: 'Exhaust',
        titleAccent: 'Systems',
        description: 'Premium titanium and steel exhaust systems from world manufacturers'
      },
      brands: {
        title: 'Select your car brand',
        subtitle: 'We work with premium brands',
        noCarTitle: 'Can\'t find your brand?',
        noCarDesc: 'Contact our manager for individual selection',
        contactButton: 'Message on Telegram'
      },
      products: {
        title: 'Exhaust systems for',
        viewAll: 'View all',
        from: 'from',
        selectBrand: 'Select a car brand above to view available systems'
      },
      specs: {
        material: 'Material',
        weight: 'Weight',
        power: 'Power',
        sound: 'Sound',
        valve: 'Valves'
      },
      features: {
        title: 'System advantages',
        item1: {
          title: 'Weight reduction',
          desc: 'Up to 15 kg lighter than stock system'
        },
        item2: {
          title: 'Power gain',
          desc: '+10-20 hp due to improved exhaust flow'
        },
        item3: {
          title: 'Premium sound',
          desc: 'Deep sporty sound with controlled valves'
        },
        item4: {
          title: 'Quality guarantee',
          desc: '2 years warranty on all systems'
        }
      }
    }
  }

  const t = translations[currentLang]

  // Brands data
  const brands = [
    { id: 'porsche', name: 'PORSCHE', logo: '/brands/porsche.png' },
    { id: 'bmw', name: 'BMW', logo: '/brands/bmw.png' },
    { id: 'mercedes', name: 'MERCEDES-AMG', logo: '/brands/mercedes.png' },
    { id: 'audi', name: 'AUDI', logo: '/brands/audi.png' },
    { id: 'lamborghini', name: 'LAMBORGHINI', logo: '/brands/lamborghini.png' },
    { id: 'ferrari', name: 'FERRARI', logo: '/brands/ferrari.png' }
  ]

  // Exhaust systems data by brand
  const exhaustSystems: Record<string, any[]> = {
    porsche: [
      {
        id: 1,
        name: 'Akrapovic Evolution',
        model: '911 GT3 (992)',
        image: '/exhausts/akrapovic-porsche.jpg',
        price: '850000',
        material: 'Титан',
        weight: '-12 кг',
        power: '+15 л.с.',
        sound: 'Спортивный',
        valve: 'Да'
      },
      {
        id: 2,
        name: 'Capristo Valved',
        model: 'Cayenne Turbo',
        image: '/exhausts/capristo-porsche.jpg',
        price: '620000',
        material: 'Нержавейка',
        weight: '-8 кг',
        power: '+12 л.с.',
        sound: 'Агрессивный',
        valve: 'Да'
      }
    ],
    bmw: [
      {
        id: 3,
        name: 'Akrapovic Slip-On',
        model: 'M3 Competition (G80)',
        image: '/exhausts/akrapovic-bmw.jpg',
        price: '420000',
        material: 'Титан',
        weight: '-10 кг',
        power: '+18 л.с.',
        sound: 'Спортивный',
        valve: 'Нет'
      },
      {
        id: 4,
        name: 'Eisenmann Race',
        model: 'M5 Competition',
        image: '/exhausts/eisenmann-bmw.jpg',
        price: '380000',
        material: 'Нержавейка',
        weight: '-7 кг',
        power: '+14 л.с.',
        sound: 'Глубокий',
        valve: 'Да'
      }
    ],
    mercedes: [
      {
        id: 5,
        name: 'iPE Valvetronic',
        model: 'AMG GT 63 S',
        image: '/exhausts/ipe-mercedes.jpg',
        price: '720000',
        material: 'Титан',
        weight: '-13 кг',
        power: '+20 л.с.',
        sound: 'Агрессивный',
        valve: 'Да'
      },
      {
        id: 6,
        name: 'Brabus Signature',
        model: 'C63 AMG',
        image: '/exhausts/brabus-mercedes.jpg',
        price: '580000',
        material: 'Нержавейка',
        weight: '-9 кг',
        power: '+16 л.с.',
        sound: 'Спортивный',
        valve: 'Да'
      }
    ],
    audi: [
      {
        id: 7,
        name: 'Milltek Sport',
        model: 'RS6 Avant (C8)',
        image: '/exhausts/milltek-audi.jpg',
        price: '450000',
        material: 'Нержавейка',
        weight: '-11 кг',
        power: '+17 л.с.',
        sound: 'Спортивный',
        valve: 'Нет'
      },
      {
        id: 8,
        name: 'Akrapovic Evolution',
        model: 'RS Q8',
        image: '/exhausts/akrapovic-audi.jpg',
        price: '680000',
        material: 'Титан',
        weight: '-14 кг',
        power: '+19 л.с.',
        sound: 'Глубокий',
        valve: 'Да'
      }
    ],
    lamborghini: [
      {
        id: 9,
        name: 'Capristo Valved',
        model: 'Huracán EVO',
        image: '/exhausts/capristo-lambo.jpg',
        price: '980000',
        material: 'Титан',
        weight: '-15 кг',
        power: '+22 л.с.',
        sound: 'Экстремальный',
        valve: 'Да'
      },
      {
        id: 10,
        name: 'iPE Innotech',
        model: 'Urus',
        image: '/exhausts/ipe-lambo.jpg',
        price: '820000',
        material: 'Титан',
        weight: '-12 кг',
        power: '+18 л.с.',
        sound: 'Агрессивный',
        valve: 'Да'
      }
    ],
    ferrari: [
      {
        id: 11,
        name: 'Akrapovic Slip-On',
        model: 'F8 Tributo',
        image: '/exhausts/akrapovic-ferrari.jpg',
        price: '1150000',
        material: 'Титан',
        weight: '-16 кг',
        power: '+25 л.с.',
        sound: 'Гоночный',
        valve: 'Да'
      },
      {
        id: 12,
        name: 'Novitec Race',
        model: 'Roma',
        image: '/exhausts/novitec-ferrari.jpg',
        price: '920000',
        material: 'Нержавейка',
        weight: '-10 кг',
        power: '+20 л.с.',
        sound: 'Спортивный',
        valve: 'Да'
      }
    ]
  }

  const selectedProducts = selectedBrand ? exhaustSystems[selectedBrand] : []

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
                onClick={() => setSelectedBrand(brand.id)}
              >
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

          {/* No Car CTA */}
          <div className={styles.noCarSection}>
            <div className={styles.noCarCard}>
              <h3 className={styles.noCarTitle}>{t.brands.noCarTitle}</h3>
              <p className={styles.noCarDesc}>{t.brands.noCarDesc}</p>
              <a 
                href="https://t.me/dgt_manager" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.telegramButton}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
                <span>{t.brands.contactButton}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className={styles.productsSection}>
        <div className={styles.container}>
          {selectedBrand ? (
            <>
              <h2 className={styles.productsTitle}>
                {t.products.title} {brands.find(b => b.id === selectedBrand)?.name}
              </h2>
              <div className={styles.productsGrid}>
                {selectedProducts.map((product) => (
                  <div key={product.id} className={styles.productCard}>
                    <div className={styles.productImage}>
                      <div className={styles.productImagePlaceholder}>
                        {product.name}
                      </div>
                    </div>
                    <div className={styles.productContent}>
                      <div className={styles.productHeader}>
                        <h3 className={styles.productName}>{product.name}</h3>
                        <p className={styles.productModel}>{product.model}</p>
                      </div>
                      
                      <div className={styles.productSpecs}>
                        <div className={styles.specItem}>
                          <span className={styles.specLabel}>{t.specs.material}:</span>
                          <span className={styles.specValue}>{product.material}</span>
                        </div>
                        <div className={styles.specItem}>
                          <span className={styles.specLabel}>{t.specs.weight}:</span>
                          <span className={styles.specValue}>{product.weight}</span>
                        </div>
                        <div className={styles.specItem}>
                          <span className={styles.specLabel}>{t.specs.power}:</span>
                          <span className={styles.specValue}>{product.power}</span>
                        </div>
                        <div className={styles.specItem}>
                          <span className={styles.specLabel}>{t.specs.valve}:</span>
                          <span className={styles.specValue}>{product.valve}</span>
                        </div>
                      </div>

                      <div className={styles.productFooter}>
                        <div className={styles.productPrice}>
                          <span className={styles.priceLabel}>{t.products.from}</span>
                          <span className={styles.priceValue}>
                            {parseInt(product.price).toLocaleString('ru-RU')} ₽
                          </span>
                        </div>
                        <a 
                          href="https://t.me/dgt_manager"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.orderButton}
                        >
                          Заказать
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <p className={styles.emptyText}>{t.products.selectBrand}</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.featuresTitle}>{t.features.title}</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 className={styles.featureTitle}>{t.features.item1.title}</h3>
              <p className={styles.featureDesc}>{t.features.item1.desc}</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className={styles.featureTitle}>{t.features.item2.title}</h3>
              <p className={styles.featureDesc}>{t.features.item2.desc}</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2v20M17 7l-5 5-5-5M7 17l5-5 5 5"/>
                </svg>
              </div>
              <h3 className={styles.featureTitle}>{t.features.item3.title}</h3>
              <p className={styles.featureDesc}>{t.features.item3.desc}</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
                </svg>
              </div>
              <h3 className={styles.featureTitle}>{t.features.item4.title}</h3>
              <p className={styles.featureDesc}>{t.features.item4.desc}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer currentLang={currentLang} />
    </>
  )
}
