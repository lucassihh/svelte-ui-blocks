<script lang="ts">
	import { Check } from "@lucide/svelte";
	import { Button } from "$lib/components/ui/button";
	import { FullWidthDivider } from "$lib/components/ui/full-width-divider";

	type PricingPlan = {
		name: string;
		price: string;
		period?: string;
		description: string;
		href?: string;
		featuresTitle: string;
		features: string[];
		isPopular?: boolean;
	};

	const pricingPlans: PricingPlan[] = [
		{
			name: "STARTER",
			price: "Free",
			description: "For early-stage startups",
			featuresTitle: "FREE, FOREVER:",
			features: ["10 customers", "10 documents", "10 invoices", "Auto-updated taxes"],
			href: "/"
		},
		{
			name: "SCALE",
			isPopular: true,
			href: "/",
			price: "$8",
			period: "month",
			description: "For fast-growing teams",
			featuresTitle: "EVERYTHING IN STARTER, PLUS:",
			features: ["20 customers", "25 documents", "30 invoices", "Auto-updated taxes", "Cloud Sync"]
		}
	];
</script>

<section class="max-w-5xl py-4 mx-auto min-h-screen place-content-center border-x">
	<div class="relative">
		<FullWidthDivider position="top" />
		<FullWidthDivider position="bottom" />

		<div class="md:grid-cols-2 lg:grid-cols-4 grid grid-cols-1 gap-px bg-border">
			<div class="p-8 md:col-span-2 flex flex-col bg-background">
				<p class="mb-6 text-sm tracking-wider text-muted-foreground uppercase">PRICING</p>
				<h1 class="text-3xl leading-tight font-bold md:text-5xl">Pricing that doesn&apos;t suck</h1>
			</div>

			{#each pricingPlans as plan}
				<div class="*:px-4 *:py-6 flex flex-col bg-background">
					<div class="border-b">
						<p class="mb-6 text-sm tracking-wider text-muted-foreground uppercase">
							{plan.name}
						</p>

						<div class="mb-2 gap-2 flex items-baseline">
							<h2 class="text-4xl font-bold">{plan.price}</h2>
							{#if plan.period}
								<span class="text-xs text-muted-foreground">/ {plan.period}</span>
							{/if}
						</div>

						<p class="mb-8 line-clamp-1 text-muted-foreground">{plan.description}</p>

						<Button
							class="w-full"
							href={plan.href}
							variant={plan.isPopular ? "default" : "outline"}
						>
							Get started
						</Button>
					</div>

					<div class="space-y-3 text-sm text-muted-foreground">
						<p class="mb-6 text-xs uppercase">{plan.featuresTitle}</p>

						{#each plan.features as feature}
							<p class="gap-2 flex items-center text-foreground/80">
								<Check class="size-4" />
								{feature}
							</p>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
