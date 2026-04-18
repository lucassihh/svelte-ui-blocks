<script>
	import { hero } from "$lib/config/blocks_main/hero";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Hero" />
{#each hero as block}
	<BlockPreview {...block} />
{/each}
