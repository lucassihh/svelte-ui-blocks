<script lang="ts">
	import { all_veils_hero } from "$lib/config/blocks_veil/hero";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Hero" />

{#each all_veils_hero as block}
	<BlockPreview {...block} />
{/each}
