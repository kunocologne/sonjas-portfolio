import { HeroSectionBlock } from '@/blocks/HeroSection/Component'
import { ContactSectionBlock } from '@/blocks/ContactSection/Component'

export default function HomePage() {
  return (
    <div>
      <div style={{ backgroundColor: 'red', color: 'white', padding: '20px', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>TEST: AboutSection causes white page</h1>
        <p>Testing ContactSection instead. AboutSection has an issue.</p>
      </div>
      
      <HeroSectionBlock
        blockType="heroSection"
        headline="Ganzheitliche Physiotherapie & Sexualberatung"
        subline="Für mehr Bewusstsein, Heilung und Verbindung mit deinem Körper."
        buttonText="Termin vereinbaren"
        buttonLink="#contact"
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
    </div>
  )
}

export async function generateMetadata() {
  return {
    title: 'Sonja Werner - Physiotherapie & Sexualberatung',
    description: 'Ganzheitliche Physiotherapie und Sexualberatung für mehr Körperbewusstsein, Wohlbefinden und erfüllte Sexualität.',
  }
}
