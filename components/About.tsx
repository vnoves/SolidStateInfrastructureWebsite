import Image from 'next/image'
import { Language, translations } from '@/lib/i18n'

interface AboutProps {
  lang: Language
}

export default function About({ lang }: AboutProps) {
  const t = translations[lang]

  return (
    <section id="about" className="py-32 bg-steel-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-16 text-center">
          {t.about.title}
        </h2>
        
        {/* Subtle infrastructure visual */}
        <div className="mb-12 relative h-64 rounded-lg overflow-hidden border border-steel-800">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Data center infrastructure"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-steel-900 via-steel-900/50 to-transparent"></div>
        </div>
        
        <div className="space-y-6 text-steel-300 text-lg leading-relaxed">
          {t.about.content.map((paragraph, index) => (
            <p key={index} className="text-balance">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

