import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Musiker15',
  tagline: 'Tutorials & Guides',
  favicon: 'img/favicon.ico',

  future: {
    v4: true, 
  },

  url: 'https://www.musiker15.de',
  baseUrl: '/',

  organizationName: 'musiker15',
  projectName: 'musiker15-website',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  plugins: [
    ['docusaurus-lunr-search', {}],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Musiker15/musiker15-website/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Musiker15',
      logo: {
        alt: 'Musiker15 Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorials',
        },
        {
          href: 'https://github.com/musiker15',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.msk-scripts.de/',
          label: 'MSK Scripts',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorials',
              to: '/docs',
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/5hHSBRHvJE',
            },
            {
              label: 'GitHub Musiker15',
              href: 'https://github.com/musiker15',
            },
            {
              label: 'GitHub MSK Scripts',
              href: 'https://github.com/MSK-Scripts',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Musiker15`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'ini', 'sql', 'apacheconf'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
