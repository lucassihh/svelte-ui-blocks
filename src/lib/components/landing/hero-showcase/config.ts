import { authBlocks } from "$lib/blocks/auth/all_auth";
import { blogBlocks } from "$lib/blocks/blog/all_blog";
import { contactBlocks } from "$lib/blocks/contact/all_contact";
import { ctaBlocks } from "$lib/blocks/cta/all_cta";
import { faqBlocks } from "$lib/blocks/faqs/all_faqs";
import { featureBlocks } from "$lib/blocks/features/all_features";
import { footerBlocks } from "$lib/blocks/footer/all_footer";
import { headerBlocks } from "$lib/blocks/header/all_header";
import { heroBlocks } from "$lib/blocks/hero/all_hero";
import { imageGalleryBlocks } from "$lib/blocks/image-gallery/all_image_gallery";
import { integrationBlocks } from "$lib/blocks/integrations/all_integrations";
import { logoCloudBlocks } from "$lib/blocks/logo-cloud/all_logo_cloud";
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

function formatBlockLabel(count: number) {
	return `${count} ${count === 1 ? "block" : "blocks"}`;
}

export const dataBlocks: TypesCard[] = [
	{
		slug: "header",
		title: "Header",
		description: "Responsive navigation bars and mega-menus",
		href: "/blocks/header",
		count: headerBlocks.length,
		countLabel: formatBlockLabel(headerBlocks.length),
		previewComponent: HeaderPreview
	},
	{
		slug: "hero",
		title: "Hero Sections",
		description: "High-impact landing page entrance sections",
		href: "/blocks/hero",
		count: heroBlocks.length,
		countLabel: formatBlockLabel(heroBlocks.length),
		previewComponent: HeroPreview
	},
	{
		slug: "auth",
		title: "Auth",
		description: "Login, registration, and password recovery forms",
		href: "/blocks/auth",
		count: authBlocks.length,
		countLabel: formatBlockLabel(authBlocks.length),
		previewComponent: AuthPreview
	},
	{
		slug: "features",
		title: "Features",
		description: "Grids and lists to showcase product capabilities",
		href: "/blocks/features",
		count: featureBlocks.length,
		countLabel: formatBlockLabel(featureBlocks.length),
		previewComponent: FeaturesPreview
	},
	{
		slug: "blog",
		title: "Blog Sections",
		description: "Article previews and content feed layouts",
		href: "/blocks/blog",
		count: blogBlocks.length,
		countLabel: formatBlockLabel(blogBlocks.length),
		previewComponent: BlogPreview
	},
	{
		slug: "contact",
		title: "Contact",
		description: "Support channels and lead generation forms",
		href: "/blocks/contact",
		count: contactBlocks.length,
		countLabel: formatBlockLabel(contactBlocks.length),
		previewComponent: ContactPreview
	},
	{
		slug: "cta",
		title: "Call to Action",
		description: "Conversion-focused prompts and buttons",
		href: "/blocks/cta",
		count: ctaBlocks.length,
		countLabel: formatBlockLabel(ctaBlocks.length),
		previewComponent: CtaPreview
	},
	{
		slug: "faqs",
		title: "FAQs",
		description: "Accordion-style frequently asked questions",
		href: "/blocks/faqs",
		count: faqBlocks.length,
		countLabel: formatBlockLabel(faqBlocks.length),
		previewComponent: FaqsPreview
	},
	{
		slug: "logo-cloud",
		title: "Logo Cloud",
		description: "Display grids for partner and client logos",
		href: "/blocks/logo-cloud",
		count: logoCloudBlocks.length,
		countLabel: formatBlockLabel(logoCloudBlocks.length),
		previewComponent: LogoCloudPreview
	},
	{
		slug: "footer",
		title: "Footer",
		description: "Site-wide navigation and legal information",
		href: "/blocks/footer",
		count: footerBlocks.length,
		countLabel: formatBlockLabel(footerBlocks.length),
		previewComponent: FooterPreview
	},
	{
		slug: "image-gallery",
		title: "Image Gallery",
		description: "Visual showcases for photos and portfolios",
		href: "/blocks/image-gallery",
		count: imageGalleryBlocks.length,
		countLabel: formatBlockLabel(imageGalleryBlocks.length),
		previewComponent: ImageGalleryPreview
	},
	{
		slug: "integrations",
		title: "Integrations",
		description: "Connectors for third-party tools and services",
		href: "/blocks/integrations",
		count: integrationBlocks.length,
		countLabel: formatBlockLabel(integrationBlocks.length),
		previewComponent: IntegrationsPreview
	}
];