<script lang="ts">
	import { integration } from "$lib/config/blocks_main/integration";

	const block = integration.find((item) => item.title === "three");

	if (!block) {
		throw new Error("Missing preview block for three in integration");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
