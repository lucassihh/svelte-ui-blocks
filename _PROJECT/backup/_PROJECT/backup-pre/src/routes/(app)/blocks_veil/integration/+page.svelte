<script lang="ts">
	import { all_veils_integration } from "$lib/config/blocks_veil/integration";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Integration" />

{#each all_veils_integration as block}
	<BlockPreview {...block} />
{/each}
