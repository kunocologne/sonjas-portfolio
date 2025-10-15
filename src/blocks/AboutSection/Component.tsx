import type { AboutSectionBlock as AboutSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import React from 'react'

export const AboutSectionBlock: React.FC<
  AboutSectionProps & {
    id?: string | number
    className?: string
  }
> = ({ className, title, description }) => {

  return (
    <section id="about" className={cn('relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-brand-neutral/30 via-white to-white', className)}>
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Title with decorative line */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-dark max-w-3xl mx-auto mb-8">
            {title}
          </h2>
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 md:w-32 h-px bg-gradient-to-r from-transparent via-brand-orange to-brand-orange" />
            <div className="w-2 h-2 rounded-full bg-brand-orange" />
            <div className="w-20 md:w-32 h-px bg-gradient-to-l from-transparent via-brand-orange to-brand-orange" />
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto space-y-10">
          
          {/* Description card with red gradient background */}
          <div className="relative bg-gradient-to-br from-brand-dark via-brand-text to-brand-dark rounded-3xl p-8 md:p-12 lg:p-14 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative text-center">
              <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-light">
                {description}
              </p>
            </div>
          </div>

          {/* 3 Professional cards with brand colors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 lg:gap-8">
            {[
              {
                title: 'Physiotherapie',
                description: 'Beckenbodentherapie, Schmerzbehandlung und ganzheitliche Körperarbeit',
                detailedDescription: 'Ich begleite Sie mit gezielten Übungen und manuellen Techniken bei Beckenbodentherapie, chronischen Schmerzen und körperlichen Beschwerden. Mein Ansatz kombiniert traditionelle Physiotherapie mit modernen ganzheitlichen Methoden.',
                gradient: 'from-brand-snow to-brand-neutral',
                icon: '🌿',
                image: '/therapy-image.jpg',
                features: ['Beckenbodentherapie', 'Manuelle Therapie', 'Schmerzbehandlung', 'Ganzheitliche Körperarbeit']
              },
              {
                title: 'Sexualberatung',
                description: 'Einzelberatung und Paartherapie für erfüllte Intimität',
                detailedDescription: 'In einem geschützten Raum unterstütze ich Sie dabei, Ihre Sexualität bewusst zu erleben und zu gestalten. Gemeinsam arbeiten wir an Kommunikation, Vertrauen und erfüllter Intimität in Ihrer Partnerschaft.',
                gradient: 'from-brand-neutral to-brand-snow',
                icon: '💫',
                image: '/sexualberatung-image.jpg',
                features: ['Einzelberatung', 'Paartherapie', 'Kommunikationstraining', 'Vertrauensaufbau']
              },
              {
                title: 'Achtsamkeit',
                description: 'Körperwahrnehmung, Entspannung und innere Balance',
                detailedDescription: 'Durch achtsame Körperwahrnehmung lernen Sie, Signale Ihres Körpers besser zu verstehen und Stress abzubauen. Wir entwickeln gemeinsam individuelle Entspannungs- und Achtsamkeitstechniken.',
                gradient: 'from-brand-snow to-brand-neutral',
                icon: '✨',
                image: '/achtsamkeit-image.jpg',
                features: ['Körperwahrnehmung', 'Stressreduktion', 'Entspannungstechniken', 'Meditation & Atemübungen']
              },
            ].map((item, i) => (
              <div
                key={i}
                className={cn(
                  'group relative overflow-hidden rounded-2xl border border-brand-neutral/30 hover:border-brand-orange transition-all duration-300 hover:shadow-lg hover:-translate-y-1 min-h-[380px] bg-white/80 backdrop-blur-sm',
                  isVisible ? 'opacity-100 translate-y-0 animate-fadeInUp' : 'opacity-0 translate-y-10'
                )}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              >
                {/* Subtle background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-brand-snow/50 to-brand-neutral/20" />
                
                {/* Content */}
                <div className="relative p-6 sm:p-8 lg:p-8 space-y-4 h-full flex flex-col">
                  {/* Header with icon */}
                  <div className="flex items-center gap-3">
                    <div className="text-3xl sm:text-4xl">
                      {item.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-brand-dark">
                      {item.title}
                    </h3>
                  </div>

                  {/* Image */}
                  <div className="w-full h-32 rounded-xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-brand-text/80 leading-relaxed flex-1">
                    {item.detailedDescription}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-brand-dark">Schwerpunkte:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="text-sm text-brand-text/70 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Subtle accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-brand-orange/5 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div className={cn(
            'grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-gradient-to-br from-brand-neutral to-brand-snow rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-brand-neutral shadow-lg transition-all duration-700 delay-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            <div className="text-center space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark">500+</div>
              <div className="text-xs sm:text-sm text-brand-text/60 font-medium">Klienten</div>
            </div>
            <div className="text-center space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark">10+</div>
              <div className="text-xs sm:text-sm text-brand-text/60 font-medium">Jahre</div>
            </div>
            <div className="text-center space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark">100%</div>
              <div className="text-xs sm:text-sm text-brand-text/60 font-medium">Vertraulich</div>
            </div>
            <div className="text-center space-y-1 sm:space-y-2">
              <div className="flex items-center justify-center gap-0.5 text-brand-orange">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-xs sm:text-sm text-brand-text/60 font-medium">Bewertung</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
