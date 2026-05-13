import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Recommendations from './components/Recommendations'
import ConsultationRates from './components/ConsultationRates'
import Education from './components/Education'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BlogPost from './components/BlogPost'
import BlogList from './components/BlogList'
import { LanguageProvider } from './context/LanguageContext'
import './App.css'

function Portfolio() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Shantanu Dutta - Salesforce Freelancer & AI Engineer",
    "image": "https://shantanudutta.com/og-image.jpg",
    "description": "Expert Salesforce Freelancer, Consultant, and AI Engineer specializing in CPQ, Sales Cloud, and AI Agent development.",
    "url": "https://shantanudutta.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Berlin",
      "addressCountry": "Germany"
    },
    "sameAs": [
      "https://www.linkedin.com/in/shantanudutta1/",
      "https://github.com/shantanudutta"
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shantanu Dutta",
    "jobTitle": "Freelance Salesforce Consultant & AI Engineer",
    "url": "https://shantanudutta.com",
    "image": "https://shantanudutta.com/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Berlin",
      "addressCountry": "Germany"
    },
    "sameAs": [
      "https://www.linkedin.com/in/shantanudutta1/",
      "https://github.com/shantanudutta"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Shantanu Dutta | Expert Salesforce Freelancer & Consultant</title>
        <meta name="description" content="Expert Salesforce Freelancer, Consultant, and AI Engineer based in Berlin. Specializing in CPQ, custom implementations, and intelligent AI Agents." />
        <meta name="keywords" content="Salesforce Freelancer, Salesforce Consultant, AI Engineer, CPQ Specialist, Apex Developer, Berlin" />
        <meta property="og:title" content="Shantanu Dutta | Expert Salesforce Freelancer" />
        <meta property="og:description" content="Expert Salesforce Freelancer, Consultant, and AI Engineer based in Berlin." />
        <meta property="og:url" content="https://shantanudutta.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://shantanudutta.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Shantanu Dutta - Salesforce Freelancer & AI Engineer" />
        <link rel="canonical" href="https://shantanudutta.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shantanu Dutta | Expert Salesforce Freelancer" />
        <meta name="twitter:description" content="Expert Salesforce Freelancer, Consultant, and AI Engineer based in Berlin." />
        <meta name="twitter:image" content="https://shantanudutta.com/og-image.jpg" />
        <link rel="alternate" hreflang="en" href="https://shantanudutta.com/" />
        <link rel="alternate" hreflang="de" href="https://shantanudutta.com/" />
        <link rel="alternate" hreflang="x-default" href="https://shantanudutta.com/" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      </Helmet>
      <div className="app-wrapper">
        <a href="#main" className="skip-link">Skip to main content</a>

        <Navbar />
        <main id="main">
          <Hero />
          <Experience />
          <Recommendations />
          <ConsultationRates />
          <Education />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </LanguageProvider>
  )
}

export default App
