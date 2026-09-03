// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import SparklesTextOnePreview from "$lib/components/blocks/magic/sparkles-text/sparkles-text-one/preview.svelte";

// Raw
import sparklesTextIndexSource from "$lib/components/ui/magic-ui/sparkles-text/index.ts?raw";
import sparklesTextSparklesTextOnePreviewSource from "$lib/components/blocks/magic/sparkles-text/sparkles-text-one/preview.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const sparklesTextBlocks: BlockShowcaseItem[] = [
	{
		id: "sparkles-text-one",
		title: "Sparkles Text One",
		description:
			"A Sparkles Text One composition.",
		previewComponent: SparklesTextOnePreview,
		previewHref: "/preview/magic/sparkles-text/sparkles-text-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "sparkles-text-one",
		codeTree: createBlockCodeTree("sparkles-text-one", [
			{
				id: "sparkles-text-one",
				path: "src/lib/components/blocks/magic/sparkles-text/sparkles-text-one/preview.svelte",
				lang: "svelte",
				code: sparklesTextSparklesTextOnePreviewSource
			}
		])
	}
];

export function getSparklesTextBlock(id: string) {
	return sparklesTextBlocks.find((block) => block.id === id);
}
