// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import MediaBetweenTextFourPreview from "$lib/components/blocks/fancy/media-between-text/media-between-text-four/vertical-open.svelte";
import MediaBetweenTextOnePreview from "$lib/components/blocks/fancy/media-between-text/media-between-text-one/open-close-trigger.svelte";
import MediaBetweenTextThreePreview from "$lib/components/blocks/fancy/media-between-text/media-between-text-three/scroll-demo.svelte";
import MediaBetweenTextTwoPreview from "$lib/components/blocks/fancy/media-between-text/media-between-text-two/preview.svelte";

// Raw
import mediaBetweenTextIndexSource from "$lib/components/ui/fancy-ui/media-between-text/index.ts?raw";
import mediaBetweenTextMediaBetweenTextFourVerticalOpenSource from "$lib/components/blocks/fancy/media-between-text/media-between-text-four/vertical-open.svelte?raw";
import mediaBetweenTextMediaBetweenTextOneOpenCloseTriggerSource from "$lib/components/blocks/fancy/media-between-text/media-between-text-one/open-close-trigger.svelte?raw";
import mediaBetweenTextMediaBetweenTextThreeScrollDemoSource from "$lib/components/blocks/fancy/media-between-text/media-between-text-three/scroll-demo.svelte?raw";
import mediaBetweenTextMediaBetweenTextTwoPreviewSource from "$lib/components/blocks/fancy/media-between-text/media-between-text-two/preview.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const mediaBetweenTextBlocks: BlockShowcaseItem[] = [
	{
		id: "media-between-text-one",
		title: "Media Between Text One",
		description:
			"A Media Between Text One composition.",
		previewComponent: MediaBetweenTextOnePreview,
		previewHref: "/preview/fancy/media-between-text/media-between-text-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "media-between-text-one",
		codeTree: createBlockCodeTree("media-between-text-one", [
			{
				id: "media-between-text-one",
				path: "src/lib/components/blocks/fancy/media-between-text/media-between-text-one/open-close-trigger.svelte",
				lang: "svelte",
				code: mediaBetweenTextMediaBetweenTextOneOpenCloseTriggerSource
			},
			...buttonFiles
		])
	},	{
		id: "media-between-text-two",
		title: "Media Between Text Two",
		description:
			"A Media Between Text Two composition.",
		previewComponent: MediaBetweenTextTwoPreview,
		previewHref: "/preview/fancy/media-between-text/media-between-text-two",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "media-between-text-two",
		codeTree: createBlockCodeTree("media-between-text-two", [
			{
				id: "media-between-text-two",
				path: "src/lib/components/blocks/fancy/media-between-text/media-between-text-two/preview.svelte",
				lang: "svelte",
				code: mediaBetweenTextMediaBetweenTextTwoPreviewSource
			}
		])
	},	{
		id: "media-between-text-three",
		title: "Media Between Text Three",
		description:
			"A Media Between Text Three composition.",
		previewComponent: MediaBetweenTextThreePreview,
		previewHref: "/preview/fancy/media-between-text/media-between-text-three",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "media-between-text-three",
		codeTree: createBlockCodeTree("media-between-text-three", [
			{
				id: "media-between-text-three",
				path: "src/lib/components/blocks/fancy/media-between-text/media-between-text-three/scroll-demo.svelte",
				lang: "svelte",
				code: mediaBetweenTextMediaBetweenTextThreeScrollDemoSource
			}
		])
	},	{
		id: "media-between-text-four",
		title: "Media Between Text Four",
		description:
			"A Media Between Text Four composition.",
		previewComponent: MediaBetweenTextFourPreview,
		previewHref: "/preview/fancy/media-between-text/media-between-text-four",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "media-between-text-four",
		codeTree: createBlockCodeTree("media-between-text-four", [
			{
				id: "media-between-text-four",
				path: "src/lib/components/blocks/fancy/media-between-text/media-between-text-four/vertical-open.svelte",
				lang: "svelte",
				code: mediaBetweenTextMediaBetweenTextFourVerticalOpenSource
			},
			...buttonFiles
		])
	}
];

export function getMediaBetweenTextBlock(id: string) {
	return mediaBetweenTextBlocks.find((block) => block.id === id);
}
