<script lang="ts">
	import { login } from "$lib/config/blocks_main/login";

	const block = login.find((item) => item.title === "two");

	if (!block) {
		throw new Error("Missing preview block for two in login");
	}

	const PreviewComponent = block.component;
</script>

<PreviewComponent />
