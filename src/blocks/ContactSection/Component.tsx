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
    <section id="contact" ref={sectionRef} className={cn('relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-brand-orange via-brand-orange to-brand-dark overflow-hidden', className)}>
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-dark rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      <div className="relative container mx-auto px-6 lg:px-16">
        <div className={cn(
          'max-w-4xl mx-auto text-center text-white space-y-10 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}>
          
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {headline}
            </h2>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {/* Contact Info & Booking Card Combined */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Email Card */}
            {email && (
              <a 
                href={`mailto:${email}`}
                className="group flex items-center gap-4 p-6 bg-white/15 backdrop-blur-md rounded-2xl hover:bg-white/25 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-xs text-white/70 mb-1 uppercase tracking-wide font-semibold">Email</p>
                  <p className="text-sm md:text-base font-semibold truncate">{email}</p>
                </div>
              </a>
            )}
            
            {/* Phone Card */}
            {phone && (
              <a 
                href={`tel:${phone}`}
                className="group flex items-center gap-4 p-6 bg-white/15 backdrop-blur-md rounded-2xl hover:bg-white/25 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <p className="text-xs text-white/70 mb-1 uppercase tracking-wide font-semibold">Telefon</p>
                  <p className="text-sm md:text-base font-semibold">{phone}</p>
                </div>
              </a>
            )}
          </div>

          {/* Main CTA Button - Prominent */}
          <div className="pt-4">
            <Link
              href={buttonLink || '#'}
              className="group inline-flex items-center justify-center gap-3 px-12 py-6 bg-white hover:bg-brand-snow text-brand-orange rounded-2xl font-bold text-lg md:text-xl transition-all duration-300 shadow-2xl hover:scale-105"
            >
              {buttonText}
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {['100% Vertraulich', 'Flexible Termine', 'Online & Vor Ort'].map((feature, i) => (
              <span key={i} className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full font-medium">
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
