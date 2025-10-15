import type { ContactSectionBlock as ContactSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import Link from 'next/link'
import React from 'react'

export const ContactSectionBlock: React.FC<
  ContactSectionProps & {
    id?: string | number
    className?: string
  }
> = ({ className, headline, description, buttonText, buttonLink }) => {

  return (
    <section id="contact" className={cn('relative py-20 md:py-28 lg:py-36 overflow-hidden', className)}>
      {/* Enhanced gradient background with better visual depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange via-brand-orange to-brand-dark" />
      <div className="absolute inset-0 bg-gradient-to-tl from-brand-dark/30 via-transparent to-brand-orange/20" />
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3Ccircle cx='15' cy='15' r='1'/%3E%3Ccircle cx='45' cy='45' r='1.5'/%3E%3Ccircle cx='15' cy='45' r='1'/%3E%3Ccircle cx='45' cy='15' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="relative container mx-auto px-6 lg:px-16">
        <div className="max-w-6xl mx-auto text-center text-white space-y-10 relative">
          {/* Floating elements for visual interest */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse animation-delay-2000" />
          
          {/* Enhanced CTA Content */}
          <div className="relative z-10 text-center space-y-10">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Bereit für den nächsten Schritt?
              </h2>
              <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto font-light">
                Lassen Sie uns gemeinsam an Ihrer Gesundheit und Ihrem Wohlbefinden arbeiten. Vereinbaren Sie noch heute Ihr persönliches Beratungsgespräch.
              </p>
            </div>

            {/* Enhanced CTA Button */}
            <div className="pt-6">
              <Link
                href="mailto:kontakt.sonja.werner@outlook.de"
                className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 md:px-16 md:py-8 bg-white hover:bg-brand-snow text-brand-orange rounded-3xl font-bold text-xl md:text-2xl transition-all duration-500 shadow-2xl hover:shadow-3xl hover:scale-[1.03] overflow-hidden focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-4 focus:ring-offset-brand-orange border-2 border-white/30 backdrop-blur-sm"
                aria-label={`${buttonText} - E-Mail: kontakt.sonja.werner@outlook.de`}
              >
                {/* Enhanced animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/15 via-white/10 to-brand-orange/15 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" aria-hidden="true" />
                
                <span className="relative z-10 tracking-wide">{buttonText}</span>
                <svg className="relative z-10 w-7 h-7 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}