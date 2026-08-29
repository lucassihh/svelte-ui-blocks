// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import TestimonialFivePreview from "$lib/components/blocks/efferd/testimonial/testimonial-five/testimonial-card.svelte";
import TestimonialFourPreview from "$lib/components/blocks/efferd/testimonial/testimonial-four/testimonial-card.svelte";
import TestimonialOnePreview from "$lib/components/blocks/efferd/testimonial/testimonial-one/testimonial.svelte";
import TestimonialThreePreview from "$lib/components/blocks/efferd/testimonial/testimonial-three/testimonial-card.svelte";
import TestimonialTwoPreview from "$lib/components/blocks/efferd/testimonial/testimonial-two/testimonial.svelte";

// Raw
import avatarIndexSource from "$lib/components/ui/avatar/index.ts?raw";
import decorIconIndexSource from "$lib/components/ui/decor-icon/index.ts?raw";
import gridPatternIndexSource from "$lib/components/ui/grid-pattern/index.ts?raw";
import maskLineSource from "$lib/components/ui/mask-line/mask-line.svelte?raw";
import testimonialTestimonialFiveTestimonialCardSource from "$lib/components/blocks/efferd/testimonial/testimonial-five/testimonial-card.svelte?raw";
import testimonialTestimonialFourTestimonialCardSource from "$lib/components/blocks/efferd/testimonial/testimonial-four/testimonial-card.svelte?raw";
import testimonialTestimonialOneTestimonialSource from "$lib/components/blocks/efferd/testimonial/testimonial-one/testimonial.svelte?raw";
import testimonialTestimonialThreeTestimonialCardSource from "$lib/components/blocks/efferd/testimonial/testimonial-three/testimonial-card.svelte?raw";
import testimonialTestimonialTwoTestimonialSource from "$lib/components/blocks/efferd/testimonial/testimonial-two/testimonial.svelte?raw";

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

export const testimonialBlocks: BlockShowcaseItem[] = [
	{
		id: "testimonial-one",
		title: "Testimonial One",
		description:
			"A Testimonial One composition.",
		previewComponent: TestimonialOnePreview,
		previewHref: "/preview/efferd/testimonial/testimonial-one",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "testimonial-one",
		codeTree: createBlockCodeTree("testimonial-one", [
			{
				id: "testimonial-one",
				path: "src/lib/components/blocks/efferd/testimonial/testimonial-one/testimonial.svelte",
				lang: "svelte",
				code: testimonialTestimonialOneTestimonialSource
			}
		])
	},	{
		id: "testimonial-two",
		title: "Testimonial Two",
		description:
			"A Testimonial Two composition.",
		previewComponent: TestimonialTwoPreview,
		previewHref: "/preview/efferd/testimonial/testimonial-two",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "testimonial-two",
		codeTree: createBlockCodeTree("testimonial-two", [
			{
				id: "testimonial-two",
				path: "src/lib/components/blocks/efferd/testimonial/testimonial-two/testimonial.svelte",
				lang: "svelte",
				code: testimonialTestimonialTwoTestimonialSource
			}
		])
	},	{
		id: "testimonial-three",
		title: "Testimonial Three",
		description:
			"A Testimonial Three composition.",
		previewComponent: TestimonialThreePreview,
		previewHref: "/preview/efferd/testimonial/testimonial-three",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "testimonial-three",
		codeTree: createBlockCodeTree("testimonial-three", [
			{
				id: "testimonial-three",
				path: "src/lib/components/blocks/efferd/testimonial/testimonial-three/testimonial-card.svelte",
				lang: "svelte",
				code: testimonialTestimonialThreeTestimonialCardSource
			},
			...decorIconFiles
		])
	},	{
		id: "testimonial-four",
		title: "Testimonial Four",
		description:
			"A Testimonial Four composition.",
		previewComponent: TestimonialFourPreview,
		previewHref: "/preview/efferd/testimonial/testimonial-four",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "testimonial-four",
		codeTree: createBlockCodeTree("testimonial-four", [
			{
				id: "testimonial-four",
				path: "src/lib/components/blocks/efferd/testimonial/testimonial-four/testimonial-card.svelte",
				lang: "svelte",
				code: testimonialTestimonialFourTestimonialCardSource
			}
		])
	},	{
		id: "testimonial-five",
		title: "Testimonial Five",
		description:
			"A Testimonial Five composition.",
		previewComponent: TestimonialFivePreview,
		previewHref: "/preview/efferd/testimonial/testimonial-five",
		previewMode: "iframe",
		previewHeight: 420,
		installId: "testimonial-five",
		codeTree: createBlockCodeTree("testimonial-five", [
			{
				id: "testimonial-five",
				path: "src/lib/components/blocks/efferd/testimonial/testimonial-five/testimonial-card.svelte",
				lang: "svelte",
				code: testimonialTestimonialFiveTestimonialCardSource
			}
		])
	}
];

export function getTestimonialBlock(id: string) {
	return testimonialBlocks.find((block) => block.id === id);
}
