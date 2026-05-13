import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './Recommendations.css';

const Recommendations = () => {
    const { language } = useLanguage();
    const t = translations[language];

    if (!t.recommendations || !t.recommendations.items) {
        return null;
    }

    return (
        <section id="recommendations" className="recommendations">
            <h2 className="section-title">{t.recommendations.title}</h2>

            <div className="recommendations-masonry">
                {t.recommendations.items.map((item, index) => (
                    <div key={index} className="recommendation-card">
                        <div className="recommendation-header">
                            <div className="recommendation-image-wrapper">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="recommendation-image"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = '/testimonials/default-avatar.png'; // Fallback
                                    }}
                                />
                            </div>
                            <div className="recommendation-meta">
                                <h3 className="recommendation-name">{item.name}</h3>
                                <p className="recommendation-position">{item.position}</p>
                                <p className="recommendation-company">{item.company}</p>
                            </div>
                        </div>
                        <div className="recommendation-body">
                            <p className="recommendation-text">"{item.text}"</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Recommendations;
