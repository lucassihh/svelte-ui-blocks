import { logoCloudBlocks } from "$lib/imports/logo-cloud/all_logo_cloud";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: logoCloudBlocks
	};
};
