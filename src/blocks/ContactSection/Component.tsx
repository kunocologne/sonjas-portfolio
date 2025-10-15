import type { ContactSectionBlock as ContactSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import React from 'react'
import Link from 'next/link'

export const ContactSectionBlock: React.FC<
  ContactSectionProps & {
    id?: string | number
    className?: string
  }
> = ({ className, headline, description, buttonText, buttonLink, email, phone }) => {
  return (
    <section id="contact" className={cn('relative bg-gradient-to-br from-brand-orange via-brand-orange to-brand-dark text-white overflow-hidden', className)}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-dark/30 rounded-full blur-3xl" />
      </div>
      
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Accent decoration */}
          <div className="flex justify-center">
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {headline}
          </h2>
          
          <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          
          {(email || phone) && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center py-6">
              {email && (
                <a 
                  href={`mailto:${email}`} 
                  className="flex items-center gap-3 text-lg hover:text-white/80 transition-colors group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-medium">{email}</span>
                </a>
              )}
              {phone && (
                <a 
                  href={`tel:${phone}`} 
                  className="flex items-center gap-3 text-lg hover:text-white/80 transition-colors group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-medium">{phone}</span>
                </a>
              )}
            </div>
          )}

          <div className="pt-6">
            <Link
              href={buttonLink || '#'}
              className="inline-flex items-center gap-3 bg-white text-brand-orange hover:bg-brand-snow px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform"
            >
              {buttonText}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

