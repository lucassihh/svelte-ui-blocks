<script>
	import { login } from "$lib/config/blocks_main/login";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Login" />

{#each login as block}
	<BlockPreview {...block} />
{/each}
