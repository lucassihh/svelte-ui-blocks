<script lang="ts">
	import { feature } from "$lib/config/blocks_main/features";

	const block = feature.find((item) => item.title === "eleven");

	if (!block) {
		throw new Error("Missing preview block for eleven in feature");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
