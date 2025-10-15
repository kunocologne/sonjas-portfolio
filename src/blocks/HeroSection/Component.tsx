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
    <section className={cn('relative bg-white dark:bg-background-8 pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32 overflow-hidden', className)}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-snow via-white to-brand-neutral/30 pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-brand-dark/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-semibold mb-8">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Ganzheitliche Therapie
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-dark mb-8 leading-tight">
            {headline}
          </h1>

          {/* Subline */}
          <p className="text-lg md:text-xl lg:text-2xl text-brand-text/80 mb-12 max-w-3xl leading-relaxed">
            {subline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href={buttonLink || '#contact'}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-dark text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              {buttonText}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-brand-snow text-brand-dark border-2 border-brand-neutral hover:border-brand-orange rounded-full font-semibold text-lg transition-all duration-300"
            >
              Mehr erfahren
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-brand-text/70">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-brand-orange/20 border-2 border-white flex items-center justify-center text-xs font-semibold text-brand-orange">
                    {i === 4 ? '10+' : ''}
                  </div>
                ))}
              </div>
              <span className="font-medium">500+ zufriedene Klienten</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">Zertifizierte Therapeutin</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
