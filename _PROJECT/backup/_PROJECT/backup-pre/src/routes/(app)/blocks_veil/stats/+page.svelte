<script lang="ts">
	import { all_veils_stats } from "$lib/config/blocks_veil/stats";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Stats" />

{#each all_veils_stats as block}
	<BlockPreview {...block} />
{/each}
