<script lang="ts">
	import { signup } from "$lib/config/blocks_main/signup";

	const block = signup.find((item) => item.title === "two");

	if (!block) {
		throw new Error("Missing preview block for two in signup");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
