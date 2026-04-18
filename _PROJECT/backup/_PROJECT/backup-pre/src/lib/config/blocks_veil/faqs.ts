import type { MistBlock } from "$lib/types/mists";

import FaqsOne from "$lib/components/blocks/blocks_veil/faqs/faqs-one.svelte";
import FaqsOneCode from "$lib/components/blocks/blocks_veil/faqs/faqs-one.svelte?raw";
import FaqsTwo from "$lib/components/blocks/blocks_veil/faqs/faqs-two.svelte";
import FaqsTwoCode from "$lib/components/blocks/blocks_veil/faqs/faqs-two.svelte?raw";
import FaqsThree from "$lib/components/blocks/blocks_veil/faqs/faqs-three.svelte";
import FaqsThreeCode from "$lib/components/blocks/blocks_veil/faqs/faqs-three.svelte?raw";
import FaqsFour from "$lib/components/blocks/blocks_veil/faqs/faqs-four.svelte";
import FaqsFourCode from "$lib/components/blocks/blocks_veil/faqs/faqs-four.svelte?raw";

export const all_veils_faqs: MistBlock[] = [
	{
		slug: "faqs-one",
		title: "Faqs One",
		category: "faqs",
		preview: "/preview/blocks_veil/faqs/faqs-one",
		itemId: "veil-faqs-one",
		code: {
			code: FaqsOneCode,
			lang: "svelte",
		},
		component: FaqsOne,
	},
	{
		slug: "faqs-two",
		title: "Faqs Two",
		category: "faqs",
		preview: "/preview/blocks_veil/faqs/faqs-two",
		itemId: "veil-faqs-two",
		code: {
			code: FaqsTwoCode,
			lang: "svelte",
		},
		component: FaqsTwo,
	},
	{
		slug: "faqs-three",
		title: "Faqs Three",
		category: "faqs",
		preview: "/preview/blocks_veil/faqs/faqs-three",
		itemId: "veil-faqs-three",
		code: {
			code: FaqsThreeCode,
			lang: "svelte",
		},
		component: FaqsThree,
	},
	{
		slug: "faqs-four",
		title: "Faqs Four",
		category: "faqs",
		preview: "/preview/blocks_veil/faqs/faqs-four",
		itemId: "veil-faqs-four",
		code: {
			code: FaqsFourCode,
			lang: "svelte",
		},
		component: FaqsFour,
	},
];
