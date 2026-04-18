<script lang="ts">
	import { integration } from "$lib/config/blocks_main/integration";

	const block = integration.find((item) => item.title === "seven");

	if (!block) {
		throw new Error("Missing preview block for seven in integration");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
