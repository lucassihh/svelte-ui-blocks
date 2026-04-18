<script lang="ts">
	import type { Component, ComponentProps } from "svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import OnThisPage from "./DocsOnThisPage.svelte";
  import { ScrollArea } from "$lib/components/ui/scroll-area";
	import SidebarGroupLinks from "./DocsSidebarGroupLinks.svelte";
	
  const normalizePath = (value: string) => (value === "/" ? value : value.replace(/\/+$/, ""));
  
	const currentPageMeta = $derived.by(() => {
		  const currentPath = normalizePath(page.url.pathname);
		  return docsV2Pages.find((item) => normalizePath(item.path) === currentPath);
	 });
    
  let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
    
  // Import Data
  import {
		documentationData,
		templatesData,
		themeData,
	} from "$lib/config/documentation";

  // Data from $lib/data/documentation
	const data = {
		documentation: documentationData,
		theme: themeData,
		templates: templatesData,
   };
</script>

<!-- Documentation Sidebar -->
<Sidebar.Root bind:ref class="mt-20 bg-sidebar z-80 md:z-40">
	<Sidebar.Content>
    <ScrollArea class="h-full pr-1" orientation="vertical" scrollbarYClasses="hidden">
			<div class="space-y-2 py-4">
        <!-- Group Links -->
        <div class="py-4">
				  <SidebarGroupLinks label="Documentation" items={data.documentation} />
				  <SidebarGroupLinks label="Theme Setup" items={data.theme} />
          <SidebarGroupLinks label="Templates" items={data.templates} />
        </div>
        <!-- OnThisPage Menu -->
        <OnThisPage/>
			</div>
		</ScrollArea>
	</Sidebar.Content>
</Sidebar.Root>
