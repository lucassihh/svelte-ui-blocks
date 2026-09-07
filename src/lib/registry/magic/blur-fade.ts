// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import BlurFadeFourPreview from "$lib/components/blocks/magic/blur-fade/blur-fade-four/blur-fade-custom-blur-amount.svelte";
import BlurFadeOnePreview from "$lib/components/blocks/magic/blur-fade/blur-fade-one/preview.svelte";
import BlurFadeThreePreview from "$lib/components/blocks/magic/blur-fade/blur-fade-three/blur-fade-image-gallery.svelte";
import BlurFadeTwoPreview from "$lib/components/blocks/magic/blur-fade/blur-fade-two/blur-fade-basic.svelte";

// Raw
import blurFadeBlurFadeFourBlurFadeCustomBlurAmountSource from "$lib/components/blocks/magic/blur-fade/blur-fade-four/blur-fade-custom-blur-amount.svelte?raw";
import blurFadeBlurFadeOnePreviewSource from "$lib/components/blocks/magic/blur-fade/blur-fade-one/preview.svelte?raw";
import blurFadeBlurFadeThreeBlurFadeImageGallerySource from "$lib/components/blocks/magic/blur-fade/blur-fade-three/blur-fade-image-gallery.svelte?raw";
import blurFadeBlurFadeTwoBlurFadeBasicSource from "$lib/components/blocks/magic/blur-fade/blur-fade-two/blur-fade-basic.svelte?raw";
import blurFadeIndexSource from "$lib/components/ui/magic-ui/blur-fade/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const blurFadeBlocks: BlockShowcaseItem[] = [
	{
		id: "blur-fade-one",
		title: "Blur Fade One",
		description:
			"A Blur Fade One composition.",
		previewComponent: BlurFadeOnePreview,
		previewHref: "/preview/magic/blur-fade/blur-fade-one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "blur-fade-one",
		codeTree: createBlockCodeTree("blur-fade-one", [
			{
				id: "blur-fade-one",
				path: "src/lib/components/blocks/magic/blur-fade/blur-fade-one/preview.svelte",
				lang: "svelte",
				code: blurFadeBlurFadeOnePreviewSource
			}
		])
	},	{
		id: "blur-fade-two",
		title: "Blur Fade Two",
		description:
			"A Blur Fade Two composition.",
		previewComponent: BlurFadeTwoPreview,
		previewHref: "/preview/magic/blur-fade/blur-fade-two",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "blur-fade-two",
		codeTree: createBlockCodeTree("blur-fade-two", [
			{
				id: "blur-fade-two",
				path: "src/lib/components/blocks/magic/blur-fade/blur-fade-two/blur-fade-basic.svelte",
				lang: "svelte",
				code: blurFadeBlurFadeTwoBlurFadeBasicSource
			}
		])
	},	{
		id: "blur-fade-three",
		title: "Blur Fade Three",
		description:
			"A Blur Fade Three composition.",
		previewComponent: BlurFadeThreePreview,
		previewHref: "/preview/magic/blur-fade/blur-fade-three",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "blur-fade-three",
		codeTree: createBlockCodeTree("blur-fade-three", [
			{
				id: "blur-fade-three",
				path: "src/lib/components/blocks/magic/blur-fade/blur-fade-three/blur-fade-image-gallery.svelte",
				lang: "svelte",
				code: blurFadeBlurFadeThreeBlurFadeImageGallerySource
			}
		])
	},	{
		id: "blur-fade-four",
		title: "Blur Fade Four",
		description:
			"A Blur Fade Four composition.",
		previewComponent: BlurFadeFourPreview,
		previewHref: "/preview/magic/blur-fade/blur-fade-four",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "blur-fade-four",
		codeTree: createBlockCodeTree("blur-fade-four", [
			{
				id: "blur-fade-four",
				path: "src/lib/components/blocks/magic/blur-fade/blur-fade-four/blur-fade-custom-blur-amount.svelte",
				lang: "svelte",
				code: blurFadeBlurFadeFourBlurFadeCustomBlurAmountSource
			}
		])
	}
];

export function getBlurFadeBlock(id: string) {
	return blurFadeBlocks.find((block) => block.id === id);
}
