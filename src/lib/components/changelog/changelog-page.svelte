<script lang="ts">
	// UI
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import { FullWidthDivider } from "$lib/components/ui/full-width-divider";
	import { StripedPattern } from "$lib/components/magic-ui/striped-pattern";

	// Local Imports
	import ChangelogCard from "./changelog-card.svelte";

	// Data
	import { changelogPageData } from "./data";

	const entries = [...changelogPageData.entries].sort((a, b) =>
		b.sortDate.localeCompare(a.sortDate)
	);
</script>

<section class="max-w-4xl p-4 pb-16 sm:pb-20 mx-auto w-full">
	<div class="relative border-x border-border/80">
		<DecorIcon class="size-4 stroke-muted-foreground/70" position="top-left" />
		<DecorIcon class="size-4 stroke-muted-foreground/70" position="top-right" />
		<DecorIcon class="size-4 stroke-muted-foreground/70" position="bottom-left" />
		<DecorIcon class="size-4 stroke-muted-foreground/70" position="bottom-right" />

		<div class="px-5 py-10 sm:px-8 sm:py-14 md:px-12 md:py-8 relative">
			<StripedPattern
				class="mask-[radial-gradient(400px_circle_at_right,white,transparent)] opacity-20"
			/>
			<div class="max-w-2xl mx-auto">
				<h1 class="text-3xl font-medium tracking-tight sm:text-3xl">
					{changelogPageData.title}
				</h1>
				<p
					class="mt-1 max-w-xl text-base leading-7 sm:text-base sm:leading-8 text-muted-foreground/70"
				>
					{changelogPageData.description}
				</p>
			</div>

			<FullWidthDivider
				class="-bottom-px [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] opacity-90 [-webkit-mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
				position="bottom"
			/>
		</div>

		<div>
			{#each entries as entry (entry.id)}
				<ChangelogCard {entry} class="border-b border-border/80" />
			{/each}
		</div>
	</div>
</section>
