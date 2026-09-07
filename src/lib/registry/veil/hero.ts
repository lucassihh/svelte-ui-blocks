// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import HeroFivePreview from "$lib/components/blocks/veil/hero/hero-five/hero-five.svelte";
import HeroFourPreview from "$lib/components/blocks/veil/hero/hero-four/hero-four.svelte";
import HeroOnePreview from "$lib/components/blocks/veil/hero/hero-one/hero-one.svelte";
import HeroThreePreview from "$lib/components/blocks/veil/hero/hero-three/hero-three.svelte";
import HeroTwoPreview from "$lib/components/blocks/veil/hero/hero-two/hero-two.svelte";

// Raw
import githubSource from "$lib/assets/svg/social/github.svelte?raw";
import headerHeaderFourSource from "$lib/components/blocks/veil/header/header-four/header-four.svelte?raw";
import headerHeaderOneSource from "$lib/components/blocks/veil/header/header-one/header-one.svelte?raw";
import headerHeaderThreeSource from "$lib/components/blocks/veil/header/header-three/header-three.svelte?raw";
import headerHeaderTwoSource from "$lib/components/blocks/veil/header/header-two/header-two.svelte?raw";
import heroHeroFiveSource from "$lib/components/blocks/veil/hero/hero-five/hero-five.svelte?raw";
import heroHeroFourSource from "$lib/components/blocks/veil/hero/hero-four/hero-four.svelte?raw";
import heroHeroOneSource from "$lib/components/blocks/veil/hero/hero-one/hero-one.svelte?raw";
import heroHeroThreeSource from "$lib/components/blocks/veil/hero/hero-three/hero-three.svelte?raw";
import heroHeroTwoSource from "$lib/components/blocks/veil/hero/hero-two/hero-two.svelte?raw";
import logoSvgSource from "$lib/assets/svg/logo.svelte?raw";
import svgIndexSource from "$lib/assets/svg/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];
const logoFiles = [
	{
		id: "shared:logo-svg",
		path: "svgs/logo.svelte",
		lang: "svelte" as const,
		code: logoSvgSource
	}
];
const headerHeaderFourFiles = [
	{
		id: "hero-four:header",
		path: "src/lib/components/blocks/veil/header/header-four/header-four.svelte",
		lang: "svelte" as const,
		code: headerHeaderFourSource
	}
];
const headerHeaderOneFiles = [
	{
		id: "hero-one:header",
		path: "src/lib/components/blocks/veil/header/header-one/header-one.svelte",
		lang: "svelte" as const,
		code: headerHeaderOneSource
	}
];
const headerHeaderThreeFiles = [
	{
		id: "hero-three:header",
		path: "src/lib/components/blocks/veil/header/header-three/header-three.svelte",
		lang: "svelte" as const,
		code: headerHeaderThreeSource
	}
];
const headerHeaderTwoFiles = [
	{
		id: "hero-two:header",
		path: "src/lib/components/blocks/veil/header/header-two/header-two.svelte",
		lang: "svelte" as const,
		code: headerHeaderTwoSource
	}
];

export const heroBlocks: BlockShowcaseItem[] = [
	{
		id: "hero-one",
		title: "Hero One",
		description:
			"A full hero composition with sticky header, editorial spotlight, and a marquee trust band.",
		previewComponent: HeroOnePreview,
		previewHref: "/preview/veil/hero/hero-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "hero-one",
		codeTree: createBlockCodeTree("hero-one", [
			{
				id: "hero-one",
				path: "src/lib/components/blocks/veil/hero/hero-one/hero-one.svelte",
				lang: "svelte",
				code: heroHeroOneSource
			},
			...headerHeaderOneFiles
		])
	},	{
		id: "hero-two",
		title: "Hero Two",
		description:
			"A full hero composition with sticky header, editorial spotlight, and a marquee trust band.",
		previewComponent: HeroTwoPreview,
		previewHref: "/preview/veil/hero/hero-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "hero-two",
		codeTree: createBlockCodeTree("hero-two", [
			{
				id: "hero-two",
				path: "src/lib/components/blocks/veil/hero/hero-two/hero-two.svelte",
				lang: "svelte",
				code: heroHeroTwoSource
			},
			...headerHeaderTwoFiles
		])
	},	{
		id: "hero-three",
		title: "Hero Three",
		description:
			"A full hero composition with sticky header, editorial spotlight, and a marquee trust band.",
		previewComponent: HeroThreePreview,
		previewHref: "/preview/veil/hero/hero-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "hero-three",
		codeTree: createBlockCodeTree("hero-three", [
			{
				id: "hero-three",
				path: "src/lib/components/blocks/veil/hero/hero-three/hero-three.svelte",
				lang: "svelte",
				code: heroHeroThreeSource
			},
			...headerHeaderThreeFiles
		])
	},	{
		id: "hero-four",
		title: "Hero Four",
		description:
			"A full hero composition with sticky header, editorial spotlight, and a marquee trust band.",
		previewComponent: HeroFourPreview,
		previewHref: "/preview/veil/hero/hero-four",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "hero-four",
		codeTree: createBlockCodeTree("hero-four", [
			{
				id: "hero-four",
				path: "src/lib/components/blocks/veil/hero/hero-four/hero-four.svelte",
				lang: "svelte",
				code: heroHeroFourSource
			},
			...headerHeaderFourFiles
		])
	},	{
		id: "hero-five",
		title: "Hero Five",
		description:
			"A full hero composition with sticky header, editorial spotlight, and a marquee trust band.",
		previewComponent: HeroFivePreview,
		previewHref: "/preview/veil/hero/hero-five",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "hero-five",
		codeTree: createBlockCodeTree("hero-five", [
			{
				id: "hero-five",
				path: "src/lib/components/blocks/veil/hero/hero-five/hero-five.svelte",
				lang: "svelte",
				code: heroHeroFiveSource
			},
			...logoFiles
		])
	}
];

export function getHeroBlock(id: string) {
	return heroBlocks.find((block) => block.id === id);
}
