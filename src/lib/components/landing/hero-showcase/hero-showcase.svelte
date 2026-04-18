<script lang="ts">
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import { dataBlocks } from "./config.ts";
</script>

<section>
	<div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-7 lg:px-8">
		<div class="grid grid-cols-1 gap-3.5 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
			{#each dataBlocks as block (block.slug)}
				{@const PreviewComponent = block.previewComponent}
				<a
					href={block.href}
					class="group relative block aspect-video rounded-xl border transition-all duration-200 hover:border-muted-foreground/40"
					aria-label={`${block.title} - ${block.countLabel}`}
				>
					<div class="relative h-full">
						<PreviewComponent title={block.title} description={block.description} countLabel={block.countLabel} />
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
