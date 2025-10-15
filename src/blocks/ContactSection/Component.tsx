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

          {/* Cool CTA Button */}
          <div className="pt-8">
            <Link
              href="mailto:kontakt.sonja.werner@outlook.de"
              className="group relative inline-flex items-center justify-center gap-3 px-12 py-6 bg-white hover:bg-brand-snow text-brand-orange rounded-full font-bold text-xl md:text-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 via-transparent to-brand-orange/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              
              <span className="relative z-10">{buttonText}</span>
              <svg className="relative z-10 w-7 h-7 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}