<script lang="ts">
	import { page } from "$app/state";
	import type { ComponentProps } from "svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    
    // Icons
	import { MoonIcon, SunIcon } from "@lucide/svelte/icons";
    
    import { Button } from "$lib/components/ui/button/index.js";
    import { buttonVariants } from "$lib/components/ui/button/index.js";
	
    // Data & Normalize Path 
	import { sidebarLinks, normalizePath} from "./config";
 
	// Current Path
	let currentPath = $derived(normalizePath(page.url.pathname));
     
    // Binds 
    let { showCloseButton = true, side = "left", ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
     
    // Get Current Theme
	import { mode, toggleMode } from "mode-watcher";
	function themeLabel() {
		return mode.current === "dark" ? "Switch to light mode" : "Switch to dark mode";
	}
    
    // For Close Sidebar when click on Link 
    import { useSidebar } from "$lib/components/ui/sidebar/index.js";
    const sidebar = useSidebar();
</script>

<Sidebar.Root bind:ref {showCloseButton} {side} {...restProps} class="w-full md:w-[16rem] md:pt-14 md:border-none">
    <Sidebar.Content>
        <!-- ThemeToggle Btn -->
			<div class="absolute top-3 right-12 z-20">
				<Button
					aria-label={themeLabel()}
					size="icon-sm"
					title={themeLabel()}
					variant="secondary"
					onclick={toggleMode}
				>
					{#if mode.current === "dark"}
						<SunIcon class="size-4" />
					{:else}
						<MoonIcon class="size-4" />
					{/if}
				</Button>
			</div>
		<Sidebar.Group>
			<Sidebar.GroupLabel>Main Menu</Sidebar.GroupLabel>
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








