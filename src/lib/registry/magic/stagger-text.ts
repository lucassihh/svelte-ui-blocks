// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import StaggerTextOnePreview from "$lib/components/blocks/magic/stagger-text/stagger-text-one/preview.svelte";

// Raw
import staggerTextIndexSource from "$lib/components/ui/magic-ui/stagger-text/index.ts?raw";
import staggerTextStaggerTextOnePreviewSource from "$lib/components/blocks/magic/stagger-text/stagger-text-one/preview.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const staggerTextBlocks: BlockShowcaseItem[] = [
	{
		id: "stagger-text-one",
		title: "Stagger Text One",
		description:
			"A Stagger Text One composition.",
		previewComponent: StaggerTextOnePreview,
		previewHref: "/preview/magic/stagger-text/stagger-text-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "stagger-text-one",
		codeTree: createBlockCodeTree("stagger-text-one", [
			{
				id: "stagger-text-one",
				path: "src/lib/components/blocks/magic/stagger-text/stagger-text-one/preview.svelte",
				lang: "svelte",
				code: staggerTextStaggerTextOnePreviewSource
			}
		])
	}
];

export function getStaggerTextBlock(id: string) {
	return staggerTextBlocks.find((block) => block.id === id);
}
