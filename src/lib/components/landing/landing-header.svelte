<script lang="ts">
	// UI
	import { Button } from "$lib/components/ui/button";

	// Hooks & Other
	import { cn } from "$lib/utils";

	// Icon
	import { MoonIcon, SunIcon } from "@lucide/svelte";

	// Local Imports
	import MobileNav from "./mobile-nav.svelte";
	import Social from "./social.svelte";
	import ThemeToggle from "./theme-toggle.svelte";

	// Data
	import { navLinks } from "./nav-links";
</script>

<header class="sticky top-0 z-50 w-full bg-background/80 p-2 px-4 backdrop-blur-sm">
	<nav class="flex h-11 w-full items-center justify-between">
		<!-- MobileNav & Logo -->
		<div class="flex items-center gap-1">
			<MobileNav />
			<a href="/">
				<h1>Svelte UI</h1>
			</a>
		</div>
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
		</div>
	</nav>
</header>
