import type { ContactSectionBlock as ContactSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import Link from 'next/link'
import React from 'react'

export const ContactSectionBlock: React.FC<
  ContactSectionProps & {
    id?: string | number
    className?: string
  }
> = ({ className, headline, description, buttonText, buttonLink, email, phone }) => {
  return (
    <section id="contact" className={cn('relative bg-gradient-to-br from-brand-orange via-brand-orange to-brand-dark text-white py-28 md:py-40 overflow-hidden', className)}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-dark/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />

      <div className="relative container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Animated decorative dots */}
          <div className="flex justify-center items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
          </div>
          
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            {headline}
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light opacity-95 max-w-3xl mx-auto">
            {description}
          </p>
          
          {/* Contact info with icons */}
          {(email || phone) && (
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center items-center pt-6">
              {email && (
                <a 
                  href={`mailto:${email}`}
                  className="group flex items-center gap-4 text-lg lg:text-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-12">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-medium border-b-2 border-transparent group-hover:border-white transition-all duration-300">{email}</span>
                </a>
              )}
              
              {phone && (
                <a 
                  href={`tel:${phone}`}
                  className="group flex items-center gap-4 text-lg lg:text-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-12">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-medium border-b-2 border-transparent group-hover:border-white transition-all duration-300">{phone}</span>
                </a>
              )}
            </div>
          )}

          {/* CTA Button */}
          <div className="pt-8">
            <Link
              href={buttonLink || '#'}
              className="group inline-flex items-center gap-3 bg-white text-brand-orange px-12 py-5 rounded-full text-lg font-bold hover:bg-brand-snow transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-xl"
            >
              <span>{buttonText}</span>
              <svg 
                className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Trust badge */}
          <div className="pt-12 opacity-80">
            <p className="text-sm font-medium tracking-wide">Vertrauensvoll • Professionell • Ganzheitlich</p>
          </div>
        </div>
      </div>
    </section>
  )
}
