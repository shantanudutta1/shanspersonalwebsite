const Home = () => {
    return (
        <div className="page-content" style={{ marginTop: '4rem' }}>
            <h1>We Build. We Run. You Scale.</h1>
            <p className="subtitle">
                The enterprise-grade platform for modern digital experiences. Harmonize your GTM stack with LiltStack.
            </p>
            <div style={{ marginTop: '4rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <a href="/services" className="btn-primary">
                    Explore Platform
                </a>
                <a href="/contact" style={{
                    padding: '0.8rem 1.6rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all 0.3s'
                }}
                    onMouseOver={(e) => { e.target.style.borderColor = 'white'; e.target.style.background = 'rgba(255,255,255,0.05)' }}
                    onMouseOut={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.2)'; e.target.style.background = 'transparent' }}
                >
                    Contact Sales
                </a>
            </div>

            <div className="card-grid" style={{ marginTop: '6rem', textAlign: 'left' }}>
                <div className="card">
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Unified Data</h3>
                    <p style={{ color: '#94a3b8' }}>Connect all your revenue data in one single source of truth.</p>
                </div>
                <div className="card">
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Real-time Sync</h3>
                    <p style={{ color: '#94a3b8' }}>Bi-directional sync between your CRM, MAP, and Warehouse.</p>
                </div>
                <div className="card">
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>AI Powered</h3>
                    <p style={{ color: '#94a3b8' }}>Leverage predictive analytics to forecast growth with precision.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
