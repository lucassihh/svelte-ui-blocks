// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import WordRotateOnePreview from "$lib/components/blocks/magic/word-rotate/word-rotate-one/preview.svelte";

// Raw
import wordRotateIndexSource from "$lib/components/ui/magic-ui/word-rotate/index.ts?raw";
import wordRotateWordRotateOnePreviewSource from "$lib/components/blocks/magic/word-rotate/word-rotate-one/preview.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const wordRotateBlocks: BlockShowcaseItem[] = [
	{
		id: "word-rotate-one",
		title: "Word Rotate One",
		description:
			"A Word Rotate One composition.",
		previewComponent: WordRotateOnePreview,
		previewHref: "/preview/magic/word-rotate/word-rotate-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "word-rotate-one",
		codeTree: createBlockCodeTree("word-rotate-one", [
			{
				id: "word-rotate-one",
				path: "src/lib/components/blocks/magic/word-rotate/word-rotate-one/preview.svelte",
				lang: "svelte",
				code: wordRotateWordRotateOnePreviewSource
			}
		])
	}
];

export function getWordRotateBlock(id: string) {
	return wordRotateBlocks.find((block) => block.id === id);
}
