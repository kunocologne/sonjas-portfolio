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

      <div className="relative container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left - Content */}
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-5 md:space-y-7">
            {/* Small badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-snow border border-brand-neutral rounded-full">
              <div className="w-2 h-2 rounded-full bg-brand-text/40" />
              <span className="text-sm font-semibold text-brand-text/80">Ganztherapeutische Behandlung</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-dark leading-[1.1] tracking-tight">
              {headline}
            </h1>

            {/* Subline */}
            <p className="text-lg md:text-xl text-brand-text/70 leading-relaxed max-w-2xl">
              {subline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href={buttonLink || '#contact'}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-dark hover:bg-brand-text text-white rounded-full font-semibold text-base md:text-lg transition-all duration-300 shadow-md hover:shadow-xl"
              >
                {buttonText}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-brand-snow text-brand-dark border-2 border-brand-neutral hover:border-brand-text/20 rounded-full font-semibold text-base md:text-lg transition-all duration-300"
              >
                Über mich
              </a>
            </div>

            {/* Trust indicators */}
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
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Subtle glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-neutral/40 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Main portrait container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px]">
                {/* Simple ring */}
                <div className="absolute inset-0 bg-brand-neutral/20 rounded-full p-1">
                  <div className="w-full h-full bg-white rounded-full" />
                </div>
                
                {/* Image */}
                <div className="absolute inset-2 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
                  <Image
                    src="/portrait.jpg"
                    alt="Sonja Werner"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 380px"
                  />
                </div>

                {/* Subtle floating experience badge */}
                <div className="absolute -bottom-3 -right-3">
                  <div className="relative bg-white border-2 border-brand-neutral rounded-xl shadow-lg p-4 group-hover:scale-105 transition-transform duration-500">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brand-dark leading-none">10+</div>
                      <div className="text-xs font-semibold text-brand-text/60 mt-1">Jahre</div>
                    </div>
                  </div>
                </div>

                {/* Subtle certification badge */}
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
