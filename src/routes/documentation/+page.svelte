<script lang="ts">
	import DocsPage from "$lib/components/documentation/docs-page.svelte";

	// Seo
	import Seo from "$lib/components/base/Seo.svelte";

	import { Button } from "$lib/components/ui/button";
</script>

<!-- Seo -->
<Seo title="Documentation" desc="Documentation page" link="/documentation" />

<DocsPage
	title="Introduction"
	description="Svelte Efferd is a growing collection of production-ready Svelte blocks designed to save build time without making the site feel generic."
>
	{#snippet actions()}
		<Button href="/blocks/efferd/hero" size="sm">Browse Blocks</Button>
		<Button href="/changelog" size="sm" variant="outline">View Changelog</Button>
	{/snippet}
</DocsPage>
