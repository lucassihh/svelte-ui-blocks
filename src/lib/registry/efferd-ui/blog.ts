// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import BlogOnePreview from "$lib/components/blocks/efferd-ui/blog/blog-one/blog-card.svelte";
import BlogThreePreview from "$lib/components/blocks/efferd-ui/blog/blog-three/blog-card.svelte";
import BlogTwoPreview from "$lib/components/blocks/efferd-ui/blog/blog-two/blog-card.svelte";

// Raw
import aspectRatioIndexSource from "$lib/components/ui/aspect-ratio/index.ts?raw";
import blogBlogOneBlogCardSource from "$lib/components/blocks/efferd-ui/blog/blog-one/blog-card.svelte?raw";
import blogBlogThreeBlogCardSource from "$lib/components/blocks/efferd-ui/blog/blog-three/blog-card.svelte?raw";
import blogBlogTwoBlogCardSource from "$lib/components/blocks/efferd-ui/blog/blog-two/blog-card.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const blogBlocks: BlockShowcaseItem[] = [
	{
		id: "blog-one",
		title: "Blog One",
		description:
			"A Blog One composition.",
		previewComponent: BlogOnePreview,
		previewHref: "/preview/efferd-ui/blog/blog-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "blog-one",
		codeTree: createBlockCodeTree("blog-one", [
			{
				id: "blog-one",
				path: "src/lib/components/blocks/efferd-ui/blog/blog-one/blog-card.svelte",
				lang: "svelte",
				code: blogBlogOneBlogCardSource
			}
		])
	},	{
		id: "blog-two",
		title: "Blog Two",
		description:
			"A Blog Two composition.",
		previewComponent: BlogTwoPreview,
		previewHref: "/preview/efferd-ui/blog/blog-two",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "blog-two",
		codeTree: createBlockCodeTree("blog-two", [
			{
				id: "blog-two",
				path: "src/lib/components/blocks/efferd-ui/blog/blog-two/blog-card.svelte",
				lang: "svelte",
				code: blogBlogTwoBlogCardSource
			}
		])
	},	{
		id: "blog-three",
		title: "Blog Three",
		description:
			"A Blog Three composition.",
		previewComponent: BlogThreePreview,
		previewHref: "/preview/efferd-ui/blog/blog-three",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "blog-three",
		codeTree: createBlockCodeTree("blog-three", [
			{
				id: "blog-three",
				path: "src/lib/components/blocks/efferd-ui/blog/blog-three/blog-card.svelte",
				lang: "svelte",
				code: blogBlogThreeBlogCardSource
			}
		])
	}
];

export function getBlogBlock(id: string) {
	return blogBlocks.find((block) => block.id === id);
}
