<script lang="ts">
	import { page } from "$app/state";
	import type { ComponentProps } from "svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	
    import { Button } from "$lib/components/ui/button/index.js";
    import { buttonVariants } from "$lib/components/ui/button/index.js";
    
    // Data
    import { docsPrimaryPages, docsSecondaryPages, normalizeDocsPath } from "./config";
 
	// Current Path
	let currentPath = $derived(normalizeDocsPath(page.url.pathname));

    // Hook IsMobile
    import { IsMobile } from "$lib/hooks/is-mobile.svelte.js";
    const isMobile = new IsMobile();

    // For Close Sidebar when click on Link 
    import { useSidebar } from "$lib/components/ui/sidebar/index.js";
    const sidebar = useSidebar();
    
    // Mobile = 'right' no mobile, Desktop = 'left'
    let effectiveSide = $derived(isMobile.current ? "bottom" : "left");
    
    let { showCloseButton = true, ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root bind:ref {showCloseButton} side={effectiveSide} {...restProps} class="w-full md:w-[16rem] md:pt-14 md:border-none">
    <Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel>Documentation</Sidebar.GroupLabel>
			<Sidebar.Menu class="flex flex-col gap-4 px-0 pt-4">
				<Sidebar.MenuItem class="flex flex-col gap-2">
					<Sidebar.MenuButton>
						{#snippet child({ props })}
							<span {...props} class="text-primary/80 text-xs font-normal ml-2">Important</span>
						{/snippet}
					</Sidebar.MenuButton>
					
					<Sidebar.MenuSub>
						{#each docsPrimaryPages as item (item.title)}
							<Sidebar.MenuSubItem>
								<Sidebar.MenuSubButton data-active={currentPath === normalizeDocsPath(item.href) ? "true" : undefined}>
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
							<span {...props} class="text-primary/80 text-xs font-normal ml-2">Resources</span>
						{/snippet}
					</Sidebar.MenuButton>
					
					<Sidebar.MenuSub>
						{#each docsSecondaryPages as item (item.title)}
							<Sidebar.MenuSubItem>
								<Sidebar.MenuSubButton data-active={currentPath === normalizeDocsPath(item.href) ? "true" : undefined}>
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
