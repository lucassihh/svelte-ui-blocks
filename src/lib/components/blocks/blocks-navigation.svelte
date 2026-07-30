<script lang="ts">
	import { page } from "$app/state";
	import { blockCategories } from "$lib/imports/categories";
	import ScrollArea from "$lib/components/ui/scroll-area/scroll-area.svelte";
	import { cn } from "$lib/utils";

	// Get namespace after blocks/
	const baseFolder = $derived(page.url.pathname.split("/")[2] || "efferd-ui");
	const basePath = $derived(`/blocks/${baseFolder}`);

	// active-link logic
	const isActive = (slug: string) => {
		return page.url.pathname === `${basePath}/${slug}`;
	};
</script>

<div
	class="absolute top-15 right-0 left-0 z-50 mx-auto w-full max-w-7xl border-b border-dashed bg-background/80 backdrop-blur-xs"
>
	<ScrollArea orientation="horizontal" fade={false} class="w-full" scrollbarXClasses="hidden">
		<div class="mx-auto w-fit max-w-7xl">
			<ul
				class="relative flex h-12 min-w-max snap-x snap-mandatory items-center gap-6 px-4 sm:px-6 lg:gap-4"
			>
				{#each blockCategories as category}
					<li
						class={cn(
							"flex h-full snap-start items-center border-b-2 border-transparent transition-all duration-300",
							isActive(category.slug) && "border-b border-primary/60"
						)}
					>
						<a
							href="{basePath}/{category.slug}"
							class={cn(
								isActive(category.slug) && "text-primary!",
								"flex h-7 w-fit items-center rounded-sm px-1 text-[13px] text-nowrap text-muted-foreground transition-all duration-300 hover:text-foreground lg:-mx-2 lg:px-3 dark:text-muted-foreground"
							)}
						>
							<span class="block w-max text-nowrap capitalize">{category.label}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</ScrollArea>
</div>
