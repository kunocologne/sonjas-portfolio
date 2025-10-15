import { AboutSectionBlock } from '@/blocks/AboutSection/Component'
import { HeroSectionBlock } from '@/blocks/HeroSection/Component'

export default function HomePage() {
  return (
    <div>
      <div style={{ backgroundColor: 'red', color: 'white', padding: '20px', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>TEST: Adding AboutSection</h1>
        <p>HeroSection works! Now testing AboutSection with the 3 cards.</p>
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
    </div>
  )
}

export async function generateMetadata() {
  return {
    title: 'Sonja Werner - Physiotherapie & Sexualberatung',
    description: 'Ganzheitliche Physiotherapie und Sexualberatung für mehr Körperbewusstsein, Wohlbefinden und erfüllte Sexualität.',
  }
}
