import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Animated cycling text component
const CyclingWord = ({ words, className }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <span className={className} style={{ display: 'inline-block', position: 'relative' }}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    style={{ display: 'inline-block' }}
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

// Glitch effect on hover using CSS
const GlitchText = ({ children }) => {
    return (
        <span
            className="glitch-text"
            style={{
                position: 'relative',
                display: 'inline-block',
            }}
        >
            {children}
            <style>{`
        .glitch-text:hover {
          animation: glitch 0.3s ease-in-out;
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
      `}</style>
        </span>
    );
};

const Hero = () => {
    return (
        <section
            style={{
                position: 'relative',
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                backgroundColor: '#0B1120',
                color: 'white',
                fontFamily: '"Inter", sans-serif',
            }}
        >
            {/* Animated background gradient orbs */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        position: 'absolute',
                        top: '-20%',
                        left: '-10%',
                        width: '60%',
                        height: '60%',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(34,211,238,0.4) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                    }}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.4, 0.3],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    style={{
                        position: 'absolute',
                        bottom: '-20%',
                        right: '-10%',
                        width: '60%',
                        height: '60%',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(37,99,235,0.4) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                    }}
                />

                {/* Grid overlay */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        opacity: 0.1,
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            {/* Main content */}
            <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 2rem', maxWidth: '1200px' }}>

                {/* Status badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 16px',
                            border: '1px solid rgba(34,211,238,0.3)',
                            borderRadius: '9999px',
                            background: 'rgba(34,211,238,0.1)',
                            color: '#22D3EE',
                            fontFamily: '"JetBrains Mono", monospace',
                            fontSize: '0.875rem',
                            letterSpacing: '0.1em',
                            marginBottom: '2rem',
                        }}
                    >
                        <span style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: '#22C55E',
                            boxShadow: '0 0 10px #22C55E',
                            animation: 'pulse 2s infinite',
                        }} />
                        SYSTEM_STATUS: OPERATIONAL
                    </span>
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: 'clamp(3rem, 10vw, 7rem)',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.02em',
                    }}
                >
                    <GlitchText>WE BUILD.</GlitchText>
                    <br />
                    <span style={{
                        background: 'linear-gradient(135deg, #22D3EE 0%, #2563EB 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        WE RUN.
                    </span>
                    <br />
                    <GlitchText>YOU SCALE.</GlitchText>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    style={{
                        maxWidth: '600px',
                        margin: '0 auto 3rem',
                        fontSize: '1.25rem',
                        color: '#94A3B8',
                        lineHeight: 1.7,
                    }}
                >
                    Harmonizing the chaos of your GTM stack. The enterprise-grade platform for the modern{' '}
                    <span style={{ color: '#22D3EE', fontFamily: '"JetBrains Mono", monospace' }}>
                        revenue architecture
                    </span>.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '1rem',
                        justifyContent: 'center',
                    }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34,211,238,0.5)' }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            padding: '1rem 2rem',
                            background: 'linear-gradient(135deg, #22D3EE 0%, #2563EB 100%)',
                            color: 'white',
                            fontFamily: '"JetBrains Mono", monospace',
                            fontWeight: 700,
                            fontSize: '1rem',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        INITIALIZE_PROTOCOL →
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            padding: '1rem 2rem',
                            background: 'rgba(255,255,255,0.05)',
                            color: 'white',
                            fontFamily: '"JetBrains Mono", monospace',
                            fontWeight: 700,
                            fontSize: '1rem',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        VIEW_DOCS
                    </motion.button>
                </motion.div>

                {/* Floating tech logos hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    style={{
                        marginTop: '4rem',
                        color: '#64748B',
                        fontSize: '0.875rem',
                        fontFamily: '"JetBrains Mono", monospace',
                    }}
                >
                    Trusted by teams using Salesforce • HubSpot • Marketo • Outreach
                </motion.div>
            </div>

            {/* Pulse animation keyframes */}
            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
