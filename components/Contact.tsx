'use client'

import { useState, FormEvent } from 'react'
import { Language, translations } from '@/lib/i18n'

interface ContactProps {
  lang: Language
}

export default function Contact({ lang }: ContactProps) {
  const t = translations[lang]
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: Implement actual form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you for your message. We will be in touch shortly.')
      setFormData({ name: '', company: '', email: '', message: '' })
    }, 1000)
  }

  return (
    <section id="contact" className="py-32 bg-steel-900">
      <div className="max-w-2xl mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-steel-300">
            {t.contact.subtitle}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-steel-300 mb-2 text-sm font-medium">
              {t.contact.name}
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-steel-950 border border-steel-800 rounded-lg text-white placeholder-steel-500 focus:outline-none focus:border-steel-600 transition-colors"
              placeholder={t.contact.name}
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-steel-300 mb-2 text-sm font-medium">
              {t.contact.company}
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-3 bg-steel-950 border border-steel-800 rounded-lg text-white placeholder-steel-500 focus:outline-none focus:border-steel-600 transition-colors"
              placeholder={t.contact.company}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-steel-300 mb-2 text-sm font-medium">
              {t.contact.email}
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-steel-950 border border-steel-800 rounded-lg text-white placeholder-steel-500 focus:outline-none focus:border-steel-600 transition-colors"
              placeholder={t.contact.email}
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-steel-300 mb-2 text-sm font-medium">
              {t.contact.message}
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-steel-950 border border-steel-800 rounded-lg text-white placeholder-steel-500 focus:outline-none focus:border-steel-600 transition-colors resize-none"
              placeholder={t.contact.message}
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-white text-steel-900 font-semibold rounded-lg hover:bg-steel-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? t.contact.submitting : t.contact.submit}
          </button>
        </form>
      </div>
    </section>
  )
}

