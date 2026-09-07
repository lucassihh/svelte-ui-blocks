// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import LogoCloudFivePreview from "$lib/components/blocks/efferd/logo-cloud/logo-cloud-five/logo-cloud.svelte";
import LogoCloudFourPreview from "$lib/components/blocks/efferd/logo-cloud/logo-cloud-four/logo-cloud.svelte";
import LogoCloudOnePreview from "$lib/components/blocks/efferd/logo-cloud/logo-cloud-one/logo-cloud.svelte";
import LogoCloudThreePreview from "$lib/components/blocks/efferd/logo-cloud/logo-cloud-three/showcase.svelte";
import LogoCloudTwoPreview from "$lib/components/blocks/efferd/logo-cloud/logo-cloud-two/logo-card.svelte";

// Raw
import logoCloudLogoCloudFiveLogoCloudSource from "$lib/components/blocks/efferd/logo-cloud/logo-cloud-five/logo-cloud.svelte?raw";
import logoCloudLogoCloudFourLogoCloudSource from "$lib/components/blocks/efferd/logo-cloud/logo-cloud-four/logo-cloud.svelte?raw";
import logoCloudLogoCloudOneLogoCloudSource from "$lib/components/blocks/efferd/logo-cloud/logo-cloud-one/logo-cloud.svelte?raw";
import logoCloudLogoCloudThreeLogoCloudSource from "$lib/components/blocks/efferd/logo-cloud/logo-cloud-three/logo-cloud.svelte?raw";
import logoCloudLogoCloudTwoLogoCardSource from "$lib/components/blocks/efferd/logo-cloud/logo-cloud-two/logo-card.svelte?raw";
import marqueeIndexSource from "$lib/components/ui/magic-ui/marquee/index.ts?raw";
import progressiveBlurIndexSource from "$lib/components/ui/progressive-blur/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const logoCloudBlocks: BlockShowcaseItem[] = [
	{
		id: "logo-cloud-one",
		title: "Logo Cloud One",
		description:
			"A Logo Cloud One composition.",
		previewComponent: LogoCloudOnePreview,
		previewHref: "/preview/efferd/logo-cloud/logo-cloud-one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "logo-cloud-one",
		codeTree: createBlockCodeTree("logo-cloud-one", [
			{
				id: "logo-cloud-one",
				path: "src/lib/components/blocks/efferd/logo-cloud/logo-cloud-one/logo-cloud.svelte",
				lang: "svelte",
				code: logoCloudLogoCloudOneLogoCloudSource
			}
		])
	},	{
		id: "logo-cloud-two",
		title: "Logo Cloud Two",
		description:
			"A Logo Cloud Two composition.",
		previewComponent: LogoCloudTwoPreview,
		previewHref: "/preview/efferd/logo-cloud/logo-cloud-two",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "logo-cloud-two",
		codeTree: createBlockCodeTree("logo-cloud-two", [
			{
				id: "logo-cloud-two",
				path: "src/lib/components/blocks/efferd/logo-cloud/logo-cloud-two/logo-card.svelte",
				lang: "svelte",
				code: logoCloudLogoCloudTwoLogoCardSource
			}
		])
	},	{
		id: "logo-cloud-three",
		title: "Logo Cloud Three",
		description:
			"A Logo Cloud Three composition.",
		previewComponent: LogoCloudThreePreview,
		previewHref: "/preview/efferd/logo-cloud/logo-cloud-three",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "logo-cloud-three",
		codeTree: createBlockCodeTree("logo-cloud-three", [
			{
				id: "logo-cloud-three",
				path: "src/lib/components/blocks/efferd/logo-cloud/logo-cloud-three/logo-cloud.svelte",
				lang: "svelte",
				code: logoCloudLogoCloudThreeLogoCloudSource
			}
		])
	},	{
		id: "logo-cloud-four",
		title: "Logo Cloud Four",
		description:
			"A Logo Cloud Four composition.",
		previewComponent: LogoCloudFourPreview,
		previewHref: "/preview/efferd/logo-cloud/logo-cloud-four",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "logo-cloud-four",
		codeTree: createBlockCodeTree("logo-cloud-four", [
			{
				id: "logo-cloud-four",
				path: "src/lib/components/blocks/efferd/logo-cloud/logo-cloud-four/logo-cloud.svelte",
				lang: "svelte",
				code: logoCloudLogoCloudFourLogoCloudSource
			}
		])
	},	{
		id: "logo-cloud-five",
		title: "Logo Cloud Five",
		description:
			"A Logo Cloud Five composition.",
		previewComponent: LogoCloudFivePreview,
		previewHref: "/preview/efferd/logo-cloud/logo-cloud-five",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "logo-cloud-five",
		codeTree: createBlockCodeTree("logo-cloud-five", [
			{
				id: "logo-cloud-five",
				path: "src/lib/components/blocks/efferd/logo-cloud/logo-cloud-five/logo-cloud.svelte",
				lang: "svelte",
				code: logoCloudLogoCloudFiveLogoCloudSource
			}
		])
	}
];

export function getLogoCloudBlock(id: string) {
	return logoCloudBlocks.find((block) => block.id === id);
}
