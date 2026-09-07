// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import FeaturesOnePreview from "$lib/components/blocks/veil/features/features-one/features-one.svelte";
import FeaturesTwoPreview from "$lib/components/blocks/veil/features/features-two/features-two.svelte";

// Raw
import featuresFeaturesOneSource from "$lib/components/blocks/veil/features/features-one/features-one.svelte?raw";
import featuresFeaturesTwoSource from "$lib/components/blocks/veil/features/features-two/features-two.svelte?raw";
import svgIndexSource from "$lib/assets/svg/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const featuresBlocks: BlockShowcaseItem[] = [
	{
		id: "features-one",
		title: "Features One",
		description:
			"A Features One composition.",
		previewComponent: FeaturesOnePreview,
		previewHref: "/preview/veil/features/features-one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "features-one",
		codeTree: createBlockCodeTree("features-one", [
			{
				id: "features-one",
				path: "src/lib/components/blocks/veil/features/features-one/features-one.svelte",
				lang: "svelte",
				code: featuresFeaturesOneSource
			}
		])
	},	{
		id: "features-two",
		title: "Features Two",
		description:
			"A Features Two composition.",
		previewComponent: FeaturesTwoPreview,
		previewHref: "/preview/veil/features/features-two",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "features-two",
		codeTree: createBlockCodeTree("features-two", [
			{
				id: "features-two",
				path: "src/lib/components/blocks/veil/features/features-two/features-two.svelte",
				lang: "svelte",
				code: featuresFeaturesTwoSource
			}
		])
	}
];

export function getFeaturesBlock(id: string) {
	return featuresBlocks.find((block) => block.id === id);
}
