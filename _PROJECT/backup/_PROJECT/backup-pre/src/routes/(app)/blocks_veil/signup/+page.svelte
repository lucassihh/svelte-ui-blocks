<script lang="ts">
	import { all_veils_signup } from "$lib/config/blocks_veil/signup";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Signup" />

{#each all_veils_signup as block}
	<BlockPreview {...block} />
{/each}
