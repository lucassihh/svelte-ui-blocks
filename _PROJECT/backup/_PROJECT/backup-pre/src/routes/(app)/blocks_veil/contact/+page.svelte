<script lang="ts">
	import { all_veils_contact } from "$lib/config/blocks_veil/contact";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Contact" />

{#each all_veils_contact as block}
	<BlockPreview {...block} />
{/each}
