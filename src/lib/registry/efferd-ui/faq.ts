// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Preview Imports
import FaqFivePreview from "$lib/components/ui-blocks/efferd-ui/faq/faq-five/faq.svelte";
import FaqFourPreview from "$lib/components/ui-blocks/efferd-ui/faq/faq-four/faq.svelte";
import FaqOnePreview from "$lib/components/ui-blocks/efferd-ui/faq/faq-one/faq.svelte";
import FaqThreePreview from "$lib/components/ui-blocks/efferd-ui/faq/faq-three/faq.svelte";
import FaqTwoPreview from "$lib/components/ui-blocks/efferd-ui/faq/faq-two/faq.svelte";

// Raw
import accordionContentSource from "$lib/components/ui/accordion/accordion-content.svelte?raw";
import accordionIndexSource from "$lib/components/ui/accordion/index.ts?raw";
import accordionItemSource from "$lib/components/ui/accordion/accordion-item.svelte?raw";
import accordionSource from "$lib/components/ui/accordion/accordion.svelte?raw";
import accordionTriggerSource from "$lib/components/ui/accordion/accordion-trigger.svelte?raw";
import decorIconIndexSource from "$lib/components/ui/decor-icon/index.ts?raw";
import decorIconSource from "$lib/components/ui/decor-icon/decor-icon.svelte?raw";
import dividerIndexSource from "$lib/components/ui/full-width-divider/index.ts?raw";
import dividerSource from "$lib/components/ui/full-width-divider/full-width-divider.svelte?raw";
import emptyContentSource from "$lib/components/ui/empty/empty-content.svelte?raw";
import emptyDescriptionSource from "$lib/components/ui/empty/empty-description.svelte?raw";
import emptyHeaderSource from "$lib/components/ui/empty/empty-header.svelte?raw";
import emptyIndexSource from "$lib/components/ui/empty/index.ts?raw";
import emptyMediaSource from "$lib/components/ui/empty/empty-media.svelte?raw";
import emptySource from "$lib/components/ui/empty/empty.svelte?raw";
import emptyTitleSource from "$lib/components/ui/empty/empty-title.svelte?raw";
import faqFaqFiveFaqSource from "$lib/components/ui-blocks/efferd-ui/faq/faq-five/faq.svelte?raw";
import faqFaqFourFaqSource from "$lib/components/ui-blocks/efferd-ui/faq/faq-four/faq.svelte?raw";
import faqFaqOneFaqSource from "$lib/components/ui-blocks/efferd-ui/faq/faq-one/faq.svelte?raw";
import faqFaqThreeFaqSource from "$lib/components/ui-blocks/efferd-ui/faq/faq-three/faq.svelte?raw";
import faqFaqTwoFaqSource from "$lib/components/ui-blocks/efferd-ui/faq/faq-two/faq.svelte?raw";
import inputGroupAddonSource from "$lib/components/ui/input-group/input-group-addon.svelte?raw";
import inputGroupButtonSource from "$lib/components/ui/input-group/input-group-button.svelte?raw";
import inputGroupIndexSource from "$lib/components/ui/input-group/index.ts?raw";
import inputGroupInputSource from "$lib/components/ui/input-group/input-group-input.svelte?raw";
import inputGroupSource from "$lib/components/ui/input-group/input-group.svelte?raw";
import inputGroupTextSource from "$lib/components/ui/input-group/input-group-text.svelte?raw";
import inputGroupTextareaSource from "$lib/components/ui/input-group/input-group-textarea.svelte?raw";

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
		id: "shared:decor-icon",
		path: "components/ui/decor-icon/decor-icon.svelte",
		lang: "svelte" as const,
		code: decorIconSource
	},
	{
		id: "shared:decor-icon-index",
		path: "components/ui/decor-icon/index.ts",
		lang: "typescript" as const,
		code: decorIconIndexSource
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

export const faqBlocks: BlockShowcaseItem[] = [
	{
		id: "faq-one",
		title: "Faq One",
		description:
			"A Faq One composition.",
		previewComponent: FaqOnePreview,
		previewHref: "/preview/efferd-ui/faq/faq-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "faq-one",
		codeTree: createBlockCodeTree("faq-one:faq", [
			{
				id: "faq-one:faq",
				path: "src/lib/components/ui-blocks/efferd-ui/faq/faq-one/faq.svelte",
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
		previewHref: "/preview/efferd-ui/faq/faq-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "faq-two",
		codeTree: createBlockCodeTree("faq-two:faq", [
			{
				id: "faq-two:faq",
				path: "src/lib/components/ui-blocks/efferd-ui/faq/faq-two/faq.svelte",
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
		previewHref: "/preview/efferd-ui/faq/faq-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "faq-three",
		codeTree: createBlockCodeTree("faq-three:faq", [
			{
				id: "faq-three:faq",
				path: "src/lib/components/ui-blocks/efferd-ui/faq/faq-three/faq.svelte",
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
		previewHref: "/preview/efferd-ui/faq/faq-four",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "faq-four",
		codeTree: createBlockCodeTree("faq-four:faq", [
			{
				id: "faq-four:faq",
				path: "src/lib/components/ui-blocks/efferd-ui/faq/faq-four/faq.svelte",
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
		previewHref: "/preview/efferd-ui/faq/faq-five",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "faq-five",
		codeTree: createBlockCodeTree("faq-five:faq", [
			{
				id: "faq-five:faq",
				path: "src/lib/components/ui-blocks/efferd-ui/faq/faq-five/faq.svelte",
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
