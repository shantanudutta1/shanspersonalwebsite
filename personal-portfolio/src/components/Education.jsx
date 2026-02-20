import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './Education.css';

const getCertIcon = (cert) => {
    if (cert.includes('AI')) return '🤖';
    if (cert.includes('Sales Cloud')) return '☁️';
    if (cert.includes('Administrator')) return '⚙️';
    if (cert.includes('App Builder')) return '🏗️';
    if (cert.includes('SAP')) return '📊';
    return '📜';
};

const Education = () => {
    const { language } = useLanguage();
    const t = translations[language].education;

    // Hardcoded certification list for now as icons depend on text matching
    const certifications = [
        "Salesforce AI Associate (Dec 2024)",
        "Salesforce Certified Platform App Builder (April 2020)",
        "Salesforce Sales Cloud Consultant (Dec 2018)",
        "Salesforce Administrator (April 2018)",
        "Integrated Business Processes with SAP ERP (2016)",
        "Value Management/Wertanalyse (2016)"
    ];

    return (
        <section id="education" className="education-section" aria-labelledby="education-title">
            <div className="container">
                <h2 id="education-title" className="section-title animate-fade-in">
                    {t.title}
                </h2>

                <div className="education-grid">
                    {/* Education Cards */}
                    <div className="education-column animate-fade-in">
                        <h3 className="column-title">{t.academic}</h3>
                        <div className="education-list">
                            {t.items.map((item, index) => (
                                <article key={index} className="education-card card">
                                    <span className="period">{item.period}</span>
                                    <h4 className="degree">{item.degree}</h4>
                                    <p className="school">{item.school}</p>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div id="certs" className="certs-column animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <h3 className="column-title">{t.certifications}</h3>
                        <ul className="certs-grid" role="list">
                            {certifications.map((cert, index) => (
                                <li key={index} className="cert-badge">
                                    <span className="cert-name">{cert}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
