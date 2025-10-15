import Link from 'next/link'
import React from 'react'

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white pt-20 pb-12">
      <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
        {/* Back Arrow */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-brand-text/60 hover:text-brand-orange transition-colors duration-200 mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück zur Startseite
        </Link>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-brand-dark mb-8">Impressum</h1>
          
          <div className="space-y-6 text-brand-text/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">Angaben gemäß § 5 TMG</h2>
              <p>
                <strong>Sonja Werner</strong><br />
                Physiotherapeutin & Sexualberaterin<br />
                [Straße und Hausnummer]<br />
                [PLZ] [Ort]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">Kontakt</h2>
              <p>
                Telefon: [Telefonnummer]<br />
                E-Mail: kontakt.sonja.werner@outlook.de
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">Berufsbezeichnung</h2>
              <p>
                Physiotherapeutin<br />
                Verliehen in: Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                [Umsatzsteuer-ID]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>
                Sonja Werner<br />
                [Straße und Hausnummer]<br />
                [PLZ] [Ort]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">Haftungsausschluss</h2>
              
              <h3 className="text-xl font-medium text-brand-dark mb-3">Haftung für Inhalte</h3>
              <p>
                Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>

              <h3 className="text-xl font-medium text-brand-dark mb-3 mt-6">Haftung für Links</h3>
              <p>
                Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>

              <h3 className="text-xl font-medium text-brand-dark mb-3 mt-6">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
