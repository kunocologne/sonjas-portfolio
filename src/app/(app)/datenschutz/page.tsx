import Link from 'next/link'
import React from 'react'

export default function DatenschutzPage() {
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
          <h1 className="text-4xl font-bold text-brand-dark mb-8">Datenschutzerklärung</h1>
          
          <div className="space-y-6 text-brand-text/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-xl font-medium text-brand-dark mb-3">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">2. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-xl font-medium text-brand-dark mb-3">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>

              <h3 className="text-xl font-medium text-brand-dark mb-3">Wie erfassen wir Ihre Daten?</h3>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">3. Hosting</h2>
              <p>
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              <p>
                <strong>Vercel Inc.</strong><br />
                San Francisco, CA 94105<br />
                USA
              </p>
              <p>
                Die Erfassung und Verarbeitung Ihrer Daten erfolgt ausschließlich in Deutschland und unterliegt den strengen deutschen und europäischen Datenschutzgesetzen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">4. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-xl font-medium text-brand-dark mb-3">Datenschutz</h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-medium text-brand-dark mb-3">Hinweis zur verantwortlichen Stelle</h3>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p>
                <strong>Sonja Werner</strong><br />
                [Straße und Hausnummer]<br />
                [PLZ] [Ort]<br />
                Deutschland
              </p>
              <p>
                E-Mail: kontakt.sonja.werner@outlook.de
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">5. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-xl font-medium text-brand-dark mb-3">Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">6. Ihre Rechte</h2>
              <p>
                Sie haben folgende Rechte:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Recht auf Auskunft über die verarbeiteten Daten</li>
                <li>Recht auf Berichtigung unrichtiger Daten</li>
                <li>Recht auf Löschung Ihrer Daten</li>
                <li>Recht auf Einschränkung der Verarbeitung</li>
                <li>Recht auf Datenübertragbarkeit</li>
                <li>Widerspruchsrecht gegen die Verarbeitung</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">7. Datensicherheit</h2>
              <p>
                Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
