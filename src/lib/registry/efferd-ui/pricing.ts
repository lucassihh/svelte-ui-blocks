import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-three";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-three";
import PricingFourPreview from "$lib/components/efferd-ui/pricing/pricing-four/frequency-toggle.svelte";
import PricingOnePreview from "$lib/components/efferd-ui/pricing/pricing-one/pricing.svelte";
import PricingThreePreview from "$lib/components/efferd-ui/pricing/pricing-three/pricing-card.svelte";
import PricingTwoPreview from "$lib/components/efferd-ui/pricing/pricing-two/pricing.svelte";

import decorIconIndexSource from "$lib/components/ui/decor-icon/index.ts?raw";
import decorIconSource from "$lib/components/ui/decor-icon/decor-icon.svelte?raw";
import dividerIndexSource from "$lib/components/ui/full-width-divider/index.ts?raw";
import dividerSource from "$lib/components/ui/full-width-divider/full-width-divider.svelte?raw";
import pricingPricingFourFrequencyToggleSource from "$lib/components/efferd-ui/pricing/pricing-four/frequency-toggle.svelte?raw";
import pricingPricingFourPricingSource from "$lib/components/efferd-ui/pricing/pricing-four/pricing.svelte?raw";
import pricingPricingOnePricingSource from "$lib/components/efferd-ui/pricing/pricing-one/pricing.svelte?raw";
import pricingPricingThreePricingCardSource from "$lib/components/efferd-ui/pricing/pricing-three/pricing-card.svelte?raw";
import pricingPricingThreePricingSource from "$lib/components/efferd-ui/pricing/pricing-three/pricing.svelte?raw";
import pricingPricingTwoPricingSource from "$lib/components/efferd-ui/pricing/pricing-two/pricing.svelte?raw";

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
		id: "shared:decor-icon",
		path: "components/ui/decor-icon/decor-icon.svelte",
		lang: "svelte" as const,
		code: decorIconSource
	},
	{
		id: "shared:decor-icon-index",
		path: "components/ui/decor-icon/index.ts",
		lang: "typescript" as const,
		code: decorIconIndexSource
	}
];
const dividerFiles = [
	{
		id: "shared:divider",
		path: "components/ui/full-width-divider/full-width-divider.svelte",
		lang: "svelte" as const,
		code: dividerSource
	},
	{
		id: "shared:divider-index",
		path: "components/ui/full-width-divider/index.ts",
		lang: "typescript" as const,
		code: dividerIndexSource
	}
];

export const pricingBlocks: BlockShowcaseItem[] = [
	{
		id: "pricing-four",
		title: "Pricing Four",
		description: "A Pricing Four composition.",
		previewComponent: PricingFourPreview,
		previewHref: "/preview/efferd-ui/pricing/pricing-four",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "pricing-four",
		codeTree: createBlockCodeTree("pricing-four:preview", [
			{
				id: "pricing-four:frequency-toggle",
				path: "components/efferd/pricing/pricing-four/frequency-toggle.svelte",
				lang: "svelte",
				code: pricingPricingFourFrequencyToggleSource
			},
			{
				id: "pricing-four:pricing",
				path: "components/efferd/pricing/pricing-four/pricing.svelte",
				lang: "svelte",
				code: pricingPricingFourPricingSource
			},
			...buttonFiles
		])
	},
	{
		id: "pricing-one",
		title: "Pricing One",
		description: "A Pricing One composition.",
		previewComponent: PricingOnePreview,
		previewHref: "/preview/efferd-ui/pricing/pricing-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "pricing-one",
		codeTree: createBlockCodeTree("pricing-one:preview", [
			{
				id: "pricing-one:pricing",
				path: "components/efferd/pricing/pricing-one/pricing.svelte",
				lang: "svelte",
				code: pricingPricingOnePricingSource
			},
			...buttonFiles,
			...decorIconFiles
		])
	},
	{
		id: "pricing-three",
		title: "Pricing Three",
		description: "A Pricing Three composition.",
		previewComponent: PricingThreePreview,
		previewHref: "/preview/efferd-ui/pricing/pricing-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "pricing-three",
		codeTree: createBlockCodeTree("pricing-three:preview", [
			{
				id: "pricing-three:pricing-card",
				path: "components/efferd/pricing/pricing-three/pricing-card.svelte",
				lang: "svelte",
				code: pricingPricingThreePricingCardSource
			},
			{
				id: "pricing-three:pricing",
				path: "components/efferd/pricing/pricing-three/pricing.svelte",
				lang: "svelte",
				code: pricingPricingThreePricingSource
			},
			...buttonFiles
		])
	},
	{
		id: "pricing-two",
		title: "Pricing Two",
		description: "A Pricing Two composition.",
		previewComponent: PricingTwoPreview,
		previewHref: "/preview/efferd-ui/pricing/pricing-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "pricing-two",
		codeTree: createBlockCodeTree("pricing-two:preview", [
			{
				id: "pricing-two:pricing",
				path: "components/efferd/pricing/pricing-two/pricing.svelte",
				lang: "svelte",
				code: pricingPricingTwoPricingSource
			},
			...buttonFiles,
			...dividerFiles
		])
	}
];

export function getPricingBlock(id: string) {
	return pricingBlocks.find((block) => block.id === id);
}
