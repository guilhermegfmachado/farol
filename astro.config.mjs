import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://guilhermegfmachado.github.io',
  base: '/farol',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    build: {
      // The only chunk over 500 kB is html2pdf (html2canvas + jsPDF). It is
      // already dynamically imported, on click, so it never touches a page load
      // — the advice this warning gives is the thing that is already done.
      chunkSizeWarningLimit: 1024,
    },
  },
});
