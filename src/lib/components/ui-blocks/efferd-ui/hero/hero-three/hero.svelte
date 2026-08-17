<script lang="ts">
	import { ArrowRight, PhoneCall } from "@lucide/svelte";
	import { Button } from "$lib/components/ui/button";
</script>

<section class="max-w-5xl pt-16 mx-auto w-full overflow-hidden">
	<div aria-hidden="true" class="inset-0 absolute size-full overflow-hidden">
		<div
			class="inset-0 absolute isolate -z-10 bg-[radial-gradient(20%_80%_at_20%_0%,color-mix(in_oklab,var(--foreground)_10%,transparent),transparent)]"
		></div>
	</div>

	<div class="max-w-2xl gap-5 px-4 relative z-10 flex flex-col">
		<a
			class="group animate-in gap-3 p-1 shadow-xs ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in flex w-fit items-center rounded-sm border bg-card transition-all delay-500 duration-500"
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
			class="animate-in text-4xl leading-tight font-medium ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in md:text-5xl text-balance text-foreground delay-100 duration-500"
		>
			Building Digital Experiences That Drive Growth
		</h1>

		<p
			class="animate-in text-sm tracking-wider ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in sm:text-lg md:text-xl text-muted-foreground delay-200 duration-500"
		>
			We help brands scale faster through design, development
			<br />
			and strategic execution.
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
		<div
			class="-inset-x-20 inset-y-0 absolute -translate-y-1/3 scale-120 rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--foreground)_10%,transparent),transparent,transparent)] blur-[50px]"
		></div>
		<div
			class="mt-8 -mr-56 animate-in px-2 ease-out fill-mode-backwards slide-in-from-bottom-5 fade-in sm:mt-12 sm:mr-0 md:mt-20 relative overflow-hidden [mask-image:linear-gradient(to_bottom,black_0%,black_60%,transparent_100%)] delay-100 duration-1000"
		>
			<div
				class="max-w-5xl p-2 shadow-xl inset-shadow-2xs dark:inset-shadow-xs relative mx-auto overflow-hidden rounded-lg border bg-background ring-1 ring-card inset-shadow-foreground/10 dark:inset-shadow-foreground/20"
			>
				<img
					alt="app screen"
					class="aspect-video z-2 rounded-lg border dark:hidden"
					height="1080"
					src="https://storage.efferd.com/screen/dashboard-light.webp"
					width="1920"
				/>
				<img
					alt="app screen"
					class="aspect-video hidden rounded-lg bg-background dark:block"
					height="1080"
					src="https://storage.efferd.com/screen/dashboard-dark.webp"
					width="1920"
				/>
			</div>
		</div>
	</div>
</section>
