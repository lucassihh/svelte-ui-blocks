import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-three";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-three";
import LogoCloudFivePreview from "$lib/components/efferd-ui/logo-cloud/logo-cloud-five/preview.svelte";
import LogoCloudFourPreview from "$lib/components/efferd-ui/logo-cloud/logo-cloud-four/preview.svelte";
import LogoCloudOnePreview from "$lib/components/efferd-ui/logo-cloud/logo-cloud-one/logo-cloud.svelte";
import LogoCloudThreePreview from "$lib/components/efferd-ui/logo-cloud/logo-cloud-three/showcase.svelte";
import LogoCloudTwoPreview from "$lib/components/efferd-ui/logo-cloud/logo-cloud-two/preview.svelte";

import decorIconIndexSource from "$lib/components/ui/decor-icon/index.ts?raw";
import decorIconSource from "$lib/components/ui/decor-icon/decor-icon.svelte?raw";
import logoCloudLogoCloudFiveLogoCloudSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-five/logo-cloud.svelte?raw";
import logoCloudLogoCloudFivePreviewSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-five/preview.svelte?raw";
import logoCloudLogoCloudFourLogoCloudSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-four/logo-cloud.svelte?raw";
import logoCloudLogoCloudFourPreviewSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-four/preview.svelte?raw";
import logoCloudLogoCloudOneLogoCloudSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-one/logo-cloud.svelte?raw";
import logoCloudLogoCloudThreeLogoCloudSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-three/logo-cloud.svelte?raw";
import logoCloudLogoCloudThreeShowcaseSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-three/showcase.svelte?raw";
import logoCloudLogoCloudTwoLogoCardSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-two/logo-card.svelte?raw";
import logoCloudLogoCloudTwoLogoCloudSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-two/logo-cloud.svelte?raw";
import logoCloudLogoCloudTwoPreviewSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-two/preview.svelte?raw";
import marqueeIndexSource from "$lib/components/magic-ui/marquee/index.ts?raw";
import marqueeSource from "$lib/components/magic-ui/marquee/marquee.svelte?raw";
import progressiveBlurIndexSource from "$lib/components/ui/progressive-blur/index.ts?raw";
import progressiveBlurSource from "$lib/components/ui/progressive-blur/progressive-blur.svelte?raw";

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
const marqueeFiles = [
	{
		id: "shared:marquee-index",
		path: "components/magic/marquee/index.ts",
		lang: "typescript" as const,
		code: marqueeIndexSource
	},
	{
		id: "shared:marquee",
		path: "components/magic/marquee/marquee.svelte",
		lang: "svelte" as const,
		code: marqueeSource
	}
];

export const logoCloudBlocks: BlockShowcaseItem[] = [
	{
		id: "logo-cloud-five",
		title: "Logo Cloud Five",
		description: "A Logo Cloud Five composition.",
		previewComponent: LogoCloudFivePreview,
		previewHref: "/preview/efferd-ui/logo-cloud/logo-cloud-five",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "logo-cloud-five",
		codeTree: createBlockCodeTree("logo-cloud-five:preview", [
			{
				id: "logo-cloud-five:logo-cloud",
				path: "components/efferd/logo-cloud/logo-cloud-five/logo-cloud.svelte",
				lang: "svelte",
				code: logoCloudLogoCloudFiveLogoCloudSource
			},
			{
				id: "logo-cloud-five:preview",
				path: "components/efferd/logo-cloud/logo-cloud-five/preview.svelte",
				lang: "svelte",
				code: logoCloudLogoCloudFivePreviewSource
			}
		])
	},
	{
		id: "logo-cloud-four",
		title: "Logo Cloud Four",
		description: "A Logo Cloud Four composition.",
		previewComponent: LogoCloudFourPreview,
		previewHref: "/preview/efferd-ui/logo-cloud/logo-cloud-four",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "logo-cloud-four",
		codeTree: createBlockCodeTree("logo-cloud-four:preview", [
			{
				id: "logo-cloud-four:logo-cloud",
				path: "components/efferd/logo-cloud/logo-cloud-four/logo-cloud.svelte",
				lang: "svelte",
				code: logoCloudLogoCloudFourLogoCloudSource
			},
			{
				id: "logo-cloud-four:preview",
				path: "components/efferd/logo-cloud/logo-cloud-four/preview.svelte",
				lang: "svelte",
				code: logoCloudLogoCloudFourPreviewSource
			},
			...marqueeFiles
		])
	},
	{
		id: "logo-cloud-one",
		title: "Logo Cloud One",
		description: "A Logo Cloud One composition.",
		previewComponent: LogoCloudOnePreview,
		previewHref: "/preview/efferd-ui/logo-cloud/logo-cloud-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "logo-cloud-one",
		codeTree: createBlockCodeTree("logo-cloud-one:preview", [
			{
				id: "logo-cloud-one:logo-cloud",
				path: "components/efferd/logo-cloud/logo-cloud-one/logo-cloud.svelte",
				lang: "svelte",
				code: logoCloudLogoCloudOneLogoCloudSource
			}
		])
	},
	{
		id: "logo-cloud-three",
		title: "Logo Cloud Three",
		description: "A Logo Cloud Three composition.",
		previewComponent: LogoCloudThreePreview,
		previewHref: "/preview/efferd-ui/logo-cloud/logo-cloud-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "logo-cloud-three",
		codeTree: createBlockCodeTree("logo-cloud-three:preview", [
			{
				id: "logo-cloud-three:logo-cloud",
				path: "components/efferd/logo-cloud/logo-cloud-three/logo-cloud.svelte",
				lang: "svelte",
				code: logoCloudLogoCloudThreeLogoCloudSource
			},
			{
				id: "logo-cloud-three:showcase",
				path: "components/efferd/logo-cloud/logo-cloud-three/showcase.svelte",
				lang: "svelte",
				code: logoCloudLogoCloudThreeShowcaseSource
			},
			...marqueeFiles
		])
	},
	{
		id: "logo-cloud-two",
		title: "Logo Cloud Two",
		description: "A Logo Cloud Two composition.",
		previewComponent: LogoCloudTwoPreview,
		previewHref: "/preview/efferd-ui/logo-cloud/logo-cloud-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "logo-cloud-two",
		codeTree: createBlockCodeTree("logo-cloud-two:preview", [
			{
				id: "logo-cloud-two:logo-card",
				path: "components/efferd/logo-cloud/logo-cloud-two/logo-card.svelte",
				lang: "svelte",
				code: logoCloudLogoCloudTwoLogoCardSource
			},
			{
				id: "logo-cloud-two:logo-cloud",
				path: "components/efferd/logo-cloud/logo-cloud-two/logo-cloud.svelte",
				lang: "svelte",
				code: logoCloudLogoCloudTwoLogoCloudSource
			},
			{
				id: "logo-cloud-two:preview",
				path: "components/efferd/logo-cloud/logo-cloud-two/preview.svelte",
				lang: "svelte",
				code: logoCloudLogoCloudTwoPreviewSource
			},
			...decorIconFiles
		])
	}
];

export function getLogoCloudBlock(id: string) {
	return logoCloudBlocks.find((block) => block.id === id);
}
