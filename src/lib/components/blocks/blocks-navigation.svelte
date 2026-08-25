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
	const library = $derived(
		(page.url.pathname.split("/")[2] || "efferd-ui") as keyof typeof registry
	);

	// Get the selected category from the URL
	const currentCategory = $derived(page.url.pathname.split("/")[3] ?? "");

	// Generates categories dynamically from the selected registry
	const blockCategories = $derived.by(() => {
		const currentRegistry = registry[library] || registry["efferd-ui"];

		return Object.keys(currentRegistry).map((key) => ({
			slug: camelToKebab(key), // "logoCloud" -> "logo-cloud"
			label: formatLabel(key) // "logoCloud" -> "Logo Cloud"
		}));
	});

	const isActive = (slug: string) => currentCategory === slug;
</script>

<div
	class="sticky top-15 right-0 left-0 z-40 mx-auto w-full max-w-7xl border border-dashed bg-background/80 backdrop-blur-xs"
>
	<ScrollArea orientation="horizontal" fade={false} class="w-full" scrollbarXClasses="hidden">
		<nav class="mx-auto w-fit max-w-7xl">
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
							href={`/blocks/${library}/${category.slug}`}
							class={cn(
								"flex h-7 w-fit items-center rounded-sm px-1 text-[13px] text-nowrap text-muted-foreground transition-all duration-300 hover:text-foreground lg:-mx-2 lg:px-3 dark:text-muted-foreground",
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
