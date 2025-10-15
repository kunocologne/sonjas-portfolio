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
> = ({ className, headline, description, buttonText, buttonLink }) => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="contact" ref={sectionRef} className={cn('relative py-20 md:py-28 lg:py-36 bg-gradient-to-br from-brand-orange via-brand-orange to-brand-dark overflow-hidden', className)}>
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-dark rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      <div className="relative container mx-auto px-6 lg:px-16">
        <div className={cn(
          'max-w-5xl mx-auto transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}>
          
          {/* Content */}
          <div className="text-center text-white space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {headline}
              </h2>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
                {description}
              </p>
            </div>

            {/* CTA Button - Prominent */}
            <div className="pt-6">
              <Link
                href="mailto:kontakt.sonja.werner@outlook.de"
                className="group inline-flex items-center justify-center gap-3 px-12 py-6 bg-white hover:bg-brand-snow text-brand-orange rounded-full font-bold text-xl md:text-2xl transition-all duration-300 shadow-2xl hover:scale-105"
              >
                {buttonText}
                <svg className="w-7 h-7 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto pt-8">
              <a 
                href="mailto:kontakt.sonja.werner@outlook.de"
                className="group flex items-center gap-4 p-6 bg-white/15 backdrop-blur-md rounded-2xl hover:bg-white/25 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-xs text-white/70 mb-1 uppercase tracking-wide font-semibold">Email</p>
                  <p className="text-sm md:text-base font-semibold truncate">kontakt.sonja.werner@outlook.de</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-6 bg-white/15 backdrop-blur-md rounded-2xl">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <p className="text-xs text-white/70 mb-1 uppercase tracking-wide font-semibold">Verfügbarkeit</p>
                  <p className="text-sm md:text-base font-semibold">Mo - Fr, 9-18 Uhr</p>
                </div>
              </div>
            </div>

            {/* Trust features */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
              {['100% Vertraulich', 'Flexible Termine', 'Online & Vor Ort'].map((feature, i) => (
                <span key={i} className="px-5 py-2.5 bg-white/15 backdrop-blur-sm rounded-full text-sm md:text-base font-medium">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
