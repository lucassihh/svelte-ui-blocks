<script lang="ts">
	// UI
	import { Button } from "$lib/components/ui/button";

	// Hooks & Other
	import { createScroll } from "$lib/hooks/use-scroll.svelte";
	import { cn } from "$lib/utils";

	// Icon
	import Logo from "$lib/assets/svg/logo.svelte";
	import { MoonIcon, SunIcon } from "@lucide/svelte";

	// Local Imports
	import MobileNav from "./mobile-nav.svelte";
	import Social from "./social.svelte";
	import ThemeToggle from "./theme-toggle.svelte";

	// Data
	import { navLinks } from "./nav-links";
	let scroll = createScroll(10);
</script>

<header
	class={cn(
		"top-2 h-11 max-w-4xl px-1 shadow-sm backdrop-blur-sm ease-out sticky z-50 mx-auto flex w-[92svw] items-center justify-between rounded-lg border bg-background/95 transition-[max-width] duration-300 supports-backdrop-filter:bg-background/50",
		scroll.scrolled &&
			"backdrop-blur-sm md:top-2 md:max-w-3xl md:shadow border-border bg-background/95 supports-backdrop-filter:bg-background/50"
	)}
>
	<nav
		class={cn(
			"h-11 md:h-11 md:transition-all md:ease-out flex w-full  items-center justify-between"
		)}
	>
		<a class="p-2 rounded-md border border-border hover:bg-muted dark:hover:bg-muted/50" href="/">
			<Logo class="h-4" />
		</a>
		<div class="gap-2 md:flex hidden items-center">
			<div>
				{#each navLinks as { label, href }}
					<Button size="sm" variant="ghost" {href}>
						{label}
					</Button>
				{/each}
			</div>
		</div>
		<div class="hidden">
			<Button size="sm" variant="ghost">Login</Button>
			<Button size="sm">Sign Up</Button>
		</div>

		<div class="gap-1 flex items-center">
			<!-- Social Links & ThemeToggle Btn -->
			<div class="gap-2 flex items-center">
				<Social />
				<ThemeToggle />
			</div>
			<MobileNav />
		</div>
	</nav>
</header>
