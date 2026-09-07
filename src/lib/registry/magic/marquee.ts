// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import MarqueeOnePreview from "$lib/components/blocks/magic/marquee/marquee-one/marquee-3d.svelte";
import MarqueeThreePreview from "$lib/components/blocks/magic/marquee/marquee-three/preview.svelte";
import MarqueeTwoPreview from "$lib/components/blocks/magic/marquee/marquee-two/marquee-vertical.svelte";

// Raw
import marqueeMarqueeOneMarquee3dSource from "$lib/components/blocks/magic/marquee/marquee-one/marquee-3d.svelte?raw";
import marqueeMarqueeOneReviewCardSource from "$lib/components/blocks/magic/marquee/marquee-one/review-card.svelte?raw";
import marqueeMarqueeThreeReviewCardSource from "$lib/components/blocks/magic/marquee/marquee-three/review-card.svelte?raw";
import marqueeMarqueeTwoMarqueeVerticalSource from "$lib/components/blocks/magic/marquee/marquee-two/marquee-vertical.svelte?raw";
import marqueeMarqueeTwoReviewCardSource from "$lib/components/blocks/magic/marquee/marquee-two/review-card.svelte?raw";
import marqueeSource from "$lib/components/ui/magic-ui/marquee/marquee.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const marqueeBlocks: BlockShowcaseItem[] = [
	{
		id: "marquee-one",
		title: "Marquee One",
		description:
			"A Marquee One composition.",
		previewComponent: MarqueeOnePreview,
		previewHref: "/preview/magic/marquee/marquee-one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "marquee-one",
		codeTree: createBlockCodeTree("marquee-one:marquee", [
			{
				id: "marquee-one:marquee-3d",
				path: "src/lib/components/blocks/magic/marquee/marquee-one/marquee-3d.svelte",
				lang: "svelte",
				code: marqueeMarqueeOneMarquee3dSource
			},
			{
				id: "marquee-one:review-card",
				path: "src/lib/components/blocks/magic/marquee/marquee-one/review-card.svelte",
				lang: "svelte",
				code: marqueeMarqueeOneReviewCardSource
			}
		])
	},	{
		id: "marquee-two",
		title: "Marquee Two",
		description:
			"A Marquee Two composition.",
		previewComponent: MarqueeTwoPreview,
		previewHref: "/preview/magic/marquee/marquee-two",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "marquee-two",
		codeTree: createBlockCodeTree("marquee-two:marquee", [
			{
				id: "marquee-two:marquee-vertical",
				path: "src/lib/components/blocks/magic/marquee/marquee-two/marquee-vertical.svelte",
				lang: "svelte",
				code: marqueeMarqueeTwoMarqueeVerticalSource
			},
			{
				id: "marquee-two:review-card",
				path: "src/lib/components/blocks/magic/marquee/marquee-two/review-card.svelte",
				lang: "svelte",
				code: marqueeMarqueeTwoReviewCardSource
			}
		])
	},	{
		id: "marquee-three",
		title: "Marquee Three",
		description:
			"A Marquee Three composition.",
		previewComponent: MarqueeThreePreview,
		previewHref: "/preview/magic/marquee/marquee-three",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "marquee-three",
		codeTree: createBlockCodeTree("marquee-three", [
			{
				id: "marquee-three",
				path: "src/lib/components/blocks/magic/marquee/marquee-three/review-card.svelte",
				lang: "svelte",
				code: marqueeMarqueeThreeReviewCardSource
			}
		])
	}
];

export function getMarqueeBlock(id: string) {
	return marqueeBlocks.find((block) => block.id === id);
}
