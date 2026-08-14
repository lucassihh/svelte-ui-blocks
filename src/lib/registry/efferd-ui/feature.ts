import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-three";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-three";
import FeatureFivePreview from "$lib/components/efferd-ui/feature/feature-five/feature-card.svelte";
import FeatureFourPreview from "$lib/components/efferd-ui/feature/feature-four/feature-card.svelte";
import FeatureOnePreview from "$lib/components/efferd-ui/feature/feature-one/feature.svelte";
import FeatureThreePreview from "$lib/components/efferd-ui/feature/feature-three/feature.svelte";
import FeatureTwoPreview from "$lib/components/efferd-ui/feature/feature-two/feature.svelte";

import dashedLineIndexSource from "$lib/components/ui/dashed-line/index.ts?raw";
import dashedLineSource from "$lib/components/ui/dashed-line/dashed-line.svelte?raw";
import decorIconIndexSource from "$lib/components/ui/decor-icon/index.ts?raw";
import decorIconSource from "$lib/components/ui/decor-icon/decor-icon.svelte?raw";
import dividerIndexSource from "$lib/components/ui/full-width-divider/index.ts?raw";
import dividerSource from "$lib/components/ui/full-width-divider/full-width-divider.svelte?raw";
import featureFeatureFiveFeatureCardSource from "$lib/components/efferd-ui/feature/feature-five/feature-card.svelte?raw";
import featureFeatureFiveFeatureSource from "$lib/components/efferd-ui/feature/feature-five/feature.svelte?raw";
import featureFeatureFourFeatureCardSource from "$lib/components/efferd-ui/feature/feature-four/feature-card.svelte?raw";
import featureFeatureFourFeatureSource from "$lib/components/efferd-ui/feature/feature-four/feature.svelte?raw";
import featureFeatureOneFeatureSource from "$lib/components/efferd-ui/feature/feature-one/feature.svelte?raw";
import featureFeatureThreeFeatureSource from "$lib/components/efferd-ui/feature/feature-three/feature.svelte?raw";
import featureFeatureTwoFeatureSource from "$lib/components/efferd-ui/feature/feature-two/feature.svelte?raw";
import gridPatternIndexSource from "$lib/components/ui/grid-pattern/index.ts?raw";
import gridPatternSource from "$lib/components/ui/grid-pattern/grid-pattern.svelte?raw";

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

export const featureBlocks: BlockShowcaseItem[] = [
	{
		id: "feature-five",
		title: "Feature Five",
		description: "A Feature Five composition.",
		previewComponent: FeatureFivePreview,
		previewHref: "/preview/efferd-ui/feature/feature-five",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "feature-five",
		codeTree: createBlockCodeTree("feature-five:preview", [
			{
				id: "feature-five:feature-card",
				path: "components/efferd/feature/feature-five/feature-card.svelte",
				lang: "svelte",
				code: featureFeatureFiveFeatureCardSource
			},
			{
				id: "feature-five:feature",
				path: "components/efferd/feature/feature-five/feature.svelte",
				lang: "svelte",
				code: featureFeatureFiveFeatureSource
			}
		])
	},
	{
		id: "feature-four",
		title: "Feature Four",
		description: "A Feature Four composition.",
		previewComponent: FeatureFourPreview,
		previewHref: "/preview/efferd-ui/feature/feature-four",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "feature-four",
		codeTree: createBlockCodeTree("feature-four:preview", [
			{
				id: "feature-four:feature-card",
				path: "components/efferd/feature/feature-four/feature-card.svelte",
				lang: "svelte",
				code: featureFeatureFourFeatureCardSource
			},
			{
				id: "feature-four:feature",
				path: "components/efferd/feature/feature-four/feature.svelte",
				lang: "svelte",
				code: featureFeatureFourFeatureSource
			},
			...decorIconFiles
		])
	},
	{
		id: "feature-one",
		title: "Feature One",
		description: "A Feature One composition.",
		previewComponent: FeatureOnePreview,
		previewHref: "/preview/efferd-ui/feature/feature-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "feature-one",
		codeTree: createBlockCodeTree("feature-one:preview", [
			{
				id: "feature-one:feature",
				path: "components/efferd/feature/feature-one/feature.svelte",
				lang: "svelte",
				code: featureFeatureOneFeatureSource
			}
		])
	},
	{
		id: "feature-three",
		title: "Feature Three",
		description: "A Feature Three composition.",
		previewComponent: FeatureThreePreview,
		previewHref: "/preview/efferd-ui/feature/feature-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "feature-three",
		codeTree: createBlockCodeTree("feature-three:preview", [
			{
				id: "feature-three:feature",
				path: "components/efferd/feature/feature-three/feature.svelte",
				lang: "svelte",
				code: featureFeatureThreeFeatureSource
			},
			...dividerFiles
		])
	},
	{
		id: "feature-two",
		title: "Feature Two",
		description: "A Feature Two composition.",
		previewComponent: FeatureTwoPreview,
		previewHref: "/preview/efferd-ui/feature/feature-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "feature-two",
		codeTree: createBlockCodeTree("feature-two:preview", [
			{
				id: "feature-two:feature",
				path: "components/efferd/feature/feature-two/feature.svelte",
				lang: "svelte",
				code: featureFeatureTwoFeatureSource
			},
			...decorIconFiles
		])
	}
];

export function getFeatureBlock(id: string) {
	return featureBlocks.find((block) => block.id === id);
}
