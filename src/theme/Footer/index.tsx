import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function Footer(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const footer = siteConfig.themeConfig?.footer as any;
  if (!footer) return null;

  const { links = [], copyright } = footer;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Brand */}
        <div className={styles.brand}>
          <Link to="/" className={styles.brandLink}>
            <img
              src={`${siteConfig.baseUrl}img/logo.png`}
              alt={siteConfig.title}
              className={styles.brandLogo}
            />
            <span className={styles.brandName}>{siteConfig.title}</span>
          </Link>
          <p className={styles.brandTagline}>{siteConfig.tagline}</p>
        </div>

        {/* Link Columns */}
        <div className={styles.columns}>
          {links.map((group: any, i: number) => (
            <div key={i} className={styles.column}>
              <p className={styles.columnTitle}>{group.title}</p>
              <ul className={styles.columnList}>
                {group.items.map((item: any, j: number) =>
                  item.to ? (
                    <li key={j}>
                      <Link to={item.to} className={styles.columnLink}>
                        {item.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={j}>
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.columnLink}>
                        {item.label}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>{copyright}</p>
        <div className={styles.legalLinks}>
          <Link className={styles.legalLink} to="/impressum">Impressum</Link>
          <span className={styles.legalDivider}>·</span>
          <Link className={styles.legalLink} to="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
