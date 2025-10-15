import { ContactSectionBlock } from '@/blocks/ContactSection/Component'
import { HeroSectionBlock } from '@/blocks/HeroSection/Component'
import { AboutSectionBlock } from '@/blocks/AboutSection/Component'

export default function HomePage() {
  return (
    <div>
      <div style={{ backgroundColor: 'red', color: 'white', padding: '20px', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>TEST: Fixed AboutSection</h1>
        <p>Fixed isVisible reference. Testing all sections now.</p>
      </div>
      
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
    </div>
  )
}

export async function generateMetadata() {
  return {
    title: 'Sonja Werner - Physiotherapie & Sexualberatung',
    description: 'Ganzheitliche Physiotherapie und Sexualberatung für mehr Körperbewusstsein, Wohlbefinden und erfüllte Sexualität.',
  }
}
