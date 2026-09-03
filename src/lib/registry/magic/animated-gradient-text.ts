// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import AnimatedGradientTextOnePreview from "$lib/components/blocks/magic/animated-gradient-text/animated-gradient-text-one/animated-gradient-text.svelte";
import AnimatedGradientTextTwoPreview from "$lib/components/blocks/magic/animated-gradient-text/animated-gradient-text-two/animated-gradient-text.svelte";

// Raw
import animatedGradientTextAnimatedGradientTextOneAnimatedGradientTextSource from "$lib/components/blocks/magic/animated-gradient-text/animated-gradient-text-one/animated-gradient-text.svelte?raw";
import animatedGradientTextAnimatedGradientTextTwoAnimatedGradientTextSource from "$lib/components/blocks/magic/animated-gradient-text/animated-gradient-text-two/animated-gradient-text.svelte?raw";
import animatedGradientTextIndexSource from "$lib/components/ui/magic-ui/animated-gradient-text/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const animatedGradientTextBlocks: BlockShowcaseItem[] = [
	{
		id: "animated-gradient-text-one",
		title: "Animated Gradient Text One",
		description:
			"A Animated Gradient Text One composition.",
		previewComponent: AnimatedGradientTextOnePreview,
		previewHref: "/preview/magic/animated-gradient-text/animated-gradient-text-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "animated-gradient-text-one",
		codeTree: createBlockCodeTree("animated-gradient-text-one", [
			{
				id: "animated-gradient-text-one",
				path: "src/lib/components/blocks/magic/animated-gradient-text/animated-gradient-text-one/animated-gradient-text.svelte",
				lang: "svelte",
				code: animatedGradientTextAnimatedGradientTextOneAnimatedGradientTextSource
			}
		])
	},	{
		id: "animated-gradient-text-two",
		title: "Animated Gradient Text Two",
		description:
			"A Animated Gradient Text Two composition.",
		previewComponent: AnimatedGradientTextTwoPreview,
		previewHref: "/preview/magic/animated-gradient-text/animated-gradient-text-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "animated-gradient-text-two",
		codeTree: createBlockCodeTree("animated-gradient-text-two", [
			{
				id: "animated-gradient-text-two",
				path: "src/lib/components/blocks/magic/animated-gradient-text/animated-gradient-text-two/animated-gradient-text.svelte",
				lang: "svelte",
				code: animatedGradientTextAnimatedGradientTextTwoAnimatedGradientTextSource
			}
		])
	}
];

export function getAnimatedGradientTextBlock(id: string) {
	return animatedGradientTextBlocks.find((block) => block.id === id);
}
