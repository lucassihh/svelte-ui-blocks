// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import ScrambleInFourPreview from "$lib/components/blocks/fancy/scramble-in/scramble-in-four/special-characters-example.svelte";
import ScrambleInOnePreview from "$lib/components/blocks/fancy/scramble-in/scramble-in-one/bind-this-controls-example.svelte";
import ScrambleInThreePreview from "$lib/components/blocks/fancy/scramble-in/scramble-in-three/preview.svelte";
import ScrambleInTwoPreview from "$lib/components/blocks/fancy/scramble-in/scramble-in-two/delay-and-speed-example.svelte";

// Raw
import scrambleInIndexSource from "$lib/components/ui/fancy-ui/scramble-in/index.ts?raw";
import scrambleInScrambleInFourSpecialCharactersExampleSource from "$lib/components/blocks/fancy/scramble-in/scramble-in-four/special-characters-example.svelte?raw";
import scrambleInScrambleInOneBindThisControlsExampleSource from "$lib/components/blocks/fancy/scramble-in/scramble-in-one/bind-this-controls-example.svelte?raw";
import scrambleInScrambleInThreePreviewSource from "$lib/components/blocks/fancy/scramble-in/scramble-in-three/preview.svelte?raw";
import scrambleInScrambleInTwoDelayAndSpeedExampleSource from "$lib/components/blocks/fancy/scramble-in/scramble-in-two/delay-and-speed-example.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const scrambleInBlocks: BlockShowcaseItem[] = [
	{
		id: "scramble-in-one",
		title: "Scramble In One",
		description:
			"A Scramble In One composition.",
		previewComponent: ScrambleInOnePreview,
		previewHref: "/preview/fancy/scramble-in/scramble-in-one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "scramble-in-one",
		codeTree: createBlockCodeTree("scramble-in-one", [
			{
				id: "scramble-in-one",
				path: "src/lib/components/blocks/fancy/scramble-in/scramble-in-one/bind-this-controls-example.svelte",
				lang: "svelte",
				code: scrambleInScrambleInOneBindThisControlsExampleSource
			},
			...buttonFiles
		])
	},	{
		id: "scramble-in-two",
		title: "Scramble In Two",
		description:
			"A Scramble In Two composition.",
		previewComponent: ScrambleInTwoPreview,
		previewHref: "/preview/fancy/scramble-in/scramble-in-two",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "scramble-in-two",
		codeTree: createBlockCodeTree("scramble-in-two", [
			{
				id: "scramble-in-two",
				path: "src/lib/components/blocks/fancy/scramble-in/scramble-in-two/delay-and-speed-example.svelte",
				lang: "svelte",
				code: scrambleInScrambleInTwoDelayAndSpeedExampleSource
			}
		])
	},	{
		id: "scramble-in-three",
		title: "Scramble In Three",
		description:
			"A Scramble In Three composition.",
		previewComponent: ScrambleInThreePreview,
		previewHref: "/preview/fancy/scramble-in/scramble-in-three",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "scramble-in-three",
		codeTree: createBlockCodeTree("scramble-in-three", [
			{
				id: "scramble-in-three",
				path: "src/lib/components/blocks/fancy/scramble-in/scramble-in-three/preview.svelte",
				lang: "svelte",
				code: scrambleInScrambleInThreePreviewSource
			}
		])
	},	{
		id: "scramble-in-four",
		title: "Scramble In Four",
		description:
			"A Scramble In Four composition.",
		previewComponent: ScrambleInFourPreview,
		previewHref: "/preview/fancy/scramble-in/scramble-in-four",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "scramble-in-four",
		codeTree: createBlockCodeTree("scramble-in-four", [
			{
				id: "scramble-in-four",
				path: "src/lib/components/blocks/fancy/scramble-in/scramble-in-four/special-characters-example.svelte",
				lang: "svelte",
				code: scrambleInScrambleInFourSpecialCharactersExampleSource
			}
		])
	}
];

export function getScrambleInBlock(id: string) {
	return scrambleInBlocks.find((block) => block.id === id);
}
