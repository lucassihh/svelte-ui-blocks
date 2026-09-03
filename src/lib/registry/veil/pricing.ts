// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import PricingOnePreview from "$lib/components/blocks/veil/pricing/pricing-one/pricing-one.svelte";
import PricingThreePreview from "$lib/components/blocks/veil/pricing/pricing-three/pricing-three.svelte";
import PricingTwoPreview from "$lib/components/blocks/veil/pricing/pricing-two/pricing-two.svelte";

// Raw
import buttonIndexSource from "$lib/components/ui/veil-ui/button/index.ts?raw";
import cardIndexSource from "$lib/components/ui/veil-ui/card/index.ts?raw";
import pricingPricingOneSource from "$lib/components/blocks/veil/pricing/pricing-one/pricing-one.svelte?raw";
import pricingPricingThreeSource from "$lib/components/blocks/veil/pricing/pricing-three/pricing-three.svelte?raw";
import pricingPricingTwoSource from "$lib/components/blocks/veil/pricing/pricing-two/pricing-two.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const pricingBlocks: BlockShowcaseItem[] = [
	{
		id: "pricing-one",
		title: "Pricing One",
		description:
			"A Pricing One composition.",
		previewComponent: PricingOnePreview,
		previewHref: "/preview/veil/pricing/pricing-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "pricing-one",
		codeTree: createBlockCodeTree("pricing-one", [
			{
				id: "pricing-one",
				path: "src/lib/components/blocks/veil/pricing/pricing-one/pricing-one.svelte",
				lang: "svelte",
				code: pricingPricingOneSource
			}
		])
	},	{
		id: "pricing-two",
		title: "Pricing Two",
		description:
			"A Pricing Two composition.",
		previewComponent: PricingTwoPreview,
		previewHref: "/preview/veil/pricing/pricing-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "pricing-two",
		codeTree: createBlockCodeTree("pricing-two", [
			{
				id: "pricing-two",
				path: "src/lib/components/blocks/veil/pricing/pricing-two/pricing-two.svelte",
				lang: "svelte",
				code: pricingPricingTwoSource
			}
		])
	},	{
		id: "pricing-three",
		title: "Pricing Three",
		description:
			"A Pricing Three composition.",
		previewComponent: PricingThreePreview,
		previewHref: "/preview/veil/pricing/pricing-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "pricing-three",
		codeTree: createBlockCodeTree("pricing-three", [
			{
				id: "pricing-three",
				path: "src/lib/components/blocks/veil/pricing/pricing-three/pricing-three.svelte",
				lang: "svelte",
				code: pricingPricingThreeSource
			}
		])
	}
];

export function getPricingBlock(id: string) {
	return pricingBlocks.find((block) => block.id === id);
}
