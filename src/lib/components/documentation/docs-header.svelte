<script lang="ts">
    import DocsBreadcrumb from "./docs-breadcrumb.svelte";
    
    import { Button } from "$lib/components/ui/button";
    import { buttonVariants } from "$lib/components/ui/button/index.js";
   
    // Icons
	import { PanelBottomOpen } from "@lucide/svelte/icons";
    
    // For Custom Docs Sidebar Btn
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import { useSidebar } from "$lib/components/ui/sidebar/index.js";
    const sidebar = useSidebar();

</script>

<div class="bg-background/80 backdrop-blur-xs w-full border-b border-dashed py-3 px-4 md:rounded-t-xl">
	<div class="flex items-center gap-4">
      <!-- Docs Sidebar Btn Trigger -->
        <Button 
            class="bg-transparent text-primary"
            size="icon-sm" 
            onclick={() => sidebar.toggle()}
        >
            <PanelBottomOpen class="size-4" />
            <span class="sr-only">Toggle Docs Sidebar</span>
        </Button>
       
        <!-- Breadcrumb -->
        <DocsBreadcrumb/>
    </div> 
</div>
