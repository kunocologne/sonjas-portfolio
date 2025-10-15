export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'red', color: 'white', padding: '20px' }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>SIMPLE TEST</h1>
      <p style={{ fontSize: '24px' }}>If you can see this red page, the basic rendering works.</p>
      <p style={{ fontSize: '24px' }}>If you see white, there's a fundamental issue.</p>
    </div>
  )
}

export async function generateMetadata() {
  return {
    title: 'Sonja Werner - Physiotherapie & Sexualberatung',
    description: 'Ganzheitliche Physiotherapie und Sexualberatung für mehr Körperbewusstsein, Wohlbefinden und erfüllte Sexualität.',
  }
}
