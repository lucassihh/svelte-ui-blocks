<script lang="ts">
	import FlickeringGrid from "$lib/components/ui/magic-ui/flickering-grid/flickering-grid.svelte";
</script>

<div
	class="relative h-125 w-full overflow-hidden rounded-lg border border-border bg-background md:max-w-xl"
>
	<FlickeringGrid
		class="absolute inset-0 z-0 size-full"
		squareSize={4}
		gridGap={6}
		color="#6B7280"
		maxOpacity={0.5}
		flickerChance={0.1}
		height={800}
		width={800}
	/>
</div>
