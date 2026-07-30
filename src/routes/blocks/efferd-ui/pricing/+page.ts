import { pricingBlocks } from "$lib/imports/pricing/all_pricing";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: pricingBlocks
	};
};
