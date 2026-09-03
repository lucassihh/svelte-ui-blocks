// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import FaqsFourPreview from "$lib/components/blocks/veil/faqs/faqs-four/faqs-four.svelte";
import FaqsOnePreview from "$lib/components/blocks/veil/faqs/faqs-one/faqs-one.svelte";
import FaqsThreePreview from "$lib/components/blocks/veil/faqs/faqs-three/faqs-three.svelte";
import FaqsTwoPreview from "$lib/components/blocks/veil/faqs/faqs-two/faqs-two.svelte";

// Raw
import accordionIndexSource from "$lib/components/ui/accordion/index.ts?raw";
import cardIndexSource from "$lib/components/ui/veil-ui/card/index.ts?raw";
import faqsFaqsFourSource from "$lib/components/blocks/veil/faqs/faqs-four/faqs-four.svelte?raw";
import faqsFaqsOneSource from "$lib/components/blocks/veil/faqs/faqs-one/faqs-one.svelte?raw";
import faqsFaqsThreeSource from "$lib/components/blocks/veil/faqs/faqs-three/faqs-three.svelte?raw";
import faqsFaqsTwoSource from "$lib/components/blocks/veil/faqs/faqs-two/faqs-two.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const faqsBlocks: BlockShowcaseItem[] = [
	{
		id: "faqs-one",
		title: "Faqs One",
		description:
			"A Faqs One composition.",
		previewComponent: FaqsOnePreview,
		previewHref: "/preview/veil/faqs/faqs-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "faqs-one",
		codeTree: createBlockCodeTree("faqs-one", [
			{
				id: "faqs-one",
				path: "src/lib/components/blocks/veil/faqs/faqs-one/faqs-one.svelte",
				lang: "svelte",
				code: faqsFaqsOneSource
			}
		])
	},	{
		id: "faqs-two",
		title: "Faqs Two",
		description:
			"A Faqs Two composition.",
		previewComponent: FaqsTwoPreview,
		previewHref: "/preview/veil/faqs/faqs-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "faqs-two",
		codeTree: createBlockCodeTree("faqs-two", [
			{
				id: "faqs-two",
				path: "src/lib/components/blocks/veil/faqs/faqs-two/faqs-two.svelte",
				lang: "svelte",
				code: faqsFaqsTwoSource
			}
		])
	},	{
		id: "faqs-three",
		title: "Faqs Three",
		description:
			"A Faqs Three composition.",
		previewComponent: FaqsThreePreview,
		previewHref: "/preview/veil/faqs/faqs-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "faqs-three",
		codeTree: createBlockCodeTree("faqs-three", [
			{
				id: "faqs-three",
				path: "src/lib/components/blocks/veil/faqs/faqs-three/faqs-three.svelte",
				lang: "svelte",
				code: faqsFaqsThreeSource
			}
		])
	},	{
		id: "faqs-four",
		title: "Faqs Four",
		description:
			"A Faqs Four composition.",
		previewComponent: FaqsFourPreview,
		previewHref: "/preview/veil/faqs/faqs-four",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "faqs-four",
		codeTree: createBlockCodeTree("faqs-four", [
			{
				id: "faqs-four",
				path: "src/lib/components/blocks/veil/faqs/faqs-four/faqs-four.svelte",
				lang: "svelte",
				code: faqsFaqsFourSource
			}
		])
	}
];

export function getFaqsBlock(id: string) {
	return faqsBlocks.find((block) => block.id === id);
}
