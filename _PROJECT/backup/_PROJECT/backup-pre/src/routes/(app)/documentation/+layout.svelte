<script lang="ts">
	import { page } from "$app/state";
	import { setDocsLayoutContext } from "$lib/components/documentation/docs-layout-context";
	import { docsV2Pages } from "$lib/config/documentation";
	import DocsSidebar from "$lib/components/documentation/DocsSidebar.svelte";
	import { ScrollArea } from "$lib/components/ui/scroll-area";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";

	let { children } = $props();
	let docContentRef = $state<HTMLElement>();

	// Defines the global context for the documentation
	setDocsLayoutContext({
		getDocContent: () => docContentRef,
		registerDocContent: (el) => {
			docContentRef = el;
		}
	});

	const normalizePath = (value: string) => (value === "/" ? value : value.replace(/\/+$/, ""));
	
	const currentPageMeta = $derived.by(() => {
		const currentPath = normalizePath(page.url.pathname);
		return docsV2Pages.find((item) => normalizePath(item.path) === currentPath);
	});
</script>

<!-- Documentation -->
<Sidebar.Provider class="flex items-center justify-center overflow-hidden">
  <DocsSidebar />
   <!-- Documentation Container -->
   <div class="flex flex-col justify-center w-full overflow-hidden">
     <Sidebar.Inset>
     <!-- Header & Title -->
        <header class="flex py-2 items-center border-b px-4 lg:hidden">
          <Sidebar.Trigger />
          <!-- Get Page Title -->
          <span class="ml-3 text-sm font-bold text-primary capitalize">
            {currentPageMeta?.path}
          </span>
        </header>
        
        <!-- Content Area -->
        <ScrollArea
          class="h-full w-full"
          orientation="vertical"
          scrollbarYClasses="hidden"
        >
          <div id="Docs-content-container">
            {@render children()}
          </div>
        </ScrollArea>
     </Sidebar.Inset>   
   </div>      
</Sidebar.Provider>
