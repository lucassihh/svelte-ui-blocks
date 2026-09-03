// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import ScrambleHoverFourPreview from "$lib/components/blocks/fancy/scramble-hover/scramble-hover-four/special-symbols-example.svelte";
import ScrambleHoverOnePreview from "$lib/components/blocks/fancy/scramble-hover/scramble-hover-one/new-chars-example.svelte";
import ScrambleHoverThreePreview from "$lib/components/blocks/fancy/scramble-hover/scramble-hover-three/preview.svelte";
import ScrambleHoverTwoPreview from "$lib/components/blocks/fancy/scramble-hover/scramble-hover-two/position-example.svelte";

// Raw
import scrambleHoverIndexSource from "$lib/components/ui/fancy-ui/scramble-hover/index.ts?raw";
import scrambleHoverScrambleHoverFourSpecialSymbolsExampleSource from "$lib/components/blocks/fancy/scramble-hover/scramble-hover-four/special-symbols-example.svelte?raw";
import scrambleHoverScrambleHoverOneNewCharsExampleSource from "$lib/components/blocks/fancy/scramble-hover/scramble-hover-one/new-chars-example.svelte?raw";
import scrambleHoverScrambleHoverThreePreviewSource from "$lib/components/blocks/fancy/scramble-hover/scramble-hover-three/preview.svelte?raw";
import scrambleHoverScrambleHoverTwoPositionExampleSource from "$lib/components/blocks/fancy/scramble-hover/scramble-hover-two/position-example.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const scrambleHoverBlocks: BlockShowcaseItem[] = [
	{
		id: "scramble-hover-one",
		title: "Scramble Hover One",
		description:
			"A Scramble Hover One composition.",
		previewComponent: ScrambleHoverOnePreview,
		previewHref: "/preview/fancy/scramble-hover/scramble-hover-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "scramble-hover-one",
		codeTree: createBlockCodeTree("scramble-hover-one", [
			{
				id: "scramble-hover-one",
				path: "src/lib/components/blocks/fancy/scramble-hover/scramble-hover-one/new-chars-example.svelte",
				lang: "svelte",
				code: scrambleHoverScrambleHoverOneNewCharsExampleSource
			}
		])
	},	{
		id: "scramble-hover-two",
		title: "Scramble Hover Two",
		description:
			"A Scramble Hover Two composition.",
		previewComponent: ScrambleHoverTwoPreview,
		previewHref: "/preview/fancy/scramble-hover/scramble-hover-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "scramble-hover-two",
		codeTree: createBlockCodeTree("scramble-hover-two", [
			{
				id: "scramble-hover-two",
				path: "src/lib/components/blocks/fancy/scramble-hover/scramble-hover-two/position-example.svelte",
				lang: "svelte",
				code: scrambleHoverScrambleHoverTwoPositionExampleSource
			}
		])
	},	{
		id: "scramble-hover-three",
		title: "Scramble Hover Three",
		description:
			"A Scramble Hover Three composition.",
		previewComponent: ScrambleHoverThreePreview,
		previewHref: "/preview/fancy/scramble-hover/scramble-hover-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "scramble-hover-three",
		codeTree: createBlockCodeTree("scramble-hover-three", [
			{
				id: "scramble-hover-three",
				path: "src/lib/components/blocks/fancy/scramble-hover/scramble-hover-three/preview.svelte",
				lang: "svelte",
				code: scrambleHoverScrambleHoverThreePreviewSource
			}
		])
	},	{
		id: "scramble-hover-four",
		title: "Scramble Hover Four",
		description:
			"A Scramble Hover Four composition.",
		previewComponent: ScrambleHoverFourPreview,
		previewHref: "/preview/fancy/scramble-hover/scramble-hover-four",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "scramble-hover-four",
		codeTree: createBlockCodeTree("scramble-hover-four", [
			{
				id: "scramble-hover-four",
				path: "src/lib/components/blocks/fancy/scramble-hover/scramble-hover-four/special-symbols-example.svelte",
				lang: "svelte",
				code: scrambleHoverScrambleHoverFourSpecialSymbolsExampleSource
			}
		])
	}
];

export function getScrambleHoverBlock(id: string) {
	return scrambleHoverBlocks.find((block) => block.id === id);
}
