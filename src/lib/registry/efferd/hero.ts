// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import HeroOnePreview from "$lib/components/blocks/efferd/hero/hero-one/hero.svelte";
import HeroThreePreview from "$lib/components/blocks/efferd/hero/hero-three/hero.svelte";
import HeroTwoPreview from "$lib/components/blocks/efferd/hero/hero-two/hero.svelte";

// Raw
import decorIconIndexSource from "$lib/components/ui/decor-icon/index.ts?raw";
import dividerIndexSource from "$lib/components/ui/full-width-divider/index.ts?raw";
import heroHeroOneHeroSource from "$lib/components/blocks/efferd/hero/hero-one/hero.svelte?raw";
import heroHeroThreeHeroSource from "$lib/components/blocks/efferd/hero/hero-three/hero.svelte?raw";
import heroHeroTwoHeroSource from "$lib/components/blocks/efferd/hero/hero-two/hero.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];
const decorIconFiles = [
	{
		id: "shared:decor-icon-index",
		path: "components/ui/decor-icon/index.ts",
		lang: "typescript" as const,
		code: decorIconIndexSource
	}
];
const dividerFiles = [
	{
		id: "shared:divider-index",
		path: "components/ui/full-width-divider/index.ts",
		lang: "typescript" as const,
		code: dividerIndexSource
	}
];

export const heroBlocks: BlockShowcaseItem[] = [
	{
		id: "hero-one",
		title: "Hero One",
		description:
			"A full hero composition with sticky header, editorial spotlight, and a marquee trust band.",
		previewComponent: HeroOnePreview,
		previewHref: "/preview/efferd/hero/hero-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "hero-one",
		codeTree: createBlockCodeTree("hero-one", [
			{
				id: "hero-one",
				path: "src/lib/components/blocks/efferd/hero/hero-one/hero.svelte",
				lang: "svelte",
				code: heroHeroOneHeroSource
			},
			...buttonFiles
		])
	},	{
		id: "hero-two",
		title: "Hero Two",
		description:
			"A full hero composition with sticky header, editorial spotlight, and a marquee trust band.",
		previewComponent: HeroTwoPreview,
		previewHref: "/preview/efferd/hero/hero-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "hero-two",
		codeTree: createBlockCodeTree("hero-two", [
			{
				id: "hero-two",
				path: "src/lib/components/blocks/efferd/hero/hero-two/hero.svelte",
				lang: "svelte",
				code: heroHeroTwoHeroSource
			},
			...buttonFiles,
			...decorIconFiles,
			...dividerFiles
		])
	},	{
		id: "hero-three",
		title: "Hero Three",
		description:
			"A full hero composition with sticky header, editorial spotlight, and a marquee trust band.",
		previewComponent: HeroThreePreview,
		previewHref: "/preview/efferd/hero/hero-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "hero-three",
		codeTree: createBlockCodeTree("hero-three", [
			{
				id: "hero-three",
				path: "src/lib/components/blocks/efferd/hero/hero-three/hero.svelte",
				lang: "svelte",
				code: heroHeroThreeHeroSource
			},
			...buttonFiles
		])
	}
];

export function getHeroBlock(id: string) {
	return heroBlocks.find((block) => block.id === id);
}
