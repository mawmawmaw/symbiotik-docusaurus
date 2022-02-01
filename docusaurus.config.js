// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Symbiotik Documentation',
  tagline: 'subtitle',
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
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Documentation',
          },
          {
            href: 'https://symbiotik.co',
            label: 'Back to main site',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Understanding Environmental Frameworks',
                to: '/docs/environmental-foundational-knowledge/understanding-environmental-frameworks'
              },
              {
                label: 'Environmental Operations',
                to: '/docs/environmental-foundational-knowledge/environmental-operations'
              },
              {
                label: 'Environmental Markets',
                to: '/docs/environmental-foundational-knowledge/environmental-markets'
              },
              {
                label: 'References',
                to: '/docs/environmental-foundational-knowledge/references'
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
