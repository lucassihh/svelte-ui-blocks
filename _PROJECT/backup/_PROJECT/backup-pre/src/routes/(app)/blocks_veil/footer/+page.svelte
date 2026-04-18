<script lang="ts">
	import { all_veils_footer } from "$lib/config/blocks_veil/footer";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Footer" />

{#each all_veils_footer as block}
	<BlockPreview {...block} />
{/each}
