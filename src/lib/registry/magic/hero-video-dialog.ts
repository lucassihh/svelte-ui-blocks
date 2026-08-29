// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import HeroVideoDialogOnePreview from "$lib/components/blocks/magic/hero-video-dialog/hero-video-dialog-one/hero-video-top-in-bottom-out.svelte";
import HeroVideoDialogTwoPreview from "$lib/components/blocks/magic/hero-video-dialog/hero-video-dialog-two/preview.svelte";

// Raw
import heroVideoDialogHeroVideoDialogOneHeroVideoTopInBottomOutSource from "$lib/components/blocks/magic/hero-video-dialog/hero-video-dialog-one/hero-video-top-in-bottom-out.svelte?raw";
import heroVideoDialogHeroVideoDialogTwoPreviewSource from "$lib/components/blocks/magic/hero-video-dialog/hero-video-dialog-two/preview.svelte?raw";
import heroVideoDialogIndexSource from "$lib/components/ui/magic-ui/hero-video-dialog/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const heroVideoDialogBlocks: BlockShowcaseItem[] = [
	{
		id: "hero-video-dialog-one",
		title: "Hero Video Dialog One",
		description:
			"A full hero composition with sticky header, editorial spotlight, and a marquee trust band.",
		previewComponent: HeroVideoDialogOnePreview,
		previewHref: "/preview/magic/hero-video-dialog/hero-video-dialog-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "hero-video-dialog-one",
		codeTree: createBlockCodeTree("hero-video-dialog-one", [
			{
				id: "hero-video-dialog-one",
				path: "src/lib/components/blocks/magic/hero-video-dialog/hero-video-dialog-one/hero-video-top-in-bottom-out.svelte",
				lang: "svelte",
				code: heroVideoDialogHeroVideoDialogOneHeroVideoTopInBottomOutSource
			}
		])
	},	{
		id: "hero-video-dialog-two",
		title: "Hero Video Dialog Two",
		description:
			"A full hero composition with sticky header, editorial spotlight, and a marquee trust band.",
		previewComponent: HeroVideoDialogTwoPreview,
		previewHref: "/preview/magic/hero-video-dialog/hero-video-dialog-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "hero-video-dialog-two",
		codeTree: createBlockCodeTree("hero-video-dialog-two", [
			{
				id: "hero-video-dialog-two",
				path: "src/lib/components/blocks/magic/hero-video-dialog/hero-video-dialog-two/preview.svelte",
				lang: "svelte",
				code: heroVideoDialogHeroVideoDialogTwoPreviewSource
			}
		])
	}
];

export function getHeroVideoDialogBlock(id: string) {
	return heroVideoDialogBlocks.find((block) => block.id === id);
}
