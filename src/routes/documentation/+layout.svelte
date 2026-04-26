<script lang="ts">
 import * as Sidebar from "$lib/components/ui/sidebar/index.js";
 import DocsSidebar from "$lib/components/documentation/docs-sidebar.svelte";
 import DocsHeader from "$lib/components/documentation/docs-header.svelte";
 import Button from "$lib/components/ui/button/button.svelte"; 
 import type { Snippet } from "svelte";
 let { children } = $props();
 
 // For Scroll to Top
 import { scrollY } from "svelte/reactivity/window";
 import { fly } from "svelte/transition";
 let visible = $derived(typeof scrollY.current === "undefined" ? 600 : scrollY.current > 800);
</script>
 
 
<Sidebar.Provider class="bg-card">
 <div class="flex w-full">
    <DocsSidebar/>
        <main class="w-full max-w-7xl mx-auto bg-background md:m-2 md:rounded-xl">
            <DocsHeader/>
            {@render children?.()}
            
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
 </div>   
</Sidebar.Provider>