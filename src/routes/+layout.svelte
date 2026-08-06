<script lang="ts">
	// Necessary
	import { page } from "$app/state";
	import favicon from "$lib/assets/favicon.svg";
	import "$lib/styles/app.css";

	// Landing Imports (Main page)
	import LandingHeader from "$lib/components/landing/landing-header.svelte";
	import LandingFooter from "$lib/components/landing/landing-footer.svelte";

	// For Theme
	import { ModeWatcher } from "mode-watcher";

	// For Preview logic
	let isPreviewRoute = $derived(page.url.pathname.startsWith("/preview/"));

	// If Path include documentation returns --> true
	let isDocumentation = $derived.by(() => {
		let path = page.url.pathname;
		return path.includes("documentation");
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Svelte Efferd Blocks</title>
</svelte:head>

<ModeWatcher defaultMode="dark" />

{#if isPreviewRoute}
	<div class="min-h-screen bg-background">
		{@render children()}
	</div>
{:else}
	<!-- Landing Header -->
	<LandingHeader />
	<!-- Main Content -->
	<main class="mx-auto w-full max-w-7xl">
		{@render children()}

		{#if !isDocumentation}
			<LandingFooter />
		{/if}
	</main>
{/if}
