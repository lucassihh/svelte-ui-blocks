![Image](/static/og.png)

## Svelte Efferd Blocks

Save hours of design time with clean, ready-to-use `shadcn-svelte` blocks that just work, modern, responsive, and built for speed.


---

## Sobre as Dependências


### Svelte ecosystem

@sveltejs/kit
Framework fullstack do Svelte (roteamento, SSR, endpoints, etc).

@sveltejs/adapter-static
Adapter para gerar site estático (SSG) — exporta tudo como HTML/CSS/JS.

@sveltejs/vite-plugin-svelte
Integra o Svelte com o Vite (compilação, HMR, etc).

svelte-check
Faz type-check e validação do projeto Svelte (erros de TS + templates).



### UI / Estilização / Utilitários CSS

tailwindcss
Framework CSS utility-first.

@tailwindcss/vite
Plugin para integrar Tailwind diretamente com Vite (mais rápido que PostCSS clássico).

tailwind-merge
Resolve conflitos de classes Tailwind (ex: p-2 p-4 → p-4).

tailwind-variants
Cria variantes de componentes (tipo button({ variant: "primary" })).

tw-animate-css
Biblioteca de animações prontas compatíveis com Tailwind.

clsx
Helper para montar classNames condicionalmente.



### Componentes / UI libs

bits-ui
Componentes headless (tipo Radix UI, mas pra Svelte).

paneforge
Sistema de layout com painéis redimensionáveis (tipo split view).




### Animação / Interação

motion-sv
Animações para Svelte (inspirado em Framer Motion).




### Estado / Utilidades Svelte

runed
Utilitários modernos para Svelte (especialmente pensando no Svelte 5 / runes).

svelte-toolbelt
Coleção de helpers e utilities para Svelte.



### Tema / Ambiente

mode-watcher
Detecta e reage a dark/light mode automaticamente.



### Segurança / Sanitização

dompurify
Sanitiza HTML (previne XSS).

isomorphic-dompurify
Versão que funciona tanto no client quanto no server (SSR-safe).



## Datas / Internacionalização

@internationalized/date
Manipulação de datas com suporte a i18n (timezones, calendários, etc).


### UI / Formatação

@number-flow/svelte
Anima números (ex: contador subindo suavemente).


### Ferramentas / Dev

package-manager-detector
Detecta se o projeto usa npm, pnpm, yarn, etc.


### Highlighting (complementos do Shiki)

@shikijs/langs
Linguagens extras para highlight.

@shikijs/themes
Temas prontos para highlight.
