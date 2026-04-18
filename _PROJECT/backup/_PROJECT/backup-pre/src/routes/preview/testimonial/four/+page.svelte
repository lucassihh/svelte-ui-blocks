<script lang="ts">
	import { testimonials } from "$lib/config/blocks_main/testimonial";

	const block = testimonials.find((item) => item.title === "four");

	if (!block) {
		throw new Error("Missing preview block for four in testimonials");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
