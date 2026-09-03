// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import GridPatternOnePreview from "$lib/components/blocks/magic/grid-pattern/grid-pattern-one/basic.svelte";
import GridPatternTwoPreview from "$lib/components/blocks/magic/grid-pattern/grid-pattern-two/preview.svelte";

// Raw
import gridPatternGridPatternOneBasicSource from "$lib/components/blocks/magic/grid-pattern/grid-pattern-one/basic.svelte?raw";
import gridPatternGridPatternTwoPreviewSource from "$lib/components/blocks/magic/grid-pattern/grid-pattern-two/preview.svelte?raw";
import gridPatternIndexSource from "$lib/components/ui/magic-ui/grid-pattern/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const gridPatternBlocks: BlockShowcaseItem[] = [
	{
		id: "grid-pattern-one",
		title: "Grid Pattern One",
		description:
			"A Grid Pattern One composition.",
		previewComponent: GridPatternOnePreview,
		previewHref: "/preview/magic/grid-pattern/grid-pattern-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "grid-pattern-one",
		codeTree: createBlockCodeTree("grid-pattern-one", [
			{
				id: "grid-pattern-one",
				path: "src/lib/components/blocks/magic/grid-pattern/grid-pattern-one/basic.svelte",
				lang: "svelte",
				code: gridPatternGridPatternOneBasicSource
			}
		])
	},	{
		id: "grid-pattern-two",
		title: "Grid Pattern Two",
		description:
			"A Grid Pattern Two composition.",
		previewComponent: GridPatternTwoPreview,
		previewHref: "/preview/magic/grid-pattern/grid-pattern-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "grid-pattern-two",
		codeTree: createBlockCodeTree("grid-pattern-two", [
			{
				id: "grid-pattern-two",
				path: "src/lib/components/blocks/magic/grid-pattern/grid-pattern-two/preview.svelte",
				lang: "svelte",
				code: gridPatternGridPatternTwoPreviewSource
			}
		])
	}
];

export function getGridPatternBlock(id: string) {
	return gridPatternBlocks.find((block) => block.id === id);
}
