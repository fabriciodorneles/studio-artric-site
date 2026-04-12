# Studio ARTRIC — Contexto do Projeto para Claude Code

## O que é este projeto

Site institucional do **Studio ARTRIC — Artes Recreativas Integradas ao Circo**, escola de circo localizada em Santa Teresa, Rio de Janeiro. Fundada em 2013 por Patricia de Souza.

## Stack

- **Astro 5** (static output) + **Tailwind CSS v4** (plugin Vite nativo, sem `tailwind.config.js`)
- Content Collections (Zod schemas) para `cursos` e `agenda`
- Deploy: **Netlify** — branch `claude/circus-landing-page-plan-3Cblz` → `https://studio-artric-site.netlify.app`
- Repositório: `fabriciodorneles/studio-artric-site`

## Branch de desenvolvimento

```
claude/circus-landing-page-plan-3Cblz
```

Todo desenvolvimento vai nessa branch. Cada `git push` atualiza o Netlify automaticamente.

## Estrutura do projeto

```
src/
├── content.config.ts          # Schemas Zod para cursos e agenda
├── content/
│   ├── cursos/                # Um .md por curso — EDITAR AQUI para atualizar cursos
│   └── agenda/                # Um .md por evento — EDITAR AQUI para atualizar agenda
├── styles/global.css          # Design tokens (@theme) — paleta, fontes
├── layouts/
│   ├── BaseLayout.astro       # <head>, SEO, meta tags
│   └── PageLayout.astro       # Nav + Footer wrapper
├── components/
│   ├── navigation/Nav.astro   # Navbar responsiva (mobile menu + scroll effect)
│   ├── sections/              # Hero, DestaquesHome, SobrePreview, CTA
│   ├── cursos/                # CursoCard, CursoGrid
│   ├── agenda/                # AgendaItem, AgendaList
│   ├── contato/               # ContatoForm (Netlify Forms), ContatoInfo
│   └── ui/                    # Button, SectionTitle, Badge, Footer
└── pages/
    ├── index.astro
    ├── sobre.astro
    ├── cursos.astro
    ├── cursos/[slug].astro
    ├── agenda.astro
    └── contato.astro

public/images/                 # Todas as imagens do site
```

## Paleta de cores

```css
--color-velvet:   #1a0a2e  /* roxo escuro — fundo hero */
--color-rouge:    #c0392b  /* carmesim — accent principal */
--color-gold:     #f5c518  /* ouro — destaques, CTAs */
--color-ivory:    #faf6ef  /* branco quente — fundo seções claras */
--color-teal:     #0d7377  /* verde-azul — badges, tags */
--color-charcoal: #2d2d2d  /* texto body */
```

## Como atualizar conteúdo

### Adicionar/editar curso
Editar ou criar arquivo em `src/content/cursos/nome-do-curso.md`. Campos obrigatórios:
```yaml
---
titulo: Nome do Curso
descricao: Descrição curta
categoria: aéreo | acrobacia | dança | teatro | infantil
nivel: iniciante | intermediário | avançado | todos os níveis
duracao: "1h30"
diasSemana: ["Segunda", "Quarta"]
horario: "19h00 - 20h30"
destaque: true   # aparece na homepage
ativo: true
ordem: 1         # ordem de exibição
---
```

### Adicionar evento na agenda
Criar arquivo em `src/content/agenda/YYYY-MM-nome.md`:
```yaml
---
titulo: Nome do Evento
tipo: workshop | aula | espetáculo | evento
dataInicio: 2025-06-15
horario: "14h00 - 18h00"
local: Studio ARTRIC — Rua Almirante Alexandrino, 501
vagas: 20
destaque: true
---
```

## Informações do estúdio

- **Endereço:** Rua Almirante Alexandrino, 501 / Largo do Guimarães — Santa Teresa, RJ
- **Instagram:** @studioartric
- **Email:** artric@outlook.com
- **Site:** www.studioartric.com
- **Telefones:** (21) 3197-2844 / 99994-7336 / 99619-9076
- **Google Maps:** https://g.co/kgs/dYxub9h

## Professores

- **Patricia de Souza** — fundadora, acrobacia aérea e contorção
- **Danilo Gomes** — circo, teatro e acrobacia aérea (PROFAC/RJ, 4+ anos no estúdio)
- **Lúcio Pedra** — breaking e cultura hip hop

## Comandos úteis

```bash
npm run dev      # servidor local em localhost:4321
npm run build    # build de produção em dist/
npm run preview  # preview do build local
```

## Próximas melhorias sugeridas

- [ ] Adicionar foto de Patricia de Souza na página Sobre
- [ ] Atualizar número de WhatsApp real em Footer.astro e ContatoInfo.astro
- [ ] Adicionar `@astrojs/sitemap` para SEO
- [ ] Adicionar mais fotos nos cursos individuais
- [ ] Considerar Decap CMS ou Keystatic para edição visual pelo browser
