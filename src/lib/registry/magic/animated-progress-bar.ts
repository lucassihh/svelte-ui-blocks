// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import AnimatedProgressBarOnePreview from "$lib/components/blocks/magic/animated-progress-bar/animated-progress-bar-one/animated-progress-bar.svelte";

// Raw
import animatedCircularProgressBarIndexSource from "$lib/components/ui/magic-ui/animated-circular-progress-bar/index.ts?raw";
import animatedProgressBarAnimatedProgressBarOneAnimatedProgressBarSource from "$lib/components/blocks/magic/animated-progress-bar/animated-progress-bar-one/animated-progress-bar.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const animatedProgressBarBlocks: BlockShowcaseItem[] = [
	{
		id: "animated-progress-bar-one",
		title: "Animated Progress Bar One",
		description:
			"A Animated Progress Bar One composition.",
		previewComponent: AnimatedProgressBarOnePreview,
		previewHref: "/preview/magic/animated-progress-bar/animated-progress-bar-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "animated-progress-bar-one",
		codeTree: createBlockCodeTree("animated-progress-bar-one", [
			{
				id: "animated-progress-bar-one",
				path: "src/lib/components/blocks/magic/animated-progress-bar/animated-progress-bar-one/animated-progress-bar.svelte",
				lang: "svelte",
				code: animatedProgressBarAnimatedProgressBarOneAnimatedProgressBarSource
			}
		])
	}
];

export function getAnimatedProgressBarBlock(id: string) {
	return animatedProgressBarBlocks.find((block) => block.id === id);
}
