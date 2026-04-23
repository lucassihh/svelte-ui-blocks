<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { GithubIcon, XIcon } from "$lib/svgs/social/";
	import Logo from "$lib/svgs/logo.svelte";
	import { MoonIcon, SunIcon, PanelLeftOpen } from "@lucide/svelte/icons";
	import { mode, toggleMode } from "mode-watcher";
    
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    
    // Data
	import { sidebarLinks, socialLinks } from "./config";

	// Sidebar for Mobile
	import SiteSidebar from "$lib/components/landing/site-sidebar.svelte";
    
    // For Custom Button Sidebar
    import { useSidebar } from "$lib/components/ui/sidebar/index.js";
    const sidebar = useSidebar();
    
    
	// Get Current Theme
	function themeLabel() {
		return mode.current === "dark" ? "Switch to light mode" : "Switch to dark mode";
	}
</script>

<header
	class="relative sticky top-0 z-50 mx-auto w-full max-w-7xl border-b border-border/80 bg-background"
>
	<nav class="flex items-center justify-between gap-2 p-4">
		<!-- Mobile Sidebar & Logo -->
		<div class="flex items-center gap-2">
			<!-- Mobile Sidebar -->
			<div class="md:hidden">
                <!-- Sidebar Trigger -->
                <Button 
                        variant="outline" 
                        size="icon-sm" 
                        onclick={() => sidebar.toggle()}
                    >
                        <PanelLeftOpen class="size-5 text-primary" />
                    </Button>
				<SiteSidebar />
			</div>
			<!-- Logon -->
			<a aria-label="home" class="flex items-center gap-1" href="/">
				<Logo />
				<span class="font-mono font-medium tracking-tight">Svelte UI</span>
			</a>
		</div>

		<!-- Desktop Links -->
		<div class="hidden flex-1 items-center justify-center md:flex">
			<div class="flex items-center gap-1">
				{#each sidebarLinks as link}
					<a
						class="px-3 text-sm text-muted-foreground hover:text-foreground"
						href={link.href}
						size="sm"
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>

		<!-- Social Links & ThemeToggle Btn -->
		<div class="flex items-center gap-2">
			<div class="flex items-center gap-1">
				<!-- Social -->
				{#each socialLinks as item, index (`social-${item.link}-${index}`)}
					{@const SocialIcon = item.icon}
					<Button
						href={item.link}
						aria-label={item.label}
						rel="noreferrer"
						size="icon-sm"
						target="_blank"
						variant="outline"
					>
						<SocialIcon class="size-4" />
					</Button>
				{/each}
			</div>
			<!-- Desktop ThemeToggle Btn -->
			<div class="hidden md:block">
				<Button
					aria-label={themeLabel()}
					size="icon-sm"
					title={themeLabel()}
					variant="secondary"
					onclick={toggleMode}
				>
					{#if mode.current === "dark"}
						<SunIcon class="size-4" />
					{:else}
						<MoonIcon class="size-4" />
					{/if}
				</Button>
			</div>
		</div>
	</nav>
</header>
