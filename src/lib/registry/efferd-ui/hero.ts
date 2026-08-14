import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-three";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-three";
import HeroOnePreview from "$lib/components/efferd-ui/hero/hero-one/preview.svelte";
import HeroThreePreview from "$lib/components/efferd-ui/hero/hero-three/preview.svelte";
import HeroTwoPreview from "$lib/components/efferd-ui/hero/hero-two/preview.svelte";

import decorIconIndexSource from "$lib/components/ui/decor-icon/index.ts?raw";
import decorIconSource from "$lib/components/ui/decor-icon/decor-icon.svelte?raw";
import dividerIndexSource from "$lib/components/ui/full-width-divider/index.ts?raw";
import dividerSource from "$lib/components/ui/full-width-divider/full-width-divider.svelte?raw";
import headerHeaderOneHeaderSource from "$lib/components/efferd-ui/header/header-one/header.svelte?raw";
import headerHeaderOneMobileNavSource from "$lib/components/efferd-ui/header/header-one/mobile-nav.svelte?raw";
import headerHeaderOneNavLinksSource from "$lib/components/efferd-ui/header/header-one/nav-links.ts?raw";
import headerHeaderThreeDesktopNavSource from "$lib/components/efferd-ui/header/header-three/desktop-nav.svelte?raw";
import headerHeaderThreeHeaderSource from "$lib/components/efferd-ui/header/header-three/header.svelte?raw";
import headerHeaderThreeLinkItemSource from "$lib/components/efferd-ui/header/header-three/link-item.svelte?raw";
import headerHeaderThreeMobileNavSource from "$lib/components/efferd-ui/header/header-three/mobile-nav.svelte?raw";
import headerHeaderThreeNavLinksSource from "$lib/components/efferd-ui/header/header-three/nav-links.ts?raw";
import headerHeaderThreeTypesSource from "$lib/components/efferd-ui/header/header-three/types.ts?raw";
import headerHeaderTwoHeaderSource from "$lib/components/efferd-ui/header/header-two/header.svelte?raw";
import headerHeaderTwoMobileNavSource from "$lib/components/efferd-ui/header/header-two/mobile-nav.svelte?raw";
import headerHeaderTwoNavLinksSource from "$lib/components/efferd-ui/header/header-two/nav-links.ts?raw";
import heroHeroOneHeroSource from "$lib/components/efferd-ui/hero/hero-one/hero.svelte?raw";
import heroHeroOneLogoSectionSource from "$lib/components/efferd-ui/hero/hero-one/logo-section.svelte?raw";
import heroHeroOnePreviewSource from "$lib/components/efferd-ui/hero/hero-one/preview.svelte?raw";
import heroHeroThreeHeroSource from "$lib/components/efferd-ui/hero/hero-three/hero.svelte?raw";
import heroHeroThreeLogoSectionSource from "$lib/components/efferd-ui/hero/hero-three/logo-section.svelte?raw";
import heroHeroThreePreviewSource from "$lib/components/efferd-ui/hero/hero-three/preview.svelte?raw";
import heroHeroTwoHeroSource from "$lib/components/efferd-ui/hero/hero-two/hero.svelte?raw";
import heroHeroTwoLogoSectionSource from "$lib/components/efferd-ui/hero/hero-two/logo-section.svelte?raw";
import heroHeroTwoPreviewSource from "$lib/components/efferd-ui/hero/hero-two/preview.svelte?raw";
import logoCloudLogoCloudFiveLogoCloudSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-five/logo-cloud.svelte?raw";
import logoCloudLogoCloudThreeLogoCloudSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-three/logo-cloud.svelte?raw";
import logoCloudLogoCloudTwoLogoCardSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-two/logo-card.svelte?raw";
import logoCloudLogoCloudTwoLogoCloudSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-two/logo-cloud.svelte?raw";
import logoSvgSource from "$lib/assets/svg/logo.svelte?raw";
import marqueeIndexSource from "$lib/components/magic-ui/marquee/index.ts?raw";
import marqueeSource from "$lib/components/magic-ui/marquee/marquee.svelte?raw";
import navigationMenuContentSource from "$lib/components/ui/navigation-menu/navigation-menu-content.svelte?raw";
import navigationMenuIndexSource from "$lib/components/ui/navigation-menu/index.ts?raw";
import navigationMenuIndicatorSource from "$lib/components/ui/navigation-menu/navigation-menu-indicator.svelte?raw";
import navigationMenuItemSource from "$lib/components/ui/navigation-menu/navigation-menu-item.svelte?raw";
import navigationMenuLinkSource from "$lib/components/ui/navigation-menu/navigation-menu-link.svelte?raw";
import navigationMenuListSource from "$lib/components/ui/navigation-menu/navigation-menu-list.svelte?raw";
import navigationMenuRootSource from "$lib/components/ui/navigation-menu/navigation-menu.svelte?raw";
import navigationMenuTriggerSource from "$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte?raw";
import navigationMenuViewportSource from "$lib/components/ui/navigation-menu/navigation-menu-viewport.svelte?raw";
import portalBackdropSource from "$lib/components/ui/portal/portal-backdrop.svelte?raw";
import portalIndexSource from "$lib/components/ui/portal/index.ts?raw";
import portalSource from "$lib/components/ui/portal/portal.svelte?raw";
import useScrollHookSource from "$lib/hooks/use-scroll.svelte.ts?raw";

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
const logoFiles = [
	{
		id: "shared:logo-svg",
		path: "svgs/logo.svelte",
		lang: "svelte" as const,
		code: logoSvgSource
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
const navigationMenuFiles = [
	{
		id: "shared:navigation-menu-index",
		path: "components/ui/navigation-menu/index.ts",
		lang: "typescript" as const,
		code: navigationMenuIndexSource
	},
	{
		id: "shared:navigation-menu-content",
		path: "components/ui/navigation-menu/navigation-menu-content.svelte",
		lang: "svelte" as const,
		code: navigationMenuContentSource
	},
	{
		id: "shared:navigation-menu-indicator",
		path: "components/ui/navigation-menu/navigation-menu-indicator.svelte",
		lang: "svelte" as const,
		code: navigationMenuIndicatorSource
	},
	{
		id: "shared:navigation-menu-item",
		path: "components/ui/navigation-menu/navigation-menu-item.svelte",
		lang: "svelte" as const,
		code: navigationMenuItemSource
	},
	{
		id: "shared:navigation-menu-link",
		path: "components/ui/navigation-menu/navigation-menu-link.svelte",
		lang: "svelte" as const,
		code: navigationMenuLinkSource
	},
	{
		id: "shared:navigation-menu-list",
		path: "components/ui/navigation-menu/navigation-menu-list.svelte",
		lang: "svelte" as const,
		code: navigationMenuListSource
	},
	{
		id: "shared:navigation-menu-trigger",
		path: "components/ui/navigation-menu/navigation-menu-trigger.svelte",
		lang: "svelte" as const,
		code: navigationMenuTriggerSource
	},
	{
		id: "shared:navigation-menu-viewport",
		path: "components/ui/navigation-menu/navigation-menu-viewport.svelte",
		lang: "svelte" as const,
		code: navigationMenuViewportSource
	},
	{
		id: "shared:navigation-menu-root",
		path: "components/ui/navigation-menu/navigation-menu.svelte",
		lang: "svelte" as const,
		code: navigationMenuRootSource
	}
];
const portalFiles = [
	{
		id: "shared:portal-index",
		path: "components/ui/portal/index.ts",
		lang: "typescript" as const,
		code: portalIndexSource
	},
	{
		id: "shared:portal-portal-backdrop",
		path: "components/ui/portal/portal-backdrop.svelte",
		lang: "svelte" as const,
		code: portalBackdropSource
	},
	{
		id: "shared:portal",
		path: "components/ui/portal/portal.svelte",
		lang: "svelte" as const,
		code: portalSource
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
const headerHeaderOneFiles = [
	{
		id: "hero-one:header",
		path: "components/efferd/header/header-one/header.svelte",
		lang: "svelte" as const,
		code: headerHeaderOneHeaderSource
	},
	{
		id: "hero-one:mobile-nav",
		path: "components/efferd/header/header-one/mobile-nav.svelte",
		lang: "svelte" as const,
		code: headerHeaderOneMobileNavSource
	},
	{
		id: "hero-one:nav-links",
		path: "components/efferd/header/header-one/nav-links.ts",
		lang: "typescript" as const,
		code: headerHeaderOneNavLinksSource
	}
];
const headerHeaderThreeFiles = [
	{
		id: "hero-three:desktop-nav",
		path: "components/efferd/header/header-three/desktop-nav.svelte",
		lang: "svelte" as const,
		code: headerHeaderThreeDesktopNavSource
	},
	{
		id: "hero-three:header",
		path: "components/efferd/header/header-three/header.svelte",
		lang: "svelte" as const,
		code: headerHeaderThreeHeaderSource
	},
	{
		id: "hero-three:link-item",
		path: "components/efferd/header/header-three/link-item.svelte",
		lang: "svelte" as const,
		code: headerHeaderThreeLinkItemSource
	},
	{
		id: "hero-three:mobile-nav",
		path: "components/efferd/header/header-three/mobile-nav.svelte",
		lang: "svelte" as const,
		code: headerHeaderThreeMobileNavSource
	},
	{
		id: "hero-three:nav-links",
		path: "components/efferd/header/header-three/nav-links.ts",
		lang: "typescript" as const,
		code: headerHeaderThreeNavLinksSource
	},
	{
		id: "hero-three:types",
		path: "components/efferd/header/header-three/types.ts",
		lang: "typescript" as const,
		code: headerHeaderThreeTypesSource
	}
];
const headerHeaderTwoFiles = [
	{
		id: "hero-two:header",
		path: "components/efferd/header/header-two/header.svelte",
		lang: "svelte" as const,
		code: headerHeaderTwoHeaderSource
	},
	{
		id: "hero-two:mobile-nav",
		path: "components/efferd/header/header-two/mobile-nav.svelte",
		lang: "svelte" as const,
		code: headerHeaderTwoMobileNavSource
	},
	{
		id: "hero-two:nav-links",
		path: "components/efferd/header/header-two/nav-links.ts",
		lang: "typescript" as const,
		code: headerHeaderTwoNavLinksSource
	}
];
const logoCloudLogoCloudFiveFiles = [
	{
		id: "hero-three:logo-cloud",
		path: "components/efferd/logo-cloud/logo-cloud-five/logo-cloud.svelte",
		lang: "svelte" as const,
		code: logoCloudLogoCloudFiveLogoCloudSource
	}
];
const logoCloudLogoCloudThreeFiles = [
	{
		id: "hero-one:logo-cloud",
		path: "components/efferd/logo-cloud/logo-cloud-three/logo-cloud.svelte",
		lang: "svelte" as const,
		code: logoCloudLogoCloudThreeLogoCloudSource
	}
];
const logoCloudLogoCloudTwoFiles = [
	{
		id: "hero-two:logo-card",
		path: "components/efferd/logo-cloud/logo-cloud-two/logo-card.svelte",
		lang: "svelte" as const,
		code: logoCloudLogoCloudTwoLogoCardSource
	},
	{
		id: "hero-two:logo-cloud",
		path: "components/efferd/logo-cloud/logo-cloud-two/logo-cloud.svelte",
		lang: "svelte" as const,
		code: logoCloudLogoCloudTwoLogoCloudSource
	}
];

export const heroBlocks: BlockShowcaseItem[] = [
	{
		id: "hero-one",
		title: "Hero One",
		description:
			"A full hero composition with sticky header, editorial spotlight, and a marquee trust band.",
		previewComponent: HeroOnePreview,
		previewHref: "/preview/efferd-ui/hero/hero-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "hero-one",
		codeTree: createBlockCodeTree("hero-one:preview", [
			{
				id: "hero-one:hero",
				path: "components/efferd/hero/hero-one/hero.svelte",
				lang: "svelte",
				code: heroHeroOneHeroSource
			},
			{
				id: "hero-one:logo-section",
				path: "components/efferd/hero/hero-one/logo-section.svelte",
				lang: "svelte",
				code: heroHeroOneLogoSectionSource
			},
			{
				id: "hero-one:preview",
				path: "components/efferd/hero/hero-one/preview.svelte",
				lang: "svelte",
				code: heroHeroOnePreviewSource
			},
			...buttonFiles,
			...headerHeaderOneFiles,
			...logoCloudLogoCloudThreeFiles,
			...logoFiles,
			...marqueeFiles,
			...portalFiles,
			...scrollHookFiles
		])
	},
	{
		id: "hero-three",
		title: "Hero Three",
		description:
			"A modern hero layout with mega-nav header, device mockup spotlight, and compact logo grid.",
		previewComponent: HeroThreePreview,
		previewHref: "/preview/efferd-ui/hero/hero-three",
		previewMode: "iframe",
		previewHeight: 840,
		installId: "hero-three",
		codeTree: createBlockCodeTree("hero-three:preview", [
			{
				id: "hero-three:hero",
				path: "components/efferd/hero/hero-three/hero.svelte",
				lang: "svelte",
				code: heroHeroThreeHeroSource
			},
			{
				id: "hero-three:logo-section",
				path: "components/efferd/hero/hero-three/logo-section.svelte",
				lang: "svelte",
				code: heroHeroThreeLogoSectionSource
			},
			{
				id: "hero-three:preview",
				path: "components/efferd/hero/hero-three/preview.svelte",
				lang: "svelte",
				code: heroHeroThreePreviewSource
			},
			...buttonFiles,
			...headerHeaderThreeFiles,
			...logoCloudLogoCloudFiveFiles,
			...logoFiles,
			...navigationMenuFiles,
			...portalFiles,
			...scrollHookFiles
		])
	},
	{
		id: "hero-two",
		title: "Hero Two",
		description:
			"A framed product hero with a floating screen, structured header, and bordered logo section.",
		previewComponent: HeroTwoPreview,
		previewHref: "/preview/efferd-ui/hero/hero-two",
		previewMode: "iframe",
		previewHeight: 860,
		installId: "hero-two",
		codeTree: createBlockCodeTree("hero-two:preview", [
			{
				id: "hero-two:hero",
				path: "components/efferd/hero/hero-two/hero.svelte",
				lang: "svelte",
				code: heroHeroTwoHeroSource
			},
			{
				id: "hero-two:logo-section",
				path: "components/efferd/hero/hero-two/logo-section.svelte",
				lang: "svelte",
				code: heroHeroTwoLogoSectionSource
			},
			{
				id: "hero-two:preview",
				path: "components/efferd/hero/hero-two/preview.svelte",
				lang: "svelte",
				code: heroHeroTwoPreviewSource
			},
			...buttonFiles,
			...decorIconFiles,
			...dividerFiles,
			...headerHeaderTwoFiles,
			...logoCloudLogoCloudTwoFiles,
			...logoFiles,
			...portalFiles,
			...scrollHookFiles
		])
	}
];

export function getHeroBlock(id: string) {
	return heroBlocks.find((block) => block.id === id);
}
