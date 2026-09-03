// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import ContactOnePreview from "$lib/components/blocks/veil/contact/contact-one/contact-one.svelte";
import ContactTwoPreview from "$lib/components/blocks/veil/contact/contact-two/contact-two.svelte";

// Raw
import buttonIndexSource from "$lib/components/ui/veil-ui/button/index.ts?raw";
import cardIndexSource from "$lib/components/ui/veil-ui/card/index.ts?raw";
import contactContactOneSource from "$lib/components/blocks/veil/contact/contact-one/contact-one.svelte?raw";
import contactContactTwoSource from "$lib/components/blocks/veil/contact/contact-two/contact-two.svelte?raw";
import inputIndexSource from "$lib/components/ui/veil-ui/input/index.ts?raw";
import labelIndexSource from "$lib/components/ui/label/index.ts?raw";
import selectIndexSource from "$lib/components/ui/select/index.ts?raw";
import textareaIndexSource from "$lib/components/ui/veil-ui/textarea/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const contactBlocks: BlockShowcaseItem[] = [
	{
		id: "contact-one",
		title: "Contact One",
		description:
			"A Contact One composition.",
		previewComponent: ContactOnePreview,
		previewHref: "/preview/veil/contact/contact-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "contact-one",
		codeTree: createBlockCodeTree("contact-one", [
			{
				id: "contact-one",
				path: "src/lib/components/blocks/veil/contact/contact-one/contact-one.svelte",
				lang: "svelte",
				code: contactContactOneSource
			}
		])
	},	{
		id: "contact-two",
		title: "Contact Two",
		description:
			"A Contact Two composition.",
		previewComponent: ContactTwoPreview,
		previewHref: "/preview/veil/contact/contact-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "contact-two",
		codeTree: createBlockCodeTree("contact-two", [
			{
				id: "contact-two",
				path: "src/lib/components/blocks/veil/contact/contact-two/contact-two.svelte",
				lang: "svelte",
				code: contactContactTwoSource
			}
		])
	}
];

export function getContactBlock(id: string) {
	return contactBlocks.find((block) => block.id === id);
}
