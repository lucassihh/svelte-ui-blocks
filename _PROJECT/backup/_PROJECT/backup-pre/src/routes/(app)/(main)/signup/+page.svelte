<script>
	import { signup } from "$lib/config/blocks_main/signup";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Sign Up" />

{#each signup as block}
	<BlockPreview {...block} />
{/each}
