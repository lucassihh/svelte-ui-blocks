// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import ScrollProgressOnePreview from "$lib/components/blocks/magic/scroll-progress/scroll-progress-one/preview.svelte";

// Raw
import scrollProgressIndexSource from "$lib/components/ui/magic-ui/scroll-progress/index.ts?raw";
import scrollProgressScrollProgressOnePreviewSource from "$lib/components/blocks/magic/scroll-progress/scroll-progress-one/preview.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const scrollProgressBlocks: BlockShowcaseItem[] = [
	{
		id: "scroll-progress-one",
		title: "Scroll Progress One",
		description:
			"A Scroll Progress One composition.",
		previewComponent: ScrollProgressOnePreview,
		previewHref: "/preview/magic/scroll-progress/scroll-progress-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "scroll-progress-one",
		codeTree: createBlockCodeTree("scroll-progress-one", [
			{
				id: "scroll-progress-one",
				path: "src/lib/components/blocks/magic/scroll-progress/scroll-progress-one/preview.svelte",
				lang: "svelte",
				code: scrollProgressScrollProgressOnePreviewSource
			}
		])
	}
];

export function getScrollProgressBlock(id: string) {
	return scrollProgressBlocks.find((block) => block.id === id);
}
