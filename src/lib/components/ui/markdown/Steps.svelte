<script lang="ts">
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";

	let { class: className, children } = $props<{
		class?: string;
		children?: Snippet;
	}>();
</script>

<div class={cn("m-0 mb-12 relative [counter-reset:step]", className)}>
	{@render children?.()}
</div>
