<script lang="ts">
	import { page } from "$app/state";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import Badge from "$lib/components/ui/badge/badge.svelte";
  // Icons
  import Icon from "@iconify/svelte"
	import { cn } from "$lib/utils";

	type Item = {
		title: string;
		url: string;
		badge?: string;
		external?: boolean;
	};

	let {
		items,
		label = "Guide",
	}: {
		items: Item[];
		label?: string;
	} = $props();

	const isActive = (item: Item) => {
		if (item.external || !item.url.startsWith("/")) return false;
		return page.url.pathname === item.url;
	};
</script>

<!-- Sidebar Group Links -->
<Sidebar.Group>
	<Sidebar.GroupLabel class="flex items-center gap-2">
    <!-- Show Icon According to Label Name -->
		<span>
			{#if label === "Documentation"}
				<Icon icon="solar:documents-line-duotone" class="size-5" />
       {:else if label === "Theme" || label === "Theme Setup"}  
         <Icon icon="solar:devices-bold" class="size-5" />
        {:else if label === "Templates"}   
         <Icon icon="solar:download-bold-duotone" class="size-5" />
			{:else}
			{/if}
		</span>
	 <span class="text-md text-muted-foreground">{label}</span>
	</Sidebar.GroupLabel>

  <Sidebar.Menu>
	  {#each items as item}
		  <Sidebar.MenuItem class="relative ml-7.5 mt-2 -mb-1">
            <!-- Effect -->
	 <div class="absolute left-[-14px] top-[-8px] bottom-0 w-0.5 bg-border"></div>
			  <Sidebar.MenuButton
				  class={cn(
					  "-mt-1 text-sm",
					  { "bg-accent font-medium text-accent-foreground": isActive(item) }
				  )}
			  >
				  {#snippet child({ props })}
					  <a
						  href={item.url}
						  target={item.external ? "_blank" : undefined}
						  rel={item.external ? "noopener noreferrer" : undefined}
						  class="flex items-center w-full"
						  {...props}
					  >
						  <span class="text-md text-primary">{item.title}</span>
						  {#if item.badge}
							  <Badge
								  variant="secondary"
								  class="ml-auto rounded-full px-1.5 py-0 text-[10px] leading-none"
							  >
								  {item.badge}
							  </Badge>
						  {/if}
					  </a>
				  {/snippet}
			  </Sidebar.MenuButton>
		  </Sidebar.MenuItem>
	  {/each}
  </Sidebar.Menu>
</Sidebar.Group>
