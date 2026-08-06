<script lang="ts">
	import { page } from "$app/state";

	import * as Drawer from "$lib/components/ui/drawer/index.js";
	import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
	import { cn } from "$lib/utils.js";

	// Direction
	const DRAWER_SIDE = "bottom";
	let open = $state(false);

	// Icon
	import { SquareChevronUp } from "@lucide/svelte";

	// Data
	import { docsPrimaryPages, docsSecondaryPages, normalizeDocsPath } from "./data.ts";

	// Current Path
	let currentPath = $derived(normalizeDocsPath(page.url.pathname));

	// For menu Style
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
</script>

<Drawer.Root direction={DRAWER_SIDE} bind:open>
	<Drawer.Trigger
		class={cn(buttonVariants({ variant: "secondary", size: "icon-sm" }), "capitalize")}
	>
		<SquareChevronUp />
	</Drawer.Trigger>

	<Drawer.Content
		class="data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh]"
	>
		<Drawer.Header>
			<Drawer.Title>Documentation</Drawer.Title>
			<!-- <Drawer.Description>Set your daily activity goal.</Drawer.Description> -->
		</Drawer.Header>

		<!-- Content -->
		<div class="no-scrollbar overflow-y-auto px-4 pb-4">
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
										<a href={item.href} {...props} onclick={() => (open = false)}>
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
										<a href={item.href} {...props} onclick={() => (open = false)}>
											<span>{item.title}</span>
										</a>
									{/snippet}
								</Sidebar.MenuSubButton>
							</Sidebar.MenuSubItem>
						{/each}
					</Sidebar.MenuSub>
				</Sidebar.MenuItem>
			</Sidebar.Menu>
		</div>

		<!-- 
        <Drawer.Footer>
     <Drawer.Close class={buttonVariants({ variant: "outline" })}
      >Close</Drawer.Close
     >
    </Drawer.Footer> 
   -->
	</Drawer.Content>
</Drawer.Root>
