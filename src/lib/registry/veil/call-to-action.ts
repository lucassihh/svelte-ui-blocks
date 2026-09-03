// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import CallToActionFourPreview from "$lib/components/blocks/veil/call-to-action/call-to-action-four/call-to-action-four.svelte";
import CallToActionOnePreview from "$lib/components/blocks/veil/call-to-action/call-to-action-one/call-to-action-one.svelte";
import CallToActionThreePreview from "$lib/components/blocks/veil/call-to-action/call-to-action-three/call-to-action-three.svelte";
import CallToActionTwoPreview from "$lib/components/blocks/veil/call-to-action/call-to-action-two/call-to-action-two.svelte";

// Raw
import buttonIndexSource from "$lib/components/ui/veil-ui/button/index.ts?raw";
import callToActionCallToActionFourSource from "$lib/components/blocks/veil/call-to-action/call-to-action-four/call-to-action-four.svelte?raw";
import callToActionCallToActionOneSource from "$lib/components/blocks/veil/call-to-action/call-to-action-one/call-to-action-one.svelte?raw";
import callToActionCallToActionThreeSource from "$lib/components/blocks/veil/call-to-action/call-to-action-three/call-to-action-three.svelte?raw";
import callToActionCallToActionTwoSource from "$lib/components/blocks/veil/call-to-action/call-to-action-two/call-to-action-two.svelte?raw";
import cardIndexSource from "$lib/components/ui/veil-ui/card/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const callToActionBlocks: BlockShowcaseItem[] = [
	{
		id: "call-to-action-one",
		title: "Call To Action One",
		description:
			"A Call To Action One composition.",
		previewComponent: CallToActionOnePreview,
		previewHref: "/preview/veil/call-to-action/call-to-action-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "call-to-action-one",
		codeTree: createBlockCodeTree("call-to-action-one", [
			{
				id: "call-to-action-one",
				path: "src/lib/components/blocks/veil/call-to-action/call-to-action-one/call-to-action-one.svelte",
				lang: "svelte",
				code: callToActionCallToActionOneSource
			}
		])
	},	{
		id: "call-to-action-two",
		title: "Call To Action Two",
		description:
			"A Call To Action Two composition.",
		previewComponent: CallToActionTwoPreview,
		previewHref: "/preview/veil/call-to-action/call-to-action-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "call-to-action-two",
		codeTree: createBlockCodeTree("call-to-action-two", [
			{
				id: "call-to-action-two",
				path: "src/lib/components/blocks/veil/call-to-action/call-to-action-two/call-to-action-two.svelte",
				lang: "svelte",
				code: callToActionCallToActionTwoSource
			}
		])
	},	{
		id: "call-to-action-three",
		title: "Call To Action Three",
		description:
			"A Call To Action Three composition.",
		previewComponent: CallToActionThreePreview,
		previewHref: "/preview/veil/call-to-action/call-to-action-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "call-to-action-three",
		codeTree: createBlockCodeTree("call-to-action-three", [
			{
				id: "call-to-action-three",
				path: "src/lib/components/blocks/veil/call-to-action/call-to-action-three/call-to-action-three.svelte",
				lang: "svelte",
				code: callToActionCallToActionThreeSource
			}
		])
	},	{
		id: "call-to-action-four",
		title: "Call To Action Four",
		description:
			"A Call To Action Four composition.",
		previewComponent: CallToActionFourPreview,
		previewHref: "/preview/veil/call-to-action/call-to-action-four",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "call-to-action-four",
		codeTree: createBlockCodeTree("call-to-action-four", [
			{
				id: "call-to-action-four",
				path: "src/lib/components/blocks/veil/call-to-action/call-to-action-four/call-to-action-four.svelte",
				lang: "svelte",
				code: callToActionCallToActionFourSource
			}
		])
	}
];

export function getCallToActionBlock(id: string) {
	return callToActionBlocks.find((block) => block.id === id);
}
