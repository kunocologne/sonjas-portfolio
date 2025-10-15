import type { FooterSectionBlock as FooterSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import React from 'react'
import Link from 'next/link'

export const FooterSectionBlock: React.FC<
  FooterSectionProps & {
    id?: string | number
    className?: string
  }
> = ({ className, copyrightText, links }) => {
  return (
    <footer className={cn('relative bg-brand-neutral border-t-4 border-brand-orange/20', className)}>
      <div className="container mx-auto px-4 py-12">
        {/* Decorative top accent */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-1">
            <div className="w-1 h-8 bg-brand-orange rounded-full" />
            <div className="w-1 h-8 bg-brand-orange/60 rounded-full" />
            <div className="w-1 h-8 bg-brand-orange/30 rounded-full" />
          </div>
        </div>
        
        <div className="text-center space-y-6">
          {/* Links */}
          {links && links.length > 0 && (
            <nav className="flex flex-wrap items-center justify-center gap-6 text-base">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url || '#'}
                  className="text-brand-text hover:text-brand-orange font-medium transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-brand-orange transition-all duration-300" />
                </Link>
              ))}
            </nav>
          )}
          
          {/* Copyright */}
          <div className="text-brand-text/70 text-sm">
            {copyrightText}
          </div>
          
          {/* Bottom decorative line */}
          <div className="flex justify-center pt-4">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  )
}

