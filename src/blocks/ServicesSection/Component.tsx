import type { ServicesSectionBlock as ServicesSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import React from 'react'

export const ServicesSectionBlock: React.FC<
  ServicesSectionProps & {
    id?: string | number
    className?: string
  }
> = ({ className, title, services }) => {
  const icons = [
    // Icon 1 - Physiotherapy
    <svg key="1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>,
    // Icon 2 - Counseling
    <svg key="2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>,
    // Icon 3 - Mindfulness
    <svg key="3" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ]

  return (
    <section className={cn('relative py-20 md:py-28 lg:py-36 bg-white', className)}>
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgb(255 117 24) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="relative container mx-auto px-6 lg:px-16">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-semibold mb-6">
            Mein Angebot
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-dark mb-6 max-w-3xl">
            {title}
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services?.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 lg:p-10 border-2 border-brand-neutral hover:border-brand-orange transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-dark rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                {icons[index] || icons[0]}
              </div>

              {/* Content */}
              <h3 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-4 group-hover:text-brand-orange transition-colors duration-300">
                {service.title}
              </h3>
              
              {service.description && (
                <p className="text-brand-text/80 leading-relaxed text-lg mb-6">
                  {service.description}
                </p>
              )}

              {/* Arrow icon */}
              <div className="flex items-center gap-2 text-brand-orange font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Mehr erfahren</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Decorative corner gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-orange/5 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
