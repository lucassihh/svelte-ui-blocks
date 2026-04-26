<script lang="ts">
    import { page } from "$app/state";
    
	import { Button } from "$lib/components/ui/button";
    import { buttonVariants } from "$lib/components/ui/button/index.js";
	
    // Icons 
	import { MoonIcon, SunIcon, PanelLeftOpen } from "@lucide/svelte/icons";
    import { GithubIcon, XIcon } from "$lib/svgs/social/";
	import Logo from "$lib/svgs/logo.svelte";
    
    // Data
	import { sidebarLinks, socialLinks } from "./config";

    // For Custom Button Sidebar
    import { useSidebar } from "$lib/components/ui/sidebar/index.js";
    const sidebar = useSidebar();
    
	// Theme
    import { mode, toggleMode } from "mode-watcher";
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
			<!-- Mobile Sidebar Trigger -->
             <div class="block md:hidden lg:hidden">
                <Button 
                    variant="secondary" 
                    size="icon-sm" 
                    onclick={() => sidebar.toggle()}
                >
                    <PanelLeftOpen class="size-4" />
                </Button>
             </div> 
             
			<!-- Logo -->
			<a aria-label="home" class="flex items-center gap-1" href="/">
				<Logo />
				<span class="font-mono font-medium tracking-tight">Svelte UI</span>
			</a>
		</div>

		<!-- Desktop Links -->
		<div class="hidden md:flex items-center">
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

		<!-- Social Links & ThemeToggle Btn -->
	    <div class="flex items-center gap-2">
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
			
			    <!-- ThemeToggle Btn -->
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
	</nav>
</header>
