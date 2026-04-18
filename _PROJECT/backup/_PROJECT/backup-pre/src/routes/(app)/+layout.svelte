<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
	import Footer from "$lib/components/layout/Footer.svelte";
  
	import { page } from "$app/state";
	let { children } = $props();

	// If Path include docs, then don't show footer
	let showHeaderFooter = $derived.by(() => {
		let path = page.url.pathname;
		return !path.includes("documentation");
	});
  
</script>

<!-- Main Page Layout -->
<Header />
{@render children()}
{#if showHeaderFooter}
	<Footer />
{/if}
