import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {PageMetadata} from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from '@site/src/pages/404.module.css';

export default function NotFound(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <>
      <PageMetadata title={`404 – ${siteConfig.title}`} />
      <Layout>
        <main className={styles.root}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.topline} aria-hidden="true" />

          <div className={styles.inner}>
            <p className={styles.code}>404</p>

            <Heading as="h1" className={styles.title}>
              Seite nicht gefunden
            </Heading>

            <p className={styles.sub}>
              Die gesuchte Seite existiert nicht oder wurde verschoben.
            </p>

            <div className={styles.actions}>
              <Link className={clsx('button button--lg', styles.btnPrimary)} to="/">
                ← Zurück zur Startseite
              </Link>
              <Link className={clsx('button button--lg', styles.btnGhost)} to="/docs">
                Tutorials
              </Link>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
