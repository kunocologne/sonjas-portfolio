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
    <section className={cn('bg-brand-snow py-16 text-center', className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-dark mb-12">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services?.map((service, index) => (
            <div
              key={index}
              className="bg-brand-neutral border border-brand-neutral hover:border-brand-orange p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-xl font-semibold text-brand-dark mb-2">
                {service.title}
              </h3>
              {service.description && (
                <p className="text-brand-text/80 text-sm leading-relaxed">
                  {service.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

