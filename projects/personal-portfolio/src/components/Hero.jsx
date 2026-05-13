import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import profileImage from '../assets/profile.jpg';
import LogoTicker from './LogoTicker';
import './Hero.css';

const Hero = () => {
    const { language } = useLanguage();
    const t = translations[language].hero;
    const heroRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        heroRef.current.style.setProperty('--mouse-x', `${x}px`);
        heroRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    const handleMouseLeave = () => {
        if (!heroRef.current) return;
        // Optionally reset or just let it stay at the last exit point
        heroRef.current.style.setProperty('--mouse-x', `-1000px`);
        heroRef.current.style.setProperty('--mouse-y', `-1000px`);
    };

    return (
        <>
            <section
                id="home"
                className="hero-section liquid-interactive"
                ref={heroRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
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
        </>
    );
};

export default Hero;
