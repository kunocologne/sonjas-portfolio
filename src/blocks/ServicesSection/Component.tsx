'use client'
import type { ServicesSectionBlock as ServicesSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
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

  const serviceIcons = [
    <svg key="1" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>,
    <svg key="2" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
    </svg>,
    <svg key="3" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>,
  ]

  return (
    <section className={cn('relative py-16 md:py-24 lg:py-32 bg-white', className)}>
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Single Title - No redundancy */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-dark max-w-4xl mx-auto">
            {title}
          </h2>
        </div>

        {/* Interesting Services Grid with overlapping design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services?.map((service, index) => (
            <div
              key={index}
              ref={el => { cardsRef.current[index] = el }}
              className={cn(
                'group relative transition-all duration-700',
                visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card with hover effect */}
              <div className="relative bg-white rounded-3xl p-8 lg:p-10 border-2 border-brand-neutral hover:border-brand-text/30 transition-all duration-500 hover:shadow-2xl h-full">
                
                {/* Large decorative number in background */}
                <div className="absolute top-6 right-6 text-[120px] font-bold text-brand-snow leading-none select-none">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="relative space-y-6">
                  {/* Icon with animated background */}
                  <div className="relative inline-flex">
                    <div className="absolute inset-0 bg-brand-snow rounded-2xl group-hover:scale-110 transition-transform duration-500" />
                    <div className="relative w-20 h-20 bg-gradient-to-br from-white to-brand-snow rounded-2xl flex items-center justify-center text-brand-text border-2 border-brand-neutral group-hover:border-brand-text/30 transition-all duration-500">
                      {serviceIcons[index]}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-brand-dark leading-tight pr-8">
                    {service.title}
                  </h3>

                  {/* Description */}
                  {service.description && (
                    <p className="text-brand-text/70 leading-relaxed">
                      {service.description}
                    </p>
                  )}

                  {/* Subtle hover indicator */}
                  <div className="h-1 w-0 bg-brand-dark group-hover:w-16 transition-all duration-500 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
