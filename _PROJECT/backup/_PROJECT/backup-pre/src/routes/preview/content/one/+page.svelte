<script lang="ts">
	import { content } from "$lib/config/blocks_main/content";

	const block = content.find((item) => item.title === "one");

	if (!block) {
		throw new Error("Missing preview block for one in content");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
