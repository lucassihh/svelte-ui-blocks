// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import TypingAnimationFivePreview from "$lib/components/blocks/magic/typing-animation/typing-animation-five/typing-animation-custom-speed.svelte";
import TypingAnimationFourPreview from "$lib/components/blocks/magic/typing-animation/typing-animation-four/single-play.svelte";
import TypingAnimationOnePreview from "$lib/components/blocks/magic/typing-animation/typing-animation-one/cursor-blinking.svelte";
import TypingAnimationSevenPreview from "$lib/components/blocks/magic/typing-animation/typing-animation-seven/typing-animation-start-on-view.svelte";
import TypingAnimationSixPreview from "$lib/components/blocks/magic/typing-animation/typing-animation-six/typing-animation-multiple-words-with-logo.svelte";
import TypingAnimationThreePreview from "$lib/components/blocks/magic/typing-animation/typing-animation-three/preview.svelte";
import TypingAnimationTwoPreview from "$lib/components/blocks/magic/typing-animation/typing-animation-two/cursor-style.svelte";

// Raw
import typingAnimationIndexSource from "$lib/components/ui/magic-ui/typing-animation/index.ts?raw";
import typingAnimationTypingAnimationFiveTypingAnimationCustomSpeedSource from "$lib/components/blocks/magic/typing-animation/typing-animation-five/typing-animation-custom-speed.svelte?raw";
import typingAnimationTypingAnimationFourSinglePlaySource from "$lib/components/blocks/magic/typing-animation/typing-animation-four/single-play.svelte?raw";
import typingAnimationTypingAnimationOneCursorBlinkingSource from "$lib/components/blocks/magic/typing-animation/typing-animation-one/cursor-blinking.svelte?raw";
import typingAnimationTypingAnimationSevenTypingAnimationStartOnViewSource from "$lib/components/blocks/magic/typing-animation/typing-animation-seven/typing-animation-start-on-view.svelte?raw";
import typingAnimationTypingAnimationSixTypingAnimationMultipleWordsWithLogoSource from "$lib/components/blocks/magic/typing-animation/typing-animation-six/typing-animation-multiple-words-with-logo.svelte?raw";
import typingAnimationTypingAnimationThreePreviewSource from "$lib/components/blocks/magic/typing-animation/typing-animation-three/preview.svelte?raw";
import typingAnimationTypingAnimationTwoCursorStyleSource from "$lib/components/blocks/magic/typing-animation/typing-animation-two/cursor-style.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const typingAnimationBlocks: BlockShowcaseItem[] = [
	{
		id: "typing-animation-one",
		title: "Typing Animation One",
		description:
			"A Typing Animation One composition.",
		previewComponent: TypingAnimationOnePreview,
		previewHref: "/preview/magic/typing-animation/typing-animation-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "typing-animation-one",
		codeTree: createBlockCodeTree("typing-animation-one", [
			{
				id: "typing-animation-one",
				path: "src/lib/components/blocks/magic/typing-animation/typing-animation-one/cursor-blinking.svelte",
				lang: "svelte",
				code: typingAnimationTypingAnimationOneCursorBlinkingSource
			}
		])
	},	{
		id: "typing-animation-two",
		title: "Typing Animation Two",
		description:
			"A Typing Animation Two composition.",
		previewComponent: TypingAnimationTwoPreview,
		previewHref: "/preview/magic/typing-animation/typing-animation-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "typing-animation-two",
		codeTree: createBlockCodeTree("typing-animation-two", [
			{
				id: "typing-animation-two",
				path: "src/lib/components/blocks/magic/typing-animation/typing-animation-two/cursor-style.svelte",
				lang: "svelte",
				code: typingAnimationTypingAnimationTwoCursorStyleSource
			}
		])
	},	{
		id: "typing-animation-three",
		title: "Typing Animation Three",
		description:
			"A Typing Animation Three composition.",
		previewComponent: TypingAnimationThreePreview,
		previewHref: "/preview/magic/typing-animation/typing-animation-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "typing-animation-three",
		codeTree: createBlockCodeTree("typing-animation-three", [
			{
				id: "typing-animation-three",
				path: "src/lib/components/blocks/magic/typing-animation/typing-animation-three/preview.svelte",
				lang: "svelte",
				code: typingAnimationTypingAnimationThreePreviewSource
			}
		])
	},	{
		id: "typing-animation-four",
		title: "Typing Animation Four",
		description:
			"A Typing Animation Four composition.",
		previewComponent: TypingAnimationFourPreview,
		previewHref: "/preview/magic/typing-animation/typing-animation-four",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "typing-animation-four",
		codeTree: createBlockCodeTree("typing-animation-four", [
			{
				id: "typing-animation-four",
				path: "src/lib/components/blocks/magic/typing-animation/typing-animation-four/single-play.svelte",
				lang: "svelte",
				code: typingAnimationTypingAnimationFourSinglePlaySource
			}
		])
	},	{
		id: "typing-animation-five",
		title: "Typing Animation Five",
		description:
			"A Typing Animation Five composition.",
		previewComponent: TypingAnimationFivePreview,
		previewHref: "/preview/magic/typing-animation/typing-animation-five",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "typing-animation-five",
		codeTree: createBlockCodeTree("typing-animation-five", [
			{
				id: "typing-animation-five",
				path: "src/lib/components/blocks/magic/typing-animation/typing-animation-five/typing-animation-custom-speed.svelte",
				lang: "svelte",
				code: typingAnimationTypingAnimationFiveTypingAnimationCustomSpeedSource
			}
		])
	},	{
		id: "typing-animation-six",
		title: "Typing Animation Six",
		description:
			"A Typing Animation Six composition.",
		previewComponent: TypingAnimationSixPreview,
		previewHref: "/preview/magic/typing-animation/typing-animation-six",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "typing-animation-six",
		codeTree: createBlockCodeTree("typing-animation-six", [
			{
				id: "typing-animation-six",
				path: "src/lib/components/blocks/magic/typing-animation/typing-animation-six/typing-animation-multiple-words-with-logo.svelte",
				lang: "svelte",
				code: typingAnimationTypingAnimationSixTypingAnimationMultipleWordsWithLogoSource
			}
		])
	},	{
		id: "typing-animation-seven",
		title: "Typing Animation Seven",
		description:
			"A Typing Animation Seven composition.",
		previewComponent: TypingAnimationSevenPreview,
		previewHref: "/preview/magic/typing-animation/typing-animation-seven",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "typing-animation-seven",
		codeTree: createBlockCodeTree("typing-animation-seven", [
			{
				id: "typing-animation-seven",
				path: "src/lib/components/blocks/magic/typing-animation/typing-animation-seven/typing-animation-start-on-view.svelte",
				lang: "svelte",
				code: typingAnimationTypingAnimationSevenTypingAnimationStartOnViewSource
			}
		])
	}
];

export function getTypingAnimationBlock(id: string) {
	return typingAnimationBlocks.find((block) => block.id === id);
}
