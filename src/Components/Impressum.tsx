import * as React from "react";

function Impressum() {
  return (
    <div className="container my-5">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h1 className="h4">Impressum</h1>
        </div>
        <div className="card-body">
          <p className="text-muted">
            Informationspflicht laut §5 E-Commerce Gesetz, §14
            Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht
            laut §25 Mediengesetz.
          </p>

          <h2 className="h5">TOFF</h2>
          <p>
            Christof Dusch
            <br />
            Valentin-Kindlin-Straße 12
            <br />
            86899 Landsberg
            <br />
            Deutschland
          </p>

          <p>
            Steuer-Nummer: 131/212/91074
            <br />
            E-Mail: <a href="mailto:TOFFmgmt@gmx.de">TOFFmgmt@gmx.de</a>
          </p>

          <h3 className="h5">Aufsichtsbehörde</h3>
          <p>
            Finanzkasse Fürstenfeldbruck
            <br />
            Anschrift der Aufsichtsbehörde
            <br />
            Münchner Str. 36, 82256 Fürstenfeldbruck
          </p>

          <p>Berufsbezeichnung: Selbst. Komponist. Musikb. Gew</p>

          <h3 className="h5">EU-Streitschlichtung</h3>
          <p>
            Gemäß Verordnung über Online-Streitbeilegung in
            Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die
            Online-Streitbeilegungsplattform (OS-Plattform) informieren.
            Verbraucher haben die Möglichkeit, Beschwerden an die Online
            Streitbeilegungsplattform der Europäischen Kommission unter{" "}
            <a
              href="http://ec.europa.eu/odr?tid=321891107"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://ec.europa.eu/odr?tid=321891107
            </a>{" "}
            zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb
            in unserem Impressum.
          </p>

          <p>
            Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder
            verpflichtet sind, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h3 className="h5">Haftung für Inhalte dieser Website</h3>
          <p>
            Wir entwickeln die Inhalte dieser Website ständig weiter und bemühen
            uns korrekte und aktuelle Informationen bereitzustellen. Leider
            können wir keine Haftung für die Korrektheit aller Inhalte auf
            dieser Website übernehmen, speziell für jene, die seitens Dritter
            bereitgestellt wurden. Als Diensteanbieter sind wir nicht
            verpflichtet, die von ihnen übermittelten oder gespeicherten
            Informationen zu überwachen oder nach Umständen zu forschen, die auf
            eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <p>
            Unsere Verpflichtungen zur Entfernung von Informationen oder zur
            Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
            aufgrund von gerichtlichen oder behördlichen Anordnungen bleiben
            auch im Falle unserer Nichtverantwortlichkeit davon unberührt.
          </p>

          <p>
            Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen,
            bitte wir Sie uns umgehend zu kontaktieren, damit wir die
            rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten
            im Impressum.
          </p>

          <h3 className="h5">Haftung für Links auf dieser Website</h3>
          <p>
            Unsere Website enthält Links zu anderen Websites für deren Inhalt
            wir nicht verantwortlich sind. Haftung für verlinkte Websites
            besteht für uns nicht, da wir keine Kenntnis rechtswidriger
            Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch
            bisher nicht aufgefallen sind und wir Links sofort entfernen würden,
            wenn uns Rechtswidrigkeiten bekannt werden.
          </p>

          <p>
            Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte
            wir Sie uns zu kontaktieren. Sie finden die Kontaktdaten im
            Impressum.
          </p>

          <h3 className="h5">Urheberrechtshinweis</h3>
          <p>
            Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos)
            unterliegen dem Urheberrecht. Bitte fragen Sie uns bevor Sie die
            Inhalte dieser Website verbreiten, vervielfältigen oder verwerten
            wie zum Beispiel auf anderen Websites erneut veröffentlichen. Falls
            notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte
            unserer Seite rechtlich verfolgen.
          </p>

          <p>
            Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht
            verletzen, bitten wir Sie uns zu kontaktieren.
          </p>

          <h3 className="h5">Bildernachweis</h3>
          <p>
            Die Bilder, Fotos und Grafiken auf dieser Webseite sind
            urheberrechtlich geschützt.
          </p>

          <p>Alle Texte sind urheberrechtlich geschützt.</p>
        </div>
      </div>
    </div>
  );
}

export default Impressum;
