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

<div
	class="mt-4 mb-10 shadow-sm relative w-full overflow-x-auto rounded-xl border border-border bg-card"
>
	<table {...restProps} class={cn("text-base [&_code]:text-sm w-full", className)}>
		{@render children?.()}
	</table>
</div>
