import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://guilhermegfmachado.github.io',
  base: '/farol',
  output: 'static',
  // xslURL only adds an <?xml-stylesheet?> line, which crawlers ignore. It is
  // there so a person who opens the sitemap sees a readable page instead of
  // raw XML — see public/sitemap.xsl.
  integrations: [sitemap({ xslURL: '/farol/sitemap.xsl' })],
  vite: {
    build: {
      // The only chunk over 500 kB is html2pdf (html2canvas + jsPDF). It is
      // already dynamically imported, on click, so it never touches a page load
      // — the advice this warning gives is the thing that is already done.
      chunkSizeWarningLimit: 1024,
    },
  },
});
