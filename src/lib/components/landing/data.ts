// SVG
import FacebookIcon from "$lib/assets/svg/social/facebook.svelte";
import GithubIcon from "$lib/assets/svg/social/github.svelte";
import XIcon from "$lib/assets/svg/social/x.svelte";
import InstagramIcon from "$lib/assets/svg/social/instagram.svelte";
import LinkedinIcon from "$lib/assets/svg/social/linkedin.svelte";
import YoutubeIcon from "$lib/assets/svg/social/youtube.svelte";

import type { Component } from "svelte";

// Types
type FooterLink = {
	title: string;
	href: string;
};

type SocialLink = {
	link: string;
	icon: Component;
	label: string;
};

type SidebarLink = {
	label: string;
	href: string;
};

// Sidebar Links
const sidebarLinks: SidebarLink[] = [
	{
		label: "Home",
		href: "/"
	},
	{
		label: "Efferd-UI Blocks",
		href: "/blocks/efferd-ui/hero"
	},
	{
		label: "Documentation",
		href: "/documentation"
	},
	{
		label: "Changelog",
		href: "/changelog"
	}
];

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

// Footer Links
export const BlocksLinks: FooterLink[] = [
	{
		title: "Heros",
		href: "/blocks/efferd-ui/hero"
	},
	{
		title: "Headers",
		href: "/blocks/efferd-ui/header/"
	},
	{
		title: "Logos",
		href: "/blocks/efferd-ui/logo-cloud"
	},
	{
		title: "Features",
		href: "/blocks/efferd-ui/features/"
	},
	{
		title: "Integrations",
		href: "/blocks/efferd-ui/integrations/"
	},
	{
		title: "Testimonials",
		href: "/blocks/efferd-ui/testimonials/"
	},
	{
		title: "CTA",
		href: "/blocks/efferd-ui/cta/"
	},
	{
		title: "Pricing",
		href: "/blocks/efferd-ui/pricing/"
	},
	{
		title: "Blog Cards",
		href: "/blocks/efferd-ui/blog/"
	},
	{
		title: "Auth",
		href: "/blocks/efferd-ui/auth/"
	},
	{
		title: "FAQs",
		href: "/blocks/efferd-ui/faqs/"
	},
	{
		title: "Contact",
		href: "/blocks/efferd-ui/contact/"
	},
	{
		title: "Footers",
		href: "/blocks/efferd-ui/footer/"
	},
	{
		title: "Image Gallery",
		href: "/blocks/efferd-ui/image-gallery/"
	},
	{
		title: "Not Found",
		href: "/blocks/efferd-ui/not-found/"
	}
] as const;

export const DocumentationLinks: FooterLink[] = [
	{
		title: "Introduction",
		href: "/documentation/"
	},
	{
		title: "Installation",
		href: "/documentation/installation"
	},
	{
		title: "Usage",
		href: "/documentation/usage"
	}
] as const;

export const ResourcesLinks: FooterLink[] = [
	{
		title: "Templates",
		href: "/documentation/templates"
	}
] as const;

// Normalize path
export function normalizePath(pathname: string) {
	if (!pathname) return "/";
	// Remove duplicates "/"
	const normalized = pathname.replace(/\/+$/, "") || "/";
	return normalized;
}

// Get Docs Page
export function getPage(pathname: string) {
	return pagesByHref.get(normalizePath(pathname)) ?? sidebarLinks[0];
}

export { sidebarLinks };
