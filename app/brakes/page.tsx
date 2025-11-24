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
      subtitle: 'Максимальная эффективность торможения и контроль на любой скорости',
      filterTitle: 'Подбор системы',
      selectCar: 'Марка автомобиля',
      selectWheelSize: 'Минимальный размер диска',
      allCars: 'Все марки',
      resultsFound: 'Найдено',
      systems: 'систем',
      from: 'от',
      pistons: 'Поршни',
      discSize: 'Диск',
      minWheel: 'Мин. R',
      features: 'Особенности',
      details: 'Подробнее',
      consultation: 'Консультация',
      noResultsTitle: 'По выбранным параметрам ничего не найдено',
      noResultsText: 'Попробуйте изменить фильтры или свяжитесь с нами для индивидуального подбора системы под ваш автомобиль',
      breadcrumb: {
        home: 'Главная',
        brakes: 'Тормозные системы'
      }
    },
    en: {
      title: 'Brake Systems',
      subtitle: 'Maximum braking efficiency and control at any speed',
      filterTitle: 'System Selection',
      selectCar: 'Car brand',
      selectWheelSize: 'Minimum wheel size',
      allCars: 'All brands',
      resultsFound: 'Found',
      systems: 'systems',
      from: 'from',
      pistons: 'Pistons',
      discSize: 'Disc',
      minWheel: 'Min. R',
      features: 'Features',
      details: 'Details',
      consultation: 'Consultation',
      noResultsTitle: 'No results found for selected parameters',
      noResultsText: 'Try changing filters or contact us for individual selection of a system for your car',
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
      model: 'GT-R 6-Piston Front',
      image: '/disk.png',
      price: '485 000',
      car: 'Porsche',
      minWheelSize: 19,
      pistons: '6',
      discSize: '380×34mm',
      features: [
        'Моноблочные кованые суппорты',
        'Двухкомпонентные вентилируемые диски',
        'Титановые шим-прокладки для снижения шума',
        'Спортивные колодки в комплекте'
      ],
      description: 'Профессиональная система для трека и улицы с выдающейся производительностью'
    },
    {
      id: 2,
      brand: 'AP Racing',
      model: 'Radi-CAL Competition',
      image: '/disk.png',
      price: '720 000',
      car: 'Porsche',
      minWheelSize: 20,
      pistons: '6',
      discSize: '390×36mm',
      features: [
        'Радиальная конструкция суппортов',
        'Карбон-керамические диски',
        'J-образные вентиляционные каналы',
        'Гоночные колодки высокого трения'
      ],
      description: 'Топовая система для спортивных автомобилей высшего класса'
    },
    {
      id: 3,
      brand: 'Brembo',
      model: 'GT 4-Piston',
      image: '/disk.png',
      price: '340 000',
      car: 'BMW',
      minWheelSize: 18,
      pistons: '4',
      discSize: '355×32mm',
      features: [
        'Кованые алюминиевые суппорты',
        'Плавающие чугунные диски',
        'Керамические поршни',
        'Оптимально для ежедневного использования'
      ],
      description: 'Идеальный баланс между производительностью и комфортом'
    },
    {
      id: 4,
      brand: 'AP Racing',
      model: 'Pro5000R 6-Piston',
      image: '/disk.png',
      price: '580 000',
      car: 'BMW',
      minWheelSize: 19,
      pistons: '6',
      discSize: '372×32mm',
      features: [
        'Легкие алюминиевые суппорты',
        'Двухсоставные диски с алюминиевой шляпой',
        'Титановые болты крепления',
        'Аэродинамические направляющие воздуха'
      ],
      description: 'Гоночная система с превосходным охлаждением'
    },
    {
      id: 5,
      brand: 'Brembo',
      model: 'GT-S 4-Piston Sport',
      image: '/disk.png',
      price: '395 000',
      car: 'Mercedes-AMG',
      minWheelSize: 18,
      pistons: '4',
      discSize: '365×34mm',
      features: [
        'Усиленная конструкция суппортов',
        'Высокоуглеродистые стальные диски',
        'Спортивные колодки с низким пылением',
        'Улучшенная теплоотдача'
      ],
      description: 'Спортивная система для активного вождения'
    },
    {
      id: 6,
      brand: 'StopTech',
      model: 'ST-60 Trophy',
      image: '/disk.png',
      price: '420 000',
      car: 'Mercedes-AMG',
      minWheelSize: 19,
      pistons: '6',
      discSize: '380×32mm',
      features: [
        'Цельнофрезерованные суппорты',
        'Дисково-роторная конструкция AeroRotor',
        'Сбалансированная тормозная сила',
        'Увеличенная площадь колодок'
      ],
      description: 'Профессиональное решение для спортивных седанов'
    },
    {
      id: 7,
      brand: 'Brembo',
      model: 'GT 6-Piston',
      image: '/disk.png',
      price: '465 000',
      car: 'Audi',
      minWheelSize: 19,
      pistons: '6',
      discSize: '380×34mm',
      features: [
        'Дифференциальные поршни для равномерного износа',
        'Высокоуглеродистые диски',
        'Термостойкие уплотнения',
        'Широкий диапазон рабочих температур'
      ],
      description: 'Надежная система для мощных полноприводных автомобилей'
    },
    {
      id: 8,
      brand: 'AP Racing',
      model: 'Competition J-Hook',
      image: '/disk.png',
      price: '640 000',
      car: 'Audi',
      minWheelSize: 19,
      pistons: '6',
      pistons: '6',
      discSize: '380×34mm',
      features: [
        'J-крюковая система охлаждения дисков',
        'Титановые поршни',
        'Гоночные тормозные колодки',
        'Минимальный вес конструкции'
      ],
      description: 'Система для максимальной производительности на треке'
    },
    {
      id: 9,
      brand: 'Brembo',
      model: 'GT-R 380×34 Front Kit',
      image: '/disk.png',
      price: '520 000',
      car: 'Porsche',
      minWheelSize: 20,
      pistons: '6',
      discSize: '380×34mm',
      features: [
        'Карбон-керамические диски (опция)',
        'Моноблочные радиальные суппорты',
        'Устойчивость к фейдингу',
        'Снижение неподрессоренной массы до 7 кг'
      ],
      description: 'Топовая система для Porsche с гоночной родословной'
    },
    {
      id: 10,
      brand: 'StopTech',
      model: 'ST-40 Street Performance',
      image: '/disk.png',
      price: '285 000',
      car: 'BMW',
      minWheelSize: 18,
      pistons: '4',
      discSize: '355×32mm',
      features: [
        'Оптимизированный вес',
        'Дорожные колодки с низким пылением',
        'Устойчивость к коррозии',
        'Простая установка'
      ],
      description: 'Доступное решение для улучшения тормозов'
    },
    {
      id: 11,
      brand: 'AP Racing',
      model: 'Sprint 4-Piston',
      image: '/disk.png',
      price: '310 000',
      car: 'Audi',
      minWheelSize: 18,
      pistons: '4',
      discSize: '362×32mm',
      features: [
        'Легкая алюминиевая конструкция',
        'Вентилируемые диски с внутренними лопатками',
        'Керамические поршни',
        'Дорожные колодки'
      ],
      description: 'Сбалансированная система для спортивной езды'
    },
    {
      id: 12,
      brand: 'Brembo',
      model: 'CCM-R Carbon Ceramic',
      image: '/disk.png',
      price: '1 250 000',
      car: 'Porsche',
      minWheelSize: 20,
      pistons: '6',
      discSize: '410×38mm',
      features: [
        'Карбон-керамические диски нового поколения',
        'Снижение веса до 15 кг на ось',
        'Температура работы до 1000°C',
        'Ресурс 300 000+ км'
      ],
      description: 'Абсолютная вершина тормозных технологий'
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
                  <option value={0}>Любой размер</option>
                  {wheelSizes.slice(1).map(size => (
                    <option key={size} value={size}>R{size} и выше</option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.resultsCount}>
              {t.resultsFound} <span>{filteredSystems.length}</span> {t.systems}
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
                    <div>
                      <div className={styles.productBrand}>{system.brand}</div>
                      <h3 className={styles.productName}>{system.model}</h3>
                      <p className={styles.productDescription}>{system.description}</p>
                      
                      <div className={styles.productSpecs}>
                        <div className={styles.spec}>
                          <span className={styles.specLabel}>{t.pistons}</span>
                          <span className={styles.specValue}>{system.pistons}</span>
                        </div>
                        <div className={styles.spec}>
                          <span className={styles.specLabel}>{t.discSize}</span>
                          <span className={styles.specValue}>{system.discSize}</span>
                        </div>
                        <div className={styles.spec}>
                          <span className={styles.specLabel}>{t.minWheel}</span>
                          <span className={styles.specValue}>{system.minWheelSize}"</span>
                        </div>
                      </div>

                      <div className={styles.productFeatures}>
                        <div className={styles.featuresTitle}>{t.features}</div>
                        <ul className={styles.featuresList}>
                          {system.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
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
                <p>{t.noResultsTitle}</p>
                <p>{t.noResultsText}</p>
              </div>
            )}
          </div>
        </section>
      </div>

      <Footer currentLang={currentLang} />
    </>
  )
}
