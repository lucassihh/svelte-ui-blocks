// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import TextRotateOnePreview from "$lib/components/blocks/fancy/text-rotate/text-rotate-one/preview.svelte";

// Raw
import textRotateIndexSource from "$lib/components/ui/fancy-ui/text-rotate/index.ts?raw";
import textRotateTextRotateOnePreviewSource from "$lib/components/blocks/fancy/text-rotate/text-rotate-one/preview.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const textRotateBlocks: BlockShowcaseItem[] = [
	{
		id: "text-rotate-one",
		title: "Text Rotate One",
		description:
			"A Text Rotate One composition.",
		previewComponent: TextRotateOnePreview,
		previewHref: "/preview/fancy/text-rotate/text-rotate-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "text-rotate-one",
		codeTree: createBlockCodeTree("text-rotate-one", [
			{
				id: "text-rotate-one",
				path: "src/lib/components/blocks/fancy/text-rotate/text-rotate-one/preview.svelte",
				lang: "svelte",
				code: textRotateTextRotateOnePreviewSource
			}
		])
	}
];

export function getTextRotateBlock(id: string) {
	return textRotateBlocks.find((block) => block.id === id);
}
