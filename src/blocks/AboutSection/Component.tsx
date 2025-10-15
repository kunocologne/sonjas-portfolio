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
    <section className={cn('bg-brand-neutral py-16', className)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {image && typeof image !== 'string' && (
            <div className="flex-shrink-0">
              <Media
                resource={image}
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-brand-snow shadow-lg"
                imgClassName="rounded-full"
              />
            </div>
          )}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-brand-dark mb-4">
              {title}
            </h2>
            <p className="text-brand-text text-base md:text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

