<script lang="ts">
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";

	type ComponentProps = {
		class?: string;
		children?: Snippet;
		[prop: string]: unknown;
	};

	const { children, class: className = "", ...restProps }: ComponentProps = $props();
</script>

<blockquote
	{...restProps}
	class={cn(
		"mt-6 px-5 py-3 text-sm shadow-sm rounded-xl border border-border bg-card text-foreground/70 italic",
		className
	)}
>
	{@render children?.()}
</blockquote>
