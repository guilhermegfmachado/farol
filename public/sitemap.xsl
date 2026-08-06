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
        <script>
          <xsl:comment>
// The sitemap is one file for all 29 languages, and it is linked from every
// locale's footer, so it picks the visitor's language at runtime — the same
// way offline.html and 404.html do.
var M = {"pt": ["Mapa do site", "páginas em todas as línguas.", "← Voltar ao início", "Página", "ficheiro(s) de mapa do site."], "en": ["Sitemap", "pages across all languages.", "← Back to the site", "Page", "sitemap file(s)."], "es": ["Mapa del sitio", "páginas en todos los idiomas.", "← Volver al inicio", "Página", "archivo(s) de mapa del sitio."], "fr": ["Plan du site", "pages dans toutes les langues.", "← Retour au site", "Page", "fichier(s) de plan du site."], "it": ["Mappa del sito", "pagine in tutte le lingue.", "← Torna al sito", "Pagina", "file di mappa del sito."], "hr": ["Karta stranice", "stranica na svim jezicima.", "← Natrag na stranicu", "Stranica", "datoteka karte stranice."], "de": ["Sitemap", "Seiten in allen Sprachen.", "← Zurück zur Website", "Seite", "Sitemap-Datei(en)."], "nl": ["Sitemap", "pagina's in alle talen.", "← Terug naar de site", "Pagina", "sitemapbestand(en)."], "pl": ["Mapa strony", "stron we wszystkich językach.", "← Powrót do strony", "Strona", "plik(i) mapy strony."], "ro": ["Harta site-ului", "pagini în toate limbile.", "← Înapoi la site", "Pagină", "fișier(e) hartă a site-ului."], "cs": ["Mapa webu", "stránek ve všech jazycích.", "← Zpět na web", "Stránka", "soubor(y) mapy webu."], "sv": ["Webbplatskarta", "sidor på alla språk.", "← Tillbaka till webbplatsen", "Sida", "webbplatskartfil(er)."], "da": ["Sitemap", "sider på alle sprog.", "← Tilbage til sitet", "Side", "sitemap-fil(er)."], "fi": ["Sivukartta", "sivua kaikilla kielillä.", "← Takaisin sivustolle", "Sivu", "sivukarttatiedosto(a)."], "sk": ["Mapa stránok", "stránok vo všetkých jazykoch.", "← Späť na stránku", "Stránka", "súbor(y) mapy stránok."], "el": ["Χάρτης ιστότοπου", "σελίδες σε όλες τις γλώσσες.", "← Επιστροφή στον ιστότοπο", "Σελίδα", "αρχείο/-α χάρτη ιστότοπου."], "hu": ["Oldaltérkép", "oldal az összes nyelven.", "← Vissza az oldalra", "Oldal", "oldaltérkép-fájl."], "bg": ["Карта на сайта", "страници на всички езици.", "← Обратно към сайта", "Страница", "файл(а) с карта на сайта."], "lt": ["Svetainės žemėlapis", "puslapiai visomis kalbomis.", "← Grįžti į svetainę", "Puslapis", "svetainės žemėlapio failas (-ai)."], "lv": ["Vietnes karte", "lapas visās valodās.", "← Atpakaļ uz vietni", "Lapa", "vietnes kartes fails(-i)."], "et": ["Saidikaart", "lehte kõigis keeltes.", "← Tagasi saidile", "Leht", "saidikaardi fail(i)."], "sl": ["Zemljevid strani", "strani v vseh jezikih.", "← Nazaj na stran", "Stran", "datoteka(-e) zemljevida strani."], "ga": ["Léarscáil an tsuímh", "leathanach i ngach teanga.", "← Ar ais go dtí an suíomh", "Leathanach", "comhad(comhaid) léarscáile suímh."], "mt": ["Mappa tas-sit", "paġni fil-lingwi kollha.", "← Lura għas-sit", "Paġna", "fajl(s) tal-mappa tas-sit."], "tr": ["Site haritası", "sayfa, tüm dillerde.", "← Siteye dön", "Sayfa", "site haritası dosyası."], "no": ["Nettstedskart", "sider på alle språk.", "← Tilbake til nettstedet", "Side", "nettstedskartfil(er)."], "is": ["Vefkort", "síður á öllum tungumálum.", "← Til baka á vefinn", "Síða", "vefkortaskrá(r)."], "sr": ["Мапа сајта", "страница на свим језицима.", "← Назад на сајт", "Страница", "датотека мапе сајта."], "mk": ["Мапа на сајтот", "страници на сите јазици.", "← Назад на сајтот", "Страница", "датотека со мапа на сајтот."]};
(function(){try{
  var l=(navigator.language||"en").toLowerCase().slice(0,2);
  var m=M[l]; if(!m) return;
  document.documentElement.lang=l;
  document.title="Farol \u2014 "+m[0];
  var t=document.getElementById("t"); if(t) t.textContent="Farol \u2014 "+m[0];
  // The URL set has a numbered column; the index does not. Same file, two shapes.
  var urls = !!document.querySelector("td.n");
  var b=document.getElementById("b"); if(b) b.textContent = urls ? m[1] : m[4];
  // Nested ifs on purpose: this script sits inside XML, where a bare ampersand
  // is a parse error, so the usual logical-and operator cannot appear here.
  var c=document.getElementById("c"); if(c) { c.textContent = urls ? m[3] : m[0]; }
  var h=document.getElementById("h");
  if(h){ h.textContent=m[2]; h.href = l==="pt" ? "/farol/" : "/farol/"+l+"/"; }
}catch(e){}})();
          </xsl:comment>
        </script>
      </body>
    </html>
  </xsl:template>

  <!-- The index: one row per sitemap file. -->
  <xsl:template match="s:sitemapindex">
    <h1 id="t">Farol — sitemap index</h1>
    <p class="meta">
      <xsl:value-of select="count(s:sitemap)" /><xsl:text> </xsl:text><span id="b">sitemap file(s).</span><xsl:text> </xsl:text>·
      <a id="h" href="/farol/">Back to the site</a>
    </p>
    <table>
      <tr><th id="c">Sitemap</th></tr>
      <xsl:for-each select="s:sitemap">
        <tr>
          <td><a href="{s:loc}"><xsl:value-of select="s:loc" /></a></td>
        </tr>
      </xsl:for-each>
    </table>
  </xsl:template>

  <!-- The URL set: every page on the site. -->
  <xsl:template match="s:urlset">
    <h1 id="t">Farol — sitemap</h1>
    <p class="meta">
      <xsl:value-of select="count(s:url)" /><xsl:text> </xsl:text><span id="b">pages across all languages.</span> ·
      <a id="h" href="/farol/">Back to the site</a>
    </p>
    <table>
      <tr><th>#</th><th id="c">Page</th></tr>
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
