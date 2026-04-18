<script>
	import { stats } from "$lib/config/blocks_main/stats";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Stats" />
{#each stats as block}
	<BlockPreview {...block} />
{/each}
