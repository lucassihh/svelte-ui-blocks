import type { MistBlock } from "$lib/types/mists";

import ContentOne from "$lib/components/blocks/blocks_veil/content/content-one.svelte";
import ContentOneCode from "$lib/components/blocks/blocks_veil/content/content-one.svelte?raw";
import ContentTwo from "$lib/components/blocks/blocks_veil/content/content-two.svelte";
import ContentTwoCode from "$lib/components/blocks/blocks_veil/content/content-two.svelte?raw";
import ContentThree from "$lib/components/blocks/blocks_veil/content/content-three.svelte";
import ContentThreeCode from "$lib/components/blocks/blocks_veil/content/content-three.svelte?raw";

export const all_veils_content: MistBlock[] = [
	{
		slug: "content-one",
		title: "Content One",
		category: "content",
		preview: "/preview/blocks_veil/content/content-one",
		itemId: "veil-content-one",
		code: {
			code: ContentOneCode,
			lang: "svelte",
		},
		component: ContentOne,
	},
	{
		slug: "content-two",
		title: "Content Two",
		category: "content",
		preview: "/preview/blocks_veil/content/content-two",
		itemId: "veil-content-two",
		code: {
			code: ContentTwoCode,
			lang: "svelte",
		},
		component: ContentTwo,
	},
	{
		slug: "content-three",
		title: "Content Three",
		category: "content",
		preview: "/preview/blocks_veil/content/content-three",
		itemId: "veil-content-three",
		code: {
			code: ContentThreeCode,
			lang: "svelte",
		},
		component: ContentThree,
	},
];
