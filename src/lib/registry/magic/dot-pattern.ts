// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import DotPatternOnePreview from "$lib/components/blocks/magic/dot-pattern/dot-pattern-one/dot-pattern-linear-gradient.svelte";
import DotPatternThreePreview from "$lib/components/blocks/magic/dot-pattern/dot-pattern-three/dot-pattern-with-glow-effect.svelte";
import DotPatternTwoPreview from "$lib/components/blocks/magic/dot-pattern/dot-pattern-two/preview.svelte";

// Raw
import dotPatternDotPatternOneDotPatternLinearGradientSource from "$lib/components/blocks/magic/dot-pattern/dot-pattern-one/dot-pattern-linear-gradient.svelte?raw";
import dotPatternDotPatternThreeDotPatternWithGlowEffectSource from "$lib/components/blocks/magic/dot-pattern/dot-pattern-three/dot-pattern-with-glow-effect.svelte?raw";
import dotPatternDotPatternTwoPreviewSource from "$lib/components/blocks/magic/dot-pattern/dot-pattern-two/preview.svelte?raw";
import dotPatternIndexSource from "$lib/components/ui/magic-ui/dot-pattern/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const dotPatternBlocks: BlockShowcaseItem[] = [
	{
		id: "dot-pattern-one",
		title: "Dot Pattern One",
		description:
			"A Dot Pattern One composition.",
		previewComponent: DotPatternOnePreview,
		previewHref: "/preview/magic/dot-pattern/dot-pattern-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "dot-pattern-one",
		codeTree: createBlockCodeTree("dot-pattern-one", [
			{
				id: "dot-pattern-one",
				path: "src/lib/components/blocks/magic/dot-pattern/dot-pattern-one/dot-pattern-linear-gradient.svelte",
				lang: "svelte",
				code: dotPatternDotPatternOneDotPatternLinearGradientSource
			}
		])
	},	{
		id: "dot-pattern-two",
		title: "Dot Pattern Two",
		description:
			"A Dot Pattern Two composition.",
		previewComponent: DotPatternTwoPreview,
		previewHref: "/preview/magic/dot-pattern/dot-pattern-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "dot-pattern-two",
		codeTree: createBlockCodeTree("dot-pattern-two", [
			{
				id: "dot-pattern-two",
				path: "src/lib/components/blocks/magic/dot-pattern/dot-pattern-two/preview.svelte",
				lang: "svelte",
				code: dotPatternDotPatternTwoPreviewSource
			}
		])
	},	{
		id: "dot-pattern-three",
		title: "Dot Pattern Three",
		description:
			"A Dot Pattern Three composition.",
		previewComponent: DotPatternThreePreview,
		previewHref: "/preview/magic/dot-pattern/dot-pattern-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "dot-pattern-three",
		codeTree: createBlockCodeTree("dot-pattern-three", [
			{
				id: "dot-pattern-three",
				path: "src/lib/components/blocks/magic/dot-pattern/dot-pattern-three/dot-pattern-with-glow-effect.svelte",
				lang: "svelte",
				code: dotPatternDotPatternThreeDotPatternWithGlowEffectSource
			}
		])
	}
];

export function getDotPatternBlock(id: string) {
	return dotPatternBlocks.find((block) => block.id === id);
}
