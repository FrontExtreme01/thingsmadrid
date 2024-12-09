// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://thingsmadrid.netlify.app',
  integrations: [tailwind(), react(), mdx(), sitemap({
    i18n: {
      defaultLocale: 'es',
      locales: {
        en: 'en-US',
        es: 'es-ES',
      }
    }
  }),
  partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  })],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});