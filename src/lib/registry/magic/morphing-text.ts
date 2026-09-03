// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import MorphingTextOnePreview from "$lib/components/blocks/magic/morphing-text/morphing-text-one/preview.svelte";

// Raw
import morphingTextIndexSource from "$lib/components/ui/magic-ui/morphing-text/index.ts?raw";
import morphingTextMorphingTextOnePreviewSource from "$lib/components/blocks/magic/morphing-text/morphing-text-one/preview.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const morphingTextBlocks: BlockShowcaseItem[] = [
	{
		id: "morphing-text-one",
		title: "Morphing Text One",
		description:
			"A Morphing Text One composition.",
		previewComponent: MorphingTextOnePreview,
		previewHref: "/preview/magic/morphing-text/morphing-text-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "morphing-text-one",
		codeTree: createBlockCodeTree("morphing-text-one", [
			{
				id: "morphing-text-one",
				path: "src/lib/components/blocks/magic/morphing-text/morphing-text-one/preview.svelte",
				lang: "svelte",
				code: morphingTextMorphingTextOnePreviewSource
			}
		])
	}
];

export function getMorphingTextBlock(id: string) {
	return morphingTextBlocks.find((block) => block.id === id);
}
