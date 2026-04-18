<script lang="ts">
	import { integration } from "$lib/config/blocks_main/integration";

	const block = integration.find((item) => item.title === "five");

	if (!block) {
		throw new Error("Missing preview block for five in integration");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
