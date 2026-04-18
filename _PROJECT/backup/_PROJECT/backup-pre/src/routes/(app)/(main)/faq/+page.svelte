<script>
	import { faq } from "$lib/config/blocks_main/faq";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="FAQ" />
{#each faq as block}
	<BlockPreview {...block} />
{/each}
