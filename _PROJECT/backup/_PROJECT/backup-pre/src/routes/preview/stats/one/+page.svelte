<script lang="ts">
	import { stats } from "$lib/config/blocks_main/stats";

	const block = stats.find((item) => item.title === "one");

	if (!block) {
		throw new Error("Missing preview block for one in stats");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
