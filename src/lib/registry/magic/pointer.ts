// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import PointerOnePreview from "$lib/components/blocks/magic/pointer/pointer-one/preview.svelte";

// Raw
import pointerIndexSource from "$lib/components/ui/magic-ui/pointer/index.ts?raw";
import pointerPointerOnePreviewSource from "$lib/components/blocks/magic/pointer/pointer-one/preview.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const pointerBlocks: BlockShowcaseItem[] = [
	{
		id: "pointer-one",
		title: "Pointer One",
		description:
			"A Pointer One composition.",
		previewComponent: PointerOnePreview,
		previewHref: "/preview/magic/pointer/pointer-one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "pointer-one",
		codeTree: createBlockCodeTree("pointer-one", [
			{
				id: "pointer-one",
				path: "src/lib/components/blocks/magic/pointer/pointer-one/preview.svelte",
				lang: "svelte",
				code: pointerPointerOnePreviewSource
			}
		])
	}
];

export function getPointerBlock(id: string) {
	return pointerBlocks.find((block) => block.id === id);
}
