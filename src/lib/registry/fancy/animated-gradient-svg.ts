// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import AnimatedGradientSvgTwoPreview from "$lib/components/blocks/fancy/animated-gradient-svg/animated-gradient-svg-two/preview.svelte";

// Raw
import animatedGradientSvgAnimatedGradientSvgTwoBentoCardSource from "$lib/components/blocks/fancy/animated-gradient-svg/animated-gradient-svg-two/bento-card.svelte?raw";
import animatedGradientSvgIndexSource from "$lib/components/ui/fancy-ui/animated-gradient-svg/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const animatedGradientSvgBlocks: BlockShowcaseItem[] = [
	{
		id: "animated-gradient-svg-two",
		title: "Animated Gradient Svg Two",
		description:
			"A Animated Gradient Svg Two composition.",
		previewComponent: AnimatedGradientSvgTwoPreview,
		previewHref: "/preview/fancy/animated-gradient-svg/animated-gradient-svg-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "animated-gradient-svg-two",
		codeTree: createBlockCodeTree("animated-gradient-svg-two", [
			{
				id: "animated-gradient-svg-two",
				path: "src/lib/components/blocks/fancy/animated-gradient-svg/animated-gradient-svg-two/bento-card.svelte",
				lang: "svelte",
				code: animatedGradientSvgAnimatedGradientSvgTwoBentoCardSource
			}
		])
	}
];

export function getAnimatedGradientSvgBlock(id: string) {
	return animatedGradientSvgBlocks.find((block) => block.id === id);
}
