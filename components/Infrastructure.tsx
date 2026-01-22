import Image from 'next/image'
import { Language, translations } from '@/lib/i18n'

interface InfrastructureProps {
  lang: Language
}

export default function Infrastructure({ lang }: InfrastructureProps) {
  const t = translations[lang]

  // Data center images for visual enhancement
  const infrastructureImages = [
    {
      src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Data center server racks',
    },
    {
      src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Data center cooling infrastructure',
    },
    {
      src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Hyperscale data center facility',
    },
  ]

  return (
    <section id="infrastructure" className="py-32 bg-steel-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            {t.infrastructure.title}
          </h2>
          <p className="text-xl text-steel-300 max-w-3xl mx-auto leading-relaxed">
            {t.infrastructure.intro}
          </p>
        </div>

        {/* Infrastructure image showcase */}
        <div className="mb-16 grid md:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-lg overflow-hidden border border-steel-800">
            <Image
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Hyperscale data center server hall"
              fill
              className="object-cover opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden border border-steel-800">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Data center cooling and power infrastructure"
              fill
              className="object-cover opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden border border-steel-800">
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Modern data center facility"
              fill
              className="object-cover opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.infrastructure.points.map((point, index) => (
            <div
              key={index}
              className="bg-steel-950/50 border border-steel-800 p-8 rounded-lg hover:border-steel-700 transition-colors"
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

