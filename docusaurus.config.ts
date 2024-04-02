import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const organizationName = 'ernieyang09'
const projectName = 'learning-site'

const config: Config = {
  title: 'Learning Site',
  tagline: 'Work in progress',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: `https://${organizationName}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${projectName}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ernieyang09/learning-site/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ernieyang09/learning-site/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // gtag: {
        //   trackingID: 'G-JW93XB3XXZ',
        // },
        googleTagManager: {
          containerId: 'GTM-5N2FB3B',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          // ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: ['docusaurus-plugin-sass'],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Learning Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'leetcodeSidebar',
          position: 'left',
          label: 'Leetcode',
        },
        {
          type: 'docSidebar',
          sidebarId: 'feSidebar',
          position: 'left',
          label: 'FE',
        },
        {
          type: 'docSidebar',
          sidebarId: 'beSidebar',
          position: 'left',
          label: 'BE',
        },
        {
          type: 'docSidebar',
          sidebarId: 'designSystemSidebar',
          position: 'left',
          label: 'Design System',
        },
        {
          type: 'docSidebar',
          sidebarId: 'languagesSystemSidebar',
          position: 'left',
          label: 'Languages',
        },
        {
          type: 'docSidebar',
          sidebarId: 'blockchainSidebar',
          position: 'left',
          label: 'Block chain',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tgSidebar',
          position: 'left',
          label: 'Telegram & Ton',
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: '/aboutme',
          label: 'About me',
          position: 'right',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Doc',
          items: [
            {
              label: 'Leetcode',
              to: '/docs/leetcode/binary-search',
            },
            {
              label: 'FE',
              to: '/docs/fe/browser/browser-type-url',
            },
            {
              label: 'BE',
              to: '/docs/be/DB/common',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['solidity', 'rust'],
    },
  } satisfies Preset.ThemeConfig,
}

export default config
