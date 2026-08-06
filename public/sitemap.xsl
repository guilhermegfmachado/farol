<?xml version="1.0" encoding="UTF-8"?>
<!--
  Sitemaps are written for crawlers, which is why a browser shows them as a wall
  of XML or, for the index, a near-blank page with one link. This stylesheet is
  ignored by every crawler and used only by browsers, so a person who opens the
  file gets a readable page instead. It handles both roots: the index and the
  URL set.
-->
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex" />
        <title>Farol — sitemap</title>
        <style>
          :root { color-scheme: light dark; }
          body {
            margin: 0; padding: 2.5rem 1.25rem 4rem;
            background: #fafafa; color: #14171a;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
          }
          @media (prefers-color-scheme: dark) { body { background: #131722; color: #ece7dc; } }
          main { max-width: 60rem; margin: 0 auto; }
          h1 { font-size: 1.4rem; margin: 0 0 0.25rem; letter-spacing: 0.02em; }
          .meta { color: #6c6a60; font-size: 0.85rem; margin: 0 0 2rem; }
          @media (prefers-color-scheme: dark) { .meta { color: #b5aea0; } }
          .meta a { color: inherit; }
          table { border-collapse: collapse; width: 100%; font-size: 0.85rem; }
          th {
            text-align: left; font-family: ui-monospace, 'JetBrains Mono', monospace;
            font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase;
            color: #6c6a60; font-weight: 400; padding: 0 0.75rem 0.5rem 0;
            border-bottom: 1px solid #e9e4da;
          }
          td { padding: 0.4rem 0.75rem 0.4rem 0; border-bottom: 1px solid #f0ece3; vertical-align: top; }
          @media (prefers-color-scheme: dark) {
            th { color: #b5aea0; border-color: #2a2f3d; }
            td { border-color: #1e2431; }
          }
          td.n { color: #a8a49a; font-family: ui-monospace, 'JetBrains Mono', monospace; font-size: 0.75rem; width: 4rem; }
          a { color: #2a4a5e; }
          @media (prefers-color-scheme: dark) { a { color: #e8a93d; } }
          code { font-family: ui-monospace, 'JetBrains Mono', monospace; font-size: 0.8rem; }
        </style>
      </head>
      <body>
        <main>
          <xsl:apply-templates />
        </main>
      </body>
    </html>
  </xsl:template>

  <!-- The index: one row per sitemap file. -->
  <xsl:template match="s:sitemapindex">
    <h1>Farol — sitemap index</h1>
    <p class="meta">
      <xsl:value-of select="count(s:sitemap)" /> sitemap file(s). ·
      <a href="/farol/">Back to the site</a>
    </p>
    <table>
      <tr><th>Sitemap</th></tr>
      <xsl:for-each select="s:sitemap">
        <tr>
          <td><a href="{s:loc}"><xsl:value-of select="s:loc" /></a></td>
        </tr>
      </xsl:for-each>
    </table>
  </xsl:template>

  <!-- The URL set: every page on the site. -->
  <xsl:template match="s:urlset">
    <h1>Farol — sitemap</h1>
    <p class="meta">
      <xsl:value-of select="count(s:url)" /> pages across all languages. ·
      <a href="/farol/">Back to the site</a>
    </p>
    <table>
      <tr><th>#</th><th>Page</th></tr>
      <xsl:for-each select="s:url">
        <tr>
          <td class="n"><xsl:value-of select="position()" /></td>
          <td>
            <a href="{s:loc}">
              <code><xsl:value-of select="substring-after(s:loc, 'guilhermegfmachado.github.io')" /></code>
            </a>
          </td>
        </tr>
      </xsl:for-each>
    </table>
  </xsl:template>
</xsl:stylesheet>
