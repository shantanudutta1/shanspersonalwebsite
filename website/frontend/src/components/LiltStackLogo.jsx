import React from 'react';

const LiltStackLogo = ({ width = 180 }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="logoLinkAttributes" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#06b6d4" />
                        <stop offset="1" stopColor="#3b82f6" />
                    </linearGradient>
                </defs>
                {/* Wavy Stack Lines */}
                <path
                    d="M8 14 C12 12, 16 16, 20 16 C24 16, 28 12, 32 14"
                    stroke="url(#logoLinkAttributes)"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
                <path
                    d="M8 22 C12 20, 16 24, 20 24 C24 24, 28 20, 32 22"
                    stroke="url(#logoLinkAttributes)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.9"
                />
                <path
                    d="M8 30 C12 28, 16 32, 20 32 C24 32, 28 28, 32 30"
                    stroke="url(#logoLinkAttributes)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.8"
                />
            </svg>
            <span style={{
                fontWeight: '800',
                fontSize: '1.5rem',
                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em',
                fontFamily: 'Inter, sans-serif'
            }}>
                LiltStack
            </span>
        </div>
    );
};

export default LiltStackLogo;
