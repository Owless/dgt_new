'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './brakes.module.css'

interface BrakeSystem {
  id: number
  brand: string
  model: string
  image: string
  price: string
  car: string
  minWheelSize: number
  pistons: string
  discSize: string
  features: string[]
  description: string
}

export default function BrakesPage() {
  const [currentLang, setCurrentLang] = useState<'ru' | 'en'>('ru')
  const [selectedCar, setSelectedCar] = useState<string>('all')
  const [selectedWheelSize, setSelectedWheelSize] = useState<number>(0)

  const translations = {
    ru: {
      title: 'Тормозные системы',
      subtitle: 'Высокопроизводительные тормозные системы для вашего автомобиля',
      filterTitle: 'Подбор системы',
      selectCar: 'Выберите марку автомобиля',
      selectWheelSize: 'Минимальный размер диска',
      allCars: 'Все марки',
      showResults: 'Показать результаты',
      resultsFound: 'Найдено систем',
      from: 'от',
      pistons: 'поршней',
      discSize: 'Диаметр диска',
      minWheel: 'Мин. диск',
      features: 'Особенности',
      details: 'Подробнее',
      consultation: 'Консультация',
      breadcrumb: {
        home: 'Главная',
        brakes: 'Тормозные системы'
      }
    },
    en: {
      title: 'Brake Systems',
      subtitle: 'High-performance brake systems for your car',
      filterTitle: 'System Selection',
      selectCar: 'Select car brand',
      selectWheelSize: 'Minimum wheel size',
      allCars: 'All brands',
      showResults: 'Show results',
      resultsFound: 'Systems found',
      from: 'from',
      pistons: 'pistons',
      discSize: 'Disc diameter',
      minWheel: 'Min. wheel',
      features: 'Features',
      details: 'Details',
      consultation: 'Consultation',
      breadcrumb: {
        home: 'Home',
        brakes: 'Brake Systems'
      }
    }
  }

  const t = translations[currentLang]

  const brakeSystems: BrakeSystem[] = [
    {
      id: 1,
      brand: 'Brembo',
      model: 'GT-R 6-Piston',
      image: '/disk.png',
      price: '450 000',
      car: 'Porsche',
      minWheelSize: 19,
      pistons: '6',
      discSize: '380mm',
      features: ['Карбон-керамические диски', 'Моноблочные суппорты', 'Вентилируемые диски'],
      description: 'Профессиональная тормозная система для треков и улицы'
    },
    {
      id: 2,
      brand: 'AP Racing',
      model: 'Competition J-Hook',
      image: '/disk.png',
      price: '520 000',
      car: 'BMW',
      minWheelSize: 19,
      pistons: '6',
      discSize: '380mm',
      features: ['J-образные крюки охлаждения', 'Титановые поршни', 'Гоночные колодки'],
      description: 'Система для максимальной производительности на треке'
    },
    {
      id: 3,
      brand: 'Brembo',
      model: 'GT 4-Piston',
      image: '/disk.png',
      price: '320 000',
      car: 'Mercedes-AMG',
      minWheelSize: 18,
      pistons: '4',
      discSize: '355mm',
      features: ['Алюминиевые суппорты', 'Стальные диски', 'Дорожное применение'],
      description: 'Идеальное решение для ежедневного использования'
    },
    {
      id: 4,
      brand: 'AP Racing',
      model: 'Radi-CAL',
      image: '/disk.png',
      price: '680 000',
      car: 'Porsche',
      minWheelSize: 20,
      pistons: '6',
      discSize: '390mm',
      features: ['Радиальная конструкция', 'Карбон-керамика', 'Облегченные суппорты'],
      description: 'Топовая система для суперкаров'
    },
    {
      id: 5,
      brand: 'Brembo',
      model: 'GT-S 4-Piston',
      image: '/disk.png',
      price: '380 000',
      car: 'Audi',
      minWheelSize: 18,
      pistons: '4',
      discSize: '365mm',
      features: ['Улучшенное охлаждение', 'Спортивные колодки', 'Стальные диски'],
      description: 'Спортивная система для активного вождения'
    },
    {
      id: 6,
      brand: 'StopTech',
      model: 'Trophy Sport',
      image: '/disk.png',
      price: '290 000',
      car: 'BMW',
      minWheelSize: 18,
      pistons: '4',
      discSize: '355mm',
      features: ['Цельнофрезерованные диски', 'Аэродинамические суппорты', 'Дорожные колодки'],
      description: 'Оптимальное соотношение цены и качества'
    }
  ]

  const carBrands = ['all', 'Porsche', 'BMW', 'Mercedes-AMG', 'Audi']
  const wheelSizes = [0, 18, 19, 20]

  const filteredSystems = brakeSystems.filter(system => {
    const carMatch = selectedCar === 'all' || system.car === selectedCar
    const wheelMatch = selectedWheelSize === 0 || system.minWheelSize >= selectedWheelSize
    return carMatch && wheelMatch
  })

  return (
    <>
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <div className={styles.brakesPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroImage}>
            <Image 
              src="/disk.png" 
              alt="Brake Systems" 
              fill 
              style={{ objectFit: 'contain' }} 
              priority
            />
          </div>
          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link href="/">{t.breadcrumb.home}</Link>
              <span>/</span>
              <span>{t.breadcrumb.brakes}</span>
            </div>
            <h1 className={styles.heroTitle}>{t.title}</h1>
            <p className={styles.heroSubtitle}>{t.subtitle}</p>
          </div>
        </section>

        {/* Filter Section */}
        <section className={styles.filterSection}>
          <div className={styles.container}>
            <h2 className={styles.filterTitle}>{t.filterTitle}</h2>
            <div className={styles.filterGrid}>
              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>{t.selectCar}</label>
                <select 
                  className={styles.filterSelect}
                  value={selectedCar}
                  onChange={(e) => setSelectedCar(e.target.value)}
                >
                  <option value="all">{t.allCars}</option>
                  {carBrands.slice(1).map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>
              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>{t.selectWheelSize}</label>
                <select 
                  className={styles.filterSelect}
                  value={selectedWheelSize}
                  onChange={(e) => setSelectedWheelSize(Number(e.target.value))}
                >
                  <option value={0}>Любой</option>
                  {wheelSizes.slice(1).map(size => (
                    <option key={size} value={size}>{size}"</option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.resultsCount}>
              {t.resultsFound}: <span>{filteredSystems.length}</span>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className={styles.productsSection}>
          <div className={styles.container}>
            <div className={styles.productsGrid}>
              {filteredSystems.map(system => (
                <div key={system.id} className={styles.productCard}>
                  <div className={styles.productImage}>
                    <Image 
                      src={system.image} 
                      alt={`${system.brand} ${system.model}`} 
                      fill 
                      style={{ objectFit: 'contain' }} 
                    />
                    <div className={styles.productBadge}>{system.car}</div>
                  </div>
                  <div className={styles.productContent}>
                    <div className={styles.productBrand}>{system.brand}</div>
                    <h3 className={styles.productName}>{system.model}</h3>
                    <p className={styles.productDescription}>{system.description}</p>
                    
                    <div className={styles.productSpecs}>
                      <div className={styles.spec}>
                        <span className={styles.specLabel}>{t.pistons}:</span>
                        <span className={styles.specValue}>{system.pistons}</span>
                      </div>
                      <div className={styles.spec}>
                        <span className={styles.specLabel}>{t.discSize}:</span>
                        <span className={styles.specValue}>{system.discSize}</span>
                      </div>
                      <div className={styles.spec}>
                        <span className={styles.specLabel}>{t.minWheel}:</span>
                        <span className={styles.specValue}>{system.minWheelSize}"</span>
                      </div>
                    </div>

                    <div className={styles.productFeatures}>
                      <div className={styles.featuresTitle}>{t.features}:</div>
                      <ul className={styles.featuresList}>
                        {system.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.productFooter}>
                      <div className={styles.productPrice}>
                        {t.from} <span>{system.price} ₽</span>
                      </div>
                      <div className={styles.productButtons}>
                        <Link href={`/brakes/${system.id}`} className={styles.detailsButton}>
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

            {filteredSystems.length === 0 && (
              <div className={styles.noResults}>
                <p>По выбранным параметрам ничего не найдено</p>
                <p>Попробуйте изменить фильтры или свяжитесь с нами для индивидуального подбора</p>
              </div>
            )}
          </div>
        </section>
      </div>

      <Footer currentLang={currentLang} />
    </>
  )
}
