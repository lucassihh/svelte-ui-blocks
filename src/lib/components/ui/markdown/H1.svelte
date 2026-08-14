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

<h1
	{...restProps}
	class={cn(
		"font-display scroll-m-20 text-3xl font-semibold tracking-tight sm:text-4xl text-foreground",
		className
	)}
>
	{@render children?.()}
</h1>
