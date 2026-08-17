import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-three";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-three";
import LogoCloudFivePreview from "$lib/components/efferd-ui/logo-cloud/logo-cloud-five/logo-cloud.svelte";
import LogoCloudFourPreview from "$lib/components/efferd-ui/logo-cloud/logo-cloud-four/logo-cloud.svelte";
import LogoCloudOnePreview from "$lib/components/efferd-ui/logo-cloud/logo-cloud-one/logo-cloud.svelte";
import LogoCloudThreePreview from "$lib/components/efferd-ui/logo-cloud/logo-cloud-three/showcase.svelte";
import LogoCloudTwoPreview from "$lib/components/efferd-ui/logo-cloud/logo-cloud-two/logo-card.svelte";

import decorIconIndexSource from "$lib/components/ui/decor-icon/index.ts?raw";
import decorIconSource from "$lib/components/ui/decor-icon/decor-icon.svelte?raw";
import logoCloudLogoCloudFiveLogoCloudSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-five/logo-cloud.svelte?raw";
import logoCloudLogoCloudFourLogoCloudSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-four/logo-cloud.svelte?raw";
import logoCloudLogoCloudOneLogoCloudSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-one/logo-cloud.svelte?raw";
import logoCloudLogoCloudThreeLogoCloudSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-three/logo-cloud.svelte?raw";
import logoCloudLogoCloudThreeShowcaseSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-three/showcase.svelte?raw";
import logoCloudLogoCloudTwoLogoCardSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-two/logo-card.svelte?raw";
import logoCloudLogoCloudTwoLogoCloudSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-two/logo-cloud.svelte?raw";
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
		id: "logo-cloud-one",
		title: "Logo Cloud One",
		description:
			"A responsive logo grid/marquee component for showcasing partners and clients.",
		previewComponent: LogoCloudOnePreview,
		previewHref: "/preview/efferd-ui/logo-cloud/logo-cloud-one",
		previewMode: "iframe",
		previewHeight: 320,
		installId: "logo-cloud-one",
		codeTree: createBlockCodeTree("logo-cloud-one:preview", [
			{
				id: "logo-cloud-one:logo-cloud",
				path: "components/efferd/logo-cloud/logo-cloud-one/logo-cloud.svelte",
				lang: "svelte",
				code: logoCloudLogoCloudOneLogoCloudSource
			}
		])
	},	{
		id: "logo-cloud-two",
		title: "Logo Cloud Two",
		description:
			"A responsive logo grid/marquee component for showcasing partners and clients.",
		previewComponent: LogoCloudTwoPreview,
		previewHref: "/preview/efferd-ui/logo-cloud/logo-cloud-two",
		previewMode: "iframe",
		previewHeight: 320,
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
			...decorIconFiles
		])
	},	{
		id: "logo-cloud-three",
		title: "Logo Cloud Three",
		description:
			"A responsive logo grid/marquee component for showcasing partners and clients.",
		previewComponent: LogoCloudThreePreview,
		previewHref: "/preview/efferd-ui/logo-cloud/logo-cloud-three",
		previewMode: "iframe",
		previewHeight: 320,
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
	},	{
		id: "logo-cloud-four",
		title: "Logo Cloud Four",
		description:
			"A responsive logo grid/marquee component for showcasing partners and clients.",
		previewComponent: LogoCloudFourPreview,
		previewHref: "/preview/efferd-ui/logo-cloud/logo-cloud-four",
		previewMode: "iframe",
		previewHeight: 320,
		installId: "logo-cloud-four",
		codeTree: createBlockCodeTree("logo-cloud-four:preview", [
			{
				id: "logo-cloud-four:logo-cloud",
				path: "components/efferd/logo-cloud/logo-cloud-four/logo-cloud.svelte",
				lang: "svelte",
				code: logoCloudLogoCloudFourLogoCloudSource
			},
			...marqueeFiles
		])
	},	{
		id: "logo-cloud-five",
		title: "Logo Cloud Five",
		description:
			"A responsive logo grid/marquee component for showcasing partners and clients.",
		previewComponent: LogoCloudFivePreview,
		previewHref: "/preview/efferd-ui/logo-cloud/logo-cloud-five",
		previewMode: "iframe",
		previewHeight: 320,
		installId: "logo-cloud-five",
		codeTree: createBlockCodeTree("logo-cloud-five:preview", [
			{
				id: "logo-cloud-five:logo-cloud",
				path: "components/efferd/logo-cloud/logo-cloud-five/logo-cloud.svelte",
				lang: "svelte",
				code: logoCloudLogoCloudFiveLogoCloudSource
			}
		])
	}
];

export function getLogoCloudBlock(id: string) {
	return logoCloudBlocks.find((block) => block.id === id);
}
