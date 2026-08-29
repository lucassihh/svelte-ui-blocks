// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import AnimatedThemeToggleOnePreview from "$lib/components/blocks/magic/animated-theme-toggler/animated-theme-toggle-one/preview.svelte";

// Raw
import animatedThemeTogglerAnimatedThemeToggleOnePreviewSource from "$lib/components/blocks/magic/animated-theme-toggler/animated-theme-toggle-one/preview.svelte?raw";
import animatedThemeTogglerIndexSource from "$lib/components/ui/magic-ui/animated-theme-toggler/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const animatedThemeTogglerBlocks: BlockShowcaseItem[] = [
	{
		id: "animated-theme-toggle-one",
		title: "Animated Theme Toggle One",
		description:
			"A Animated Theme Toggle One composition.",
		previewComponent: AnimatedThemeToggleOnePreview,
		previewHref: "/preview/magic/animated-theme-toggler/animated-theme-toggle-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "animated-theme-toggle-one",
		codeTree: createBlockCodeTree("animated-theme-toggle-one", [
			{
				id: "animated-theme-toggle-one",
				path: "src/lib/components/blocks/magic/animated-theme-toggler/animated-theme-toggle-one/preview.svelte",
				lang: "svelte",
				code: animatedThemeTogglerAnimatedThemeToggleOnePreviewSource
			}
		])
	}
];

export function getAnimatedThemeTogglerBlock(id: string) {
	return animatedThemeTogglerBlocks.find((block) => block.id === id);
}
