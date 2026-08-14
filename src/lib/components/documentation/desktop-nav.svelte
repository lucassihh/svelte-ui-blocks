<script lang="ts">
	import { page } from "$app/state";

	// Data
	import { docsPrimaryPages, docsSecondaryPages, normalizeDocsPath } from "./data.ts";

	// Current Path
	let currentPath = $derived(normalizeDocsPath(page.url.pathname));
</script>

<!-- Sidebar Desktop - Hidden on Mobile -->
<aside class="pr-2 w-[16rem] shrink-0">
	<div class="gap-4 pt-2 flex flex-col">
		<span class="px-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
			Documentation
		</span>

		<nav class="gap-6 flex flex-col">
			<!-- Get Started - Section -->
			<div class="gap-2 flex flex-col">
				<span class="px-2 text-xs font-normal text-primary/80">Get Started</span>
				<ul class="ml-2 gap-1 pl-2 flex flex-col border-l border-border/60">
					{#each docsPrimaryPages as item (item.title)}
						{@const isActive = currentPath === normalizeDocsPath(item.href)}
						<li>
							<a
								href={item.href}
								class="px-3 py-1.5 text-sm block rounded-md transition-colors hover:bg-accent/50 hover:text-foreground {isActive
									? 'font-medium bg-accent text-foreground'
									: 'text-muted-foreground'}"
							>
								{item.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Resources - Section -->
			<div class="gap-2 flex flex-col">
				<span class="px-2 text-xs font-normal text-primary/80">Resources</span>
				<ul class="ml-2 gap-1 pl-2 flex flex-col border-l border-border/60">
					{#each docsSecondaryPages as item (item.title)}
						{@const isActive = currentPath === normalizeDocsPath(item.href)}
						<li>
							<a
								href={item.href}
								class="px-3 py-1.5 text-sm block rounded-md transition-colors hover:bg-accent/50 hover:text-foreground {isActive
									? 'font-medium bg-accent text-foreground'
									: 'text-muted-foreground'}"
							>
								{item.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</nav>
	</div>
</aside>
