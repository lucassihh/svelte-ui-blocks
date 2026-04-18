<script>
	import { comparator } from "$lib/config/blocks_main/comparator";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Comparator" />

{#each comparator as block}
	<BlockPreview {...block} />
{/each}