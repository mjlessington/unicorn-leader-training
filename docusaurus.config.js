// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Daring Unicorn',
  tagline: 'Cultivating Courageous and Exceptional Leadership in IT',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://mjlessington.github.io',
  baseUrl: '/unicorn-leader-training/',

  organizationName: 'mjlessington',
  projectName: 'unicorn-leader-training',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'training',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'The Daring Unicorn',
        logo: {
          alt: 'The Daring Unicorn Logo',
          src: 'img/DaringUni.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'trainingSidebar',
            position: 'left',
            label: 'Training Modules',
          },
          {
            to: '/training/resources/reading-list',
            label: 'Resources',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Training',
            items: [
              { label: 'Get Started', to: '/training/intro' },
              { label: 'Module 1: Foundations', to: '/training/module-1-foundations/overview' },
              { label: 'Module 2: Self-Awareness', to: '/training/module-2-self-awareness/overview' },
            ],
          },
          {
            title: 'Advanced',
            items: [
              { label: 'Module 3: Team Building', to: '/training/module-3-team-building/overview' },
              { label: 'Module 4: Courageous Leadership', to: '/training/module-4-courageous-leadership/overview' },
              { label: 'Module 5: Culture', to: '/training/module-5-culture/overview' },
            ],
          },
          {
            title: 'Resources',
            items: [
              { label: 'Module 6: Integration', to: '/training/module-6-integration/overview' },
              { label: 'Reading List', to: '/training/resources/reading-list' },
              { label: 'Facilitator Guide', to: '/training/resources/facilitator-guide' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Daring Unicorn Training Program. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
