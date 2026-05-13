import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Packages from './components/Packages'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BlogList from './components/Blog/BlogList'
import BlogPost from './components/Blog/BlogPost'
import { LanguageProvider } from './context/LanguageContext'
import './App.css'

const HomePage = () => (
    <main id="main">
        <Hero />
        <Experience />
        <Packages />
        <Education />
        <Contact />
    </main>
)

function App() {
    return (
        <BrowserRouter>
            <LanguageProvider>
                <div className="app-wrapper">
                    <a href="#main" className="skip-link">Skip to main content</a>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/blog" element={<BlogList />} />
                        <Route path="/blog/:slug" element={<BlogPost />} />
                    </Routes>
                    <Footer />
                </div>
            </LanguageProvider>
        </BrowserRouter>
    )
}

export default App
