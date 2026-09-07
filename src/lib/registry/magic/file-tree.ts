// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import FileTreeOnePreview from "$lib/components/blocks/magic/file-tree/file-tree-one/preview.svelte";

// Raw
import fileTreeFileTreeOnePreviewSource from "$lib/components/blocks/magic/file-tree/file-tree-one/preview.svelte?raw";
import fileTreeIndexSource from "$lib/components/ui/magic-ui/file-tree/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const fileTreeBlocks: BlockShowcaseItem[] = [
	{
		id: "file-tree-one",
		title: "File Tree One",
		description:
			"A File Tree One composition.",
		previewComponent: FileTreeOnePreview,
		previewHref: "/preview/magic/file-tree/file-tree-one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "file-tree-one",
		codeTree: createBlockCodeTree("file-tree-one", [
			{
				id: "file-tree-one",
				path: "src/lib/components/blocks/magic/file-tree/file-tree-one/preview.svelte",
				lang: "svelte",
				code: fileTreeFileTreeOnePreviewSource
			}
		])
	}
];

export function getFileTreeBlock(id: string) {
	return fileTreeBlocks.find((block) => block.id === id);
}
