// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import ArcTimelineOnePreview from "$lib/components/blocks/magic/arc-timeline/arc-timeline-one/preview.svelte";
import ArcTimelineTwoPreview from "$lib/components/blocks/magic/arc-timeline/arc-timeline-two/product-roadmap.svelte";

// Raw
import arcTimelineArcTimelineOnePreviewSource from "$lib/components/blocks/magic/arc-timeline/arc-timeline-one/preview.svelte?raw";
import arcTimelineArcTimelineTwoProductRoadmapSource from "$lib/components/blocks/magic/arc-timeline/arc-timeline-two/product-roadmap.svelte?raw";
import arcTimelineIndexSource from "$lib/components/ui/magic-ui/arc-timeline/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const arcTimelineBlocks: BlockShowcaseItem[] = [
	{
		id: "arc-timeline-one",
		title: "Arc Timeline One",
		description:
			"A Arc Timeline One composition.",
		previewComponent: ArcTimelineOnePreview,
		previewHref: "/preview/magic/arc-timeline/arc-timeline-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "arc-timeline-one",
		codeTree: createBlockCodeTree("arc-timeline-one", [
			{
				id: "arc-timeline-one",
				path: "src/lib/components/blocks/magic/arc-timeline/arc-timeline-one/preview.svelte",
				lang: "svelte",
				code: arcTimelineArcTimelineOnePreviewSource
			}
		])
	},	{
		id: "arc-timeline-two",
		title: "Arc Timeline Two",
		description:
			"A Arc Timeline Two composition.",
		previewComponent: ArcTimelineTwoPreview,
		previewHref: "/preview/magic/arc-timeline/arc-timeline-two",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "arc-timeline-two",
		codeTree: createBlockCodeTree("arc-timeline-two", [
			{
				id: "arc-timeline-two",
				path: "src/lib/components/blocks/magic/arc-timeline/arc-timeline-two/product-roadmap.svelte",
				lang: "svelte",
				code: arcTimelineArcTimelineTwoProductRoadmapSource
			}
		])
	}
];

export function getArcTimelineBlock(id: string) {
	return arcTimelineBlocks.find((block) => block.id === id);
}
