import { Language, translations } from '@/lib/i18n'

interface VisionProps {
  lang: Language
}

export default function Vision({ lang }: VisionProps) {
  const t = translations[lang]

  return (
    <section id="vision" className="py-32 bg-steel-950">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-16 text-center">
          {t.vision.title}
        </h2>
        <div className="space-y-6 text-steel-300 text-lg leading-relaxed">
          {t.vision.content.map((paragraph, index) => (
            <p key={index} className="text-balance">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

