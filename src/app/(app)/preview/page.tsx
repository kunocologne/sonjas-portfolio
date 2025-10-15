'use client'

import { AboutSectionBlock } from '@/blocks/AboutSection/Component'
import { ContactSectionBlock } from '@/blocks/ContactSection/Component'
import { FooterSectionBlock } from '@/blocks/FooterSection/Component'
import { HeroSectionBlock } from '@/blocks/HeroSection/Component'
import { ServicesSectionBlock } from '@/blocks/ServicesSection/Component'

export default function PreviewPage() {
  return (
    <>
      <HeroSectionBlock
        headline="Ganzheitliche Physiotherapie & Sexualberatung"
        subline="Für mehr Bewusstsein, Heilung und Verbindung mit deinem Körper."
        buttonText="Termin vereinbaren"
        buttonLink="#contact"
      />

      <AboutSectionBlock
        title="Über mich"
        description="Ich begleite Menschen auf ihrem Weg zu mehr Körperbewusstsein, Wohlbefinden und erfüllter Sexualität – mit Empathie, Erfahrung und einem ganzheitlichen Blick."
        image={null}
      />

      <ServicesSectionBlock
        title="Angebot"
        services={[
          {
            title: 'Physiotherapie',
            description: 'Ganzheitliche Behandlung für Körper und Seele',
          },
          {
            title: 'Sexualberatung',
            description: 'Einfühlsame Begleitung für mehr Intimität',
          },
          {
            title: 'Körperarbeit & Achtsamkeit',
            description: 'Bewusste Körperwahrnehmung',
          },
        ]}
      />

      <ContactSectionBlock
        headline="Bereit für Veränderung?"
        description="Ich freue mich auf deine Anfrage oder Terminvereinbarung."
        buttonText="Kontakt aufnehmen"
        buttonLink="mailto:kontakt@example.com"
        email="kontakt@example.com"
        phone={null}
      />

      <FooterSectionBlock
        copyrightText="© 2025 Sonja Werner"
        links={[
          { label: 'Impressum', url: '/impressum' },
          { label: 'Datenschutz', url: '/datenschutz' },
        ]}
      />
    </>
  )
}

