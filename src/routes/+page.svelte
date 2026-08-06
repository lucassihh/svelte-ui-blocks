<script lang="ts">
	import { asset } from "$app/paths";

	// Hero
	import LandingHero from "$lib/components/landing/landing-hero.svelte";

	// Seo
	import { MetaTags, JsonLd } from "svelte-meta-tags";
	const siteName = "Svelte Efferd Blocks";
	const siteUrl = "https://127.0.0.1";
	const canonicalUrl = `${siteUrl}/`;
	const title = `${siteName}`;
	const description =
		"Browse beautiful shadcn-svelte marketing blocks for landing pages, hero sections, CTAs, pricing, testimonials, FAQs, headers, footers, and more.";
	const keywords = ["shadcn-svelte blocks", "shadcn blocks", "blocks for Svelte"] as const;

	// URLs base
	const ogImageUrl = new URL(asset("/og.png"), siteUrl).toString();
	const logoUrl = new URL(siteUrl).toString();

	// JSON-LD
	const jsonLdSchema = {
		"@graph": [
			{
				"@type": "Organization",
				"@id": `${siteUrl}#organization`,
				name: siteName,
				url: siteUrl,
				logo: logoUrl,
				sameAs: ["https://github.com/", "https://x.com/"]
			},
			{
				"@type": "WebSite",
				"@id": `${siteUrl}#website`,
				name: siteName,
				url: siteUrl,
				publisher: { "@id": `${siteUrl}#organization` }
			}
		]
	};
</script>

<!-- Tags Meta/OG  -->
<MetaTags
	{title}
	{description}
	canonical={canonicalUrl}
	openGraph={{
		type: "website",
		title,
		description,
		url: canonicalUrl,
		siteName,
		images: [
			{
				url: ogImageUrl,
				alt: title,
				width: 1200,
				height: 630
			}
		]
	}}
	twitter={{
		cardType: "summary_large_image",
		title,
		description,
		image: ogImageUrl
	}}
/>

<JsonLd schema={jsonLdSchema} />

<!-- Landing Hero -->
<div class="overflow-hidden">
	<LandingHero />
</div>
