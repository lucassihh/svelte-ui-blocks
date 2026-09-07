// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import FlickeringGridOnePreview from "$lib/components/blocks/magic/flickering-grid/flickering-grid-one/flickering-grid-basic.svelte";
import FlickeringGridTwoPreview from "$lib/components/blocks/magic/flickering-grid/flickering-grid-two/preview.svelte";

// Raw
import flickeringGridFlickeringGridOneFlickeringGridBasicSource from "$lib/components/blocks/magic/flickering-grid/flickering-grid-one/flickering-grid-basic.svelte?raw";
import flickeringGridFlickeringGridTwoPreviewSource from "$lib/components/blocks/magic/flickering-grid/flickering-grid-two/preview.svelte?raw";
import flickeringGridIndexSource from "$lib/components/ui/magic-ui/flickering-grid/index.ts?raw";
import flickeringGridSource from "$lib/components/ui/magic-ui/flickering-grid/flickering-grid.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const flickeringGridBlocks: BlockShowcaseItem[] = [
	{
		id: "flickering-grid-one",
		title: "Flickering Grid One",
		description:
			"A Flickering Grid One composition.",
		previewComponent: FlickeringGridOnePreview,
		previewHref: "/preview/magic/flickering-grid/flickering-grid-one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "flickering-grid-one",
		codeTree: createBlockCodeTree("flickering-grid-one", [
			{
				id: "flickering-grid-one",
				path: "src/lib/components/blocks/magic/flickering-grid/flickering-grid-one/flickering-grid-basic.svelte",
				lang: "svelte",
				code: flickeringGridFlickeringGridOneFlickeringGridBasicSource
			}
		])
	},	{
		id: "flickering-grid-two",
		title: "Flickering Grid Two",
		description:
			"A Flickering Grid Two composition.",
		previewComponent: FlickeringGridTwoPreview,
		previewHref: "/preview/magic/flickering-grid/flickering-grid-two",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "flickering-grid-two",
		codeTree: createBlockCodeTree("flickering-grid-two", [
			{
				id: "flickering-grid-two",
				path: "src/lib/components/blocks/magic/flickering-grid/flickering-grid-two/preview.svelte",
				lang: "svelte",
				code: flickeringGridFlickeringGridTwoPreviewSource
			}
		])
	}
];

export function getFlickeringGridBlock(id: string) {
	return flickeringGridBlocks.find((block) => block.id === id);
}
