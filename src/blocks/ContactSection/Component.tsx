'use client'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import type { ContactSectionBlock as ContactSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import Link from 'next/link'
import React from 'react'

export const ContactSectionBlock: React.FC<
  ContactSectionProps & {
    id?: string | number
    className?: string
  }
> = ({ className, headline, description, buttonText, buttonLink }) => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="contact" ref={sectionRef} className={cn('relative py-20 md:py-28 lg:py-36 bg-gradient-to-br from-brand-orange via-brand-orange to-brand-dark overflow-hidden', className)}>
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-dark rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-16">
        <div className={cn(
          'max-w-4xl mx-auto text-center text-white space-y-8 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}>
          
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {headline}
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Link
              href="mailto:kontakt.sonja.werner@outlook.de"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white hover:bg-brand-snow text-brand-orange rounded-full font-bold text-lg md:text-xl transition-all duration-300 shadow-xl hover:scale-105"
            >
              {buttonText}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Contact info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto pt-8">
            <a 
              href="mailto:kontakt.sonja.werner@outlook.de"
              className="group flex items-center gap-4 p-6 bg-white/15 backdrop-blur-sm rounded-2xl hover:bg-white/25 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 text-left min-w-0">
                <p className="text-xs text-white/70 mb-1 uppercase tracking-wide font-semibold">Email</p>
                <p className="text-sm font-semibold truncate">kontakt.sonja.werner@outlook.de</p>
              </div>
            </a>
            
            <div className="flex items-center gap-4 p-6 bg-white/15 backdrop-blur-sm rounded-2xl">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <p className="text-xs text-white/70 mb-1 uppercase tracking-wide font-semibold">Verfügbarkeit</p>
                <p className="text-sm font-semibold">Mo - Fr, 9-18 Uhr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}