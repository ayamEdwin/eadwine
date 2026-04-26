import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Edwin Setsoafia",
  tagline: "Aspiring Robotics Researcher | Mechatronics Engineer",
  favicon: 'img/eddie_profile.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://dark-light-k9x08u5hu-ayamedwins-projects.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Edwin Setsoafia', // Usually your GitHub org/user name.
  projectName: 'My Portfolio', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'ignore',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Announcement banner shown at the very top of the site. Similar to the
    // official Docusaurus release banner. Customize `content` and link as needed.
    announcementBar: {
      id: 'release-2025-11', // Increment this to show the banner again after users close it
      content:
        '🎉 <strong>Exited to share this </strong> new milestone — <a href="/blog/2025-11-20-release">Check it out 🥳</a>!',
      backgroundColor: '#fafbfc', // light background
      textColor: '#091E42', // dark text for contrast
      isCloseable: true,
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'My Space',
      logo: {
        alt: 'Eddies Profile Picture',
        src: 'img/eddie_profile.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'aboutmeSidebar',
          position: 'left',
          label: 'About me',
        },
        {to: '/projects', label: 'Projects', position: 'left'},
        {to: '/research', label: 'Research', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'Who am I?',
              to: '/docs/about',
            },
            
          ],
        },
        {
          title: 'Active Socials',
          items: [
            {
              label: 'Discord',
              href: 'https://www.google.com',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com',
            },

             {
              label: 'Slack',
              href: 'https://www.linkedin.com',
            },

             {
              label: 'Github',
              href: 'https://www.github.com/ayamEdwin',
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
              label: 'Projects',
              to: '/projects',
            },
            {
              label: 'Research',
              to: '/research',
            },
          ],
        },
         {
          title: 'Contact',
          items: [
            {
              label: 'Email',
              to: 'setsoafiaedwin7@gmail.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Edwin Setsoafia - Aspiring Robotics Researcher`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
