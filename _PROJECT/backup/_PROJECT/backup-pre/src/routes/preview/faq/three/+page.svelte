<script lang="ts">
	import { faq } from "$lib/config/blocks_main/faq";

	const block = faq.find((item) => item.title === "three");

	if (!block) {
		throw new Error("Missing preview block for three in faq");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
