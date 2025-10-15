'use client'
import type { AboutSectionBlock as AboutSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import Image from 'next/image'
import Link from 'next/link'
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
        
        {/* Section header */}
        <div className={cn(
          'text-center mb-12 md:mb-16 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}>
          <span className="inline-block px-4 py-2 bg-brand-snow border border-brand-neutral text-brand-text/80 rounded-full text-sm font-semibold mb-4">
            Über mich
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-dark max-w-3xl mx-auto">
            {title}
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          
          {/* Left column - Large feature card */}
          <div className={cn(
            'lg:col-span-7 transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            <div className="relative group h-full bg-gradient-to-br from-brand-dark via-brand-text to-brand-dark rounded-3xl p-8 md:p-10 lg:p-12 overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
              </div>

              <div className="relative space-y-6">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {description}
                </h3>

                {/* Feature list */}
                <ul className="space-y-4 pt-4">
                  {[
                    'Individuelle Behandlung nach Ihren Bedürfnissen',
                    'Vertrauensvoller und geschützter Raum',
                    'Ganzheitlicher Ansatz für Körper & Geist',
                    'Moderne Therapiemethoden'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white">
                      <div className="w-6 h-6 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-dark rounded-full font-bold hover:bg-brand-snow transition-all duration-300 shadow-lg hover:scale-105"
                  >
                    Jetzt Termin buchen
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Stats cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            
            {/* Stat card 1 */}
            <div className={cn(
              'bg-white rounded-2xl p-6 md:p-8 border-2 border-brand-neutral hover:border-brand-text/20 hover:shadow-xl transition-all duration-500',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )} style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 bg-brand-snow rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-4xl md:text-5xl font-bold text-brand-dark mb-2">500+</h4>
              <p className="text-brand-text/60 font-medium">Zufriedene Klienten</p>
              <div className="mt-4 pt-4 border-t border-brand-neutral">
                <p className="text-sm text-brand-text/50">Seit 2014 im Einsatz für Ihr Wohlbefinden</p>
              </div>
            </div>

            {/* Stat card 2 */}
            <div className={cn(
              'bg-white rounded-2xl p-6 md:p-8 border-2 border-brand-neutral hover:border-brand-text/20 hover:shadow-xl transition-all duration-500',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )} style={{ transitionDelay: '400ms' }}>
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 bg-brand-snow rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-brand-text" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-4xl md:text-5xl font-bold text-brand-dark mb-2">10+</h4>
              <p className="text-brand-text/60 font-medium">Jahre Expertise</p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-brand-text/70" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Profile card */}
            <div className={cn(
              'sm:col-span-2 lg:col-span-1 bg-white rounded-2xl p-6 md:p-8 border-2 border-brand-neutral hover:border-brand-text/20 hover:shadow-xl transition-all duration-500',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )} style={{ transitionDelay: '500ms' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src="/portrait.jpg"
                    alt="Sonja Werner"
                    fill
                    className="rounded-full object-cover ring-2 ring-brand-neutral"
                    sizes="64px"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-brand-dark rounded-full flex items-center justify-center border-2 border-white">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-dark">Sonja Werner</h4>
                  <p className="text-sm text-brand-text/60">Zertifizierte Therapeutin</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Physiotherapie', 'Sexualberatung', 'Achtsamkeit'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-brand-snow text-brand-text/70 text-xs font-medium rounded-lg border border-brand-neutral">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
