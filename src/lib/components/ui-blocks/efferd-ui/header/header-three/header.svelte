<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { createScroll } from "$lib/hooks/use-scroll.svelte";
	import Logo from "$lib/assets/svg/logo.svelte";
	import { cn } from "$lib/utils";
	import DesktopNav from "./desktop-nav.svelte";
	import MobileNav from "./mobile-nav.svelte";

	let scroll = createScroll(50);
</script>

<header
	class={cn(
		"top-0 sticky z-50 w-full border-b border-transparent",
		scroll.scrolled &&
			"backdrop-blur-sm border-border bg-background/95 supports-backdrop-filter:bg-background/50"
	)}
>
	<nav class="h-14 max-w-5xl px-4 mx-auto flex w-full items-center justify-between">
		<div class="gap-5 flex items-center">
			<a class="px-3 py-2.5 rounded-lg hover:bg-muted dark:hover:bg-muted/50" href="/">
				<Logo class="h-4" />
			</a>
			<DesktopNav />
		</div>
		<div class="gap-2 md:flex hidden items-center">
			<Button variant="outline">Sign In</Button>
			<Button>Get Started</Button>
		</div>
		<MobileNav />
	</nav>
</header>

<!-- Content Example -->
<main class="gap-4 flex flex-col">
	<div class="p-20 mt-10 flex items-center justify-center border border-border bg-card">
		<h1>Content Here</h1>
	</div>

	<div class="p-20 mt-10 flex items-center justify-center border border-border bg-card">
		<h1>Content Here</h1>
	</div>

	<div class="p-20 mt-10 flex items-center justify-center border border-border bg-card">
		<h1>Content Here</h1>
	</div>

	<div class="p-20 mt-10 flex items-center justify-center border border-border bg-card">
		<h1>Content Here</h1>
	</div>
</main>
