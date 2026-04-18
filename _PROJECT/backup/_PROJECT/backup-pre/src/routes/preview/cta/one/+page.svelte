<script lang="ts">
	import { cta } from "$lib/config/blocks_main/cta";

	const block = cta.find((item) => item.title === "one");

	if (!block) {
		throw new Error("Missing preview block for one in cta");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
