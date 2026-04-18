<script lang="ts">
	import { signup } from "$lib/config/blocks_main/signup";

	const block = signup.find((item) => item.title === "one");

	if (!block) {
		throw new Error("Missing preview block for one in signup");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
