<script lang="ts">
	import { cta } from "$lib/config/blocks_main/cta";

	const block = cta.find((item) => item.title === "two");

	if (!block) {
		throw new Error("Missing preview block for two in cta");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
