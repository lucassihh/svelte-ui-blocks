# Blocks UI Architecture & Registry Guide

This guide defines the directory rules, naming conventions, and automated workflows
required to maintain component compatibility across registry generation, full-screen previews, and catalog pages.

## Directory Layout

Components and routes must adhere strictly to the tree structure below:

```markdown
src/
├── lib/
│ └── components/
│ └── blocks/ # Source code for components
│ └── [ui-name]/ # ex: efferd, magic
│ └── [category]/ # ex: hero, footer, faq
│ └── [block-id]/ # ex: hero-one, hero-two
│
├── routes/
│ ├── preview/ # Full-screen preview routes
│ │ └── [ui-name]/
│ │ └── [category]/
│ │ └── [block-id]/
│ │ └── +page.svelte
│ │
│ └── blocks/ # Blocks-page showcase routes
│ └── [ui-name]/
│ └── [category]/
│ ├── +page.svelte
│ └── +page.ts
```

## Naming Conventions

All folder and file parameters must use kebab-case:

- [ui-name]: The UI library identifier (ex: efferd, magic)
- [category]: The component category type (ex: hero, logo-cloud, faqs)
- [block-id]: Unique block identifier (ex: hero-one, hero-two, hero-three)

## Automation Workflows

Run Automated Generation scripts

1. Generate the module registries

`$ npm run gen:registry`

2. Generate SvelteKit preview & block routes

`$ npm run gen:routes`

3. After running the generation scripts

Add new category exports in `src/lib/registry/index.ts`

## Usage Example

Access registered block components directly anywhere

```svelte
<script lang="ts">
  import { registry } from "$lib/registry";

  const efferd = registry["efferd"];
  const heroBlockList = efferd.hero;
</script>
```
