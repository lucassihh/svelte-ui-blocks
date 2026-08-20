// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Preview Imports
import HeaderFivePreview from "$lib/components/ui-blocks/efferd-ui/header/header-five/desktop-nav.svelte";
import HeaderFourPreview from "$lib/components/ui-blocks/efferd-ui/header/header-four/mobile-nav.svelte";
import HeaderOnePreview from "$lib/components/ui-blocks/efferd-ui/header/header-one/mobile-nav.svelte";
import HeaderThreePreview from "$lib/components/ui-blocks/efferd-ui/header/header-three/desktop-nav.svelte";
import HeaderTwoPreview from "$lib/components/ui-blocks/efferd-ui/header/header-two/mobile-nav.svelte";

// Raw
import headerHeaderFiveDesktopNavSource from "$lib/components/ui-blocks/efferd-ui/header/header-five/desktop-nav.svelte?raw";
import headerHeaderFiveHeaderSource from "$lib/components/ui-blocks/efferd-ui/header/header-five/header.svelte?raw";
import headerHeaderFiveLinkItemSource from "$lib/components/ui-blocks/efferd-ui/header/header-five/link-item.svelte?raw";
import headerHeaderFiveMobileNavSource from "$lib/components/ui-blocks/efferd-ui/header/header-five/mobile-nav.svelte?raw";
import headerHeaderFiveNavLinksSource from "$lib/components/ui-blocks/efferd-ui/header/header-five/nav-links.ts?raw";
import headerHeaderFiveTypesSource from "$lib/components/ui-blocks/efferd-ui/header/header-five/types.ts?raw";
import headerHeaderFourHeaderSource from "$lib/components/ui-blocks/efferd-ui/header/header-four/header.svelte?raw";
import headerHeaderFourMobileNavSource from "$lib/components/ui-blocks/efferd-ui/header/header-four/mobile-nav.svelte?raw";
import headerHeaderFourNavLinksSource from "$lib/components/ui-blocks/efferd-ui/header/header-four/nav-links.ts?raw";
import headerHeaderOneHeaderSource from "$lib/components/ui-blocks/efferd-ui/header/header-one/header.svelte?raw";
import headerHeaderOneMobileNavSource from "$lib/components/ui-blocks/efferd-ui/header/header-one/mobile-nav.svelte?raw";
import headerHeaderOneNavLinksSource from "$lib/components/ui-blocks/efferd-ui/header/header-one/nav-links.ts?raw";
import headerHeaderThreeDesktopNavSource from "$lib/components/ui-blocks/efferd-ui/header/header-three/desktop-nav.svelte?raw";
import headerHeaderThreeHeaderSource from "$lib/components/ui-blocks/efferd-ui/header/header-three/header.svelte?raw";
import headerHeaderThreeLinkItemSource from "$lib/components/ui-blocks/efferd-ui/header/header-three/link-item.svelte?raw";
import headerHeaderThreeMobileNavSource from "$lib/components/ui-blocks/efferd-ui/header/header-three/mobile-nav.svelte?raw";
import headerHeaderThreeNavLinksSource from "$lib/components/ui-blocks/efferd-ui/header/header-three/nav-links.ts?raw";
import headerHeaderThreeTypesSource from "$lib/components/ui-blocks/efferd-ui/header/header-three/types.ts?raw";
import headerHeaderTwoHeaderSource from "$lib/components/ui-blocks/efferd-ui/header/header-two/header.svelte?raw";
import headerHeaderTwoMobileNavSource from "$lib/components/ui-blocks/efferd-ui/header/header-two/mobile-nav.svelte?raw";
import headerHeaderTwoNavLinksSource from "$lib/components/ui-blocks/efferd-ui/header/header-two/nav-links.ts?raw";
import logoSvgSource from "$lib/assets/svg/logo.svelte?raw";
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

