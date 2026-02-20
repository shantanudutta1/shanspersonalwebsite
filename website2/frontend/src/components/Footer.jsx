import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer
            style={{
                position: 'relative',
                padding: '6rem 2rem 2rem',
                backgroundColor: '#0B1120',
                borderTop: '1px solid rgba(255,255,255,0.05)',
            }}
        >
            {/* Massive footer text */}
            <div
                style={{
                    overflow: 'hidden',
                    marginBottom: '4rem',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: 'clamp(4rem, 15vw, 12rem)',
                        fontWeight: 900,
                        color: 'transparent',
                        WebkitTextStroke: '1px rgba(255,255,255,0.1)',
                        textAlign: 'center',
                        letterSpacing: '-0.05em',
                        lineHeight: 1,
                        userSelect: 'none',
                    }}
                >
                    LILTSTACK
                </motion.div>
            </div>

            {/* Footer content */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '3rem',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    paddingBottom: '4rem',
                }}
            >
                {/* Brand column */}
                <div>
                    <div
                        style={{
                            fontFamily: '"JetBrains Mono", monospace',
                            fontSize: '1.25rem',
                            fontWeight: 800,
                            background: 'linear-gradient(135deg, #22D3EE, #2563EB)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            marginBottom: '1rem',
                        }}
                    >
                        ≋ LiltStack
                    </div>
                    <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.6 }}>
                        We Build. We Run. You Scale.
                    </p>
                </div>

                {/* Product links */}
                <div>
                    <h4 style={{ color: 'white', fontSize: '0.875rem', marginBottom: '1rem', fontWeight: 600 }}>
                        Product
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {['Features', 'Integrations', 'Pricing', 'Changelog'].map((item) => (
                            <li key={item} style={{ marginBottom: '0.5rem' }}>
                                <a
                                    href="#"
                                    style={{
                                        color: '#64748B',
                                        fontSize: '0.875rem',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseOver={(e) => (e.target.style.color = '#22D3EE')}
                                    onMouseOut={(e) => (e.target.style.color = '#64748B')}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Company links */}
                <div>
                    <h4 style={{ color: 'white', fontSize: '0.875rem', marginBottom: '1rem', fontWeight: 600 }}>
                        Company
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                            <li key={item} style={{ marginBottom: '0.5rem' }}>
                                <a
                                    href="#"
                                    style={{
                                        color: '#64748B',
                                        fontSize: '0.875rem',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseOver={(e) => (e.target.style.color = '#22D3EE')}
                                    onMouseOut={(e) => (e.target.style.color = '#64748B')}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Status column */}
                <div>
                    <h4 style={{ color: 'white', fontSize: '0.875rem', marginBottom: '1rem', fontWeight: 600 }}>
                        System
                    </h4>
                    <div
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 12px',
                            background: 'rgba(34,197,94,0.1)',
                            border: '1px solid rgba(34,197,94,0.3)',
                            borderRadius: '6px',
                        }}
                    >
                        <span
                            style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                backgroundColor: '#22C55E',
                                boxShadow: '0 0 10px #22C55E',
                                animation: 'pulse 2s infinite',
                            }}
                        />
                        <span
                            style={{
                                color: '#22C55E',
                                fontFamily: '"JetBrains Mono", monospace',
                                fontSize: '0.75rem',
                            }}
                        >
                            All Systems Operational
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div
                style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                <p style={{ color: '#64748B', fontSize: '0.75rem' }}>
                    © 2025 LiltStack. All rights reserved.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    {['Privacy', 'Terms', 'Security'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            style={{
                                color: '#64748B',
                                fontSize: '0.75rem',
                                textDecoration: 'none',
                            }}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>

            {/* Pulse animation */}
            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
