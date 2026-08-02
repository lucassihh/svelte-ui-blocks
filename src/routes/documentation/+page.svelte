<script lang="ts">
	import DocsPage from "$lib/components/documentation/docs-page.svelte";

	// Markdown
	import Blockquote from "$lib/components/markdown/Blockquote.svelte";
	import H2 from "$lib/components/markdown/H2.svelte";
	import H3 from "$lib/components/markdown/H3.svelte";
	import Link from "$lib/components/markdown/Link.svelte";
	import ListItem from "$lib/components/markdown/ListItem.svelte";
	import Paragraph from "$lib/components/markdown/Paragraph.svelte";
	import Strong from "$lib/components/markdown/Strong.svelte";
	import UnorderedList from "$lib/components/markdown/UnorderedList.svelte";

	import { Button } from "$lib/components/ui/button";
</script>

<DocsPage
	title="Introduction"
	description="Svelte Efferd is a growing collection of production-ready Svelte blocks designed to save build time without making the site feel generic."
>
	{#snippet actions()}
		<Button href="/blocks/efferd-ui/hero" size="sm">Browse Blocks</Button>
		<Button href="/changelog" size="sm" variant="outline">View Changelog</Button>
	{/snippet}
</DocsPage>
