<script lang="ts">
    // Hooks & Other
    import { cn } from "$lib/utils";
    import { SvelteDate } from "svelte/reactivity";
    
    // Icon
	import Logo from "$lib/assets/svg/logo.svelte";
	
	// Data
	import {footerLinks, documentationLinks, otherResourcesLinks } from "./footer-links.ts";
    
    // Local Imports
    import SocialLinks from "./social-links.svelte";
    import ThemeToggle from "./theme-toggle.svelte";
   
	// Get Current Theme
	import { mode, toggleMode } from "mode-watcher";
	function themeLabel() {
		return mode.current === "dark" ? "Switch to light mode" : "Switch to dark mode";
	}

	// Get Current Year
	const currentYear = new SvelteDate().getFullYear();
</script>

<footer class="relative">
	<div
		class={cn(
			"mx-auto w-full max-w-7xl border-t border-border py-8",
			"dark:bg-[radial-gradient(35%_80%_at_15%_0%,--theme(--color-foreground/.1),transparent)]"
		)}
	>
		<div class="grid grid-cols-1 gap-8 px-4 md:grid-cols-8 md:gap-0">
			<div class="col-span-8 flex flex-col gap-4 md:col-span-4">
				<!-- Logo -->
				<a aria-label="home" class="flex items-center gap-1" href="/">
					<Logo />
					<span class="font-mono font-medium tracking-tight">Svelte UI</span>
				</a>
				<p class="max-w-sm text-sm text-balance text-muted-foreground">
					Save hours of design time with clean, ready-to-use shadcn blocks.
				</p>
                <!-- ThemeToggle & Social Links -->
				<div class="flex gap-2">
					<ThemeToggle/>
					<SocialLinks/>
				</div>
			</div>

			<!-- Links -->
			<div class="col-span-8 flex justify-center md:col-span-4">
				<!-- Footer Links -->
				<div class="w-full">
					<span class="text-xs text-muted-foreground">All Blocks</span>
					<div class="mt-2 flex flex-col gap-2">
						{#each footerLinks as item (item.title)}
							<a class="w-max text-sm hover:underline" href={item.href}>
								{item.title}
							</a>
						{/each}
					</div>
				</div>

				<!-- Documentation Links -->
				<div class="w-full">
					<span class="text-xs text-muted-foreground">Documentation</span>
					<div class="mt-2 flex flex-col gap-2">
						{#each documentationLinks as item (item.title)}
							<a class="w-max text-sm hover:underline" href={item.href}>
								{item.title}
							</a>
						{/each}
					</div>
				</div>

				<!-- Other Links -->
				<div class="w-full">
					<span class="text-xs text-muted-foreground">Other Resources</span>
					<div class="mt-2 flex flex-col gap-2">
						{#each otherResourcesLinks as item (item.title)}
							<a class="w-max text-sm hover:underline" href={item.href}>
								{item.title}
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
