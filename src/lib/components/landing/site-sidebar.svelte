<script lang="ts">
	import { page } from "$app/state";
	import type { ComponentProps } from "svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    
    import { Button } from "$lib/components/ui/button/index.js";
    import { buttonVariants } from "$lib/components/ui/button/index.js";
	
    // Data & Normalize Path 
	import { sidebarLinks, normalizePath} from "./config";
 
	// Current Path
	let currentPath = $derived(normalizePath(page.url.pathname));
     
    // Binds 
    let { showCloseButton = true, side = "left", ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
    
    // For Close Sidebar when click on Link 
    import { useSidebar } from "$lib/components/ui/sidebar/index.js";
    const sidebar = useSidebar();
</script>

<Sidebar.Root bind:ref {showCloseButton} {side} {...restProps} class="w-full md:w-[16rem] md:pt-14 md:border-none">
    <Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel>Menu</Sidebar.GroupLabel>
			<Sidebar.Menu class="flex flex-col pt-4 px-2">
				<Sidebar.MenuItem>
					<Sidebar.Menu class="space-y-1">
						{#each sidebarLinks as item (item.label)}
							<Sidebar.MenuSubItem>
								<Sidebar.MenuSubButton data-active={currentPath === normalizePath(item.href) ? "true" : undefined}>
									{#snippet child({ props })}
										<a href={item.href} {...props} onclick={() => sidebar.setOpenMobile(false)}>
											<span>{item.label}</span>
										</a>
									{/snippet}
								</Sidebar.MenuSubButton>
							</Sidebar.MenuSubItem>
						{/each}
					</Sidebar.Menu>
				</Sidebar.MenuItem>
			</Sidebar.Menu>
		</Sidebar.Group>
	</Sidebar.Content>
</Sidebar.Root>








