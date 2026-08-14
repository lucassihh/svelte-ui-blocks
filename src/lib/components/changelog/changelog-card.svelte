<script lang="ts">
	// Hooks & Other
	import { cn } from "$lib/utils";

	// Icon
	import { Check } from "@lucide/svelte";

	// Local Imports
	import ChangelogChip from "./changelog-chip.svelte";
	import ChangelogDateBadge from "./changelog-date-badge.svelte";

	// Data
	import type { ChangelogEntry } from "./data";

	// Props Types
	type ChangelogCardProps = {
		entry: ChangelogEntry;
		class?: string;
	};

	// Props
	let { entry, class: className }: ChangelogCardProps = $props();
</script>

<article
	class={cn(
		"gap-5 px-5 py-8 sm:px-8 sm:py-10 md:grid-cols-[10.5rem_minmax(0,1fr)] md:gap-8 md:px-12 md:py-8 relative grid",
		className
	)}
>
	<div class="top-6 md:pt-0.5 sticky self-start">
		<ChangelogDateBadge date={entry.date} />
	</div>

	<div class="min-w-0">
		<h2 class="text-xl font-semibold tracking-tight sm:text-xl text-foreground">
			{entry.title}
		</h2>

		{#if entry.description}
			<p class="mt-1 max-w-2xl text-base leading-7 sm:text-base sm:leading-8 text-muted-foreground">
				{entry.description}
			</p>
		{/if}

		{#if entry.bullets?.length}
			<ul class="mt-5 space-y-3">
				{#each entry.bullets as bullet}
					<li class="gap-3 text-sm leading-7 sm:text-base flex items-start text-foreground">
						<Check class="mt-1 size-4 shrink-0 text-foreground" />
						<span>{bullet}</span>
					</li>
				{/each}
			</ul>
		{/if}

		{#if entry.chips?.length}
			<div class="mt-5 gap-2 flex flex-wrap">
				{#each entry.chips as chip}
					<ChangelogChip {...chip} />
				{/each}
			</div>
		{/if}
	</div>
</article>
