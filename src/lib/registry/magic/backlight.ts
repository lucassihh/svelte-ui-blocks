// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import BacklightOnePreview from "$lib/components/blocks/magic/backlight/backlight-one/preview.svelte";
import BacklightThreePreview from "$lib/components/blocks/magic/backlight/backlight-three/backlight-svg-example.svelte";
import BacklightTwoPreview from "$lib/components/blocks/magic/backlight/backlight-two/backlight-image-example.svelte";

// Raw
import backlightBacklightOnePreviewSource from "$lib/components/blocks/magic/backlight/backlight-one/preview.svelte?raw";
import backlightBacklightThreeBacklightSvgExampleSource from "$lib/components/blocks/magic/backlight/backlight-three/backlight-svg-example.svelte?raw";
import backlightBacklightTwoBacklightImageExampleSource from "$lib/components/blocks/magic/backlight/backlight-two/backlight-image-example.svelte?raw";
import backlightIndexSource from "$lib/components/ui/magic-ui/backlight/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const backlightBlocks: BlockShowcaseItem[] = [
	{
		id: "backlight-one",
		title: "Backlight One",
		description:
			"A Backlight One composition.",
		previewComponent: BacklightOnePreview,
		previewHref: "/preview/magic/backlight/backlight-one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "backlight-one",
		codeTree: createBlockCodeTree("backlight-one", [
			{
				id: "backlight-one",
				path: "src/lib/components/blocks/magic/backlight/backlight-one/preview.svelte",
				lang: "svelte",
				code: backlightBacklightOnePreviewSource
			}
		])
	},	{
		id: "backlight-two",
		title: "Backlight Two",
		description:
			"A Backlight Two composition.",
		previewComponent: BacklightTwoPreview,
		previewHref: "/preview/magic/backlight/backlight-two",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "backlight-two",
		codeTree: createBlockCodeTree("backlight-two", [
			{
				id: "backlight-two",
				path: "src/lib/components/blocks/magic/backlight/backlight-two/backlight-image-example.svelte",
				lang: "svelte",
				code: backlightBacklightTwoBacklightImageExampleSource
			}
		])
	},	{
		id: "backlight-three",
		title: "Backlight Three",
		description:
			"A Backlight Three composition.",
		previewComponent: BacklightThreePreview,
		previewHref: "/preview/magic/backlight/backlight-three",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "backlight-three",
		codeTree: createBlockCodeTree("backlight-three", [
			{
				id: "backlight-three",
				path: "src/lib/components/blocks/magic/backlight/backlight-three/backlight-svg-example.svelte",
				lang: "svelte",
				code: backlightBacklightThreeBacklightSvgExampleSource
			}
		])
	}
];

export function getBacklightBlock(id: string) {
	return backlightBlocks.find((block) => block.id === id);
}
