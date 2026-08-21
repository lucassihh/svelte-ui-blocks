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

<header class="top-0 sticky w-full z-50 bg-background/90 backdrop-blur-sm p-2 px-4">
	<nav class="h-11 flex w-full items-center justify-between">
        <!-- MobileNav & Logo -->
        <div class="flex items-center gap-1">
            <MobileNav />
		    <a href="/">
			    <h1>Svelte UI</h1>
		    </a>
        </div>    
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
		</div>
	</nav>
</header>
