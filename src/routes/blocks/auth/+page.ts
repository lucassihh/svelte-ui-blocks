import { authBlocks } from "$lib/imports/auth/all_auth";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: authBlocks
	};
};
