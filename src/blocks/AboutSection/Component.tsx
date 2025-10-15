'use client'
import type { AboutSectionBlock as AboutSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import Image from 'next/image'
import React from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export const AboutSectionBlock: React.FC<
  AboutSectionProps & {
    id?: string | number
    className?: string
  }
> = ({ className, title, description }) => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="about" ref={sectionRef} className={cn('relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-brand-neutral/30 via-white to-white', className)}>
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Single Title - No redundancy */}
        <div className={cn(
          'text-center mb-12 md:mb-16 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-dark max-w-3xl mx-auto">
            {title}
          </h2>
        </div>

        {/* Main content - Single column with flowing design */}
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Main description card */}
          <div className={cn(
            'relative bg-gradient-to-br from-brand-dark via-brand-text to-brand-dark rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-light text-center">
                {description}
              </p>
            </div>
          </div>

          {/* Grid of expertise areas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Physiotherapie',
                description: 'Ganzheitliche körperliche Behandlung',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
              {
                title: 'Sexualberatung',
                description: 'Einfühlsame Begleitung',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: 'Achtsamkeit',
                description: 'Körper-Geist-Verbindung',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className={cn(
                  'group relative bg-white rounded-2xl p-6 md:p-8 border-2 border-brand-neutral hover:border-brand-text/20 transition-all duration-500 hover:shadow-xl',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                )}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-brand-snow rounded-2xl flex items-center justify-center text-brand-text group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark">{item.title}</h3>
                  <p className="text-sm text-brand-text/60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div className={cn(
            'grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-2xl p-8 border-2 border-brand-neutral shadow-lg transition-all duration-700 delay-500',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-dark mb-1">500+</div>
              <div className="text-sm text-brand-text/60">Klienten</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-dark mb-1">10+</div>
              <div className="text-sm text-brand-text/60">Jahre</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-dark mb-1">100%</div>
              <div className="text-sm text-brand-text/60">Vertraulich</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-dark mb-1">5★</div>
              <div className="text-sm text-brand-text/60">Bewertung</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
