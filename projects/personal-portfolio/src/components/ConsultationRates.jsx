import React from 'react';
import './ConsultationRates.css';

const pricingTiers = [
    {
        id: 1,
        role: "Salesforce Admin",
        rate: "$36/hr",
        description: "Essential administration, user management, and standard configuration.",
        popular: false
    },
    {
        id: 2,
        role: "Admin + Developer",
        rate: "$42/hr",
        description: "Comprehensive configuration plus custom Apex/LWC development.",
        popular: false
    },
    {
        id: 3,
        role: "Admin + Dev + Business Analyst (BA)",
        rate: "$48/hr",
        description: "Full-cycle implementation: Requirements gathering, solution design, and custom development.",
        popular: true
    },
    {
        id: 4,
        role: "Admin + Dev + BA + Project Manager (PM)",
        rate: "$56/hr",
        description: "End-to-end delivery ownership, sprint planning, and stakeholder management alongside execution.",
        popular: false
    }
];

const ConsultationRates = () => {
    return (
        <section id="rates" className="rates-section" aria-labelledby="rates-title">
            <div className="rates-glow" aria-hidden="true"></div>
            <div className="rates-glow-2" aria-hidden="true"></div>
            <div className="container">
                <div className="rates-header">
                    <h2 id="rates-title" className="section-title animate-fade-in">
                        Consultation Rates
                    </h2>
                    <p className="rates-subtitle animate-fade-in">
                        Transparent, professional pricing for your Salesforce needs.
                    </p>
                </div>

                <div className="rates-grid">
                    {pricingTiers.map((tier, index) => (
                        <div
                            key={tier.id}
                            className={`rate-card card animate-fade-in ${tier.popular ? 'popular' : ''}`}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            {tier.popular && <div className="popular-badge">Most Popular</div>}
                            <div className="rate-card-header">
                                <h3 className="role">{tier.role}</h3>
                                <div className="rate">
                                    <span className="amount">{tier.rate}</span>
                                </div>
                            </div>
                            <div className="rate-card-body">
                                <p className="description">{tier.description}</p>
                            </div>
                            <div className="rate-card-footer">
                                <a href="#contact" className="btn-primary rates-btn">
                                    Book Consultation
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConsultationRates;
