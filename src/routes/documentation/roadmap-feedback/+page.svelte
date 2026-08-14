<script lang="ts">
	import DocsPage from "$lib/components/documentation/docs-page.svelte";
	// Data
	import { docsSupportLinks } from "$lib/components/documentation/data.ts";
	// Markdown
	import H2 from "$lib/components/ui/markdown/H2.svelte";
	import Link from "$lib/components/ui/markdown/Link.svelte";
	import ListItem from "$lib/components/ui/markdown/ListItem.svelte";
	import Paragraph from "$lib/components/ui/markdown/Paragraph.svelte";
	import UnorderedList from "$lib/components/ui/markdown/UnorderedList.svelte";
	// UI
	import { Button } from "$lib/components/ui/button";
	// Array
	const roadmapItems = ["Add SEO metatags", "Build templates", "Expand docs and product polish"];
</script>

<DocsPage
	title="Roadmap & Feedback"
	description="The roadmap is short on purpose right now: ship the essentials first, then iterate with feedback."
>
	{#snippet actions()}
		<Button href={docsSupportLinks.githubIssues} size="sm" target="_blank" rel="noreferrer">
			Open a GitHub Issue
		</Button>
	{/snippet}

	<H2>Current roadmap</H2>
	<UnorderedList>
		{#each roadmapItems as item (item)}
			<ListItem>{item}</ListItem>
		{/each}
	</UnorderedList>

	<H2>How to give feedback</H2>
	<Paragraph>
		If something feels missing, confusing, or broken, open a
		<Link href={docsSupportLinks.githubIssues}>GitHub issue</Link>. That is the clearest place to
		track fixes and feature requests as the docs and block library expand.
	</Paragraph>

	<Paragraph>
		For sponsorship interest or broader collaboration, use the owner contact path listed on the
		<Link href="/documentation/sponsors-support">Sponsors & Support</Link> page.
	</Paragraph>
</DocsPage>
