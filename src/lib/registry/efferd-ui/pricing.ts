// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import PricingFourPreview from "$lib/components/blocks/efferd-ui/pricing/pricing-four/frequency-toggle.svelte";
import PricingOnePreview from "$lib/components/blocks/efferd-ui/pricing/pricing-one/pricing.svelte";
import PricingThreePreview from "$lib/components/blocks/efferd-ui/pricing/pricing-three/pricing-card.svelte";
import PricingTwoPreview from "$lib/components/blocks/efferd-ui/pricing/pricing-two/pricing.svelte";

// Raw
import decorIconIndexSource from "$lib/components/ui/decor-icon/index.ts?raw";
import dividerIndexSource from "$lib/components/ui/full-width-divider/index.ts?raw";
import pricingPricingFourFrequencyToggleSource from "$lib/components/blocks/efferd-ui/pricing/pricing-four/frequency-toggle.svelte?raw";
import pricingPricingFourPricingSource from "$lib/components/blocks/efferd-ui/pricing/pricing-four/pricing.svelte?raw";
import pricingPricingOnePricingSource from "$lib/components/blocks/efferd-ui/pricing/pricing-one/pricing.svelte?raw";
import pricingPricingThreePricingCardSource from "$lib/components/blocks/efferd-ui/pricing/pricing-three/pricing-card.svelte?raw";
import pricingPricingTwoPricingSource from "$lib/components/blocks/efferd-ui/pricing/pricing-two/pricing.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];
const decorIconFiles = [
	{
		id: "shared:decor-icon-index",
		path: "components/ui/decor-icon/index.ts",
		lang: "typescript" as const,
		code: decorIconIndexSource
	}
];
const dividerFiles = [
	{
		id: "shared:divider-index",
		path: "components/ui/full-width-divider/index.ts",
		lang: "typescript" as const,
		code: dividerIndexSource
	}
];

export const pricingBlocks: BlockShowcaseItem[] = [
	{
		id: "pricing-one",
		title: "Pricing One",
		description:
			"A Pricing One composition.",
		previewComponent: PricingOnePreview,
		previewHref: "/preview/efferd-ui/pricing/pricing-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "pricing-one",
		codeTree: createBlockCodeTree("pricing-one", [
			{
				id: "pricing-one",
				path: "src/lib/components/blocks/efferd-ui/pricing/pricing-one/pricing.svelte",
				lang: "svelte",
				code: pricingPricingOnePricingSource
			},
			...buttonFiles,
			...decorIconFiles
		])
	},	{
		id: "pricing-two",
		title: "Pricing Two",
		description:
			"A Pricing Two composition.",
		previewComponent: PricingTwoPreview,
		previewHref: "/preview/efferd-ui/pricing/pricing-two",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "pricing-two",
		codeTree: createBlockCodeTree("pricing-two", [
			{
				id: "pricing-two",
				path: "src/lib/components/blocks/efferd-ui/pricing/pricing-two/pricing.svelte",
				lang: "svelte",
				code: pricingPricingTwoPricingSource
			},
			...buttonFiles,
			...dividerFiles
		])
	},	{
		id: "pricing-three",
		title: "Pricing Three",
		description:
			"A Pricing Three composition.",
		previewComponent: PricingThreePreview,
		previewHref: "/preview/efferd-ui/pricing/pricing-three",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "pricing-three",
		codeTree: createBlockCodeTree("pricing-three", [
			{
				id: "pricing-three",
				path: "src/lib/components/blocks/efferd-ui/pricing/pricing-three/pricing-card.svelte",
				lang: "svelte",
				code: pricingPricingThreePricingCardSource
			},
			...buttonFiles
		])
	},	{
		id: "pricing-four",
		title: "Pricing Four",
		description:
			"A Pricing Four composition.",
		previewComponent: PricingFourPreview,
		previewHref: "/preview/efferd-ui/pricing/pricing-four",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "pricing-four",
		codeTree: createBlockCodeTree("pricing-four:pricing", [
			{
				id: "pricing-four:frequency-toggle",
				path: "src/lib/components/blocks/efferd-ui/pricing/pricing-four/frequency-toggle.svelte",
				lang: "svelte",
				code: pricingPricingFourFrequencyToggleSource
			},
			{
				id: "pricing-four:pricing",
				path: "src/lib/components/blocks/efferd-ui/pricing/pricing-four/pricing.svelte",
				lang: "svelte",
				code: pricingPricingFourPricingSource
			},
			...buttonFiles
		])
	}
];

export function getPricingBlock(id: string) {
	return pricingBlocks.find((block) => block.id === id);
}
