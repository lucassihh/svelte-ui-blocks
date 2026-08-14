import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-three";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-three";
import TestimonialFivePreview from "$lib/components/efferd-ui/testimonial/testimonial-five/testimonial-card.svelte";
import TestimonialFourPreview from "$lib/components/efferd-ui/testimonial/testimonial-four/testimonial-card.svelte";
import TestimonialOnePreview from "$lib/components/efferd-ui/testimonial/testimonial-one/testimonial.svelte";
import TestimonialThreePreview from "$lib/components/efferd-ui/testimonial/testimonial-three/testimonial-card.svelte";
import TestimonialTwoPreview from "$lib/components/efferd-ui/testimonial/testimonial-two/testimonial.svelte";

import avatarFallbackSource from "$lib/components/ui/avatar/avatar-fallback.svelte?raw";
import avatarImageSource from "$lib/components/ui/avatar/avatar-image.svelte?raw";
import avatarIndexSource from "$lib/components/ui/avatar/index.ts?raw";
import avatarSource from "$lib/components/ui/avatar/avatar.svelte?raw";
import decorIconIndexSource from "$lib/components/ui/decor-icon/index.ts?raw";
import decorIconSource from "$lib/components/ui/decor-icon/decor-icon.svelte?raw";
import dividerIndexSource from "$lib/components/ui/full-width-divider/index.ts?raw";
import dividerSource from "$lib/components/ui/full-width-divider/full-width-divider.svelte?raw";
import gridFillerIndexSource from "$lib/components/ui/grid-filler/index.ts?raw";
import gridFillerSource from "$lib/components/ui/grid-filler/grid-filler.svelte?raw";
import gridPatternIndexSource from "$lib/components/ui/grid-pattern/index.ts?raw";
import gridPatternSource from "$lib/components/ui/grid-pattern/grid-pattern.svelte?raw";
import maskLineSource from "$lib/components/ui/mask-line/mask-line.svelte?raw";
import testimonialTestimonialFiveTestimonialCardSource from "$lib/components/efferd-ui/testimonial/testimonial-five/testimonial-card.svelte?raw";
import testimonialTestimonialFiveTestimonialSource from "$lib/components/efferd-ui/testimonial/testimonial-five/testimonial.svelte?raw";
import testimonialTestimonialFourTestimonialCardSource from "$lib/components/efferd-ui/testimonial/testimonial-four/testimonial-card.svelte?raw";
import testimonialTestimonialFourTestimonialSource from "$lib/components/efferd-ui/testimonial/testimonial-four/testimonial.svelte?raw";
import testimonialTestimonialOneTestimonialSource from "$lib/components/efferd-ui/testimonial/testimonial-one/testimonial.svelte?raw";
import testimonialTestimonialThreeTestimonialCardSource from "$lib/components/efferd-ui/testimonial/testimonial-three/testimonial-card.svelte?raw";
import testimonialTestimonialThreeTestimonialSource from "$lib/components/efferd-ui/testimonial/testimonial-three/testimonial.svelte?raw";
import testimonialTestimonialTwoTestimonialSource from "$lib/components/efferd-ui/testimonial/testimonial-two/testimonial.svelte?raw";

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

export const testimonialBlocks: BlockShowcaseItem[] = [
	{
		id: "testimonial-five",
		title: "Testimonial Five",
		description: "A Testimonial Five composition.",
		previewComponent: TestimonialFivePreview,
		previewHref: "/preview/efferd-ui/testimonial/testimonial-five",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "testimonial-five",
		codeTree: createBlockCodeTree("testimonial-five:preview", [
			{
				id: "testimonial-five:testimonial-card",
				path: "components/efferd/testimonial/testimonial-five/testimonial-card.svelte",
				lang: "svelte",
				code: testimonialTestimonialFiveTestimonialCardSource
			},
			{
				id: "testimonial-five:testimonial",
				path: "components/efferd/testimonial/testimonial-five/testimonial.svelte",
				lang: "svelte",
				code: testimonialTestimonialFiveTestimonialSource
			},
			...dividerFiles
		])
	},
	{
		id: "testimonial-four",
		title: "Testimonial Four",
		description: "A Testimonial Four composition.",
		previewComponent: TestimonialFourPreview,
		previewHref: "/preview/efferd-ui/testimonial/testimonial-four",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "testimonial-four",
		codeTree: createBlockCodeTree("testimonial-four:preview", [
			{
				id: "testimonial-four:testimonial-card",
				path: "components/efferd/testimonial/testimonial-four/testimonial-card.svelte",
				lang: "svelte",
				code: testimonialTestimonialFourTestimonialCardSource
			},
			{
				id: "testimonial-four:testimonial",
				path: "components/efferd/testimonial/testimonial-four/testimonial.svelte",
				lang: "svelte",
				code: testimonialTestimonialFourTestimonialSource
			},
			...dividerFiles
		])
	},
	{
		id: "testimonial-one",
		title: "Testimonial One",
		description: "A Testimonial One composition.",
		previewComponent: TestimonialOnePreview,
		previewHref: "/preview/efferd-ui/testimonial/testimonial-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "testimonial-one",
		codeTree: createBlockCodeTree("testimonial-one:preview", [
			{
				id: "testimonial-one:testimonial",
				path: "components/efferd/testimonial/testimonial-one/testimonial.svelte",
				lang: "svelte",
				code: testimonialTestimonialOneTestimonialSource
			}
		])
	},
	{
		id: "testimonial-three",
		title: "Testimonial Three",
		description: "A Testimonial Three composition.",
		previewComponent: TestimonialThreePreview,
		previewHref: "/preview/efferd-ui/testimonial/testimonial-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "testimonial-three",
		codeTree: createBlockCodeTree("testimonial-three:preview", [
			{
				id: "testimonial-three:testimonial-card",
				path: "components/efferd/testimonial/testimonial-three/testimonial-card.svelte",
				lang: "svelte",
				code: testimonialTestimonialThreeTestimonialCardSource
			},
			{
				id: "testimonial-three:testimonial",
				path: "components/efferd/testimonial/testimonial-three/testimonial.svelte",
				lang: "svelte",
				code: testimonialTestimonialThreeTestimonialSource
			},
			...decorIconFiles
		])
	},
	{
		id: "testimonial-two",
		title: "Testimonial Two",
		description: "A Testimonial Two composition.",
		previewComponent: TestimonialTwoPreview,
		previewHref: "/preview/efferd-ui/testimonial/testimonial-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "testimonial-two",
		codeTree: createBlockCodeTree("testimonial-two:preview", [
			{
				id: "testimonial-two:testimonial",
				path: "components/efferd/testimonial/testimonial-two/testimonial.svelte",
				lang: "svelte",
				code: testimonialTestimonialTwoTestimonialSource
			}
		])
	}
];

export function getTestimonialBlock(id: string) {
	return testimonialBlocks.find((block) => block.id === id);
}
