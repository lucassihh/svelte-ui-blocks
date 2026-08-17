<script lang="ts">
	import { ArrowRight, PhoneCall } from "@lucide/svelte";
	import { Button } from "$lib/components/ui/button";
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import { FullWidthDivider } from "$lib/components/ui/full-width-divider";
</script>

<section>
	<div
		class="gap-5 px-4 py-12 md:px-4 md:py-24 lg:py-28 relative flex flex-col items-center justify-center"
	>
		<div aria-hidden="true" class="inset-0 absolute -z-10 size-full overflow-hidden">
			<div
				class="-inset-x-20 inset-y-0 absolute z-0 rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--foreground)_10%,transparent),transparent,transparent)] blur-[50px]"
			></div>
			<div
				class="inset-y-0 left-4 md:left-8 absolute w-px bg-linear-to-b from-transparent via-border to-border"
			></div>
			<div
				class="inset-y-0 right-4 md:right-8 absolute w-px bg-linear-to-b from-transparent via-border to-border"
			></div>
			<div
				class="inset-y-0 left-8 md:left-12 absolute w-px bg-linear-to-b from-transparent via-border/50 to-border/50"
			></div>
			<div
				class="inset-y-0 right-8 md:right-12 absolute w-px bg-linear-to-b from-transparent via-border/50 to-border/50"
			></div>
		</div>

		<a
			class="group animate-in gap-3 p-1 shadow ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in mx-auto flex w-fit items-center rounded-sm border bg-card transition-all delay-500 duration-500"
			href="/"
		>
			<div class="rounded-xs px-1.5 py-0.5 shadow-sm border bg-card">
				<p class="text-xs font-mono">NOW</p>
			</div>

			<span class="text-xs">accepting new client projects</span>
			<span class="h-5 block border-l"></span>

			<div class="pr-1">
				<ArrowRight
					class="size-3 -translate-x-0.5 ease-out group-hover:translate-x-0.5 duration-150"
				/>
			</div>
		</a>

		<h1
			class="max-w-2xl animate-in text-3xl ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in md:text-5xl lg:text-6xl text-center text-balance text-foreground delay-100 duration-500"
		>
			Building Digital Experiences That Drive Growth
		</h1>

		<p
			class="animate-in text-sm tracking-wider ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in sm:text-lg text-center text-muted-foreground delay-200 duration-500"
		>
			We help brands scale faster through design,
			<br />
			development and strategic execution.
		</p>

		<div
			class="animate-in gap-3 pt-2 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in flex w-fit items-center justify-center delay-300 duration-500"
		>
			<Button href="/" variant="outline">
				<PhoneCall class="size-4" />
				Book a Call
			</Button>
			<Button href="/">
				Get started
				<ArrowRight class="size-4" />
			</Button>
		</div>
	</div>

	<div class="relative">
		<DecorIcon class="size-4" position="top-left" />
		<DecorIcon class="size-4" position="top-right" />
		<DecorIcon class="size-4" position="bottom-left" />
		<DecorIcon class="size-4" position="bottom-right" />

		<FullWidthDivider class="-top-px" />
		<div class="*:aspect-video overflow-hidden *:pointer-events-none *:select-none">
			<img
				alt="light app screen"
				class="dark:hidden"
				height="auto"
				src="https://storage.efferd.com/screen/dashboard-light.webp"
				width="auto"
			/>
			<img
				alt="dark app screen"
				class="hidden dark:block"
				height="auto"
				src="https://storage.efferd.com/screen/dashboard-dark.webp"
				width="auto"
			/>
		</div>
		<FullWidthDivider class="-bottom-px" />
	</div>
</section>
