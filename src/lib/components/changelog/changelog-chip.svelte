<script lang="ts">
	// Hooks & Other
	import { cn } from "$lib/utils";

	// Icon
	import { ArrowUpRight } from "@lucide/svelte";

	// Data
	import type { ChangelogChip as ChangelogChipType } from "./data";

	// Props Types
	type ChangelogChipProps = ChangelogChipType & {
		class?: string;
	};

	// Props
	let { label, href, class: className }: ChangelogChipProps = $props();
</script>

<a
	class={cn(
		"gap-1.5 border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300 hover:border-emerald-400/30 hover:bg-emerald-500/15 hover:text-emerald-200 inline-flex items-center rounded-md border transition-colors",
		className
	)}
	{href}
>
	<span>{label}</span>
	<ArrowUpRight class="size-3" />
</a>
