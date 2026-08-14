<script lang="ts">
	import { Command as CommandPrimitive } from "bits-ui";
	import SearchIcon from "@lucide/svelte/icons/search";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		value = $bindable(""),
		...restProps
	}: CommandPrimitive.InputProps = $props();
</script>

<div class="h-9 gap-2 ps-3 pe-8 flex items-center border-b" data-slot="command-input-wrapper">
	<SearchIcon class="size-4 shrink-0 opacity-50" />
	<CommandPrimitive.Input
		data-slot="command-input"
		class={cn(
			"h-10 py-3 text-sm flex w-full rounded-md bg-transparent outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
			className
		)}
		bind:ref
		{...restProps}
		bind:value
	/>
</div>
