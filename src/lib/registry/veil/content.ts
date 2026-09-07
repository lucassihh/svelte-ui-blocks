// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import ContentOnePreview from "$lib/components/blocks/veil/content/content-one/content-one.svelte";
import ContentThreePreview from "$lib/components/blocks/veil/content/content-three/content-three.svelte";
import ContentTwoPreview from "$lib/components/blocks/veil/content/content-two/content-two.svelte";

// Raw
import contentContentOneSource from "$lib/components/blocks/veil/content/content-one/content-one.svelte?raw";
import contentContentThreeSource from "$lib/components/blocks/veil/content/content-three/content-three.svelte?raw";
import contentContentTwoSource from "$lib/components/blocks/veil/content/content-two/content-two.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const contentBlocks: BlockShowcaseItem[] = [
	{
		id: "content-one",
		title: "Content One",
		description:
			"A Content One composition.",
		previewComponent: ContentOnePreview,
		previewHref: "/preview/veil/content/content-one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "content-one",
		codeTree: createBlockCodeTree("content-one", [
			{
				id: "content-one",
				path: "src/lib/components/blocks/veil/content/content-one/content-one.svelte",
				lang: "svelte",
				code: contentContentOneSource
			}
		])
	},	{
		id: "content-two",
		title: "Content Two",
		description:
			"A Content Two composition.",
		previewComponent: ContentTwoPreview,
		previewHref: "/preview/veil/content/content-two",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "content-two",
		codeTree: createBlockCodeTree("content-two", [
			{
				id: "content-two",
				path: "src/lib/components/blocks/veil/content/content-two/content-two.svelte",
				lang: "svelte",
				code: contentContentTwoSource
			}
		])
	},	{
		id: "content-three",
		title: "Content Three",
		description:
			"A Content Three composition.",
		previewComponent: ContentThreePreview,
		previewHref: "/preview/veil/content/content-three",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "content-three",
		codeTree: createBlockCodeTree("content-three", [
			{
				id: "content-three",
				path: "src/lib/components/blocks/veil/content/content-three/content-three.svelte",
				lang: "svelte",
				code: contentContentThreeSource
			}
		])
	}
];

export function getContentBlock(id: string) {
	return contentBlocks.find((block) => block.id === id);
}
