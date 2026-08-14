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
			"size-9 text-sm shadow-sm flex aspect-square items-center justify-center rounded-md border bg-card",
			"[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='size-'])]:text-foreground"
		)}
	>
		<IconComponent />
	</div>
	<div class="flex flex-col items-start justify-center">
		<span class="font-medium">{label}</span>
		<span class="text-xs line-clamp-2 text-muted-foreground">
			{description}
		</span>
	</div>
</a>
