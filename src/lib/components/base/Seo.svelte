<script lang="ts">
	import { asset } from "$app/paths";
	import { MetaTags } from "svelte-meta-tags";

	// Props types
	type Props = {
		title: string;
		desc: string;
		link?: string;
	};

	let siteName = "Svelte Efferd Blocks";
	let siteUrl = "https://127.0.0.1";
	let titleTemplate = `%s | ${siteName}`;
	let locale = "en_US";
	let twitterHandle = "@your-name";
	let ogImageUrl = new URL(asset("/og.png"), siteUrl).toString();

	// Props
	let { title, desc, link }: Props = $props();

	function normalizePath(path: string) {
		return path.startsWith("/") ? path : `/${path}`;
	}

	let canonical = $derived(link ? new URL(normalizePath(link), siteUrl).toString() : undefined);
	let fullTitle = $derived(`${title} | ${siteName}`);
</script>

<MetaTags
	{title}
	description={desc}
	{titleTemplate}
	{canonical}
	openGraph={{
		type: "website",
		title: fullTitle,
		description: desc,
		images: [
			{
				url: ogImageUrl,
				alt: `${fullTitle} preview`,
				width: 1200,
				height: 630,
				type: "image/png"
			}
		],
		siteName,
		url: canonical,
		locale
	}}
	twitter={{
		cardType: "summary_large_image",
		title: fullTitle,
		description: desc,
		image: ogImageUrl,
		imageAlt: `${fullTitle} preview`,
		site: twitterHandle,
		creator: twitterHandle
	}}
/>
