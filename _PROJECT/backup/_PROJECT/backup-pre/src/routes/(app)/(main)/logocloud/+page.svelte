<script>
	import { logocloud } from "$lib/config/blocks_main/logo-cloud";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Logo Cloud" />
{#each logocloud as block}
	<BlockPreview {...block} />
{/each}
