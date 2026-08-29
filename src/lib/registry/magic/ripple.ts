// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import RippleOnePreview from "$lib/components/blocks/magic/ripple/ripple-one/preview.svelte";

// Raw
import rippleIndexSource from "$lib/components/ui/magic-ui/ripple/index.ts?raw";
import rippleRippleOnePreviewSource from "$lib/components/blocks/magic/ripple/ripple-one/preview.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const rippleBlocks: BlockShowcaseItem[] = [
	{
		id: "ripple-one",
		title: "Ripple One",
		description:
			"A Ripple One composition.",
		previewComponent: RippleOnePreview,
		previewHref: "/preview/magic/ripple/ripple-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "ripple-one",
		codeTree: createBlockCodeTree("ripple-one", [
			{
				id: "ripple-one",
				path: "src/lib/components/blocks/magic/ripple/ripple-one/preview.svelte",
				lang: "svelte",
				code: rippleRippleOnePreviewSource
			}
		])
	}
];

export function getRippleBlock(id: string) {
	return rippleBlocks.find((block) => block.id === id);
}
