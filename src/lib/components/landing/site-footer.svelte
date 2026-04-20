<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { cn } from "$lib/utils";
	import Logo from "$lib/svgs/logo.svelte";
	import { MoonIcon, SunIcon } from "@lucide/svelte";
	import { SvelteDate } from "svelte/reactivity";

	import { socialLinks, BlocksLinks, DocumentationLinks, ResourcesLinks } from "./config";

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
				<!-- Logon -->
				<a aria-label="home" class="flex items-center gap-1" href="/">
					<Logo />
					<span class="font-mono font-medium tracking-tight">Svelte UI</span>
				</a>
				<p class="max-w-sm text-sm text-balance text-muted-foreground">
					Save hours of design time with clean, ready-to-use shadcn blocks.
				</p>
				<div class="flex gap-2">
					<!-- ThemeToggle Btn -->
					<Button onclick={toggleMode} variant="outline" size="icon-sm">
						{#if mode.current === "dark"}
							<SunIcon class="size-4" />
						{:else}
							<MoonIcon class="size-4" />
						{/if}
					</Button>
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
			</div>

			<!-- Links -->
			<div class="col-span-8 flex justify-center md:col-span-4">
				<!-- Blocks -->
				<div class="w-full">
					<span class="text-xs text-muted-foreground">All Blocks</span>
					<div class="mt-2 flex flex-col gap-2">
						{#each BlocksLinks as item (item.title)}
							<a class="w-max text-sm hover:underline" href={item.href}>
								{item.title}
							</a>
						{/each}
					</div>
				</div>

				<!-- Documentation -->
				<div class="w-full">
					<span class="text-xs text-muted-foreground">Documentation</span>
					<div class="mt-2 flex flex-col gap-2">
						{#each DocumentationLinks as item (item.title)}
							<a class="w-max text-sm hover:underline" href={item.href}>
								{item.title}
							</a>
						{/each}
					</div>
				</div>

				<!-- Resources -->
				<div class="w-full">
					<span class="text-xs text-muted-foreground">Resources</span>
					<div class="mt-2 flex flex-col gap-2">
						{#each ResourcesLinks as item (item.title)}
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
