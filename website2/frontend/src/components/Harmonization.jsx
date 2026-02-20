import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Tech company logos (simplified as text for now)
const techLogos = ['Salesforce', 'HubSpot', 'Marketo', 'Outreach', 'Gong', 'Drift'];

const Harmonization = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            ref={ref}
            style={{
                position: 'relative',
                padding: '8rem 2rem',
                backgroundColor: '#0B1120',
                overflow: 'hidden',
            }}
        >
            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <span
                    style={{
                        display: 'inline-block',
                        padding: '6px 12px',
                        background: 'rgba(37,99,235,0.1)',
                        border: '1px solid rgba(37,99,235,0.3)',
                        borderRadius: '4px',
                        color: '#2563EB',
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: '0.75rem',
                        letterSpacing: '0.1em',
                        marginBottom: '1rem',
                    }}
                >
                    THE PROBLEM
                </span>
                <h2
                    style={{
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: 800,
                        color: 'white',
                        marginBottom: '1rem',
                    }}
                >
                    Your GTM Stack is a{' '}
                    <span style={{ color: '#EF4444' }}>Mess</span>
                </h2>
                <p
                    style={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        color: '#94A3B8',
                        fontSize: '1.125rem',
                        lineHeight: 1.7,
                    }}
                >
                    Disconnected tools. Siloed data. Broken workflows. Sound familiar?
                </p>
            </motion.div>

            {/* Chaos to Order animation */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '3rem',
                }}
            >
                {/* Scattered logos */}
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '1rem',
                        maxWidth: '600px',
                    }}
                >
                    {techLogos.map((logo, i) => (
                        <motion.div
                            key={logo}
                            initial={{ opacity: 0, scale: 0, rotate: Math.random() * 30 - 15 }}
                            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.1, borderColor: '#22D3EE' }}
                            style={{
                                padding: '1rem 1.5rem',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                color: '#64748B',
                                fontFamily: '"Inter", sans-serif',
                                fontSize: '0.875rem',
                                cursor: 'default',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            {logo}
                        </motion.div>
                    ))}
                </div>

                {/* Arrow down */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    style={{
                        fontSize: '2rem',
                        color: '#22D3EE',
                    }}
                >
                    ↓
                </motion.div>

                {/* LiltStack processor */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1, duration: 0.5 }}
                    style={{
                        padding: '2rem 3rem',
                        background: 'linear-gradient(135deg, rgba(34,211,238,0.1) 0%, rgba(37,99,235,0.1) 100%)',
                        border: '2px solid',
                        borderImage: 'linear-gradient(135deg, #22D3EE, #2563EB) 1',
                        borderRadius: '16px',
                        textAlign: 'center',
                    }}
                >
                    <div
                        style={{
                            fontFamily: '"JetBrains Mono", monospace',
                            fontSize: '1.5rem',
                            fontWeight: 800,
                            background: 'linear-gradient(135deg, #22D3EE, #2563EB)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        ≋ LiltStack
                    </div>
                    <div
                        style={{
                            marginTop: '0.5rem',
                            color: '#94A3B8',
                            fontSize: '0.875rem',
                        }}
                    >
                        Unified. Harmonized. Scalable.
                    </div>
                </motion.div>

                {/* Arrow down */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.3 }}
                    style={{
                        fontSize: '2rem',
                        color: '#22C55E',
                    }}
                >
                    ↓
                </motion.div>

                {/* Result beam */}
                <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={isInView ? { opacity: 1, width: '200px' } : {}}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    style={{
                        height: '4px',
                        background: 'linear-gradient(90deg, #22D3EE, #22C55E)',
                        borderRadius: '2px',
                        boxShadow: '0 0 20px rgba(34,211,238,0.5)',
                    }}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.8 }}
                    style={{
                        color: '#22C55E',
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: '0.875rem',
                    }}
                >
                    PIPELINE_OPTIMIZED ✓
                </motion.p>
            </div>
        </section>
    );
};

export default Harmonization;
