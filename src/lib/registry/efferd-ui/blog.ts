import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-three";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-three";
import BlogOnePreview from "$lib/components/efferd-ui/blog/blog-one/blog-card.svelte";
import BlogThreePreview from "$lib/components/efferd-ui/blog/blog-three/blog-card.svelte";
import BlogTwoPreview from "$lib/components/efferd-ui/blog/blog-two/blog-card.svelte";

import aspectRatioIndexSource from "$lib/components/ui/aspect-ratio/index.ts?raw";
import aspectRatioSource from "$lib/components/ui/aspect-ratio/aspect-ratio.svelte?raw";
import blogBlogOneBlogCardSource from "$lib/components/efferd-ui/blog/blog-one/blog-card.svelte?raw";
import blogBlogOneBlogSource from "$lib/components/efferd-ui/blog/blog-one/blog.svelte?raw";
import blogBlogThreeBlogCardSource from "$lib/components/efferd-ui/blog/blog-three/blog-card.svelte?raw";
import blogBlogThreeBlogSource from "$lib/components/efferd-ui/blog/blog-three/blog.svelte?raw";
import blogBlogTwoBlogCardSource from "$lib/components/efferd-ui/blog/blog-two/blog-card.svelte?raw";
import blogBlogTwoBlogSource from "$lib/components/efferd-ui/blog/blog-two/blog.svelte?raw";
import dividerIndexSource from "$lib/components/ui/full-width-divider/index.ts?raw";
import dividerSource from "$lib/components/ui/full-width-divider/full-width-divider.svelte?raw";
import gridFillerIndexSource from "$lib/components/ui/grid-filler/index.ts?raw";
import gridFillerSource from "$lib/components/ui/grid-filler/grid-filler.svelte?raw";

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

export const blogBlocks: BlockShowcaseItem[] = [
	{
		id: "blog-one",
		title: "Blog One",
		description:
			"A Blog One composition.",
		previewComponent: BlogOnePreview,
		previewHref: "/preview/efferd-ui/blog/blog-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "blog-one",
		codeTree: createBlockCodeTree("blog-one:preview", [
			{
				id: "blog-one:blog-card",
				path: "components/efferd/blog/blog-one/blog-card.svelte",
				lang: "svelte",
				code: blogBlogOneBlogCardSource
			},
			{
				id: "blog-one:blog",
				path: "components/efferd/blog/blog-one/blog.svelte",
				lang: "svelte",
				code: blogBlogOneBlogSource
			},
			...dividerFiles
		])
	},	{
		id: "blog-two",
		title: "Blog Two",
		description:
			"A Blog Two composition.",
		previewComponent: BlogTwoPreview,
		previewHref: "/preview/efferd-ui/blog/blog-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "blog-two",
		codeTree: createBlockCodeTree("blog-two:preview", [
			{
				id: "blog-two:blog-card",
				path: "components/efferd/blog/blog-two/blog-card.svelte",
				lang: "svelte",
				code: blogBlogTwoBlogCardSource
			},
			{
				id: "blog-two:blog",
				path: "components/efferd/blog/blog-two/blog.svelte",
				lang: "svelte",
				code: blogBlogTwoBlogSource
			},
			...dividerFiles
		])
	},	{
		id: "blog-three",
		title: "Blog Three",
		description:
			"A Blog Three composition.",
		previewComponent: BlogThreePreview,
		previewHref: "/preview/efferd-ui/blog/blog-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "blog-three",
		codeTree: createBlockCodeTree("blog-three:preview", [
			{
				id: "blog-three:blog-card",
				path: "components/efferd/blog/blog-three/blog-card.svelte",
				lang: "svelte",
				code: blogBlogThreeBlogCardSource
			},
			{
				id: "blog-three:blog",
				path: "components/efferd/blog/blog-three/blog.svelte",
				lang: "svelte",
				code: blogBlogThreeBlogSource
			},
			...dividerFiles
		])
	}
];

export function getBlogBlock(id: string) {
	return blogBlocks.find((block) => block.id === id);
}
