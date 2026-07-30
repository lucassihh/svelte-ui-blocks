import { headerBlocks } from "$lib/imports/header/all_header";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: headerBlocks
	};
};
