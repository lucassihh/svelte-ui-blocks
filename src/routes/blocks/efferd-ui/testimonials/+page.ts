import { testimonialBlocks } from "$lib/imports/testimonials/all_testimonials";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: testimonialBlocks
	};
};
