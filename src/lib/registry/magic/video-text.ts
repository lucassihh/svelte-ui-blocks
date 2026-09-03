// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import VideoTextOnePreview from "$lib/components/blocks/magic/video-text/video-text-one/preview.svelte";

// Raw
import videoTextIndexSource from "$lib/components/ui/magic-ui/video-text/index.ts?raw";
import videoTextVideoTextOnePreviewSource from "$lib/components/blocks/magic/video-text/video-text-one/preview.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const videoTextBlocks: BlockShowcaseItem[] = [
	{
		id: "video-text-one",
		title: "Video Text One",
		description:
			"A Video Text One composition.",
		previewComponent: VideoTextOnePreview,
		previewHref: "/preview/magic/video-text/video-text-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "video-text-one",
		codeTree: createBlockCodeTree("video-text-one", [
			{
				id: "video-text-one",
				path: "src/lib/components/blocks/magic/video-text/video-text-one/preview.svelte",
				lang: "svelte",
				code: videoTextVideoTextOnePreviewSource
			}
		])
	}
];

export function getVideoTextBlock(id: string) {
	return videoTextBlocks.find((block) => block.id === id);
}
