// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import PulsatingButtonFivePreview from "$lib/components/blocks/magic/pulsating-button/pulsating-button-five/preview.svelte";
import PulsatingButtonFourPreview from "$lib/components/blocks/magic/pulsating-button/pulsating-button-four/minimal-example.svelte";
import PulsatingButtonOnePreview from "$lib/components/blocks/magic/pulsating-button/pulsating-button-one/colors-example.svelte";
import PulsatingButtonSevenPreview from "$lib/components/blocks/magic/pulsating-button/pulsating-button-seven/ripple-variant.svelte";
import PulsatingButtonSixPreview from "$lib/components/blocks/magic/pulsating-button/pulsating-button-six/ring-variant.svelte";
import PulsatingButtonThreePreview from "$lib/components/blocks/magic/pulsating-button/pulsating-button-three/duration-example.svelte";
import PulsatingButtonTwoPreview from "$lib/components/blocks/magic/pulsating-button/pulsating-button-two/distance-example.svelte";

// Raw
import pulsatingButtonIndexSource from "$lib/components/ui/magic-ui/pulsating-button/index.ts?raw";
import pulsatingButtonPulsatingButtonFivePreviewSource from "$lib/components/blocks/magic/pulsating-button/pulsating-button-five/preview.svelte?raw";
import pulsatingButtonPulsatingButtonFourMinimalExampleSource from "$lib/components/blocks/magic/pulsating-button/pulsating-button-four/minimal-example.svelte?raw";
import pulsatingButtonPulsatingButtonOneColorsExampleSource from "$lib/components/blocks/magic/pulsating-button/pulsating-button-one/colors-example.svelte?raw";
import pulsatingButtonPulsatingButtonSevenRippleVariantSource from "$lib/components/blocks/magic/pulsating-button/pulsating-button-seven/ripple-variant.svelte?raw";
import pulsatingButtonPulsatingButtonSixRingVariantSource from "$lib/components/blocks/magic/pulsating-button/pulsating-button-six/ring-variant.svelte?raw";
import pulsatingButtonPulsatingButtonThreeDurationExampleSource from "$lib/components/blocks/magic/pulsating-button/pulsating-button-three/duration-example.svelte?raw";
import pulsatingButtonPulsatingButtonTwoDistanceExampleSource from "$lib/components/blocks/magic/pulsating-button/pulsating-button-two/distance-example.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const pulsatingButtonBlocks: BlockShowcaseItem[] = [
	{
		id: "pulsating-button-one",
		title: "Pulsating Button One",
		description:
			"A Pulsating Button One composition.",
		previewComponent: PulsatingButtonOnePreview,
		previewHref: "/preview/magic/pulsating-button/pulsating-button-one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "pulsating-button-one",
		codeTree: createBlockCodeTree("pulsating-button-one", [
			{
				id: "pulsating-button-one",
				path: "src/lib/components/blocks/magic/pulsating-button/pulsating-button-one/colors-example.svelte",
				lang: "svelte",
				code: pulsatingButtonPulsatingButtonOneColorsExampleSource
			}
		])
	},	{
		id: "pulsating-button-two",
		title: "Pulsating Button Two",
		description:
			"A Pulsating Button Two composition.",
		previewComponent: PulsatingButtonTwoPreview,
		previewHref: "/preview/magic/pulsating-button/pulsating-button-two",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "pulsating-button-two",
		codeTree: createBlockCodeTree("pulsating-button-two", [
			{
				id: "pulsating-button-two",
				path: "src/lib/components/blocks/magic/pulsating-button/pulsating-button-two/distance-example.svelte",
				lang: "svelte",
				code: pulsatingButtonPulsatingButtonTwoDistanceExampleSource
			}
		])
	},	{
		id: "pulsating-button-three",
		title: "Pulsating Button Three",
		description:
			"A Pulsating Button Three composition.",
		previewComponent: PulsatingButtonThreePreview,
		previewHref: "/preview/magic/pulsating-button/pulsating-button-three",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "pulsating-button-three",
		codeTree: createBlockCodeTree("pulsating-button-three", [
			{
				id: "pulsating-button-three",
				path: "src/lib/components/blocks/magic/pulsating-button/pulsating-button-three/duration-example.svelte",
				lang: "svelte",
				code: pulsatingButtonPulsatingButtonThreeDurationExampleSource
			}
		])
	},	{
		id: "pulsating-button-four",
		title: "Pulsating Button Four",
		description:
			"A Pulsating Button Four composition.",
		previewComponent: PulsatingButtonFourPreview,
		previewHref: "/preview/magic/pulsating-button/pulsating-button-four",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "pulsating-button-four",
		codeTree: createBlockCodeTree("pulsating-button-four", [
			{
				id: "pulsating-button-four",
				path: "src/lib/components/blocks/magic/pulsating-button/pulsating-button-four/minimal-example.svelte",
				lang: "svelte",
				code: pulsatingButtonPulsatingButtonFourMinimalExampleSource
			}
		])
	},	{
		id: "pulsating-button-five",
		title: "Pulsating Button Five",
		description:
			"A Pulsating Button Five composition.",
		previewComponent: PulsatingButtonFivePreview,
		previewHref: "/preview/magic/pulsating-button/pulsating-button-five",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "pulsating-button-five",
		codeTree: createBlockCodeTree("pulsating-button-five", [
			{
				id: "pulsating-button-five",
				path: "src/lib/components/blocks/magic/pulsating-button/pulsating-button-five/preview.svelte",
				lang: "svelte",
				code: pulsatingButtonPulsatingButtonFivePreviewSource
			}
		])
	},	{
		id: "pulsating-button-six",
		title: "Pulsating Button Six",
		description:
			"A Pulsating Button Six composition.",
		previewComponent: PulsatingButtonSixPreview,
		previewHref: "/preview/magic/pulsating-button/pulsating-button-six",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "pulsating-button-six",
		codeTree: createBlockCodeTree("pulsating-button-six", [
			{
				id: "pulsating-button-six",
				path: "src/lib/components/blocks/magic/pulsating-button/pulsating-button-six/ring-variant.svelte",
				lang: "svelte",
				code: pulsatingButtonPulsatingButtonSixRingVariantSource
			}
		])
	},	{
		id: "pulsating-button-seven",
		title: "Pulsating Button Seven",
		description:
			"A Pulsating Button Seven composition.",
		previewComponent: PulsatingButtonSevenPreview,
		previewHref: "/preview/magic/pulsating-button/pulsating-button-seven",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "pulsating-button-seven",
		codeTree: createBlockCodeTree("pulsating-button-seven", [
			{
				id: "pulsating-button-seven",
				path: "src/lib/components/blocks/magic/pulsating-button/pulsating-button-seven/ripple-variant.svelte",
				lang: "svelte",
				code: pulsatingButtonPulsatingButtonSevenRippleVariantSource
			}
		])
	}
];

export function getPulsatingButtonBlock(id: string) {
	return pulsatingButtonBlocks.find((block) => block.id === id);
}
