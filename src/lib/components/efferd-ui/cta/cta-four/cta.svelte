<script lang="ts">
	import { ArrowRightIcon, CreditCardIcon } from "@lucide/svelte";
	import { Button } from "$lib/components/ui/button";
</script>

<div
	class="max-w-3xl gap-y-6 rounded-4xl px-4 py-8 shadow-sm md:py-10 relative mx-auto flex w-full flex-col justify-between border bg-card dark:bg-card/50"
>
	<div class="space-y-2">
		<h2 class="text-lg font-semibold tracking-tight md:text-2xl text-center">
			Let your plans shape the future.
		</h2>
		<p class="text-sm md:text-base text-center text-balance text-muted-foreground">
			Start your free trial today. No credit card
			<CreditCardIcon class="size-4 inline-block" />
			required.
		</p>
	</div>

	<div class="gap-2 flex items-center justify-center">
		<Button class="shadow" variant="secondary">Contact Sales</Button>
		<Button class="shadow">
			Get Started
			<ArrowRightIcon data-icon="inline-end" />
		</Button>
	</div>
</div>
