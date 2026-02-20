import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import profileImage from '../assets/profile.jpg';
import LogoTicker from './LogoTicker';
import './Hero.css';

const Hero = () => {
    const { language } = useLanguage();
    const t = translations[language].hero;

    return (
        <section id="home" className="hero-section">
            {/* Background elements */}
            <div className="hero-background" aria-hidden="true">
                <div className="hero-grid-overlay"></div>
                <div className="hero-blob"></div>
                <div className="hero-blob-2"></div>
            </div>
            <div className="container hero-container">
                <div className="hero-content animate-fade-in">
                    <h1 className="hero-title">
                        {t.name}
                    </h1>
                    <p className="hero-subtitle">
                        {t.subtitle}
                    </p>
                    <div className="hero-bio">
                        <p className="bio-line" dangerouslySetInnerHTML={{ __html: t.bio1 }}></p>
                        <p className="bio-line" dangerouslySetInnerHTML={{ __html: t.bio2 }}></p>
                        <p className="bio-line location">
                            {t.location}
                        </p>
                    </div>
                    <div className="hero-actions">
                        <a href="#experience" className="btn-primary">
                            {t.viewWork}
                        </a>
                        <a href="#contact" className="btn-secondary">
                            {t.connect}
                        </a>
                    </div>
                </div>
                <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <div className="profile-blob" aria-hidden="true"></div>
                    <div className="profile-image-container">
                        <img
                            src={profileImage}
                            alt={t.name}
                            className="profile-image"
                            width={300}
                            height={360}
                            loading="eager"
                            fetchPriority="high"
                        />
                    </div>
                </div>
            </div>
            <LogoTicker />
        </section>
    );
};

export default Hero;
