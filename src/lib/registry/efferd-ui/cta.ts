import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-three";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-three";
import CtaFivePreview from "$lib/components/efferd-ui/cta/cta-five/cta.svelte";
import CtaFourPreview from "$lib/components/efferd-ui/cta/cta-four/cta.svelte";
import CtaOnePreview from "$lib/components/efferd-ui/cta/cta-one/cta.svelte";
import CtaThreePreview from "$lib/components/efferd-ui/cta/cta-three/cta.svelte";
import CtaTwoPreview from "$lib/components/efferd-ui/cta/cta-two/cta.svelte";

import ctaCtaFiveCtaSource from "$lib/components/efferd-ui/cta/cta-five/cta.svelte?raw";
import ctaCtaFourCtaSource from "$lib/components/efferd-ui/cta/cta-four/cta.svelte?raw";
import ctaCtaOneCtaSource from "$lib/components/efferd-ui/cta/cta-one/cta.svelte?raw";
import ctaCtaThreeCtaSource from "$lib/components/efferd-ui/cta/cta-three/cta.svelte?raw";
import ctaCtaTwoCtaSource from "$lib/components/efferd-ui/cta/cta-two/cta.svelte?raw";
import decorIconIndexSource from "$lib/components/ui/decor-icon/index.ts?raw";
import decorIconSource from "$lib/components/ui/decor-icon/decor-icon.svelte?raw";
import dividerIndexSource from "$lib/components/ui/full-width-divider/index.ts?raw";
import dividerSource from "$lib/components/ui/full-width-divider/full-width-divider.svelte?raw";
import inputGroupAddonSource from "$lib/components/ui/input-group/input-group-addon.svelte?raw";
import inputGroupButtonSource from "$lib/components/ui/input-group/input-group-button.svelte?raw";
import inputGroupIndexSource from "$lib/components/ui/input-group/index.ts?raw";
import inputGroupInputSource from "$lib/components/ui/input-group/input-group-input.svelte?raw";
import inputGroupSource from "$lib/components/ui/input-group/input-group.svelte?raw";
import inputGroupTextSource from "$lib/components/ui/input-group/input-group-text.svelte?raw";
import inputGroupTextareaSource from "$lib/components/ui/input-group/input-group-textarea.svelte?raw";

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
		id: "shared:decor-icon",
		path: "components/ui/decor-icon/decor-icon.svelte",
		lang: "svelte" as const,
		code: decorIconSource
	},
	{
		id: "shared:decor-icon-index",
		path: "components/ui/decor-icon/index.ts",
		lang: "typescript" as const,
		code: decorIconIndexSource
	}
];
const dividerFiles = [
	{
		id: "shared:divider",
		path: "components/ui/full-width-divider/full-width-divider.svelte",
		lang: "svelte" as const,
		code: dividerSource
	},
	{
		id: "shared:divider-index",
		path: "components/ui/full-width-divider/index.ts",
		lang: "typescript" as const,
		code: dividerIndexSource
	}
];

export const ctaBlocks: BlockShowcaseItem[] = [
	{
		id: "cta-five",
		title: "Cta Five",
		description: "A Cta Five composition.",
		previewComponent: CtaFivePreview,
		previewHref: "/preview/efferd-ui/cta/cta-five",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "cta-five",
		codeTree: createBlockCodeTree("cta-five:preview", [
			{
				id: "cta-five:cta",
				path: "components/efferd/cta/cta-five/cta.svelte",
				lang: "svelte",
				code: ctaCtaFiveCtaSource
			},
			...buttonFiles,
			...dividerFiles
		])
	},
	{
		id: "cta-four",
		title: "Cta Four",
		description: "A Cta Four composition.",
		previewComponent: CtaFourPreview,
		previewHref: "/preview/efferd-ui/cta/cta-four",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "cta-four",
		codeTree: createBlockCodeTree("cta-four:preview", [
			{
				id: "cta-four:cta",
				path: "components/efferd/cta/cta-four/cta.svelte",
				lang: "svelte",
				code: ctaCtaFourCtaSource
			},
			...buttonFiles
		])
	},
	{
		id: "cta-one",
		title: "Cta One",
		description: "A Cta One composition.",
		previewComponent: CtaOnePreview,
		previewHref: "/preview/efferd-ui/cta/cta-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "cta-one",
		codeTree: createBlockCodeTree("cta-one:preview", [
			{
				id: "cta-one:cta",
				path: "components/efferd/cta/cta-one/cta.svelte",
				lang: "svelte",
				code: ctaCtaOneCtaSource
			},
			...buttonFiles,
			...dividerFiles
		])
	},
	{
		id: "cta-three",
		title: "Cta Three",
		description: "A Cta Three composition.",
		previewComponent: CtaThreePreview,
		previewHref: "/preview/efferd-ui/cta/cta-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "cta-three",
		codeTree: createBlockCodeTree("cta-three:preview", [
			{
				id: "cta-three:cta",
				path: "components/efferd/cta/cta-three/cta.svelte",
				lang: "svelte",
				code: ctaCtaThreeCtaSource
			},
			...buttonFiles,
			...decorIconFiles
		])
	},
	{
		id: "cta-two",
		title: "Cta Two",
		description: "A Cta Two composition.",
		previewComponent: CtaTwoPreview,
		previewHref: "/preview/efferd-ui/cta/cta-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "cta-two",
		codeTree: createBlockCodeTree("cta-two:preview", [
			{
				id: "cta-two:cta",
				path: "components/efferd/cta/cta-two/cta.svelte",
				lang: "svelte",
				code: ctaCtaTwoCtaSource
			},
			...buttonFiles,
			...dividerFiles
		])
	}
];

export function getCtaBlock(id: string) {
	return ctaBlocks.find((block) => block.id === id);
}
