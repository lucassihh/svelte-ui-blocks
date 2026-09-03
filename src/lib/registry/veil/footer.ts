// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import FooterFivePreview from "$lib/components/blocks/veil/footer/footer-five/footer-five.svelte";
import FooterFourPreview from "$lib/components/blocks/veil/footer/footer-four/footer-four.svelte";
import FooterOnePreview from "$lib/components/blocks/veil/footer/footer-one/footer-one.svelte";
import FooterSixPreview from "$lib/components/blocks/veil/footer/footer-six/footer-six.svelte";
import FooterThreePreview from "$lib/components/blocks/veil/footer/footer-three/footer-three.svelte";
import FooterTwoPreview from "$lib/components/blocks/veil/footer/footer-two/footer-two.svelte";

// Raw
import footerFooterFiveSource from "$lib/components/blocks/veil/footer/footer-five/footer-five.svelte?raw";
import footerFooterFiveThemeSwitcherSource from "$lib/components/blocks/veil/footer/footer-five/theme-switcher.svelte?raw";
import footerFooterFourSource from "$lib/components/blocks/veil/footer/footer-four/footer-four.svelte?raw";
import footerFooterOneSource from "$lib/components/blocks/veil/footer/footer-one/footer-one.svelte?raw";
import footerFooterSixSocialMediaOneSource from "$lib/components/blocks/veil/footer/footer-six/social-media-one.svelte?raw";
import footerFooterSixSource from "$lib/components/blocks/veil/footer/footer-six/footer-six.svelte?raw";
import footerFooterSixThemeSwitcherSource from "$lib/components/blocks/veil/footer/footer-six/theme-switcher.svelte?raw";
import footerFooterThreeSource from "$lib/components/blocks/veil/footer/footer-three/footer-three.svelte?raw";
import footerFooterTwoSource from "$lib/components/blocks/veil/footer/footer-two/footer-two.svelte?raw";
import logoSvgSource from "$lib/assets/svg/logo.svelte?raw";
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
const logoFiles = [
	{
		id: "shared:logo-svg",
		path: "svgs/logo.svelte",
		lang: "svelte" as const,
		code: logoSvgSource
	}
];

export const footerBlocks: BlockShowcaseItem[] = [
	{
		id: "footer-one",
		title: "Footer One",
		description:
			"A Footer One composition.",
		previewComponent: FooterOnePreview,
		previewHref: "/preview/veil/footer/footer-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "footer-one",
		codeTree: createBlockCodeTree("footer-one", [
			{
				id: "footer-one",
				path: "src/lib/components/blocks/veil/footer/footer-one/footer-one.svelte",
				lang: "svelte",
				code: footerFooterOneSource
			},
			...logoFiles
		])
	},	{
		id: "footer-two",
		title: "Footer Two",
		description:
			"A Footer Two composition.",
		previewComponent: FooterTwoPreview,
		previewHref: "/preview/veil/footer/footer-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "footer-two",
		codeTree: createBlockCodeTree("footer-two", [
			{
				id: "footer-two",
				path: "src/lib/components/blocks/veil/footer/footer-two/footer-two.svelte",
				lang: "svelte",
				code: footerFooterTwoSource
			},
			...logoFiles
		])
	},	{
		id: "footer-three",
		title: "Footer Three",
		description:
			"A Footer Three composition.",
		previewComponent: FooterThreePreview,
		previewHref: "/preview/veil/footer/footer-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "footer-three",
		codeTree: createBlockCodeTree("footer-three", [
			{
				id: "footer-three",
				path: "src/lib/components/blocks/veil/footer/footer-three/footer-three.svelte",
				lang: "svelte",
				code: footerFooterThreeSource
			},
			...logoFiles
		])
	},	{
		id: "footer-four",
		title: "Footer Four",
		description:
			"A Footer Four composition.",
		previewComponent: FooterFourPreview,
		previewHref: "/preview/veil/footer/footer-four",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "footer-four",
		codeTree: createBlockCodeTree("footer-four", [
			{
				id: "footer-four",
				path: "src/lib/components/blocks/veil/footer/footer-four/footer-four.svelte",
				lang: "svelte",
				code: footerFooterFourSource
			},
			...logoFiles
		])
	},	{
		id: "footer-five",
		title: "Footer Five",
		description:
			"A Footer Five composition.",
		previewComponent: FooterFivePreview,
		previewHref: "/preview/veil/footer/footer-five",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "footer-five",
		codeTree: createBlockCodeTree("footer-five:footer", [
			{
				id: "footer-five:footer-five",
				path: "src/lib/components/blocks/veil/footer/footer-five/footer-five.svelte",
				lang: "svelte",
				code: footerFooterFiveSource
			},
			{
				id: "footer-five:theme-switcher",
				path: "src/lib/components/blocks/veil/footer/footer-five/theme-switcher.svelte",
				lang: "svelte",
				code: footerFooterFiveThemeSwitcherSource
			},
			...logoFiles
		])
	},	{
		id: "footer-six",
		title: "Footer Six",
		description:
			"A Footer Six composition.",
		previewComponent: FooterSixPreview,
		previewHref: "/preview/veil/footer/footer-six",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "footer-six",
		codeTree: createBlockCodeTree("footer-six:footer", [
			{
				id: "footer-six:footer-six",
				path: "src/lib/components/blocks/veil/footer/footer-six/footer-six.svelte",
				lang: "svelte",
				code: footerFooterSixSource
			},
			{
				id: "footer-six:social-media-one",
				path: "src/lib/components/blocks/veil/footer/footer-six/social-media-one.svelte",
				lang: "svelte",
				code: footerFooterSixSocialMediaOneSource
			},
			{
				id: "footer-six:theme-switcher",
				path: "src/lib/components/blocks/veil/footer/footer-six/theme-switcher.svelte",
				lang: "svelte",
				code: footerFooterSixThemeSwitcherSource
			},
			...logoFiles
		])
	}
];

export function getFooterBlock(id: string) {
	return footerBlocks.find((block) => block.id === id);
}
