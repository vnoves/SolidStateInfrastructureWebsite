'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WhyArgentina from '@/components/WhyArgentina'
import Infrastructure from '@/components/Infrastructure'
import Vision from '@/components/Vision'
import Contact from '@/components/Contact'
import { Language, defaultLanguage } from '@/lib/i18n'

export default function Home() {
  const [lang, setLang] = useState<Language>(defaultLanguage)

  useEffect(() => {
    // Check for saved language preference or URL parameter
    const savedLang = localStorage.getItem('language') as Language | null
    const urlParams = new URLSearchParams(window.location.search)
    const urlLang = urlParams.get('lang') as Language | null
    
    if (urlLang && (urlLang === 'en' || urlLang === 'es')) {
      setLang(urlLang)
      localStorage.setItem('language', urlLang)
    } else if (savedLang && (savedLang === 'en' || savedLang === 'es')) {
      setLang(savedLang)
    }
  }, [])

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang)
    localStorage.setItem('language', newLang)
    // Update URL without page reload
    const url = new URL(window.location.href)
    url.searchParams.set('lang', newLang)
    window.history.pushState({}, '', url)
  }

  return (
    <main className="min-h-screen">
      <Header lang={lang} onLanguageChange={handleLanguageChange} />
      <Hero lang={lang} />
      <About lang={lang} />
      <WhyArgentina lang={lang} />
      <Infrastructure lang={lang} />
      <Vision lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} onLanguageChange={handleLanguageChange} />
    </main>
  )
}

