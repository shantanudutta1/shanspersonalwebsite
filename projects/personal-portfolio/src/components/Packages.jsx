import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import './Packages.css'

function Packages() {
    const { language } = useLanguage()
    const t = translations[language].packages
    const [activeCloud, setActiveCloud] = useState('sales')
    const [isTransitioning, setIsTransitioning] = useState(false)

    const handleCloudChange = (cloudId) => {
        if (cloudId === activeCloud) return
        setIsTransitioning(true)
        setTimeout(() => {
            setActiveCloud(cloudId)
            setIsTransitioning(false)
        }, 200)
    }

    const cloudTypes = [
        { id: 'sales', label: t.tabs.sales },
        { id: 'service', label: t.tabs.service },
        { id: 'revenue', label: t.tabs.revenue },
    ]

    const getPackageContent = (pkgId) => {
        const cloudContent = t[activeCloud]
        const pkgNames = t.packageNames
        const taglines = t.taglines

        const contentMap = {
            enable: {
                name: pkgNames.enable,
                tagline: taglines.getStarted,
                price: activeCloud === 'revenue' ? '$20,000' : '$15,000',
                timeline: activeCloud === 'revenue' ? '8-10 weeks' : '6-8 weeks',
                description: cloudContent.enable.description,
                features: cloudContent.enable.features,
                color: 'blue'
            },
            elevate: {
                name: pkgNames.elevate,
                tagline: taglines.scaleUp,
                price: activeCloud === 'revenue' ? '$55,000' : '$45,000',
                timeline: activeCloud === 'revenue' ? '14-18 weeks' : '12-16 weeks',
                description: cloudContent.elevate.description,
                features: cloudContent.elevate.features,
                color: 'teal',
                popular: true
            },
            transform: {
                name: pkgNames.transform,
                tagline: taglines.goAllIn,
                price: activeCloud === 'revenue' ? '$90,000' : '$75,000',
                timeline: activeCloud === 'revenue' ? '20-24 weeks' : '16-20 weeks',
                description: cloudContent.transform.description,
                features: cloudContent.transform.features,
                color: 'magenta'
            }
        }
        return contentMap[pkgId]
    }

    const currentPackageIds = ['enable', 'elevate', 'transform']

    return (
        <section className="packages-section" id="packages">
            <div className="packages-background" aria-hidden="true">
                <div className="packages-grid-overlay"></div>
                <div className="packages-glow packages-glow-1"></div>
                <div className="packages-glow packages-glow-2"></div>
            </div>

            <div className="container">
                <h2 className="packages-title">
                    {t.title} <span className="packages-highlight">Packages</span>
                </h2>
                <p className="packages-subtitle">
                    {t.subtitle}
                </p>

                {/* Cloud Type Tabs */}
                <div className="cloud-tabs" role="tablist" aria-label="Cloud type selection">
                    {cloudTypes.map((cloud) => (
                        <button
                            key={cloud.id}
                            role="tab"
                            aria-selected={activeCloud === cloud.id}
                            aria-controls={`${cloud.id}-panel`}
                            className={`cloud-tab ${activeCloud === cloud.id ? 'cloud-tab--active' : ''}`}
                            onClick={() => handleCloudChange(cloud.id)}
                        >
                            {cloud.label}
                        </button>
                    ))}
                </div>

                {/* Packages Grid */}
                <div
                    role="tabpanel"
                    id={`${activeCloud}-panel`}
                    aria-label={t.tabs[activeCloud]}
                    className={`packages-grid-wrapper ${isTransitioning ? 'packages-grid-wrapper--transitioning' : ''}`}
                >
                    <ul className="packages-grid" role="list">
                        {currentPackageIds.map((pkgId) => {
                            const pkg = getPackageContent(pkgId)
                            return (
                                <li
                                    key={`${activeCloud}-${pkgId}`}
                                    className={`package-card package-card--${pkg.color} ${pkg.popular ? 'package-card--popular' : ''}`}
                                >
                                    {pkg.popular && (
                                        <div className="popular-badge">
                                            <span>{language === 'en' ? 'MOST POPULAR' : 'AM BELIEBTESTEN'}</span>
                                        </div>
                                    )}

                                    <header className="package-header">
                                        <h3 className="package-name">{pkg.name}</h3>
                                        <p className="package-tagline">{pkg.tagline}</p>
                                    </header>

                                    <div className="package-price">
                                        <span className="price-amount">{pkg.price}</span>
                                    </div>

                                    <div className="package-features">
                                        <p className="features-description">{pkg.description}</p>
                                        <ul className="features-list" role="list">
                                            {pkg.features.map((feature, index) => (
                                                <li key={index} className="feature-item">
                                                    <svg
                                                        className="feature-check"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M13.5 4.5L6 12L2.5 8.5"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <footer className="package-footer">
                                        <div className="package-timeline">
                                            <span className="timeline-label">{t.timeline}:</span>
                                            <span className="timeline-value">{pkg.timeline}</span>
                                        </div>
                                        <p className="timeline-note">
                                            {activeCloud === 'revenue' && pkgId === 'transform'
                                                ? (language === 'en' ? 'Includes 3 weeks UAT + 3 weeks support' : 'Inklusive 3 Wochen UAT + 3 Wochen Support')
                                                : (language === 'en' ? 'Includes 2 weeks UAT + 2 weeks support' : 'Inklusive 2 Wochen UAT + 2 Wochen Support')}
                                        </p>
                                    </footer>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Packages
