<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Portal, PortalBackdrop } from "$lib/components/ui/portal";
	import { cn } from "$lib/utils";
	import { MenuIcon, XIcon } from "@lucide/svelte";
	import LinkItem from "./link-item.svelte";
	import { productLinks, companyLinks, companyLinks2 } from "./nav-links";

	let open = $state(false);
</script>

<div class="md:hidden">
	<Button
		aria-controls="mobile-menu"
		aria-expanded={open}
		aria-label="Toggle menu"
		class="md:hidden"
		onclick={() => (open = !open)}
		size="icon"
		variant="outline"
	>
		<div class={cn("transition-all", open ? "scale-100 opacity-100" : "scale-0 opacity-0")}>
			<XIcon />
		</div>
		<div
			class={cn("absolute transition-all", open ? "scale-0 opacity-0" : "scale-100 opacity-100")}
		>
			<MenuIcon />
		</div>
	</Button>
	{#if open}
		<Portal class="top-14">
			<PortalBackdrop />
			<div
				class={cn(
					"p-4 size-full overflow-y-auto",
					"ease-out data-[slot=open]:animate-in data-[slot=open]:zoom-in-97"
				)}
				data-slot={open ? "open" : "closed"}
			>
				<div class="gap-y-2 flex w-full flex-col">
					<span class="text-sm">Product</span>
					{#each productLinks as link}
						<LinkItem class="p-2 rounded-lg active:bg-muted dark:active:bg-muted/50" {...link} />
					{/each}
					<span class="text-sm">Company</span>
					{#each companyLinks as link}
						<LinkItem class="p-2 rounded-lg active:bg-muted dark:active:bg-muted/50" {...link} />
					{/each}
					{#each companyLinks2 as link}
						<LinkItem class="p-2 rounded-lg active:bg-muted dark:active:bg-muted/50" {...link} />
					{/each}
				</div>
				<div class="mt-5 gap-2 flex flex-col">
					<Button class="w-full" variant="outline">Sign In</Button>
					<Button class="w-full">Get Started</Button>
				</div>
			</div>
		</Portal>
	{/if}
</div>
