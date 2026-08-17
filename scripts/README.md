# Blocks-ui Folder Structure guide

To ensure smooth automatic registry generation and predictable preview URLs, 
all new UI blocks must strictly follow folder structure between the component source code and the SvelteKit preview routes.

### Directory Layout

src/
├── lib/
│   └── components/                 # Blocks-ui source-code
│       └── [ui-name]/              # Example: efferd-ui/, magic-ui/
│           └── [category]/         # Example: hero, footer, faq
│               └── [block-id]/     # Example: hero-one, hero-two
│                   ├── hero.svelte # Hero component code
│                   └── (sub-components or utils) # Hero component dependencies
│
├── routes/
│    └── preview/                    # FullScreen Preview
│        └── [ui-name]/              # Example: efferd-ui, magic-ui/
│            └── [category]/         # Example: hero, footer, faq
│                └── [block-id]/     # Example: hero-one, hero-two
│                    └── +page.svelte # Seo and Blocks-ui import
│
│
└── routes/
    └── blocks/                     # Blocks Page ( to Preview multi blocks )
        └── [ui-name]/              # Example: efferd-ui, magic-ui/
            └── [category]/         # Example: hero, footer, faq
                └── + page.svelte   # Seo & `$lib/components/blocks/blocks-preview` for blocks navigation header
                    └── +page.ts    # import { registry } from "$lib/registry";


### Naming Conventions

- [ui-name]: The library name in kebab-case (Example: efferd-ui/, magic-ui/).
- [category]: The UI component type in kebab-case (Example: hero, logo-cloud, faqs).
- [block-id]: The unique block slug. (Example: hero-one, hero-two, hero-three).


## Python Scripts to generate registry imports and routes automatically

`$ npm run gen:registry`
`$ nom run gen:routes`