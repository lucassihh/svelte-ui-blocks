// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import HeaderFivePreview from "$lib/components/blocks/efferd/header/header-five/desktop-nav.svelte";
import HeaderFourPreview from "$lib/components/blocks/efferd/header/header-four/mobile-nav.svelte";
import HeaderOnePreview from "$lib/components/blocks/efferd/header/header-one/mobile-nav.svelte";
import HeaderThreePreview from "$lib/components/blocks/efferd/header/header-three/desktop-nav.svelte";
import HeaderTwoPreview from "$lib/components/blocks/efferd/header/header-two/mobile-nav.svelte";

// Raw
import faqFaqOneFaqSource from "$lib/components/blocks/efferd/faq/faq-one/faq.svelte?raw";
import headerHeaderFiveDesktopNavSource from "$lib/components/blocks/efferd/header/header-five/desktop-nav.svelte?raw";
import headerHeaderFiveHeaderSource from "$lib/components/blocks/efferd/header/header-five/header.svelte?raw";
import headerHeaderFiveMobileNavSource from "$lib/components/blocks/efferd/header/header-five/mobile-nav.svelte?raw";
import headerHeaderFiveNavLinksSource from "$lib/components/blocks/efferd/header/header-five/nav-links.ts?raw";
import headerHeaderFourHeaderSource from "$lib/components/blocks/efferd/header/header-four/header.svelte?raw";
import headerHeaderFourMobileNavSource from "$lib/components/blocks/efferd/header/header-four/mobile-nav.svelte?raw";
import headerHeaderFourNavLinksSource from "$lib/components/blocks/efferd/header/header-four/nav-links.ts?raw";
import headerHeaderOneHeaderSource from "$lib/components/blocks/efferd/header/header-one/header.svelte?raw";
import headerHeaderOneMobileNavSource from "$lib/components/blocks/efferd/header/header-one/mobile-nav.svelte?raw";
import headerHeaderOneNavLinksSource from "$lib/components/blocks/efferd/header/header-one/nav-links.ts?raw";
import headerHeaderThreeDesktopNavSource from "$lib/components/blocks/efferd/header/header-three/desktop-nav.svelte?raw";
import headerHeaderThreeHeaderSource from "$lib/components/blocks/efferd/header/header-three/header.svelte?raw";
import headerHeaderThreeMobileNavSource from "$lib/components/blocks/efferd/header/header-three/mobile-nav.svelte?raw";
import headerHeaderTwoHeaderSource from "$lib/components/blocks/efferd/header/header-two/header.svelte?raw";
import headerHeaderTwoMobileNavSource from "$lib/components/blocks/efferd/header/header-two/mobile-nav.svelte?raw";
import headerHeaderTwoNavLinksSource from "$lib/components/blocks/efferd/header/header-two/nav-links.ts?raw";
import heroHeroOneHeroSource from "$lib/components/blocks/efferd/hero/hero-one/hero.svelte?raw";
import logoSvgSource from "$lib/assets/svg/logo.svelte?raw";
import useScrollHookSource from "$lib/hooks/use-scroll.svelte.ts?raw";

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
const scrollHookFiles = [
	{
		id: "shared:use-scroll",
		path: "hooks/use-scroll.svelte.ts",
		lang: "typescript" as const,
		code: useScrollHookSource
	}
];
const faqFaqOneFiles = [
	{
		id: "header-one:faq",
		path: "src/lib/components/blocks/efferd/faq/faq-one/faq.svelte",
		lang: "svelte" as const,
		code: faqFaqOneFaqSource
	},
	{
		id: "header-two:faq",
		path: "src/lib/components/blocks/efferd/faq/faq-one/faq.svelte",
		lang: "svelte" as const,
		code: faqFaqOneFaqSource
	},
	{
		id: "header-three:faq",
		path: "src/lib/components/blocks/efferd/faq/faq-one/faq.svelte",
		lang: "svelte" as const,
		code: faqFaqOneFaqSource
	},
	{
		id: "header-four:faq",
		path: "src/lib/components/blocks/efferd/faq/faq-one/faq.svelte",
		lang: "svelte" as const,
		code: faqFaqOneFaqSource
	},
	{
		id: "header-five:faq",
		path: "src/lib/components/blocks/efferd/faq/faq-one/faq.svelte",
		lang: "svelte" as const,
		code: faqFaqOneFaqSource
	}
];
const heroHeroOneFiles = [
	{
		id: "header-one:hero",
		path: "src/lib/components/blocks/efferd/hero/hero-one/hero.svelte",
		lang: "svelte" as const,
		code: heroHeroOneHeroSource
	},
	{
		id: "header-two:hero",
		path: "src/lib/components/blocks/efferd/hero/hero-one/hero.svelte",
		lang: "svelte" as const,
		code: heroHeroOneHeroSource
	},
	{
		id: "header-three:hero",
		path: "src/lib/components/blocks/efferd/hero/hero-one/hero.svelte",
		lang: "svelte" as const,
		code: heroHeroOneHeroSource
	},
	{
		id: "header-four:hero",
		path: "src/lib/components/blocks/efferd/hero/hero-one/hero.svelte",
		lang: "svelte" as const,
		code: heroHeroOneHeroSource
	},
	{
		id: "header-five:hero",
		path: "src/lib/components/blocks/efferd/hero/hero-one/hero.svelte",
		lang: "svelte" as const,
		code: heroHeroOneHeroSource
	}
];

