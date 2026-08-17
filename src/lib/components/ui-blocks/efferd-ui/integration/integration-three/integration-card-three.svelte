<script lang="ts">
	import { cn } from "$lib/utils";

	type Logo = {
		src: string;
		alt: string;
	};

	type Props = {
		row: number;
		col: number;
		logo?: Logo;
	};

	let { row, col, logo }: Props = $props();
</script>

<div
	class={cn("size-16 absolute flex items-center justify-center", logo && "bg-secondary/40")}
	style:left={`${col * 64}px`}
	style:top={`${row * 64}px`}
>
	{#if logo}
		<img
			alt={logo.alt}
			class="size-8 p-1 pointer-events-none object-contain select-none dark:invert"
			height="40"
			src={logo.src}
			width="40"
		/>
	{/if}
</div>
