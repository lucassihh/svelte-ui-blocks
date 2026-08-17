<script lang="ts">
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	type DecorPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

	type Integration = {
		src: string;
		name: string;
		description: string;
		isInvertable?: boolean;
		decorPosition?: DecorPosition;
	};

	type Props = HTMLAttributes<HTMLDivElement> & {
		integration: Integration;
	};

	let { integration, class: className, ...props }: Props = $props();
</script>

<div
	class={cn(
		"gap-4 p-4 md:p-6 md:even:bg-background/75 relative flex flex-col items-start bg-background text-start",
		className
	)}
	{...props}
>
	<img
		alt={integration.name}
		class={cn(
			"size-8 pointer-events-none shrink-0 object-contain select-none",
			integration.isInvertable && "dark:invert"
		)}
		height="32"
		src={integration.src}
		width="32"
	/>

	<div class="space-y-1">
		<h3 class="font-semibold">{integration.name}</h3>
		<p class="text-xs md:text-sm text-muted-foreground">
			{integration.description}
		</p>
	</div>

	{#if integration.decorPosition}
		<DecorIcon position={integration.decorPosition} />
	{/if}
</div>
