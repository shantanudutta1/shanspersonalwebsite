import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './Contact.css';

const Contact = () => {
    const { language } = useLanguage();
    const t = translations[language].contact;

    return (
        <section id="contact" className="contact-section" aria-labelledby="contact-title">
            <div className="contact-glow-1" aria-hidden="true"></div>
            <div className="contact-glow-2" aria-hidden="true"></div>
            <div className="container animate-fade-in">
                <h2 id="contact-title" className="section-title">
                    {t.title}
                </h2>
                <p className="contact-subtitle">
                    {t.subtitle}
                </p>

                <div className="contact-content">
                    <article className="contact-card card">
                        <h3>{t.email}</h3>
                        <a href="mailto:shantanu.m.dutta@gmail.com" className="contact-link">
                            shantanu.m.dutta@gmail.com
                        </a>
                    </article>

                    <article className="contact-card card">
                        <h3>{t.linkedin}</h3>
                        <a href="https://www.linkedin.com/in/shantanu-dutta-7847846b/" target="_blank" rel="noopener noreferrer" className="contact-link">
                            linkedin.com/in/shantanu-dutta-7847846b
                        </a>
                    </article>

                    <article className="contact-card card">
                        <h3>{t.location}</h3>
                        <p className="contact-text">{t.locationValue}</p>
                    </article>
                </div>

                <div className="contact-cta">
                    <a href="mailto:shantanu.m.dutta@gmail.com" className="btn-cta">
                        {t.cta}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
