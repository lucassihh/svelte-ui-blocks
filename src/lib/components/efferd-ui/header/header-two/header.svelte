<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { createScroll } from "$lib/hooks/use-scroll.svelte";
	import Logo from "$lib/assets/svg/logo.svelte";
	import { cn } from "$lib/utils";
	import MobileNav from "./mobile-nav.svelte";
	import { navLinks } from "./nav-links";
	let scroll = createScroll(10);
</script>

<header
	class={cn(
		"top-0 max-w-4xl md:rounded-md md:border md:transition-all md:ease-out sticky z-50 mx-auto w-full border-b border-transparent",
		scroll.scrolled &&
			"backdrop-blur-sm md:top-2 md:max-w-3xl md:shadow border-border bg-background/95 supports-backdrop-filter:bg-background/50"
	)}
>
	<nav
		class={cn(
			"h-14 px-4 md:h-12 md:transition-all md:ease-out flex w-full items-center justify-between",
			scroll.scrolled && "md:px-2"
		)}
	>
		<a class="p-2 rounded-md hover:bg-muted dark:hover:bg-muted/50" href="/">
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
			<Button size="sm" variant="outline">Sign In</Button>
			<Button size="sm">Get Started</Button>
		</div>
		<MobileNav />
	</nav>
</header>