export const headerBlocks: BlockShowcaseItem[] = [
	{
		id: "header-one",
		title: "Header One",
		description:
			"A Header One composition.",
		previewComponent: HeaderOnePreview,
		previewHref: "/preview/efferd-ui/header/header-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "header-one",
		codeTree: createBlockCodeTree("header-one:header", [
			{
				id: "header-one:header",
				path: "src/lib/components/ui-blocks/efferd-ui/header/header-one/header.svelte",
				lang: "svelte",
				code: headerHeaderOneHeaderSource
			},
			{
				id: "header-one:mobile-nav",
				path: "src/lib/components/ui-blocks/efferd-ui/header/header-one/mobile-nav.svelte",
				lang: "svelte",
				code: headerHeaderOneMobileNavSource
			},
			{
				id: "header-one:nav-links",
				path: "src/lib/components/ui-blocks/efferd-ui/header/header-one/nav-links.ts",
				lang: "typescript",
				code: headerHeaderOneNavLinksSource
			},
			...buttonFiles,
			...logoFiles,
			...portalFiles,
			...scrollHookFiles
		])
	},	{
		id: "header-two",
		title: "Header Two",
		description:
			"A Header Two composition.",
		previewComponent: HeaderTwoPreview,
		previewHref: "/preview/efferd-ui/header/header-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "header-two",
		codeTree: createBlockCodeTree("header-two:header", [
			{
				id: "header-two:header",
				path: "src/lib/components/ui-blocks/efferd-ui/header/header-two/header.svelte",
				lang: "svelte",
				code: headerHeaderTwoHeaderSource
			},
			{
				id: "header-two:mobile-nav",
				path: "src/lib/components/ui-blocks/efferd-ui/header/header-two/mobile-nav.svelte",
				lang: "svelte",
				code: headerHeaderTwoMobileNavSource
			},
			{
				id: "header-two:nav-links",
				path: "src/lib/components/ui-blocks/efferd-ui/header/header-two/nav-links.ts",
				lang: "typescript",
				code: headerHeaderTwoNavLinksSource
			},
			...buttonFiles,
			...logoFiles,
			...portalFiles,
			...scrollHookFiles
		])
	},	{
		id: "header-three",
		title: "Header Three",
		description:
			"A Header Three composition.",
		previewComponent: HeaderThreePreview,
		previewHref: "/preview/efferd-ui/header/header-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "header-three",
		codeTree: createBlockCodeTree("header-three:header", [
			{
				id: "header-three:desktop-nav",
				path: "src/lib/components/ui-blocks/efferd-ui/header/header-three/desktop-nav.svelte",
				lang: "svelte",
				code: headerHeaderThreeDesktopNavSource
			},
			{
				id: "header-three:header",
				path: "src/lib/components/ui-blocks/efferd-ui/header/header-three/header.svelte",
				lang: "svelte",
				code: headerHeaderThreeHeaderSource
			},
			{
				id: "header-three:link-item",
				path: "src/lib/components/ui-blocks/efferd-ui/header/header-three/link-item.svelte",
				lang: "svelte",
				code: headerHeaderThreeLinkItemSource
			},
			{
				id: "header-three:mobile-nav",
				path: "src/lib/components/ui-blocks/efferd-ui/header/header-three/mobile-nav.svelte",
				lang: "svelte",
				code: headerHeaderThreeMobileNavSource
			},
			{
				id: "header-three:nav-links",
				path: "src/lib/components/ui-blocks/efferd-ui/header/header-three/nav-links.ts",
				lang: "typescript",
				code: headerHeaderThreeNavLinksSource
			},
			{
				id: "header-three:types",
				path: "src/lib/components/ui-blocks/efferd-ui/header/header-three/types.ts",
				lang: "typescript",
				code: headerHeaderThreeTypesSource
			},
			...buttonFiles,
			...logoFiles,
			...navigationMenuFiles,
			...portalFiles,
			...scrollHookFiles
		])
	},	{
		id: "header-four",
		title: "Header Four",
		description:
			"A Header Four composition.",
		previewComponent: HeaderFourPreview,
		previewHref: "/preview/efferd-ui/header/header-four",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "header-four",
		codeTree: createBlockCodeTree("header-four:header", [
			{
				id: "header-four:header",
				path: "src/lib/components/ui-blocks/efferd-ui/header/header-four/header.svelte",
				lang: "svelte",
				code: headerHeaderFourHeaderSource
			},
			{
				id: "header-four:mobile-nav",
				path: "src/lib/components/ui-blocks/efferd-ui/header/header-four/mobile-nav.svelte",
				lang: "svelte",
				code: headerHeaderFourMobileNavSource
			},
			{
				id: "header-four:nav-links",
				path: "src/lib/components/ui-blocks/efferd-ui/header/header-four/nav-links.ts",
				lang: "typescript",
				code: headerHeaderFourNavLinksSource
			},
			...buttonFiles,
			...logoFiles,
			...portalFiles,
			...scrollHookFiles
		])
	},	{
		id: "header-five",
		title: "Header Five",
		description:
			"A Header Five composition.",
		previewComponent: HeaderFivePreview,
		previewHref: "/preview/efferd-ui/header/header-five",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "header-five",
		codeTree: createBlockCodeTree("header-five:header", [
			{
				id: "header-five:desktop-nav",
				path: "src/lib/components/ui-blocks/efferd-ui/header/header-five/desktop-nav.svelte",
				lang: "svelte",
				code: headerHeaderFiveDesktopNavSource
			},
			{
				id: "header-five:header",
				path: "src/lib/components/ui-blocks/efferd-ui/header/header-five/header.svelte",
				lang: "svelte",
				code: headerHeaderFiveHeaderSource
			},
			{
				id: "header-five:link-item",
				path: "src/lib/components/ui-blocks/efferd-ui/header/header-five/link-item.svelte",
				lang: "svelte",
				code: headerHeaderFiveLinkItemSource
			},
			{
				id: "header-five:mobile-nav",
				path: "src/lib/components/ui-blocks/efferd-ui/header/header-five/mobile-nav.svelte",
				lang: "svelte",
				code: headerHeaderFiveMobileNavSource
			},
			{
				id: "header-five:nav-links",
				path: "src/lib/components/ui-blocks/efferd-ui/header/header-five/nav-links.ts",
				lang: "typescript",
				code: headerHeaderFiveNavLinksSource
			},
			{
				id: "header-five:types",
				path: "src/lib/components/ui-blocks/efferd-ui/header/header-five/types.ts",
				lang: "typescript",
				code: headerHeaderFiveTypesSource
			},
			...buttonFiles,
			...logoFiles,
			...navigationMenuFiles,
			...portalFiles,
			...scrollHookFiles
		])
	}
];

export function getHeaderBlock(id: string) {
	return headerBlocks.find((block) => block.id === id);
}
