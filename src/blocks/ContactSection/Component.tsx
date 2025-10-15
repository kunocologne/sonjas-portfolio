'use client'
import type { ContactSectionBlock as ContactSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import Link from 'next/link'
import React from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export const ContactSectionBlock: React.FC<
  ContactSectionProps & {
    id?: string | number
    className?: string
  }
> = ({ className, headline, description, buttonText, buttonLink, email, phone }) => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="contact" ref={sectionRef} className={cn('relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-brand-snow overflow-hidden', className)}>
      
      <div className="relative container mx-auto px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-center">
            
            {/* Left side - Content */}
            <div className={cn(
              'lg:col-span-3 space-y-6 md:space-y-8 transition-all duration-700',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            )}>
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight mb-6">
                  {headline}
                </h2>
                
                <p className="text-lg md:text-xl text-brand-text/70 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Contact details */}
              {(email || phone) && (
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {email && (
                    <a 
                      href={`mailto:${email}`}
                      className="group flex items-center gap-4 p-5 bg-white border-2 border-brand-neutral rounded-2xl hover:border-brand-text/20 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-brand-snow rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-brand-text/50 mb-1 uppercase tracking-wide font-semibold">Email</p>
                        <p className="text-sm md:text-base font-semibold text-brand-dark truncate group-hover:translate-x-1 transition-transform duration-300">{email}</p>
                      </div>
                    </a>
                  )}
                  
                  {phone && (
                    <a 
                      href={`tel:${phone}`}
                      className="group flex items-center gap-4 p-5 bg-white border-2 border-brand-neutral rounded-2xl hover:border-brand-text/20 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-brand-snow rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-brand-text/50 mb-1 uppercase tracking-wide font-semibold">Telefon</p>
                        <p className="text-sm md:text-base font-semibold text-brand-dark group-hover:translate-x-1 transition-transform duration-300">{phone}</p>
                      </div>
                    </a>
                  )}
                </div>
              )}

              {/* Features */}
              <div className="flex flex-wrap gap-3 pt-4">
                {['100% Vertraulich', 'Flexible Termine', 'Online & Vor Ort'].map((feature, i) => (
                  <span key={i} className="px-4 py-2 bg-white border border-brand-neutral rounded-full text-sm font-medium text-brand-text/70">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Right side - CTA Card */}
            <div className={cn(
              'lg:col-span-2 transition-all duration-700 delay-300',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            )}>
              <div className="bg-gradient-to-br from-brand-dark to-brand-text text-white rounded-3xl p-8 lg:p-10 shadow-2xl">
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                      Termin vereinbaren
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      Buchen Sie Ihren persönlichen Termin und beginnen Sie Ihre Reise zu mehr Wohlbefinden.
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={buttonLink || '#'}
                    className="group flex items-center justify-center gap-3 w-full px-8 py-5 bg-white hover:bg-brand-snow text-brand-dark rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:scale-105"
                  >
                    {buttonText}
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>

                  {/* Trust indicators */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-xs text-white/70 font-medium">5.0 Bewertung</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-xs text-white/70 font-medium">Vertraulich</p>
                    </div>
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
