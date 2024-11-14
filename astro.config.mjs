// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://thingsmadrid.netlify.app/', // Tu dominio público, e.g.: https://mi-sitio.dev/. Usado para generar sitemaps y URLs canónicas.
  integrations: [tailwind(), react(), mdx()]
});