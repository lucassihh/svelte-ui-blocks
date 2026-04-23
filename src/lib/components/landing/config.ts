import { GithubIcon, InstagramIcon, XIcon, YoutubeIcon } from "$lib/svgs/social";
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
		label: "Blocks",
		href: "/blocks/hero"
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
	},
	// {
	//	icon: InstagramIcon,
	//	link: "https://www.instagram.com/",
	//	label: "Instagram"
	// },
	// {
	// 	icon: XIcon,
	// 	link: "https://x.com",
	// 	label: "X"
	// },
	// {
	//	icon: YoutubeIcon,
	//	link: "https://youtube.com",
	//	label: "YouTube"
	// }
] as const;

// Footer Links
export const BlocksLinks: FooterLink[] = [
	{
		title: "Heros",
		href: "/blocks/hero"
	},
	{
		title: "Headers",
		href: "/blocks/header/"
	},
	{
		title: "Logos",
		href: "/blocks/logo-cloud"
	},
	{
		title: "Features",
		href: "/blocks/features/"
	},
	{
		title: "Integrations",
		href: "/blocks/integrations/"
	},
	{
		title: "Testimonials",
		href: "/blocks/testimonials/"
	},
	{
		title: "CTA",
		href: "/blocks/cta/"
	},
	{
		title: "Pricing",
		href: "/blocks/pricing/"
	},
	{
		title: "Blog Cards",
		href: "/blocks/blog/"
	},
	{
		title: "Auth",
		href: "/blocks/auth/"
	},
	{
		title: "FAQs",
		href: "/blocks/faqs/"
	},
	{
		title: "Contact",
		href: "/blocks/contact/"
	},
	{
		title: "Footers",
		href: "/blocks/footer/"
	},
	{
		title: "Image Gallery",
		href: "/blocks/image-gallery/"
	},
	{
		title: "Not Found",
		href: "/blocks/not-found/"
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
