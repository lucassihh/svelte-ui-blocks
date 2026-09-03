// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import NumberTickerFivePreview from "$lib/components/blocks/magic/number-ticker/number-ticker-five/preview.svelte";
import NumberTickerFourPreview from "$lib/components/blocks/magic/number-ticker/number-ticker-four/number-ticker-trigger.svelte";
import NumberTickerOnePreview from "$lib/components/blocks/magic/number-ticker/number-ticker-one/number-ticker-decimal.svelte";
import NumberTickerThreePreview from "$lib/components/blocks/magic/number-ticker/number-ticker-three/number-ticker-start-value.svelte";
import NumberTickerTwoPreview from "$lib/components/blocks/magic/number-ticker/number-ticker-two/number-ticker-prefix-suffix.svelte";

// Raw
import numberTickerIndexSource from "$lib/components/ui/magic-ui/number-ticker/index.ts?raw";
import numberTickerNumberTickerFivePreviewSource from "$lib/components/blocks/magic/number-ticker/number-ticker-five/preview.svelte?raw";
import numberTickerNumberTickerFourNumberTickerTriggerSource from "$lib/components/blocks/magic/number-ticker/number-ticker-four/number-ticker-trigger.svelte?raw";
import numberTickerNumberTickerOneNumberTickerDecimalSource from "$lib/components/blocks/magic/number-ticker/number-ticker-one/number-ticker-decimal.svelte?raw";
import numberTickerNumberTickerThreeNumberTickerStartValueSource from "$lib/components/blocks/magic/number-ticker/number-ticker-three/number-ticker-start-value.svelte?raw";
import numberTickerNumberTickerTwoNumberTickerPrefixSuffixSource from "$lib/components/blocks/magic/number-ticker/number-ticker-two/number-ticker-prefix-suffix.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const numberTickerBlocks: BlockShowcaseItem[] = [
	{
		id: "number-ticker-one",
		title: "Number Ticker One",
		description:
			"A Number Ticker One composition.",
		previewComponent: NumberTickerOnePreview,
		previewHref: "/preview/magic/number-ticker/number-ticker-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "number-ticker-one",
		codeTree: createBlockCodeTree("number-ticker-one", [
			{
				id: "number-ticker-one",
				path: "src/lib/components/blocks/magic/number-ticker/number-ticker-one/number-ticker-decimal.svelte",
				lang: "svelte",
				code: numberTickerNumberTickerOneNumberTickerDecimalSource
			}
		])
	},	{
		id: "number-ticker-two",
		title: "Number Ticker Two",
		description:
			"A Number Ticker Two composition.",
		previewComponent: NumberTickerTwoPreview,
		previewHref: "/preview/magic/number-ticker/number-ticker-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "number-ticker-two",
		codeTree: createBlockCodeTree("number-ticker-two", [
			{
				id: "number-ticker-two",
				path: "src/lib/components/blocks/magic/number-ticker/number-ticker-two/number-ticker-prefix-suffix.svelte",
				lang: "svelte",
				code: numberTickerNumberTickerTwoNumberTickerPrefixSuffixSource
			}
		])
	},	{
		id: "number-ticker-three",
		title: "Number Ticker Three",
		description:
			"A Number Ticker Three composition.",
		previewComponent: NumberTickerThreePreview,
		previewHref: "/preview/magic/number-ticker/number-ticker-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "number-ticker-three",
		codeTree: createBlockCodeTree("number-ticker-three", [
			{
				id: "number-ticker-three",
				path: "src/lib/components/blocks/magic/number-ticker/number-ticker-three/number-ticker-start-value.svelte",
				lang: "svelte",
				code: numberTickerNumberTickerThreeNumberTickerStartValueSource
			}
		])
	},	{
		id: "number-ticker-four",
		title: "Number Ticker Four",
		description:
			"A Number Ticker Four composition.",
		previewComponent: NumberTickerFourPreview,
		previewHref: "/preview/magic/number-ticker/number-ticker-four",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "number-ticker-four",
		codeTree: createBlockCodeTree("number-ticker-four", [
			{
				id: "number-ticker-four",
				path: "src/lib/components/blocks/magic/number-ticker/number-ticker-four/number-ticker-trigger.svelte",
				lang: "svelte",
				code: numberTickerNumberTickerFourNumberTickerTriggerSource
			}
		])
	},	{
		id: "number-ticker-five",
		title: "Number Ticker Five",
		description:
			"A Number Ticker Five composition.",
		previewComponent: NumberTickerFivePreview,
		previewHref: "/preview/magic/number-ticker/number-ticker-five",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "number-ticker-five",
		codeTree: createBlockCodeTree("number-ticker-five", [
			{
				id: "number-ticker-five",
				path: "src/lib/components/blocks/magic/number-ticker/number-ticker-five/preview.svelte",
				lang: "svelte",
				code: numberTickerNumberTickerFivePreviewSource
			}
		])
	}
];

export function getNumberTickerBlock(id: string) {
	return numberTickerBlocks.find((block) => block.id === id);
}
