import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Packages from './components/Packages'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { LanguageProvider } from './context/LanguageContext'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <div className="app-wrapper">
        <a href="#main" className="skip-link">Skip to main content</a>

        <Navbar />
        <main id="main">
          <Hero />
          <Experience />
          <Packages />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
