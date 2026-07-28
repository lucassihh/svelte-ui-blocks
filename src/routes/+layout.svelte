<script lang="ts">
	import { page } from "$app/state";
	import favicon from "$lib/assets/favicon.svg";
	import "./layout.css";
    
    import Button from "$lib/components/ui/button/button.svelte"; 
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    
    // Landing Imports
    import SiteSidebar from "$lib/components/landing/site-sidebar.svelte";
    import SiteHeader from "$lib/components/landing/site-header.svelte";
	import SiteFooter from "$lib/components/landing/site-footer.svelte";
    
	import { ModeWatcher, toggleMode } from "mode-watcher";
	import { cn } from "$lib/utils";
	
	let { children } = $props();
	let isPreviewRoute = $derived(page.url.pathname.startsWith("/preview/"));

    // Switch Theme using "T" key
    import { PressedKeys } from "runed";
        
	const keys = new PressedKeys();
	keys.onKeys(["t"], () => {
		toggleMode();
	});

    // If Path include documentation returns --> true
	let isDocumentation = $derived.by(() => {
		let path = page.url.pathname;
		return path.includes("documentation");
	});
    
    // For Scroll to Top
    import { scrollY } from "svelte/reactivity/window";
    import { fly } from "svelte/transition";
    let visible = $derived(typeof scrollY.current === "undefined" ? 600 : scrollY.current > 800);
    
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
	<Sidebar.Provider class="w-full mx-auto">
        <div class="md:hidden lg:hidden">
            <SiteSidebar/>
        </div> 
		<div class="relative supports-[overflow:clip]:overflow-clip dark:bg-background w-full w-max-4xl mx-auto">
            <SiteHeader />
			<main> 
			
          	{@render children()}
               
            <!-- Scroll to Top -->
            {#if visible}
                 {@render scrollToTop()}
            {/if}
            
            {#snippet scrollToTop()}
                <div in:fly={{ y: 20 }} out:fly={{ y: 20 }} class="fixed right-4 bottom-4 z-50">
                    <Button
                        size="icon"
                        variant="secondary"
                        class="rounded-full"
                        onclick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                        </svg>
                    </Button>
                </div>
            {/snippet}
			</main>
           
            {#if !isDocumentation}
		 	<SiteFooter />
            {/if}
            
		</div>
	</Sidebar.Provider>
{/if}