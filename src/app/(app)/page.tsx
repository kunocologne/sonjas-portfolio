import { AboutSectionBlock } from '@/blocks/AboutSection/Component'
import { ContactSectionBlock } from '@/blocks/ContactSection/Component'
import { FooterSectionBlock } from '@/blocks/FooterSection/Component'
import { HeroSectionBlock } from '@/blocks/HeroSection/Component'

export default function HomePage() {
  return (
    <>
      <HeroSectionBlock
        blockType="heroSection"
        headline="Ganzheitliche Physiotherapie & Sexualberatung"
        subline="Für mehr Bewusstsein, Heilung und Verbindung mit deinem Körper."
        buttonText="Termin vereinbaren"
        buttonLink="#contact"
      />

      <AboutSectionBlock
        blockType="aboutSection"
        title="Über mich"
        description="Ich begleite Menschen auf ihrem Weg zu mehr Körperbewusstsein, Wohlbefinden und erfüllter Sexualität – mit Empathie, Erfahrung und einem ganzheitlichen Blick."
        image={null}
      />

      <ContactSectionBlock
        blockType="contactSection"
        headline="Bereit für Veränderung?"
        description="Ich freue mich auf deine Anfrage oder Terminvereinbarung."
        buttonText="Kontakt aufnehmen"
        buttonLink="mailto:kontakt.sonja.werner@outlook.de"
        email="kontakt.sonja.werner@outlook.de"
        phone={null}
      />

      <FooterSectionBlock
        blockType="footerSection"
        copyrightText="© 2025 Sonja Werner"
        links={[
          { label: 'Impressum', url: '/impressum' },
          { label: 'Datenschutz', url: '/datenschutz' },
        ]}
      />
    </>
  )
}

export async function generateMetadata() {
  return {
    title: 'Sonja Werner - Physiotherapie & Sexualberatung',
    description: 'Ganzheitliche Physiotherapie und Sexualberatung für mehr Körperbewusstsein, Wohlbefinden und erfüllte Sexualität.',
  }
}
