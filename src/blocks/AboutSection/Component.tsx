import type { AboutSectionBlock as AboutSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import Image from 'next/image'
import React from 'react'

export const AboutSectionBlock: React.FC<
  AboutSectionProps & {
    id?: string | number
    className?: string
  }
> = ({ className, title, description, image }) => {
  return (
    <section className={cn('relative bg-gradient-to-b from-white via-brand-neutral/50 to-white py-28 md:py-40', className)}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-brand-dark/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          
          {/* Portrait side */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-orange/20 to-brand-dark/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Main image container */}
              <div className="relative w-[350px] h-[350px] lg:w-[450px] lg:h-[450px]">
                {/* Accent circle behind */}
                <div className="absolute inset-0 bg-brand-orange/10 rounded-full scale-105 group-hover:scale-110 transition-transform duration-700" />
                
                {/* Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden ring-8 ring-white shadow-2xl">
                  <Image
                    src="/portrait.jpg"
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>

                {/* Floating accent element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-orange rounded-full shadow-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                  <div className="text-white text-center">
                    <div className="text-3xl font-bold">10+</div>
                    <div className="text-xs font-medium">Jahre</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Section label */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-brand-orange" />
              <span className="text-sm font-semibold text-brand-orange tracking-wider uppercase">Über mich</span>
            </div>
            
            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight">
              {title}
            </h2>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-brand-text leading-relaxed font-light">
              {description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-2 group cursor-default">
                <div className="text-4xl font-bold text-brand-orange group-hover:scale-110 transition-transform duration-300 inline-block">500+</div>
                <div className="text-sm text-brand-text/70 font-medium">Zufriedene Klienten</div>
              </div>
              <div className="space-y-2 group cursor-default">
                <div className="text-4xl font-bold text-brand-orange group-hover:scale-110 transition-transform duration-300 inline-block">100%</div>
                <div className="text-sm text-brand-text/70 font-medium">Engagement</div>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-4 pt-6">
              {['Zertifiziert', 'Erfahren', 'Ganzheitlich'].map((badge, i) => (
                <span
                  key={i}
                  className="px-5 py-2 bg-brand-snow border border-brand-orange/20 rounded-full text-sm font-medium text-brand-text hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300 cursor-default"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
