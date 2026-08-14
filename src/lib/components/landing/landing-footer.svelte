<script lang="ts">
	// Hooks & Other
	import { cn } from "$lib/utils";

	// Icon
	import Logo from "$lib/assets/svg/logo.svelte";

	// Data
	import { blocksLinks, documentationLinks } from "./footer-links.ts";

	// Local Imports
	import Social from "./social.svelte";
	import ThemeToggle from "./theme-toggle.svelte";

	// Get Current Year
	import { SvelteDate } from "svelte/reactivity";
	const currentYear = new SvelteDate().getFullYear();
</script>

<footer class="relative">
	<div
		class={cn(
			"max-w-7xl py-8 mx-auto w-full border-t border-border",
			"dark:bg-[radial-gradient(35%_80%_at_15%_0%,--theme(--color-foreground/.1),transparent)]"
		)}
	>
		<div class="gap-8 px-4 md:grid-cols-8 md:gap-0 grid grid-cols-1">
			<div class="gap-4 md:col-span-4 col-span-8 flex flex-col">
				<!-- Logo -->
				<a aria-label="home" class="gap-1 flex items-center" href="/">
					<Logo />
					<span class="font-medium tracking-tight font-mono">Svelte UI</span>
				</a>
				<p class="max-w-sm text-sm text-balance text-muted-foreground">
					Save hours of design time with clean, ready-to-use shadcn blocks.
				</p>
				<!-- ThemeToggle & Social Links -->
				<div class="gap-2 flex">
					<ThemeToggle />
					<Social />
				</div>
			</div>

			<!-- Links -->
			<div class="md:col-span-4 col-span-8 flex justify-center">
				<!-- Blocks Links -->
				<div class="w-full">
					<span class="text-xs text-muted-foreground">All Blocks</span>
					<div class="mt-2 gap-2 flex flex-col">
						{#each blocksLinks as item (item.title)}
							<a class="text-sm w-max hover:underline" href={item.href}>
								{item.title}
							</a>
						{/each}
					</div>
				</div>

				<!-- Documentation Links -->
				<div class="w-full">
					<span class="text-xs text-muted-foreground">Documentation</span>
					<div class="mt-2 gap-2 flex flex-col">
						{#each documentationLinks as item (item.title)}
							<a class="text-sm w-max hover:underline" href={item.href}>
								{item.title}
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
