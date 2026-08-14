<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils";

	type ComponentProps = {
		class?: string;
		children?: Snippet;
		[prop: string]: unknown;
	};

	const { children, class: className = "", ...restProps }: ComponentProps = $props();
</script>

<ul
	{...restProps}
	class={cn(
		"mt-6 space-y-2 pl-6 text-base leading-relaxed [&>li]:pl-1 list-disc text-foreground/70",
		className
	)}
>
	{@render children?.()}
</ul>
