<script lang="ts">
	import { CheckCircle2, type Icon as IconType } from "@lucide/svelte";
	import { Button, type ButtonVariant } from "$lib/components/ui/button";
	import { cn } from "$lib/utils";
	import type { Component } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type PricingCardProps = HTMLAttributes<HTMLDivElement> & {
		icon: typeof IconType | Component;
		name: string;
		price: string;
		description: string;
		features: string[];
		period?: string;
		original?: string;
		badge?: string;
		href?: string;
		featured?: boolean;
		buttonLabel?: string;
		buttonVariant?: Extract<ButtonVariant, "default" | "outline">;
	};

	let {
		icon,
		name,
		price,
		description,
		features,
		period,
		original,
		badge,
		href = "/",
		featured = false,
		buttonLabel = "Get Started",
		buttonVariant = "outline",
		class: className,
		...restProps
	}: PricingCardProps = $props();
	let Icon = $derived(icon);
</script>

<div
	class={cn("max-w-xs p-1 relative w-full rounded-xl border bg-background", className)}
	{...restProps}
>
	<!-- {@const Icon = icon} -->

	<div class={cn("mb-4 p-4 relative rounded-xl border", featured && "shadow-xs bg-card")}>
		<div class="mb-8 flex items-center justify-between">
			<div class="gap-2 text-sm font-medium [&_svg:not([class*='size-'])]:size-4 flex items-center">
				<Icon />
				<span>{name}</span>
			</div>

			{#if badge}
				<span class="px-3 py-1 text-xs shadow-xs rounded-full border bg-background">{badge}</span>
			{/if}
		</div>

		<div class="mb-3 gap-1 flex items-end">
			<span class="text-3xl font-extrabold tracking-tight">{price}</span>

			{#if period}
				<span class="pb-1 text-sm text-muted-foreground">{period}</span>
			{/if}

			{#if original}
				<span class="text-lg ml-auto text-muted-foreground line-through">{original}</span>
			{/if}
		</div>

		<Button class="font-semibold w-full" {href} variant={buttonVariant}>
			{buttonLabel}
		</Button>
	</div>

	<div class="space-y-6 p-3">
		<p class="text-xs text-muted-foreground">{description}</p>

		<ul class="space-y-3">
			{#each features as feature}
				<li class="gap-3 text-xs flex items-start text-muted-foreground">
					<CheckCircle2 aria-hidden="true" class="size-4 text-foreground" />
					<span>{feature}</span>
				</li>
			{/each}
		</ul>
	</div>
</div>
