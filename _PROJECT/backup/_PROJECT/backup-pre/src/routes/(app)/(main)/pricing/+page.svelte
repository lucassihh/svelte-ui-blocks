<script>
	import { pricing } from "$lib/config/blocks_main/pricing";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Pricing" />
{#each pricing as block}
	<BlockPreview {...block} />
{/each}
