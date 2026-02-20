export const translations = {
    en: {
        nav: {
            home: "Home",
            experience: "Experience",
            packages: "Packages",
            education: "Education",
            contact: "Contact"
        },
        hero: {
            name: "Shantanu Dutta",
            subtitle: "Salesforce Consultant & AI Agent FDE",
            bio1: "I help companies optimize their <span class=\"highlight\">Salesforce ecosystems</span> and build intelligent automation solutions.",
            bio2: "Specializing in <span class=\"highlight\">complex business logic</span> and scalable enterprise architecture.",
            location: "Based in Germany, working globally.",
            viewWork: "View Experience",
            connect: "Get in Touch"
        },
        experience: {
            title: "Professional Experience",
            items: [
                {
                    period: "October 2025 - Present",
                    company: "Realfast AI",
                    position: "Freelance Salesforce Consultant / AI Agent FDE",
                    description: "Helped Sales team closed Salesforce deals (Demo sessions, POC, Estimate prep). Project Management for delivering Salesforce Projects (Sales cloud, Revenue Cloud, Service Cloud, Slack integration, Whatsapp integration). FDE for AI Agent (Exo help, Exo Code, Manazer AI)."
                },
                {
                    period: "July 2025 - Present",
                    company: "Unipac Products",
                    position: "Freelance Salesforce Consultant",
                    description: "Built Application for data flow between ERP (Rootstock) and Salesforce. Supporting Salesforce and Rootstock Users. Salesforce and Rootstock Custom Development. Built applications and features for Finance, Warehouse and Purchasing."
                },
                {
                    period: "April 2024 - July 2025",
                    company: "Rootlogix LLC",
                    position: "Freelance Senior Salesforce Consultant",
                    description: "Led end-to-end analysis and delivery of multi-cloud Salesforce solutions. Conducted detailed requirements gathering and stakeholder workshops. Configured automated Renewal Opportunity and Contract creation flows."
                },
                {
                    period: "February 2022 - March 2024",
                    company: "ATZ Marketing Solutions GmbH",
                    position: "Salesforce Product Owner",
                    description: "Acted as Salesforce Product Owner. Designed and implemented JustOn billing automation, reducing manual invoicing errors by 40%. Managed a 6-member agile team and enhanced lead conversion by 25%."
                },
                {
                    period: "February 2021 - February 2022",
                    company: "Heidelberg Druckmaschinen AG",
                    position: "Project Lead (Salesforce Service Cloud and Ecommerce)",
                    description: "Managed Service Cloud and CPQ platforms for US and EU operations. Redesigned Salesforce instance architecture, reducing deployment cycle time by 30%. Led requirement grooming as Scrum Master."
                },
                {
                    period: "February 2019 - February 2021",
                    company: "Peak und Peak GmbH",
                    position: "Project Lead (Salesforce)",
                    description: "Directed end-to-end Salesforce implementations across CPQ, Sales, and Service Cloud. Led Salesforce Center of Excellence. Designed scalable architecture for Experience Cloud and Partner Relationship Management."
                }
            ]
        },
        packages: {
            title: "Salesforce Implementation",
            subtitle: "Choose the right package for your business needs.",
            tabs: {
                sales: "Sales Cloud",
                service: "Service Cloud",
                revenue: "Revenue Cloud"
            },
            packageNames: {
                enable: "ENABLE",
                elevate: "ELEVATE",
                transform: "TRANSFORM"
            },
            taglines: {
                getStarted: "Get Started",
                scaleUp: "Scale Up",
                goAllIn: "Go All In"
            },
            timeline: "Timeline",
            sales: {
                enable: {
                    description: "Core Features Included:",
                    features: [
                        "Lead Management & Web-to-Lead",
                        "Opportunity Management (Core)",
                        "Account & Contact Management",
                        "Sales Path & Single Process",
                        "Tasks, Events & Activity Timeline",
                        "Mobile App Configuration",
                        "Basic Automation & Flows",
                        "5-8 Reports & 1-2 Dashboards",
                        "Train the Trainer",
                        "Data Migration"
                    ]
                },
                elevate: {
                    description: "Everything in Enable, plus:",
                    features: [
                        "Lead Scoring & Automation",
                        "Opportunity Teams (Enterprise)",
                        "Account Teams (Enterprise)",
                        "Multiple Sales Processes",
                        "Collaborative Forecasting",
                        "Full Product Catalog & Quotes",
                        "Outlook/Gmail Integration",
                        "Approval Workflows",
                        "8-10 Reports & 2-3 Dashboards"
                    ]
                },
                transform: {
                    description: "Everything in Elevate, plus:",
                    features: [
                        "Opportunity Splits & Commissions",
                        "Person Accounts (B2C)",
                        "Territory Management (Full)",
                        "Split & Territory Forecasting",
                        "Product Schedules & Contracts",
                        "Content Libraries & Files Connect",
                        "12-15 Reports & 4-5 Dashboards",
                        "Account Integration",
                        "Train-the-Trainer Program"
                    ]
                }
            },
            service: {
                enable: {
                    description: "Case Management Foundation:",
                    features: [
                        "Case Management & Console Setup",
                        "Email-to-Case (Standard)",
                        "Account & Contact Management",
                        "Basic Case Assignment Rules",
                        "Web-to-Case",
                        "Activity Management",
                        "Standard Reports & Dashboards (5-8)",
                        "User Training (Train the Trainer)",
                        "Basic Data Migration (Accounts/Contacts)"
                    ]
                },
                elevate: {
                    description: "Omni-Channel & Knowledge:",
                    features: [
                        "Omni-Channel Routing (Chat/Email)",
                        "Knowledge Base Setup & Articles",
                        "Entitlements & Milestones (SLAs)",
                        "Macros & Quick Text",
                        "Computer Telephony Integration (CTI) Basics",
                        "Customer Community (Basic Setup)",
                        "Advanced Automation (Flows)",
                        "8-10 Reports & 2-3 Dashboards"
                    ]
                },
                transform: {
                    description: "AI & Advanced Automation:",
                    features: [
                        "Einstein Bots (Basic Setup)",
                        "Service Cloud Voice Setup",
                        "Field Service Lightning (Basic Dispatch)",
                        "Live Agent / Messaging Integration",
                        "Complex CTI Integration",
                        "Visual Remote Assistant",
                        "Full Community/Portal Customization",
                        "ERP/Order System Integration",
                        "12-15 Reports & 4-5 Dashboards"
                    ]
                }
            },
            revenue: {
                enable: {
                    description: "Standard Quoting:",
                    features: [
                        "Standard Product Catalog Setup",
                        "Basic Price Books (List/Cost)",
                        "Standard Quote Templates (PDF)",
                        "Native Quote-to-Cash Workflow",
                        "Opportunity to Quote Conversion",
                        "Basic Approval Processes",
                        "5-8 Reports & 1 Dashboard",
                        "Admin Training",
                        "Data Load (Products/Prices)"
                    ]
                },
                elevate: {
                    description: "Advanced Pricing & Bundles:",
                    features: [
                        "Product Bundling & Configuration",
                        "Discount Schedules & Block Pricing",
                        "Guided Selling (Product Selection)",
                        "Multi-Dimensional Quoting (MDQ)",
                        "Advanced Approval Workflows",
                        "Contract Amendments & Renewals",
                        "DocGen Integration (e.g., Conga/S-Docs)",
                        "8-10 Reports & 2-3 Dashboards"
                    ]
                },
                transform: {
                    description: "Total Revenue Management:",
                    features: [
                        "Billing & Invoicing Setup",
                        "Revenue Recognition Rules",
                        "Usage-Based Pricing Models",
                        "Advanced Order Management",
                        "ERP Integration (bi-directional)",
                        "Complex Tax Integrations (Avalara/Vertex)",
                        "Customer Community (Partner Quoting)",
                        "12-15 Reports & Executive Dashboards"
                    ]
                }
            }
        },
        education: {
            title: "Education & Certifications",
            academic: "Academic Background",
            certifications: "Certifications",
            items: [
                {
                    period: "Oct 2015 – Nov 2017",
                    degree: "Masters in International Business and Engineering",
                    school: "SRH Hochschule Heidelberg"
                },
                {
                    period: "July 2008 – Aug 2013",
                    degree: "Bachelor Of Engineering (Mechanical)",
                    school: "University of Pune"
                }
            ]
        },
        contact: {
            title: "Get in Touch",
            subtitle: "Open to discussing new projects and opportunities.",
            email: "Email",
            linkedin: "LinkedIn",
            location: "Location",
            locationValue: "Pune, India",
            cta: "Send a Message"
        },
        footer: {
            subtitle: "Salesforce Consultant | AI Agent FDE",
            rights: "All rights reserved."
        }
    },
    de: {
        nav: {
            home: "Startseite",
            experience: "Erfahrung",
            packages: "Pakete",
            education: "Bildung",
            contact: "Kontakt"
        },
        hero: {
            name: "Shantanu Dutta",
            subtitle: "Salesforce Berater & KI-Agent FDE",
            bio1: "Ich helfe Unternehmen dabei, ihre <span class=\"highlight\">Salesforce-Ökosysteme</span> zu optimieren und intelligente Automatisierungslösungen aufzubauen.",
            bio2: "Spezialisiert auf <span class=\"highlight\">komplexe Geschäftslogik</span> und skalierbare Unternehmensarchitektur.",
            location: "Ansässig in Deutschland, weltweit tätig.",
            viewWork: "Erfahrung ansehen",
            connect: "Kontakt aufnehmen"
        },
        experience: {
            title: "Berufserfahrung",
            items: [
                {
                    period: "Oktober 2025 - Heute",
                    company: "Realfast KI",
                    position: "Freiberuflicher Salesforce-Berater / KI-Agent FDE",
                    description: "Unterstützung des Vertriebsteams beim Abschluss von Salesforce-Deals (Demo-Sessions, POC, Angebotserstellung). Projektmanagement für die Bereitstellung von Salesforce-Projekten (Sales Cloud, Revenue Cloud, Service Cloud, Slack-Integration, WhatsApp-Integration). FDE für KI-Agent (Exo help, Exo Code, Manazer AI)."
                },
                {
                    period: "Juli 2025 - Heute",
                    company: "Unipac Products",
                    position: "Freiberuflicher Salesforce-Berater",
                    description: "Anwendung für den Datenfluss zwischen ERP (Rootstock) und Salesforce entwickelt. Unterstützung von Salesforce- und Rootstock-Benutzern. Benutzerdefinierte Salesforce- und Rootstock-Entwicklung. Anwendungen und Funktionen für Finanzen, Lager und Einkauf erstellt."
                },
                {
                    period: "April 2024 - Juli 2025",
                    company: "Rootlogix LLC",
                    position: "Freiberuflicher Senior Salesforce-Berater",
                    description: "Leitung der End-to-End-Analyse und Bereitstellung von Multi-Cloud-Salesforce-Lösungen. Durchführung detaillierter Anforderungserhebungen und Stakeholder-Workshops. Konfiguration automatisierter Renewal Opportunity- und Vertrags-Erstellungsabläufe."
                },
                {
                    period: "Februar 2022 - März 2024",
                    company: "ATZ Marketing Solutions GmbH",
                    position: "Salesforce Product Owner",
                    description: "Tätigkeit als Salesforce Product Owner. Entwicklung und Implementierung der JustOn-Abrechnungsautomatisierung, Reduzierung manueller Rechnungsfehler um 40%. Management eines 6-köpfigen agilen Teams und Steigerung der Lead-Konvertierung um 25%."
                },
                {
                    period: "Februar 2021 - Februar 2022",
                    company: "Heidelberg Druckmaschinen AG",
                    position: "Projektleiter (Salesforce Service Cloud und E-Commerce)",
                    description: "Verwaltung von Service Cloud- und CPQ-Plattformen für den US- und EU-Betrieb. Neugestaltung der Salesforceinstanzarchitektur, Reduzierung der Bereitstellungszykluszeit um 30%. Leitung des Requirement Grooming als Scrum Master."
                },
                {
                    period: "Februar 2019 - Februar 2021",
                    company: "Peak und Peak GmbH",
                    position: "Projektleiter (Salesforce)",
                    description: "Leitung von End-to-End-Salesforce-Implementierungen in den Bereichen CPQ, Sales und Service Cloud. Leitung des Salesforce Center of Excellence. Entwurf einer skalierbaren Architektur für Experience Cloud und Partner Relationship Management."
                }
            ]
        },
        packages: {
            title: "Salesforce Implementierung",
            subtitle: "Wählen Sie das richtige Paket für Ihre Geschäftsanforderungen.",
            tabs: {
                sales: "Sales Cloud",
                service: "Service Cloud",
                revenue: "Revenue Cloud"
            },
            packageNames: {
                enable: "ENABLE",
                elevate: "ELEVATE",
                transform: "TRANSFORM"
            },
            taglines: {
                getStarted: "Starten",
                scaleUp: "Skalieren",
                goAllIn: "Voll durchstarten"
            },
            timeline: "Zeitplan",
            sales: {
                enable: {
                    description: "Kernfunktionen enthalten:",
                    features: [
                        "Lead-Management & Web-to-Lead",
                        "Opportunity-Management (Kern)",
                        "Account- & Kontakt-Management",
                        "Sales Path & Einzelprozess",
                        "Aufgaben, Ereignisse & Aktivitäten-Timeline",
                        "Konfiguration der mobilen App",
                        "Basis-Automatisierung & Flows",
                        "5-8 Berichte & 1-2 Dashboards",
                        "Train the Trainer",
                        "Datenmigration"
                    ]
                },
                elevate: {
                    description: "Alles in Enable, plus:",
                    features: [
                        "Lead-Scoring & Automatisierung",
                        "Opportunity-Teams (Enterprise)",
                        "Account-Teams (Enterprise)",
                        "Mehrere Vertriebsprozesse",
                        "Kollaborative Prognosen",
                        "Vollständiger Produktkatalog & Angebote",
                        "Outlook/Gmail Integration",
                        "Genehmigungs-Workflows",
                        "8-10 Berichte & 2-3 Dashboards"
                    ]
                },
                transform: {
                    description: "Alles in Elevate, plus:",
                    features: [
                        "Opportunity-Splits & Provisionen",
                        "Personen-Accounts (B2C)",
                        "Territory-Management (Vollständig)",
                        "Split & Territory Forecasting",
                        "Produktzeitpläne & Verträge",
                        "Content Libraries & Files Connect",
                        "12-15 Berichte & 4-5 Dashboards",
                        "Account-Integration",
                        "Train-the-Trainer-Programm"
                    ]
                }
            },
            service: {
                enable: {
                    description: "Grundlagen des Case-Managements:",
                    features: [
                        "Case-Management & Console-Setup",
                        "Email-to-Case (Standard)",
                        "Account- & Kontakt-Management",
                        "Grundlegende Case-Zuweisungsregeln",
                        "Web-to-Case",
                        "Aktivitäts-Management",
                        "Standardberichte & Dashboards (5-8)",
                        "Anwenderschulung (Train the Trainer)",
                        "Basis-Datenmigration (Accounts/Kontakte)"
                    ]
                },
                elevate: {
                    description: "Omni-Channel & Wissensdatenbank:",
                    features: [
                        "Omni-Channel-Routing (Chat/E-Mail)",
                        "Setup der Wissensdatenbank & Artikel",
                        "Berechtigungen & Meilensteine (SLAs)",
                        "Makros & Schnelltext",
                        "Grundlagen der Computer-Telefonie-Integration (CTI)",
                        "Customer Community (Basis-Setup)",
                        "Erweiterte Automatisierung (Flows)",
                        "8-10 Berichte & 2-3 Dashboards"
                    ]
                },
                transform: {
                    description: "KI & Erweiterte Automatisierung:",
                    features: [
                        "Einstein Bots (Basis-Setup)",
                        "Service Cloud Voice Setup",
                        "Field Service Lightning (Basis-Versand)",
                        "Live Agent / Messaging Integration",
                        "Komplexe CTI-Integration",
                        "Visual Remote Assistant",
                        "Vollständige Community/Portal-Anpassung",
                        "ERP/Auftragssystem-Integration",
                        "12-15 Berichte & 4-5 Dashboards"
                    ]
                }
            },
            revenue: {
                enable: {
                    description: "Standard-Angebotserstellung:",
                    features: [
                        "Standard-Produktkatalog-Setup",
                        "Basis-Preisbücher (Liste/Kosten)",
                        "Standard-Angebotsvorlagen (PDF)",
                        "Nativer Quote-to-Cash Workflow",
                        "Konvertierung von Opportunity zu Angebot",
                        "Grundlegende Genehmigungsprozesse",
                        "5-8 Berichte & 1 Dashboard",
                        "Admin-Schulung",
                        "Datenimport (Produkte/Preise)"
                    ]
                },
                elevate: {
                    description: "Erweiterte Preisgestaltung & Bundles:",
                    features: [
                        "Produktbündelung & Konfiguration",
                        "Rabattpläne & Block-Preise",
                        "Geführter Verkauf (Produktauswahl)",
                        "Mehrdimensionale Angebotserstellung (MDQ)",
                        "Erweiterte Genehmigungs-Workflows",
                        "Vertragsänderungen & Verlängerungen",
                        "DocGen-Integration (z.B. Conga/S-Docs)",
                        "8-10 Berichte & 2-3 Dashboards"
                    ]
                },
                transform: {
                    description: "Gesamtes Revenue Management:",
                    features: [
                        "Billing & Invoicing Setup",
                        "Regeln für die Umsatzrealisierung",
                        "Nutzungsbasierte Preismodelle",
                        "Erweitertes Auftragsmanagement",
                        "ERP-Integration (bidirektional)",
                        "Komplexe Steuerintegrationen (Avalara/Vertex)",
                        "Customer Community (Partner Quoting)",
                        "12-15 Berichte & Executive Dashboards"
                    ]
                }
            }
        },
        education: {
            title: "Bildung & Zertifizierungen",
            academic: "Akademischer Hintergrund",
            certifications: "Zertifizierungen",
            items: [
                {
                    period: "Okt 2015 – Nov 2017",
                    degree: "Masters in International Business and Engineering",
                    school: "SRH Hochschule Heidelberg"
                },
                {
                    period: "Juli 2008 – Aug 2013",
                    degree: "Bachelor Of Engineering (Mechanical)",
                    school: "Universität von Pune"
                }
            ]
        },
        contact: {
            title: "Kontakt aufnehmen",
            subtitle: "Offen für Diskussionen über neue Projekte und Möglichkeiten.",
            email: "E-Mail",
            linkedin: "LinkedIn",
            location: "Standort",
            locationValue: "Pune, Indien",
            cta: "Nachricht senden"
        },
        footer: {
            subtitle: "Salesforce Berater | KI-Agent FDE",
            rights: "Alle Rechte vorbehalten."
        }
    }
};
