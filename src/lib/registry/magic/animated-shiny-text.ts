// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import AnimatedShinyTextOnePreview from "$lib/components/blocks/magic/animated-shiny-text/animated-shiny-text-one/preview.svelte";

// Raw
import animatedShinyTextAnimatedShinyTextOnePreviewSource from "$lib/components/blocks/magic/animated-shiny-text/animated-shiny-text-one/preview.svelte?raw";
import animatedShinyTextSource from "$lib/components/ui/magic-ui/animated-shiny-text/animated-shiny-text.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const animatedShinyTextBlocks: BlockShowcaseItem[] = [
	{
		id: "animated-shiny-text-one",
		title: "Animated Shiny Text One",
		description:
			"A Animated Shiny Text One composition.",
		previewComponent: AnimatedShinyTextOnePreview,
		previewHref: "/preview/magic/animated-shiny-text/animated-shiny-text-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "animated-shiny-text-one",
		codeTree: createBlockCodeTree("animated-shiny-text-one", [
			{
				id: "animated-shiny-text-one",
				path: "src/lib/components/blocks/magic/animated-shiny-text/animated-shiny-text-one/preview.svelte",
				lang: "svelte",
				code: animatedShinyTextAnimatedShinyTextOnePreviewSource
			}
		])
	}
];

export function getAnimatedShinyTextBlock(id: string) {
	return animatedShinyTextBlocks.find((block) => block.id === id);
}
