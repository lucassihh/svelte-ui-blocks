<script lang="ts">
	import { page } from "$app/state";

	// Data
	import { docsPrimaryPages, docsSecondaryPages, normalizeDocsPath } from "./data.ts";

	// Current Path
	let currentPath = $derived(normalizeDocsPath(page.url.pathname));
</script>

<!-- Sidebar Desktop - Hidden on Mobile -->
<aside class="w-[16rem] shrink-0 pr-2">
	<div class="flex flex-col gap-4 pt-2">
		<span class="px-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
			Documentation
		</span>

		<nav class="flex flex-col gap-6">
			<!-- Get Started - Section -->
			<div class="flex flex-col gap-2">
				<span class="px-2 text-xs font-normal text-primary/80">Get Started</span>
				<ul class="ml-2 flex flex-col gap-1 border-l border-border/60 pl-2">
					{#each docsPrimaryPages as item (item.title)}
						{@const isActive = currentPath === normalizeDocsPath(item.href)}
						<li>
							<a
								href={item.href}
								class="block rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-accent/50 hover:text-foreground {isActive
									? 'bg-accent font-medium text-foreground'
									: 'text-muted-foreground'}"
							>
								{item.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Resources - Section -->
			<div class="flex flex-col gap-2">
				<span class="px-2 text-xs font-normal text-primary/80">Resources</span>
				<ul class="ml-2 flex flex-col gap-1 border-l border-border/60 pl-2">
					{#each docsSecondaryPages as item (item.title)}
						{@const isActive = currentPath === normalizeDocsPath(item.href)}
						<li>
							<a
								href={item.href}
								class="block rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-accent/50 hover:text-foreground {isActive
									? 'bg-accent font-medium text-foreground'
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
