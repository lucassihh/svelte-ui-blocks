<script lang="ts">
	import { all_veils_testimonial } from "$lib/config/blocks_veil/testimonial";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Testimonial" />

{#each all_veils_testimonial as block}
	<BlockPreview {...block} />
{/each}
