import type { AboutSectionBlock as AboutSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const AboutSectionBlock: React.FC<
  AboutSectionProps & {
    id?: string | number
    className?: string
  }
> = ({ className, title, description, image }) => {
  return (
    <section id="about" className={cn('relative pt-20 md:pt-28 lg:pt-36 pb-20 md:pb-28 lg:pb-36 bg-brand-neutral', className)}>
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-dark mb-6 max-w-4xl">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-brand-text/80 max-w-3xl">
            {description}
          </p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Main card with image and content */}
          <div className="relative bg-gradient-to-br from-brand-orange to-brand-dark rounded-3xl overflow-hidden p-8 md:p-10 lg:p-12 text-white">
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                Professionelle Begleitung für Ihr Wohlbefinden
              </h3>
              <ul className="space-y-4">
                {[
                  'Individuelle und einfühlsame Betreuung',
                  'Ganzheitlicher therapeutischer Ansatz',
                  'Langjährige Erfahrung und Expertise',
                  'Vertrauensvolle Atmosphäre'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-orange rounded-full font-semibold hover:bg-brand-snow transition-all duration-300 mt-4"
              >
                Termin vereinbaren
              </Link>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-dark/20 rounded-full -ml-32 -mb-32 blur-3xl" />
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-4xl font-bold text-brand-dark mb-2">500+</h3>
              <p className="text-brand-text/70">Zufriedene Klienten</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-4xl font-bold text-brand-dark mb-2">10+</h3>
              <p className="text-brand-text/70">Jahre Erfahrung</p>
            </div>

            {/* Card 3 - Portrait */}
            <div className="sm:col-span-2 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src="/portrait.jpg"
                    alt="Sonja Werner"
                    fill
                    className="rounded-full object-cover ring-4 ring-brand-orange/20"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Sonja Werner</h4>
                  <p className="text-brand-text/70 mb-3">Zertifizierte Therapeutin</p>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {['Physiotherapie', 'Sexualberatung', 'Achtsamkeit'].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-brand-snow text-brand-text text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
