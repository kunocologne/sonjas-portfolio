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
    <section className={cn('relative min-h-[90vh] flex items-center justify-center bg-brand-snow overflow-hidden', className)}>
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-snow via-white to-brand-neutral opacity-60" />
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-brand-dark/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      <div className="relative container mx-auto px-6 lg:px-16 py-20 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Elegant divider */}
          <div className="flex items-center justify-center gap-4 opacity-60">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-brand-orange to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent via-brand-orange to-transparent" />
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-brand-dark leading-[1.1] tracking-tight">
            {headline.split(' ').map((word, i) => (
              <span
                key={i}
                className="inline-block animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
              >
                {word}{' '}
              </span>
            ))}
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-brand-text/80 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            {subline}
          </p>
          
          {/* CTA Button */}
          <div className="pt-8 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
            <Link
              href={buttonLink || '#contact'}
              className="group inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-dark text-white px-12 py-5 rounded-full text-lg font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              <span>{buttonText}</span>
              <svg 
                className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="pt-16 flex flex-wrap justify-center gap-12 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
            {[
              { icon: '✓', text: 'Zertifiziert' },
              { icon: '♥', text: 'Einfühlsam' },
              { icon: '★', text: 'Erfahren' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-brand-text/70">
                <span className="text-2xl text-brand-orange">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-orange/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-brand-orange rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
