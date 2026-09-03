// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import HyperTextOnePreview from "$lib/components/blocks/magic/hyper-text/hyper-text-one/preview.svelte";

// Raw
import hyperTextHyperTextOnePreviewSource from "$lib/components/blocks/magic/hyper-text/hyper-text-one/preview.svelte?raw";
import hyperTextIndexSource from "$lib/components/ui/magic-ui/hyper-text/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const hyperTextBlocks: BlockShowcaseItem[] = [
	{
		id: "hyper-text-one",
		title: "Hyper Text One",
		description:
			"A Hyper Text One composition.",
		previewComponent: HyperTextOnePreview,
		previewHref: "/preview/magic/hyper-text/hyper-text-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "hyper-text-one",
		codeTree: createBlockCodeTree("hyper-text-one", [
			{
				id: "hyper-text-one",
				path: "src/lib/components/blocks/magic/hyper-text/hyper-text-one/preview.svelte",
				lang: "svelte",
				code: hyperTextHyperTextOnePreviewSource
			}
		])
	}
];

export function getHyperTextBlock(id: string) {
	return hyperTextBlocks.find((block) => block.id === id);
}
