<script lang="ts">
	import { hero } from "$lib/config/blocks_main/hero";

	const block = hero.find((item) => item.title === "seven");

	if (!block) {
		throw new Error("Missing preview block for seven in hero");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
