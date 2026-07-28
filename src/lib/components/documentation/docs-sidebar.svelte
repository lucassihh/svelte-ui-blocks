<script lang="ts">
	import { page } from "$app/state";
	import type { ComponentProps } from "svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	
    import { Button } from "$lib/components/ui/button/index.js";
    import { buttonVariants } from "$lib/components/ui/button/index.js";
    
    // Data
    import { docsPrimaryPages, docsSecondaryPages, normalizeDocsPath } from "./data.ts";
 
	// Current Path
	let currentPath = $derived(normalizeDocsPath(page.url.pathname));

    // For Close Sidebar when click on Link 
    import { useSidebar } from "$lib/components/ui/sidebar/index.js";
    const sidebar = useSidebar();
    
    // Sidebar Position
    let sidebarPosition = "bottom";
    let { showCloseButton = true, side = sidebarPosition, ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>



<!-- Documentation - Sidebar Mobile (Shadcn) -->
<div class="block md:hidden w-full">
	<Sidebar.Root bind:ref {showCloseButton} {side} {...restProps} class="w-full">
		<Sidebar.Content>
			<Sidebar.Group>
				<Sidebar.GroupLabel>Documentation</Sidebar.GroupLabel>
				<Sidebar.Menu class="flex flex-col gap-4 px-0 pt-4">
					<Sidebar.MenuItem class="flex flex-col gap-2">
						<!-- Get Started - Section -->
						<Sidebar.MenuButton>
							{#snippet child({ props })}
								<span {...props} class="text-primary/80 text-xs font-normal ml-2">Get Started</span>
							{/snippet}
						</Sidebar.MenuButton>
						<!-- Resources - Section -->
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
</div>

<!-- Documentation - Sidebar Desktop (Display on MD +, no Shadcn)  -->
<aside class="hidden md:block w-[16rem] shrink-0 pr-2">
	<div class="flex flex-col gap-4 pt-2">
		<span class="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2">
			Documentation
		</span>

		<nav class="flex flex-col gap-6">
			<!-- Get Started - Section -->
			<div class="flex flex-col gap-2">
				<span class="text-primary/80 text-xs font-normal px-2">Get Started</span>
				<ul class="flex flex-col gap-1 border-l border-border/60 ml-2 pl-2">
					{#each docsPrimaryPages as item (item.title)}
						{@const isActive = currentPath === normalizeDocsPath(item.href)}
						<li>
							<a
								href={item.href}
								class="block px-3 py-1.5 text-sm rounded-md transition-colors hover:text-foreground hover:bg-accent/50 {isActive ? 'font-medium text-foreground bg-accent' : 'text-muted-foreground'}"
							>
								{item.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Resources - Section -->
			<div class="flex flex-col gap-2">
				<span class="text-primary/80 text-xs font-normal px-2">Resources</span>
				<ul class="flex flex-col gap-1 border-l border-border/60 ml-2 pl-2">
					{#each docsSecondaryPages as item (item.title)}
						{@const isActive = currentPath === normalizeDocsPath(item.href)}
						<li>
							<a
								href={item.href}
								class="block px-3 py-1.5 text-sm rounded-md transition-colors hover:text-foreground hover:bg-accent/50 {isActive ? 'font-medium text-foreground bg-accent' : 'text-muted-foreground'}"
							>
								{item.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</nav>
	</div>
</aside>
