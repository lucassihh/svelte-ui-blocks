// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import LetterSwapOnePreview from "$lib/components/blocks/fancy/letter-swap-good/letter-swap-one/position-example.svelte";
import LetterSwapThreePreview from "$lib/components/blocks/fancy/letter-swap-good/letter-swap-three/rotation-example.svelte";
import LetterSwapTwoPreview from "$lib/components/blocks/fancy/letter-swap-good/letter-swap-two/preview.svelte";

// Raw
import letter3dSwapIndexSource from "$lib/components/ui/fancy-ui/letter-3d-swap/index.ts?raw";
import letterSwapGoodLetterSwapOnePositionExampleSource from "$lib/components/blocks/fancy/letter-swap-good/letter-swap-one/position-example.svelte?raw";
import letterSwapGoodLetterSwapThreeRotationExampleSource from "$lib/components/blocks/fancy/letter-swap-good/letter-swap-three/rotation-example.svelte?raw";
import letterSwapGoodLetterSwapTwoPreviewSource from "$lib/components/blocks/fancy/letter-swap-good/letter-swap-two/preview.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const letterSwapGoodBlocks: BlockShowcaseItem[] = [
	{
		id: "letter-swap-one",
		title: "Letter Swap One",
		description:
			"A Letter Swap One composition.",
		previewComponent: LetterSwapOnePreview,
		previewHref: "/preview/fancy/letter-swap-good/letter-swap-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "letter-swap-one",
		codeTree: createBlockCodeTree("letter-swap-one", [
			{
				id: "letter-swap-one",
				path: "src/lib/components/blocks/fancy/letter-swap-good/letter-swap-one/position-example.svelte",
				lang: "svelte",
				code: letterSwapGoodLetterSwapOnePositionExampleSource
			}
		])
	},	{
		id: "letter-swap-two",
		title: "Letter Swap Two",
		description:
			"A Letter Swap Two composition.",
		previewComponent: LetterSwapTwoPreview,
		previewHref: "/preview/fancy/letter-swap-good/letter-swap-two",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "letter-swap-two",
		codeTree: createBlockCodeTree("letter-swap-two", [
			{
				id: "letter-swap-two",
				path: "src/lib/components/blocks/fancy/letter-swap-good/letter-swap-two/preview.svelte",
				lang: "svelte",
				code: letterSwapGoodLetterSwapTwoPreviewSource
			}
		])
	},	{
		id: "letter-swap-three",
		title: "Letter Swap Three",
		description:
			"A Letter Swap Three composition.",
		previewComponent: LetterSwapThreePreview,
		previewHref: "/preview/fancy/letter-swap-good/letter-swap-three",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "letter-swap-three",
		codeTree: createBlockCodeTree("letter-swap-three", [
			{
				id: "letter-swap-three",
				path: "src/lib/components/blocks/fancy/letter-swap-good/letter-swap-three/rotation-example.svelte",
				lang: "svelte",
				code: letterSwapGoodLetterSwapThreeRotationExampleSource
			}
		])
	}
];

export function getLetterSwapGoodBlock(id: string) {
	return letterSwapGoodBlocks.find((block) => block.id === id);
}
