// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import HeaderFourPreview from "$lib/components/blocks/veil/header/header-four/header-four.svelte";
import HeaderOnePreview from "$lib/components/blocks/veil/header/header-one/header-one.svelte";
import HeaderThreePreview from "$lib/components/blocks/veil/header/header-three/header-three.svelte";
import HeaderTwoPreview from "$lib/components/blocks/veil/header/header-two/header-two.svelte";

// Raw
import buttonIndexSource from "$lib/components/ui/veil-ui/button/index.ts?raw";
import headerHeaderFourSource from "$lib/components/blocks/veil/header/header-four/header-four.svelte?raw";
import headerHeaderOneSource from "$lib/components/blocks/veil/header/header-one/header-one.svelte?raw";
import headerHeaderThreeSource from "$lib/components/blocks/veil/header/header-three/header-three.svelte?raw";
import headerHeaderTwoSource from "$lib/components/blocks/veil/header/header-two/header-two.svelte?raw";
import logoSvgSource from "$lib/assets/svg/logo.svelte?raw";

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

export const headerBlocks: BlockShowcaseItem[] = [
	{
		id: "header-one",
		title: "Header One",
		description:
			"Header component",
		previewComponent: HeaderOnePreview,
		previewHref: "/preview/veil/header/header-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "header-one",
		codeTree: createBlockCodeTree("header-one", [
			{
				id: "header-one",
				path: "src/lib/components/blocks/veil/header/header-one/header-one.svelte",
				lang: "svelte",
				code: headerHeaderOneSource
			},
			...logoFiles
		])
	},	{
		id: "header-two",
		title: "Header Two",
		description:
			"Header component",
		previewComponent: HeaderTwoPreview,
		previewHref: "/preview/veil/header/header-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "header-two",
		codeTree: createBlockCodeTree("header-two", [
			{
				id: "header-two",
				path: "src/lib/components/blocks/veil/header/header-two/header-two.svelte",
				lang: "svelte",
				code: headerHeaderTwoSource
			},
			...logoFiles
		])
	},	{
		id: "header-three",
		title: "Header Three",
		description:
			"Header component",
		previewComponent: HeaderThreePreview,
		previewHref: "/preview/veil/header/header-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "header-three",
		codeTree: createBlockCodeTree("header-three", [
			{
				id: "header-three",
				path: "src/lib/components/blocks/veil/header/header-three/header-three.svelte",
				lang: "svelte",
				code: headerHeaderThreeSource
			},
			...logoFiles
		])
	},	{
		id: "header-four",
		title: "Header Four",
		description:
			"Header component",
		previewComponent: HeaderFourPreview,
		previewHref: "/preview/veil/header/header-four",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "header-four",
		codeTree: createBlockCodeTree("header-four", [
			{
				id: "header-four",
				path: "src/lib/components/blocks/veil/header/header-four/header-four.svelte",
				lang: "svelte",
				code: headerHeaderFourSource
			},
			...logoFiles
		])
	}
];

export function getHeaderBlock(id: string) {
	return headerBlocks.find((block) => block.id === id);
}
