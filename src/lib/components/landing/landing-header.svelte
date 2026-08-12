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
		"sticky top-2 z-50 mx-auto flex h-11 w-[92svw] max-w-4xl items-center justify-between rounded-lg border bg-background/95 px-1 shadow-sm backdrop-blur-sm transition-[max-width] duration-300 ease-out supports-backdrop-filter:bg-background/50",
		scroll.scrolled &&
			"border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50 md:top-2 md:max-w-3xl md:shadow"
	)}
>
	<nav
		class={cn(
			"flex h-11 w-full items-center justify-between md:h-11  md:transition-all md:ease-out"
		)}
	>
		<a class="rounded-md border border-border p-2 hover:bg-muted dark:hover:bg-muted/50" href="/">
			<Logo class="h-4" />
		</a>
		<div class="hidden items-center gap-2 md:flex">
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

		<div class="flex items-center gap-1">
			<!-- Social Links & ThemeToggle Btn -->
			<div class="flex items-center gap-2">
				<Social />
				<ThemeToggle />
			</div>
			<MobileNav />
		</div>
	</nav>
</header>
