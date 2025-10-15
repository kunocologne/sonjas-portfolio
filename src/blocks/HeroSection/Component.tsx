import type { HeroSectionBlock as HeroSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import Link from 'next/link'
import React from 'react'

export const HeroSectionBlock: React.FC<
  HeroSectionProps & {
    id?: string | number
    className?: string
  }
> = ({ className, headline, subline, buttonText, buttonLink }) => {
  return (
    <section className={cn('relative bg-white min-h-screen flex items-center justify-center overflow-hidden', className)}>
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-snow/40 via-white to-brand-neutral/20" />
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.3'%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3Ccircle cx='30' cy='20' r='1'/%3E%3Ccircle cx='50' cy='15' r='1.5'/%3E%3Ccircle cx='70' cy='25' r='1'/%3E%3Ccircle cx='90' cy='10' r='1.5'/%3E%3Ccircle cx='20' cy='40' r='1'/%3E%3Ccircle cx='40' cy='50' r='1.5'/%3E%3Ccircle cx='60' cy='45' r='1'/%3E%3Ccircle cx='80' cy='55' r='1.5'/%3E%3Ccircle cx='15' cy='70' r='1.5'/%3E%3Ccircle cx='35' cy='80' r='1'/%3E%3Ccircle cx='55' cy='75' r='1.5'/%3E%3Ccircle cx='75' cy='85' r='1'/%3E%3Ccircle cx='95' cy='70' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      {/* Animated floating elements - Modern & Fun */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large animated blob */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-brand-orange/20 to-brand-neutral/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-brand-neutral/20 to-brand-orange/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-brand-snow/30 to-transparent rounded-full blur-2xl animate-blob animation-delay-4000" />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-brand-orange/40 rounded-full animate-float-particle" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-brand-orange/30 rounded-full animate-float-particle animation-delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-brand-neutral/50 rounded-full animate-float-particle animation-delay-2000" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-16 w-full py-16 sm:py-20 md:py-8">
        {/* Mobile Layout: Stack vertically */}
        <div className="md:hidden flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6 max-w-6xl mx-auto">
          
          {/* 1. Portrait Image - Close to nav */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64">
            <div className="absolute inset-0 bg-brand-neutral/20 rounded-full p-1">
              <div className="w-full h-full bg-white rounded-full" />
            </div>
            
            <div className="absolute inset-2 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
              <img
                src="/portrait.jpg"
                alt="Sonja Werner"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badge decorations */}
            <div className="absolute -top-2 -left-2 w-11 h-11 bg-white border-2 border-brand-neutral rounded-full shadow-lg flex items-center justify-center" aria-label="Qualität">
              <span className="text-lg">✨</span>
            </div>
            <div className="absolute -bottom-2 -right-2 w-11 h-11 bg-white border-2 border-green-600/20 rounded-full shadow-lg flex items-center justify-center" aria-label="Ganzheitlich">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          {/* 2. Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark leading-tight">
            {headline}
          </h1>

          {/* 3. Subline/Description */}
          <p className="text-sm sm:text-base text-brand-text/70 leading-relaxed max-w-md mx-auto">
            Für mehr Bewusstsein, Heilung und Verbindung mit deinem Körper
          </p>

          {/* 4. CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              href={buttonLink || '#contact'}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5 bg-brand-orange hover:bg-brand-dark text-white rounded-full font-semibold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-xl w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
              aria-label={buttonText}
            >
              {buttonText}
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5 bg-white hover:bg-brand-snow text-brand-orange border-2 border-brand-orange rounded-full font-semibold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-xl w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
              aria-label="Mehr erfahren"
            >
              Mehr erfahren
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>

        </div>

        {/* Tablet & Desktop Layout: Image left, content right */}
        <div className="hidden md:grid md:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left - Portrait */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-neutral/40 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative w-[320px] h-[320px] lg:w-[380px] lg:h-[380px]">
                <div className="absolute inset-0 bg-brand-neutral/20 rounded-full p-1">
                  <div className="w-full h-full bg-white rounded-full" />
                </div>
                
                <div className="absolute inset-2 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
                  <img
                    src="/portrait.jpg"
                    alt="Sonja Werner"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="absolute -top-3 -left-3 w-14 h-14 bg-white border-2 border-brand-neutral rounded-full shadow-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-500" aria-label="Qualität">
                  <span className="text-2xl">✨</span>
                </div>
                <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-white border-2 border-green-600/20 rounded-full shadow-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 animation-delay-1000" aria-label="Ganzheitlich">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="md:col-span-7 space-y-6 lg:space-y-7">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-dark leading-[1.1] tracking-tight">
              {headline}
            </h1>

            {/* Subline/Description */}
            <p className="text-lg text-brand-text/70 leading-relaxed max-w-2xl">
              Für mehr Bewusstsein, Heilung und Verbindung mit deinem Körper
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-start gap-4">
              <Link
                href={buttonLink || '#contact'}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-dark text-white rounded-full font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
                aria-label={buttonText}
              >
                {buttonText}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-brand-snow text-brand-orange border-2 border-brand-orange rounded-full font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
                aria-label="Mehr erfahren"
              >
                Mehr erfahren
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
