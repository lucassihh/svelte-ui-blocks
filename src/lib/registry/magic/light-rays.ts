// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import LightRaysOnePreview from "$lib/components/blocks/magic/light-rays/light-rays-one/preview.svelte";

// Raw
import lightRaysIndexSource from "$lib/components/ui/magic-ui/light-rays/index.ts?raw";
import lightRaysLightRaysOnePreviewSource from "$lib/components/blocks/magic/light-rays/light-rays-one/preview.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const lightRaysBlocks: BlockShowcaseItem[] = [
	{
		id: "light-rays-one",
		title: "Light Rays One",
		description:
			"A Light Rays One composition.",
		previewComponent: LightRaysOnePreview,
		previewHref: "/preview/magic/light-rays/light-rays-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "light-rays-one",
		codeTree: createBlockCodeTree("light-rays-one", [
			{
				id: "light-rays-one",
				path: "src/lib/components/blocks/magic/light-rays/light-rays-one/preview.svelte",
				lang: "svelte",
				code: lightRaysLightRaysOnePreviewSource
			}
		])
	}
];

export function getLightRaysBlock(id: string) {
	return lightRaysBlocks.find((block) => block.id === id);
}
