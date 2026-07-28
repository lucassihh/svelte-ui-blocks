<script lang="ts">
    // Necessary
	import { page } from "$app/state";
	import favicon from "$lib/assets/favicon.svg";
	import "./layout.css";
    
    // Landing Imports
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import SiteMobileSidebar from "$lib/components/landing/site-sidebar.svelte";
    import SiteHeader from "$lib/components/landing/site-header.svelte";
	import SiteFooter from "$lib/components/landing/site-footer.svelte";
    
    // For Theme
	import { ModeWatcher } from "mode-watcher";
	
    // For Preview Components 
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
	<Sidebar.Provider class="w-full mx-auto relative overflow-hidden">
        <!-- Show Mobile Sidebar -->
        <div class="md:hidden lg:hidden">
            <SiteMobileSidebar/>
        </div> 
	
    	<div class="bg-background w-full w-max-7xl mx-auto">
            <SiteHeader />
			
        	{@render children()}
               
            {#if !isDocumentation}
		 	<SiteFooter />
            {/if}
		</div>
        
	</Sidebar.Provider>
{/if}