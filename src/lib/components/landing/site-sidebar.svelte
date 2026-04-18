<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Sheet from "$lib/components/ui/sheet/index.js";
	import { buttonVariants } from "$lib/components/ui/button/index.js";

	// Icons
	import { MoonIcon, SunIcon, MenuIcon, XIcon } from "@lucide/svelte/icons";

	// Data
	import { sidebarLinks } from "./config";

	// State and Binds
	let open = $state(false);
	let showCloseButton = false;
	let side = "left";

	// Get Current Theme
	import { mode, toggleMode } from "mode-watcher";
	function themeLabel() {
		return mode.current === "dark" ? "Switch to light mode" : "Switch to dark mode";
	}
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
		<Sheet.Header class="flex flex-row items-center justify-between">
			<Sheet.Title class="text-xl font-medium">Menu</Sheet.Title>
			<!-- ThemeToggle Btn -->
			<div>
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
		</Sheet.Header>

		<!-- Main Content -->
		<main class="pl-2">
			<div class="flex flex-col">
				<!-- Links -->
				{#each sidebarLinks as link}
					<a
						href={link.href}
						onclick={() => {
							open = false;
						}}
						class={buttonVariants({ variant: "ghost" }) + " w-full justify-start gap-2"}
					>
						<span>{link.label}</span>
					</a>
				{/each}
			</div>
		</main>

		<!-- Footer -->
		<Sheet.Footer>
			<!-- Close Btn Footer -->
			<Sheet.Close class={buttonVariants({ variant: "outline" })}>Close</Sheet.Close>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
