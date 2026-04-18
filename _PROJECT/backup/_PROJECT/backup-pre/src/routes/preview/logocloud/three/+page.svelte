<script lang="ts">
	import { logocloud } from "$lib/config/blocks_main/logo-cloud";

	const block = logocloud.find((item) => item.title === "three");

	if (!block) {
		throw new Error("Missing preview block for three in logocloud");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
