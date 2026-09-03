<script lang="ts">
	import { PulsatingButton } from "$lib/components/ui/magic-ui/pulsating-button";
</script>

<div class="flex flex-wrap items-start justify-center gap-12">
	<div class="space-y-6">
		<p class="text-sm text-muted-foreground">Duration: 1.5s</p>
		<PulsatingButton variant="ring" distance="10px" duration="1.5s">
			Join Affiliate Program
		</PulsatingButton>
	</div>

	<div class="space-y-6">
		<p class="text-sm text-muted-foreground">Duration: 3s</p>
		<PulsatingButton variant="ring" distance="10px" duration="3s">
			Join Affiliate Program
		</PulsatingButton>
	</div>

	<div class="space-y-6">
		<p class="text-sm text-muted-foreground">Duration: 6s</p>
		<PulsatingButton variant="ring" distance="10px" duration="6s">
			Join Affiliate Program
		</PulsatingButton>
	</div>
</div>
