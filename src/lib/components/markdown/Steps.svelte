<script lang="ts">
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";

	let { class: className, children } = $props<{
		class?: string;
		children?: Snippet;
	}>();
</script>

<div class={cn("relative mb-12 ml-0 [counter-reset:step]", className)}>
	{@render children?.()}
</div>
