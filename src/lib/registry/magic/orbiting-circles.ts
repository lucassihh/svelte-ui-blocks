// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import OrbitingCirclesOnePreview from "$lib/components/blocks/magic/orbiting-circles/orbiting-circles-one/preview.svelte";

// Raw
import orbitingCirclesIndexSource from "$lib/components/ui/magic-ui/orbiting-circles/index.ts?raw";
import orbitingCirclesOrbitingCirclesOnePreviewSource from "$lib/components/blocks/magic/orbiting-circles/orbiting-circles-one/preview.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const orbitingCirclesBlocks: BlockShowcaseItem[] = [
	{
		id: "orbiting-circles-one",
		title: "Orbiting Circles One",
		description:
			"A Orbiting Circles One composition.",
		previewComponent: OrbitingCirclesOnePreview,
		previewHref: "/preview/magic/orbiting-circles/orbiting-circles-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "orbiting-circles-one",
		codeTree: createBlockCodeTree("orbiting-circles-one", [
			{
				id: "orbiting-circles-one",
				path: "src/lib/components/blocks/magic/orbiting-circles/orbiting-circles-one/preview.svelte",
				lang: "svelte",
				code: orbitingCirclesOrbitingCirclesOnePreviewSource
			}
		])
	}
];

export function getOrbitingCirclesBlock(id: string) {
	return orbitingCirclesBlocks.find((block) => block.id === id);
}
