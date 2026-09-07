// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import DockFourPreview from "$lib/components/blocks/magic/dock/dock-four/disabled-magnification.svelte";
import DockOnePreview from "$lib/components/blocks/magic/dock/dock-one/dock.svelte";
import DockThreePreview from "$lib/components/blocks/magic/dock/dock-three/colored-icons.svelte";
import DockTwoPreview from "$lib/components/blocks/magic/dock/dock-two/custom-magnification.svelte";

// Raw
import dockDockFourDisabledMagnificationSource from "$lib/components/blocks/magic/dock/dock-four/disabled-magnification.svelte?raw";
import dockDockOneDockSource from "$lib/components/blocks/magic/dock/dock-one/dock.svelte?raw";
import dockDockThreeColoredIconsSource from "$lib/components/blocks/magic/dock/dock-three/colored-icons.svelte?raw";
import dockDockTwoCustomMagnificationSource from "$lib/components/blocks/magic/dock/dock-two/custom-magnification.svelte?raw";
import dockIndexSource from "$lib/components/ui/magic-ui/dock/index.ts?raw";
import facebookSource from "$lib/assets/svg/social/facebook.svelte?raw";
import githubSource from "$lib/assets/svg/social/github.svelte?raw";
import instagramSource from "$lib/assets/svg/social/instagram.svelte?raw";
import linkedinSource from "$lib/assets/svg/social/linkedin.svelte?raw";
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

export const dockBlocks: BlockShowcaseItem[] = [
	{
		id: "dock-one",
		title: "Dock One",
		description:
			"A Dock One composition.",
		previewComponent: DockOnePreview,
		previewHref: "/preview/magic/dock/dock-one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "dock-one",
		codeTree: createBlockCodeTree("dock-one", [
			{
				id: "dock-one",
				path: "src/lib/components/blocks/magic/dock/dock-one/dock.svelte",
				lang: "svelte",
				code: dockDockOneDockSource
			}
		])
	},	{
		id: "dock-two",
		title: "Dock Two",
		description:
			"A Dock Two composition.",
		previewComponent: DockTwoPreview,
		previewHref: "/preview/magic/dock/dock-two",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "dock-two",
		codeTree: createBlockCodeTree("dock-two", [
			{
				id: "dock-two",
				path: "src/lib/components/blocks/magic/dock/dock-two/custom-magnification.svelte",
				lang: "svelte",
				code: dockDockTwoCustomMagnificationSource
			}
		])
	},	{
		id: "dock-three",
		title: "Dock Three",
		description:
			"A Dock Three composition.",
		previewComponent: DockThreePreview,
		previewHref: "/preview/magic/dock/dock-three",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "dock-three",
		codeTree: createBlockCodeTree("dock-three", [
			{
				id: "dock-three",
				path: "src/lib/components/blocks/magic/dock/dock-three/colored-icons.svelte",
				lang: "svelte",
				code: dockDockThreeColoredIconsSource
			}
		])
	},	{
		id: "dock-four",
		title: "Dock Four",
		description:
			"A Dock Four composition.",
		previewComponent: DockFourPreview,
		previewHref: "/preview/magic/dock/dock-four",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "dock-four",
		codeTree: createBlockCodeTree("dock-four", [
			{
				id: "dock-four",
				path: "src/lib/components/blocks/magic/dock/dock-four/disabled-magnification.svelte",
				lang: "svelte",
				code: dockDockFourDisabledMagnificationSource
			}
		])
	}
];

export function getDockBlock(id: string) {
	return dockBlocks.find((block) => block.id === id);
}
