<script lang="ts">
	import { FullWidthDivider } from "$lib/components/ui/full-width-divider";
	import { cn } from "$lib/utils";
	import { ActivityIcon, GlobeIcon, ShieldCheckIcon, ZapIcon, type Icon } from "@lucide/svelte";

	type Feature = {
		title: string;
		icon: typeof Icon;
		description: string;
	};

	const features: Feature[] = [
		{
			title: "Lightning Fast",
			icon: ZapIcon,
			description: "Blazing fast performance with edge network optimizations."
		},
		{
			title: "Secure by Design",
			icon: ShieldCheckIcon,
			description: "Enterprise-grade security, zero configuration required."
		},
		{
			title: "Real-time Sync",
			icon: ActivityIcon,
			description: "Real-time data sync across all devices efficiently."
		},
		{
			title: "Global Scale",
			icon: GlobeIcon,
			description: "Instant global deployment to 35+ regions worldwide."
		}
	];
</script>

<div class="max-w-5xl space-y-12 py-4 mx-auto min-h-screen w-full place-content-center border-x">
	<div class="md:grid-cols-2 lg:grid-cols-4 relative grid grid-cols-1 gap-px bg-border">
		<FullWidthDivider position="top" />

		{#each features as feature (feature.title)}
			{@const FeatureIcon = feature.icon}
			<div
				class={cn(
					"p-4 md:p-6 relative flex flex-col justify-between overflow-hidden bg-background"
				)}
			>
				<div class="pt-4 pb-6 [&_svg]:size-5 relative z-10 flex items-center [&_svg]:text-primary">
					<FeatureIcon />
				</div>

				<div class="space-y-2 relative z-10">
					<h3 class="text-lg font-medium text-foreground">{feature.title}</h3>
					<p class="text-xs leading-relaxed text-muted-foreground">
						{feature.description}
					</p>
				</div>
			</div>
		{/each}

		<FullWidthDivider position="bottom" />
	</div>
</div>
