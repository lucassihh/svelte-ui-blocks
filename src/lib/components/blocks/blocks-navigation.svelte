<script lang="ts">
	import { page } from "$app/state";
	import { registry } from "$lib/registry/index.ts";

	// UI
	import ScrollArea from "$lib/components/ui/scroll-area/scroll-area.svelte";

	// Hooks & Other
	import { cn } from "$lib/utils";
    
    // Logic to Read registry [ui-name] for nav links
    
	// Convert camelCase/kebab-case for slugs (URL), Example: myName -> my-name
	function camelToKebab(str: string) {
		return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
	}
    
    // Convert camelCase/kebab-case for Labels, Example: myName -> My Name
	function formatLabel(str: string) {
		// It handles specific exceptions
		// const customLabels: Record<string, string> = {
		//	faq: "FAQ",
		//	cta: "CTA"
		// };
		// if (customLabels[str.toLowerCase()]) return customLabels[str.toLowerCase()];

		return str
			.replace(/([A-Z])/g, " $1")
			.replace(/^./, (s) => s.toUpperCase())
			.trim();
	}

	// Identifies the current library (example: "efferd-ui")
	const library = $derived((page.url.pathname.split("/")[2] || "efferd-ui") as keyof typeof registry);

	// Get the selected category from the URL
	const currentCategory = $derived(page.url.pathname.split("/")[3] ?? "");

	// Generates categories dynamically from the selected registry
	const blockCategories = $derived.by(() => {
		const currentRegistry = registry[library] || registry["efferd-ui"];
		
		return Object.keys(currentRegistry).map((key) => ({
			slug: camelToKebab(key), // "logoCloud" -> "logo-cloud"
			label: formatLabel(key)   // "logoCloud" -> "Logo Cloud"
		}));
	});

	const isActive = (slug: string) => currentCategory === slug;
</script>


<div
	class="top-15 right-0 left-0 max-w-7xl backdrop-blur-xs sticky z-40 mx-auto w-full border-b border-dashed bg-background/80"
>
	<ScrollArea orientation="horizontal" fade={false} class="w-full" scrollbarXClasses="hidden">
		<nav class="max-w-7xl mx-auto w-fit">
			<ul
				class="h-12 gap-6 px-4 sm:px-6 lg:gap-4 relative flex min-w-max snap-x snap-mandatory items-center"
			>
				{#each blockCategories as category}
					<li
						class={cn(
							"flex h-full snap-start items-center border-b-2 border-transparent transition-all duration-300",
							isActive(category.slug) && "border-b border-primary/60"
						)}
					>
						<a
							href={`/blocks/${library}/${category.slug}`}
							class={cn(
								"h-7 px-1 lg:-mx-2 lg:px-3 flex w-fit items-center rounded-sm text-[13px] text-nowrap text-muted-foreground transition-all duration-300 hover:text-foreground dark:text-muted-foreground",
								isActive(category.slug) && "text-primary!"
							)}
						>
							<span class="block w-max text-nowrap capitalize">
								{category.label}
							</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</ScrollArea>
</div>
