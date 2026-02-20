import React from 'react';
import './LogoTicker.css';

// Import logos
import nonomoLogo from '../assets/nonomo-logo.png';
import atzGroupLogo from '../assets/atz-group.png';
import igo3dLogo from '../assets/igo3d.png';

const logos = [
    { src: nonomoLogo, alt: 'NONOMO' },
    { src: atzGroupLogo, alt: 'ATZ Group' },
    { src: igo3dLogo, alt: 'IGO3D' },
];

const LogoTicker = () => {
    // Duplicate logos to create a seamless infinite scroll
    const scrollingLogos = [...logos, ...logos, ...logos];

    return (
        <div className="logo-ticker-container">
            <div className="logo-ticker-fades"></div>
            <div className="logo-ticker-content">
                {scrollingLogos.map((logo, index) => (
                    <div key={index} className="logo-item">
                        <img src={logo.src} alt={logo.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoTicker;
