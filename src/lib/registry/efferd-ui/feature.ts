// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import FeatureFivePreview from "$lib/components/blocks/efferd-ui/feature/feature-five/feature-card.svelte";
import FeatureFourPreview from "$lib/components/blocks/efferd-ui/feature/feature-four/feature-card.svelte";
import FeatureOnePreview from "$lib/components/blocks/efferd-ui/feature/feature-one/feature.svelte";
import FeatureThreePreview from "$lib/components/blocks/efferd-ui/feature/feature-three/feature.svelte";
import FeatureTwoPreview from "$lib/components/blocks/efferd-ui/feature/feature-two/feature.svelte";

// Raw
import dashedLineIndexSource from "$lib/components/ui/dashed-line/index.ts?raw";
import decorIconIndexSource from "$lib/components/ui/decor-icon/index.ts?raw";
import dividerIndexSource from "$lib/components/ui/full-width-divider/index.ts?raw";
import featureFeatureFiveFeatureCardSource from "$lib/components/blocks/efferd-ui/feature/feature-five/feature-card.svelte?raw";
import featureFeatureFourFeatureCardSource from "$lib/components/blocks/efferd-ui/feature/feature-four/feature-card.svelte?raw";
import featureFeatureOneFeatureSource from "$lib/components/blocks/efferd-ui/feature/feature-one/feature.svelte?raw";
import featureFeatureThreeFeatureSource from "$lib/components/blocks/efferd-ui/feature/feature-three/feature.svelte?raw";
import featureFeatureTwoFeatureSource from "$lib/components/blocks/efferd-ui/feature/feature-two/feature.svelte?raw";
import gridPatternIndexSource from "$lib/components/ui/grid-pattern/index.ts?raw";

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

export const featureBlocks: BlockShowcaseItem[] = [
	{
		id: "feature-one",
		title: "Feature One",
		description:
			"Interactive feature showcase section with custom graphics and controls.",
		previewComponent: FeatureOnePreview,
		previewHref: "/preview/efferd-ui/feature/feature-one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "feature-one",
		codeTree: createBlockCodeTree("feature-one", [
			{
				id: "feature-one",
				path: "src/lib/components/blocks/efferd-ui/feature/feature-one/feature.svelte",
				lang: "svelte",
				code: featureFeatureOneFeatureSource
			}
		])
	},	{
		id: "feature-two",
		title: "Feature Two",
		description:
			"Interactive feature showcase section with custom graphics and controls.",
		previewComponent: FeatureTwoPreview,
		previewHref: "/preview/efferd-ui/feature/feature-two",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "feature-two",
		codeTree: createBlockCodeTree("feature-two", [
			{
				id: "feature-two",
				path: "src/lib/components/blocks/efferd-ui/feature/feature-two/feature.svelte",
				lang: "svelte",
				code: featureFeatureTwoFeatureSource
			},
			...decorIconFiles
		])
	},	{
		id: "feature-three",
		title: "Feature Three",
		description:
			"Interactive feature showcase section with custom graphics and controls.",
		previewComponent: FeatureThreePreview,
		previewHref: "/preview/efferd-ui/feature/feature-three",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "feature-three",
		codeTree: createBlockCodeTree("feature-three", [
			{
				id: "feature-three",
				path: "src/lib/components/blocks/efferd-ui/feature/feature-three/feature.svelte",
				lang: "svelte",
				code: featureFeatureThreeFeatureSource
			},
			...dividerFiles
		])
	},	{
		id: "feature-four",
		title: "Feature Four",
		description:
			"Interactive feature showcase section with custom graphics and controls.",
		previewComponent: FeatureFourPreview,
		previewHref: "/preview/efferd-ui/feature/feature-four",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "feature-four",
		codeTree: createBlockCodeTree("feature-four", [
			{
				id: "feature-four",
				path: "src/lib/components/blocks/efferd-ui/feature/feature-four/feature-card.svelte",
				lang: "svelte",
				code: featureFeatureFourFeatureCardSource
			},
			...decorIconFiles
		])
	},	{
		id: "feature-five",
		title: "Feature Five",
		description:
			"Interactive feature showcase section with custom graphics and controls.",
		previewComponent: FeatureFivePreview,
		previewHref: "/preview/efferd-ui/feature/feature-five",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "feature-five",
		codeTree: createBlockCodeTree("feature-five", [
			{
				id: "feature-five",
				path: "src/lib/components/blocks/efferd-ui/feature/feature-five/feature-card.svelte",
				lang: "svelte",
				code: featureFeatureFiveFeatureCardSource
			}
		])
	}
];

export function getFeatureBlock(id: string) {
	return featureBlocks.find((block) => block.id === id);
}
