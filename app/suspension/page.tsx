'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './suspension.module.css'

export default function SuspensionPage() {
  const [currentLang, setCurrentLang] = useState<'ru' | 'en'>('ru')
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const translations = {
    ru: {
      hero: {
        label: 'Suspension Systems',
        title: 'Системы',
        titleAccent: 'подвески',
        description: 'Собственное производство DGT. Пневматические и койловерные подвески премиум-класса'
      },
      brands: {
        title: 'Выберите марку автомобиля',
        subtitle: 'Мы работаем с премиальными брендами',
        noBrandTitle: 'Не нашли свою марку?',
        noBrandDesc: 'Свяжитесь с менеджером, мы работаем с любыми марками автомобилей',
        contactButton: 'Связаться с менеджером'
      },
      types: {
        title: 'Выберите тип подвески',
        subtitle: 'Каждый тип имеет свои преимущества'
      },
      products: {
        title: 'Системы подвески для',
        selectBrand: 'Выберите марку автомобиля выше',
        selectType: 'Выберите тип подвески выше',
        from: 'от',
        noSystemTitle: 'Не нашли подходящую систему?',
        noSystemDesc: 'Мы изготовим систему подвески под вашу марку и модель автомобиля. Свяжитесь с менеджером для индивидуального расчета.'
      },
      specs: {
        type: 'Тип',
        adjustment: 'Регулировка',
        pressure: 'Давление',
        lowering: 'Занижение',
        control: 'Управление'
      },
      suspensionTypes: {
        air: 'Пневмоподвеска',
        airDesc: 'Плавная езда, регулировка высоты',
        coilover: 'Койловеры',
        coiloverDesc: 'Спортивная управляемость, жесткость'
      },
      features: {
        title: 'Преимущества наших систем',
        item1: {
          title: 'Регулировка',
          desc: 'Точная настройка высоты и жесткости'
        },
        item2: {
          title: 'Управление',
          desc: 'Электронное управление через приложение'
        },
        item3: {
          title: 'Качество',
          desc: 'Премиум компоненты европейского качества'
        },
        item4: {
          title: 'Гарантия',
          desc: '2 года гарантии на все компоненты'
        }
      }
    },
    en: {
      hero: {
        label: 'Suspension Systems',
        title: 'Suspension',
        titleAccent: 'Systems',
        description: 'DGT own production. Premium air and coilover suspension systems'
      },
      brands: {
        title: 'Select your car brand',
        subtitle: 'We work with premium brands',
        noBrandTitle: 'Can\'t find your brand?',
        noBrandDesc: 'Contact our manager, we work with any car brands',
        contactButton: 'Contact Manager'
      },
      types: {
        title: 'Select suspension type',
        subtitle: 'Each type has its advantages'
      },
      products: {
        title: 'Suspension systems for',
        selectBrand: 'Select car brand above',
        selectType: 'Select suspension type above',
        from: 'from',
        noSystemTitle: 'Didn\'t find a suitable system?',
        noSystemDesc: 'We will manufacture a suspension system for your car brand and model. Contact our manager for individual calculation.'
      },
      specs: {
        type: 'Type',
        adjustment: 'Adjustment',
        pressure: 'Pressure',
        lowering: 'Lowering',
        control: 'Control'
      },
      suspensionTypes: {
        air: 'Air Suspension',
        airDesc: 'Smooth ride, height adjustment',
        coilover: 'Coilovers',
        coiloverDesc: 'Sport handling, stiffness'
      },
      features: {
        title: 'System advantages',
        item1: {
          title: 'Adjustment',
          desc: 'Precise height and stiffness tuning'
        },
        item2: {
          title: 'Control',
          desc: 'Electronic control via mobile app'
        },
        item3: {
          title: 'Quality',
          desc: 'Premium European quality components'
        },
        item4: {
          title: 'Warranty',
          desc: '2 years warranty on all components'
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

  // Suspension types
  const suspensionTypes = [
    { 
      id: 'air', 
      name: t.suspensionTypes.air,
      desc: t.suspensionTypes.airDesc,
      icon: 'air'
    },
    { 
      id: 'coilover', 
      name: t.suspensionTypes.coilover,
      desc: t.suspensionTypes.coiloverDesc,
      icon: 'coilover'
    }
  ]

  // Suspension systems data by brand and type
  const suspensionSystems: Record<string, Record<string, any[]>> = {
    porsche: {
      air: [
        { id: 1, name: 'DGT Air Pro', model: '911 (992)', price: '680000', adjustment: 'Электронная', pressure: '0-12 bar', lowering: 'До 80мм', control: 'Приложение' },
        { id: 2, name: 'DGT Air Elite', model: 'Cayenne', price: '720000', adjustment: 'Электронная', pressure: '0-12 bar', lowering: 'До 100мм', control: 'Приложение' }
      ],
      coilover: [
        { id: 3, name: 'DGT Coilover Sport', model: '911 GT3', price: '420000', adjustment: '32 клика', pressure: '-', lowering: 'До 60мм', control: 'Ручное' },
        { id: 4, name: 'DGT Coilover Pro', model: 'Panamera', price: '480000', adjustment: '32 клика', pressure: '-', lowering: 'До 70мм', control: 'Ручное' }
      ]
    },
    bmw: {
      air: [
        { id: 5, name: 'DGT Air Sport', model: 'M3 (G80)', price: '650000', adjustment: 'Электронная', pressure: '0-12 bar', lowering: 'До 75мм', control: 'Приложение' },
        { id: 6, name: 'DGT Air Pro', model: 'M5 Competition', price: '690000', adjustment: 'Электронная', pressure: '0-12 bar', lowering: 'До 85мм', control: 'Приложение' }
      ],
      coilover: [
        { id: 7, name: 'DGT Coilover Sport', model: 'M3 Competition', price: '380000', adjustment: '32 клика', pressure: '-', lowering: 'До 55мм', control: 'Ручное' },
        { id: 8, name: 'DGT Coilover Race', model: 'M4 CSL', price: '520000', adjustment: '48 кликов', pressure: '-', lowering: 'До 65мм', control: 'Ручное' }
      ]
    },
    mercedes: {
      air: [
        { id: 9, name: 'DGT Air AMG', model: 'C63 AMG', price: '670000', adjustment: 'Электронная', pressure: '0-12 bar', lowering: 'До 80мм', control: 'Приложение' },
        { id: 10, name: 'DGT Air Elite', model: 'GT 63 S', price: '750000', adjustment: 'Электронная', pressure: '0-14 bar', lowering: 'До 90мм', control: 'Приложение' }
      ],
      coilover: [
        { id: 11, name: 'DGT Coilover AMG', model: 'C63 AMG', price: '450000', adjustment: '32 клика', pressure: '-', lowering: 'До 60мм', control: 'Ручное' },
        { id: 12, name: 'DGT Coilover Pro', model: 'E63 AMG', price: '490000', adjustment: '32 клика', pressure: '-', lowering: 'До 70мм', control: 'Ручное' }
      ]
    },
    audi: {
      air: [
        { id: 13, name: 'DGT Air Sport', model: 'RS6 Avant', price: '680000', adjustment: 'Электронная', pressure: '0-12 bar', lowering: 'До 80мм', control: 'Приложение' },
        { id: 14, name: 'DGT Air Pro', model: 'RS Q8', price: '720000', adjustment: 'Электронная', pressure: '0-12 bar', lowering: 'До 90мм', control: 'Приложение' }
      ],
      coilover: [
        { id: 15, name: 'DGT Coilover RS', model: 'RS6 Avant', price: '420000', adjustment: '32 клика', pressure: '-', lowering: 'До 65мм', control: 'Ручное' },
        { id: 16, name: 'DGT Coilover Sport', model: 'RS7', price: '460000', adjustment: '32 клика', pressure: '-', lowering: 'До 70мм', control: 'Ручное' }
      ]
    },
    lamborghini: {
      air: [
        { id: 17, name: 'DGT Air Supercar', model: 'Huracán EVO', price: '820000', adjustment: 'Электронная', pressure: '0-14 bar', lowering: 'До 70мм', control: 'Приложение' }
      ],
      coilover: [
        { id: 18, name: 'DGT Coilover Race', model: 'Huracán STO', price: '580000', adjustment: '48 кликов', pressure: '-', lowering: 'До 50мм', control: 'Ручное' },
        { id: 19, name: 'DGT Coilover Pro', model: 'Urus', price: '620000', adjustment: '32 клика', pressure: '-', lowering: 'До 75мм', control: 'Ручное' }
      ]
    },
    ferrari: {
      air: [
        { id: 20, name: 'DGT Air Supercar', model: 'F8 Tributo', price: '850000', adjustment: 'Электронная', pressure: '0-14 bar', lowering: 'До 65мм', control: 'Приложение' }
      ],
      coilover: [
        { id: 21, name: 'DGT Coilover Race', model: 'F8 Tributo', price: '620000', adjustment: '48 кликов', pressure: '-', lowering: 'До 50мм', control: 'Ручное' },
        { id: 22, name: 'DGT Coilover Elite', model: 'SF90 Stradale', price: '680000', adjustment: '48 кликов', pressure: '-', lowering: 'До 55мм', control: 'Ручное' }
      ]
    }
  }

  const handleBrandSelect = (brandId: string) => {
    setSelectedBrand(brandId)
    setSelectedType(null) // Reset type when brand changes
    
    setTimeout(() => {
      const typeSection = document.querySelector('#type-section')
      if (typeSection) {
        typeSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const handleTypeSelect = (typeId: string) => {
    setSelectedType(typeId)
    
    setTimeout(() => {
      const productsSection = document.querySelector('#products-section')
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const selectedProducts = selectedBrand && selectedType 
    ? (suspensionSystems[selectedBrand]?.[selectedType] || [])
    : []

  const getBrandName = () => brands.find(b => b.id === selectedBrand)?.name || ''
  const getTypeName = () => suspensionTypes.find(t => t.id === selectedType)?.name || ''

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

      {/* Type Selector - Shows only when brand is selected */}
      {selectedBrand && (
        <section className={styles.typeSection} id="type-section">
          <div className={styles.container}>
            <div className={styles.typeHeader}>
              <h2 className={styles.typeTitle}>{t.types.title}</h2>
              <p className={styles.typeSubtitle}>{t.types.subtitle}</p>
            </div>

            <div className={styles.typeGrid}>
              {suspensionTypes.map((type) => (
                <button
                  key={type.id}
                  className={`${styles.typeCard} ${selectedType === type.id ? styles.typeCardActive : ''}`}
                  onClick={() => handleTypeSelect(type.id)}
                >
                  <div className={styles.typeIcon}>
                    {type.id === 'air' ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M12 1v6m0 6v6M23 12h-6m-6 0H5"/>
                        <circle cx="12" cy="12" r="10"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 2v20M8 6l4-4 4 4M8 18l4 4 4-4"/>
                        <circle cx="12" cy="12" r="2"/>
                      </svg>
                    )}
                  </div>
                  <div className={styles.typeName}>{type.name}</div>
                  <div className={styles.typeDesc}>{type.desc}</div>
                  {selectedType === type.id && (
                    <div className={styles.typeCheck}>
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
          {selectedBrand && selectedType ? (
            selectedProducts.length > 0 ? (
              <>
                <h2 className={styles.productsTitle}>
                  {t.products.title} {getBrandName()} - {getTypeName()}
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
                            {selectedType === 'air' ? (
                              <>
                                <circle cx="12" cy="12" r="3"/>
                                <path d="M12 1v6m0 6v6M23 12h-6m-6 0H5"/>
                                <circle cx="12" cy="12" r="10"/>
                              </>
                            ) : (
                              <>
                                <path d="M12 2v20M8 6l4-4 4 4M8 18l4 4 4-4"/>
                                <circle cx="12" cy="12" r="2"/>
                              </>
                            )}
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
                            <span className={styles.specLabel}>{t.specs.adjustment}:</span>
                            <span className={styles.specValue}>{product.adjustment}</span>
                          </div>
                          {product.pressure !== '-' && (
                            <div className={styles.specItem}>
                              <span className={styles.specLabel}>{t.specs.pressure}:</span>
                              <span className={styles.specValue}>{product.pressure}</span>
                            </div>
                          )}
                          <div className={styles.specItem}>
                            <span className={styles.specLabel}>{t.specs.lowering}:</span>
                            <span className={styles.specValue}>{product.lowering}</span>
                          </div>
                          <div className={styles.specItem}>
                            <span className={styles.specLabel}>{t.specs.control}:</span>
                            <span className={styles.specValue}>{product.control}</span>
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
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
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
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <p className={styles.emptyText}>
                {!selectedBrand ? t.products.selectBrand : t.products.selectType}
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
                  <path d="M12 6v12m-6-6h12"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </div>
              <h3 className={styles.featureTitle}>{t.features.item1.title}</h3>
              <p className={styles.featureDesc}>{t.features.item1.desc}</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8M12 17v4"/>
                </svg>
              </div>
              <h3 className={styles.featureTitle}>{t.features.item2.title}</h3>
              <p className={styles.featureDesc}>{t.features.item2.desc}</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
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
