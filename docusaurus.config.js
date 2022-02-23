// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Symbiotik Documentation',
  tagline: '',
  url: 'https://docs.symbiotik.co',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'mawmawmaw', // Usually your GitHub org/user name.
  projectName: 'symbiotik-docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/mawmawmaw/symbiotik-docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-ZD2N8HZPE5',
        anonymizeIP: true,
      },
    ],
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  themeConfig:
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Symbiotik logo',
          src: 'img/header-logo-light.png',
          srcDark: 'img/header-logo-dark.png',
          href: 'https://docs.symbiotik.co/',
        },
        items: [
          {
            type: 'doc',
            docId: 'manifesto',
            position: 'right',
            label: 'Documentación',
          },
          {
            href: 'https://symbiotik.co',
            label: 'Volver al Sitio Principal',
            position: 'right',
          },
          {
          type: 'localeDropdown',
          position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'Introducción',
                to: '/docs/manifesto',
              },
              {
                label: 'Sobre Nosotros',
                to: '/docs/about-us'
              },
              {
                label: 'La Misión',
                to: '/docs/the-mission'
              },
              {
                label: 'Monitoreo y Presentación de Resultados',
                to: '/docs/monitoring'
              },
              {
                label: 'POW vs POS',
                to: '/docs/pow-vs-pos'
              },
              {
                label: 'Referencias',
                to: '/docs/references'
              }
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
            title: 'Other',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/mawmawmaw/symbiotik-docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Symbiotik`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
