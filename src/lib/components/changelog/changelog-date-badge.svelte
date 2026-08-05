<script lang="ts">
	// Hooks & Other
	import { cn } from "$lib/utils";

	// Props Types
	type ChangelogDateBadgeProps = {
		date: string;
		class?: string;
	};

	// Props
	let { date, class: className }: ChangelogDateBadgeProps = $props();
</script>

<div
	class={cn(
		"inline-flex w-fit items-center rounded-none border border-border/80 bg-secondary px-3 py-1.5 text-sm font-medium text-foreground shadow-none dark:bg-secondary/30",
		className
	)}
>
	{date}
</div>
