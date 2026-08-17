<script lang="ts">
	import NumberFlow from "@number-flow/svelte";
	import { CircleCheck, Star } from "@lucide/svelte";
	import { AnimatePresence, createLayoutMotion } from "motion-sv";
	import FrequencyToggle from "./frequency-toggle.svelte";
	import { Button } from "$lib/components/ui/button";
	import { cn } from "$lib/utils";
	import type { FREQUENCY } from "./frequency-toggle.svelte";

	type Plan = {
		name: string;
		info: string;
		price: {
			monthly: number;
			yearly: number;
		};
		features: string[];
		btn: {
			text: string;
			href: string;
		};
		highlighted?: boolean;
	};

	type PlanBadge =
		| {
				id: "popular";
				label: string;
				variant: "neutral";
		  }
		| {
				id: "discount";
				label: string;
				variant: "primary";
		  };

	const plans: Plan[] = [
		{
			name: "Basic",
			info: "For most individuals",
			price: {
				monthly: 7,
				yearly: 6
			},
			features: [
				"Up to 3 Blog posts",
				"Up to 3 Transcriptions",
				"Up to 3 Posts stored",
				"Markdown support",
				"Community support",
				"AI powered suggestions"
			],
			btn: {
				text: "Start Your Free Trial",
				href: "/"
			}
		},
		{
			highlighted: true,
			name: "Pro",
			info: "For small businesses",
			price: {
				monthly: 17,
				yearly: 14
			},
			features: [
				"Up to 500 Blog Posts",
				"Up to 500 Transcriptions",
				"Up to 500 Posts stored",
				"Unlimited Markdown support",
				"SEO optimization tools",
				"Priority support",
				"AI powered suggestions"
			],
			btn: {
				text: "Get started",
				href: "/"
			}
		},
		{
			name: "Business",
			info: "For large organizations",
			price: {
				monthly: 49,
				yearly: 40
			},
			features: [
				"Unlimited Blog Posts",
				"Unlimited Transcriptions",
				"Unlimited Posts stored",
				"Unlimited Markdown support",
				"SEO optimization tools",
				"Priority support",
				"AI powered suggestions"
			],
			btn: {
				text: "Contact team",
				href: "/"
			}
		}
	];

	const layout = createLayoutMotion();

	let frequency = $state<FREQUENCY>("monthly");

	const setFrequency = layout.update.with((nextFrequency: FREQUENCY) => {
		frequency = nextFrequency;
	});

	function getDiscount(plan: Plan) {
		if (plan.price.monthly <= plan.price.yearly) {
			return 0;
		}

		return Math.round(((plan.price.monthly - plan.price.yearly) / plan.price.monthly) * 100);
	}

	function getBadges(plan: Plan, activeFrequency: FREQUENCY): PlanBadge[] {
		const badges: PlanBadge[] = [];

		if (plan.highlighted) {
			badges.push({
				id: "popular",
				label: "Popular",
				variant: "neutral"
			});
		}

		if (activeFrequency === "yearly") {
			const discount = getDiscount(plan);

			if (discount > 0) {
				badges.push({
					id: "discount",
					label: `${discount}% off`,
					variant: "primary"
				});
			}
		}

		return badges;
	}
</script>

<section class="space-y-7 p-4 flex w-full flex-col items-center justify-center">
	<div class="max-w-xl space-y-2 mx-auto">
		<h2
			class="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl lg:font-extrabold text-center"
		>
			Plans that Scale with You
		</h2>

		<p class="text-sm md:text-base text-center text-muted-foreground">
			Whether you&apos;re just starting out or growing fast, our flexible pricing has you covered
			with no hidden costs.
		</p>
	</div>

	<FrequencyToggle {frequency} {setFrequency} />

	<div class="max-w-4xl gap-6 md:grid-cols-3 mx-auto grid w-full grid-cols-1">
		{#each plans as plan (plan.name)}
			<div
				class={cn(
					"shadow-xs relative flex w-full flex-col overflow-hidden rounded-lg border",
					plan.highlighted && "scale-105"
				)}
			>
				<div class={cn("p-4 border-b", plan.highlighted && "bg-card dark:bg-card/80")}>
					<layout.div
						class="top-2 right-2 gap-2 absolute z-10 flex items-center"
						layout
						layoutDependency={frequency}
					>
						<AnimatePresence initial={false}>
							{#each getBadges(plan, frequency) as badge (badge.id)}
								<layout.div
									animate={{ opacity: 1, scale: 1, y: 0 }}
									class={cn(
										"gap-1 px-2 py-0.5 text-xs flex items-center rounded-md border",
										badge.variant === "primary"
											? "bg-primary text-primary-foreground"
											: "bg-background"
									)}
									exit={{ opacity: 0, scale: 0.95, y: -4 }}
									initial={{ opacity: 0, scale: 0.95, y: -4 }}
									layout
									transition={{ duration: badge.id === "popular" ? 0.1 : 0.15 }}
								>
									{#if badge.id === "popular"}
										<Star class="size-3 fill-current" />
									{/if}
									{badge.label}
								</layout.div>
							{/each}
						</AnimatePresence>
					</layout.div>

					<div class="text-lg font-medium">{plan.name}</div>
					<p class="text-sm font-normal text-muted-foreground">{plan.info}</p>

					<h3 class="mt-6 mb-1 gap-1 flex w-max items-end">
						<!-- tabular-nums text-3xl font-extrabold  -->
						<NumberFlow
							class="text-3xl font-extrabold [&::part(suffix)]:text-base [&::part(suffix)]:font-normal [&::part(suffix)]:text-muted-foreground"
							format={{
								style: "currency",
								currency: "USD",
								notation: "compact"
							}}
							suffix="/month"
							value={plan.price[frequency]}
						/>
					</h3>

					<p class="mb-2 text-xs font-normal text-muted-foreground">billed {frequency}</p>
				</div>

				<div
					class={cn(
						"space-y-3 px-4 pt-6 pb-8 text-sm text-muted-foreground",
						plan.highlighted && "bg-muted/10"
					)}
				>
					{#each plan.features as feature}
						<div class="gap-2 flex items-center">
							<CircleCheck class="size-3.5 text-foreground" />
							<p>{feature}</p>
						</div>
					{/each}
				</div>

				<div
					class={cn("p-3 mt-auto w-full border-t", plan.highlighted && "bg-card dark:bg-card/80")}
				>
					<Button
						class="w-full"
						href={plan.btn.href}
						variant={plan.highlighted ? "default" : "outline"}
					>
						{plan.btn.text}
					</Button>
				</div>
			</div>
		{/each}
	</div>
</section>
