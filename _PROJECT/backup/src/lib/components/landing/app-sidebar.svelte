<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Sheet from "$lib/components/ui/sheet/index.js";
	import { buttonVariants } from "$lib/components/ui/button/index.js";

	// Icons
	import {
		CalendarIcon,
		HouseIcon,
		InboxIcon,
		SearchIcon,
		SettingsIcon,
		XIcon,
		MenuIcon
	} from "@lucide/svelte/icons";

	// Data
	import { landingNavLinks, landingSocialLinks } from "./config";
	let open = $state(false);
	let showCloseButton = true;
	let side = "left";
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger class={buttonVariants({ variant: "secondary", size: "icon-sm" })}>
		{#if !open}
			<MenuIcon />
		{:else}
			<XIcon />
		{/if}
	</Sheet.Trigger>

	<Sheet.Content bind:showCloseButton bind:side>
		<!-- Header -->
		<Sheet.Header class="relative">
			<Sheet.Title>Menu</Sheet.Title>
		</Sheet.Header>

		<!-- Main Content -->
		<main class="p-4">
			<div class="flex flex-col gap-2">
				<!-- Links -->
				{#each landingNavLinks as link}
					<a
						href={link.href}
						onclick={() => {
							open = false;
						}}
						class={buttonVariants({ variant: "ghost" }) + " w-full justify-start gap-3"}
					>
						<span>{link.label}</span>
					</a>
				{/each}
			</div>
		</main>

		<!-- Footer -->
		<Sheet.Footer class="hidden">
			<Sheet.Close class={buttonVariants({ variant: "outline" })}>Close</Sheet.Close>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
