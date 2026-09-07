// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import LineShadowTextOnePreview from "$lib/components/blocks/magic/line-shadow-text/line-shadow-text-one/preview.svelte";

// Raw
import lineShadowTextIndexSource from "$lib/components/ui/magic-ui/line-shadow-text/index.ts?raw";
import lineShadowTextLineShadowTextOnePreviewSource from "$lib/components/blocks/magic/line-shadow-text/line-shadow-text-one/preview.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const lineShadowTextBlocks: BlockShowcaseItem[] = [
	{
		id: "line-shadow-text-one",
		title: "Line Shadow Text One",
		description:
			"A Line Shadow Text One composition.",
		previewComponent: LineShadowTextOnePreview,
		previewHref: "/preview/magic/line-shadow-text/line-shadow-text-one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "line-shadow-text-one",
		codeTree: createBlockCodeTree("line-shadow-text-one", [
			{
				id: "line-shadow-text-one",
				path: "src/lib/components/blocks/magic/line-shadow-text/line-shadow-text-one/preview.svelte",
				lang: "svelte",
				code: lineShadowTextLineShadowTextOnePreviewSource
			}
		])
	}
];

export function getLineShadowTextBlock(id: string) {
	return lineShadowTextBlocks.find((block) => block.id === id);
}
