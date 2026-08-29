// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import ProgressiveBlurOnePreview from "$lib/components/blocks/magic/progressive-blur/progressive-blur-one/preview.svelte";

// Raw
import progressiveBlurIndexSource from "$lib/components/ui/magic-ui/progressive-blur/index.ts?raw";
import progressiveBlurProgressiveBlurOnePreviewSource from "$lib/components/blocks/magic/progressive-blur/progressive-blur-one/preview.svelte?raw";
import scrollAreaIndexSource from "$lib/components/ui/scroll-area/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const progressiveBlurBlocks: BlockShowcaseItem[] = [
	{
		id: "progressive-blur-one",
		title: "Progressive Blur One",
		description:
			"A Progressive Blur One composition.",
		previewComponent: ProgressiveBlurOnePreview,
		previewHref: "/preview/magic/progressive-blur/progressive-blur-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "progressive-blur-one",
		codeTree: createBlockCodeTree("progressive-blur-one", [
			{
				id: "progressive-blur-one",
				path: "src/lib/components/blocks/magic/progressive-blur/progressive-blur-one/preview.svelte",
				lang: "svelte",
				code: progressiveBlurProgressiveBlurOnePreviewSource
			}
		])
	}
];

export function getProgressiveBlurBlock(id: string) {
	return progressiveBlurBlocks.find((block) => block.id === id);
}
