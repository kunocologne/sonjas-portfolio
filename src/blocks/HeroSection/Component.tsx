import type { HeroSectionBlock as HeroSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const HeroSectionBlock: React.FC<
  HeroSectionProps & {
    id?: string | number
    className?: string
  }
> = ({ className, headline, subline, buttonText, buttonLink }) => {
  return (
    <section className={cn('relative bg-white pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20 overflow-hidden', className)}>
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-snow/30 via-white to-white" />

      <div className="relative container mx-auto px-6 lg:px-16 w-full">
        {/* Mobile Layout: Stack vertically */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-5 max-w-md mx-auto">
          
          {/* 1. Portrait Image - Close to nav */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64">
            <div className="absolute inset-0 bg-brand-neutral/20 rounded-full p-1">
              <div className="w-full h-full bg-white rounded-full" />
            </div>
            
            <div className="absolute inset-2 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
              <Image
                src="/portrait.jpg"
                alt="Sonja Werner"
                fill
                className="object-cover"
                priority
                sizes="256px"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-2 -right-2 bg-white border-2 border-brand-neutral rounded-xl shadow-lg p-2.5">
              <div className="text-center">
                <div className="text-lg font-bold text-brand-dark leading-none">10+</div>
                <div className="text-[10px] font-semibold text-brand-text/60">Jahre</div>
              </div>
            </div>

            {/* Certification badge */}
            <div className="absolute -top-2 -left-2 w-11 h-11 bg-white border-2 border-brand-neutral rounded-full shadow-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-brand-text/70" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* 2. Headline */}
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-dark leading-tight">
            {headline}
          </h1>

          {/* 3. Subline */}
          <p className="text-base sm:text-lg text-brand-text/70 leading-relaxed">
            {subline}
          </p>

          {/* 4. CTA Button */}
          <Link
            href={buttonLink || '#contact'}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-dark hover:bg-brand-text text-white rounded-full font-semibold text-base transition-all duration-300 shadow-md hover:shadow-xl w-full sm:w-auto"
          >
            {buttonText}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-4 text-xs text-brand-text/60">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              500+ Klienten
            </span>
            <span>•</span>
            <span>Zertifiziert</span>
          </div>
        </div>

        {/* Desktop Layout: Side by side */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left - Content */}
          <div className="lg:col-span-7 space-y-7">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-dark leading-[1.1] tracking-tight">
              {headline}
            </h1>

            <p className="text-xl text-brand-text/70 leading-relaxed max-w-2xl">
              {subline}
            </p>

            <div className="pt-2">
              <Link
                href={buttonLink || '#contact'}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-dark hover:bg-brand-text text-white rounded-full font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-xl"
              >
                {buttonText}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm">
              <div className="flex items-center gap-2 text-brand-text/60">
                <svg className="w-5 h-5 text-brand-text/70 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Über 500 Klienten</span>
              </div>
              <div className="flex items-center gap-2 text-brand-text/60">
                <svg className="w-5 h-5 text-brand-text/70 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Empathisch & Erfahren</span>
              </div>
            </div>
          </div>

          {/* Right - Portrait */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-neutral/40 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative w-[380px] h-[380px]">
                <div className="absolute inset-0 bg-brand-neutral/20 rounded-full p-1">
                  <div className="w-full h-full bg-white rounded-full" />
                </div>
                
                <div className="absolute inset-2 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
                  <Image
                    src="/portrait.jpg"
                    alt="Sonja Werner"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                    sizes="380px"
                  />
                </div>

                <div className="absolute -bottom-3 -right-3">
                  <div className="relative bg-white border-2 border-brand-neutral rounded-xl shadow-lg p-4 group-hover:scale-105 transition-transform duration-500">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brand-dark leading-none">10+</div>
                      <div className="text-xs font-semibold text-brand-text/60 mt-1">Jahre</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-3 -left-3 w-14 h-14 bg-white border-2 border-brand-neutral rounded-full shadow-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-7 h-7 text-brand-text/70" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
