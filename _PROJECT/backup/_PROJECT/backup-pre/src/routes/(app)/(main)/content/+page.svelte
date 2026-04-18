<script>
	import { content } from "$lib/config/blocks_main/content";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Content" />
{#each content as block}
	<BlockPreview {...block} />
{/each}
