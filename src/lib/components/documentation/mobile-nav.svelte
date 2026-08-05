<script lang="ts">
	import { page } from "$app/state";
	import type { ComponentProps } from "svelte";

	// UI
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import Button from "$lib/components/ui/button/button.svelte";
    import { buttonVariants } from "$lib/components/ui/button/index.js";
    
    // Icons
	import { PanelBottomOpen } from "@lucide/svelte/icons";
    
	// Data
	import { docsPrimaryPages, docsSecondaryPages, normalizeDocsPath } from "./data.ts";

	// Current Path
	let currentPath = $derived(normalizeDocsPath(page.url.pathname));
    
	// For Close Sidebar when click on Link
	import { useSidebar } from "$lib/components/ui/sidebar/index.js";
	const sidebar = useSidebar();

	// Sidebar Position
	let sidebarPosition = "bottom";
	let {
		showCloseButton = true,
		side = sidebarPosition,
		ref = $bindable(null),
		...restProps
	}: ComponentProps<typeof Sidebar.Root> = $props();
</script>


       <!-- Btn Trigger --> 
        <div>
            <Button
			    class="bg-transparent text-primary md:hidden lg:hidden"
			    size="icon-sm"
			    onclick={() => sidebar.toggle()}
		    >
			    <PanelBottomOpen class="size-4" />
			    <span class="sr-only">Toggle Docs Sidebar</span>
		    </Button>
         </div>
         
	<Sidebar.Root bind:ref {showCloseButton} {side} {...restProps} class="w-full">
		<Sidebar.Content>
			<Sidebar.Group>
				<Sidebar.GroupLabel>Documentation</Sidebar.GroupLabel>
				<Sidebar.Menu class="flex flex-col gap-4 px-0 pt-4">
					<Sidebar.MenuItem class="flex flex-col gap-2">
						<!-- Get Started - Section -->
						<Sidebar.MenuButton>
							{#snippet child({ props })}
								<span {...props} class="ml-2 text-xs font-normal text-primary/80">Get Started</span>
							{/snippet}
						</Sidebar.MenuButton>
						<!-- Resources - Section -->
						<Sidebar.MenuSub>
							{#each docsPrimaryPages as item (item.title)}
								<Sidebar.MenuSubItem>
									<Sidebar.MenuSubButton
										data-active={currentPath === normalizeDocsPath(item.href) ? "true" : undefined}
									>
										{#snippet child({ props })}
											<a href={item.href} {...props} onclick={() => sidebar.setOpenMobile(false)}>
												<span>{item.title}</span>
											</a>
										{/snippet}
									</Sidebar.MenuSubButton>
								</Sidebar.MenuSubItem>
							{/each}
						</Sidebar.MenuSub>
					</Sidebar.MenuItem>

					<Sidebar.MenuItem class="flex flex-col gap-2">
						<Sidebar.MenuButton>
							{#snippet child({ props })}
								<span {...props} class="ml-2 text-xs font-normal text-primary/80">Resources</span>
							{/snippet}
						</Sidebar.MenuButton>

						<Sidebar.MenuSub>
							{#each docsSecondaryPages as item (item.title)}
								<Sidebar.MenuSubItem>
									<Sidebar.MenuSubButton
										data-active={currentPath === normalizeDocsPath(item.href) ? "true" : undefined}
									>
										{#snippet child({ props })}
											<a href={item.href} {...props} onclick={() => sidebar.setOpenMobile(false)}>
												<span>{item.title}</span>
											</a>
										{/snippet}
									</Sidebar.MenuSubButton>
								</Sidebar.MenuSubItem>
							{/each}
						</Sidebar.MenuSub>
					</Sidebar.MenuItem>
				</Sidebar.Menu>
			</Sidebar.Group>
		</Sidebar.Content>
	</Sidebar.Root>