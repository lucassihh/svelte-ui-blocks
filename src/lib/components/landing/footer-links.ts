import type { Component } from "svelte";

// Types
type FooterLink = {
	title: string;
	href: string;
};

// Footer - All blocks
export const footerLinks: FooterLink[] = [
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

// Documentation
export const documentationLinks: FooterLink[] = [
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

// Resources
export const otherResourcesLinks: FooterLink[] = [
	{
		title: "Templates",
		href: "/documentation/templates"
	}
] as const;
