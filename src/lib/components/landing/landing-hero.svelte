<script lang="ts">
	// Icon
	import { ArrowRight, Rocket } from "@lucide/svelte";

	// UI
	import { LineShadowText } from "$lib/components/ui/magic-ui/line-shadow-text";
	import { mode } from "mode-watcher";
	import { StripedPattern } from "$lib/components/ui/magic-ui/striped-pattern";
	import { BlurFade } from "$lib/components/ui/magic-ui/blur-fade";
	import { Button } from "$lib/components/ui/button";
	import { BorderBeam } from "$lib/components/ui/magic-ui/border-beam";
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import { DashedLine } from "$lib/components/ui/dashed-line";
	import { BorderSeparator } from "$lib/components/ui/border-seperator";

	// Hero ShowCase Cards
	import AuthCard from "$lib/components/landing/showcase/AuthCard.svelte";
	import FeaturesCard from "$lib/components/landing/showcase/FeaturesCard.svelte";
	import FooterCard from "$lib/components/landing/showcase/FooterCard.svelte";
	import HeaderCard from "$lib/components/landing/showcase/HeaderCard.svelte";
	import HeroCard from "$lib/components/landing/showcase/HeroCard.svelte";
</script>

<section
	class="relative m-1 mx-2 flex items-center justify-center border-b border-border/80 p-4 py-10"
	id="blocks"
>
	<StripedPattern
		class="mask-[radial-gradient(300px_circle_at_center,white,transparent)] opacity-20"
	/>

	<div aria-hidden="true" class="pointer-events-none absolute inset-0">
		<div
			class="absolute top-1/2 left-1/2 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--foreground)_12%,transparent)_0%,transparent_70%)] blur-3xl"
		></div>
		<div
			class="absolute inset-x-[0%] inset-y-[0%] bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--foreground)_6%,transparent)_0%,transparent_75%)] opacity-70"
		></div>
	</div>

	<DecorIcon class="z-40 size-4 bg-background stroke-muted-foreground/80" position="top-left" />
	<DecorIcon class="z-40 size-4 bg-background stroke-muted-foreground/80" position="top-right" />
	<DecorIcon class="z-40 size-4 bg-background stroke-muted-foreground/80" position="bottom-left" />
	<DecorIcon class="z-40 size-4 bg-background stroke-muted-foreground/80" position="bottom-right" />

	<div class=" relative z-10 mx-auto flex flex-col items-center text-center">
		<!-- Hero Text -->
		<div class="flex flex-col gap-2">
			<h1
				class="text-5xl leading-none font-semibold tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl"
			>
				Svelte
				<LineShadowText
					content="UI"
					class="italic"
					shadowColor={mode.current === "dark" ? "white" : "black"}
				></LineShadowText>
			</h1>

			<p
				class="max-w-2xl text-base leading-7 text-pretty text-muted-foreground sm:text-lg sm:leading-8"
			>
				Save hours of design time with clean, ready-to-use shadcn blocks.
			</p>
		</div>

		<!-- Hero Buttons -->
		<div class="flex items-center gap-2">
			<!-- All Blocks Btn -->
			<a href="blocks/efferd/auth" class="mt-8 flex flex-col items-center gap-3 sm:flex-row">
				<Button variant="default">All Blocks</Button>
			</a>
			<!-- Documentation Btn -->
			<a href="documentation/" class="mt-8 flex flex-col items-center gap-3 sm:flex-row">
				<Button class="relative overflow-hidden dark:bg-card" size="lg" variant="outline">
					Documentation
					<BorderBeam
						size={40}
						initialOffset={20}
						class="from-card via-primary to-transparent"
						transition={{
							type: "spring",
							stiffness: 60,
							damping: 20
						}}
					/>
				</Button>
			</a>
		</div>
	</div>
</section>

<!-- Showcase Cards -->
<div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
	<BlurFade delay={0}>
		<HeroCard />
	</BlurFade>

	<BlurFade delay={0.1}>
		<HeaderCard />
	</BlurFade>

	<BlurFade delay={0.2}>
		<FooterCard />
	</BlurFade>

	<BlurFade delay={0.3}>
		<FeaturesCard />
	</BlurFade>

	<BlurFade delay={0.4}>
		<AuthCard />
	</BlurFade>
</div>
