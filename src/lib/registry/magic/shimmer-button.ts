// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import ShimmerButtonOnePreview from "$lib/components/blocks/magic/shimmer-button/shimmer-button-one/preview.svelte";

// Raw
import shimmerButtonIndexSource from "$lib/components/ui/magic-ui/shimmer-button/index.ts?raw";
import shimmerButtonShimmerButtonOnePreviewSource from "$lib/components/blocks/magic/shimmer-button/shimmer-button-one/preview.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const shimmerButtonBlocks: BlockShowcaseItem[] = [
	{
		id: "shimmer-button-one",
		title: "Shimmer Button One",
		description:
			"A Shimmer Button One composition.",
		previewComponent: ShimmerButtonOnePreview,
		previewHref: "/preview/magic/shimmer-button/shimmer-button-one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "shimmer-button-one",
		codeTree: createBlockCodeTree("shimmer-button-one", [
			{
				id: "shimmer-button-one",
				path: "src/lib/components/blocks/magic/shimmer-button/shimmer-button-one/preview.svelte",
				lang: "svelte",
				code: shimmerButtonShimmerButtonOnePreviewSource
			}
		])
	}
];

export function getShimmerButtonBlock(id: string) {
	return shimmerButtonBlocks.find((block) => block.id === id);
}
