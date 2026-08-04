// SVG
import FacebookIcon from "$lib/assets/svg/social/facebook.svelte";
import GithubIcon from "$lib/assets/svg/social/github.svelte";
import XIcon from "$lib/assets/svg/social/x.svelte";
import InstagramIcon from "$lib/assets/svg/social/instagram.svelte";
import LinkedinIcon from "$lib/assets/svg/social/linkedin.svelte";
import YoutubeIcon from "$lib/assets/svg/social/youtube.svelte";

import type { Component } from "svelte";

// Types
type SocialLink = {
	link: string;
	icon: Component;
	label: string;
};

// Social Links / Icons
export const socialLinks: SocialLink[] = [
	{
		icon: GithubIcon,
		link: "https://github.com/lucassihh/svelte-ui-blocks",
		label: "Github"
	}
	/*
    {
		icon: InstagramIcon,
		link: "https://www.instagram.com/",
		label: "Instagram"
	},
	{
		icon: XIcon,
		link: "https://x.com",
	 	label: "X"
	},
    {
		icon: YoutubeIcon,
		link: "https://youtube.com",
		label: "YouTube"
    }
    */
] as const;