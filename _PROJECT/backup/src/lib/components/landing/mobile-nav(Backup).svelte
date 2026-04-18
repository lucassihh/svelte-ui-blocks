<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Portal, PortalBackdrop } from "$lib/components/ui/portal";
	import { Github, X as XLogo } from "$lib/svgs";
	import { cn } from "$lib/utils";
	import { MenuIcon, XIcon } from "@lucide/svelte";
	import { landingNavLinks, landingSocialLinks } from "./config";
	let open = $state(false);

	function closeMenu() {
		open = false;
	}
</script>

<nav class="md:hidden">
	<!-- Open / Close Btn -->
	<Button
		aria-controls="site-mobile-menu"
		aria-expanded={open}
		aria-label={open ? "Close menu" : "Open menu"}
		class="border-border/80 bg-background/70 backdrop-blur-sm"
		size="icon-sm"
		variant="outline"
		onclick={() => (open = !open)}
	>
		{#if open}
			<XIcon class="size-4" />
		{:else}
			<MenuIcon class="size-4" />
		{/if}
	</Button>

	{#if open}
		<!-- Main Menu -->
		<div class="z-100 h-full w-full bg-green-400">
			<span class="Hello World"></span>
		</div>
	{/if}
</nav>
