// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Placeholder until the final domain is known (see CLAUDE.md Cserelista).
  site: 'https://mrrock.hu',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'hu',
    locales: ['hu', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
    build: { sourcemap: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'hu', locales: { hu: 'hu-HU', en: 'en-GB' } },
    }),
  ],
});
