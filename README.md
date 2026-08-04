# Farol

**Ferramentas · Abordagens · Reconhecer · Orientar · aLunos**

Manual de consulta rápida para docentes que trabalham com turmas heterogéneas. Cada cartão cobre um perfil de aprendizagem — o que se vê na sala, o que se pode fazer hoje, e onde a IA pode ajudar. Disponível em 28 línguas, com referências académicas ligadas à fonte e o enquadramento legal dos 27 Estados-Membros da UE e dos seis países associados ao programa Erasmus+.

🔗 **[guilhermegfmachado.github.io/farol](https://guilhermegfmachado.github.io/farol/)**

## Stack

- [Astro](https://astro.build) — gerador de sites estáticos (~870 páginas)
- TypeScript · Content Collections com validação Zod
- i18n para 26 línguas (PT na raiz + 23 línguas oficiais da UE, turco, norueguês, islandês e sérvio em `/{lang}/`)
- Plus Jakarta Sans + JetBrains Mono + OpenDyslexic (self-hosted via fontsource)
- PWA instalável e utilizável offline · exportação para PDF no cliente
- GitHub Pages via GitHub Actions

Sem backend, sem base de dados, sem analítica e sem cookies. As preferências
(tema, modo de leitura) vivem apenas no `localStorage` do próprio dispositivo.

## Desenvolvimento local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/ e carimba a versão do service worker
```

A marca vive em `src/components/LighthouseMark.astro` e em `public/favicon.svg`.
Depois de a alterar, regenerar os ficheiros derivados (ícones da PWA, ícone iOS e
a imagem de pré-visualização das ligações):

```bash
npm i --no-save playwright-core && node scripts/render-icons.mjs
```

## Estrutura

```
src/content/          # fonte em português; o frontmatter é tudo, o corpo não é usado
  profiles/           # 7 perfis (01–07): tdah, dislexia, dispraxia, autismo,
                      #   sobredotacao, plnm, discalculia
  references/         # 5 referências (08–12): etica, oficina, legislacao,
                      #   diferenciacao, avaliacao
  tools/              # catálogo de ferramentas de IA (descrição e ligação ao fornecedor)

src/lib/
  i18n.ts                  # strings de interface, ALL_LANGS e títulos/subtítulos por língua
  content-translations.ts  # secções e itens de cada cartão nas 27 línguas
  country-legal.ts         # variantes por país do cartão de enquadramento legal
  observations.ts          # observações da página inicial e respetivos temas
  strategy-tags.ts         # etiquetas e níveis de medida de cada estratégia
  tool-translations.ts, made.ts, entries.ts
```

O campo `index:` determina a ordem na grelha, na torre e na navegação: os perfis
ocupam 01–07 e as referências 08–12.

## Adicionar um perfil

O cartão **não** fica completo só por se criar o ficheiro. É preciso tocar em:

1. `src/content/profiles/novo.md` — fonte PT, seguindo o schema em `src/content/config.ts`
2. `src/lib/i18n.ts` → `entryTranslations` — título, subtítulo e descrição nas 27 línguas
3. `src/lib/content-translations.ts` — secções e itens nas 27 línguas
4. `src/lib/strategy-tags.ts` — `strategyTags` **e** `strategyTiers`, com um elemento por
   estratégia; se as contagens não baterem certo, ficam estratégias sem etiqueta ou com
   nível atribuído por omissão
5. `src/lib/observations.ts` — opcional: observações que encaminhem para o novo perfil
6. `related:` nos perfis vizinhos e `profiles:` nas ferramentas relevantes — as ligações
   não se tornam recíprocas sozinhas

O `index:` dos cartões seguintes tem de ser renumerado.

## Enquadramento legal por país

A língua não é o país: o alemão serve a Alemanha, a Áustria, a Bélgica, o Luxemburgo e
o Liechtenstein, e na Bélgica o ensino é competência das comunidades. Por isso só o
cartão de enquadramento legal ganha um eixo de país — `/{lang}/references/legislacao/{país}/`
— enquanto os outros onze cartões, que não citam legislação nacional, continuam indexados
apenas por língua.

O eixo de país cobre os **27 Estados-Membros da UE e os seis países associados ao
Erasmus+** (Islândia, Listenstaine, Noruega, Macedónia do Norte, Sérvia e Turquia): são
os países de onde vêm os docentes a quem este manual se dirige. O eixo de língua é outra
questão: as 24 línguas oficiais da UE mais o turco, o norueguês, o islandês e o sérvio. Cada cartão é escrito na língua dos
seus leitores — em alemão quando o país é germanófono, em inglês quando o manual não
tem a língua do país, com os termos nacionais mantidos no original.

Para acrescentar um país basta uma entrada em `src/lib/country-legal.ts` (chaveada por
`${lang}-${código}`) e uma ligação a partir da nota do cartão dessa língua, em
`i18n.ts` → `legal_country_note`. A rota, o sitemap e o índice de pesquisa tratam do resto.

## Feedback

O formulário no rodapé não tem backend: por omissão abre um *issue* do GitHub
pré-preenchido (requer conta GitHub). Para receber as mensagens diretamente, preencher
`FORMSPREE_ENDPOINT` — ou `FEEDBACK_EMAIL` — em `src/components/Footer.astro`.

## Conteúdo pendente

As secções *Onde a IA entra* ficam como espaço reservado até serem preenchidas após o
curso em Florença (Agosto 2026). A estrutura e os estilos já estão prontos nas 28 línguas.

## Como foi feito

Conceção, direção e estrutura pedagógica: Guilherme de Góis Machado. O conteúdo e as
traduções foram produzidos com assistência de IA sob direção do autor. Cada cartão indica as fontes em que
se apoia; a maioria inclui ligação direta ao original. O processo está descrito em
[Como foi feito](https://guilhermegfmachado.github.io/farol/como-foi-feito/).

## Licença

CC BY-NC-SA 4.0 — ver [LICENSE](LICENSE).
