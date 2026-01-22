import Image from 'next/image'
import { Language, translations } from '@/lib/i18n'

interface HeroProps {
  lang: Language
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang]

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-32 overflow-hidden">
      {/* Background image - Hyperscale data center */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Hyperscale data center infrastructure"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-steel-900/85 via-steel-900/90 to-steel-900 z-10"></div>
      </div>
      
      <div className="relative z-20 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-8 leading-tight text-balance">
          {t.hero.headline}
        </h1>
        <p className="text-xl md:text-2xl text-steel-300 max-w-3xl mx-auto leading-relaxed">
          {t.hero.subheading}
        </p>
      </div>
      
      {/* Subtle scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-steel-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-steel-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

