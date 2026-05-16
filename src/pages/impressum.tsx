import { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import styles from './legal.module.css';

const STORAGE_KEY = 'musiker15-legal-lang';

const content = {
  de: {
    title: 'Impressum',
    sections: (
      <>
        <h1>Impressum</h1>

        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          <strong>Moritz Kohm</strong><br />
          c/o Impressumservice Dein-Impressum<br />
          Stettiner Str. 41<br />
          35410 Hungen
        </p>
        <p><strong>Kontakt:</strong><br />E-Mail: info@musiker15.de</p>

        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>
          <strong>Moritz Kohm</strong><br />
          c/o Impressumservice Dein-Impressum<br />
          Stettiner Str. 41<br />
          35410 Hungen
        </p>

        <h2>Haftungsausschluss</h2>

        <h3>Haftung für Inhalte</h3>
        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
        </p>

        <h3>Haftung für Links</h3>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
          Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
          oder Betreiber der Seiten verantwortlich.
        </p>

        <h2>Widerspruch gegen Werbe-Mails</h2>
        <p>
          Der Nutzung der im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
          Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
          Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
        </p>

        <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </>
    ),
  },
  en: {
    title: 'Legal Notice',
    sections: (
      <>
        <h1>Legal Notice</h1>

        <h2>Information according to § 5 DDG</h2>
        <p>
          <strong>Moritz Kohm</strong><br />
          c/o Impressumservice Dein-Impressum<br />
          Stettiner Str. 41<br />
          35410 Hungen<br />
          Germany
        </p>
        <p><strong>Contact:</strong><br />Email: info@musiker15.de</p>

        <h2>Responsible for content according to § 18 Para. 2 MStV</h2>
        <p>
          <strong>Moritz Kohm</strong><br />
          c/o Impressumservice Dein-Impressum<br />
          Stettiner Str. 41<br />
          35410 Hungen<br />
          Germany
        </p>

        <h2>Disclaimer</h2>

        <h3>Liability for content</h3>
        <p>
          The contents of our pages were created with the greatest care. However, we cannot
          guarantee the accuracy, completeness or timeliness of the content.
        </p>

        <h3>Liability for links</h3>
        <p>
          Our offer contains links to external websites of third parties, on whose contents we have
          no influence. The respective provider or operator of the linked pages is always responsible
          for the content of the linked pages.
        </p>

        <h2>Objection to Promotional Emails</h2>
        <p>
          The use of contact data published as part of the legally required imprint for sending unsolicited advertising or informational material is
          hereby objected to. The operators of these pages expressly reserve the right to take legal action in the event of the unsolicited sending
          of advertising information, for example through spam emails.
        </p>

        <h2>Consumer Dispute Resolution</h2>
        <p>
          We are not willing or obliged to participate in dispute resolution proceedings before a
          consumer arbitration board.
        </p>
      </>
    ),
  },
};

export default function Impressum() {
  const [lang, setLang] = useState<'de' | 'en'>('de');

  useEffect(() => {
    const stored =
      typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (stored === 'de' || stored === 'en') {
      setLang(stored);
      return;
    }
    const browserLang =
      typeof navigator !== 'undefined' ? navigator.language?.toLowerCase() ?? '' : '';
    setLang(browserLang.startsWith('de') ? 'de' : 'en');
  }, []);

  const handleChange = (value: 'de' | 'en') => {
    setLang(value);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, value);
    }
  };

  const c = content[lang];

  return (
    <Layout title={c.title}>
      <div className={styles.legalPage}>
        <div className={styles.langSwitcher}>
          <span className={styles.langLabel} aria-hidden="true">
            🌐
          </span>
          <select
            value={lang}
            onChange={(e) => handleChange(e.target.value as 'de' | 'en')}
            className={styles.langSelect}
            aria-label="Sprache wählen / Choose language"
          >
            <option value="de">🇩🇪 Deutsch</option>
            <option value="en">🇬🇧 English</option>
          </select>
        </div>
        <div className={styles.legalContent}>{c.sections}</div>
      </div>
    </Layout>
  );
}
