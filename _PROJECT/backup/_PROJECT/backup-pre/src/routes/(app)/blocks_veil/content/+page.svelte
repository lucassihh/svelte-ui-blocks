<script lang="ts">
	import { all_veils_content } from "$lib/config/blocks_veil/content";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Content" />

{#each all_veils_content as block}
	<BlockPreview {...block} />
{/each}
