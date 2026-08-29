<script lang="ts">
	// UI
  import AnimatedShinyText from "$lib/components/ui/magic-ui/animated-shiny-text/animated-shiny-text.svelte";
	import { Button } from "$lib/components/ui/button";

	// Hooks & Other
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
</script>

<header class="sticky top-0 z-50 w-full bg-background/20 p-2 px-4 backdrop-blur-sm">
	<nav class="flex h-11 w-full items-center justify-between">
		<!-- MobileNav & Logo -->
		<div class="flex items-center gap-1">
			<MobileNav />
			<!-- Logo -->
				<a aria-label="home" class="flex items-center gap-1" href="/">
					<Logo />
          <AnimatedShinyText
		  	class="transition ease-out text-primary"
	  	>
					<span class="font-mono font-medium tracking-tight">Svelte UI</span>
          </AnimatedShinyText>
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
