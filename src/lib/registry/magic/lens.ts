// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import LensOnePreview from "$lib/components/blocks/magic/lens/lens-one/preview.svelte";

// Raw
import lensIndexSource from "$lib/components/ui/magic-ui/lens/index.ts?raw";
import lensLensOnePreviewSource from "$lib/components/blocks/magic/lens/lens-one/preview.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const lensBlocks: BlockShowcaseItem[] = [
	{
		id: "lens-one",
		title: "Lens One",
		description:
			"A Lens One composition.",
		previewComponent: LensOnePreview,
		previewHref: "/preview/magic/lens/lens-one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "lens-one",
		codeTree: createBlockCodeTree("lens-one", [
			{
				id: "lens-one",
				path: "src/lib/components/blocks/magic/lens/lens-one/preview.svelte",
				lang: "svelte",
				code: lensLensOnePreviewSource
			},
			...buttonFiles
		])
	}
];

export function getLensBlock(id: string) {
	return lensBlocks.find((block) => block.id === id);
}
