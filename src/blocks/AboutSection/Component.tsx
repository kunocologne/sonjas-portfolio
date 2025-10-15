import type { AboutSectionBlock as AboutSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import React from 'react'
import { Media } from '@/components/Media'

export const AboutSectionBlock: React.FC<
  AboutSectionProps & {
    id?: string | number
    className?: string
  }
> = ({ className, title, description, image }) => {
  return (
    <section className={cn('relative bg-brand-neutral py-20 md:py-28', className)}>
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-brand-orange/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-brand-dark/10 rounded-full blur-2xl" />
      
      <div className="relative container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-5xl mx-auto">
          {image && typeof image !== 'string' && (
            <div className="flex-shrink-0 relative group">
              {/* Orange accent behind image */}
              <div className="absolute inset-0 bg-brand-orange rounded-full transform scale-110 opacity-20 group-hover:opacity-30 transition-opacity" />
              <Media
                resource={image}
                className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-8 border-white shadow-2xl ring-4 ring-brand-orange/20"
                imgClassName="rounded-full"
              />
            </div>
          )}
          <div className="text-center md:text-left flex-1">
            {/* Accent line */}
            <div className={cn("w-16 h-1 bg-brand-orange rounded-full mb-6", image ? "mx-auto md:mx-0" : "mx-auto")}>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-brand-text text-lg md:text-xl leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

