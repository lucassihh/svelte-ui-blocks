// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import TerminalOnePreview from "$lib/components/blocks/magic/terminal/terminal-one/preview.svelte";

// Raw
import terminalIndexSource from "$lib/components/ui/magic-ui/terminal/index.ts?raw";
import terminalTerminalOnePreviewSource from "$lib/components/blocks/magic/terminal/terminal-one/preview.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const terminalBlocks: BlockShowcaseItem[] = [
	{
		id: "terminal-one",
		title: "Terminal One",
		description:
			"A Terminal One composition.",
		previewComponent: TerminalOnePreview,
		previewHref: "/preview/magic/terminal/terminal-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "terminal-one",
		codeTree: createBlockCodeTree("terminal-one", [
			{
				id: "terminal-one",
				path: "src/lib/components/blocks/magic/terminal/terminal-one/preview.svelte",
				lang: "svelte",
				code: terminalTerminalOnePreviewSource
			}
		])
	}
];

export function getTerminalBlock(id: string) {
	return terminalBlocks.find((block) => block.id === id);
}
