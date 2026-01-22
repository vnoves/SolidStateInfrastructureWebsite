'use client'

import { Language, translations } from '@/lib/i18n'

interface FooterProps {
  lang: Language
  onLanguageChange: (lang: Language) => void
}

export default function Footer({ lang, onLanguageChange }: FooterProps) {
  const t = translations[lang]

  return (
    <footer className="border-t border-steel-800 bg-steel-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-steel-400 text-sm">
            <p className="font-semibold text-white mb-1">Solid State Infrastructure</p>
            <p>{t.footer.location}</p>
          </div>
          
          <div className="flex items-center gap-2">
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
        </div>
      </div>
    </footer>
  )
}

