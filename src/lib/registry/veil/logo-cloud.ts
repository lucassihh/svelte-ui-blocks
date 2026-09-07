// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import LogoCloudOnePreview from "$lib/components/blocks/veil/logo-cloud/logo-cloud-one/logo-cloud-one.svelte";
import LogoCloudTwoPreview from "$lib/components/blocks/veil/logo-cloud/logo-cloud-two/logo-cloud-two.svelte";

// Raw
import logoCloudLogoCloudOneSource from "$lib/components/blocks/veil/logo-cloud/logo-cloud-one/logo-cloud-one.svelte?raw";
import logoCloudLogoCloudTwoSource from "$lib/components/blocks/veil/logo-cloud/logo-cloud-two/logo-cloud-two.svelte?raw";
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

export const logoCloudBlocks: BlockShowcaseItem[] = [
	{
		id: "logo-cloud-one",
		title: "Logo Cloud One",
		description:
			"A Logo Cloud One composition.",
		previewComponent: LogoCloudOnePreview,
		previewHref: "/preview/veil/logo-cloud/logo-cloud-one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "logo-cloud-one",
		codeTree: createBlockCodeTree("logo-cloud-one", [
			{
				id: "logo-cloud-one",
				path: "src/lib/components/blocks/veil/logo-cloud/logo-cloud-one/logo-cloud-one.svelte",
				lang: "svelte",
				code: logoCloudLogoCloudOneSource
			}
		])
	},	{
		id: "logo-cloud-two",
		title: "Logo Cloud Two",
		description:
			"A Logo Cloud Two composition.",
		previewComponent: LogoCloudTwoPreview,
		previewHref: "/preview/veil/logo-cloud/logo-cloud-two",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "logo-cloud-two",
		codeTree: createBlockCodeTree("logo-cloud-two", [
			{
				id: "logo-cloud-two",
				path: "src/lib/components/blocks/veil/logo-cloud/logo-cloud-two/logo-cloud-two.svelte",
				lang: "svelte",
				code: logoCloudLogoCloudTwoSource
			}
		])
	}
];

export function getLogoCloudBlock(id: string) {
	return logoCloudBlocks.find((block) => block.id === id);
}
