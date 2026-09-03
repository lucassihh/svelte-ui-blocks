// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import GlyphMatrixOnePreview from "$lib/components/blocks/magic/glyph-matrix/glyph-matrix-one/letters-example.svelte";
import GlyphMatrixTwoPreview from "$lib/components/blocks/magic/glyph-matrix/glyph-matrix-two/preview.svelte";

// Raw
import glyphMatrixGlyphMatrixOneLettersExampleSource from "$lib/components/blocks/magic/glyph-matrix/glyph-matrix-one/letters-example.svelte?raw";
import glyphMatrixGlyphMatrixTwoPreviewSource from "$lib/components/blocks/magic/glyph-matrix/glyph-matrix-two/preview.svelte?raw";
import glyphMatrixIndexSource from "$lib/components/ui/magic-ui/glyph-matrix/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const glyphMatrixBlocks: BlockShowcaseItem[] = [
	{
		id: "glyph-matrix-one",
		title: "Glyph Matrix One",
		description:
			"A Glyph Matrix One composition.",
		previewComponent: GlyphMatrixOnePreview,
		previewHref: "/preview/magic/glyph-matrix/glyph-matrix-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "glyph-matrix-one",
		codeTree: createBlockCodeTree("glyph-matrix-one", [
			{
				id: "glyph-matrix-one",
				path: "src/lib/components/blocks/magic/glyph-matrix/glyph-matrix-one/letters-example.svelte",
				lang: "svelte",
				code: glyphMatrixGlyphMatrixOneLettersExampleSource
			}
		])
	},	{
		id: "glyph-matrix-two",
		title: "Glyph Matrix Two",
		description:
			"A Glyph Matrix Two composition.",
		previewComponent: GlyphMatrixTwoPreview,
		previewHref: "/preview/magic/glyph-matrix/glyph-matrix-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "glyph-matrix-two",
		codeTree: createBlockCodeTree("glyph-matrix-two", [
			{
				id: "glyph-matrix-two",
				path: "src/lib/components/blocks/magic/glyph-matrix/glyph-matrix-two/preview.svelte",
				lang: "svelte",
				code: glyphMatrixGlyphMatrixTwoPreviewSource
			}
		])
	}
];

export function getGlyphMatrixBlock(id: string) {
	return glyphMatrixBlocks.find((block) => block.id === id);
}
