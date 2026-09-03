// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import ComparatorOnePreview from "$lib/components/blocks/veil/comparator/comparator-one/comparator-one.svelte";
import ComparatorThreePreview from "$lib/components/blocks/veil/comparator/comparator-three/comparator-three.svelte";
import ComparatorTwoPreview from "$lib/components/blocks/veil/comparator/comparator-two/comparator-two.svelte";

// Raw
import buttonIndexSource from "$lib/components/ui/veil-ui/button/index.ts?raw";
import cardIndexSource from "$lib/components/ui/veil-ui/card/index.ts?raw";
import comparatorComparatorOneSource from "$lib/components/blocks/veil/comparator/comparator-one/comparator-one.svelte?raw";
import comparatorComparatorThreeSource from "$lib/components/blocks/veil/comparator/comparator-three/comparator-three.svelte?raw";
import comparatorComparatorTwoSource from "$lib/components/blocks/veil/comparator/comparator-two/comparator-two.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const comparatorBlocks: BlockShowcaseItem[] = [
	{
		id: "comparator-one",
		title: "Comparator One",
		description:
			"A Comparator One composition.",
		previewComponent: ComparatorOnePreview,
		previewHref: "/preview/veil/comparator/comparator-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "comparator-one",
		codeTree: createBlockCodeTree("comparator-one", [
			{
				id: "comparator-one",
				path: "src/lib/components/blocks/veil/comparator/comparator-one/comparator-one.svelte",
				lang: "svelte",
				code: comparatorComparatorOneSource
			}
		])
	},	{
		id: "comparator-two",
		title: "Comparator Two",
		description:
			"A Comparator Two composition.",
		previewComponent: ComparatorTwoPreview,
		previewHref: "/preview/veil/comparator/comparator-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "comparator-two",
		codeTree: createBlockCodeTree("comparator-two", [
			{
				id: "comparator-two",
				path: "src/lib/components/blocks/veil/comparator/comparator-two/comparator-two.svelte",
				lang: "svelte",
				code: comparatorComparatorTwoSource
			}
		])
	},	{
		id: "comparator-three",
		title: "Comparator Three",
		description:
			"A Comparator Three composition.",
		previewComponent: ComparatorThreePreview,
		previewHref: "/preview/veil/comparator/comparator-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "comparator-three",
		codeTree: createBlockCodeTree("comparator-three", [
			{
				id: "comparator-three",
				path: "src/lib/components/blocks/veil/comparator/comparator-three/comparator-three.svelte",
				lang: "svelte",
				code: comparatorComparatorThreeSource
			}
		])
	}
];

export function getComparatorBlock(id: string) {
	return comparatorBlocks.find((block) => block.id === id);
}
