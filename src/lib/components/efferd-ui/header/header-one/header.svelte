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
		"top-0 sticky z-50 w-full border-b border-transparent",
		scroll.scrolled &&
			"backdrop-blur-sm border-border bg-background/95 supports-backdrop-filter:bg-background/50"
	)}
>
	<nav class="h-14 max-w-5xl px-4 mx-auto flex w-full items-center justify-between">
		<a class="p-2 w-fit rounded-md hover:bg-muted dark:hover:bg-muted/50" href="/">
			<Logo class="h-4" />
		</a>
		<div class="gap-2 md:flex hidden items-center">
			{#each navLinks as link}
				<Button href={link.href} size="sm" variant="ghost">
					{link.label}
				</Button>
			{/each}
			<Button size="sm" variant="outline">Sign In</Button>
			<Button size="sm">Get Started</Button>
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