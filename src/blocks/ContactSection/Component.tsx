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
    <section id="contact" className={cn('relative py-20 md:py-28 lg:py-36 bg-gradient-to-br from-brand-orange via-brand-orange to-brand-dark overflow-hidden', className)}>
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-dark rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Content */}
            <div className="text-white space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                {headline}
              </h2>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                {description}
              </p>

              {/* Contact info */}
              {(email || phone) && (
                <div className="space-y-4 pt-4">
                  {email && (
                    <a 
                      href={`mailto:${email}`}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-white/70">Email</p>
                        <p className="text-lg font-semibold group-hover:translate-x-1 transition-transform duration-300">{email}</p>
                      </div>
                    </a>
                  )}
                  
                  {phone && (
                    <a 
                      href={`tel:${phone}`}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-white/70">Telefon</p>
                        <p className="text-lg font-semibold group-hover:translate-x-1 transition-transform duration-300">{phone}</p>
                      </div>
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Right side - CTA Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-brand-dark">
                  Jetzt Termin vereinbaren
                </h3>

                <p className="text-brand-text/70 text-lg">
                  Ich freue mich darauf, Sie kennenzulernen und Sie auf Ihrem Weg zu begleiten.
                </p>

                <Link
                  href={buttonLink || '#'}
                  className="flex items-center justify-center gap-2 w-full px-8 py-5 bg-brand-orange hover:bg-brand-dark text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  {buttonText}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                {/* Trust badges */}
                <div className="flex items-center justify-center gap-6 pt-6 border-t border-brand-neutral">
                  <div className="flex items-center gap-2 text-sm text-brand-text/70">
                    <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Sicher
                  </div>
                  <div className="flex items-center gap-2 text-sm text-brand-text/70">
                    <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Vertraulich
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
