<script lang="ts">
	import { DecorIcon } from "$lib/components/ui/decor-icon";
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

<div
	class={cn(
		"gap-6 px-6 pt-8 pb-6 shadow-xs relative flex flex-col justify-between bg-background",
		"dark:bg-[radial-gradient(50%_80%_at_25%_0%,--theme(--color-foreground/.1),transparent)]",
		className
	)}
	{...props}
>
	<div class="-inset-y-4 absolute -left-px w-px bg-border"></div>
	<div class="-inset-y-4 absolute -right-px w-px bg-border"></div>
	<div class="-inset-x-4 absolute -top-px h-px bg-border"></div>
	<div class="-right-4 -left-4 absolute -bottom-px h-px bg-border"></div>

	<DecorIcon class="size-3.5" position="top-left" />

	<div
		class={cn(
			"p-3 relative z-10 flex w-fit items-center justify-center rounded-lg border bg-muted/20",
			"[&_svg]:size-5 [&_svg]:stroke-[1.5] [&_svg]:text-foreground"
		)}
	>
		<FeatureIcon />
	</div>

	<div class="space-y-2 relative z-10">
		<h3 class="text-base font-medium text-foreground">{feature.title}</h3>
		<p class="text-xs leading-relaxed text-muted-foreground">{feature.description}</p>
	</div>
</div>
