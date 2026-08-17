<script lang="ts">
	import { GridPattern } from "$lib/components/ui/grid-pattern";
	import { cn } from "$lib/utils";
	import type { Icon } from "@lucide/svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type Feature = {
		title: string;
		icon: typeof Icon;
		description: string;
	};

	type Props = HTMLAttributes<HTMLDivElement> & {
		feature: Feature;
	};

	let { feature, class: className, ...props }: Props = $props();
	let FeatureIcon: typeof Icon = $derived(feature.icon);
</script>

<div class={cn("p-6 relative overflow-hidden bg-background", className)} {...props}>
	<div
		class="top-0 -mt-2 -ml-20 pointer-events-none absolute left-1/2 size-full mask-[radial-gradient(farthest-side_at_top,white,transparent)]"
	>
		<GridPattern
			class="inset-0 absolute size-full stroke-foreground/20"
			height={40}
			width={40}
			x={20}
		/>
	</div>

	<div class="[&_svg]:size-6 [&_svg]:text-foreground/75">
		<FeatureIcon />
	</div>
	<h3 class="mt-10 text-sm md:text-base">{feature.title}</h3>
	<p class="mt-2 text-xs font-light relative z-20 text-muted-foreground">
		{feature.description}
	</p>
</div>
