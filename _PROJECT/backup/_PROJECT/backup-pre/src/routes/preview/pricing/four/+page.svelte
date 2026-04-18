<script lang="ts">
	import { pricing } from "$lib/config/blocks_main/pricing";

	const block = pricing.find((item) => item.title === "four");

	if (!block) {
		throw new Error("Missing preview block for four in pricing");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
