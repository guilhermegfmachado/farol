# Farol

**Ferramentas · Abordagens · Reconhecer · Orientar · aLunos**

Manual de consulta rápida para docentes que trabalham com turmas heterogéneas. Cada cartão cobre um perfil de aprendizagem — o que se vê na sala, o que se pode fazer hoje, e onde a IA pode ajudar. Disponível em 24 línguas, com bibliografia académica citada em cada afirmação.

## Stack

- [Astro](https://astro.build) — gerador de sites estáticos
- TypeScript · Content Collections com validação Zod
- i18n para 24 línguas (PT + 23 línguas oficiais da UE)
- Plus Jakarta Sans + JetBrains Mono + OpenDyslexic (self-hosted via fontsource)
- GitHub Pages via GitHub Actions

## Desenvolvimento local

```bash
npm install
npm run dev
```

O site fica disponível em `http://localhost:4321`.

## Estrutura de conteúdo

```
src/content/
  profiles/    # Perfis de aprendizagem (tdah, dislexia, dispraxia, autismo, sobredotacao, plnm)
  references/  # Referências (legislacao, diferenciacao, avaliacao, etica, oficina)
  tools/       # Catálogo de ferramentas de IA, com nota RGPD por ferramenta
```

As traduções (23 línguas) vivem em `src/lib/content-translations.ts`, `src/lib/i18n.ts` e `src/lib/tool-translations.ts`.

Cada ficheiro `.md` usa frontmatter para todos os campos. O corpo do ficheiro não é usado.

## Adicionar um perfil

1. Criar `src/content/profiles/novo-perfil.md`
2. Preencher o frontmatter seguindo o schema em `src/content/config.ts`
3. O cartão aparece automaticamente no índice e ganha a sua própria página

## Conteúdo pendente

As secções *Onde a IA entra* ficam como espaço reservado até serem preenchidas após o curso em Florença (Agosto 2026).

## Licença

CC BY-NC-SA 4.0
