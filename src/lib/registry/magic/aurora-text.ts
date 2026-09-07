// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import AuroraTextOnePreview from "$lib/components/blocks/magic/aurora-text/aurora-text-one/preview.svelte";
import AuroraTextTwoPreview from "$lib/components/blocks/magic/aurora-text/aurora-text-two/demo-example.svelte";

// Raw
import auroraTextAuroraTextOnePreviewSource from "$lib/components/blocks/magic/aurora-text/aurora-text-one/preview.svelte?raw";
import auroraTextAuroraTextTwoDemoExampleSource from "$lib/components/blocks/magic/aurora-text/aurora-text-two/demo-example.svelte?raw";
import auroraTextIndexSource from "$lib/components/ui/magic-ui/aurora-text/index.ts?raw";
import auroraTextSource from "$lib/components/ui/magic-ui/aurora-text/aurora-text.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const auroraTextBlocks: BlockShowcaseItem[] = [
	{
		id: "aurora-text-one",
		title: "Aurora Text One",
		description:
			"A Aurora Text One composition.",
		previewComponent: AuroraTextOnePreview,
		previewHref: "/preview/magic/aurora-text/aurora-text-one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "aurora-text-one",
		codeTree: createBlockCodeTree("aurora-text-one", [
			{
				id: "aurora-text-one",
				path: "src/lib/components/blocks/magic/aurora-text/aurora-text-one/preview.svelte",
				lang: "svelte",
				code: auroraTextAuroraTextOnePreviewSource
			}
		])
	},	{
		id: "aurora-text-two",
		title: "Aurora Text Two",
		description:
			"A Aurora Text Two composition.",
		previewComponent: AuroraTextTwoPreview,
		previewHref: "/preview/magic/aurora-text/aurora-text-two",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "aurora-text-two",
		codeTree: createBlockCodeTree("aurora-text-two", [
			{
				id: "aurora-text-two",
				path: "src/lib/components/blocks/magic/aurora-text/aurora-text-two/demo-example.svelte",
				lang: "svelte",
				code: auroraTextAuroraTextTwoDemoExampleSource
			}
		])
	}
];

export function getAuroraTextBlock(id: string) {
	return auroraTextBlocks.find((block) => block.id === id);
}
