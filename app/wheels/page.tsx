'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './wheels.module.css'

export default function WheelsPage() {
  const [currentLang, setCurrentLang] = useState<'ru' | 'en'>('ru')
  const [wheelType, setWheelType] = useState<'mono' | 'two'>('mono')
  const [diameter, setDiameter] = useState<number>(18)
  const [width, setWidth] = useState<number>(8)
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['polish'])
  const [calculatorOpen, setCalculatorOpen] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const translations = {
    ru: {
      hero: {
        label: 'Forged Wheels',
        title: 'КОВАНЫЕ',
        titleAccent: 'ДИСКИ',
        description: 'Собственное производство DGT. Эксклюзивные кованые диски по индивидуальным параметрам'
      },
      calculator: {
        title: 'Рассчитайте стоимость',
        subtitle: 'ваших новых дисков',
        calculate: 'Рассчитать стоимость'
      },
      types: {
        title: 'Выберите тип диска',
        mono: 'Моноблоки',
        monoDesc: 'Из цельных болванок кованого алюминия мы создаём лёгкие и прочные диски',
        two: 'Двухсоставные',
        twoDesc: 'Возможно изготовление необходимых форм обода и центра диска в любой комбинации цветов'
      },
      params: {
        title: 'Укажите диаметр и ширину',
        diameterTitle: 'Выберите диаметр',
        widthTitle: 'Выберите ширину диска (J)',
        diameter: 'Диаметр',
        width: 'Ширина'
      },
      options: {
        title: 'Дополнительные опции',
        polish: 'Полировка дисков',
        polishDesc: 'Придаст дискам уникальный вид',
        brushing: 'Браширование',
        brushingDesc: 'Ручная шлифовка с покрытием лаком',
        chrome: 'Хромирование',
        chromeDesc: 'Индивидуальность и неповторимость',
        painting: 'Сложная покраска',
        paintingDesc: 'Покраска в несколько цветов'
      },
      results: {
        selected: 'Выбранные параметры:',
        selectedOptions: 'Выбранные опции:',
        onePrice: 'стоимость одного диска',
        totalPrice: 'стоимость комплекта (4 диска)',
        note: 'Стоимость указана предварительной согласно расчётам, и не является публичной офертой.',
        orderButton: 'Оформить заказ'
      },
      features: {
        title: 'Преимущества кованых дисков',
        item1: {
          title: 'Прочность',
          desc: 'В 3 раза прочнее литых дисков'
        },
        item2: {
          title: 'Лёгкость',
          desc: 'На 20-30% легче стандартных дисков'
        },
        item3: {
          title: 'Уникальность',
          desc: 'Изготовление по индивидуальным параметрам'
        },
        item4: {
          title: 'Гарантия',
          desc: '2 года гарантии на все диски'
        }
      },
      contact: {
        title: 'Нужна консультация?',
        desc: 'Свяжитесь с менеджером для подбора дисков под ваш автомобиль',
        button: 'Связаться с менеджером'
      }
    },
    en: {
      hero: {
        label: 'Forged Wheels',
        title: 'FORGED',
        titleAccent: 'WHEELS',
        description: 'DGT own production. Exclusive forged wheels with custom parameters'
      },
      calculator: {
        title: 'Calculate the cost',
        subtitle: 'of your new wheels',
        calculate: 'Calculate cost'
      },
      types: {
        title: 'Select wheel type',
        mono: 'Monoblock',
        monoDesc: 'Light and strong wheels from solid forged aluminum blanks',
        two: 'Two-piece',
        twoDesc: 'Manufacturing of rim and center in any color combination'
      },
      params: {
        title: 'Specify diameter and width',
        diameterTitle: 'Select diameter',
        widthTitle: 'Select wheel width (J)',
        diameter: 'Diameter',
        width: 'Width'
      },
      options: {
        title: 'Additional options',
        polish: 'Wheel polishing',
        polishDesc: 'Give wheels a unique look',
        brushing: 'Brushing',
        brushingDesc: 'Hand sanding with lacquer coating',
        chrome: 'Chrome plating',
        chromeDesc: 'Individuality and uniqueness',
        painting: 'Complex painting',
        paintingDesc: 'Multi-color painting'
      },
      results: {
        selected: 'Selected parameters:',
        selectedOptions: 'Selected options:',
        onePrice: 'cost of one wheel',
        totalPrice: 'set cost (4 wheels)',
        note: 'The cost is preliminary according to calculations and is not a public offer.',
        orderButton: 'Place order'
      },
      features: {
        title: 'Forged wheels advantages',
        item1: {
          title: 'Strength',
          desc: '3 times stronger than cast wheels'
        },
        item2: {
          title: 'Lightness',
          desc: '20-30% lighter than standard wheels'
        },
        item3: {
          title: 'Uniqueness',
          desc: 'Manufacturing to individual parameters'
        },
        item4: {
          title: 'Warranty',
          desc: '2 years warranty on all wheels'
        }
      },
      contact: {
        title: 'Need consultation?',
        desc: 'Contact our manager to select wheels for your car',
        button: 'Contact Manager'
      }
    }
  }

  const t = translations[currentLang]

  // Available diameters
  const diameters = [16, 17, 18, 19, 20, 21, 22, 23, 24]

  // Width ranges by diameter
  const widthRanges: Record<number, { min: number; max: number }> = {
    16: { min: 6, max: 7 },
    17: { min: 7.5, max: 12 },
    18: { min: 7.5, max: 13 },
    19: { min: 8, max: 12 },
    20: { min: 8, max: 14 },
    21: { min: 8, max: 13 },
    22: { min: 8, max: 12 },
    23: { min: 10, max: 13 },
    24: { min: 10, max: 12 }
  }

  // Base prices for monoblock (4 wheels set)
  const monoPrices: Record<number, number> = {
    16: 135000,
    17: 145000,
    18: 162000,
    19: 179000,
    20: 215000,
    21: 235000,
    22: 245000,
    23: 300000,
    24: 350000
  }

  // Base prices for two-piece (4 wheels set)
  const twoPrices: Record<number, number> = {
    18: 220000,
    19: 225000,
    20: 246000,
    21: 284000,
    22: 318000,
    24: 378000,
    26: 430000
  }

  // Option prices (per set)
  const optionPrices: Record<string, number> = {
    polish: 20000,
    brushing: 25000,
    chrome: 80000,
    painting: 35000
  }

  // Calculate total price
  const calculatePrice = () => {
    let basePrice = wheelType === 'mono' ? monoPrices[diameter] || 0 : twoPrices[diameter] || 0
    
    // Add width coefficient (wider = more expensive)
    const range = widthRanges[diameter]
    if (range) {
      const widthCoef = (width - range.min) / (range.max - range.min)
      basePrice += basePrice * widthCoef * 0.15 // Up to 15% increase for max width
    }

    // Add options
    selectedOptions.forEach(option => {
      basePrice += optionPrices[option] || 0
    })

    return Math.round(basePrice)
  }

  const totalPrice = calculatePrice()
  const oneWheelPrice = Math.round(totalPrice / 4)

  const handleOptionToggle = (option: string) => {
    setSelectedOptions(prev => 
      prev.includes(option) 
        ? prev.filter(o => o !== option)
        : [...prev, option]
    )
  }

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    setShowResults(true)
  }

  // Update width when diameter changes
  useEffect(() => {
    const range = widthRanges[diameter]
    if (range && (width < range.min || width > range.max)) {
      setWidth(range.min)
    }
  }, [diameter])

  const getSelectedParams = () => {
    return `${t.types[wheelType]}, ${diameter}", ${width}J`
  }

  const getSelectedOptionsText = () => {
    if (selectedOptions.length === 0) return 'Нет'
    return selectedOptions.map(opt => {
      switch(opt) {
        case 'polish': return t.options.polish
        case 'brushing': return t.options.brushing
        case 'chrome': return t.options.chrome
        case 'painting': return t.options.painting
        default: return ''
      }
    }).join(', ')
  }

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

      {/* Calculator Section */}
      <section className={styles.calculatorSection}>
        <div className={styles.container}>
          <div className={styles.calculator}>
            <div 
              className={`${styles.calculatorTop} ${calculatorOpen ? styles.calculatorTopOpen : ''}`}
              onClick={() => setCalculatorOpen(!calculatorOpen)}
            >
              <div className={styles.calculatorTopHeadline}>
                <span>{t.calculator.title}</span><br />
                {t.calculator.subtitle}
              </div>
              <div className={styles.calculatorTopBtn}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </div>
            </div>

            <div className={`${styles.calculatorBody} ${calculatorOpen ? styles.calculatorBodyOpen : ''}`}>
              <form onSubmit={handleCalculate}>
                {/* Type Selection */}
                <div className={styles.calculatorBlock}>
                  <div className={styles.calculatorTitle}>{t.types.title}</div>
                  <div className={styles.calculatorLabel}>
                    <label className={wheelType === 'mono' ? styles.labelActive : ''}>
                      <input 
                        type="radio" 
                        name="type" 
                        value="mono"
                        checked={wheelType === 'mono'}
                        onChange={(e) => setWheelType('mono')}
                      />
                      <span>{t.types.mono}</span>
                      {t.types.monoDesc}
                    </label>
                    <label className={wheelType === 'two' ? styles.labelActive : ''}>
                      <input 
                        type="radio" 
                        name="type" 
                        value="two"
                        checked={wheelType === 'two'}
                        onChange={(e) => setWheelType('two')}
                      />
                      <span>{t.types.two}</span>
                      {t.types.twoDesc}
                    </label>
                  </div>
                </div>

                {/* Diameter and Width */}
                <div className={styles.calculatorBlock}>
                  <div className={styles.calculatorTitle}>{t.params.title}</div>
                  
                  <div className={styles.calculatorSubtitle}>{t.params.diameterTitle}</div>
                  <div className={styles.diameterGrid}>
                    {diameters.map(d => (
                      <button
                        key={d}
                        type="button"
                        className={`${styles.diameterButton} ${diameter === d ? styles.diameterButtonActive : ''}`}
                        onClick={() => setDiameter(d)}
                      >
                        {d}"
                      </button>
                    ))}
                  </div>

                  <div className={styles.calculatorRange}>
                    <div className={styles.calculatorSubtitle}>{t.params.widthTitle}</div>
                    <div className={styles.rangeValue}>{width}J</div>
                    <input
                      type="range"
                      min={widthRanges[diameter]?.min || 6}
                      max={widthRanges[diameter]?.max || 12}
                      step="0.5"
                      value={width}
                      onChange={(e) => setWidth(parseFloat(e.target.value))}
                      className={styles.rangeInput}
                    />
                    <div className={styles.rangeLabels}>
                      <span>{widthRanges[diameter]?.min}J</span>
                      <span>{widthRanges[diameter]?.max}J</span>
                    </div>
                  </div>
                </div>

                {/* Options */}
                <div className={styles.calculatorBlock}>
                  <div className={styles.calculatorTitle}>{t.options.title}</div>
                  <div className={styles.optionsGrid}>
                    <label className={selectedOptions.includes('polish') ? styles.optionActive : ''}>
                      <input
                        type="checkbox"
                        checked={selectedOptions.includes('polish')}
                        onChange={() => handleOptionToggle('polish')}
                      />
                      <span className={styles.optionName}>{t.options.polish}</span>
                      <span className={styles.optionDesc}>{t.options.polishDesc}</span>
                    </label>

                    <label className={selectedOptions.includes('brushing') ? styles.optionActive : ''}>
                      <input
                        type="checkbox"
                        checked={selectedOptions.includes('brushing')}
                        onChange={() => handleOptionToggle('brushing')}
                      />
                      <span className={styles.optionName}>{t.options.brushing}</span>
                      <span className={styles.optionDesc}>{t.options.brushingDesc}</span>
                    </label>

                    <label className={selectedOptions.includes('chrome') ? styles.optionActive : ''}>
                      <input
                        type="checkbox"
                        checked={selectedOptions.includes('chrome')}
                        onChange={() => handleOptionToggle('chrome')}
                      />
                      <span className={styles.optionName}>{t.options.chrome}</span>
                      <span className={styles.optionDesc}>{t.options.chromeDesc}</span>
                    </label>

                    <label className={selectedOptions.includes('painting') ? styles.optionActive : ''}>
                      <input
                        type="checkbox"
                        checked={selectedOptions.includes('painting')}
                        onChange={() => handleOptionToggle('painting')}
                      />
                      <span className={styles.optionName}>{t.options.painting}</span>
                      <span className={styles.optionDesc}>{t.options.paintingDesc}</span>
                    </label>
                  </div>

                  <div className={styles.calculatorSubmit}>
                    <button type="submit" className={styles.calculateButton}>
                      {t.calculator.calculate}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Results */}
            {showResults && (
              <div className={styles.calculatorBottom}>
                <div className={styles.calculatorResults}>
                  <div className={styles.resultsLeft}>
                    <div className={styles.resultsBlock}>
                      <div className={styles.resultsTitle}>{t.results.selected}</div>
                      <span>{getSelectedParams()}</span>
                    </div>
                    <div className={styles.resultsBlock}>
                      <div className={styles.resultsTitle}>{t.results.selectedOptions}</div>
                      <span>{getSelectedOptionsText()}</span>
                    </div>
                    <div className={styles.resultsPrice}>
                      <span>{oneWheelPrice.toLocaleString('ru-RU')}</span> ₽
                      <div className={styles.resultsTitle}>{t.results.onePrice}</div>
                    </div>
                  </div>
                  <div className={styles.resultsRight}>
                    <div className={styles.resultsTotal}>
                      <span>{totalPrice.toLocaleString('ru-RU')}</span> ₽
                    </div>
                    <div className={styles.resultsNote}>{t.results.totalPrice}</div>
                  </div>
                </div>
                <div className={styles.calculatorNote}>{t.results.note}</div>
                <div className={styles.calculatorOrder}>
                  <a 
                    href="https://t.me/dgt_manager"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.orderButton}
                  >
                    {t.results.orderButton}
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                      <path d="M1 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </a>
                </div>
              </div>
            )}
          </div>
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
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
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
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
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

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactCard}>
            <h3 className={styles.contactTitle}>{t.contact.title}</h3>
            <p className={styles.contactDesc}>{t.contact.desc}</p>
            <a 
              href="https://t.me/dgt_manager"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactButton}
            >
              <span>{t.contact.button}</span>
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                <path d="M1 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer currentLang={currentLang} />
    </>
  )
}
