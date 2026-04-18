<script lang="ts">
	import { all_veils_login } from "$lib/config/blocks_veil/login";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Login" />

{#each all_veils_login as block}
	<BlockPreview {...block} />
{/each}
