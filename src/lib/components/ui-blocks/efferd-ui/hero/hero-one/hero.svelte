<script lang="ts">
	import { ArrowRight, PhoneCall, Rocket } from "@lucide/svelte";
	import { Button } from "$lib/components/ui/button";
</script>

<section class="-top-14 max-w-5xl px-4 relative mx-auto w-full">
	<div
		aria-hidden="true"
		class="inset-0 lg:block absolute isolate hidden overflow-hidden contain-strict"
	>
		<div
			class="inset-0 top-0 absolute isolate -z-20 bg-[radial-gradient(35%_80%_at_49%_0%,color-mix(in_oklab,var(--foreground)_8%,transparent),transparent)] contain-strict"
		></div>
	</div>

	<div
		aria-hidden="true"
		class="inset-0 max-w-5xl lg:block absolute mx-auto hidden min-h-screen w-full"
	>
		<div
			class="inset-y-0 left-0 absolute z-10 h-full w-px bg-foreground/15 [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]"
		></div>
		<div
			class="inset-y-0 right-0 absolute z-10 h-full w-px bg-foreground/15 [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]"
		></div>
	</div>

	<div class="gap-5 pt-46 pb-10 relative flex flex-col items-center justify-center">
		<div aria-hidden="true" class="inset-0 top-14 absolute -z-10 size-full overflow-hidden">
			<div
				class="inset-y-0 left-4 md:left-4 absolute w-px bg-linear-to-b from-transparent via-border to-border"
			></div>
			<div
				class="inset-y-0 right-4 md:right-4 absolute w-px bg-linear-to-b from-transparent via-border to-border"
			></div>
			<div
				class="inset-y-0 left-8 md:left-12 absolute w-px bg-linear-to-b from-transparent via-border/50 to-border/50"
			></div>
			<div
				class="inset-y-0 right-8 md:right-12 absolute w-px bg-linear-to-b from-transparent via-border/50 to-border/50"
			></div>
		</div>

		<a
			class="group animate-in gap-3 px-3 py-1 shadow ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in mx-auto flex w-fit items-center rounded-full border bg-card transition-all delay-500 duration-500"
			href="/"
		>
			<Rocket class="size-3 text-muted-foreground" />
			<span class="text-xs">shipped new features!</span>
			<span class="h-5 block border-l"></span>
			<ArrowRight class="size-3 ease-out group-hover:translate-x-1 duration-150" />
		</a>

		<h1
			class="animate-in text-4xl tracking-tight ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in md:text-5xl lg:text-6xl text-center text-balance delay-100 duration-500 [text-shadow:0_0_50px_color-mix(in_oklab,var(--foreground)_20%,transparent)]"
		>
			Building Teams Help
			<br />
			You Scale and Lead
		</h1>

		<p
			class="max-w-md animate-in text-base tracking-wider ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in sm:text-lg md:text-xl mx-auto text-center text-foreground/80 delay-200 duration-500"
		>
			Conecting you with world-class talent
			<br />
			to scale, innovate and lead
		</p>

		<div
			class="animate-in gap-3 pt-2 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in flex flex-row flex-wrap items-center justify-center delay-300 duration-500"
		>
			<Button class="rounded-full" href="/" size="lg" variant="secondary">
				<PhoneCall class="size-4" />
				Book a Call
			</Button>
			<Button class="rounded-full" href="/" size="lg">
				Get started
				<ArrowRight class="size-4" />
			</Button>
		</div>
	</div>
</section>
