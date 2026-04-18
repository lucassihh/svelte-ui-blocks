<script>
	import { contact } from "$lib/config/blocks_main/contact";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Contact" />
{#each contact as block}
	<BlockPreview {...block} />
{/each}
