'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './wheels.module.css'

interface WheelParams {
  type: 'mono' | 'two'
  diameter: number
  width: number
  et: number
  pcd: string
  color: string
  design: string
  options: string[]
}

export default function WheelsPage() {
  const [currentLang, setCurrentLang] = useState<'ru' | 'en'>('ru')
  const [step, setStep] = useState(1)
  const [params, setParams] = useState<WheelParams>({
    type: 'mono',
    diameter: 19,
    width: 8.5,
    et: 35,
    pcd: '5x112',
    color: 'Глянцевый черный',
    design: 'Спортивный',
    options: []
  })
  const [calculatedPrice, setCalculatedPrice] = useState(0)

  const translations = {
    ru: {
      title: 'Кованые диски',
      subtitle: 'Производство уникальных дисков для автомобиля под ваши параметры',
      breadcrumb: {
        home: 'Главная',
        wheels: 'Кованые диски'
      },
      calculator: 'Рассчитайте стоимость ваших новых дисков',
      step: 'Шаг',
      of: 'из',
      wheelType: 'Выберите тип диска',
      monoblock: 'Моноблоки',
      monoblockDesc: 'Из цельных болванок кованого алюминия мы создаём лёгкие и прочные диски.',
      twopiece: 'Двухсоставные',
      twopieceDesc: 'Возможно изготовление необходимых форм обода и центра диска в любой комбинации цветов.',
      diameter: 'Выберите диаметр',
      width: 'Выберите ширину диска (J)',
      et: 'Вылет (ET)',
      pcd: 'Разболтовка (PCD)',
      color: 'Цвет покрытия',
      design: 'Дизайн',
      additionalOptions: 'Дополнительные опции',
      polishing: 'Полировка дисков',
      polishingDesc: 'Придаст дискам уникальный вид, возможно применение для отдельных элементов диска.',
      brushing: 'Браширование',
      brushingDesc: 'Ручная шлифовка с последующим покрытием тонирующим лаком.',
      chroming: 'Хромирование',
      chromingDesc: 'Придаст индивидуальности и неповторимости автомобилю.',
      complexPainting: 'Сложная покраска',
      complexPaintingDesc: 'Покраска в несколько цветов, сатиновые цвета.',
      nextStep: 'Далее',
      prevStep: 'Назад',
      calculate: 'Рассчитать стоимость',
      priceTitle: 'Стоимость комплекта (4 диска)',
      pricePerWheel: 'стоимость одного диска',
      orderNow: 'Оформить заказ',
      reset: 'Начать заново',
      inches: 'дюймов',
      mm: 'мм',
      rubles: 'руб.',
      selectedParams: 'Выбранные параметры:',
      selectedOptions: 'Выбранные опции:',
      disclaimer: 'Стоимость указана предварительной согласно расчётам, и не является публичной офертой. Для точного расчёта оформите запрос нашему менеджеру.',
      features: {
        title: 'Преимущества кованых дисков',
        weight: 'Снижение веса до 30%',
        strength: 'Увеличенная прочность',
        design: 'Любой дизайн',
        warranty: 'Гарантия качества'
      },
      process: {
        title: 'Как заказать диски под любые параметры',
        subtitle: 'Компания DGT специализируется на изготовлении кованых дисков по индивидуальным проектам',
        step1: {
          title: 'Вы подбираете модель дисков из каталога, либо связываетесь с нами для заказа уникального дизайна',
          button: 'Каталог дисков',
          note: 'Более 300 моделей'
        },
        step2: {
          title: 'После уточнения и согласования всех деталей оформляется заказ на производство',
          button: 'Производство',
          note: 'Производство любой модели за 30 дней'
        },
        step3: {
          title: 'Через 6-8 недель Вы получаете свои новые уникальные и эксклюзивные диски',
          button: 'Условия доставки',
          note: 'Доставка по всей России'
        }
      }
    },
    en: {
      title: 'Forged Wheels',
      subtitle: 'Custom wheel manufacturing for your car',
      breadcrumb: {
        home: 'Home',
        wheels: 'Forged Wheels'
      },
      calculator: 'Calculate the cost of your new wheels',
      step: 'Step',
      of: 'of',
      wheelType: 'Select wheel type',
      monoblock: 'Monoblock',
      monoblockDesc: 'We create light and strong wheels from solid forged aluminum billets.',
      twopiece: 'Two-piece',
      twopieceDesc: 'Possible to manufacture the required rim and center shapes in any color combination.',
      diameter: 'Select diameter',
      width: 'Select wheel width (J)',
      et: 'Offset (ET)',
      pcd: 'Bolt Pattern (PCD)',
      color: 'Finish Color',
      design: 'Design',
      additionalOptions: 'Additional options',
      polishing: 'Wheel Polishing',
      polishingDesc: 'Gives wheels a unique look, can be applied to individual wheel elements.',
      brushing: 'Brushing',
      brushingDesc: 'Hand polishing followed by tinting lacquer coating.',
      chroming: 'Chrome Plating',
      chromingDesc: 'Gives individuality and uniqueness to the car.',
      complexPainting: 'Complex Painting',
      complexPaintingDesc: 'Multi-color painting, satin colors.',
      nextStep: 'Next',
      prevStep: 'Back',
      calculate: 'Calculate Price',
      priceTitle: 'Total price (4 wheels)',
      pricePerWheel: 'price per wheel',
      orderNow: 'Order Now',
      reset: 'Start Over',
      inches: 'inches',
      mm: 'mm',
      rubles: 'rub.',
      selectedParams: 'Selected parameters:',
      selectedOptions: 'Selected options:',
      disclaimer: 'The price is preliminary according to calculations and is not a public offer. For an accurate calculation, submit a request to our manager.',
      features: {
        title: 'Forged Wheels Benefits',
        weight: 'Weight reduction up to 30%',
        strength: 'Increased strength',
        design: 'Any design',
        warranty: 'Quality guarantee'
      },
      process: {
        title: 'How to order wheels for any parameters',
        subtitle: 'DGT specializes in manufacturing forged wheels for individual projects',
        step1: {
          title: 'You select a wheel model from the catalog, or contact us to order a unique design',
          button: 'Wheel Catalog',
          note: 'More than 300 models'
        },
        step2: {
          title: 'After clarifying and agreeing on all details, a production order is placed',
          button: 'Production',
          note: 'Production of any model in 30 days'
        },
        step3: {
          title: 'In 6-8 weeks you will receive your new unique and exclusive wheels',
          button: 'Delivery Terms',
          note: 'Delivery throughout Russia'
        }
      }
    }
  }

  const t = translations[currentLang]

  const diameters = [16, 17, 18, 19, 20, 21, 22, 23, 24, 26]
  const widths = [6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5, 12.0, 12.5, 13.0, 13.5, 14.0, 14.5, 15.0, 15.5, 16.0]
  const ets = Array.from({ length: 29 }, (_, i) => -15 + i * 5) // от -15 до 70 с шагом 5
  const pcds = ['5x100', '5x108', '5x112', '5x114.3', '5x120', '5x127', '5x130', '5x139.7', '6x114.3', '6x139.7']

  const colors = [
    { value: 'black-gloss', label: currentLang === 'ru' ? 'Глянцевый черный' : 'Gloss Black' },
    { value: 'black-matte', label: currentLang === 'ru' ? 'Матовый черный' : 'Matte Black' },
    { value: 'silver', label: currentLang === 'ru' ? 'Серебристый' : 'Silver' },
    { value: 'anthracite', label: currentLang === 'ru' ? 'Антрацит' : 'Anthracite' },
    { value: 'bronze', label: currentLang === 'ru' ? 'Бронза' : 'Bronze' },
    { value: 'gold', label: currentLang === 'ru' ? 'Золото' : 'Gold' },
    { value: 'white', label: currentLang === 'ru' ? 'Белый' : 'White' },
    { value: 'custom', label: currentLang === 'ru' ? 'Индивидуальный цвет' : 'Custom Color' }
  ]

  const designs = [
    { value: 'sport', label: currentLang === 'ru' ? 'Спортивный' : 'Sport' },
    { value: 'classic', label: currentLang === 'ru' ? 'Классический' : 'Classic' },
    { value: 'modern', label: currentLang === 'ru' ? 'Современный' : 'Modern' },
    { value: 'aggressive', label: currentLang === 'ru' ? 'Агрессивный' : 'Aggressive' },
    { value: 'elegant', label: currentLang === 'ru' ? 'Элегантный' : 'Elegant' }
  ]

  const additionalOptions = [
    { 
      value: 'polishing', 
      label: t.polishing,
      description: t.polishingDesc,
      price: 8000,
      image: '/images/polishing.jpg'
    },
    { 
      value: 'brushing', 
      label: t.brushing,
      description: t.brushingDesc,
      price: 10000,
      image: '/images/brushing.jpg'
    },
    { 
      value: 'chroming', 
      label: t.chroming,
      description: t.chromingDesc,
      price: 15000,
      image: '/images/chroming.jpg'
    },
    { 
      value: 'complex-painting', 
      label: t.complexPainting,
      description: t.complexPaintingDesc,
      price: 12000,
      image: '/images/complex-painting.jpg'
    }
  ]

  const calculatePrice = () => {
    let basePrice = 35000

    // Тип диска
    const typeMultiplier = params.type === 'mono' ? 1.0 : 1.35

    // Цена зависит от диаметра
    const diameterPrices: { [key: number]: number } = {
      16: 135000,
      17: 145000,
      18: 162000,
      19: 179000,
      20: 215000,
      21: 235000,
      22: 245000,
      23: 300000,
      24: 350000,
      26: 430000
    }

    basePrice = (diameterPrices[params.diameter] || 200000) / 4 * typeMultiplier

    // Цена зависит от ширины
    if (params.width >= 12.0) {
      basePrice *= 1.3
    } else if (params.width >= 10.0) {
      basePrice *= 1.2
    } else if (params.width >= 9.0) {
      basePrice *= 1.1
    }

    // Доплата за специальные цвета
    const colorValue = colors.find(c => c.value === params.color)?.value
    if (colorValue === 'bronze' || colorValue === 'gold') {
      basePrice += 8000
    } else if (colorValue === 'custom') {
      basePrice += 15000
    }

    // Доплата за сложный дизайн
    if (params.design === 'aggressive' || params.design === 'elegant') {
      basePrice += 5000
    }

    // Дополнительные опции
    params.options.forEach(option => {
      const opt = additionalOptions.find(o => o.value === option)
      if (opt) {
        basePrice += opt.price
      }
    })

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
      type: 'mono',
      diameter: 19,
      width: 8.5,
      et: 35,
      pcd: '5x112',
      color: 'Глянцевый черный',
      design: 'Спортивный',
      options: []
    })
    setCalculatedPrice(0)
  }

  const toggleOption = (option: string) => {
    setParams(prev => ({
      ...prev,
      options: prev.options.includes(option)
        ? prev.options.filter(o => o !== option)
        : [...prev.options, option]
    }))
  }

  const getParamSummary = () => {
    const typeLabel = params.type === 'mono' ? t.monoblock : t.twopiece
    return `${typeLabel}, ${params.diameter}" × ${params.width}J, ET ${params.et}, ${params.pcd}`
  }

  const getOptionsSummary = () => {
    if (params.options.length === 0) return currentLang === 'ru' ? 'Не выбрано' : 'None selected'
    return params.options
      .map(opt => additionalOptions.find(o => o.value === opt)?.label)
      .join(', ')
  }

  return (
    <>
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />
      
      <div className={styles.wheelsPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroImageWrapper}>
              <Image 
                src="/images/wheels-hero.png" 
                alt="DGT Forged Wheels" 
                fill 
                style={{ objectFit: 'cover' }} 
                priority
              />
            </div>
            <div className={styles.heroGradient}></div>
          </div>
          
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>
                <span className={styles.badgeLine}></span>
                <span className={styles.badgeText}>FORGED EXCELLENCE</span>
                <span className={styles.badgeLine}></span>
              </div>
              
              <h1 className={styles.heroTitle}>
                <span className={styles.titleMain}>КОВАНЫЕ</span>
                <span className={styles.titleSub}>ДИСКИ</span>
              </h1>
              
              <p className={styles.heroDescription}>
                Индивидуальное производство эксклюзивных дисков<br />
                премиум-класса для вашего автомобиля
              </p>
              
              <div className={styles.heroActions}>
                <button 
                  onClick={() => {
                    const calculatorSection = document.querySelector(`.${styles.calculatorSection}`)
                    calculatorSection?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={styles.heroButtonPrimary}
                >
                  РАССЧИТАТЬ СТОИМОСТЬ
                </button>
                <Link href="/catalog" className={styles.heroButtonSecondary}>
                  СМОТРЕТЬ КАТАЛОГ
                </Link>
              </div>
              
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>300+</div>
                  <div className={styles.statLabel}>Моделей дисков</div>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>30</div>
                  <div className={styles.statLabel}>Дней производство</div>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>3</div>
                  <div className={styles.statLabel}>Года гарантия</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.heroScroll}>
            <div className={styles.scrollLine}></div>
            <span className={styles.scrollText}>SCROLL</span>
          </div>
        </section>

      {/* Calculator Section */}
      <section className={styles.calculatorSection}>
        <div className={styles.container}>
          <div className={styles.calculatorTop}>
            <div className={styles.calculatorHeadline}>
              <span>{t.calculator}</span>
            </div>
          </div>

          <div className={styles.calculatorBody}>
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
                  <h3 className={styles.stepTitle}>{t.wheelType}</h3>
                  <div className={styles.wheelTypeGrid}>
                    <label className={`${styles.wheelTypeCard} ${params.type === 'mono' ? styles.active : ''}`}>
                      <input 
                        type="radio" 
                        name="type" 
                        value="mono" 
                        checked={params.type === 'mono'}
                        onChange={(e) => setParams({ ...params, type: 'mono' })}
                      />
                      <div className={styles.wheelTypeContent}>
                        <span className={styles.wheelTypeLabel}>{t.monoblock}</span>
                        <p className={styles.wheelTypeDesc}>{t.monoblockDesc}</p>
                      </div>
                    </label>
                    <label className={`${styles.wheelTypeCard} ${params.type === 'two' ? styles.active : ''}`}>
                      <input 
                        type="radio" 
                        name="type" 
                        value="two" 
                        checked={params.type === 'two'}
                        onChange={(e) => setParams({ ...params, type: 'two' })}
                      />
                      <div className={styles.wheelTypeContent}>
                        <span className={styles.wheelTypeLabel}>{t.twopiece}</span>
                        <p className={styles.wheelTypeDesc}>{t.twopieceDesc}</p>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {step === 2 && (
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
                      </div>
                    ))}
                  </div>

                  <div className={styles.stepDivider}></div>

                  <h3 className={styles.stepTitle}>{t.width}</h3>
                  <div className={styles.rangeWrapper}>
                    <div className={styles.rangeValue}>{params.width}J</div>
                    <input
                      type="range"
                      min={widths[0]}
                      max={widths[widths.length - 1]}
                      step={0.5}
                      value={params.width}
                      onChange={(e) => setParams({ ...params, width: parseFloat(e.target.value) })}
                      className={styles.rangeSlider}
                    />
                    <div className={styles.rangeLabels}>
                      <span>{widths[0]}J</span>
                      <span>{widths[widths.length - 1]}J</span>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{t.additionalOptions}</h3>
                  <div className={styles.optionsCheckboxGrid}>
                    {additionalOptions.map(option => (
                      <label 
                        key={option.value}
                        className={`${styles.optionCheckbox} ${params.options.includes(option.value) ? styles.active : ''}`}
                      >
                        <input
                          type="checkbox"
                          checked={params.options.includes(option.value)}
                          onChange={() => toggleOption(option.value)}
                        />
                        <div className={styles.optionCheckboxContent}>
                          <div className={styles.optionCheckboxHeader}>
                            <span className={styles.optionCheckboxLabel}>{option.label}</span>
                            <div className={styles.optionTooltip}>
                              <svg className={styles.infoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M12 16v-4M12 8h.01"/>
                              </svg>
                              <div className={styles.optionTooltipContent}>
                                <p>{option.description}</p>
                                <div className={styles.optionPrice}>+{option.price.toLocaleString()} {t.rubles}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className={styles.resultContent}>
                  <div className={styles.calculatorResults}>
                    <div className={styles.resultsLeft}>
                      <div className={styles.resultsBlock}>
                        <div className={styles.resultsTitle}>{t.selectedParams}</div>
                        <span className={styles.resultsText}>{getParamSummary()}</span>
                      </div>
                      <div className={styles.resultsBlock}>
                        <div className={styles.resultsTitle}>{t.selectedOptions}</div>
                        <span className={styles.resultsText}>{getOptionsSummary()}</span>
                      </div>
                      <div className={styles.resultsPrice}>
                        <span className={styles.priceAmount}>{calculatedPrice.toLocaleString('ru-RU')}</span> {t.rubles}
                        <div className={styles.priceLabel}>{t.pricePerWheel}</div>
                      </div>
                    </div>
                    <div className={styles.resultsRight}>
                      <div className={styles.resultsTotal}>
                        <span className={styles.totalAmount}>{(calculatedPrice * 4).toLocaleString('ru-RU')}</span> {t.rubles}
                      </div>
                      <div className={styles.resultsNote}>{t.priceTitle}</div>
                    </div>
                  </div>

                  <div className={styles.disclaimer}>{t.disclaimer}</div>

                  <div className={styles.resultButtons}>
                    <Link href="/contacts" className={styles.orderButton}>
                      {t.orderNow}
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
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2v20M2 12h20" />
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

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processTop}>
            <h2 className={styles.processHeadline}>{t.process.title}</h2>
            <p className={styles.processInfo}>{t.process.subtitle}</p>
          </div>
          <div className={styles.stepsList}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepText}>{t.process.step1.title}</div>
              <Link href="/catalog" className={styles.stepButton}>{t.process.step1.button}</Link>
              <div className={styles.stepNote}>{t.process.step1.note}</div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepText}>{t.process.step2.title}</div>
              <Link href="/production" className={styles.stepButton}>{t.process.step2.button}</Link>
              <div className={styles.stepNote}>{t.process.step2.note}</div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepText}>{t.process.step3.title}</div>
              <Link href="/delivery" className={styles.stepButton}>{t.process.step3.button}</Link>
              <div className={styles.stepNote}>{t.process.step3.note}</div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <Footer currentLang={currentLang} />
  </>
  )
}
