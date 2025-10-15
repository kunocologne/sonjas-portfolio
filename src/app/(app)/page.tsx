import { HeroSectionBlock } from '@/blocks/HeroSection/Component'

export default function HomePage() {
  return (
    <div>
      <div style={{ backgroundColor: 'red', color: 'white', padding: '20px', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>TEST: Adding HeroSection</h1>
        <p>If you see this red box + HeroSection below, HeroSection works.</p>
      </div>
      
      <HeroSectionBlock
        blockType="heroSection"
        headline="Ganzheitliche Physiotherapie & Sexualberatung"
        subline="Für mehr Bewusstsein, Heilung und Verbindung mit deinem Körper."
        buttonText="Termin vereinbaren"
        buttonLink="#contact"
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
