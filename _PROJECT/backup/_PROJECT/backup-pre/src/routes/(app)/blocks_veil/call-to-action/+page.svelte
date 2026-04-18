<script lang="ts">
	import { all_veils_call_to_action } from "$lib/config/blocks_veil/call-to-action";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Call To Action" />

{#each all_veils_call_to_action as block}
	<BlockPreview {...block} />
{/each}
