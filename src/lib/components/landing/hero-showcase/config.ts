// For efferd-ui blocks informations
import { registry } from "$lib/registry";
const efferd = registry["efferd-ui"];

import type { Component } from "svelte";

import AuthPreview from "./category-previews/auth-preview.svelte";
import BlogPreview from "./category-previews/blog-preview.svelte";
import ContactPreview from "./category-previews/contact-preview.svelte";
import CtaPreview from "./category-previews/cta-preview.svelte";
import FaqsPreview from "./category-previews/faqs-preview.svelte";
import FeaturesPreview from "./category-previews/features-preview.svelte";
import FooterPreview from "./category-previews/footer-preview.svelte";
import HeaderPreview from "./category-previews/header-preview.svelte";
import HeroPreview from "./category-previews/hero-preview.svelte";
import ImageGalleryPreview from "./category-previews/image-gallery-preview.svelte";
import IntegrationsPreview from "./category-previews/integrations-preview.svelte";
import LogoCloudPreview from "./category-previews/logo-cloud-preview.svelte";

export type TypesCard = {
	slug: string;
	title: string;
	description: string;
	href: string;
	count: number;
	countLabel: string;
	previewComponent: Component<{ title: string; countLabel: string }>;
};

// Function to return label correctly
// 1 === "Block", 2++ === "Blocks"
function isSingularOrPlural(count: number) {
	return `${count} ${count === 1 ? "block" : "blocks"}`;
}

export const dataBlocks: TypesCard[] = [
	{
		slug: "header",
		title: "Header",
		description: "Responsive navigation bars and mega-menus",
		href: "/blocks/efferd-ui/header",
		count: efferd.header.length,
		countLabel: isSingularOrPlural(efferd.header.length),
		previewComponent: HeaderPreview
	},
	{
		slug: "hero",
		title: "Hero Sections",
		description: "High-impact landing page entrance sections",
		href: "/blocks/efferd-ui/hero",
		count: efferd.hero.length,
		countLabel: isSingularOrPlural(efferd.hero.length),
		previewComponent: HeroPreview
	},
	{
		slug: "auth",
		title: "Auth",
		description: "Login, registration, and password recovery forms",
		href: "/blocks/efferd-ui/auth",
		count: efferd.auth.length,
		countLabel: isSingularOrPlural(efferd.auth.length),
		previewComponent: AuthPreview
	},
	{
		slug: "features",
		title: "Features",
		description: "Grids and lists to showcase product capabilities",
		href: "/blocks/efferd-ui/features",
		count: efferd.features.length,
		countLabel: isSingularOrPlural(efferd.features.length),
		previewComponent: FeaturesPreview
	},
	{
		slug: "blog",
		title: "Blog Sections",
		description: "Article previews and content feed layouts",
		href: "/blocks/efferd-ui/blog",
		count: efferd.blog.length,
		countLabel: isSingularOrPlural(efferd.blog.length),
		previewComponent: BlogPreview
	},
	{
		slug: "contact",
		title: "Contact",
		description: "Support channels and lead generation forms",
		href: "/blocks/efferd-ui/contact",
		count: efferd.contact.length,
		countLabel: isSingularOrPlural(efferd.contact.length),
		previewComponent: ContactPreview
	},
	{
		slug: "cta",
		title: "Call to Action",
		description: "Conversion-focused prompts and buttons",
		href: "/blocks/efferd-ui/cta",
		count: efferd.cta.length,
		countLabel: isSingularOrPlural(efferd.cta.length),
		previewComponent: CtaPreview
	},
	{
		slug: "faqs",
		title: "FAQs",
		description: "Accordion-style frequently asked questions",
		href: "/blocks/efferd-ui/faqs",
		count: efferd.faqs.length,
		countLabel: isSingularOrPlural(efferd.faqs.length),
		previewComponent: FaqsPreview
	},
	{
		slug: "logo-cloud",
		title: "Logo Cloud",
		description: "Display grids for partner and client logos",
		href: "/blocks/efferd-ui/logo-cloud",
		count: efferd.logoCloud.length,
		countLabel: isSingularOrPlural(efferd.logoCloud.length),
		previewComponent: LogoCloudPreview
	},
	{
		slug: "footer",
		title: "Footer",
		description: "Site-wide navigation and legal information",
		href: "/blocks/efferd-ui/footer",
		count: efferd.footer.length,
		countLabel: isSingularOrPlural(efferd.footer.length),
		previewComponent: FooterPreview
	},
	{
		slug: "image-gallery",
		title: "Image Gallery",
		description: "Visual showcases for photos and portfolios",
		href: "/blocks/efferd-ui/image-gallery",
		count: efferd.imageGallery.length,
		countLabel: isSingularOrPlural(efferd.imageGallery.length),
		previewComponent: ImageGalleryPreview
	},
	{
		slug: "integrations",
		title: "Integrations",
		description: "Connectors for third-party tools and services",
		href: "/blocks/efferd-ui/integrations",
		count: efferd.integration.length,
		countLabel: isSingularOrPlural(efferd.integration.length),
		previewComponent: IntegrationsPreview
	}
];
