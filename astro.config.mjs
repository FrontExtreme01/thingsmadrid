// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://thingsmadrid.netlify.app',
  output: 'server',
  adapter: netlify(),
  integrations: [tailwind(), react(), mdx(),
  partytown({
    config: {
      forward: ["dataLayer.push"],
    }
  }),
  sitemap({
    i18n: {
      defaultLocale: 'es',
      locales: {
        en: 'en-US',
        es: 'es-ES',
      }
    }
  })],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});