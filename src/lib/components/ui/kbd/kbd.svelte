<script lang="ts">
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>

<kbd
	bind:this={ref}
	data-slot="kbd"
	class={cn(
		"h-5 min-w-5 gap-1 px-1 text-xs font-medium pointer-events-none inline-flex w-fit items-center justify-center rounded-sm bg-muted font-sans text-muted-foreground select-none",
		"[&_svg:not([class*='size-'])]:size-3",
		"[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</kbd>
