// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import SeparatorEightPreview from "$lib/components/blocks/magic/separator/separator-eight/signup-form.svelte";
import SeparatorFivePreview from "$lib/components/blocks/magic/separator/separator-five/label.svelte";
import SeparatorFourPreview from "$lib/components/blocks/magic/separator/separator-four/icon-label.svelte";
import SeparatorOnePreview from "$lib/components/blocks/magic/separator/separator-one/dashed-pill-label.svelte";
import SeparatorSevenPreview from "$lib/components/blocks/magic/separator/separator-seven/preview.svelte";
import SeparatorSixPreview from "$lib/components/blocks/magic/separator/separator-six/pill-label.svelte";
import SeparatorThreePreview from "$lib/components/blocks/magic/separator/separator-three/gradient.svelte";
import SeparatorTwoPreview from "$lib/components/blocks/magic/separator/separator-two/gradient-label.svelte";

// Raw
import inputIndexSource from "$lib/components/ui/input/index.ts?raw";
import labelIndexSource from "$lib/components/ui/label/index.ts?raw";
import separatorIndexSource from "$lib/components/ui/magic-ui/separator/index.ts?raw";
import separatorSeparatorEightSignupFormSource from "$lib/components/blocks/magic/separator/separator-eight/signup-form.svelte?raw";
import separatorSeparatorFiveLabelSource from "$lib/components/blocks/magic/separator/separator-five/label.svelte?raw";
import separatorSeparatorFourIconLabelSource from "$lib/components/blocks/magic/separator/separator-four/icon-label.svelte?raw";
import separatorSeparatorOneDashedPillLabelSource from "$lib/components/blocks/magic/separator/separator-one/dashed-pill-label.svelte?raw";
import separatorSeparatorSevenPreviewSource from "$lib/components/blocks/magic/separator/separator-seven/preview.svelte?raw";
import separatorSeparatorSixPillLabelSource from "$lib/components/blocks/magic/separator/separator-six/pill-label.svelte?raw";
import separatorSeparatorThreeGradientSource from "$lib/components/blocks/magic/separator/separator-three/gradient.svelte?raw";
import separatorSeparatorTwoGradientLabelSource from "$lib/components/blocks/magic/separator/separator-two/gradient-label.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const separatorBlocks: BlockShowcaseItem[] = [
	{
		id: "separator-one",
		title: "Separator One",
		description:
			"A Separator One composition.",
		previewComponent: SeparatorOnePreview,
		previewHref: "/preview/magic/separator/separator-one",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "separator-one",
		codeTree: createBlockCodeTree("separator-one", [
			{
				id: "separator-one",
				path: "src/lib/components/blocks/magic/separator/separator-one/dashed-pill-label.svelte",
				lang: "svelte",
				code: separatorSeparatorOneDashedPillLabelSource
			}
		])
	},	{
		id: "separator-two",
		title: "Separator Two",
		description:
			"A Separator Two composition.",
		previewComponent: SeparatorTwoPreview,
		previewHref: "/preview/magic/separator/separator-two",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "separator-two",
		codeTree: createBlockCodeTree("separator-two", [
			{
				id: "separator-two",
				path: "src/lib/components/blocks/magic/separator/separator-two/gradient-label.svelte",
				lang: "svelte",
				code: separatorSeparatorTwoGradientLabelSource
			}
		])
	},	{
		id: "separator-three",
		title: "Separator Three",
		description:
			"A Separator Three composition.",
		previewComponent: SeparatorThreePreview,
		previewHref: "/preview/magic/separator/separator-three",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "separator-three",
		codeTree: createBlockCodeTree("separator-three", [
			{
				id: "separator-three",
				path: "src/lib/components/blocks/magic/separator/separator-three/gradient.svelte",
				lang: "svelte",
				code: separatorSeparatorThreeGradientSource
			}
		])
	},	{
		id: "separator-four",
		title: "Separator Four",
		description:
			"A Separator Four composition.",
		previewComponent: SeparatorFourPreview,
		previewHref: "/preview/magic/separator/separator-four",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "separator-four",
		codeTree: createBlockCodeTree("separator-four", [
			{
				id: "separator-four",
				path: "src/lib/components/blocks/magic/separator/separator-four/icon-label.svelte",
				lang: "svelte",
				code: separatorSeparatorFourIconLabelSource
			}
		])
	},	{
		id: "separator-five",
		title: "Separator Five",
		description:
			"A Separator Five composition.",
		previewComponent: SeparatorFivePreview,
		previewHref: "/preview/magic/separator/separator-five",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "separator-five",
		codeTree: createBlockCodeTree("separator-five", [
			{
				id: "separator-five",
				path: "src/lib/components/blocks/magic/separator/separator-five/label.svelte",
				lang: "svelte",
				code: separatorSeparatorFiveLabelSource
			}
		])
	},	{
		id: "separator-six",
		title: "Separator Six",
		description:
			"A Separator Six composition.",
		previewComponent: SeparatorSixPreview,
		previewHref: "/preview/magic/separator/separator-six",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "separator-six",
		codeTree: createBlockCodeTree("separator-six", [
			{
				id: "separator-six",
				path: "src/lib/components/blocks/magic/separator/separator-six/pill-label.svelte",
				lang: "svelte",
				code: separatorSeparatorSixPillLabelSource
			}
		])
	},	{
		id: "separator-seven",
		title: "Separator Seven",
		description:
			"A Separator Seven composition.",
		previewComponent: SeparatorSevenPreview,
		previewHref: "/preview/magic/separator/separator-seven",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "separator-seven",
		codeTree: createBlockCodeTree("separator-seven", [
			{
				id: "separator-seven",
				path: "src/lib/components/blocks/magic/separator/separator-seven/preview.svelte",
				lang: "svelte",
				code: separatorSeparatorSevenPreviewSource
			}
		])
	},	{
		id: "separator-eight",
		title: "Separator Eight",
		description:
			"A Separator Eight composition.",
		previewComponent: SeparatorEightPreview,
		previewHref: "/preview/magic/separator/separator-eight",
		previewMode: "iframe",
		previewHeight: 520,
		installId: "separator-eight",
		codeTree: createBlockCodeTree("separator-eight", [
			{
				id: "separator-eight",
				path: "src/lib/components/blocks/magic/separator/separator-eight/signup-form.svelte",
				lang: "svelte",
				code: separatorSeparatorEightSignupFormSource
			},
			...buttonFiles
		])
	}
];

export function getSeparatorBlock(id: string) {
	return separatorBlocks.find((block) => block.id === id);
}
