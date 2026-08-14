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
</script>

<Drawer.Root direction={DRAWER_SIDE} bind:open>
	<!-- Open Btn -->
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
		<div class="px-4 pb-4 no-scrollbar overflow-y-auto">
			<nav class="gap-6 flex flex-col">
				<!-- Get Started - Section -->
				<div class="gap-2 flex flex-col">
					<span class="px-2 text-xs font-normal text-primary/80">Get Started</span>
					<ul class="ml-2 gap-1 pl-2 flex flex-col border-l border-border/60">
						{#each docsPrimaryPages as item (item.title)}
							{@const isActive = currentPath === normalizeDocsPath(item.href)}
							<li>
								<a
									href={item.href}
									onclick={() => (open = false)}
									class="px-3 py-1.5 text-sm block rounded-md transition-colors hover:bg-accent/50 hover:text-foreground {isActive
										? 'font-medium bg-accent text-foreground'
										: 'text-muted-foreground'}"
								>
									{item.title}
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Resources - Section -->
				<div class="gap-2 flex flex-col">
					<span class="px-2 text-xs font-normal text-primary/80">Resources</span>
					<ul class="ml-2 gap-1 pl-2 flex flex-col border-l border-border/60">
						{#each docsSecondaryPages as item (item.title)}
							{@const isActive = currentPath === normalizeDocsPath(item.href)}
							<li>
								<a
									href={item.href}
									onclick={() => (open = false)}
									class="px-3 py-1.5 text-sm block rounded-md transition-colors hover:bg-accent/50 hover:text-foreground {isActive
										? 'font-medium bg-accent text-foreground'
										: 'text-muted-foreground'}"
								>
									{item.title}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</nav>
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
