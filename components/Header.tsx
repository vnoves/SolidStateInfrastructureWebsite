'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Language, translations } from '@/lib/i18n'

interface HeaderProps {
  lang: Language
  onLanguageChange: (lang: Language) => void
}

export default function Header({ lang, onLanguageChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const t = translations[lang]

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#why-argentina', label: t.nav.whyArgentina },
    { href: '#infrastructure', label: t.nav.infrastructure },
    { href: '#vision', label: t.nav.vision },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-steel-900/95 backdrop-blur-sm border-b border-steel-800'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-white hover:text-steel-200 transition-colors">
            Solid State Infrastructure
          </Link>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-steel-300 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-2 border-l border-steel-700 pl-6 ml-2">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1 text-sm transition-colors ${
                  lang === 'en'
                    ? 'text-white font-medium'
                    : 'text-steel-400 hover:text-steel-200'
                }`}
              >
                EN
              </button>
              <span className="text-steel-600">/</span>
              <button
                onClick={() => onLanguageChange('es')}
                className={`px-3 py-1 text-sm transition-colors ${
                  lang === 'es'
                    ? 'text-white font-medium'
                    : 'text-steel-400 hover:text-steel-200'
                }`}
              >
                ES
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-steel-300 hover:text-white transition-colors ml-4"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 border-t border-steel-800 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-steel-300 hover:text-white transition-colors text-sm py-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

