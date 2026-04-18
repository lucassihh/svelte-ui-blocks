<script>
	import { feature } from "$lib/config/blocks_main/features";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Feature" />

{#each feature as block}
	<BlockPreview {...block} />
{/each}
