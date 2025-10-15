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
    <footer className={cn('relative bg-gradient-to-b from-brand-neutral to-brand-snow border-t border-brand-neutral', className)}>
      <div className="container mx-auto px-6 lg:px-16 py-16">
        {/* Top decorative element */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-brand-orange to-transparent" />
            <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="w-16 h-px bg-gradient-to-l from-transparent via-brand-orange to-transparent" />
            <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-4xl mx-auto">
          {/* Copyright */}
          <div className="text-brand-text/70 text-sm md:text-base">
            {copyrightText}
          </div>
          
          {/* Links */}
          {links && links.length > 0 && (
            <nav className="flex flex-wrap gap-8 justify-center">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url || '#'}
                  className="group relative text-sm md:text-base text-brand-text hover:text-brand-orange font-medium transition-colors duration-300"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>
          )}
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-12">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />
        </div>
      </div>
    </footer>
  )
}
