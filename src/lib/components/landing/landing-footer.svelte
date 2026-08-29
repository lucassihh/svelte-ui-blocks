<script lang="ts">
	// Hooks & Other
	import { cn } from "$lib/utils";

	// Icon
	import Logo from "$lib/assets/svg/logo.svelte";

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
			"mx-auto w-full max-w-7xl border-t border-border py-8",
			"dark:bg-[radial-gradient(35%_80%_at_15%_0%,--theme(--color-foreground/.1),transparent)]"
		)}
	>
		<div class="grid grid-cols-1 gap-8 px-4 md:grid-cols-8 md:gap-0">
			<div class="col-span-8 flex flex-col gap-4 md:col-span-4">
				<!-- Logo -->
				<a aria-label="home" class="flex items-center gap-1" href="/">
					<Logo />
					<span class="font-mono font-medium tracking-tight">Svelte UI</span>
				</a>
				<p class="max-w-sm text-sm text-balance text-muted-foreground">
					Save hours of design time with clean, ready-to-use shadcn blocks.
				</p>
				<!-- ThemeToggle & Social Links -->
				<div class="flex gap-2">
					<ThemeToggle />
					<Social />
				</div>
			</div>
		</div>
	</div>
</footer>
