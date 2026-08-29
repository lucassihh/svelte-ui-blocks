import { registry } from "$lib/registry";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		blocks: registry["magic"].backlight
	};
};
