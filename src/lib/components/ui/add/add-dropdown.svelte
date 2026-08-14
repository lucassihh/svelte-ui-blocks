<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { cn } from "$lib/utils.js";
	import ChevronDown from "@lucide/svelte/icons/chevron-down";
	import type { ComponentProps } from "svelte";

	let {
		children,
		class: className,
		...rest
	}: ComponentProps<typeof DropdownMenu.Trigger> = $props();
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger
		class={cn(
			"size-9 [&_svg]:size-3.5 flex items-center justify-center rounded-r-md transition-colors hover:bg-accent",
			className
		)}
		{...rest}
	>
		<ChevronDown />
	</DropdownMenu.Trigger>
	{@render children?.()}
</DropdownMenu.Root>
