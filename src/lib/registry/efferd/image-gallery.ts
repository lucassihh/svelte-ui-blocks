// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import ImageGalleryOnePreview from "$lib/components/blocks/efferd/image-gallery/image-gallery-one/image-gallery.svelte";

// Raw
import imageGalleryImageGalleryOneImageGallerySource from "$lib/components/blocks/efferd/image-gallery/image-gallery-one/image-gallery.svelte?raw";
import imageGalleryImageGalleryOneLazyImageSource from "$lib/components/blocks/efferd/image-gallery/image-gallery-one/lazy-image.svelte?raw";

// Shared Items
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
		description:
			"A Image Gallery One composition.",
		previewComponent: ImageGalleryOnePreview,
		previewHref: "/preview/efferd/image-gallery/image-gallery-one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "image-gallery-one",
		codeTree: createBlockCodeTree("image-gallery-one:image-gallery", [
			{
				id: "image-gallery-one:image-gallery",
				path: "src/lib/components/blocks/efferd/image-gallery/image-gallery-one/image-gallery.svelte",
				lang: "svelte",
				code: imageGalleryImageGalleryOneImageGallerySource
			},
			{
				id: "image-gallery-one:lazy-image",
				path: "src/lib/components/blocks/efferd/image-gallery/image-gallery-one/lazy-image.svelte",
				lang: "svelte",
				code: imageGalleryImageGalleryOneLazyImageSource
			}
		])
	}
];

export function getImageGalleryBlock(id: string) {
	return imageGalleryBlocks.find((block) => block.id === id);
}
