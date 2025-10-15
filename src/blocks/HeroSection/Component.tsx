import type { HeroSectionBlock as HeroSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import React from 'react'
import Link from 'next/link'

export const HeroSectionBlock: React.FC<
  HeroSectionProps & {
    id?: string | number
    className?: string
  }
> = ({ className, headline, subline, buttonText, buttonLink }) => {
  return (
    <section className={cn('bg-brand-snow text-brand-text text-center py-20 space-y-6', className)}>
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-brand-dark leading-tight">
          {headline}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-brand-text/90">
          {subline}
        </p>
        <div className="pt-4">
          <Link
            href={buttonLink || '#contact'}
            className="inline-block bg-brand-orange hover:bg-brand-dark text-brand-snow px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  )
}

