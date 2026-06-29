import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// The body font (Plus Jakarta Sans) drives homepage CLS via font-swap reflow.
// @fontsource ships it with `font-display: swap`; rewrite *its* @font-face rules
// to `font-display: optional` so the browser commits to the metric-matched
// fallback when the web font isn't ready at first paint — no swap, no layout
// shift. Mono and OpenDyslexic stay `swap` (reading mode needs OpenDyslexic to
// actually load when toggled, not be dropped).
function jakartaOptionalPostcss() {
  return {
    postcssPlugin: 'jakarta-font-display-optional',
    AtRule: {
      'font-face': (rule) => {
        let isJakarta = false;
        rule.walkDecls((d) => {
          if ((d.prop === 'font-family' || d.prop === 'src') && /jakarta/i.test(d.value)) {
            isJakarta = true;
          }
        });
        if (!isJakarta) return;
        let found = false;
        rule.walkDecls('font-display', (d) => {
          d.value = 'optional';
          found = true;
        });
        if (!found) rule.append({ prop: 'font-display', value: 'optional' });
      },
    },
  };
}
jakartaOptionalPostcss.postcss = true;

export default defineConfig({
  site: 'https://guilhermegfmachado.github.io',
  base: '/farol',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    css: {
      postcss: {
        plugins: [jakartaOptionalPostcss()],
      },
    },
  },
});
