// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import AnimatedGridPatternOnePreview from "$lib/components/blocks/magic/animated-grid-pattern/animated-grid-pattern-one/animated-grid-pattern.svelte";
import AnimatedGridPatternThreePreview from "$lib/components/blocks/magic/animated-grid-pattern/animated-grid-pattern-three/grid-pattern-linear-gradient.svelte";
import AnimatedGridPatternTwoPreview from "$lib/components/blocks/magic/animated-grid-pattern/animated-grid-pattern-two/grid-pattern-dashed-stroke.svelte";

// Raw
import animatedGridPatternAnimatedGridPatternOneAnimatedGridPatternSource from "$lib/components/blocks/magic/animated-grid-pattern/animated-grid-pattern-one/animated-grid-pattern.svelte?raw";
import animatedGridPatternAnimatedGridPatternThreeGridPatternLinearGradientSource from "$lib/components/blocks/magic/animated-grid-pattern/animated-grid-pattern-three/grid-pattern-linear-gradient.svelte?raw";
import animatedGridPatternAnimatedGridPatternTwoGridPatternDashedStrokeSource from "$lib/components/blocks/magic/animated-grid-pattern/animated-grid-pattern-two/grid-pattern-dashed-stroke.svelte?raw";
import animatedGridPatternIndexSource from "$lib/components/ui/magic-ui/animated-grid-pattern/index.ts?raw";
import gridPatternIndexSource from "$lib/components/ui/magic-ui/grid-pattern/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const animatedGridPatternBlocks: BlockShowcaseItem[] = [
	{
		id: "animated-grid-pattern-one",
		title: "Animated Grid Pattern One",
		description:
			"A Animated Grid Pattern One composition.",
		previewComponent: AnimatedGridPatternOnePreview,
		previewHref: "/preview/magic/animated-grid-pattern/animated-grid-pattern-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "animated-grid-pattern-one",
		codeTree: createBlockCodeTree("animated-grid-pattern-one", [
			{
				id: "animated-grid-pattern-one",
				path: "src/lib/components/blocks/magic/animated-grid-pattern/animated-grid-pattern-one/animated-grid-pattern.svelte",
				lang: "svelte",
				code: animatedGridPatternAnimatedGridPatternOneAnimatedGridPatternSource
			}
		])
	},	{
		id: "animated-grid-pattern-two",
		title: "Animated Grid Pattern Two",
		description:
			"A Animated Grid Pattern Two composition.",
		previewComponent: AnimatedGridPatternTwoPreview,
		previewHref: "/preview/magic/animated-grid-pattern/animated-grid-pattern-two",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "animated-grid-pattern-two",
		codeTree: createBlockCodeTree("animated-grid-pattern-two", [
			{
				id: "animated-grid-pattern-two",
				path: "src/lib/components/blocks/magic/animated-grid-pattern/animated-grid-pattern-two/grid-pattern-dashed-stroke.svelte",
				lang: "svelte",
				code: animatedGridPatternAnimatedGridPatternTwoGridPatternDashedStrokeSource
			}
		])
	},	{
		id: "animated-grid-pattern-three",
		title: "Animated Grid Pattern Three",
		description:
			"A Animated Grid Pattern Three composition.",
		previewComponent: AnimatedGridPatternThreePreview,
		previewHref: "/preview/magic/animated-grid-pattern/animated-grid-pattern-three",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "animated-grid-pattern-three",
		codeTree: createBlockCodeTree("animated-grid-pattern-three", [
			{
				id: "animated-grid-pattern-three",
				path: "src/lib/components/blocks/magic/animated-grid-pattern/animated-grid-pattern-three/grid-pattern-linear-gradient.svelte",
				lang: "svelte",
				code: animatedGridPatternAnimatedGridPatternThreeGridPatternLinearGradientSource
			}
		])
	}
];

export function getAnimatedGridPatternBlock(id: string) {
	return animatedGridPatternBlocks.find((block) => block.id === id);
}
