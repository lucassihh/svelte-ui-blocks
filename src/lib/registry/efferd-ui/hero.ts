import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-three";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-three";
import HeroOnePreview from "$lib/components/efferd-ui/hero/hero-one/hero.svelte";
import HeroThreePreview from "$lib/components/efferd-ui/hero/hero-three/hero.svelte";
import HeroTwoPreview from "$lib/components/efferd-ui/hero/hero-two/hero.svelte";

import decorIconIndexSource from "$lib/components/ui/decor-icon/index.ts?raw";
import decorIconSource from "$lib/components/ui/decor-icon/decor-icon.svelte?raw";
import dividerIndexSource from "$lib/components/ui/full-width-divider/index.ts?raw";
import dividerSource from "$lib/components/ui/full-width-divider/full-width-divider.svelte?raw";
import heroHeroOneHeroSource from "$lib/components/efferd-ui/hero/hero-one/hero.svelte?raw";
import heroHeroOneLogoSectionSource from "$lib/components/efferd-ui/hero/hero-one/logo-section.svelte?raw";
import heroHeroThreeHeroSource from "$lib/components/efferd-ui/hero/hero-three/hero.svelte?raw";
import heroHeroThreeLogoSectionSource from "$lib/components/efferd-ui/hero/hero-three/logo-section.svelte?raw";
import heroHeroTwoHeroSource from "$lib/components/efferd-ui/hero/hero-two/hero.svelte?raw";
import heroHeroTwoLogoSectionSource from "$lib/components/efferd-ui/hero/hero-two/logo-section.svelte?raw";
import logoCloudLogoCloudFiveLogoCloudSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-five/logo-cloud.svelte?raw";
import logoCloudLogoCloudThreeLogoCloudSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-three/logo-cloud.svelte?raw";
import logoCloudLogoCloudTwoLogoCardSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-two/logo-card.svelte?raw";
import logoCloudLogoCloudTwoLogoCloudSource from "$lib/components/efferd-ui/logo-cloud/logo-cloud-two/logo-cloud.svelte?raw";
import marqueeIndexSource from "$lib/components/magic-ui/marquee/index.ts?raw";
import marqueeSource from "$lib/components/magic-ui/marquee/marquee.svelte?raw";

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
			...buttonFiles,
			...logoCloudLogoCloudThreeFiles,
			...marqueeFiles
		])
	},	{
		id: "hero-two",
		title: "Hero Two",
		description:
			"A full hero composition with sticky header, editorial spotlight, and a marquee trust band.",
		previewComponent: HeroTwoPreview,
		previewHref: "/preview/efferd-ui/hero/hero-two",
		previewMode: "iframe",
		previewHeight: 820,
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
			...buttonFiles,
			...decorIconFiles,
			...dividerFiles,
			...logoCloudLogoCloudTwoFiles
		])
	},	{
		id: "hero-three",
		title: "Hero Three",
		description:
			"A full hero composition with sticky header, editorial spotlight, and a marquee trust band.",
		previewComponent: HeroThreePreview,
		previewHref: "/preview/efferd-ui/hero/hero-three",
		previewMode: "iframe",
		previewHeight: 820,
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
			...buttonFiles,
			...logoCloudLogoCloudFiveFiles
		])
	}
];

export function getHeroBlock(id: string) {
	return heroBlocks.find((block) => block.id === id);
}
