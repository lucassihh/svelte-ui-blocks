import { blogBlocks } from "$lib/imports/blog/all_blog";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: blogBlocks
	};
};
