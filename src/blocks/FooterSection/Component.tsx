import type { FooterSectionBlock as FooterSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export const FooterSectionBlock: React.FC<
  FooterSectionProps & {
    id?: string | number
    className?: string
  }
> = ({ className, copyrightText, links }) => {
  return (
    <footer className={cn('relative bg-gradient-to-b from-brand-neutral to-brand-snow', className)}>
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-16 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Main footer grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
            
            {/* Column 1 - Branding */}
            <div className="space-y-6">
              <Link href="/" className="inline-block group">
                <Image 
                  src="/wordmark.svg" 
                  alt="Sonja Werner" 
                  width={160} 
                  height={40}
                  className="h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </Link>
              <p className="text-brand-text/70 leading-relaxed">
                Ganzheitliche Physiotherapie und Sexualberatung für Ihr Wohlbefinden und Ihre Gesundheit.
              </p>
              {/* Social icons placeholder */}
              <div className="flex gap-3">
                {['instagram', 'linkedin', 'mail'].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      {social === 'instagram' && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />}
                      {social === 'linkedin' && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />}
                      {social === 'mail' && <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-brand-dark">Schnellzugriff</h4>
              <ul className="space-y-3">
                {['Über mich', 'Leistungen', 'Preise', 'Kontakt'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-brand-text/70 hover:text-brand-orange font-medium transition-colors duration-300 inline-flex items-center gap-2 group">
                      <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Legal Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-brand-dark">Rechtliches</h4>
              <ul className="space-y-3">
                {links && links.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.url || '#'} 
                      className="text-brand-text/70 hover:text-brand-orange font-medium transition-colors duration-300 inline-flex items-center gap-2 group"
                    >
                      <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-brand-text/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-brand-text/60">
                {copyrightText}
              </p>
              <p className="text-sm text-brand-text/50">
                Gestaltet mit ❤️ für Ihr Wohlbefinden
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
