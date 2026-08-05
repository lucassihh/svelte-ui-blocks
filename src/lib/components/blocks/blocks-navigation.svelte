<script lang="ts">
	import { page } from "$app/state";

	// UI
	import ScrollArea from "$lib/components/ui/scroll-area/scroll-area.svelte";

	// Hooks & Other
	import { cn } from "$lib/utils";

	// blockCategories Types
	export type BlockCategory = {
		slug: string;
		label: string;
	};

	const blockCategories = [
		{ slug: "hero", label: "Hero" },
		{ slug: "header", label: "Header" },
		{ slug: "logo-cloud", label: "Logo Cloud" },
		{ slug: "features", label: "Features" },
		{ slug: "integrations", label: "Integrations" },
		{ slug: "testimonials", label: "Testimonials" },
		{ slug: "cta", label: "CTA" },
		{ slug: "pricing", label: "Pricing" },
		{ slug: "blog", label: "Blog" },
		{ slug: "auth", label: "Auth" },
		{ slug: "faqs", label: "FAQ's" },
		{ slug: "contact", label: "Contact" },
		{ slug: "footer", label: "Footer" },
		{ slug: "image-gallery", label: "Image Gallery" },
		{ slug: "not-found", label: "Not Found" }
	] as const satisfies readonly BlockCategory[];

	// Get ui folder (efferd-ui, magic-ui,)
	const library = $derived(page.url.pathname.split("/")[2] || "efferd-ui");

	// Get the component url /(hero, header, footer)
	const currentCategory = $derived(page.url.pathname.split("/")[3] ?? "");

	// Set activelink if the component url same as page slug
	const isActive = (slug: string) => currentCategory === slug;
</script>

<div
	class="sticky top-15 right-0 left-0 z-40 mx-auto w-full max-w-7xl border-b border-dashed bg-background/80 backdrop-blur-xs"
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
		</div>
	</ScrollArea>
</div>
