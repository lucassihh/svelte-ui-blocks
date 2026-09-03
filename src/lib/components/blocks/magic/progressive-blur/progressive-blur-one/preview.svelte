<script>
	import { ProgressiveBlur } from "$lib/components/ui/magic-ui/progressive-blur";
	import { ScrollArea } from "$lib/components/ui/scroll-area";
</script>

<div class="relative w-full rounded-xl border border-border">
	<ScrollArea fadeEffect={false} class="relative h-100 overflow-hidden">
		<div class="flex flex-col gap-2 p-4">
			{#each { length: 20 } as _, index}
				<div
					class="flex h-20 w-full items-center justify-center rounded-xl border border-border bg-card"
				>
					{index}
				</div>
			{/each}
		</div>
		<ProgressiveBlur position="bottom" height="40%" />
	</ScrollArea>
</div>
