<script lang="ts">
	import { all_veils_forgot_password } from "$lib/config/blocks_veil/forgot-password";
	import BlockPreview from "$lib/components/blocks/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Forgot Password" />

{#each all_veils_forgot_password as block}
	<BlockPreview {...block} />
{/each}
