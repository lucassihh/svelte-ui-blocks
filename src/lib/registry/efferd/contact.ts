// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import ContactFivePreview from "$lib/components/blocks/efferd/contact/contact-five/contact.svelte";
import ContactFourPreview from "$lib/components/blocks/efferd/contact/contact-four/contact.svelte";
import ContactOnePreview from "$lib/components/blocks/efferd/contact/contact-one/contact.svelte";
import ContactThreePreview from "$lib/components/blocks/efferd/contact/contact-three/contact.svelte";
import ContactTwoPreview from "$lib/components/blocks/efferd/contact/contact-two/contact.svelte";

// Raw
import contactContactFiveContactFormSource from "$lib/components/blocks/efferd/contact/contact-five/contact-form.svelte?raw";
import contactContactFiveContactSource from "$lib/components/blocks/efferd/contact/contact-five/contact.svelte?raw";
import contactContactFourContactSource from "$lib/components/blocks/efferd/contact/contact-four/contact.svelte?raw";
import contactContactOneContactSource from "$lib/components/blocks/efferd/contact/contact-one/contact.svelte?raw";
import contactContactThreeContactSource from "$lib/components/blocks/efferd/contact/contact-three/contact.svelte?raw";
import contactContactTwoContactSource from "$lib/components/blocks/efferd/contact/contact-two/contact.svelte?raw";
import decorIconIndexSource from "$lib/components/ui/decor-icon/index.ts?raw";
import dividerIndexSource from "$lib/components/ui/full-width-divider/index.ts?raw";
import fieldIndexSource from "$lib/components/ui/field/index.ts?raw";
import githubSource from "$lib/assets/svg/social/github.svelte?raw";
import inputIndexSource from "$lib/components/ui/input/index.ts?raw";
import textareaIndexSource from "$lib/components/ui/textarea/index.ts?raw";
import xSource from "$lib/assets/svg/social/x.svelte?raw";

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

export const contactBlocks: BlockShowcaseItem[] = [
	{
		id: "contact-one",
		title: "Contact One",
		description:
			"A Contact One composition.",
		previewComponent: ContactOnePreview,
		previewHref: "/preview/efferd/contact/contact-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "contact-one",
		codeTree: createBlockCodeTree("contact-one", [
			{
				id: "contact-one",
				path: "src/lib/components/blocks/efferd/contact/contact-one/contact.svelte",
				lang: "svelte",
				code: contactContactOneContactSource
			},
			...dividerFiles
		])
	},	{
		id: "contact-two",
		title: "Contact Two",
		description:
			"A Contact Two composition.",
		previewComponent: ContactTwoPreview,
		previewHref: "/preview/efferd/contact/contact-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "contact-two",
		codeTree: createBlockCodeTree("contact-two", [
			{
				id: "contact-two",
				path: "src/lib/components/blocks/efferd/contact/contact-two/contact.svelte",
				lang: "svelte",
				code: contactContactTwoContactSource
			},
			...buttonFiles
		])
	},	{
		id: "contact-three",
		title: "Contact Three",
		description:
			"A Contact Three composition.",
		previewComponent: ContactThreePreview,
		previewHref: "/preview/efferd/contact/contact-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "contact-three",
		codeTree: createBlockCodeTree("contact-three", [
			{
				id: "contact-three",
				path: "src/lib/components/blocks/efferd/contact/contact-three/contact.svelte",
				lang: "svelte",
				code: contactContactThreeContactSource
			},
			...dividerFiles
		])
	},	{
		id: "contact-four",
		title: "Contact Four",
		description:
			"A Contact Four composition.",
		previewComponent: ContactFourPreview,
		previewHref: "/preview/efferd/contact/contact-four",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "contact-four",
		codeTree: createBlockCodeTree("contact-four", [
			{
				id: "contact-four",
				path: "src/lib/components/blocks/efferd/contact/contact-four/contact.svelte",
				lang: "svelte",
				code: contactContactFourContactSource
			},
			...buttonFiles
		])
	},	{
		id: "contact-five",
		title: "Contact Five",
		description:
			"A Contact Five composition.",
		previewComponent: ContactFivePreview,
		previewHref: "/preview/efferd/contact/contact-five",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "contact-five",
		codeTree: createBlockCodeTree("contact-five:contact", [
			{
				id: "contact-five:contact-form",
				path: "src/lib/components/blocks/efferd/contact/contact-five/contact-form.svelte",
				lang: "svelte",
				code: contactContactFiveContactFormSource
			},
			{
				id: "contact-five:contact",
				path: "src/lib/components/blocks/efferd/contact/contact-five/contact.svelte",
				lang: "svelte",
				code: contactContactFiveContactSource
			},
			...decorIconFiles
		])
	}
];

export function getContactBlock(id: string) {
	return contactBlocks.find((block) => block.id === id);
}
