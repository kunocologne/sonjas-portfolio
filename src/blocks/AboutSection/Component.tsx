'use client'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import type { AboutSectionBlock as AboutSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import React from 'react'

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
        
        {/* Title with decorative line */}
        <div className={cn(
          'text-center mb-12 md:mb-16 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-dark max-w-3xl mx-auto mb-8">
            {title}
          </h2>
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 md:w-32 h-px bg-gradient-to-r from-transparent via-brand-orange to-brand-orange" />
            <div className="w-2 h-2 rounded-full bg-brand-orange" />
            <div className="w-20 md:w-32 h-px bg-gradient-to-l from-transparent via-brand-orange to-brand-orange" />
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto space-y-10">
          
          {/* Description card with red gradient background */}
          <div className={cn(
            'relative bg-gradient-to-br from-brand-dark via-brand-text to-brand-dark rounded-3xl p-8 md:p-12 lg:p-14 overflow-hidden transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative text-center">
              <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-light">
                {description}
              </p>
            </div>
          </div>

          {/* 3 Professional cards with brand colors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Physiotherapie',
                description: 'Beckenbodentherapie, Schmerzbehandlung und ganzheitliche Körperarbeit',
                gradient: 'from-brand-snow to-brand-neutral',
                icon: '🌿',
              },
              {
                title: 'Sexualberatung',
                description: 'Einzelberatung und Paartherapie für erfüllte Intimität',
                gradient: 'from-brand-neutral to-brand-snow',
                icon: '💫',
              },
              {
                title: 'Achtsamkeit',
                description: 'Körperwahrnehmung, Entspannung und innere Balance',
                gradient: 'from-brand-snow to-brand-neutral',
                icon: '✨',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={cn(
                  'group relative overflow-hidden rounded-3xl border-2 border-brand-neutral hover:border-brand-orange transition-all duration-500 hover:shadow-2xl hover:-translate-y-2',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                )}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              >
                {/* Brand gradient background */}
                <div className={cn('absolute inset-0 bg-gradient-to-br', item.gradient)} />
                
                {/* Content */}
                <div className="relative p-8 md:p-10 space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                    <div className="text-6xl font-bold text-brand-neutral/30 group-hover:text-brand-orange/30 transition-colors duration-500">
                      {i + 1}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-dark">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-brand-text/70 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Expanding line */}
                  <div className="w-0 group-hover:w-full h-1 bg-brand-orange rounded-full transition-all duration-500" />
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div className={cn(
            'grid grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-to-br from-brand-neutral to-brand-snow rounded-3xl p-8 md:p-10 border-2 border-brand-neutral shadow-lg transition-all duration-700 delay-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-brand-dark">500+</div>
              <div className="text-sm text-brand-text/60 font-medium">Klienten</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-brand-dark">10+</div>
              <div className="text-sm text-brand-text/60 font-medium">Jahre</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-brand-dark">100%</div>
              <div className="text-sm text-brand-text/60 font-medium">Vertraulich</div>
            </div>
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-0.5 text-brand-orange">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-sm text-brand-text/60 font-medium">Bewertung</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
