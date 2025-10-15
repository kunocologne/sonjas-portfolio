import type { AboutSectionBlock as AboutSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import Image from 'next/image'
import React from 'react'

export const AboutSectionBlock: React.FC<
  AboutSectionProps & {
    id?: string | number
    className?: string
  }
> = ({ className, title, description }) => {

  return (
    <section id="about" className={cn('relative py-16 md:py-24 lg:py-32 overflow-hidden', className)}>
      {/* Colorful gradient background with texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/40 via-brand-neutral/40 to-brand-snow/40" />
      <div className="absolute inset-0 bg-gradient-to-tl from-brand-neutral/30 via-transparent to-brand-orange/20" />
      
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="relative container mx-auto px-6 lg:px-16">
        
        {/* Title with decorative line */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-dark max-w-3xl mx-auto mb-8">
            {title}
          </h2>
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4" aria-hidden="true">
            <div className="w-20 md:w-32 h-px bg-gradient-to-r from-transparent via-brand-orange to-brand-orange" />
            <div className="w-2 h-2 rounded-full bg-brand-orange" />
            <div className="w-20 md:w-32 h-px bg-gradient-to-l from-transparent via-brand-orange to-brand-orange" />
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto space-y-10">
          
          {/* Description card with red gradient background */}
          <div className="relative bg-gradient-to-br from-brand-dark via-brand-text to-brand-dark rounded-3xl p-8 md:p-12 lg:p-14 overflow-hidden">
            <div className="relative text-center">
              <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-light">
                {description}
              </p>
            </div>
          </div>

          {/* Holistic Perspective */}
          <div className="text-center max-w-6xl mx-auto bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-brand-neutral/20 shadow-lg">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              Mein ganzheitlicher Ansatz
            </h3>
            <p className="text-lg md:text-xl text-brand-text/80 leading-relaxed mb-8">
              Ich betrachte Gesundheit und Wohlbefinden aus einer ganzheitlichen Perspektive. Für mich gibt es drei zentrale Dimensionen, die untrennbar miteinander verbunden sind:
            </p>
            
            {/* Three dimensions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-brand-orange to-brand-dark rounded-2xl flex items-center justify-center">
                  <span className="text-2xl text-white">🧠</span>
                </div>
                <h4 className="text-lg font-bold text-brand-dark">Körper</h4>
                <p className="text-sm text-brand-text/70 leading-relaxed">
                  Physiologische Gesundheit, Bewegung und körperliche Funktionen
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-brand-orange to-brand-dark rounded-2xl flex items-center justify-center">
                  <span className="text-2xl text-white">💭</span>
                </div>
                <h4 className="text-lg font-bold text-brand-dark">Geist</h4>
                <p className="text-sm text-brand-text/70 leading-relaxed">
                  Emotionale Balance, Stressbewältigung und mentale Klarheit
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-brand-orange to-brand-dark rounded-2xl flex items-center justify-center">
                  <span className="text-2xl text-white">💖</span>
                </div>
                <h4 className="text-lg font-bold text-brand-dark">Seele</h4>
                <p className="text-sm text-brand-text/70 leading-relaxed">
                  Verbindung, Sinnhaftigkeit und spirituelles Wohlbefinden
                </p>
              </div>
            </div>
            
            <p className="text-base md:text-lg text-brand-text/70 leading-relaxed mt-8 font-medium">
              Nur wenn alle drei Dimensionen im Einklang sind, entsteht wahres Wohlbefinden und nachhaltige Gesundheit.
            </p>
          </div>

          {/* Transition text to offers */}
          <div className="text-center max-w-3xl mx-auto relative z-50">
            <div className="bg-gradient-to-br from-brand-orange/80 via-brand-orange to-brand-dark/90 rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-white/20">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                Meine Angebote
              </h3>
              <div className="flex items-center justify-center gap-4 relative z-10" aria-hidden="true">
                <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-white to-white/80" />
                <div className="w-3 h-3 rounded-full bg-white shadow-lg" />
                <div className="w-16 md:w-24 h-1 bg-gradient-to-l from-transparent via-white to-white/80" />
              </div>
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
                className="group relative overflow-hidden rounded-2xl border-2 border-brand-dark/20 hover:border-brand-orange transition-all duration-300 hover:shadow-lg hover:-translate-y-1 min-h-[380px] bg-white/80 backdrop-blur-sm"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Subtle background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-brand-snow/50 to-brand-neutral/30" />
                
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
                  <div className="relative w-full h-32 rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-brand-text/80 leading-relaxed flex-1">
                    {item.detailedDescription}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-brand-dark">Schwerpunkte:</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-brand-text/80 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-brand-orange rounded-full flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Subtle accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-brand-orange/5 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-brand-neutral shadow-lg max-w-6xl mx-auto">
            <div className="text-center space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark">3+</div>
              <div className="text-xs sm:text-sm text-brand-text/60 font-medium">Jahre Erfahrung</div>
            </div>
            <div className="text-center space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark">50+</div>
              <div className="text-xs sm:text-sm text-brand-text/60 font-medium">Zufriedene Klienten</div>
            </div>
            <div className="text-center space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark">100%</div>
              <div className="text-xs sm:text-sm text-brand-text/60 font-medium">Individuell</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
