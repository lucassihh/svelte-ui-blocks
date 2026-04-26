<script lang="ts">
	import { page } from "$app/state";
	import favicon from "$lib/assets/favicon.svg";
	import "./layout.css";
    
    import Button from "$lib/components/ui/button/button.svelte"; 
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import SiteSidebar from "$lib/components/landing/site-sidebar.svelte";
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

    // If Path include documentation, then don't show footer
	let showFooter = $derived.by(() => {
		let path = page.url.pathname;
		return !path.includes("documentation");
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
	<Sidebar.Provider>
        <div class="md:hidden lg:hidden">
            <SiteSidebar/>
        </div> 
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
            {#if showFooter}
		 	<SiteFooter />
            {/if}
		</div>
	</Sidebar.Provider>
{/if}
