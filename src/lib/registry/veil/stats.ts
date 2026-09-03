// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import StatsFourPreview from "$lib/components/blocks/veil/stats/stats-four/stats-four.svelte";
import StatsOnePreview from "$lib/components/blocks/veil/stats/stats-one/stats-one.svelte";
import StatsThreePreview from "$lib/components/blocks/veil/stats/stats-three/stats-three.svelte";
import StatsTwoPreview from "$lib/components/blocks/veil/stats/stats-two/stats-two.svelte";

// Raw
import statsStatsFourSource from "$lib/components/blocks/veil/stats/stats-four/stats-four.svelte?raw";
import statsStatsOneSource from "$lib/components/blocks/veil/stats/stats-one/stats-one.svelte?raw";
import statsStatsThreeSource from "$lib/components/blocks/veil/stats/stats-three/stats-three.svelte?raw";
import statsStatsTwoSource from "$lib/components/blocks/veil/stats/stats-two/stats-two.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const statsBlocks: BlockShowcaseItem[] = [
	{
		id: "stats-one",
		title: "Stats One",
		description:
			"A Stats One composition.",
		previewComponent: StatsOnePreview,
		previewHref: "/preview/veil/stats/stats-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "stats-one",
		codeTree: createBlockCodeTree("stats-one", [
			{
				id: "stats-one",
				path: "src/lib/components/blocks/veil/stats/stats-one/stats-one.svelte",
				lang: "svelte",
				code: statsStatsOneSource
			}
		])
	},	{
		id: "stats-two",
		title: "Stats Two",
		description:
			"A Stats Two composition.",
		previewComponent: StatsTwoPreview,
		previewHref: "/preview/veil/stats/stats-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "stats-two",
		codeTree: createBlockCodeTree("stats-two", [
			{
				id: "stats-two",
				path: "src/lib/components/blocks/veil/stats/stats-two/stats-two.svelte",
				lang: "svelte",
				code: statsStatsTwoSource
			}
		])
	},	{
		id: "stats-three",
		title: "Stats Three",
		description:
			"A Stats Three composition.",
		previewComponent: StatsThreePreview,
		previewHref: "/preview/veil/stats/stats-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "stats-three",
		codeTree: createBlockCodeTree("stats-three", [
			{
				id: "stats-three",
				path: "src/lib/components/blocks/veil/stats/stats-three/stats-three.svelte",
				lang: "svelte",
				code: statsStatsThreeSource
			}
		])
	},	{
		id: "stats-four",
		title: "Stats Four",
		description:
			"A Stats Four composition.",
		previewComponent: StatsFourPreview,
		previewHref: "/preview/veil/stats/stats-four",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "stats-four",
		codeTree: createBlockCodeTree("stats-four", [
			{
				id: "stats-four",
				path: "src/lib/components/blocks/veil/stats/stats-four/stats-four.svelte",
				lang: "svelte",
				code: statsStatsFourSource
			}
		])
	}
];

export function getStatsBlock(id: string) {
	return statsBlocks.find((block) => block.id === id);
}
