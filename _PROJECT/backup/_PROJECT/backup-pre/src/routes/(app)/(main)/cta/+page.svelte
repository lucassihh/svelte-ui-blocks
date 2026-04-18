<script>
	import { cta } from "$lib/config/blocks_main/cta";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Call To Action" />
{#each cta as block}
	<BlockPreview {...block} />
{/each}
