<script lang="ts">
	import { content } from "$lib/config/blocks_main/content";

	const block = content.find((item) => item.title === "five");

	if (!block) {
		throw new Error("Missing preview block for five in content");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
