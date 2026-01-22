import Image from 'next/image'
import { Language, translations } from '@/lib/i18n'

interface WhyArgentinaProps {
  lang: Language
}

export default function WhyArgentina({ lang }: WhyArgentinaProps) {
  const t = translations[lang]

  return (
    <section id="why-argentina" className="py-32 bg-steel-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            {t.whyArgentina.title}
          </h2>
          <p className="text-xl text-steel-300 max-w-3xl mx-auto leading-relaxed">
            {t.whyArgentina.intro}
          </p>
        </div>

        {/* Aerial infrastructure visual */}
        <div className="mb-16 relative h-96 rounded-lg overflow-hidden border border-steel-800">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Aerial view of infrastructure and energy facilities"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-steel-950/90 via-steel-950/50 to-transparent"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.whyArgentina.points.map((point, index) => (
            <div
              key={index}
              className="bg-steel-900/50 border border-steel-800 p-8 rounded-lg hover:border-steel-700 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {point.title}
              </h3>
              <p className="text-steel-300 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

