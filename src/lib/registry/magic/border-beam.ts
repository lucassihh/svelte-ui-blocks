// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import BorderBeamFourPreview from "$lib/components/blocks/magic/border-beam/border-beam-four/preview.svelte";
import BorderBeamOnePreview from "$lib/components/blocks/magic/border-beam/border-beam-one/border-beam-reverse.svelte";
import BorderBeamThreePreview from "$lib/components/blocks/magic/border-beam/border-beam-three/border-beam-spring.svelte";
import BorderBeamTwoPreview from "$lib/components/blocks/magic/border-beam/border-beam-two/border-beam-two.svelte";

// Raw
import borderBeamBorderBeamFourPreviewSource from "$lib/components/blocks/magic/border-beam/border-beam-four/preview.svelte?raw";
import borderBeamBorderBeamOneBorderBeamReverseSource from "$lib/components/blocks/magic/border-beam/border-beam-one/border-beam-reverse.svelte?raw";
import borderBeamBorderBeamThreeBorderBeamSpringSource from "$lib/components/blocks/magic/border-beam/border-beam-three/border-beam-spring.svelte?raw";
import borderBeamBorderBeamTwoSource from "$lib/components/blocks/magic/border-beam/border-beam-two/border-beam-two.svelte?raw";
import borderBeamIndexSource from "$lib/components/ui/magic-ui/border-beam/index.ts?raw";
import inputSource from "$lib/components/ui/input/input.svelte?raw";
import labelSource from "$lib/components/ui/label/label.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const borderBeamBlocks: BlockShowcaseItem[] = [
	{
		id: "border-beam-one",
		title: "Border Beam One",
		description:
			"A Border Beam One composition.",
		previewComponent: BorderBeamOnePreview,
		previewHref: "/preview/magic/border-beam/border-beam-one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "border-beam-one",
		codeTree: createBlockCodeTree("border-beam-one", [
			{
				id: "border-beam-one",
				path: "src/lib/components/blocks/magic/border-beam/border-beam-one/border-beam-reverse.svelte",
				lang: "svelte",
				code: borderBeamBorderBeamOneBorderBeamReverseSource
			},
			...buttonFiles
		])
	},	{
		id: "border-beam-two",
		title: "Border Beam Two",
		description:
			"A Border Beam Two composition.",
		previewComponent: BorderBeamTwoPreview,
		previewHref: "/preview/magic/border-beam/border-beam-two",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "border-beam-two",
		codeTree: createBlockCodeTree("border-beam-two", [
			{
				id: "border-beam-two",
				path: "src/lib/components/blocks/magic/border-beam/border-beam-two/border-beam-two.svelte",
				lang: "svelte",
				code: borderBeamBorderBeamTwoSource
			},
			...buttonFiles
		])
	},	{
		id: "border-beam-three",
		title: "Border Beam Three",
		description:
			"A Border Beam Three composition.",
		previewComponent: BorderBeamThreePreview,
		previewHref: "/preview/magic/border-beam/border-beam-three",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "border-beam-three",
		codeTree: createBlockCodeTree("border-beam-three", [
			{
				id: "border-beam-three",
				path: "src/lib/components/blocks/magic/border-beam/border-beam-three/border-beam-spring.svelte",
				lang: "svelte",
				code: borderBeamBorderBeamThreeBorderBeamSpringSource
			},
			...buttonFiles
		])
	},	{
		id: "border-beam-four",
		title: "Border Beam Four",
		description:
			"A Border Beam Four composition.",
		previewComponent: BorderBeamFourPreview,
		previewHref: "/preview/magic/border-beam/border-beam-four",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "border-beam-four",
		codeTree: createBlockCodeTree("border-beam-four", [
			{
				id: "border-beam-four",
				path: "src/lib/components/blocks/magic/border-beam/border-beam-four/preview.svelte",
				lang: "svelte",
				code: borderBeamBorderBeamFourPreviewSource
			},
			...buttonFiles
		])
	}
];

export function getBorderBeamBlock(id: string) {
	return borderBeamBlocks.find((block) => block.id === id);
}
