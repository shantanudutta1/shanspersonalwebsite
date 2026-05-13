import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './LogoTicker.css';

// Import logos
import nonomoLogo from '../assets/nonomo-logo.png';
import atzGroupLogo from '../assets/atz-group.png';
import igo3dLogo from '../assets/igo3d.png';

const logos = [
    { src: nonomoLogo, alt: 'NONOMO' },
    { src: atzGroupLogo, alt: 'ATZ Group' },
    { src: igo3dLogo, alt: 'IGO3D' },
    { src: '/logos/peak-und-peak.png', alt: 'Peak und Peak' },
    { src: '/logos/heidelberg.png', alt: 'Heidelberg Druckmaschinen' },
    { src: '/logos/realfast-ai.png', alt: 'Realfast AI' },
    { src: '/logos/unipac.png', alt: 'Unipac' },
    { src: '/logos/mercedes-benz.png', alt: 'Mercedes Benz' },
    { src: '/logos/outotec.png', alt: 'Outotec' },
    { src: '/logos/rootlogix.png', alt: 'Rootlogix' },
];

const LogoTicker = () => {
    const { language } = useLanguage();
    const t = translations[language].hero;
    const scrollingLogos = [...logos, ...logos, ...logos];

    return (
        <div className="logo-ticker-container">
            <h3 className="logo-ticker-header">{t.trustedBy}</h3>
            <div className="logo-ticker">
                <div className="logo-track">
                    {scrollingLogos.map((logo, index) => (
                        <div key={index} className="logo-item" title={logo.alt}>
                            <img src={logo.src} alt={logo.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoTicker;
