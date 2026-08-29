// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import ShineBorderOnePreview from "$lib/components/blocks/magic/shine-border/shine-border-one/preview.svelte";
import ShineBorderTwoPreview from "$lib/components/blocks/magic/shine-border/shine-border-two/shine-border-monotone.svelte";

// Raw
import inputIndexSource from "$lib/components/ui/input/index.ts?raw";
import labelIndexSource from "$lib/components/ui/label/index.ts?raw";
import shineBorderShineBorderOnePreviewSource from "$lib/components/blocks/magic/shine-border/shine-border-one/preview.svelte?raw";
import shineBorderShineBorderTwoShineBorderMonotoneSource from "$lib/components/blocks/magic/shine-border/shine-border-two/shine-border-monotone.svelte?raw";
import shineBorderSource from "$lib/components/ui/magic-ui/shine-border/shine-border.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const shineBorderBlocks: BlockShowcaseItem[] = [
	{
		id: "shine-border-one",
		title: "Shine Border One",
		description:
			"A Shine Border One composition.",
		previewComponent: ShineBorderOnePreview,
		previewHref: "/preview/magic/shine-border/shine-border-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "shine-border-one",
		codeTree: createBlockCodeTree("shine-border-one", [
			{
				id: "shine-border-one",
				path: "src/lib/components/blocks/magic/shine-border/shine-border-one/preview.svelte",
				lang: "svelte",
				code: shineBorderShineBorderOnePreviewSource
			},
			...buttonFiles
		])
	},	{
		id: "shine-border-two",
		title: "Shine Border Two",
		description:
			"A Shine Border Two composition.",
		previewComponent: ShineBorderTwoPreview,
		previewHref: "/preview/magic/shine-border/shine-border-two",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "shine-border-two",
		codeTree: createBlockCodeTree("shine-border-two", [
			{
				id: "shine-border-two",
				path: "src/lib/components/blocks/magic/shine-border/shine-border-two/shine-border-monotone.svelte",
				lang: "svelte",
				code: shineBorderShineBorderTwoShineBorderMonotoneSource
			},
			...buttonFiles
		])
	}
];

export function getShineBorderBlock(id: string) {
	return shineBorderBlocks.find((block) => block.id === id);
}
