<script>
	import { forgot_password } from "$lib/config/blocks_main/forgot-password";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Forgot Password" />

{#each forgot_password as block}
	<BlockPreview {...block} />
{/each}
