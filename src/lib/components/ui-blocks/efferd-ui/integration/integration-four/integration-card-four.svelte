<script lang="ts">
	import { cn } from "$lib/utils";

	type LogoType = {
		src: string;
		alt: string;
		isInvertable?: boolean;
	};

	type Props = {
		row: number;
		col: number;
		logo?: LogoType;
	};

	let { row, col, logo }: Props = $props();
</script>

<div
	class={cn(
		"size-18 absolute flex items-center justify-center rounded-md border",
		logo ? "shadow-xs bg-card dark:bg-card/60" : "bg-secondary/30 dark:bg-background"
	)}
	style:left={`${col * 72}px`}
	style:top={`${row * 72}px`}
>
	{#if logo}
		<img
			alt={logo.alt}
			class={cn(
				"size-8 p-1 pointer-events-none object-contain select-none",
				logo.isInvertable && "dark:invert"
			)}
			height="40"
			src={logo.src}
			width="40"
		/>
	{/if}
</div>
