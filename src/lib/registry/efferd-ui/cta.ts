// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import CtaFivePreview from "$lib/components/blocks/efferd-ui/cta/cta-five/cta.svelte";
import CtaFourPreview from "$lib/components/blocks/efferd-ui/cta/cta-four/cta.svelte";
import CtaOnePreview from "$lib/components/blocks/efferd-ui/cta/cta-one/cta.svelte";
import CtaThreePreview from "$lib/components/blocks/efferd-ui/cta/cta-three/cta.svelte";
import CtaTwoPreview from "$lib/components/blocks/efferd-ui/cta/cta-two/cta.svelte";

// Raw
import ctaCtaFiveCtaSource from "$lib/components/blocks/efferd-ui/cta/cta-five/cta.svelte?raw";
import ctaCtaFourCtaSource from "$lib/components/blocks/efferd-ui/cta/cta-four/cta.svelte?raw";
import ctaCtaOneCtaSource from "$lib/components/blocks/efferd-ui/cta/cta-one/cta.svelte?raw";
import ctaCtaThreeCtaSource from "$lib/components/blocks/efferd-ui/cta/cta-three/cta.svelte?raw";
import ctaCtaTwoCtaSource from "$lib/components/blocks/efferd-ui/cta/cta-two/cta.svelte?raw";
import decorIconIndexSource from "$lib/components/ui/decor-icon/index.ts?raw";
import dividerIndexSource from "$lib/components/ui/full-width-divider/index.ts?raw";
import inputGroupIndexSource from "$lib/components/ui/input-group/index.ts?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];
const decorIconFiles = [
	{
		id: "shared:decor-icon-index",
		path: "components/ui/decor-icon/index.ts",
		lang: "typescript" as const,
		code: decorIconIndexSource
	}
];
const dividerFiles = [
	{
		id: "shared:divider-index",
		path: "components/ui/full-width-divider/index.ts",
		lang: "typescript" as const,
		code: dividerIndexSource
	}
];

export const ctaBlocks: BlockShowcaseItem[] = [
	{
		id: "cta-one",
		title: "Cta One",
		description:
			"A Cta One composition.",
		previewComponent: CtaOnePreview,
		previewHref: "/preview/efferd-ui/cta/cta-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "cta-one",
		codeTree: createBlockCodeTree("cta-one", [
			{
				id: "cta-one",
				path: "src/lib/components/blocks/efferd-ui/cta/cta-one/cta.svelte",
				lang: "svelte",
				code: ctaCtaOneCtaSource
			},
			...buttonFiles,
			...dividerFiles
		])
	},	{
		id: "cta-two",
		title: "Cta Two",
		description:
			"A Cta Two composition.",
		previewComponent: CtaTwoPreview,
		previewHref: "/preview/efferd-ui/cta/cta-two",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "cta-two",
		codeTree: createBlockCodeTree("cta-two", [
			{
				id: "cta-two",
				path: "src/lib/components/blocks/efferd-ui/cta/cta-two/cta.svelte",
				lang: "svelte",
				code: ctaCtaTwoCtaSource
			},
			...buttonFiles,
			...dividerFiles
		])
	},	{
		id: "cta-three",
		title: "Cta Three",
		description:
			"A Cta Three composition.",
		previewComponent: CtaThreePreview,
		previewHref: "/preview/efferd-ui/cta/cta-three",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "cta-three",
		codeTree: createBlockCodeTree("cta-three", [
			{
				id: "cta-three",
				path: "src/lib/components/blocks/efferd-ui/cta/cta-three/cta.svelte",
				lang: "svelte",
				code: ctaCtaThreeCtaSource
			},
			...buttonFiles,
			...decorIconFiles
		])
	},	{
		id: "cta-four",
		title: "Cta Four",
		description:
			"A Cta Four composition.",
		previewComponent: CtaFourPreview,
		previewHref: "/preview/efferd-ui/cta/cta-four",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "cta-four",
		codeTree: createBlockCodeTree("cta-four", [
			{
				id: "cta-four",
				path: "src/lib/components/blocks/efferd-ui/cta/cta-four/cta.svelte",
				lang: "svelte",
				code: ctaCtaFourCtaSource
			},
			...buttonFiles
		])
	},	{
		id: "cta-five",
		title: "Cta Five",
		description:
			"A Cta Five composition.",
		previewComponent: CtaFivePreview,
		previewHref: "/preview/efferd-ui/cta/cta-five",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "cta-five",
		codeTree: createBlockCodeTree("cta-five", [
			{
				id: "cta-five",
				path: "src/lib/components/blocks/efferd-ui/cta/cta-five/cta.svelte",
				lang: "svelte",
				code: ctaCtaFiveCtaSource
			},
			...buttonFiles,
			...dividerFiles
		])
	}
];

export function getCtaBlock(id: string) {
	return ctaBlocks.find((block) => block.id === id);
}
