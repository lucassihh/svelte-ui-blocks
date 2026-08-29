// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import FaqFivePreview from "$lib/components/blocks/efferd/faq/faq-five/faq.svelte";
import FaqFourPreview from "$lib/components/blocks/efferd/faq/faq-four/faq.svelte";
import FaqOnePreview from "$lib/components/blocks/efferd/faq/faq-one/faq.svelte";
import FaqThreePreview from "$lib/components/blocks/efferd/faq/faq-three/faq.svelte";
import FaqTwoPreview from "$lib/components/blocks/efferd/faq/faq-two/faq.svelte";

// Raw
import accordionIndexSource from "$lib/components/ui/accordion/index.ts?raw";
import decorIconIndexSource from "$lib/components/ui/decor-icon/index.ts?raw";
import dividerIndexSource from "$lib/components/ui/full-width-divider/index.ts?raw";
import emptyIndexSource from "$lib/components/ui/empty/index.ts?raw";
import faqFaqFiveFaqSource from "$lib/components/blocks/efferd/faq/faq-five/faq.svelte?raw";
import faqFaqFourFaqSource from "$lib/components/blocks/efferd/faq/faq-four/faq.svelte?raw";
import faqFaqOneFaqSource from "$lib/components/blocks/efferd/faq/faq-one/faq.svelte?raw";
import faqFaqThreeFaqSource from "$lib/components/blocks/efferd/faq/faq-three/faq.svelte?raw";
import faqFaqTwoFaqSource from "$lib/components/blocks/efferd/faq/faq-two/faq.svelte?raw";
import inputGroupIndexSource from "$lib/components/ui/input-group/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];
const decorIconFiles = [
	{
		id: "shared:decor-icon-index",
		path: "components/ui/decor-icon/index.ts",
		lang: "typescript" as const,
		code: decorIconIndexSource
	}
];
const dividerFiles = [
	{
		id: "shared:divider-index",
		path: "components/ui/full-width-divider/index.ts",
		lang: "typescript" as const,
		code: dividerIndexSource
	}
];

export const faqBlocks: BlockShowcaseItem[] = [
	{
		id: "faq-one",
		title: "Faq One",
		description:
			"A Faq One composition.",
		previewComponent: FaqOnePreview,
		previewHref: "/preview/efferd/faq/faq-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "faq-one",
		codeTree: createBlockCodeTree("faq-one", [
			{
				id: "faq-one",
				path: "src/lib/components/blocks/efferd/faq/faq-one/faq.svelte",
				lang: "svelte",
				code: faqFaqOneFaqSource
			}
		])
	},	{
		id: "faq-two",
		title: "Faq Two",
		description:
			"A Faq Two composition.",
		previewComponent: FaqTwoPreview,
		previewHref: "/preview/efferd/faq/faq-two",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "faq-two",
		codeTree: createBlockCodeTree("faq-two", [
			{
				id: "faq-two",
				path: "src/lib/components/blocks/efferd/faq/faq-two/faq.svelte",
				lang: "svelte",
				code: faqFaqTwoFaqSource
			}
		])
	},	{
		id: "faq-three",
		title: "Faq Three",
		description:
			"A Faq Three composition.",
		previewComponent: FaqThreePreview,
		previewHref: "/preview/efferd/faq/faq-three",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "faq-three",
		codeTree: createBlockCodeTree("faq-three", [
			{
				id: "faq-three",
				path: "src/lib/components/blocks/efferd/faq/faq-three/faq.svelte",
				lang: "svelte",
				code: faqFaqThreeFaqSource
			},
			...decorIconFiles
		])
	},	{
		id: "faq-four",
		title: "Faq Four",
		description:
			"A Faq Four composition.",
		previewComponent: FaqFourPreview,
		previewHref: "/preview/efferd/faq/faq-four",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "faq-four",
		codeTree: createBlockCodeTree("faq-four", [
			{
				id: "faq-four",
				path: "src/lib/components/blocks/efferd/faq/faq-four/faq.svelte",
				lang: "svelte",
				code: faqFaqFourFaqSource
			},
			...buttonFiles
		])
	},	{
		id: "faq-five",
		title: "Faq Five",
		description:
			"A Faq Five composition.",
		previewComponent: FaqFivePreview,
		previewHref: "/preview/efferd/faq/faq-five",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "faq-five",
		codeTree: createBlockCodeTree("faq-five", [
			{
				id: "faq-five",
				path: "src/lib/components/blocks/efferd/faq/faq-five/faq.svelte",
				lang: "svelte",
				code: faqFaqFiveFaqSource
			},
			...buttonFiles,
			...dividerFiles
		])
	}
];

export function getFaqBlock(id: string) {
	return faqBlocks.find((block) => block.id === id);
}
