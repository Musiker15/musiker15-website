import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      {/* Top accent line */}
      <div className={styles.heroTopline} aria-hidden="true" />
      {/* Glow blob */}
      <div className={styles.heroGlow} aria-hidden="true" />

      <div className={styles.heroInner}>
        <p className={styles.heroLabel}>Tutorials</p>

        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>

        <p className={styles.heroSub}>{siteConfig.tagline}</p>

        <div className={styles.heroButtons}>
          <Link className={clsx('button button--lg', styles.btnPrimary)} to="/docs">
            Loslegen →
          </Link>
          <Link className={clsx('button button--lg', styles.btnGhost)} href="https://github.com/musiker15">
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Musiker15 Tutorials & Guides">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