export const headerBlocks: BlockShowcaseItem[] = [
	{
		id: "header-one",
		title: "Header One",
		description:
			"Header component",
		previewComponent: HeaderOnePreview,
		previewHref: "/preview/efferd/header/header-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "header-one",
		codeTree: createBlockCodeTree("header-one:header", [
			{
				id: "header-one:header",
				path: "src/lib/components/blocks/efferd/header/header-one/header.svelte",
				lang: "svelte",
				code: headerHeaderOneHeaderSource
			},
			{
				id: "header-one:mobile-nav",
				path: "src/lib/components/blocks/efferd/header/header-one/mobile-nav.svelte",
				lang: "svelte",
				code: headerHeaderOneMobileNavSource
			},
			{
				id: "header-one:nav-links",
				path: "src/lib/components/blocks/efferd/header/header-one/nav-links.ts",
				lang: "typescript",
				code: headerHeaderOneNavLinksSource
			},
			...buttonFiles,
			...faqFaqOneFiles,
			...heroHeroOneFiles,
			...logoFiles,
			...scrollHookFiles
		])
	},	{
		id: "header-two",
		title: "Header Two",
		description:
			"Header component",
		previewComponent: HeaderTwoPreview,
		previewHref: "/preview/efferd/header/header-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "header-two",
		codeTree: createBlockCodeTree("header-two:header", [
			{
				id: "header-two:header",
				path: "src/lib/components/blocks/efferd/header/header-two/header.svelte",
				lang: "svelte",
				code: headerHeaderTwoHeaderSource
			},
			{
				id: "header-two:mobile-nav",
				path: "src/lib/components/blocks/efferd/header/header-two/mobile-nav.svelte",
				lang: "svelte",
				code: headerHeaderTwoMobileNavSource
			},
			{
				id: "header-two:nav-links",
				path: "src/lib/components/blocks/efferd/header/header-two/nav-links.ts",
				lang: "typescript",
				code: headerHeaderTwoNavLinksSource
			},
			...buttonFiles,
			...faqFaqOneFiles,
			...heroHeroOneFiles,
			...logoFiles,
			...scrollHookFiles
		])
	},	{
		id: "header-three",
		title: "Header Three",
		description:
			"Header component",
		previewComponent: HeaderThreePreview,
		previewHref: "/preview/efferd/header/header-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "header-three",
		codeTree: createBlockCodeTree("header-three:header", [
			{
				id: "header-three:desktop-nav",
				path: "src/lib/components/blocks/efferd/header/header-three/desktop-nav.svelte",
				lang: "svelte",
				code: headerHeaderThreeDesktopNavSource
			},
			{
				id: "header-three:header",
				path: "src/lib/components/blocks/efferd/header/header-three/header.svelte",
				lang: "svelte",
				code: headerHeaderThreeHeaderSource
			},
			{
				id: "header-three:mobile-nav",
				path: "src/lib/components/blocks/efferd/header/header-three/mobile-nav.svelte",
				lang: "svelte",
				code: headerHeaderThreeMobileNavSource
			},
			...buttonFiles,
			...faqFaqOneFiles,
			...heroHeroOneFiles,
			...logoFiles,
			...scrollHookFiles
		])
	},	{
		id: "header-four",
		title: "Header Four",
		description:
			"Header component",
		previewComponent: HeaderFourPreview,
		previewHref: "/preview/efferd/header/header-four",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "header-four",
		codeTree: createBlockCodeTree("header-four:header", [
			{
				id: "header-four:header",
				path: "src/lib/components/blocks/efferd/header/header-four/header.svelte",
				lang: "svelte",
				code: headerHeaderFourHeaderSource
			},
			{
				id: "header-four:mobile-nav",
				path: "src/lib/components/blocks/efferd/header/header-four/mobile-nav.svelte",
				lang: "svelte",
				code: headerHeaderFourMobileNavSource
			},
			{
				id: "header-four:nav-links",
				path: "src/lib/components/blocks/efferd/header/header-four/nav-links.ts",
				lang: "typescript",
				code: headerHeaderFourNavLinksSource
			},
			...buttonFiles,
			...faqFaqOneFiles,
			...heroHeroOneFiles,
			...logoFiles,
			...scrollHookFiles
		])
	},	{
		id: "header-five",
		title: "Header Five",
		description:
			"Header component",
		previewComponent: HeaderFivePreview,
		previewHref: "/preview/efferd/header/header-five",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "header-five",
		codeTree: createBlockCodeTree("header-five:header", [
			{
				id: "header-five:desktop-nav",
				path: "src/lib/components/blocks/efferd/header/header-five/desktop-nav.svelte",
				lang: "svelte",
				code: headerHeaderFiveDesktopNavSource
			},
			{
				id: "header-five:header",
				path: "src/lib/components/blocks/efferd/header/header-five/header.svelte",
				lang: "svelte",
				code: headerHeaderFiveHeaderSource
			},
			{
				id: "header-five:mobile-nav",
				path: "src/lib/components/blocks/efferd/header/header-five/mobile-nav.svelte",
				lang: "svelte",
				code: headerHeaderFiveMobileNavSource
			},
			{
				id: "header-five:nav-links",
				path: "src/lib/components/blocks/efferd/header/header-five/nav-links.ts",
				lang: "typescript",
				code: headerHeaderFiveNavLinksSource
			},
			...buttonFiles,
			...faqFaqOneFiles,
			...heroHeroOneFiles,
			...logoFiles,
			...scrollHookFiles
		])
	}
];

export function getHeaderBlock(id: string) {
	return headerBlocks.find((block) => block.id === id);
}
