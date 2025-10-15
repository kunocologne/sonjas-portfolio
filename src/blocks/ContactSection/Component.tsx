import type { ContactSectionBlock as ContactSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import React from 'react'
import Link from 'next/link'

export const ContactSectionBlock: React.FC<
  ContactSectionProps & {
    id?: string | number
    className?: string
  }
> = ({ className, headline, description, buttonText, buttonLink, email, phone }) => {
  return (
    <section id="contact" className={cn('bg-brand-orange text-brand-snow py-20 text-center space-y-6', className)}>
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold">
          {headline}
        </h2>
        <p className="text-lg md:text-xl text-brand-snow/95">
          {description}
        </p>
        
        {(email || phone) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-brand-snow/90">
            {email && (
              <a href={`mailto:${email}`} className="hover:text-brand-snow transition-colors">
                {email}
              </a>
            )}
            {email && phone && <span className="hidden sm:inline">|</span>}
            {phone && (
              <a href={`tel:${phone}`} className="hover:text-brand-snow transition-colors">
                {phone}
              </a>
            )}
          </div>
        )}

        <div className="pt-4">
          <Link
            href={buttonLink || '#'}
            className="inline-block bg-brand-snow text-brand-orange hover:bg-brand-neutral px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  )
}

