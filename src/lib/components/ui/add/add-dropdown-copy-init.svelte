<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import type { ComponentProps } from "svelte";
	import { useAddDropdownCopyInit } from "./add.svelte.js";
	import { mergeProps } from "bits-ui";
	import { cn } from "$lib/utils";

	let {
		class: className,
		...rest
	}: Omit<ComponentProps<typeof DropdownMenu.Item>, "onSelect"> = $props();

	const dropdownCopyInitState = useAddDropdownCopyInit();

	const mergedProps = $derived(mergeProps(rest, dropdownCopyInitState.props));
</script>

<DropdownMenu.Item class={cn("gap-1 flex flex-col place-items-start!", className)} {...mergedProps}>
	<span class="text-xs">
		{dropdownCopyInitState.root.initCommand}
	</span>
	<span class="text-xs text-start text-muted-foreground">Init registry</span>
</DropdownMenu.Item>
