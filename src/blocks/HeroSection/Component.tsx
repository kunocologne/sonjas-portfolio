import type { HeroSectionBlock as HeroSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import React from 'react'
import Link from 'next/link'

export const HeroSectionBlock: React.FC<
  HeroSectionProps & {
    id?: string | number
    className?: string
  }
> = ({ className, headline, subline, buttonText, buttonLink }) => {
  return (
    <section className={cn('relative bg-brand-snow text-brand-text overflow-hidden', className)}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-dark/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Small accent line */}
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-brand-orange rounded-full" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-dark leading-tight tracking-tight">
            {headline}
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto text-brand-text leading-relaxed">
            {subline}
          </p>
          
          <div className="pt-6">
            <Link
              href={buttonLink || '#contact'}
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-dark text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 transform"
            >
              {buttonText}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

