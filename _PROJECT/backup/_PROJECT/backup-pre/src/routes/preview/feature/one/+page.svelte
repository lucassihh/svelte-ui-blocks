<script lang="ts">
	import { feature } from "$lib/config/blocks_main/features";

	const block = feature.find((item) => item.title === "one");

	if (!block) {
		throw new Error("Missing preview block for one in feature");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
