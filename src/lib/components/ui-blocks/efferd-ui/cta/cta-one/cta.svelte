<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { FullWidthDivider } from "$lib/components/ui/full-width-divider";
</script>

<div class="max-w-3xl md:flex-row relative mx-auto flex w-full flex-col justify-between border-x">
	<FullWidthDivider position="top" />

	<div class="p-4 md:border-b-0 border-b">
		<h2 class="text-lg font-bold md:text-left md:text-2xl text-center">
			Let your plans shape the future.
		</h2>
	</div>

	<div class="gap-2 p-4 md:border-l flex items-center justify-center">
		<Button variant="secondary">Contact Sales</Button>
		<Button>Get Started</Button>
	</div>

	<FullWidthDivider position="bottom" />
</div>
