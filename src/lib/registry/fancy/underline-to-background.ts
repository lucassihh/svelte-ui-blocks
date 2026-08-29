// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import UnderlineToBackgroundOnePreview from "$lib/components/blocks/fancy/underline-to-background/underline-to-background-one/preview.svelte";

// Raw
import underlineToBackgroundIndexSource from "$lib/components/ui/fancy-ui/underline-to-background/index.ts?raw";
import underlineToBackgroundUnderlineToBackgroundOnePreviewSource from "$lib/components/blocks/fancy/underline-to-background/underline-to-background-one/preview.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const underlineToBackgroundBlocks: BlockShowcaseItem[] = [
	{
		id: "underline-to-background-one",
		title: "Underline To Background One",
		description:
			"A Underline To Background One composition.",
		previewComponent: UnderlineToBackgroundOnePreview,
		previewHref: "/preview/fancy/underline-to-background/underline-to-background-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "underline-to-background-one",
		codeTree: createBlockCodeTree("underline-to-background-one", [
			{
				id: "underline-to-background-one",
				path: "src/lib/components/blocks/fancy/underline-to-background/underline-to-background-one/preview.svelte",
				lang: "svelte",
				code: underlineToBackgroundUnderlineToBackgroundOnePreviewSource
			}
		])
	}
];

export function getUnderlineToBackgroundBlock(id: string) {
	return underlineToBackgroundBlocks.find((block) => block.id === id);
}
