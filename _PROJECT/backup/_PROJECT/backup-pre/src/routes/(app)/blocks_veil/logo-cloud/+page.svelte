<script lang="ts">
	import { all_veils_logo_cloud } from "$lib/config/blocks_veil/logo-cloud";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Logo Cloud" />

{#each all_veils_logo_cloud as block}
	<BlockPreview {...block} />
{/each}
