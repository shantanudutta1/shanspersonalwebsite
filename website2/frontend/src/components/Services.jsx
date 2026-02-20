import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const services = [
    {
        id: 1,
        title: 'Data Unification',
        description: 'Connect all your revenue data sources into a single source of truth.',
        icon: '⊕',
        size: 'large',
    },
    {
        id: 2,
        title: 'Real-time Sync',
        description: 'Bi-directional sync between CRM, MAP, and warehouse.',
        icon: '⟳',
        size: 'small',
    },
    {
        id: 3,
        title: 'AI Insights',
        description: 'Predictive analytics for pipeline and revenue forecasting.',
        icon: '◈',
        size: 'small',
    },
    {
        id: 4,
        title: 'Workflow Automation',
        description: 'Automate GTM processes with intelligent triggers and actions.',
        icon: '⚡',
        size: 'medium',
    },
    {
        id: 5,
        title: 'Attribution',
        description: 'Multi-touch attribution that actually makes sense.',
        icon: '◉',
        size: 'medium',
    },
    {
        id: 6,
        title: 'Reporting',
        description: 'Real-time dashboards for every stakeholder.',
        icon: '▦',
        size: 'small',
    },
];

const ServiceCard = ({ service, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    const sizeStyles = {
        large: { gridColumn: 'span 2', gridRow: 'span 2' },
        medium: { gridColumn: 'span 2', gridRow: 'span 1' },
        small: { gridColumn: 'span 1', gridRow: 'span 1' },
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                ...sizeStyles[service.size],
                position: 'relative',
                padding: '2rem',
                background: isHovered
                    ? 'rgba(255,255,255,0.08)'
                    : 'rgba(255,255,255,0.03)',
                border: isHovered
                    ? '1px solid #22D3EE'
                    : '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: isHovered ? '0 0 30px rgba(34,211,238,0.2)' : 'none',
            }}
        >
            {/* Hover glow effect */}
            {isHovered && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(34,211,238,0.05) 0%, transparent 50%)',
                        pointerEvents: 'none',
                    }}
                />
            )}

            <div>
                <div
                    style={{
                        fontSize: service.size === 'large' ? '3rem' : '2rem',
                        marginBottom: '1rem',
                        filter: isHovered ? 'drop-shadow(0 0 10px #22D3EE)' : 'none',
                        transition: 'filter 0.3s ease',
                    }}
                >
                    {service.icon}
                </div>
                <h3
                    style={{
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: service.size === 'large' ? '1.5rem' : '1.125rem',
                        fontWeight: 700,
                        color: 'white',
                        marginBottom: '0.5rem',
                    }}
                >
                    {service.title}
                </h3>
                <p
                    style={{
                        color: '#94A3B8',
                        fontSize: service.size === 'large' ? '1rem' : '0.875rem',
                        lineHeight: 1.6,
                    }}
                >
                    {service.description}
                </p>
            </div>

            {/* Learn more indicator */}
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                style={{
                    marginTop: '1rem',
                    color: '#22D3EE',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.75rem',
                }}
            >
                LEARN_MORE →
            </motion.div>
        </motion.div>
    );
};

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            ref={ref}
            style={{
                padding: '8rem 2rem',
                backgroundColor: '#0B1120',
            }}
        >
            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '1200px', margin: '0 auto 4rem' }}
            >
                <span
                    style={{
                        display: 'inline-block',
                        padding: '6px 12px',
                        background: 'rgba(34,211,238,0.1)',
                        border: '1px solid rgba(34,211,238,0.3)',
                        borderRadius: '4px',
                        color: '#22D3EE',
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: '0.75rem',
                        letterSpacing: '0.1em',
                        marginBottom: '1rem',
                    }}
                >
                    CAPABILITIES
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
                    The{' '}
                    <span
                        style={{
                            background: 'linear-gradient(135deg, #22D3EE, #2563EB)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Platform
                    </span>
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
                    Everything you need to harmonize your GTM stack and scale revenue operations.
                </p>
            </motion.div>

            {/* Bento grid */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '1.5rem',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                {services.map((service, index) => (
                    <ServiceCard key={service.id} service={service} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Services;
