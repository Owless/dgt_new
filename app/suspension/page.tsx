'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './suspension.module.css'

interface SuspensionSystem {
  id: number
  brand: string
  model: string
  type: string
  image: string
  price: string
  car: string
  features: string[]
  adjustable: {
    height: boolean
    damping: boolean
    camber: boolean
  }
  loweringRange: string
  description: string
}

export default function SuspensionPage() {
  const [currentLang, setCurrentLang] = useState<'ru' | 'en'>('ru')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedCar, setSelectedCar] = useState<string>('all')

  const translations = {
    ru: {
      title: 'Подвеска',
      subtitle: 'Трансформируйте управляемость вашего автомобиля',
      description: 'Профессиональные системы подвески мирового уровня для максимального контроля и комфорта',
      breadcrumb: {
        home: 'Главная',
        suspension: 'Подвеска'
      },
      filterBy: 'Фильтр',
      type: 'Тип системы',
      car: 'Автомобиль',
      all: 'Все',
      types: {
        coilovers: 'Койловеры',
        air: 'Пневмоподвеска',
        springs: 'Пружины',
        stabilizers: 'Стабилизаторы'
      },
      adjustable: 'Регулировки',
      height: 'Высота',
      damping: 'Жесткость',
      camber: 'Развал',
      lowering: 'Занижение',
      features: 'Особенности',
      from: 'от',
      details: 'Подробнее',
      consultation: 'Консультация',
      systems: 'систем найдено',
      advantages: {
        title: 'Преимущества',
        handling: 'Улучшенная управляемость',
        comfort: 'Настраиваемый комфорт',
        appearance: 'Спортивный вид',
        quality: 'Премиум качество'
      }
    },
    en: {
      title: 'Suspension',
      subtitle: 'Transform your vehicle handling',
      description: 'World-class professional suspension systems for maximum control and comfort',
      breadcrumb: {
        home: 'Home',
        suspension: 'Suspension'
      },
      filterBy: 'Filter',
      type: 'System Type',
      car: 'Car',
      all: 'All',
      types: {
        coilovers: 'Coilovers',
        air: 'Air Suspension',
        springs: 'Springs',
        stabilizers: 'Sway Bars'
      },
      adjustable: 'Adjustments',
      height: 'Height',
      damping: 'Damping',
      camber: 'Camber',
      lowering: 'Lowering',
      features: 'Features',
      from: 'from',
      details: 'Details',
      consultation: 'Consultation',
      systems: 'systems found',
      advantages: {
        title: 'Advantages',
        handling: 'Improved handling',
        comfort: 'Adjustable comfort',
        appearance: 'Sport appearance',
        quality: 'Premium quality'
      }
    }
  }

  const t = translations[currentLang]

  const suspensionSystems: SuspensionSystem[] = [
    {
      id: 1,
      brand: 'KW',
      model: 'Variant 3',
      type: 'coilovers',
      image: '/podveska.png',
      price: '285 000',
      car: 'Porsche',
      loweringRange: '10-40mm',
      adjustable: {
        height: true,
        damping: true,
        camber: false
      },
      features: [
        'Раздельная регулировка сжатия и отбоя',
        'Нержавеющая сталь',
        'TÜV сертификация',
        'Гарантия 2 года'
      ],
      description: 'Топовые койловеры с полным контролем над подвеской'
    },
    {
      id: 2,
      brand: 'Öhlins',
      model: 'Road & Track',
      type: 'coilovers',
      image: '/podveska.png',
      price: '320 000',
      car: 'BMW',
      loweringRange: '5-35mm',
      adjustable: {
        height: true,
        damping: true,
        camber: false
      },
      features: [
        'Гоночные технологии',
        'Регулировка в 30 кликов',
        'Двухтрубная конструкция',
        'Пожизненное обслуживание'
      ],
      description: 'Шведское качество для трека и улицы'
    },
    {
      id: 3,
      brand: 'Air Lift',
      model: 'Performance 3P',
      type: 'air',
      image: '/podveska.png',
      price: '450 000',
      car: 'Mercedes-AMG',
      loweringRange: '0-100mm',
      adjustable: {
        height: true,
        damping: false,
        camber: false
      },
      features: [
        'Управление со смартфона',
        'Память на 5 режимов',
        'Автоматическое выравнивание',
        'Давление до 200 PSI'
      ],
      description: 'Полный контроль высоты одним касанием'
    },
    {
      id: 4,
      brand: 'KW',
      model: 'V3',
      type: 'coilovers',
      image: '/podveska.png',
      price: '295 000',
      car: 'Audi',
      loweringRange: '10-40mm',
      adjustable: {
        height: true,
        damping: true,
        camber: false
      },
      features: [
        'Индивидуальная настройка',
        'Нержавеющие амортизаторы',
        'Регулировка отбоя',
        'Сертификация TÜV'
      ],
      description: 'Идеальный баланс комфорта и спорта'
    },
    {
      id: 5,
      brand: 'H&R',
      model: 'Street Performance',
      type: 'springs',
      image: '/podveska.png',
      price: '45 000',
      car: 'BMW',
      loweringRange: '30mm',
      adjustable: {
        height: false,
        damping: false,
        camber: false
      },
      features: [
        'Совместимость со штатными амортизаторами',
        'Прогрессивная жесткость',
        'TÜV одобрение',
        'Снижение крена кузова'
      ],
      description: 'Простое решение для занижения'
    },
    {
      id: 6,
      brand: 'Eibach',
      model: 'Pro-Kit',
      type: 'springs',
      image: '/podveska.png',
      price: '38 000',
      car: 'Porsche',
      loweringRange: '20-25mm',
      adjustable: {
        height: false,
        damping: false,
        camber: false
      },
      features: [
        'Оптимальное занижение',
        'Улучшенная аэродинамика',
        'Совместимость с EDC',
        'Миллион циклов тестирования'
      ],
      description: 'Надежность немецкого качества'
    },
    {
      id: 7,
      brand: 'Accuair',
      model: 'E-Level+',
      type: 'air',
      image: '/podveska.png',
      price: '520 000',
      car: 'Porsche',
      loweringRange: '0-120mm',
      adjustable: {
        height: true,
        damping: false,
        camber: false
      },
      features: [
        'Электронное управление',
        'GPS-режим высоты',
        'Беспроводное управление',
        'Сохранение 10 пресетов'
      ],
      description: 'Максимальная функциональность пневмы'
    },
    {
      id: 8,
      brand: 'Whiteline',
      model: 'Adjustable Sway Bar',
      type: 'stabilizers',
      image: '/podveska.png',
      price: '32 000',
      car: 'BMW',
      loweringRange: 'N/A',
      adjustable: {
        height: false,
        damping: false,
        camber: false
      },
      features: [
        'Регулируемая жесткость',
        '3 режима настройки',
        'Полиуретановые втулки',
        'Снижение кренов до 70%'
      ],
      description: 'Максимальный контроль в поворотах'
    },
    {
      id: 9,
      brand: 'Bilstein',
      model: 'PSS10',
      type: 'coilovers',
      image: '/podveska.png',
      price: '260 000',
      car: 'Mercedes-AMG',
      loweringRange: '5-30mm',
      adjustable: {
        height: true,
        damping: true,
        camber: false
      },
      features: [
        '10 позиций регулировки',
        'Газомасляные амортизаторы',
        'Сертификация ABE',
        'Немецкое производство'
      ],
      description: 'Классическое немецкое качество'
    },
    {
      id: 10,
      brand: 'Air Lift',
      model: '3H',
      type: 'air',
      image: '/podveska.png',
      price: '480 000',
      car: 'Audi',
      loweringRange: '0-100mm',
      adjustable: {
        height: true,
        damping: false,
        camber: false
      },
      features: [
        'Цветной сенсорный дисплей',
        'Автоматическое выравнивание',
        'Управление высотой на ходу',
        'Датчики давления на каждой подушке'
      ],
      description: 'Интуитивное управление высотой'
    },
    {
      id: 11,
      brand: 'ST Suspensions',
      model: 'XTA',
      type: 'coilovers',
      image: '/podveska.png',
      price: '180 000',
      car: 'Audi',
      loweringRange: '20-40mm',
      adjustable: {
        height: true,
        damping: true,
        camber: false
      },
      features: [
        'Регулировка отбоя 16 кликов',
        'Оцинкованные пружины',
        'TÜV одобрение',
        'Доступная цена'
      ],
      description: 'Оптимальное соотношение цена-качество'
    },
    {
      id: 12,
      brand: 'H&R',
      model: 'RSS+ Club Sport',
      type: 'coilovers',
      image: '/podveska.png',
      price: '175 000',
      car: 'BMW',
      loweringRange: '15-45mm',
      adjustable: {
        height: true,
        damping: false,
        camber: false
      },
      features: [
        'Клубный спорт уровень',
        'Нержавеющие компоненты',
        'Регулировка высоты',
        'Европейское качество'
      ],
      description: 'Для трековых дней и улицы'
    }
  ]

  const carBrands = ['all', 'Porsche', 'BMW', 'Mercedes-AMG', 'Audi']
  const types = ['all', 'coilovers', 'air', 'springs', 'stabilizers']

  const filteredSystems = suspensionSystems.filter(system => {
    const typeMatch = selectedType === 'all' || system.type === selectedType
    const carMatch = selectedCar === 'all' || system.car === selectedCar
    return typeMatch && carMatch
  })

  return (
    <>
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <div className={styles.suspensionPage}>
        {/* Premium Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroGradient}></div>
            <div className={styles.heroPattern}></div>
          </div>
          
          <div className={styles.heroImage}>
            <Image 
              src="/podveska.png" 
              alt="Suspension" 
              fill 
              style={{ objectFit: 'contain' }} 
              priority
            />
          </div>

          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <div className={styles.breadcrumb}>
                <Link href="/">{t.breadcrumb.home}</Link>
                <span>/</span>
                <span>{t.breadcrumb.suspension}</span>
              </div>
              
              <div className={styles.heroTextGroup}>
                <div className={styles.heroLabel}>PREMIUM SUSPENSION</div>
                <h1 className={styles.heroTitle}>{t.title}</h1>
                <p className={styles.heroSubtitle}>{t.subtitle}</p>
                <p className={styles.heroDescription}>{t.description}</p>
              </div>

              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>12+</div>
                  <div className={styles.statLabel}>Брендов</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>500+</div>
                  <div className={styles.statLabel}>Установок</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Гарантия</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.scrollIndicator}>
            <div className={styles.scrollLine}></div>
            <div className={styles.scrollText}>SCROLL</div>
          </div>
        </section>

        {/* Filter Section */}
        <section className={styles.filterSection}>
          <div className={styles.container}>
            <div className={styles.filterHeader}>
              <h2 className={styles.filterLabel}>{t.filterBy}</h2>
              <div className={styles.resultsCount}>
                {filteredSystems.length} {t.systems}
              </div>
            </div>

            <div className={styles.filterControls}>
              <div className={styles.filterGroup}>
                <label>{t.type}</label>
                <div className={styles.filterTabs}>
                  {types.map(type => (
                    <button
                      key={type}
                      className={`${styles.filterTab} ${selectedType === type ? styles.active : ''}`}
                      onClick={() => setSelectedType(type)}
                    >
                      {type === 'all' ? t.all : t.types[type as keyof typeof t.types]}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.filterGroup}>
                <label>{t.car}</label>
                <div className={styles.filterTabs}>
                  {carBrands.map(car => (
                    <button
                      key={car}
                      className={`${styles.filterTab} ${selectedCar === car ? styles.active : ''}`}
                      onClick={() => setSelectedCar(car)}
                    >
                      {car === 'all' ? t.all : car}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className={styles.productsSection}>
          <div className={styles.container}>
            <div className={styles.productsGrid}>
              {filteredSystems.map(system => (
                <div key={system.id} className={styles.productCard}>
                  <div className={styles.productImageWrapper}>
                    <div className={styles.productImage}>
                      <Image 
                        src={system.image} 
                        alt={`${system.brand} ${system.model}`} 
                        fill 
                        style={{ objectFit: 'contain' }} 
                      />
                    </div>
                    <div className={styles.productBadge}>{system.car}</div>
                  </div>

                  <div className={styles.productContent}>
                    <div className={styles.productHeader}>
                      <div className={styles.productBrand}>{system.brand}</div>
                      <div className={styles.productType}>
                        {t.types[system.type as keyof typeof t.types]}
                      </div>
                    </div>

                    <h3 className={styles.productName}>{system.model}</h3>
                    <p className={styles.productDescription}>{system.description}</p>

                    <div className={styles.productAdjustable}>
                      <div className={styles.adjustableTitle}>{t.adjustable}</div>
                      <div className={styles.adjustableList}>
                        {system.adjustable.height && (
                          <div className={styles.adjustableItem}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="18 15 12 9 6 15"></polyline>
                            </svg>
                            {t.height}
                          </div>
                        )}
                        {system.adjustable.damping && (
                          <div className={styles.adjustableItem}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="3"></circle>
                              <path d="M12 1v6m0 6v6"></path>
                            </svg>
                            {t.damping}
                          </div>
                        )}
                        {system.adjustable.camber && (
                          <div className={styles.adjustableItem}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            </svg>
                            {t.camber}
                          </div>
                        )}
                      </div>
                    </div>

                    {system.loweringRange !== 'N/A' && (
                      <div className={styles.productLowering}>
                        <span>{t.lowering}:</span>
                        <span>{system.loweringRange}</span>
                      </div>
                    )}

                    <div className={styles.productFeatures}>
                      <div className={styles.featuresTitle}>{t.features}</div>
                      <ul className={styles.featuresList}>
                        {system.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.productFooter}>
                      <div className={styles.productPrice}>
                        <span className={styles.priceLabel}>{t.from}</span>
                        <span className={styles.priceValue}>{system.price} ₽</span>
                      </div>
                      <div className={styles.productButtons}>
                        <Link href={`/suspension/${system.id}`} className={styles.detailsButton}>
                          {t.details}
                        </Link>
                        <Link href="/contacts" className={styles.consultButton}>
                          {t.consultation}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className={styles.advantagesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>{t.advantages.title}</h2>
            <div className={styles.advantagesGrid}>
              <div className={styles.advantageCard}>
                <div className={styles.advantageNumber}>01</div>
                <div className={styles.advantageTitle}>{t.advantages.handling}</div>
              </div>
              <div className={styles.advantageCard}>
                <div className={styles.advantageNumber}>02</div>
                <div className={styles.advantageTitle}>{t.advantages.comfort}</div>
              </div>
              <div className={styles.advantageCard}>
                <div className={styles.advantageNumber}>03</div>
                <div className={styles.advantageTitle}>{t.advantages.appearance}</div>
              </div>
              <div className={styles.advantageCard}>
                <div className={styles.advantageNumber}>04</div>
                <div className={styles.advantageTitle}>{t.advantages.quality}</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer currentLang={currentLang} />
    </>
  )
}
