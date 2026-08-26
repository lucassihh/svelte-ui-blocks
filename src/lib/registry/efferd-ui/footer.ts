// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import FooterFivePreview from "$lib/components/blocks/efferd-ui/footer/footer-five/footer.svelte";
import FooterFourPreview from "$lib/components/blocks/efferd-ui/footer/footer-four/LinkGroup.svelte";
import FooterOnePreview from "$lib/components/blocks/efferd-ui/footer/footer-one/footer.svelte";
import FooterSixPreview from "$lib/components/blocks/efferd-ui/footer/footer-six/AnimatedContainer.svelte";
import FooterThreePreview from "$lib/components/blocks/efferd-ui/footer/footer-three/AnimatedContainer.svelte";
import FooterTwoPreview from "$lib/components/blocks/efferd-ui/footer/footer-two/footer.svelte";

// Raw
import appleSource from "$lib/assets/svg/brand/apple.svelte?raw";
import facebookSource from "$lib/assets/svg/social/facebook.svelte?raw";
import footerFooterFiveFooterSource from "$lib/components/blocks/efferd-ui/footer/footer-five/footer.svelte?raw";
import footerFooterFourFooterSource from "$lib/components/blocks/efferd-ui/footer/footer-four/footer.svelte?raw";
import footerFooterFourLinkgroupSource from "$lib/components/blocks/efferd-ui/footer/footer-four/LinkGroup.svelte?raw";
import footerFooterOneFooterSource from "$lib/components/blocks/efferd-ui/footer/footer-one/footer.svelte?raw";
import footerFooterSixAnimatedcontainerSource from "$lib/components/blocks/efferd-ui/footer/footer-six/AnimatedContainer.svelte?raw";
import footerFooterSixFooterSource from "$lib/components/blocks/efferd-ui/footer/footer-six/footer.svelte?raw";
import footerFooterThreeAnimatedcontainerSource from "$lib/components/blocks/efferd-ui/footer/footer-three/AnimatedContainer.svelte?raw";
import footerFooterThreeFooterSource from "$lib/components/blocks/efferd-ui/footer/footer-three/footer.svelte?raw";
import footerFooterTwoFooterSource from "$lib/components/blocks/efferd-ui/footer/footer-two/footer.svelte?raw";
import githubSource from "$lib/assets/svg/social/github.svelte?raw";
import instagramSource from "$lib/assets/svg/social/instagram.svelte?raw";
import linkedinSource from "$lib/assets/svg/social/linkedin.svelte?raw";
import logoSvgSource from "$lib/assets/svg/logo.svelte?raw";
import playStoreSource from "$lib/assets/svg/brand/play-store.svelte?raw";
import xSource from "$lib/assets/svg/social/x.svelte?raw";
import youtubeSource from "$lib/assets/svg/social/youtube.svelte?raw";

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
		previewHref: "/preview/efferd-ui/footer/footer-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "footer-one",
		codeTree: createBlockCodeTree("footer-one", [
			{
				id: "footer-one",
				path: "src/lib/components/blocks/efferd-ui/footer/footer-one/footer.svelte",
				lang: "svelte",
				code: footerFooterOneFooterSource
			},
			...buttonFiles,
			...logoFiles
		])
	},	{
		id: "footer-two",
		title: "Footer Two",
		description:
			"A Footer Two composition.",
		previewComponent: FooterTwoPreview,
		previewHref: "/preview/efferd-ui/footer/footer-two",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "footer-two",
		codeTree: createBlockCodeTree("footer-two", [
			{
				id: "footer-two",
				path: "src/lib/components/blocks/efferd-ui/footer/footer-two/footer.svelte",
				lang: "svelte",
				code: footerFooterTwoFooterSource
			},
			...buttonFiles,
			...logoFiles
		])
	},	{
		id: "footer-three",
		title: "Footer Three",
		description:
			"A Footer Three composition.",
		previewComponent: FooterThreePreview,
		previewHref: "/preview/efferd-ui/footer/footer-three",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "footer-three",
		codeTree: createBlockCodeTree("footer-three:footer", [
			{
				id: "footer-three:AnimatedContainer",
				path: "src/lib/components/blocks/efferd-ui/footer/footer-three/AnimatedContainer.svelte",
				lang: "svelte",
				code: footerFooterThreeAnimatedcontainerSource
			},
			{
				id: "footer-three:footer",
				path: "src/lib/components/blocks/efferd-ui/footer/footer-three/footer.svelte",
				lang: "svelte",
				code: footerFooterThreeFooterSource
			},
			...logoFiles
		])
	},	{
		id: "footer-four",
		title: "Footer Four",
		description:
			"A Footer Four composition.",
		previewComponent: FooterFourPreview,
		previewHref: "/preview/efferd-ui/footer/footer-four",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "footer-four",
		codeTree: createBlockCodeTree("footer-four:footer", [
			{
				id: "footer-four:LinkGroup",
				path: "src/lib/components/blocks/efferd-ui/footer/footer-four/LinkGroup.svelte",
				lang: "svelte",
				code: footerFooterFourLinkgroupSource
			},
			{
				id: "footer-four:footer",
				path: "src/lib/components/blocks/efferd-ui/footer/footer-four/footer.svelte",
				lang: "svelte",
				code: footerFooterFourFooterSource
			}
		])
	},	{
		id: "footer-five",
		title: "Footer Five",
		description:
			"A Footer Five composition.",
		previewComponent: FooterFivePreview,
		previewHref: "/preview/efferd-ui/footer/footer-five",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "footer-five",
		codeTree: createBlockCodeTree("footer-five", [
			{
				id: "footer-five",
				path: "src/lib/components/blocks/efferd-ui/footer/footer-five/footer.svelte",
				lang: "svelte",
				code: footerFooterFiveFooterSource
			},
			...buttonFiles
		])
	},	{
		id: "footer-six",
		title: "Footer Six",
		description:
			"A Footer Six composition.",
		previewComponent: FooterSixPreview,
		previewHref: "/preview/efferd-ui/footer/footer-six",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "footer-six",
		codeTree: createBlockCodeTree("footer-six:footer", [
			{
				id: "footer-six:AnimatedContainer",
				path: "src/lib/components/blocks/efferd-ui/footer/footer-six/AnimatedContainer.svelte",
				lang: "svelte",
				code: footerFooterSixAnimatedcontainerSource
			},
			{
				id: "footer-six:footer",
				path: "src/lib/components/blocks/efferd-ui/footer/footer-six/footer.svelte",
				lang: "svelte",
				code: footerFooterSixFooterSource
			},
			...buttonFiles,
			...logoFiles
		])
	}
];

export function getFooterBlock(id: string) {
	return footerBlocks.find((block) => block.id === id);
}
