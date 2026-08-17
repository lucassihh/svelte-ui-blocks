<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { createScroll } from "$lib/hooks/use-scroll.svelte";
	import Logo from "$lib/assets/svg/logo.svelte";
	import { cn } from "$lib/utils";
	import DesktopNav from "./desktop-nav.svelte";
	import MobileNav from "./mobile-nav.svelte";
	import { navLinks } from "./nav-links";
	let scroll = createScroll(10);
</script>

<header
	class={cn(
		"top-0 max-w-5xl shadow-sm backdrop-blur-sm ease-out md:transition-all md:ease-out sticky  z-50 mx-auto w-full border-b border-border transition-[max-width] duration-300 supports-backdrop-filter:bg-background/50",
		scroll.scrolled &&
			"backdrop-blur-sm md:top-2 md:max-w-4xl md:shadow rounded-full border border-border bg-background/95 supports-backdrop-filter:bg-background/50"
	)}
>
	<nav
		class={cn(
			"h-14 px-4 md:h-14 md:transition-all md:ease-out flex w-full items-center justify-between",
			scroll.scrolled && "md:h-12 md:px-2"
		)}
	>
		<div class="gap-2 flex items-center">
			<a class="p-2 rounded-md hover:bg-muted dark:hover:bg-muted/50" href="/">
				<Logo class="h-4" />
			</a>
			<div aria-hidden="true" class="h-6 md:w-px shrink-0 bg-border"></div>
			<DesktopNav />
		</div>
		<div>
			<Button size="sm" class="rounded-full" variant="outline">Sign In</Button>
			<Button size="sm" class="rounded-full">Get Started</Button>
		</div>
		<MobileNav />
	</nav>
</header>


<!-- Content Example -->
<main class="flex flex-col gap-4">
    <div class="flex items-center justify-center p-20 mt-10 bg-card border border-border">
        <h1>Content Here</h1>
    </div> 
    
    <div class="flex items-center justify-center p-20 mt-10 bg-card border border-border">
        <h1>Content Here</h1>
    </div>
    
    <div class="flex items-center justify-center p-20 mt-10 bg-card border border-border">
        <h1>Content Here</h1>
    </div>                 
    
    <div class="flex items-center justify-center p-20 mt-10 bg-card border border-border">
        <h1>Content Here</h1>
    </div> 
</main>