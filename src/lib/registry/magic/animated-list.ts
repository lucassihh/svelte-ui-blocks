// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import AnimatedListOnePreview from "$lib/components/blocks/magic/animated-list/animated-list-one/notification.svelte";

// Raw
import animatedListAnimatedListOneAnimatedListSource from "$lib/components/blocks/magic/animated-list/animated-list-one/animated-list.svelte?raw";
import animatedListAnimatedListOneNotificationSource from "$lib/components/blocks/magic/animated-list/animated-list-one/notification.svelte?raw";
import animatedListIndexSource from "$lib/components/ui/magic-ui/animated-list/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const animatedListBlocks: BlockShowcaseItem[] = [
	{
		id: "animated-list-one",
		title: "Animated List One",
		description:
			"A Animated List One composition.",
		previewComponent: AnimatedListOnePreview,
		previewHref: "/preview/magic/animated-list/animated-list-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "animated-list-one",
		codeTree: createBlockCodeTree("animated-list-one:animated-list", [
			{
				id: "animated-list-one:animated-list",
				path: "src/lib/components/blocks/magic/animated-list/animated-list-one/animated-list.svelte",
				lang: "svelte",
				code: animatedListAnimatedListOneAnimatedListSource
			},
			{
				id: "animated-list-one:notification",
				path: "src/lib/components/blocks/magic/animated-list/animated-list-one/notification.svelte",
				lang: "svelte",
				code: animatedListAnimatedListOneNotificationSource
			}
		])
	}
];

export function getAnimatedListBlock(id: string) {
	return animatedListBlocks.find((block) => block.id === id);
}
