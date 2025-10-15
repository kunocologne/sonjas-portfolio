import type { ServicesSectionBlock as ServicesSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import React from 'react'

export const ServicesSectionBlock: React.FC<
  ServicesSectionProps & {
    id?: string | number
    className?: string
  }
> = ({ className, title, services }) => {
  return (
    <section className={cn('relative bg-white py-28 md:py-40', className)}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255 117 24) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative container mx-auto px-6 lg:px-16">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-brand-orange" />
            <span className="text-sm font-semibold text-brand-orange tracking-wider uppercase">Services</span>
            <div className="w-16 h-px bg-brand-orange" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-6">
            {title}
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services?.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-brand-snow p-8 lg:p-10 rounded-2xl border border-brand-neutral hover:border-brand-orange/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Number badge */}
              <div className="absolute -top-4 left-8">
                <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
              </div>

              {/* Accent line that grows on hover */}
              <div className="w-0 group-hover:w-16 h-1 bg-brand-orange transition-all duration-500 mb-8 rounded-full" />

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-brand-dark group-hover:text-brand-orange transition-colors duration-300">
                  {service.title}
                </h3>
                
                {service.description && (
                  <p className="text-brand-text leading-relaxed text-lg">
                    {service.description}
                  </p>
                )}
              </div>

              {/* Decorative corner element */}
              <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg className="w-full h-full text-brand-orange/10" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="100" cy="100" r="100" />
                </svg>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
