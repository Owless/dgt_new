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
        description: 'Собственное производство DGT. Титановые и стальные системы премиум-класса с управляемыми заслонками'
      },
      brands: {
        title: 'Выберите марку автомобиля',
        subtitle: 'Мы работаем с премиальными брендами',
        noCarTitle: 'Не нашли подходящую систему?',
        noCarDesc: 'Мы изготовим выхлопную систему под вашу марку и модель автомобиля. Свяжитесь с менеджером для индивидуального расчета.',
        contactButton: 'Связаться с менеджером'
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
        description: 'DGT own production. Premium titanium and steel systems with controlled valves'
      },
      brands: {
        title: 'Select your car brand',
        subtitle: 'We work with premium brands',
        noCarTitle: 'Didn\'t find a suitable system?',
        noCarDesc: 'We will manufacture an exhaust system for your car brand and model. Contact our manager for individual calculation.',
        contactButton: 'Contact Manager'
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

  // Exhaust systems data by brand - DGT Production
  const exhaustSystems: Record<string, any[]> = {
    porsche: [
      {
        id: 1,
        name: 'DGT Titanium Pro',
        model: '911 GT3 (992)',
        image: '/exhausts/dgt-porsche-1.jpg',
        price: '450000',
        material: 'Титан Grade 2',
        weight: '-14 кг',
        power: '+18 л.с.',
        sound: 'Спортивный',
        valve: 'Да',
        production: 'Россия'
      },
      {
        id: 2,
        name: 'DGT Steel Sport',
        model: 'Cayenne Turbo',
        image: '/exhausts/dgt-porsche-2.jpg',
        price: '320000',
        material: 'Нержавейка 304',
        weight: '-10 кг',
        power: '+15 л.с.',
        sound: 'Глубокий',
        valve: 'Да',
        production: 'Россия'
      },
      {
        id: 3,
        name: 'DGT Titanium Race',
        model: 'Panamera Turbo',
        image: '/exhausts/dgt-porsche-3.jpg',
        price: '520000',
        material: 'Титан Grade 5',
        weight: '-13 кг',
        power: '+20 л.с.',
        sound: 'Агрессивный',
        valve: 'Да',
        production: 'Россия'
      }
    ],
    bmw: [
      {
        id: 4,
        name: 'DGT Titanium Sport',
        model: 'M3 Competition (G80)',
        image: '/exhausts/dgt-bmw-1.jpg',
        price: '380000',
        material: 'Титан Grade 2',
        weight: '-12 кг',
        power: '+20 л.с.',
        sound: 'Спортивный',
        valve: 'Да',
        production: 'Россия'
      },
      {
        id: 5,
        name: 'DGT Steel Performance',
        model: 'M5 Competition',
        image: '/exhausts/dgt-bmw-2.jpg',
        price: '340000',
        material: 'Нержавейка 304',
        weight: '-9 кг',
        power: '+16 л.с.',
        sound: 'Глубокий',
        valve: 'Да',
        production: 'Россия'
      },
      {
        id: 6,
        name: 'DGT Titanium Elite',
        model: 'X5M Competition',
        image: '/exhausts/dgt-bmw-3.jpg',
        price: '420000',
        material: 'Титан Grade 2',
        weight: '-11 кг',
        power: '+18 л.с.',
        sound: 'Агрессивный',
        valve: 'Да',
        production: 'Россия'
      }
    ],
    mercedes: [
      {
        id: 7,
        name: 'DGT Titanium AMG',
        model: 'GT 63 S 4MATIC+',
        image: '/exhausts/dgt-mercedes-1.jpg',
        price: '480000',
        material: 'Титан Grade 2',
        weight: '-15 кг',
        power: '+22 л.с.',
        sound: 'Агрессивный',
        valve: 'Да',
        production: 'Россия'
      },
      {
        id: 8,
        name: 'DGT Steel AMG Sport',
        model: 'C63 AMG',
        image: '/exhausts/dgt-mercedes-2.jpg',
        price: '360000',
        material: 'Нержавейка 304',
        weight: '-10 кг',
        power: '+17 л.с.',
        sound: 'Спортивный',
        valve: 'Да',
        production: 'Россия'
      },
      {
        id: 9,
        name: 'DGT Titanium G-Class',
        model: 'G63 AMG',
        image: '/exhausts/dgt-mercedes-3.jpg',
        price: '540000',
        material: 'Титан Grade 5',
        weight: '-12 кг',
        power: '+19 л.с.',
        sound: 'Глубокий',
        valve: 'Да',
        production: 'Россия'
      }
    ],
    audi: [
      {
        id: 10,
        name: 'DGT Titanium RS',
        model: 'RS6 Avant (C8)',
        image: '/exhausts/dgt-audi-1.jpg',
        price: '420000',
        material: 'Титан Grade 2',
        weight: '-13 кг',
        power: '+19 л.с.',
        sound: 'Спортивный',
        valve: 'Да',
        production: 'Россия'
      },
      {
        id: 11,
        name: 'DGT Steel Sport',
        model: 'RS Q8',
        image: '/exhausts/dgt-audi-2.jpg',
        price: '390000',
        material: 'Нержавейка 304',
        weight: '-11 кг',
        power: '+17 л.с.',
        sound: 'Глубокий',
        valve: 'Да',
        production: 'Россия'
      },
      {
        id: 12,
        name: 'DGT Titanium Performance',
        model: 'RS7 Sportback',
        image: '/exhausts/dgt-audi-3.jpg',
        price: '460000',
        material: 'Титан Grade 2',
        weight: '-14 кг',
        power: '+21 л.с.',
        sound: 'Агрессивный',
        valve: 'Да',
        production: 'Россия'
      }
    ],
    lamborghini: [
      {
        id: 13,
        name: 'DGT Titanium Supercar',
        model: 'Huracán EVO',
        image: '/exhausts/dgt-lambo-1.jpg',
        price: '580000',
        material: 'Титан Grade 5',
        weight: '-16 кг',
        power: '+25 л.с.',
        sound: 'Экстремальный',
        valve: 'Да',
        production: 'Россия'
      },
      {
        id: 14,
        name: 'DGT Titanium SUV',
        model: 'Urus',
        image: '/exhausts/dgt-lambo-2.jpg',
        price: '520000',
        material: 'Титан Grade 2',
        weight: '-13 кг',
        power: '+20 л.с.',
        sound: 'Агрессивный',
        valve: 'Да',
        production: 'Россия'
      },
      {
        id: 15,
        name: 'DGT Titanium Race',
        model: 'Aventador SVJ',
        image: '/exhausts/dgt-lambo-3.jpg',
        price: '650000',
        material: 'Титан Grade 5',
        weight: '-17 кг',
        power: '+28 л.с.',
        sound: 'Гоночный',
        valve: 'Да',
        production: 'Россия'
      }
    ],
    ferrari: [
      {
        id: 16,
        name: 'DGT Titanium Supercar',
        model: 'F8 Tributo',
        image: '/exhausts/dgt-ferrari-1.jpg',
        price: '620000',
        material: 'Титан Grade 5',
        weight: '-15 кг',
        power: '+26 л.с.',
        sound: 'Гоночный',
        valve: 'Да',
        production: 'Россия'
      },
      {
        id: 17,
        name: 'DGT Titanium GT',
        model: 'Roma',
        image: '/exhausts/dgt-ferrari-2.jpg',
        price: '560000',
        material: 'Титан Grade 2',
        weight: '-12 кг',
        power: '+22 л.с.',
        sound: 'Спортивный',
        valve: 'Да',
        production: 'Россия'
      },
      {
        id: 18,
        name: 'DGT Titanium Elite',
        model: 'SF90 Stradale',
        image: '/exhausts/dgt-ferrari-3.jpg',
        price: '720000',
        material: 'Титан Grade 5',
        weight: '-14 кг',
        power: '+30 л.с.',
        sound: 'Экстремальный',
        valve: 'Да',
        production: 'Россия'
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
                      <div className={styles.productBadge}>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                          <path d="M2 17l10 5 10-5"/>
                          <path d="M2 12l10 5 10-5"/>
                        </svg>
                        <span>Производство DGT</span>
                      </div>
                      <div className={styles.productImagePlaceholder}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                          <path d="M2 17l10 5 10-5"/>
                          <path d="M2 12l10 5 10-5"/>
                        </svg>
                        <span className={styles.placeholderText}>{product.name}</span>
                        <span className={styles.placeholderModel}>{product.model}</span>
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

              {/* No System CTA - After viewing products */}
              <div className={styles.noSystemSection}>
                <div className={styles.noSystemCard}>
                  <h3 className={styles.noSystemTitle}>{t.brands.noCarTitle}</h3>
                  <p className={styles.noSystemDesc}>{t.brands.noCarDesc}</p>
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
