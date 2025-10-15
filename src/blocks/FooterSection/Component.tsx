import type { FooterSectionBlock as FooterSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const FooterSectionBlock: React.FC<
  FooterSectionProps & {
    id?: string | number
    className?: string
  }
> = ({ className, copyrightText, links }) => {
  return (
    <footer className={cn('relative bg-gradient-to-b from-brand-neutral to-brand-snow pb-0', className)}>
      <div className="h-px bg-gradient-to-r from-transparent via-brand-neutral to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-16 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
            
            {/* Branding */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <Link href="/" className="inline-block group">
                <Image 
                  src="/wordmark.svg" 
                  alt="Sonja Werner" 
                  width={160} 
                  height={40}
                  className="h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </Link>
              <p className="text-sm text-brand-text/60 max-w-xs text-center md:text-left">
                Ganztherapeutische Behandlung für Ihr Wohlbefinden
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-col items-center md:items-end gap-4">
              {links && links.length > 0 && (
                <nav className="flex flex-wrap gap-6 justify-center md:justify-end">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url || '#'}
                      className="group relative text-sm font-medium text-brand-text hover:text-brand-dark transition-colors duration-300"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-dark group-hover:w-full transition-all duration-300" />
                    </Link>
                  ))}
                </nav>
              )}
              
              {/* Instagram only */}
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/beratung_sonjawerner?igsh=MWxuMHN0dGFlMzgxMw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white border border-brand-neutral rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-brand-text/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-brand-text/60">
                {copyrightText}
              </p>
              <p className="text-sm text-brand-text/50">
                Mit ❤️ gestaltet
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
