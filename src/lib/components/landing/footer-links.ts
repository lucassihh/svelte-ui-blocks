import type { Component } from "svelte";

// Types
type FooterLink = {
	title: string;
	href: string;
};

// Blocks
export const blocksLinks: FooterLink[] = [
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
		href: "/blocks/efferd-ui/feature/"
	},
	{
		title: "Integrations",
		href: "/blocks/efferd-ui/integration/"
	},
	{
		title: "Testimonials",
		href: "/blocks/efferd-ui/testimonial/"
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
		href: "/blocks/efferd-ui/faq/"
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
