<script lang="ts">
	import { all_veils_header } from "$lib/config/blocks_veil/header";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Header" />

{#each all_veils_header as block}
	<BlockPreview {...block} />
{/each}
