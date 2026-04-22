<script lang="ts">
 import * as Sidebar from "$lib/components/ui/sidebar/index.js";
 import DocsSidebar from "$lib/components/docs/docs-sidebar.svelte";
 let { children } = $props();
</script>
 
 
<Sidebar.Provider class="bg-card">
 <div class="flex w-full">
    <DocsSidebar/>
        <main class="w-full max-w-7xl mx-auto bg-background md:m-2 md:rounded-xl">
            <Sidebar.Trigger class="size-10 md:hidden fixed bottom-5 left-4 bg-primary/80 text-secondary rounded-full z-40" />
            {@render children?.()}
        </main>
 </div>   
</Sidebar.Provider>