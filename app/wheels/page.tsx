'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './wheels.module.css'

interface WheelParams {
  diameter: number
  width: number
  et: number
  pcd: string
  color: string
  design: string
}

export default function WheelsPage() {
  const [currentLang, setCurrentLang] = useState<'ru' | 'en'>('ru')
  const [step, setStep] = useState(1)
  const [params, setParams] = useState<WheelParams>({
    diameter: 18,
    width: 8.5,
    et: 35,
    pcd: '5x112',
    color: 'Глянцевый черный',
    design: 'Спортивный'
  })
  const [calculatedPrice, setCalculatedPrice] = useState(0)

  const translations = {
    ru: {
      title: 'Кованые диски',
      subtitle: 'Индивидуальное производство дисков под ваш автомобиль',
      breadcrumb: {
        home: 'Главная',
        wheels: 'Кованые диски'
      },
      calculator: 'Калькулятор стоимости',
      step: 'Шаг',
      of: 'из',
      diameter: 'Диаметр диска',
      width: 'Ширина диска',
      et: 'Вылет (ET)',
      pcd: 'Разболтовка (PCD)',
      color: 'Цвет покрытия',
      design: 'Дизайн',
      quantity: 'Количество',
      nextStep: 'Далее',
      prevStep: 'Назад',
      calculate: 'Рассчитать',
      priceTitle: 'Стоимость комплекта',
      pricePerWheel: 'Цена за диск',
      consultation: 'Получить консультацию',
      reset: 'Начать заново',
      inches: 'дюймов',
      mm: 'мм',
      pieces: 'шт',
      colors: {
        black: 'Глянцевый черный',
        matte: 'Матовый черный',
        silver: 'Серебристый',
        anthracite: 'Антрацит',
        bronze: 'Бронза',
        gold: 'Золото',
        custom: 'Индивидуальный цвет'
      },
      designs: {
        sport: 'Спортивный',
        classic: 'Классический',
        modern: 'Современный',
        aggressive: 'Агрессивный',
        elegant: 'Элегантный'
      },
      features: {
        title: 'Преимущества кованых дисков',
        weight: 'Снижение веса до 30%',
        strength: 'Увеличенная прочность',
        design: 'Любой дизайн',
        warranty: 'Гарантия 3 года'
      },
      included: {
        title: 'В стоимость входит',
        production: 'Производство дисков',
        painting: 'Покраска в выбранный цвет',
        testing: 'Проверка качества',
        delivery: 'Доставка по Москве'
      }
    },
    en: {
      title: 'Forged Wheels',
      subtitle: 'Custom wheel manufacturing for your car',
      breadcrumb: {
        home: 'Home',
        wheels: 'Forged Wheels'
      },
      calculator: 'Price Calculator',
      step: 'Step',
      of: 'of',
      diameter: 'Wheel Diameter',
      width: 'Wheel Width',
      et: 'Offset (ET)',
      pcd: 'Bolt Pattern (PCD)',
      color: 'Finish Color',
      design: 'Design',
      quantity: 'Quantity',
      nextStep: 'Next',
      prevStep: 'Back',
      calculate: 'Calculate',
      priceTitle: 'Total Price',
      pricePerWheel: 'Price per wheel',
      consultation: 'Get Consultation',
      reset: 'Start Over',
      inches: 'inches',
      mm: 'mm',
      pieces: 'pcs',
      colors: {
        black: 'Gloss Black',
        matte: 'Matte Black',
        silver: 'Silver',
        anthracite: 'Anthracite',
        bronze: 'Bronze',
        gold: 'Gold',
        custom: 'Custom Color'
      },
      designs: {
        sport: 'Sport',
        classic: 'Classic',
        modern: 'Modern',
        aggressive: 'Aggressive',
        elegant: 'Elegant'
      },
      features: {
        title: 'Forged Wheels Benefits',
        weight: 'Weight reduction up to 30%',
        strength: 'Increased strength',
        design: 'Any design',
        warranty: '3 year warranty'
      },
      included: {
        title: 'Included in price',
        production: 'Wheel manufacturing',
        painting: 'Painting in chosen color',
        testing: 'Quality control',
        delivery: 'Delivery in Moscow'
      }
    }
  }

  const t = translations[currentLang]

  const diameters = [17, 18, 19, 20, 21, 22, 23, 24]
  const widths = [7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5, 12.0]
  const ets = [15, 20, 25, 30, 35, 40, 45, 50, 55]
  const pcds = ['5x100', '5x108', '5x112', '5x114.3', '5x120', '5x130']
  const colors = [
    { value: 'Глянцевый черный', label: t.colors.black },
    { value: 'Матовый черный', label: t.colors.matte },
    { value: 'Серебристый', label: t.colors.silver },
    { value: 'Антрацит', label: t.colors.anthracite },
    { value: 'Бронза', label: t.colors.bronze },
    { value: 'Золото', label: t.colors.gold },
    { value: 'Индивидуальный', label: t.colors.custom }
  ]
  const designs = [
    { value: 'Спортивный', label: t.designs.sport },
    { value: 'Классический', label: t.designs.classic },
    { value: 'Современный', label: t.designs.modern },
    { value: 'Агрессивный', label: t.designs.aggressive },
    { value: 'Элегантный', label: t.designs.elegant }
  ]

  const calculatePrice = () => {
    let basePrice = 35000

    // Цена зависит от диаметра
    const diameterMultiplier = {
      17: 1.0,
      18: 1.15,
      19: 1.30,
      20: 1.50,
      21: 1.75,
      22: 2.0,
      23: 2.3,
      24: 2.6
    }

    basePrice *= diameterMultiplier[params.diameter as keyof typeof diameterMultiplier] || 1.0

    // Цена зависит от ширины
    if (params.width >= 10.0) {
      basePrice *= 1.2
    } else if (params.width >= 9.0) {
      basePrice *= 1.1
    }

    // Доплата за специальные цвета
    if (params.color === 'Бронза' || params.color === 'Золото') {
      basePrice += 8000
    } else if (params.color === 'Индивидуальный') {
      basePrice += 15000
    }

    // Доплата за сложный дизайн
    if (params.design === 'Агрессивный' || params.design === 'Элегантный') {
      basePrice += 5000
    }

    return Math.round(basePrice)
  }

  useEffect(() => {
    if (step === 4) {
      setCalculatedPrice(calculatePrice())
    }
  }, [step, params])

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1)
    }
  }

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleReset = () => {
    setStep(1)
    setParams({
      diameter: 18,
      width: 8.5,
      et: 35,
      pcd: '5x112',
      color: 'Глянцевый черный',
      design: 'Спортивный'
    })
    setCalculatedPrice(0)
  }

  return (
    <>
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <div className={styles.wheelsPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroImage}>
            <Image 
              src="/disks.png" 
              alt="Forged Wheels" 
              fill 
              style={{ objectFit: 'contain' }} 
              priority
            />
          </div>
          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link href="/">{t.breadcrumb.home}</Link>
              <span>/</span>
              <span>{t.breadcrumb.wheels}</span>
            </div>
            <h1 className={styles.heroTitle}>{t.title}</h1>
            <p className={styles.heroSubtitle}>{t.subtitle}</p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className={styles.calculatorSection}>
          <div className={styles.container}>
            <h2 className={styles.calculatorTitle}>{t.calculator}</h2>
            
            <div className={styles.progressBar}>
              <div className={styles.progressTrack}>
                <div 
                  className={styles.progressFill} 
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
              <div className={styles.progressText}>
                {t.step} {step} {t.of} 4
              </div>
            </div>

            <div className={styles.calculatorContent}>
              {step === 1 && (
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{t.diameter}</h3>
                  <div className={styles.optionsGrid}>
                    {diameters.map(diameter => (
                      <div
                        key={diameter}
                        className={`${styles.optionCard} ${params.diameter === diameter ? styles.active : ''}`}
                        onClick={() => setParams({ ...params, diameter })}
                      >
                        <div className={styles.optionValue}>{diameter}"</div>
                        <div className={styles.optionLabel}>{t.inches}</div>
                      </div>
                    ))}
                  </div>

                  <div className={styles.stepDivider}></div>

                  <h3 className={styles.stepTitle}>{t.width}</h3>
                  <div className={styles.optionsGrid}>
                    {widths.map(width => (
                      <div
                        key={width}
                        className={`${styles.optionCard} ${params.width === width ? styles.active : ''}`}
                        onClick={() => setParams({ ...params, width })}
                      >
                        <div className={styles.optionValue}>{width}</div>
                        <div className={styles.optionLabel}>{t.inches}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{t.et}</h3>
                  <div className={styles.optionsGrid}>
                    {ets.map(et => (
                      <div
                        key={et}
                        className={`${styles.optionCard} ${params.et === et ? styles.active : ''}`}
                        onClick={() => setParams({ ...params, et })}
                      >
                        <div className={styles.optionValue}>{et}</div>
                        <div className={styles.optionLabel}>{t.mm}</div>
                      </div>
                    ))}
                  </div>

                  <div className={styles.stepDivider}></div>

                  <h3 className={styles.stepTitle}>{t.pcd}</h3>
                  <div className={styles.optionsGrid}>
                    {pcds.map(pcd => (
                      <div
                        key={pcd}
                        className={`${styles.optionCard} ${params.pcd === pcd ? styles.active : ''}`}
                        onClick={() => setParams({ ...params, pcd })}
                      >
                        <div className={styles.optionValue}>{pcd}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{t.color}</h3>
                  <div className={styles.colorGrid}>
                    {colors.map(color => (
                      <div
                        key={color.value}
                        className={`${styles.colorCard} ${params.color === color.value ? styles.active : ''}`}
                        onClick={() => setParams({ ...params, color: color.value })}
                      >
                        <div className={styles.colorSwatch} data-color={color.value}></div>
                        <div className={styles.colorLabel}>{color.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className={styles.stepDivider}></div>

                  <h3 className={styles.stepTitle}>{t.design}</h3>
                  <div className={styles.designGrid}>
                    {designs.map(design => (
                      <div
                        key={design.value}
                        className={`${styles.designCard} ${params.design === design.value ? styles.active : ''}`}
                        onClick={() => setParams({ ...params, design: design.value })}
                      >
                        <div className={styles.designIcon}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 2v20M2 12h20" />
                          </svg>
                        </div>
                        <div className={styles.designLabel}>{design.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className={styles.resultContent}>
                  <div className={styles.resultSummary}>
                    <h3 className={styles.resultTitle}>Ваша конфигурация:</h3>
                    <div className={styles.summaryGrid}>
                      <div className={styles.summaryItem}>
                        <span className={styles.summaryLabel}>{t.diameter}:</span>
                        <span className={styles.summaryValue}>{params.diameter}"</span>
                      </div>
                      <div className={styles.summaryItem}>
                        <span className={styles.summaryLabel}>{t.width}:</span>
                        <span className={styles.summaryValue}>{params.width}"</span>
                      </div>
                      <div className={styles.summaryItem}>
                        <span className={styles.summaryLabel}>{t.et}:</span>
                        <span className={styles.summaryValue}>{params.et} {t.mm}</span>
                      </div>
                      <div className={styles.summaryItem}>
                        <span className={styles.summaryLabel}>{t.pcd}:</span>
                        <span className={styles.summaryValue}>{params.pcd}</span>
                      </div>
                      <div className={styles.summaryItem}>
                        <span className={styles.summaryLabel}>{t.color}:</span>
                        <span className={styles.summaryValue}>{params.color}</span>
                      </div>
                      <div className={styles.summaryItem}>
                        <span className={styles.summaryLabel}>{t.design}:</span>
                        <span className={styles.summaryValue}>{params.design}</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.priceResult}>
                    <div className={styles.priceLabel}>{t.pricePerWheel}</div>
                    <div className={styles.priceValue}>
                      {calculatedPrice.toLocaleString('ru-RU')} ₽
                    </div>
                    <div className={styles.totalPrice}>
                      <span>{t.priceTitle} (4 {t.pieces}):</span>
                      <span>{(calculatedPrice * 4).toLocaleString('ru-RU')} ₽</span>
                    </div>
                  </div>

                  <div className={styles.resultButtons}>
                    <Link href="/contacts" className={styles.consultButton}>
                      {t.consultation}
                    </Link>
                    <button onClick={handleReset} className={styles.resetButton}>
                      {t.reset}
                    </button>
                  </div>
                </div>
              )}

              {step < 4 && (
                <div className={styles.navigationButtons}>
                  {step > 1 && (
                    <button onClick={handlePrev} className={styles.prevButton}>
                      <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                        <path d="M19 6H1M1 6L6 1M1 6L6 11" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      {t.prevStep}
                    </button>
                  )}
                  <button onClick={handleNext} className={styles.nextButton}>
                    {step === 3 ? t.calculate : t.nextStep}
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                      <path d="M1 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>{t.features.title}</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className={styles.featureTitle}>{t.features.weight}</div>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div className={styles.featureTitle}>{t.features.strength}</div>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </div>
                <div className={styles.featureTitle}>{t.features.design}</div>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                </div>
                <div className={styles.featureTitle}>{t.features.warranty}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Included Section */}
        <section className={styles.includedSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>{t.included.title}</h2>
            <div className={styles.includedList}>
              <div className={styles.includedItem}>
                <div className={styles.includedCheck}>✓</div>
                <div className={styles.includedText}>{t.included.production}</div>
              </div>
              <div className={styles.includedItem}>
                <div className={styles.includedCheck}>✓</div>
                <div className={styles.includedText}>{t.included.painting}</div>
              </div>
              <div className={styles.includedItem}>
                <div className={styles.includedCheck}>✓</div>
                <div className={styles.includedText}>{t.included.testing}</div>
              </div>
              <div className={styles.includedItem}>
                <div className={styles.includedCheck}>✓</div>
                <div className={styles.includedText}>{t.included.delivery}</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer currentLang={currentLang} />
    </>
  )
}
