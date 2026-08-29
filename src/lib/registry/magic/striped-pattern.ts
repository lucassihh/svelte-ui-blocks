// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import StripedPatternOnePreview from "$lib/components/blocks/magic/striped-pattern/striped-pattern-one/preview.svelte";

// Raw
import stripedPatternIndexSource from "$lib/components/ui/magic-ui/striped-pattern/index.ts?raw";
import stripedPatternStripedPatternOnePreviewSource from "$lib/components/blocks/magic/striped-pattern/striped-pattern-one/preview.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const stripedPatternBlocks: BlockShowcaseItem[] = [
	{
		id: "striped-pattern-one",
		title: "Striped Pattern One",
		description:
			"A Striped Pattern One composition.",
		previewComponent: StripedPatternOnePreview,
		previewHref: "/preview/magic/striped-pattern/striped-pattern-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "striped-pattern-one",
		codeTree: createBlockCodeTree("striped-pattern-one", [
			{
				id: "striped-pattern-one",
				path: "src/lib/components/blocks/magic/striped-pattern/striped-pattern-one/preview.svelte",
				lang: "svelte",
				code: stripedPatternStripedPatternOnePreviewSource
			}
		])
	}
];

export function getStripedPatternBlock(id: string) {
	return stripedPatternBlocks.find((block) => block.id === id);
}
