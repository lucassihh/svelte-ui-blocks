<script lang="ts">
	import { all_veils_features } from "$lib/config/blocks_veil/features";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Features" />

{#each all_veils_features as block}
	<BlockPreview {...block} />
{/each}
