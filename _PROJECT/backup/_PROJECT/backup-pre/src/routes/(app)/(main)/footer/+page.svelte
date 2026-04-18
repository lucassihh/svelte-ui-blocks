<script>
	import { footer } from "$lib/config/blocks_main/footer";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Footer" />
{#each footer as block}
	<BlockPreview {...block} />
{/each}
