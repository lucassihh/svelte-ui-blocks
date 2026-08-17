<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Portal, PortalBackdrop } from "$lib/components/ui/portal";
	import { cn } from "$lib/utils";
	import { MenuIcon, XIcon } from "@lucide/svelte";
	import { navLinks } from "./nav-links";
	import { fade } from "svelte/transition";

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
		{#if open}
			<XIcon class="size-4.5" />
		{:else}
			<MenuIcon class="size-4.5" />
		{/if}
	</Button>
	{#if open}
		<Portal class="top-14">
			<PortalBackdrop />
			<div
				class={cn(
					"ease-out data-[slot=open]:animate-in data-[slot=open]:zoom-in-97",
					"p-4 size-full"
				)}
				out:fade|global={{ duration: 150 }}
				data-slot={open ? "open" : "closed"}
			>
				<div class="gap-y-2 grid">
					{#each navLinks as link}
						<Button class="justify-start" variant="ghost" href={link.href}>
							{link.label}
						</Button>
					{/each}
				</div>
				<div class="mt-12 gap-2 flex flex-col">
					<Button class="w-full" variant="outline">Sign In</Button>
					<Button class="w-full">Get Started</Button>
				</div>
			</div>
		</Portal>
	{/if}
</div>
