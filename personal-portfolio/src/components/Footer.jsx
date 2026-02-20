import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './Footer.css';

const Footer = () => {
    const { language } = useLanguage();
    const t = translations[language].footer;

    return (
        <footer className="site-footer">
            <div className="container">
                <p className="footer-text">
                    Shantanu Dutta
                </p>
                <p className="footer-subtitle">
                    {t.subtitle}
                </p>
                <p className="footer-copyright">
                    © {new Date().getFullYear()} {t.rights}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
