// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Preview Imports
import NotFoundOnePreview from "$lib/components/ui-blocks/efferd-ui/not-found/not-found-one/not-found.svelte";
import NotFoundTwoPreview from "$lib/components/ui-blocks/efferd-ui/not-found/not-found-two/not-found.svelte";

// Raw
import dividerIndexSource from "$lib/components/ui/full-width-divider/index.ts?raw";
import dividerSource from "$lib/components/ui/full-width-divider/full-width-divider.svelte?raw";
import emptyContentSource from "$lib/components/ui/empty/empty-content.svelte?raw";
import emptyDescriptionSource from "$lib/components/ui/empty/empty-description.svelte?raw";
import emptyHeaderSource from "$lib/components/ui/empty/empty-header.svelte?raw";
import emptyIndexSource from "$lib/components/ui/empty/index.ts?raw";
import emptyMediaSource from "$lib/components/ui/empty/empty-media.svelte?raw";
import emptySource from "$lib/components/ui/empty/empty.svelte?raw";
import emptyTitleSource from "$lib/components/ui/empty/empty-title.svelte?raw";
import notFoundNotFoundOneNotFoundSource from "$lib/components/ui-blocks/efferd-ui/not-found/not-found-one/not-found.svelte?raw";
import notFoundNotFoundTwoNotFoundSource from "$lib/components/ui-blocks/efferd-ui/not-found/not-found-two/not-found.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
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

export const notFoundBlocks: BlockShowcaseItem[] = [
	{
		id: "not-found-one",
		title: "Not Found One",
		description: "A Not Found One composition.",
		previewComponent: NotFoundOnePreview,
		previewHref: "/preview/efferd-ui/not-found/not-found-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "not-found-one",
		codeTree: createBlockCodeTree("not-found-one:not-found", [
			{
				id: "not-found-one:not-found",
				path: "src/lib/components/ui-blocks/efferd-ui/not-found/not-found-one/not-found.svelte",
				lang: "svelte",
				code: notFoundNotFoundOneNotFoundSource
			},
			...buttonFiles,
			...dividerFiles
		])
	},
	{
		id: "not-found-two",
		title: "Not Found Two",
		description: "A Not Found Two composition.",
		previewComponent: NotFoundTwoPreview,
		previewHref: "/preview/efferd-ui/not-found/not-found-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "not-found-two",
		codeTree: createBlockCodeTree("not-found-two:not-found", [
			{
				id: "not-found-two:not-found",
				path: "src/lib/components/ui-blocks/efferd-ui/not-found/not-found-two/not-found.svelte",
				lang: "svelte",
				code: notFoundNotFoundTwoNotFoundSource
			},
			...buttonFiles,
			...dividerFiles
		])
	}
];

export function getNotFoundBlock(id: string) {
	return notFoundBlocks.find((block) => block.id === id);
}
