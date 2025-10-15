import type { FooterSectionBlock as FooterSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import Link from 'next/link'
import React from 'react'

export const FooterSectionBlock: React.FC<
  FooterSectionProps & {
    id?: string | number
    className?: string
  }
> = ({ className, copyrightText, links }) => {
  return (
    <footer className={cn('relative bg-brand-neutral border-t border-brand-neutral', className)}>
      <div className="container mx-auto px-6 lg:px-16 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left - Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="text-brand-text/70 text-sm">
              {copyrightText}
            </div>
          </div>

          {/* Right - Links */}
          {links && links.length > 0 && (
            <nav className="flex flex-wrap items-center gap-8">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url || '#'}
                  className="group relative text-sm font-medium text-brand-text hover:text-brand-orange transition-colors duration-300"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>
          )}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-8 pt-8 border-t border-brand-text/10">
          <p className="text-center text-sm text-brand-text/50">
            Mit ❤️ gestaltet für Ihr Wohlbefinden
          </p>
        </div>
      </div>
    </footer>
  )
}
