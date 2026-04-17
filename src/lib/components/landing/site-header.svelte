<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { GithubIcon, XIcon } from "$lib/svgs/social/";
    import Logo from "$lib/svgs/logo.svelte";
	import { MoonIcon, SunIcon } from "@lucide/svelte";
	import { mode, toggleMode } from "mode-watcher";
    
	import { landingNavLinks, landingSocialLinks } from "./config";
   
    // Sidebar for Mobile
    import AppSidebar from "$lib/components/landing/app-sidebar.svelte";
    
    // Get Current Theme 
	function themeLabel() {
		return mode.current === "dark" ? "Switch to light mode" : "Switch to dark mode";
	}
</script>

<header class="sticky top-0 bg-background/20 backdrop-blur-sm relative z-50 w-full max-w-7xl mx-auto border-b border-border/80">
	<nav class="flex items-center justify-between gap-2 p-4">
        <!-- Mobile Sidebar & Logo -->
        <div class="flex items-center gap-2">
            <!-- Mobile Sidebar -->
            <div class="md:hidden">
                <AppSidebar />
            </div>  
            <!-- Logon -->
            <a aria-label="home" class="flex items-center gap-1" href="/">
                <Logo/>
			    <span class="font-mono font-medium tracking-tight">Svelte UI</span>
		    </a>
        </div>
        
        <!-- Desktop Links -->
		<div class="hidden flex-1 items-center justify-center md:flex">
			<div class="flex items-center gap-1">
				{#each landingNavLinks as link}
					<Button
						class="px-3 text-sm text-muted-foreground hover:text-foreground"
						href={link.href}
						size="sm"
						variant="ghost"
					>
						{link.label}
					</Button>
				{/each}
			</div>
		</div>
        
        <!-- Social Links & ThemeToggle Btn --> 
		<div class="flex items-center gap-2">
            <div class="flex items-center gap-1 bg-card rounded-xl p-0.5">
		   	{#each landingSocialLinks as link}
				    <Button
					    target="_blank"
					    aria-label={link.label}
					    href={link.href}
					    size="icon-sm"
					    variant="ghost"
				    >
					    {#if link.id === "x"}
						    <XIcon class="size-4" />
					    {:else}
						    <GithubIcon class="size-4" />
					    {/if}
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
