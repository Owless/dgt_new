'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './brakes.module.css'

export default function BrakesPage() {
  const [currentLang, setCurrentLang] = useState<'ru' | 'en'>('ru')
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
  const [selectedWheelSize, setSelectedWheelSize] = useState<string | null>(null)

  const translations = {
    ru: {
      hero: {
        label: 'Brake Systems',
        title: 'Тормозные',
        titleAccent: 'системы',
        description: 'Собственное производство DGT. Высокоэффективные тормозные системы с карбон-керамическими дисками'
      },
      brands: {
        title: 'Выберите марку автомобиля',
        subtitle: 'Мы работаем с премиальными брендами',
        noBrandTitle: 'Не нашли свою марку?',
        noBrandDesc: 'Свяжитесь с менеджером, мы работаем с любыми марками автомобилей',
        contactButton: 'Связаться с менеджером'
      },
      wheelSize: {
        title: 'Выберите минимальный размер колесных дисков',
        subtitle: 'Тормозная система должна поместиться под ваши диски'
      },
      products: {
        title: 'Тормозные системы для',
        selectBrand: 'Выберите марку автомобиля выше',
        selectWheelSize: 'Выберите размер дисков выше',
        from: 'от',
        noSystemTitle: 'Не нашли подходящую систему?',
        noSystemDesc: 'Мы изготовим тормозную систему под вашу марку, модель и размер дисков. Свяжитесь с менеджером для индивидуального расчета.'
      },
      specs: {
        disks: 'Диски',
        pistons: 'Поршни',
        minWheel: 'Мин. диски',
        weight: 'Вес',
        cooling: 'Охлаждение'
      },
      features: {
        title: 'Преимущества наших систем',
        item1: {
          title: 'Тормозной путь',
          desc: 'Сокращение тормозного пути на 20-30%'
        },
        item2: {
          title: 'Устойчивость',
          desc: 'Отсутствие перегрева при интенсивной эксплуатации'
        },
        item3: {
          title: 'Долговечность',
          desc: 'Карбон-керамические диски служат до 300,000 км'
        },
        item4: {
          title: 'Гарантия',
          desc: '3 года гарантии на все компоненты'
        }
      }
    },
    en: {
      hero: {
        label: 'Brake Systems',
        title: 'Brake',
        titleAccent: 'Systems',
        description: 'DGT own production. High-performance brake systems with carbon-ceramic discs'
      },
      brands: {
        title: 'Select your car brand',
        subtitle: 'We work with premium brands',
        noBrandTitle: 'Can\'t find your brand?',
        noBrandDesc: 'Contact our manager, we work with any car brands',
        contactButton: 'Contact Manager'
      },
      wheelSize: {
        title: 'Select minimum wheel size',
        subtitle: 'Brake system must fit under your wheels'
      },
      products: {
        title: 'Brake systems for',
        selectBrand: 'Select car brand above',
        selectWheelSize: 'Select wheel size above',
        from: 'from',
        noSystemTitle: 'Didn\'t find a suitable system?',
        noSystemDesc: 'We will manufacture a brake system for your brand, model and wheel size. Contact our manager for individual calculation.'
      },
      specs: {
        disks: 'Discs',
        pistons: 'Pistons',
        minWheel: 'Min. wheels',
        weight: 'Weight',
        cooling: 'Cooling'
      },
      features: {
        title: 'System advantages',
        item1: {
          title: 'Braking distance',
          desc: 'Reducing braking distance by 20-30%'
        },
        item2: {
          title: 'Stability',
          desc: 'No overheating during intensive use'
        },
        item3: {
          title: 'Durability',
          desc: 'Carbon-ceramic discs last up to 300,000 km'
        },
        item4: {
          title: 'Warranty',
          desc: '3 years warranty on all components'
        }
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

  // Wheel sizes
  const wheelSizes = [
    { id: '18', name: '18"', label: '18 дюймов' },
    { id: '19', name: '19"', label: '19 дюймов' },
    { id: '20', name: '20"', label: '20 дюймов' },
    { id: '21', name: '21"', label: '21 дюйм' },
    { id: '22', name: '22"', label: '22 дюйма' }
  ]

  // Brake systems data by brand and wheel size
  const brakeSystems: Record<string, Record<string, any[]>> = {
    porsche: {
      '18': [
        { id: 1, name: 'DGT Carbon Sport', model: '911 Carrera', price: '580000', disks: '350mm', pistons: '6', minWheel: '18"', weight: '-8 кг', cooling: 'Вентилируемые' }
      ],
      '19': [
        { id: 2, name: 'DGT Carbon Pro', model: '911 GT3', price: '750000', disks: '380mm', pistons: '6', minWheel: '19"', weight: '-10 кг', cooling: 'Карбон-керамика' },
        { id: 3, name: 'DGT Steel Performance', model: 'Cayenne', price: '420000', disks: '360mm', pistons: '6', minWheel: '19"', weight: '-6 кг', cooling: 'Вентилируемые' }
      ],
      '20': [
        { id: 4, name: 'DGT Carbon Elite', model: 'Panamera Turbo', price: '820000', disks: '410mm', pistons: '8', minWheel: '20"', weight: '-12 кг', cooling: 'Карбон-керамика' }
      ]
    },
    bmw: {
      '18': [
        { id: 5, name: 'DGT Steel Sport', model: 'M3', price: '380000', disks: '360mm', pistons: '6', minWheel: '18"', weight: '-7 кг', cooling: 'Вентилируемые' }
      ],
      '19': [
        { id: 6, name: 'DGT Carbon Sport', model: 'M3 Competition', price: '680000', disks: '380mm', pistons: '6', minWheel: '19"', weight: '-9 кг', cooling: 'Карбон-керамика' },
        { id: 7, name: 'DGT Carbon Pro', model: 'M5 Competition', price: '720000', disks: '395mm', pistons: '6', minWheel: '19"', weight: '-10 кг', cooling: 'Карбон-керамика' }
      ],
      '20': [
        { id: 8, name: 'DGT Carbon Elite', model: 'X5M Competition', price: '780000', disks: '400mm', pistons: '8', minWheel: '20"', weight: '-11 кг', cooling: 'Карбон-керамика' }
      ]
    },
    mercedes: {
      '19': [
        { id: 9, name: 'DGT Carbon Sport', model: 'C63 AMG', price: '650000', disks: '360mm', pistons: '6', minWheel: '19"', weight: '-8 кг', cooling: 'Карбон-керамика' }
      ],
      '20': [
        { id: 10, name: 'DGT Carbon Pro', model: 'GT 63 S', price: '850000', disks: '390mm', pistons: '6', minWheel: '20"', weight: '-10 кг', cooling: 'Карбон-керамика' },
        { id: 11, name: 'DGT Carbon Elite', model: 'G63 AMG', price: '920000', disks: '400mm', pistons: '8', minWheel: '20"', weight: '-12 кг', cooling: 'Карбон-керамика' }
      ],
      '21': [
        { id: 12, name: 'DGT Carbon Ultimate', model: 'AMG GT Black Series', price: '1100000', disks: '420mm', pistons: '8', minWheel: '21"', weight: '-13 кг', cooling: 'Карбон-керамика' }
      ]
    },
    audi: {
      '18': [
        { id: 13, name: 'DGT Steel Performance', model: 'S4', price: '360000', disks: '350mm', pistons: '6', minWheel: '18"', weight: '-6 кг', cooling: 'Вентилируемые' }
      ],
      '19': [
        { id: 14, name: 'DGT Carbon Sport', model: 'RS6 Avant', price: '720000', disks: '390mm', pistons: '6', minWheel: '19"', weight: '-9 кг', cooling: 'Карбон-керамика' }
      ],
      '20': [
        { id: 15, name: 'DGT Carbon Pro', model: 'RS Q8', price: '780000', disks: '400mm', pistons: '8', minWheel: '20"', weight: '-11 кг', cooling: 'Карбон-керамика' }
      ],
      '21': [
        { id: 16, name: 'DGT Carbon Elite', model: 'RS7 Performance', price: '880000', disks: '420mm', pistons: '8', minWheel: '21"', weight: '-12 кг', cooling: 'Карбон-керамика' }
      ]
    },
    lamborghini: {
      '19': [
        { id: 17, name: 'DGT Carbon Pro', model: 'Huracán', price: '950000', disks: '380mm', pistons: '6', minWheel: '19"', weight: '-10 кг', cooling: 'Карбон-керамика' }
      ],
      '20': [
        { id: 18, name: 'DGT Carbon Elite', model: 'Huracán STO', price: '1150000', disks: '398mm', pistons: '6', minWheel: '20"', weight: '-12 кг', cooling: 'Карбон-керамика' }
      ],
      '21': [
        { id: 19, name: 'DGT Carbon Ultimate', model: 'Aventador SVJ', price: '1350000', disks: '420mm', pistons: '8', minWheel: '21"', weight: '-14 кг', cooling: 'Карбон-керамика' }
      ],
      '22': [
        { id: 20, name: 'DGT Carbon Race', model: 'Urus Performante', price: '1200000', disks: '440mm', pistons: '10', minWheel: '22"', weight: '-15 кг', cooling: 'Карбон-керамика' }
      ]
    },
    ferrari: {
      '19': [
        { id: 21, name: 'DGT Carbon Pro', model: 'Roma', price: '980000', disks: '390mm', pistons: '6', minWheel: '19"', weight: '-11 кг', cooling: 'Карбон-керамика' }
      ],
      '20': [
        { id: 22, name: 'DGT Carbon Elite', model: 'F8 Tributo', price: '1180000', disks: '398mm', pistons: '6', minWheel: '20"', weight: '-12 кг', cooling: 'Карбон-керамика' }
      ],
      '21': [
        { id: 23, name: 'DGT Carbon Ultimate', model: 'SF90 Stradale', price: '1450000', disks: '420mm', pistons: '8', minWheel: '21"', weight: '-13 кг', cooling: 'Карбон-керамика' }
      ],
      '22': [
        { id: 24, name: 'DGT Carbon Race', model: '812 Competizione', price: '1580000', disks: '440mm', pistons: '8', minWheel: '22"', weight: '-14 кг', cooling: 'Карбон-керамика' }
      ]
    }
  }

  const handleBrandSelect = (brandId: string) => {
    setSelectedBrand(brandId)
    setSelectedWheelSize(null) // Reset wheel size when brand changes
    
    setTimeout(() => {
      const wheelSizeSection = document.querySelector('#wheel-size-section')
      if (wheelSizeSection) {
        wheelSizeSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const handleWheelSizeSelect = (sizeId: string) => {
    setSelectedWheelSize(sizeId)
    
    setTimeout(() => {
      const productsSection = document.querySelector('#products-section')
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const selectedProducts = selectedBrand && selectedWheelSize 
    ? (brakeSystems[selectedBrand]?.[selectedWheelSize] || [])
    : []

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

      {/* Wheel Size Selector - Shows only when brand is selected */}
      {selectedBrand && (
        <section className={styles.wheelSizeSection} id="wheel-size-section">
          <div className={styles.container}>
            <div className={styles.wheelSizeHeader}>
              <h2 className={styles.wheelSizeTitle}>{t.wheelSize.title}</h2>
              <p className={styles.wheelSizeSubtitle}>{t.wheelSize.subtitle}</p>
            </div>

            <div className={styles.wheelSizeGrid}>
              {wheelSizes.map((size) => (
                <button
                  key={size.id}
                  className={`${styles.wheelSizeCard} ${selectedWheelSize === size.id ? styles.wheelSizeCardActive : ''}`}
                  onClick={() => handleWheelSizeSelect(size.id)}
                >
                  <div className={styles.wheelSizeIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10"/>
                      <circle cx="12" cy="12" r="6"/>
                      <circle cx="12" cy="12" r="2"/>
                      <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
                      <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                    </svg>
                  </div>
                  <div className={styles.wheelSizeName}>{size.name}</div>
                  <div className={styles.wheelSizeLabel}>{size.label}</div>
                  {selectedWheelSize === size.id && (
                    <div className={styles.wheelSizeCheck}>
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

      {/* Products Section */}
      <section className={styles.productsSection} id="products-section">
        <div className={styles.container}>
          {selectedBrand && selectedWheelSize ? (
            selectedProducts.length > 0 ? (
              <>
                <h2 className={styles.productsTitle}>
                  {t.products.title} {brands.find(b => b.id === selectedBrand)?.name} ({selectedWheelSize}")
                </h2>
                <div className={styles.productsGrid}>
                  {selectedProducts.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                      <div className={styles.productImage}>
                        <div className={styles.productBadge}>
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="12" r="10"/>
                            <circle cx="12" cy="12" r="6"/>
                            <circle cx="12" cy="12" r="2"/>
                          </svg>
                          <span>Производство DGT</span>
                        </div>
                        <div className={styles.productImagePlaceholder}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10"/>
                            <circle cx="12" cy="12" r="6"/>
                            <circle cx="12" cy="12" r="2"/>
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
                            <span className={styles.specLabel}>{t.specs.disks}:</span>
                            <span className={styles.specValue}>{product.disks}</span>
                          </div>
                          <div className={styles.specItem}>
                            <span className={styles.specLabel}>{t.specs.pistons}:</span>
                            <span className={styles.specValue}>{product.pistons}</span>
                          </div>
                          <div className={styles.specItem}>
                            <span className={styles.specLabel}>{t.specs.minWheel}:</span>
                            <span className={styles.specValue}>{product.minWheel}</span>
                          </div>
                          <div className={styles.specItem}>
                            <span className={styles.specLabel}>{t.specs.cooling}:</span>
                            <span className={styles.specValue}>{product.cooling}</span>
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

                {/* No System CTA */}
                <div className={styles.noSystemSection}>
                  <div className={styles.noSystemCard}>
                    <h3 className={styles.noSystemTitle}>{t.products.noSystemTitle}</h3>
                    <p className={styles.noSystemDesc}>{t.products.noSystemDesc}</p>
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
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                  </svg>
                </div>
                <p className={styles.emptyText}>
                  Для данной комбинации нет готовых систем.
                  <br/>Свяжитесь с менеджером для индивидуального изготовления.
                </p>
                <a 
                  href="https://t.me/dgt_manager" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.contactButton}
                  style={{ marginTop: '30px' }}
                >
                  <span>{t.brands.contactButton}</span>
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                    <path d="M1 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </a>
              </div>
            )
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <p className={styles.emptyText}>
                {!selectedBrand ? t.products.selectBrand : t.products.selectWheelSize}
              </p>
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
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className={styles.featureTitle}>{t.features.item1.title}</h3>
              <p className={styles.featureDesc}>{t.features.item1.desc}</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
                </svg>
              </div>
              <h3 className={styles.featureTitle}>{t.features.item2.title}</h3>
              <p className={styles.featureDesc}>{t.features.item2.desc}</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
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
