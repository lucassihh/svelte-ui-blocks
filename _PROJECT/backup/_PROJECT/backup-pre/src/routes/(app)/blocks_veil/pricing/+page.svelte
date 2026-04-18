<script lang="ts">
	import { all_veils_pricing } from "$lib/config/blocks_veil/pricing";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Pricing" />

{#each all_veils_pricing as block}
	<BlockPreview {...block} />
{/each}
