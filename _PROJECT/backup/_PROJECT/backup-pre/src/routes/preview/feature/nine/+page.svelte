<script lang="ts">
	import { feature } from "$lib/config/blocks_main/features";

	const block = feature.find((item) => item.title === "nine");

	if (!block) {
		throw new Error("Missing preview block for nine in feature");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
