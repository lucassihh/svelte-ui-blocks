import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-three";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-three";
import ImageGalleryOnePreview from "$lib/components/efferd-ui/image-gallery/image-gallery-one/image-gallery.svelte";

import aspectRatioIndexSource from "$lib/components/ui/aspect-ratio/index.ts?raw";
import aspectRatioSource from "$lib/components/ui/aspect-ratio/aspect-ratio.svelte?raw";
import imageGalleryImageGalleryOneImageGallerySource from "$lib/components/efferd-ui/image-gallery/image-gallery-one/image-gallery.svelte?raw";
import imageGalleryImageGalleryOneLazyImageSource from "$lib/components/efferd-ui/image-gallery/image-gallery-one/lazy-image.svelte?raw";

const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const imageGalleryBlocks: BlockShowcaseItem[] = [
	{
		id: "image-gallery-one",
		title: "Image Gallery One",
		description: "A Image Gallery One composition.",
		previewComponent: ImageGalleryOnePreview,
		previewHref: "/preview/efferd-ui/image-gallery/image-gallery-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "image-gallery-one",
		codeTree: createBlockCodeTree("image-gallery-one:preview", [
			{
				id: "image-gallery-one:image-gallery",
				path: "components/efferd/image-gallery/image-gallery-one/image-gallery.svelte",
				lang: "svelte",
				code: imageGalleryImageGalleryOneImageGallerySource
			},
			{
				id: "image-gallery-one:lazy-image",
				path: "components/efferd/image-gallery/image-gallery-one/lazy-image.svelte",
				lang: "svelte",
				code: imageGalleryImageGalleryOneLazyImageSource
			}
		])
	}
];

export function getImageGalleryBlock(id: string) {
	return imageGalleryBlocks.find((block) => block.id === id);
}
