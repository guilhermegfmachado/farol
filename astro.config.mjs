import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://guilhermegfmachado.github.io',
  base: '/farol',
  output: 'static',
  integrations: [sitemap()],
});
