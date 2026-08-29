// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import PixelImageFourPreview from "$lib/components/blocks/magic/pixel-image/pixel-image-four/preview.svelte";
import PixelImageOnePreview from "$lib/components/blocks/magic/pixel-image/pixel-image-one/color-only.svelte";
import PixelImageThreePreview from "$lib/components/blocks/magic/pixel-image/pixel-image-three/grid-variations.svelte";
import PixelImageTwoPreview from "$lib/components/blocks/magic/pixel-image/pixel-image-two/fast-reveal.svelte";

// Raw
import pixelImageDemoJpgSource from "$lib/assets/pixel-image-demo.jpg?raw";
import pixelImagePixelImageFourPreviewSource from "$lib/components/blocks/magic/pixel-image/pixel-image-four/preview.svelte?raw";
import pixelImagePixelImageOneColorOnlySource from "$lib/components/blocks/magic/pixel-image/pixel-image-one/color-only.svelte?raw";
import pixelImagePixelImageThreeGridVariationsSource from "$lib/components/blocks/magic/pixel-image/pixel-image-three/grid-variations.svelte?raw";
import pixelImagePixelImageTwoFastRevealSource from "$lib/components/blocks/magic/pixel-image/pixel-image-two/fast-reveal.svelte?raw";
import pixelImageSource from "$lib/components/ui/magic-ui/pixel-image/pixel-image.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const pixelImageBlocks: BlockShowcaseItem[] = [
	{
		id: "pixel-image-one",
		title: "Pixel Image One",
		description:
			"A Pixel Image One composition.",
		previewComponent: PixelImageOnePreview,
		previewHref: "/preview/magic/pixel-image/pixel-image-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "pixel-image-one",
		codeTree: createBlockCodeTree("pixel-image-one", [
			{
				id: "pixel-image-one",
				path: "src/lib/components/blocks/magic/pixel-image/pixel-image-one/color-only.svelte",
				lang: "svelte",
				code: pixelImagePixelImageOneColorOnlySource
			}
		])
	},	{
		id: "pixel-image-two",
		title: "Pixel Image Two",
		description:
			"A Pixel Image Two composition.",
		previewComponent: PixelImageTwoPreview,
		previewHref: "/preview/magic/pixel-image/pixel-image-two",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "pixel-image-two",
		codeTree: createBlockCodeTree("pixel-image-two", [
			{
				id: "pixel-image-two",
				path: "src/lib/components/blocks/magic/pixel-image/pixel-image-two/fast-reveal.svelte",
				lang: "svelte",
				code: pixelImagePixelImageTwoFastRevealSource
			}
		])
	},	{
		id: "pixel-image-three",
		title: "Pixel Image Three",
		description:
			"A Pixel Image Three composition.",
		previewComponent: PixelImageThreePreview,
		previewHref: "/preview/magic/pixel-image/pixel-image-three",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "pixel-image-three",
		codeTree: createBlockCodeTree("pixel-image-three", [
			{
				id: "pixel-image-three",
				path: "src/lib/components/blocks/magic/pixel-image/pixel-image-three/grid-variations.svelte",
				lang: "svelte",
				code: pixelImagePixelImageThreeGridVariationsSource
			}
		])
	},	{
		id: "pixel-image-four",
		title: "Pixel Image Four",
		description:
			"A Pixel Image Four composition.",
		previewComponent: PixelImageFourPreview,
		previewHref: "/preview/magic/pixel-image/pixel-image-four",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "pixel-image-four",
		codeTree: createBlockCodeTree("pixel-image-four", [
			{
				id: "pixel-image-four",
				path: "src/lib/components/blocks/magic/pixel-image/pixel-image-four/preview.svelte",
				lang: "svelte",
				code: pixelImagePixelImageFourPreviewSource
			}
		])
	}
];

export function getPixelImageBlock(id: string) {
	return pixelImageBlocks.find((block) => block.id === id);
}
