import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  icon: string;
  label: string;
  title: string;
  description: ReactNode;
  href: string;
};

const FeatureList: FeatureItem[] = [
  {
    icon: '🖥️',
    label: 'Hardware',
    title: 'PC Hardware',
    description: 'Aktuelle Hardware-Übersicht: Gehäuse, CPU, GPU, RAM, Speicher, Monitore und Peripherie mit Neuwerten.',
    href: '/docs/pc-hardware',
  },
  {
    icon: '🐧',
    label: 'Linux',
    title: 'Debian Tutorials',
    description: 'Schritt-für-Schritt-Anleitungen – Apache, PHP, MariaDB, phpMyAdmin, TeamSpeak, Sinusbot und mehr.',
    href: '/docs/debian-tutorials/update-von-debian-10-auf-debian-11',
  },
  {
    icon: '🔐',
    label: 'SSL',
    title: 'Certbot & Let\'s Encrypt',
    description: 'Kostenlose SSL-Zertifikate einrichten und automatisch erneuern – sicher und DSGVO-konform.',
    href: '/docs/debian-tutorials/certbot-lets-encrypt',
  },
];

function Feature({icon, label, title, description, href}: FeatureItem) {
  return (
    <Link to={href} className={styles.card}>
      <div className={styles.cardBanner}>
        <span className={styles.cardIcon}>{icon}</span>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTop}>
          <p className={styles.cardLabel}>{label}</p>
        </div>
        <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
        <p className={styles.cardDesc}>{description}</p>
        <span className={styles.cardLink}>Mehr erfahren →</span>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.section}>
      {/* MSK-style section divider */}
      <div className={styles.divider}>
        <div className={styles.dividerLine} />
        <div className={styles.dividerDot} />
        <div className={styles.dividerLine} />
      </div>

      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Inhalte</p>
          <Heading as="h2" className={styles.sectionTitle}>Tutorials & Guides</Heading>
          <p className={styles.sectionDesc}>
            Alles an einem Ort – Hardware-Übersichten, Server-Tutorials und praxisnahe Anleitungen.
          </p>
        </div>

        <div className={styles.grid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
