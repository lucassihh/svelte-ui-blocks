<script lang="ts">
	import { hero } from "$lib/config/blocks_main/hero";

	const block = hero.find((item) => item.title === "five");

	if (!block) {
		throw new Error("Missing preview block for five in hero");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
