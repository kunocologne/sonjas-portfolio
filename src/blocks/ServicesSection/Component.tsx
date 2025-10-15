'use client'
import type { ServicesSectionBlock as ServicesSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

export const ServicesSectionBlock: React.FC<
  ServicesSectionProps & {
    id?: string | number
    className?: string
  }
> = ({ className, title, services }) => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setVisibleCards(prev => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    cardsRef.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [services])

  const serviceDetails = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ]

  return (
    <section className={cn('relative py-16 md:py-24 lg:py-32 bg-white', className)}>
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <span className="inline-block px-4 py-2 bg-brand-snow border border-brand-neutral text-brand-text/80 rounded-full text-sm font-semibold mb-4">
            Leistungen
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-dark max-w-3xl mx-auto mb-4">
            {title}
          </h2>
          <p className="text-lg text-brand-text/60 max-w-2xl mx-auto">
            Maßgeschneiderte Begleitung für Ihre individuellen Bedürfnisse
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services?.map((service, index) => (
            <div
              key={index}
              ref={el => { cardsRef.current[index] = el }}
              className={cn(
                'group relative bg-gradient-to-b from-white to-brand-snow rounded-3xl overflow-hidden border-2 border-brand-neutral hover:border-brand-text/30 transition-all duration-700 hover:shadow-2xl hover:-translate-y-1',
                visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-text/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative p-8 lg:p-10 space-y-6">
                {/* Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 bg-brand-snow border border-brand-neutral rounded-2xl flex items-center justify-center text-brand-text transition-all duration-500 group-hover:scale-105 group-hover:bg-white">
                    {serviceDetails[index]?.icon}
                  </div>
                  <span className="text-5xl font-bold text-brand-neutral group-hover:text-brand-text/10 transition-colors duration-500">
                    {index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-brand-dark group-hover:text-brand-text transition-colors duration-500 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                {service.description && (
                  <p className="text-brand-text/70 leading-relaxed text-base transition-colors duration-500">
                    {service.description}
                  </p>
                )}

                {/* Learn more link */}
                <div className="flex items-center gap-2 text-brand-dark font-semibold pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-0 -translate-x-4">
                  <span className="text-sm">Mehr erfahren</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-brand-text/60 mb-4">
            Nicht sicher, welche Behandlung für Sie geeignet ist?
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-brand-dark hover:text-brand-text font-semibold transition-colors duration-300"
          >
            Lassen Sie uns sprechen
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
