// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import TextHighlighterFourPreview from "$lib/components/blocks/fancy/text-highlighter/text-highlighter-four/programtic-control.svelte";
import TextHighlighterOnePreview from "$lib/components/blocks/fancy/text-highlighter/text-highlighter-one/direction-based-highlight-example.svelte";
import TextHighlighterThreePreview from "$lib/components/blocks/fancy/text-highlighter/text-highlighter-three/preview.svelte";
import TextHighlighterTwoPreview from "$lib/components/blocks/fancy/text-highlighter/text-highlighter-two/hover.svelte";

// Raw
import textHighlighterIndexSource from "$lib/components/ui/fancy-ui/text-highlighter/index.ts?raw";
import textHighlighterTextHighlighterFourProgramticControlSource from "$lib/components/blocks/fancy/text-highlighter/text-highlighter-four/programtic-control.svelte?raw";
import textHighlighterTextHighlighterOneDirectionBasedHighlightExampleSource from "$lib/components/blocks/fancy/text-highlighter/text-highlighter-one/direction-based-highlight-example.svelte?raw";
import textHighlighterTextHighlighterThreePreviewSource from "$lib/components/blocks/fancy/text-highlighter/text-highlighter-three/preview.svelte?raw";
import textHighlighterTextHighlighterTwoHoverSource from "$lib/components/blocks/fancy/text-highlighter/text-highlighter-two/hover.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const textHighlighterBlocks: BlockShowcaseItem[] = [
	{
		id: "text-highlighter-one",
		title: "Text Highlighter One",
		description:
			"A Text Highlighter One composition.",
		previewComponent: TextHighlighterOnePreview,
		previewHref: "/preview/fancy/text-highlighter/text-highlighter-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "text-highlighter-one",
		codeTree: createBlockCodeTree("text-highlighter-one", [
			{
				id: "text-highlighter-one",
				path: "src/lib/components/blocks/fancy/text-highlighter/text-highlighter-one/direction-based-highlight-example.svelte",
				lang: "svelte",
				code: textHighlighterTextHighlighterOneDirectionBasedHighlightExampleSource
			}
		])
	},	{
		id: "text-highlighter-two",
		title: "Text Highlighter Two",
		description:
			"A Text Highlighter Two composition.",
		previewComponent: TextHighlighterTwoPreview,
		previewHref: "/preview/fancy/text-highlighter/text-highlighter-two",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "text-highlighter-two",
		codeTree: createBlockCodeTree("text-highlighter-two", [
			{
				id: "text-highlighter-two",
				path: "src/lib/components/blocks/fancy/text-highlighter/text-highlighter-two/hover.svelte",
				lang: "svelte",
				code: textHighlighterTextHighlighterTwoHoverSource
			}
		])
	},	{
		id: "text-highlighter-three",
		title: "Text Highlighter Three",
		description:
			"A Text Highlighter Three composition.",
		previewComponent: TextHighlighterThreePreview,
		previewHref: "/preview/fancy/text-highlighter/text-highlighter-three",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "text-highlighter-three",
		codeTree: createBlockCodeTree("text-highlighter-three", [
			{
				id: "text-highlighter-three",
				path: "src/lib/components/blocks/fancy/text-highlighter/text-highlighter-three/preview.svelte",
				lang: "svelte",
				code: textHighlighterTextHighlighterThreePreviewSource
			}
		])
	},	{
		id: "text-highlighter-four",
		title: "Text Highlighter Four",
		description:
			"A Text Highlighter Four composition.",
		previewComponent: TextHighlighterFourPreview,
		previewHref: "/preview/fancy/text-highlighter/text-highlighter-four",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "text-highlighter-four",
		codeTree: createBlockCodeTree("text-highlighter-four", [
			{
				id: "text-highlighter-four",
				path: "src/lib/components/blocks/fancy/text-highlighter/text-highlighter-four/programtic-control.svelte",
				lang: "svelte",
				code: textHighlighterTextHighlighterFourProgramticControlSource
			}
		])
	}
];

export function getTextHighlighterBlock(id: string) {
	return textHighlighterBlocks.find((block) => block.id === id);
}
