<script>
	import { integration } from "$lib/config/blocks_main/integration";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Integration" />

{#each integration as block}
	<BlockPreview {...block} />
{/each}
