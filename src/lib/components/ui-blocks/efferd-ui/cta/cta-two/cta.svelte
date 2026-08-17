<script lang="ts">
	import { ArrowRightIcon } from "@lucide/svelte";
	import { Button } from "$lib/components/ui/button";
	import { FullWidthDivider } from "$lib/components/ui/full-width-divider";
</script>

<div class="max-w-3xl relative mx-auto flex w-full flex-col justify-between border-x">
	<FullWidthDivider position="top" />

	<div class="px-2 py-8 border-b">
		<h2 class="text-lg font-semibold md:text-2xl text-center">
			Plan the present. Build the future.
		</h2>
		<p class="text-sm md:text-base text-center text-balance text-muted-foreground">
			Start your journey today by clicking the button below.
		</p>
	</div>

	<div class="gap-2 p-4 flex items-center justify-center bg-secondary/80 dark:bg-secondary/40">
		<Button variant="outline">Contact Sales</Button>
		<Button>
			Get Started
			<ArrowRightIcon data-icon="inline-end" />
		</Button>
	</div>

	<FullWidthDivider position="bottom" />
</div>
