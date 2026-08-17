<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";
	import type { LinkItemType } from "./types";
	import type { Component } from "svelte";
	import type { Icon } from "@lucide/svelte";

	type Props = LinkItemType & HTMLAttributes<HTMLAnchorElement>;
	let { label, description, icon, href, class: className, ...props }: Props = $props();

	// i have added Svelte Component, Lucide Icon so you can have custom-icon.svelte and lucide icon both
	let IconComponent: Component | typeof Icon = $derived(icon);
</script>

<a class={cn("gap-x-2 flex items-center", className)} {href} {...props}>
	<div
		class={cn(
			"size-9 shadow-xs [&_svg]:size-4 flex aspect-square items-center justify-center rounded-lg border bg-card outline outline-offset-2 outline-border/60 [&_svg]:text-foreground"
		)}
	>
		<IconComponent />
	</div>
	<div class="flex flex-col items-start justify-center">
		<span class="text-xs font-medium">{label}</span>
		<span class="line-clamp-1 text-[10px] text-muted-foreground">
			{description}
		</span>
	</div>
</a>
