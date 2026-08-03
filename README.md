# Farol

**Ferramentas · Abordagens · Reconhecer · Orientar · aLunos**

Manual de consulta rápida para docentes que trabalham com turmas heterogéneas. Cada cartão cobre um perfil de aprendizagem — o que se vê na sala, o que se pode fazer hoje, e onde a IA pode ajudar. Disponível em 24 línguas, com bibliografia académica citada em cada afirmação e o enquadramento legal dos 27 Estados-Membros da UE e da Turquia.

🔗 **[guilhermegfmachado.github.io/farol](https://guilhermegfmachado.github.io/farol/)**

## Stack

- [Astro](https://astro.build) — gerador de sites estáticos (~870 páginas)
- TypeScript · Content Collections com validação Zod
- i18n para 24 línguas (PT na raiz + 23 línguas oficiais da UE em `/{lang}/`)
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

## Estrutura

```
src/content/          # fonte em português; o frontmatter é tudo, o corpo não é usado
  profiles/           # 7 perfis (01–07): tdah, dislexia, dispraxia, autismo,
                      #   sobredotacao, plnm, discalculia
  references/         # 5 referências (08–12): etica, oficina, legislacao,
                      #   diferenciacao, avaliacao
  tools/              # catálogo de ferramentas de IA, com nota RGPD por ferramenta

src/lib/
  i18n.ts                  # strings de interface + títulos/subtítulos por língua
  content-translations.ts  # secções e itens de cada cartão nas 23 línguas
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
2. `src/lib/i18n.ts` → `entryTranslations` — título, subtítulo e descrição nas 23 línguas
3. `src/lib/content-translations.ts` — secções e itens nas 23 línguas
4. `src/lib/strategy-tags.ts` — `strategyTags` **e** `strategyTiers`, com um elemento por
   estratégia; se as contagens não baterem certo, ficam estratégias sem etiqueta ou com
   nível atribuído por omissão
5. `src/lib/observations.ts` — opcional: observações que encaminhem para o novo perfil
6. `related:` nos perfis vizinhos e `profiles:` nas ferramentas relevantes — as ligações
   não se tornam recíprocas sozinhas

O `index:` dos cartões seguintes tem de ser renumerado.

## Enquadramento legal por país

A língua não é o país: o alemão serve a Alemanha, a Áustria, a Bélgica e o Luxemburgo,
e na Bélgica o ensino é competência das comunidades. Por isso só o cartão de
enquadramento legal ganha um eixo de país — `/{lang}/references/legislacao/{país}/` —
enquanto os outros onze cartões, que não citam legislação nacional, continuam indexados
apenas por língua.

Para acrescentar um país basta uma entrada em `src/lib/country-legal.ts` (chaveada por
`${lang}-${código}`) e uma ligação a partir da nota do cartão dessa língua, em
`i18n.ts` → `legal_country_note`. A rota, o sitemap e o índice de pesquisa tratam do resto.

## Feedback

O formulário no rodapé não tem backend: por omissão abre um *issue* do GitHub
pré-preenchido (requer conta GitHub). Para receber as mensagens diretamente, preencher
`FORMSPREE_ENDPOINT` — ou `FEEDBACK_EMAIL` — em `src/components/Footer.astro`.

## Conteúdo pendente

As secções *Onde a IA entra* ficam como espaço reservado até serem preenchidas após o
curso em Florença (Agosto 2026). A estrutura e os estilos já estão prontos nas 24 línguas.

## Como foi feito

Conceção, direção e estrutura pedagógica: Guilherme de Góis Machado. O conteúdo foi
redigido com assistência de IA sob direção do autor, com revisão humana de todas as
fichas; as referências académicas foram verificadas contra as fontes citadas e as
traduções passaram por três rondas de revisão. O processo está descrito em
[Como foi feito](https://guilhermegfmachado.github.io/farol/como-foi-feito/).

## Licença

CC BY-NC-SA 4.0 — ver [LICENSE](LICENSE).
