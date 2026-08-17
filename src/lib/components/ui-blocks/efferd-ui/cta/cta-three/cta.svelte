<script lang="ts">
	import { ArrowRightIcon } from "@lucide/svelte";
	import { Button } from "$lib/components/ui/button";
	import { DecorIcon } from "$lib/components/ui/decor-icon";
</script>

<div
	class="max-w-3xl gap-y-4 px-4 py-8 relative mx-auto flex w-full flex-col justify-between border-y dark:bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)]"
>
	<DecorIcon class="size-4" position="top-left" />
	<DecorIcon class="size-4" position="top-right" />
	<DecorIcon class="size-4" position="bottom-left" />
	<DecorIcon class="size-4" position="bottom-right" />

	<div class="-inset-y-6 pointer-events-none absolute -left-px w-px border-l"></div>
	<div class="-inset-y-6 pointer-events-none absolute -right-px w-px border-r"></div>

	<div class="top-0 absolute left-1/2 -z-10 h-full border-l border-dashed"></div>

	<h2 class="text-xl font-semibold md:text-3xl text-center">Start for Free Today!</h2>
	<p class="text-sm font-medium md:text-base text-center text-balance text-muted-foreground">
		Begin your 6-day free trial today to fully explore and experience all the features and benefits
		we offer.
	</p>

	<div class="gap-2 flex items-center justify-center">
		<Button variant="outline">Contact Sales</Button>
		<Button>
			Get Started
			<ArrowRightIcon data-icon="inline-end" />
		</Button>
	</div>
</div>
