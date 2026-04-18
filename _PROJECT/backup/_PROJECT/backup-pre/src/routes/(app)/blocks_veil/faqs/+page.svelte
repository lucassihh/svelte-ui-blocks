<script lang="ts">
	import { all_veils_faqs } from "$lib/config/blocks_veil/faqs";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="FAQs" />

{#each all_veils_faqs as block}
	<BlockPreview {...block} />
{/each}
