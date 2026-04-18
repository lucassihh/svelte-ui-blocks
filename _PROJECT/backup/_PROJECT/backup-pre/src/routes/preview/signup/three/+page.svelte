<script lang="ts">
	import { signup } from "$lib/config/blocks_main/signup";

	const block = signup.find((item) => item.title === "three");

	if (!block) {
		throw new Error("Missing preview block for three in signup");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
