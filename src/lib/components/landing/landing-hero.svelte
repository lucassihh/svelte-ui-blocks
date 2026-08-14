<script lang="ts">
	// Icon
	import { ArrowRight, Rocket } from "@lucide/svelte";

	// UI
	import { Button } from "$lib/components/ui/button";
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import { DashedLine } from "$lib/components/ui/dashed-line";
	import { BorderSeparator } from "$lib/components/ui/border-seperator";
	import { DashedLines } from "$lib/components/ui/dashed-lines";

	// Hero ShowCase
	import HeroShowcase from "$lib/components/landing/hero-showcase/hero-showcase.svelte";
</script>

<section
	class="m-4 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32 relative flex items-center justify-center border-b border-border/80"
	id="blocks"
>
	<div aria-hidden="true" class="inset-0 pointer-events-none absolute">
		<div
			class="blur-3xl absolute top-1/2 left-1/2 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--foreground)_12%,transparent)_0%,transparent_70%)]"
		></div>
		<div
			class="absolute inset-x-[0%] inset-y-[0%] bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--foreground)_6%,transparent)_0%,transparent_75%)] opacity-70"
		></div>
	</div>

	<DashedLines
		class="bottom-0 h-12 absolute mask-[linear-gradient(to_bottom,transparent,var(--muted-foreground),var(--muted-foreground))] stroke-muted-foreground/50 dark:stroke-muted-foreground/30"
	/>

	<DecorIcon class="size-4 z-40 bg-background stroke-muted-foreground/80" position="top-left" />
	<DecorIcon class="size-4 z-40 bg-background stroke-muted-foreground/80" position="top-right" />
	<DecorIcon class="size-4 z-40 bg-background stroke-muted-foreground/80" position="bottom-left" />
	<DecorIcon class="size-4 z-40 bg-background stroke-muted-foreground/80" position="bottom-right" />

	<div class=" relative z-10 mx-auto flex flex-col items-center text-center">
		<!-- Version -->
		<a
			class="group gap-3 py-1 pr-1 pl-3 shadow-lg backdrop-blur-lg mx-auto flex w-fit items-center rounded-full border bg-transparent"
			href="/blocks/efferd-ui/hero"
			id="link"
		>
			<Rocket class="size-3 text-muted-foreground" />
			<span class="text-sm font-mono">60 New Blocks</span>
			<span class="h-5 block border-l"></span>
			<span class="p-2 flex items-center justify-center rounded-full bg-background">
				<ArrowRight
					class="size-3 ease-out -rotate-45 rounded-full duration-150 group-hover:rotate-0"
				/>
			</span>
		</a>

		<!-- Hero Text -->
		<div class="gap-1 flex flex-col">
			<h1
				class="mt-8 max-w-4xl text-4xl font-semibold tracking-normal sm:text-5xl lg:text-6xl text-balance"
			>
				Svelte UI Blocks
			</h1>

			<p
				class="mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 text-pretty text-muted-foreground"
			>
				Save hours of design time with clean, ready-to-use shadcn blocks that just work, modern,
				responsive, and built for speed.
			</p>
		</div>

		<!-- Hero Buttons -->
		<div class="mt-8 gap-3 sm:flex-row flex flex-col items-center">
			<Button class="rounded-none" href="blocks/efferd-ui/hero" size="lg">
				<span>Explore</span>
			</Button>
		</div>
	</div>
</section>

<HeroShowcase />
