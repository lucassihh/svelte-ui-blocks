// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import HexagonPatternFourPreview from "$lib/components/blocks/magic/hexagon-pattern/hexagon-pattern-four/spacing-example.svelte";
import HexagonPatternOnePreview from "$lib/components/blocks/magic/hexagon-pattern/hexagon-pattern-one/dashed-stroke-example.svelte";
import HexagonPatternThreePreview from "$lib/components/blocks/magic/hexagon-pattern/hexagon-pattern-three/preview.svelte";
import HexagonPatternTwoPreview from "$lib/components/blocks/magic/hexagon-pattern/hexagon-pattern-two/linear-gradient-example.svelte";

// Raw
import hexagonPatternHexagonPatternFourSpacingExampleSource from "$lib/components/blocks/magic/hexagon-pattern/hexagon-pattern-four/spacing-example.svelte?raw";
import hexagonPatternHexagonPatternOneDashedStrokeExampleSource from "$lib/components/blocks/magic/hexagon-pattern/hexagon-pattern-one/dashed-stroke-example.svelte?raw";
import hexagonPatternHexagonPatternThreePreviewSource from "$lib/components/blocks/magic/hexagon-pattern/hexagon-pattern-three/preview.svelte?raw";
import hexagonPatternHexagonPatternTwoLinearGradientExampleSource from "$lib/components/blocks/magic/hexagon-pattern/hexagon-pattern-two/linear-gradient-example.svelte?raw";
import hexagonPatternIndexSource from "$lib/components/ui/magic-ui/hexagon-pattern/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const hexagonPatternBlocks: BlockShowcaseItem[] = [
	{
		id: "hexagon-pattern-one",
		title: "Hexagon Pattern One",
		description:
			"A Hexagon Pattern One composition.",
		previewComponent: HexagonPatternOnePreview,
		previewHref: "/preview/magic/hexagon-pattern/hexagon-pattern-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "hexagon-pattern-one",
		codeTree: createBlockCodeTree("hexagon-pattern-one", [
			{
				id: "hexagon-pattern-one",
				path: "src/lib/components/blocks/magic/hexagon-pattern/hexagon-pattern-one/dashed-stroke-example.svelte",
				lang: "svelte",
				code: hexagonPatternHexagonPatternOneDashedStrokeExampleSource
			}
		])
	},	{
		id: "hexagon-pattern-two",
		title: "Hexagon Pattern Two",
		description:
			"A Hexagon Pattern Two composition.",
		previewComponent: HexagonPatternTwoPreview,
		previewHref: "/preview/magic/hexagon-pattern/hexagon-pattern-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "hexagon-pattern-two",
		codeTree: createBlockCodeTree("hexagon-pattern-two", [
			{
				id: "hexagon-pattern-two",
				path: "src/lib/components/blocks/magic/hexagon-pattern/hexagon-pattern-two/linear-gradient-example.svelte",
				lang: "svelte",
				code: hexagonPatternHexagonPatternTwoLinearGradientExampleSource
			}
		])
	},	{
		id: "hexagon-pattern-three",
		title: "Hexagon Pattern Three",
		description:
			"A Hexagon Pattern Three composition.",
		previewComponent: HexagonPatternThreePreview,
		previewHref: "/preview/magic/hexagon-pattern/hexagon-pattern-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "hexagon-pattern-three",
		codeTree: createBlockCodeTree("hexagon-pattern-three", [
			{
				id: "hexagon-pattern-three",
				path: "src/lib/components/blocks/magic/hexagon-pattern/hexagon-pattern-three/preview.svelte",
				lang: "svelte",
				code: hexagonPatternHexagonPatternThreePreviewSource
			}
		])
	},	{
		id: "hexagon-pattern-four",
		title: "Hexagon Pattern Four",
		description:
			"A Hexagon Pattern Four composition.",
		previewComponent: HexagonPatternFourPreview,
		previewHref: "/preview/magic/hexagon-pattern/hexagon-pattern-four",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "hexagon-pattern-four",
		codeTree: createBlockCodeTree("hexagon-pattern-four", [
			{
				id: "hexagon-pattern-four",
				path: "src/lib/components/blocks/magic/hexagon-pattern/hexagon-pattern-four/spacing-example.svelte",
				lang: "svelte",
				code: hexagonPatternHexagonPatternFourSpacingExampleSource
			}
		])
	}
];

export function getHexagonPatternBlock(id: string) {
	return hexagonPatternBlocks.find((block) => block.id === id);
}
