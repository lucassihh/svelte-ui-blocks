// CodeTree Component
import type { BlockShowcaseItem } from "$lib/components/blocks/blocks-code-tree";
import { createBlockCodeTree } from "$lib/components/blocks/blocks-code-tree";

// Sources for preview & code
import TestimonialFourPreview from "$lib/components/blocks/veil/testimonial/testimonial-four/testimonial-four.svelte";
import TestimonialOnePreview from "$lib/components/blocks/veil/testimonial/testimonial-one/testimonial-one.svelte";
import TestimonialThreePreview from "$lib/components/blocks/veil/testimonial/testimonial-three/testimonial-three.svelte";
import TestimonialTwoPreview from "$lib/components/blocks/veil/testimonial/testimonial-two/testimonial-two.svelte";

// Raw
import cardIndexSource from "$lib/components/ui/veil-ui/card/index.ts?raw";
import testimonialTestimonialFourSource from "$lib/components/blocks/veil/testimonial/testimonial-four/testimonial-four.svelte?raw";
import testimonialTestimonialOneSource from "$lib/components/blocks/veil/testimonial/testimonial-one/testimonial-one.svelte?raw";
import testimonialTestimonialThreeSource from "$lib/components/blocks/veil/testimonial/testimonial-three/testimonial-three.svelte?raw";
import testimonialTestimonialTwoSource from "$lib/components/blocks/veil/testimonial/testimonial-two/testimonial-two.svelte?raw";

// Shared Items
const buttonFiles = [
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	}
];

export const testimonialBlocks: BlockShowcaseItem[] = [
	{
		id: "testimonial-one",
		title: "Testimonial One",
		description:
			"A Testimonial One composition.",
		previewComponent: TestimonialOnePreview,
		previewHref: "/preview/veil/testimonial/testimonial-one",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "testimonial-one",
		codeTree: createBlockCodeTree("testimonial-one", [
			{
				id: "testimonial-one",
				path: "src/lib/components/blocks/veil/testimonial/testimonial-one/testimonial-one.svelte",
				lang: "svelte",
				code: testimonialTestimonialOneSource
			}
		])
	},	{
		id: "testimonial-two",
		title: "Testimonial Two",
		description:
			"A Testimonial Two composition.",
		previewComponent: TestimonialTwoPreview,
		previewHref: "/preview/veil/testimonial/testimonial-two",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "testimonial-two",
		codeTree: createBlockCodeTree("testimonial-two", [
			{
				id: "testimonial-two",
				path: "src/lib/components/blocks/veil/testimonial/testimonial-two/testimonial-two.svelte",
				lang: "svelte",
				code: testimonialTestimonialTwoSource
			}
		])
	},	{
		id: "testimonial-three",
		title: "Testimonial Three",
		description:
			"A Testimonial Three composition.",
		previewComponent: TestimonialThreePreview,
		previewHref: "/preview/veil/testimonial/testimonial-three",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "testimonial-three",
		codeTree: createBlockCodeTree("testimonial-three", [
			{
				id: "testimonial-three",
				path: "src/lib/components/blocks/veil/testimonial/testimonial-three/testimonial-three.svelte",
				lang: "svelte",
				code: testimonialTestimonialThreeSource
			}
		])
	},	{
		id: "testimonial-four",
		title: "Testimonial Four",
		description:
			"A Testimonial Four composition.",
		previewComponent: TestimonialFourPreview,
		previewHref: "/preview/veil/testimonial/testimonial-four",
		previewMode: "iframe",
		previewHeight: 820,
		installId: "testimonial-four",
		codeTree: createBlockCodeTree("testimonial-four", [
			{
				id: "testimonial-four",
				path: "src/lib/components/blocks/veil/testimonial/testimonial-four/testimonial-four.svelte",
				lang: "svelte",
				code: testimonialTestimonialFourSource
			}
		])
	}
];

export function getTestimonialBlock(id: string) {
	return testimonialBlocks.find((block) => block.id === id);
}
