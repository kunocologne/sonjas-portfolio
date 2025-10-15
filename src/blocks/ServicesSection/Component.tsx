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
    <section className={cn('relative bg-white py-20 md:py-28', className)}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255 117 24 / 0.05) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="relative container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-brand-orange rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            {title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services?.map((service, index) => (
            <div
              key={index}
              className="group relative bg-brand-snow hover:bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-brand-orange/20"
            >
              {/* Icon circle with number */}
              <div className="absolute -top-4 left-8">
                <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
              </div>
              
              {/* Orange accent bar */}
              <div className="w-0 group-hover:w-12 h-1 bg-brand-orange transition-all duration-300 mb-6" />
              
              <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-3 mt-4">
                {service.title}
              </h3>
              {service.description && (
                <p className="text-brand-text leading-relaxed">
                  {service.description}
                </p>
              )}
              
              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 right-0 w-full h-full bg-brand-orange/5 rounded-tl-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

