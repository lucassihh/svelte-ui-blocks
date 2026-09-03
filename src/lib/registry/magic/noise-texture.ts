// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import NoiseTextureOnePreview from "$lib/components/blocks/magic/noise-texture/noise-texture-one/newsletter-example.svelte";
import NoiseTextureTwoPreview from "$lib/components/blocks/magic/noise-texture/noise-texture-two/preview.svelte";

// Raw
import cardIndexSource from "$lib/components/ui/card/index.ts?raw";
import inputIndexSource from "$lib/components/ui/input/index.ts?raw";
import labelIndexSource from "$lib/components/ui/label/index.ts?raw";
import noiseTextureIndexSource from "$lib/components/ui/magic-ui/noise-texture/index.ts?raw";
import noiseTextureNoiseTextureOneNewsletterExampleSource from "$lib/components/blocks/magic/noise-texture/noise-texture-one/newsletter-example.svelte?raw";
import noiseTextureNoiseTextureTwoPreviewSource from "$lib/components/blocks/magic/noise-texture/noise-texture-two/preview.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const noiseTextureBlocks: BlockShowcaseItem[] = [
	{
		id: "noise-texture-one",
		title: "Noise Texture One",
		description:
			"A Noise Texture One composition.",
		previewComponent: NoiseTextureOnePreview,
		previewHref: "/preview/magic/noise-texture/noise-texture-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "noise-texture-one",
		codeTree: createBlockCodeTree("noise-texture-one", [
			{
				id: "noise-texture-one",
				path: "src/lib/components/blocks/magic/noise-texture/noise-texture-one/newsletter-example.svelte",
				lang: "svelte",
				code: noiseTextureNoiseTextureOneNewsletterExampleSource
			},
			...buttonFiles
		])
	},	{
		id: "noise-texture-two",
		title: "Noise Texture Two",
		description:
			"A Noise Texture Two composition.",
		previewComponent: NoiseTextureTwoPreview,
		previewHref: "/preview/magic/noise-texture/noise-texture-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "noise-texture-two",
		codeTree: createBlockCodeTree("noise-texture-two", [
			{
				id: "noise-texture-two",
				path: "src/lib/components/blocks/magic/noise-texture/noise-texture-two/preview.svelte",
				lang: "svelte",
				code: noiseTextureNoiseTextureTwoPreviewSource
			}
		])
	}
];

export function getNoiseTextureBlock(id: string) {
	return noiseTextureBlocks.find((block) => block.id === id);
}
