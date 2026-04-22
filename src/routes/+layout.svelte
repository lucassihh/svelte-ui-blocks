<script lang="ts">
	import { page } from "$app/state";
	import favicon from "$lib/assets/favicon.svg";
	import "./layout.css";
    
    import SiteHeader from "$lib/components/landing/site-header.svelte";
	import SiteFooter from "$lib/components/landing/site-footer.svelte";
    
	import { ModeWatcher, toggleMode } from "mode-watcher";
	import { cn } from "$lib/utils";
	
	import { PressedKeys } from "runed";

	let { children } = $props();
	let isPreviewRoute = $derived(page.url.pathname.startsWith("/preview/"));

	const keys = new PressedKeys();
	keys.onKeys(["d"], () => {
		console.log("open command palette");
		toggleMode();
	});

	// Sidebar
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    
    
    // If Path include documentation, then don't show footer
	let showFooter = $derived.by(() => {
		let path = page.url.pathname;
		return !path.includes("documentation");
	});
    
    
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
	<Sidebar.Provider>
		<div class="relative w-full supports-[overflow:clip]:overflow-clip dark:bg-background">
			<SiteHeader />
			<main
				class={cn(
					"relative container grow",
					"before:absolute before:-inset-y-20 before:-left-px before:z-1 before:border-dashed before:border-primary/20 xl:before:border-l",
					"after:absolute after:-inset-y-20 after:-right-px after:z-1 after:border-dashed after:border-primary/20 xl:after:border-r"
				)}
			> 
				{@render children()}
			</main>
            {#if showFooter}
		 	<SiteFooter />
            {/if}
		</div>
	</Sidebar.Provider>
{/if}
