<script lang="ts">
	import { all_veils_team } from "$lib/config/blocks_veil/team";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Team" />

{#each all_veils_team as block}
	<BlockPreview {...block} />
{/each}
