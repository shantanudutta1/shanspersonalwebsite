import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './Experience.css';

const Experience = () => {
    const { language } = useLanguage();
    const t = translations[language].experience;

    return (
        <section id="experience" className="experience-section" aria-labelledby="experience-title">
            <div className="experience-glow" aria-hidden="true"></div>
            <div className="container">
                <h2 id="experience-title" className="section-title animate-fade-in">
                    {t.title}
                </h2>
                <div className="experience-grid">
                    {t.items.map((item, index) => (
                        <article
                            key={index}
                            className="experience-card card animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="experience-header">
                                {item.logo && (
                                    <div className="company-logo">
                                        <img src={item.logo} alt={`${item.company} logo`} />
                                    </div>
                                )}
                                <div className="experience-meta">
                                    <span className="period">{item.period}</span>
                                    <h3 className="position">{item.position}</h3>
                                    <p className="company">{item.company}</p>
                                </div>
                            </div>
                            <p className="description">{item.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
