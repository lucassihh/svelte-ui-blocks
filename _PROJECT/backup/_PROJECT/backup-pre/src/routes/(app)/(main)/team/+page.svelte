<script>
	import { team } from "$lib/config/blocks_main/team";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Team" />
{#each team as block}
	<BlockPreview {...block} />
{/each}
