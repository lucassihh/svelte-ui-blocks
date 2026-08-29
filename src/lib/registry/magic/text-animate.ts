// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import TextAnimateEightPreview from "$lib/components/blocks/magic/text-animate/text-animate-eight/with-delay.svelte";
import TextAnimateFivePreview from "$lib/components/blocks/magic/text-animate/text-animate-five/scale-up-text.svelte";
import TextAnimateFourPreview from "$lib/components/blocks/magic/text-animate/text-animate-four/preview.svelte";
import TextAnimateNinePreview from "$lib/components/blocks/magic/text-animate/text-animate-nine/with-duration.svelte";
import TextAnimateOnePreview from "$lib/components/blocks/magic/text-animate/text-animate-one/blur-in-text.svelte";
import TextAnimateSevenPreview from "$lib/components/blocks/magic/text-animate/text-animate-seven/slide-up-word.svelte";
import TextAnimateSixPreview from "$lib/components/blocks/magic/text-animate/text-animate-six/slide-left-character.svelte";
import TextAnimateThreePreview from "$lib/components/blocks/magic/text-animate/text-animate-three/fade-in-line.svelte";
import TextAnimateTwoPreview from "$lib/components/blocks/magic/text-animate/text-animate-two/custom-variants.svelte";

// Raw
import textAnimateIndexSource from "$lib/components/ui/magic-ui/text-animate/index.ts?raw";
import textAnimateTextAnimateEightWithDelaySource from "$lib/components/blocks/magic/text-animate/text-animate-eight/with-delay.svelte?raw";
import textAnimateTextAnimateFiveScaleUpTextSource from "$lib/components/blocks/magic/text-animate/text-animate-five/scale-up-text.svelte?raw";
import textAnimateTextAnimateFourPreviewSource from "$lib/components/blocks/magic/text-animate/text-animate-four/preview.svelte?raw";
import textAnimateTextAnimateNineWithDurationSource from "$lib/components/blocks/magic/text-animate/text-animate-nine/with-duration.svelte?raw";
import textAnimateTextAnimateOneBlurInTextSource from "$lib/components/blocks/magic/text-animate/text-animate-one/blur-in-text.svelte?raw";
import textAnimateTextAnimateSevenSlideUpWordSource from "$lib/components/blocks/magic/text-animate/text-animate-seven/slide-up-word.svelte?raw";
import textAnimateTextAnimateSixSlideLeftCharacterSource from "$lib/components/blocks/magic/text-animate/text-animate-six/slide-left-character.svelte?raw";
import textAnimateTextAnimateThreeFadeInLineSource from "$lib/components/blocks/magic/text-animate/text-animate-three/fade-in-line.svelte?raw";
import textAnimateTextAnimateTwoCustomVariantsSource from "$lib/components/blocks/magic/text-animate/text-animate-two/custom-variants.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const textAnimateBlocks: BlockShowcaseItem[] = [
	{
		id: "text-animate-one",
		title: "Text Animate One",
		description:
			"A Text Animate One composition.",
		previewComponent: TextAnimateOnePreview,
		previewHref: "/preview/magic/text-animate/text-animate-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "text-animate-one",
		codeTree: createBlockCodeTree("text-animate-one", [
			{
				id: "text-animate-one",
				path: "src/lib/components/blocks/magic/text-animate/text-animate-one/blur-in-text.svelte",
				lang: "svelte",
				code: textAnimateTextAnimateOneBlurInTextSource
			}
		])
	},	{
		id: "text-animate-two",
		title: "Text Animate Two",
		description:
			"A Text Animate Two composition.",
		previewComponent: TextAnimateTwoPreview,
		previewHref: "/preview/magic/text-animate/text-animate-two",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "text-animate-two",
		codeTree: createBlockCodeTree("text-animate-two", [
			{
				id: "text-animate-two",
				path: "src/lib/components/blocks/magic/text-animate/text-animate-two/custom-variants.svelte",
				lang: "svelte",
				code: textAnimateTextAnimateTwoCustomVariantsSource
			}
		])
	},	{
		id: "text-animate-three",
		title: "Text Animate Three",
		description:
			"A Text Animate Three composition.",
		previewComponent: TextAnimateThreePreview,
		previewHref: "/preview/magic/text-animate/text-animate-three",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "text-animate-three",
		codeTree: createBlockCodeTree("text-animate-three", [
			{
				id: "text-animate-three",
				path: "src/lib/components/blocks/magic/text-animate/text-animate-three/fade-in-line.svelte",
				lang: "svelte",
				code: textAnimateTextAnimateThreeFadeInLineSource
			}
		])
	},	{
		id: "text-animate-four",
		title: "Text Animate Four",
		description:
			"A Text Animate Four composition.",
		previewComponent: TextAnimateFourPreview,
		previewHref: "/preview/magic/text-animate/text-animate-four",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "text-animate-four",
		codeTree: createBlockCodeTree("text-animate-four", [
			{
				id: "text-animate-four",
				path: "src/lib/components/blocks/magic/text-animate/text-animate-four/preview.svelte",
				lang: "svelte",
				code: textAnimateTextAnimateFourPreviewSource
			}
		])
	},	{
		id: "text-animate-five",
		title: "Text Animate Five",
		description:
			"A Text Animate Five composition.",
		previewComponent: TextAnimateFivePreview,
		previewHref: "/preview/magic/text-animate/text-animate-five",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "text-animate-five",
		codeTree: createBlockCodeTree("text-animate-five", [
			{
				id: "text-animate-five",
				path: "src/lib/components/blocks/magic/text-animate/text-animate-five/scale-up-text.svelte",
				lang: "svelte",
				code: textAnimateTextAnimateFiveScaleUpTextSource
			}
		])
	},	{
		id: "text-animate-six",
		title: "Text Animate Six",
		description:
			"A Text Animate Six composition.",
		previewComponent: TextAnimateSixPreview,
		previewHref: "/preview/magic/text-animate/text-animate-six",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "text-animate-six",
		codeTree: createBlockCodeTree("text-animate-six", [
			{
				id: "text-animate-six",
				path: "src/lib/components/blocks/magic/text-animate/text-animate-six/slide-left-character.svelte",
				lang: "svelte",
				code: textAnimateTextAnimateSixSlideLeftCharacterSource
			}
		])
	},	{
		id: "text-animate-seven",
		title: "Text Animate Seven",
		description:
			"A Text Animate Seven composition.",
		previewComponent: TextAnimateSevenPreview,
		previewHref: "/preview/magic/text-animate/text-animate-seven",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "text-animate-seven",
		codeTree: createBlockCodeTree("text-animate-seven", [
			{
				id: "text-animate-seven",
				path: "src/lib/components/blocks/magic/text-animate/text-animate-seven/slide-up-word.svelte",
				lang: "svelte",
				code: textAnimateTextAnimateSevenSlideUpWordSource
			}
		])
	},	{
		id: "text-animate-eight",
		title: "Text Animate Eight",
		description:
			"A Text Animate Eight composition.",
		previewComponent: TextAnimateEightPreview,
		previewHref: "/preview/magic/text-animate/text-animate-eight",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "text-animate-eight",
		codeTree: createBlockCodeTree("text-animate-eight", [
			{
				id: "text-animate-eight",
				path: "src/lib/components/blocks/magic/text-animate/text-animate-eight/with-delay.svelte",
				lang: "svelte",
				code: textAnimateTextAnimateEightWithDelaySource
			}
		])
	},	{
		id: "text-animate-nine",
		title: "Text Animate Nine",
		description:
			"A Text Animate Nine composition.",
		previewComponent: TextAnimateNinePreview,
		previewHref: "/preview/magic/text-animate/text-animate-nine",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "text-animate-nine",
		codeTree: createBlockCodeTree("text-animate-nine", [
			{
				id: "text-animate-nine",
				path: "src/lib/components/blocks/magic/text-animate/text-animate-nine/with-duration.svelte",
				lang: "svelte",
				code: textAnimateTextAnimateNineWithDurationSource
			}
		])
	}
];

export function getTextAnimateBlock(id: string) {
	return textAnimateBlocks.find((block) => block.id === id);
}
